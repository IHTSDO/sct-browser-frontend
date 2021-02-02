$(function() {
    $.extend($.fn.disableTextSelect = function() {
        return this.each(function() {
            $(this).mousedown(function() {
                return false;
            });
        });
    });
    $('.noSelect').disableTextSelect(); //No text selection on elements with a class of 'noSelect'
});

function conceptDetails(divElement, conceptId, options) {

    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }
    
    var panel = this;
    this.type = "concept-details";
    this.conceptId = conceptId;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    this.attributesPId = "";
    this.descsPId = "";
    this.relsPId = "";
    this.history = [];
    this.color = "white";
    panel.preferred = false;
    panel.acceptable = false;
    panel.included = false;
    panel.refset = {};
    panel.refset.simple = false;
    panel.refset.simplemap = false;
    panel.refset.attr = false;
    panel.refset.assoc = false;
    this.lastGroup = null;
    this.subscription = null;
    var xhr = null;
    var xhrChildren = null;
    var xhrReferences = null;
    var xhrParents = null;
    var xhrMembers = null;
    var xhrRefsets = null;    
    var conceptRequested = 0;
    panel.subscriptionsColor = [];
    panel.subscriptions = [];
    panel.subscribers = [];
    panel.server = "";
    this.panelRefsetsLoaded = false;
    this.panelMembersLoaded = false;
    this.panelReferencesLoaded = false;
    this.panelDiagramLoaded = false;
    this.panelExpressionLoaded = false;
    this.firstMatch = null;

    if (options.serverUrl.includes('snowowl')){
        panel.server = 'snowowl';
    }
    else{
        panel.server = 'snowstorm';
    }

    componentLoaded = false;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == panel.divElement.id) {
            componentLoaded = true;
        }
    });
    if (componentLoaded == false) {
        componentsRegistry.push(panel);
    }


    this.getConceptId = function() {
        return this.conceptId;
    }

    this.getDivId = function() {
        return this.divId;
    }

    this.getNextMarkerColor = function(color) {
        //console.log(color);
        var returnColor = 'black';
        if (color == 'black') {
            returnColor = 'green';
        } else if (color == 'green') {
            returnColor = 'purple';
        } else if (color == 'purple') {
            returnColor = 'red';
        } else if (color == 'red') {
            returnColor = 'blue';
        } else if (color == 'blue') {
            returnColor = 'green';
        }
        //console.log(returnColor);
        globalMarkerColor = returnColor;
        return returnColor;
    }
    panel.markerColor = panel.getNextMarkerColor(globalMarkerColor);

    this.setupCanvas = function() {
        panel.attributesPId = panel.divElement.id + "-attributes-panel";
        panel.descsPId = panel.divElement.id + "-descriptions-panel";
        panel.relsPId = panel.divElement.id + "-rels-panel";
        panel.childrenPId = panel.divElement.id + "-children-panel";
        panel.defaultTerm = "";
        $(divElement).html();

        var context = {
            divElementId: panel.divElement.id,
            server: panel.server
        };       

        $(divElement).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/main.hbs"](context));

        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();

        $("#" + panel.divElement.id + "-expandButton").hide();
        
        if (!panel.options.languageRefsets || panel.options.languageRefsets.length === 0) {
            $("#" + panel.divElement.id + "-configButton").attr("disabled", true);
        }
        
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id + "-closeButton").click(function(event) {
            $(divElement).remove();
        });

        $("#" + panel.divElement.id + "-configButton").click(function(event) {
            panel.setupOptionsPanel();
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }
        if (typeof panel.options.subscribersMarker != "undefined" && panel.options.subscribersMarker == false) {
            $("#" + panel.divElement.id + "-subscribersMarker").remove();
        }

        if (typeof panel.options.collapseButton != "undefined" && panel.options.collapseButton == false) {
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        }

        $("#" + panel.divElement.id + "-expandButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideDown("fast");
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").show();
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details</strong>");
        });

        $("#" + panel.divElement.id + "-collapseButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
            $("#" + panel.divElement.id + "-expandButton").show();
            $("#" + panel.divElement.id + "-collapseButton").hide();            
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details: " + panel.defaultTerm + "</strong>");            
        });

        $('#' + panel.divElement.id).click(function(event) {
            if (!$(event.target).hasClass('glyphicon')) {
                $('#' + panel.divElement.id).find('.more-fields-button').popover('hide');
            }
        });

        $("#" + panel.divElement.id + "-historyButton").click(function(event) {
            $("#" + panel.divElement.id + "-historyButton").popover({
                trigger: 'manual',
                placement: 'bottomRight',
                html: true,
                content: function() {
                    var historyHtml = '<div style="height:100px;overflow:auto;">';
                    historyHtml = historyHtml + '<table>';
                    var reversedHistory = panel.history.slice(0);
                    reversedHistory.reverse();
                    $.each(reversedHistory, function(i, field) {
                        var d = new Date();
                        var curTime = d.getTime();
                        var ago = curTime - field.time;
                        var agoString = "";
                        if (ago < (1000 * 60)) {
                            if (Math.round((ago / 1000)) == 1) {
                                agoString = Math.round((ago / 1000)) + ' second ago';
                            } else {
                                agoString = Math.round((ago / 1000)) + ' seconds ago';
                            }
                        } else if (ago < (1000 * 60 * 60)) {
                            if (Math.round((ago / 1000) / 60) == 1) {
                                agoString = Math.round((ago / 1000) / 60) + ' minute ago';
                            } else {
                                agoString = Math.round((ago / 1000) / 60) + ' minutes ago';
                            }
                        } else if (ago < (1000 * 60 * 60 * 60)) {
                            if (Math.round(((ago / 1000) / 60) / 60) == 1) {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hour ago';
                            } else {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hours ago';
                            }
                        }
                        historyHtml = historyHtml + '<tr><td><a href="javascript:void(0);" onclick="updateCD(\'' + panel.divElement.id + '\',' + field.conceptId + ');">' + field.defaultTerm + '</a>';
                        historyHtml = historyHtml + ' <span class="text-muted" style="font-size: 80%"><em>' + agoString + '<em></span>';
                        historyHtml = historyHtml + '</td></tr>';
                    });
                    historyHtml = historyHtml + '</table>';
                    historyHtml = historyHtml + '</div>';
                    return historyHtml;
                }
            });
            $("#" + panel.divElement.id + "-historyButton").popover('toggle');
        });

        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement: 'left',
            trigger: 'hover',
            title: i18n_panel_options,
            animation: true,
            delay: 1000
        });        
        $("#" + panel.divElement.id + "-historyButton").tooltip({
            placement: 'left',
            trigger: 'hover',
            title: i18n_history,
            animation: true,
            delay: 1000
        });        
        $("#" + panel.divElement.id + "-apply-button").click(function() {
            panel.readOptionsPanel();
            panel.updateCanvas('');
        });     
        
        if (typeof(Storage) !== "undefined") {            
            if (localStorage.getItem("conceptDetailOptions_displaySynonyms")) {
                panel.options.displaySynonyms = localStorage.getItem("conceptDetailOptions_displaySynonyms") === 'true';
            }
            if (localStorage.getItem("conceptDetailOptions_showIds")) {
                panel.options.showIds = localStorage.getItem("conceptDetailOptions_showIds") === 'true';
            }
            if (localStorage.getItem("conceptDetailOptions_displayInactiveDescriptions")) {
                panel.options.displayInactiveDescriptions = localStorage.getItem("conceptDetailOptions_displayInactiveDescriptions") === 'true';
            }
            if (localStorage.getItem("conceptDetailOptions_hideNotAcceptable")) {
                panel.options.hideNotAcceptable = localStorage.getItem("conceptDetailOptions_hideNotAcceptable") === 'true';
            }
            if (localStorage.getItem("conceptDetailOptions_diagrammingMarkupEnabled")) {
                panel.options.diagrammingMarkupEnabled = localStorage.getItem("conceptDetailOptions_diagrammingMarkupEnabled") === 'true';
            }
            if (localStorage.getItem("conceptDetailOptions_displayChildren")) {
                panel.options.displayChildren = localStorage.getItem("conceptDetailOptions_displayChildren") === 'true';
            }
            if (localStorage.getItem("conceptDetailOptions_selectedView")) {
                panel.options.selectedView = localStorage.getItem("conceptDetailOptions_selectedView") === 'stated' ? 'stated' : 'inferred';
            }
            if (localStorage.getItem("conceptDetailOptions_selectedLanguageRefset")) {
                var selectedLanguageRefset = JSON.parse(localStorage.getItem("conceptDetailOptions_selectedLanguageRefset"));
                if (selectedLanguageRefset && selectedLanguageRefset.hasOwnProperty(panel.options.editionShortname)) {
                    panel.options.defaultLanguageReferenceSets = selectedLanguageRefset[panel.options.editionShortname];
                }                
            }
        }

        panel.updateCanvas('');

        channel.publish(panel.divElement.id, {
            term: panel.term,
            module: panel.module,
            conceptId: panel.conceptId,
            source: panel.divElement.id
        });
        
        if (panel.subscriptions.length > 0 || panel.subscribers.length > 0) {
            $("#" + panel.divElement.id + "-subscribersMarker").show();
        }
        
        $("#" + panel.divElement.id + "-ownMarker").css('color', panel.markerColor);
    }

    this.updateCanvas = function(historyBranch) {
        $("#home-children-cant-" + panel.divElement.id).html("");
        $('.more-fields-button').popover('hide');
        if (conceptRequested == panel.conceptId) {
            return;
        }
        conceptRequested = panel.conceptId;
        panel.panelRefsetsLoaded = false;
        panel.panelMembersLoaded = false;
        panel.panelHistoryLoaded = false;
        panel.panelReferencesLoaded = false;
        panel.panelDiagramLoaded = false;
        panel.panelExpressionLoaded = false;
        panel.firstMatch = null;
        $("#home-children-" + panel.divElement.id + "-body").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.attributesPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-attributes-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.descsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.relsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-parents-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-roles-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.childrenPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $("#history-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#product-details-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");

        // load attributes
        if (xhr != null) {
            xhr.abort();
            xhr = null;
        }
        
        var branch = options.edition;
        
        if (historyBranch !== ''){
            branch = historyBranch;
        }
        else{
            $('#branchDisplay').html('');
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        
        if(!options.serverUrl.includes('snowowl')){
           $.ajaxSetup({
              headers : {
                'Accept-Language': options.languages
              }
            });
        }
        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        xhr = $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + panel.conceptId + "?descendantCountForm=" + panel.options.selectedView, function(result) {

        }).done(function(result) {
            setDefaultTerm(result);
            var pt = {};
            $.each(result.descriptions, function(i, description) {
                if (description.lang == options.defaultLanguage && description.active) {
                    $.each(description.acceptabilityMap, function(i, map){
                        if(map == "PREFERRED"){
                            pt = description;
                        }
                    })
                }
            });
            if(pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && result.fsn.lang != options.defaultLanguage){
                result.defaultTerm = pt.term;
            }
            else{
                result.defaultTerm = result.fsn.term;
            }
            var firstMatch = result;
            panel.firstMatch = result;
            xhr = null;
            panel.attributesPId = divElement.id + "-attributes-panel";
            panel.defaultTerm = firstMatch.defaultTerm;
            var d = new Date();
            var time = d.getTime();
            panel.history.push({ defaultTerm: firstMatch.defaultTerm, conceptId: firstMatch.conceptId, time: time });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('parseCS', function (search, replacement, string) {
                var str = string.split(search).join(replacement).toLowerCase();

                return str.charAt(0).toUpperCase() + str.slice(1);
            });
            panel.statedParents = [];
            panel.inferredParents = [];
            panel.statedRoles = [];
            panel.inferredRoles = [];
            panel.statedParentsFromAxioms = [];
            panel.attributesFromAxioms = [];

            firstMatch.relationships.forEach(function(loopRel) {
                if(loopRel.type.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && loopRel.type.fsn.lang != options.defaultLanguage){
                    loopRel.type.defaultTerm = loopRel.type.pt.term;
                }
                else{
                    loopRel.type.defaultTerm = loopRel.type.fsn.term;
                }
                if(loopRel.target.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && loopRel.target.fsn.lang != options.defaultLanguage){
                    loopRel.target.defaultTerm = loopRel.target.pt.term;
                }
                else{
                    loopRel.target.defaultTerm = loopRel.target.fsn.term;
                }
                if (loopRel.characteristicType == "INFERRED_RELATIONSHIP" && loopRel.active && loopRel.type.conceptId != "116680003") {
                    panel.inferredRoles.push(loopRel);
                }
                else if(loopRel.characteristicType == "INFERRED_RELATIONSHIP" && loopRel.active && loopRel.type.conceptId === "116680003"){
                    panel.inferredParents.push(loopRel);
                }
            });

            firstMatch.statedRelationships.forEach(function(loopRel) {
                if(loopRel.type.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && loopRel.type.fsn.lang != options.defaultLanguage){
                    loopRel.type.defaultTerm = loopRel.type.pt.term;
                }
                else{
                    loopRel.type.defaultTerm = loopRel.type.fsn.term;
                }
                if(loopRel.target.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && loopRel.target.fsn.lang != options.defaultLanguage){
                    loopRel.target.defaultTerm = loopRel.target.pt.term;
                }
                else{
                    loopRel.target.defaultTerm = loopRel.target.fsn.term;
                }
                if(loopRel.active == true){
                    firstMatch.statedActive = "true";
                }
                if(loopRel.characteristicType === "STATED_RELATIONSHIP" && loopRel.active && loopRel.type.conceptId != "116680003"){
                    panel.statedRoles.push(loopRel);
                }
                else if(loopRel.characteristicType === "STATED_RELATIONSHIP" && loopRel.active && loopRel.type.conceptId === "116680003") {
                    panel.statedParents.push(loopRel);
                }
            });

            function sortAxiomRelationships (relationships){
                relationships.sort(function(a, b) {
                    if (a.groupId < b.groupId) {
                        return -1;
                    } else if (a.groupId > b.groupId) {
                        return 1;
                    } else {
                        if (a.type.conceptId == 116680003) {
                            return -1;
                        }
                        if (b.type.conceptId == 116680003) {
                            return 1;
                        }
                        if (a.target.defaultTerm < b.target.defaultTerm)
                            return -1;
                        if (a.target.defaultTerm > b.target.defaultTerm)
                            return 1;
                        return 0;
                    }
                });
            };

            firstMatch.classAxioms = firstMatch.classAxioms.filter(function(axiom) { return axiom.active; });
            firstMatch.classAxioms.forEach(function(axiom) {
                axiom.clinicalFindingRelationships = true;

                if(axiom.active){
                    axiom.relationships.forEach(function(rel) {
                        if(rel.type.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && rel.type.fsn.lang != options.defaultLanguage){
                            rel.type.defaultTerm = rel.type.pt.term;
                        }
                        else{
                            rel.type.defaultTerm = rel.type.fsn.term;
                        }
                        if(rel.target.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && rel.target.fsn.lang != options.defaultLanguage){
                            rel.target.defaultTerm = rel.target.pt.term;
                        }
                        else{
                            rel.target.defaultTerm = rel.target.fsn.term;
                        }
                        if(rel.active && rel.type.conceptId === "116680003"){
                            rel.effectiveTime = axiom.effectiveTime;
                            panel.statedParentsFromAxioms.push(rel);
                        }
                        else if(rel.active){
                            rel.axiomId = axiom.axiomId;
                            rel.effectiveTime = axiom.effectiveTime;
                            panel.attributesFromAxioms.push(rel);
                        }
                        if(rel.active && rel.type.conceptId !== "116680003") {
                            axiom.clinicalFindingRelationships = false;
                        }
                    });
                }
                sortAxiomRelationships(axiom.relationships);
            });

            firstMatch.gciAxioms = firstMatch.gciAxioms.filter(function(axiom) { return axiom.active; });
            firstMatch.gciAxioms.forEach(function(axiom) {
                axiom.clinicalFindingRelationships = true;

                if(axiom.active){
                    axiom.relationships.forEach(function(rel) {
                        if(rel.type.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && rel.type.fsn.lang != options.defaultLanguage){
                            rel.type.defaultTerm = rel.type.pt.term;
                        }
                        else{
                            rel.type.defaultTerm = rel.type.fsn.term;
                        }
                        if(rel.target.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && rel.target.fsn.lang != options.defaultLanguage){
                            rel.target.defaultTerm = rel.target.pt.term;
                        }
                        else{
                            rel.target.defaultTerm = rel.target.fsn.term;
                        }
                        if(rel.active && rel.type.conceptId !== "116680003"){
                            rel.axiomId = axiom.axiomId;
                            rel.effectiveTime = axiom.effectiveTime;
                            panel.attributesFromAxioms.push(rel);
                        }
                        else if(rel.active){
                            rel.axiomId = axiom.axiomId;
                            rel.effectiveTime = axiom.effectiveTime;
                        }
                        if(rel.active && rel.type.conceptId !== "116680003") {
                            axiom.clinicalFindingRelationships = false;
                        }
                    });
                }
                sortAxiomRelationships(axiom.relationships);
            });

            if (firstMatch.statedDescendants) {
                firstMatch.statedDescendantsString = firstMatch.statedDescendants.toLocaleString();
            }
            if (firstMatch.inferredDescendants) {
                firstMatch.inferredDescendantsString = firstMatch.inferredDescendants.toLocaleString();
            }

            var context = {
                options: panel.options,
                firstMatch: firstMatch,
                divElementId: panel.divElement.id,
                edition: options.edition,
                release: options.release,
                server: options.serverUrl.substr(0, options.serverUrl.length - 10),
                langRefset: panel.options.languages,
                link: document.URL.split("?")[0].split("#")[0] + "?perspective=full&conceptId1=" + firstMatch.conceptId + "&edition=" + panel.options.edition + "&release=" + panel.options.release + "&languages=" + panel.options.languages,
                dataContentValue: document.URL.split("?")[0].split("#")[0],
                showIssueCollector: panel.options.communityBrowser || options.edition.startsWith('MAIN/SNOMEDCT-SE') ,
                issueCollectorButtonText: panel.options.communityBrowser ? 'Submit Feedback' : 'Skicka synonymförslag'
            };
            $('#' + panel.attributesPId).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/attributes-panel.hbs"](context));
            
            if (typeof result.descendantCount !== 'undefined') {
                var branch = options.edition;
        
                if (historyBranch){
                    branch = historyBranch;
                }
                else{
                    if(options.release.length > 0 && options.release !== 'None'){
                        branch = branch + "/" + options.release;
                    }
                }
                
                // get stated and inferred descendant count for concept detail tab
                $("#" + panel.divElement.id + "-statedDescendantCount").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                $("#" + panel.divElement.id+ "-inferredDescendantCount").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                
                $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + panel.conceptId + "?descendantCountForm=" + (panel.options.selectedView === "inferred" ? "stated" : "inferred"), function(respone) {            
                }).done(function(respone) {
                    if (panel.options.selectedView === "inferred") {
                        $("#" + panel.divElement.id + "-inferredDescendantCount").html(result.descendantCount);       
                        $("#" + panel.divElement.id + "-statedDescendantCount").html(respone.descendantCount);
                    }
                    else {
                        $("#" + panel.divElement.id + "-inferredDescendantCount").html(respone.descendantCount);       
                        $("#" + panel.divElement.id + "-statedDescendantCount").html(result.descendantCount);
                    }                            
                });                
            } 
            else {
                $("#" + panel.divElement.id + "-descendantInfor").hide();
            }          

            if (context.showIssueCollector) {               
                
                if( $('#' + panel.divElement.id + '-issues-collector').length != 0) {
                    $('#' + panel.divElement.id + '-issues-collector').remove();                   
                }

                var issueCollectorFrame = document.createElement('iframe');
                issueCollectorFrame.setAttribute('id', panel.divElement.id + '-issues-collector');
                issueCollectorFrame.setAttribute("style", "width: 100%;position: fixed;height: 100%;z-index: 0;display: none;");
                
                var firstChildAfterBody = document.body.firstChild;
                firstChildAfterBody.parentNode.insertBefore(issueCollectorFrame, firstChildAfterBody);
                
                var context = {                    
                    firstMatch: firstMatch,
                    divElementId: panel.divElement.id,
                    frameId: panel.divElement.id + '-issues-collector',
                    summary: (panel.options.communityBrowser ? 'Feedback For Concept: ' + firstMatch.defaultTerm + " | " + firstMatch.conceptId : 'Förslag på synonymer för begreppet: ' + firstMatch.conceptId),
                    issueCollectorUrl: (panel.options.communityBrowser ? 'https://jira.ihtsdotools.org/s/de395333f61d94e8d9c1df353d370114-T/-xa03ko/802005/fe47b4489ac981edbb824b5107716c37/3.0.7/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en&collectorId=8a01cd8f' :
                                                                        'https://jira.ihtsdotools.org/s/1e429f95cf34cfd3040da73ee0505926-T/-6fupcg/802003/fe47b4489ac981edbb824b5107716c37/3.0.7/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en&collectorId=bedcc164')
                };
                
                var issueCollectorFrameHtml = JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/issues-collector.hbs"](context);
                var blob = new Blob([issueCollectorFrameHtml], {type: 'text/html'});
                issueCollectorFrame.src = URL.createObjectURL(blob);

                $('#' + panel.divElement.id + '-addsyn-sctid-details').click(function(e) {                   
                    e.preventDefault();
                    var iframe = $('#' + panel.divElement.id + '-issues-collector');                    
                    if (iframe) {
                        $(iframe[0]).css({ "z-index": '10000',"display": 'block'});  
                        
                        var iframeContent = (iframe[0].contentWindow || iframe[0].contentDocument);
                        iframeContent.openJiraIssueCollectorDialog();
                    }
                });
            }            

            $('#' + 'share-link-' + panel.divElement.id).disableTextSelect();
            $('#' + 'share-link-' + panel.divElement.id).click(function(event) {
                setTimeout(function() {
                    $('#' + 'share-field-' + panel.divElement.id).select();
                }, 300);
            });


            // load home-attributes
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper("if_fav", function(concept, opts) {
                var favs = stringToArray(localStorage.getItem("favs"));
                var found = false;
                if (favs) {
                    $.each(favs, function(i, field) {
                        if (field == concept) {
                            found = true;
                        }
                    });
                    if (found) {
                        return opts.fn(this);
                    } else {
                        return opts.inverse(this);
                    }
                } else {
                    return opts.inverse(this);
                }
            });
            var context = {
                panel: panel,
                firstMatch: firstMatch,
                divElementId: panel.divElement.id,
                link: document.URL.split("?")[0].split("#")[0] + "?perspective=full&conceptId1=" + firstMatch.conceptId + "&edition=" + panel.options.edition + "&release=" + panel.options.release + "&languages=" + panel.options.languages + (typeof panel.options.latestRedirect !== 'undefined' ? '&latestRedirect=' + panel.options.latestRedirect : ''),
                server: panel.server
            };
            $('#home-attributes-' + panel.divElement.id).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/home/attributes.hbs"](context));

            // Update browser history
            if (!panel.options.disableHistoryStateChange) {
                var historyUrl = "?perspective=full&conceptId1=" + firstMatch.conceptId + "&edition=" + options.edition + "&release=" + options.release + "&languages=" + options.languages + (typeof panel.options.latestRedirect !== 'undefined' ? '&latestRedirect=' + panel.options.latestRedirect : '');
                manualStateChange = false;
                var state = {
                    name: firstMatch.defaultTerm,
                    conceptId: firstMatch.conceptId,
                    url: historyUrl
                };
                History.pushState(state, "SNOMED CT - " + firstMatch.defaultTerm, historyUrl);
            }            

            $(".glyphicon-star-empty").click(function(e) {
                var concept = {
                    module: firstMatch.module,
                    conceptId: firstMatch.conceptId,
                    defaultTerm: firstMatch.defaultTerm,
                    definitionStatus: firstMatch.definitionStatus
                };
                if ($(e.target).hasClass("glyphicon-star")) {
                    var favs = stringToArray(localStorage.getItem("favs")),
                        auxFavs = [];
                    $.each(favs, function(i, field) {
                        if (field != $(e.target).attr("data-conceptId")) {
                            auxFavs.push(field);
                        }
                    });
                    localStorage.setItem("favs", auxFavs);
                    localStorage.removeItem("conceptId:" + $(e.target).attr("data-conceptId"));
                    $(e.target).addClass("glyphicon-star-empty");
                    $(e.target).removeClass("glyphicon-star");                    
                } else {
                    var favs = stringToArray(localStorage.getItem("favs")),
                        auxFavs = [];
                    if (!favs) {
                        favs = [];
                        favs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", favs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    } else {
                        $.each(favs, function(i, field) {
                            if (field != $(e.target).attr("data-conceptId")) {
                                auxFavs.push(field);
                            }
                        });
                        auxFavs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", auxFavs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }
                    $(e.target).addClass("glyphicon-star");
                    $(e.target).removeClass("glyphicon-star-empty");
                }
                channel.publish("favsAction");
            });
          
            if (panel.clipboard) panel.clipboard.destroy();
            panel.clipboard = new Clipboard('.clip-btn');
            panel.clipboard.on('success', function(e) {
                alertEvent("Copied!", "info");
                e.clearSelection();
            });
            panel.clipboard.on('error', function(e) {
                console.log("Error!");
                alertEvent("Error", "error");
            });
           
            document.addEventListener("copy", copyHandler, false);

            function copyHandler(e) {
                if (window.getSelection().isCollapsed) {
                    if (e.srcElement && e.srcElement.value) {} else {
                        e.clipboardData.setData('text/plain', firstMatch.conceptId + " | " + firstMatch.defaultTerm + " |");
                        e.preventDefault();
                        alertEvent("Copied!", "info");
                    }
                }
            }

            $(".glyphicon-star").click(function(e) {
                var concept = {
                    module: firstMatch.module,
                    conceptId: firstMatch.conceptId,
                    defaultTerm: firstMatch.defaultTerm
                };
                if ($(e.target).hasClass("glyphicon-star")) {
                    var favs = stringToArray(localStorage.getItem("favs")),
                        auxFavs = [];
                    $.each(favs, function(i, field) {
                        if (field != $(e.target).attr("data-conceptId")) {
                            auxFavs.push(field);
                        }
                    });
                    localStorage.setItem("favs", auxFavs);
                    localStorage.removeItem("conceptId:" + $(e.target).attr("data-conceptId"));
                    $(e.target).addClass("glyphicon-star-empty");
                    $(e.target).removeClass("glyphicon-star");
                    //                            console.log("removed from favs");
                } else {
                    var favs = stringToArray(localStorage.getItem("favs")),
                        auxFavs = [];
                    if (!favs) {
                        favs = [];
                        favs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", favs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    } else {
                        $.each(favs, function(i, field) {
                            if (field != $(e.target).attr("data-conceptId")) {
                                auxFavs.push(field);
                            }
                        });
                        auxFavs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", auxFavs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }
                    $(e.target).addClass("glyphicon-star");
                    $(e.target).removeClass("glyphicon-star-empty");
                }
                channel.publish("favsAction");
            });

            if (!firstMatch.active) {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "LightPink");
            } else {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "#428bca");
            }

            if ($("#" + panel.divElement.id + "-expandButton").is(":visible")) {
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp;&nbsp;&nbsp;<strong>Concept Details: " + panel.defaultTerm + "</strong>");
            }            
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e) {
                //                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined") {
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

            // load descriptions panel
            panel.descsPId = divElement.id + "-descriptions-panel";

            if (panel.options.languageRefsets && panel.options.languageRefsets.length !== 0) {
                panel.renderDesriptionsPanel(firstMatch);
            }

            // load relationships panel and home parents/roles
            if (panel.options.selectedView == "stated") {
                $('#home-' + panel.divElement.id + '-stated-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').unbind();
                $('#details-' + panel.divElement.id + '-stated-button').unbind();
                $('#details-' + panel.divElement.id + '-inferred-button').unbind();
                $('#home-' + panel.divElement.id + '-stated-button').addClass("btn-primary");
                $('#home-' + panel.divElement.id + '-stated-button').removeClass("btn-default");
                $('#home-' + panel.divElement.id + '-inferred-button').addClass("btn-default");
                $('#home-' + panel.divElement.id + '-inferred-button').removeClass("btn-primary");
                $('#details-' + panel.divElement.id + '-stated-button').addClass("btn-primary");
                $('#details-' + panel.divElement.id + '-stated-button').removeClass("btn-default");
                $('#details-' + panel.divElement.id + '-inferred-button').addClass("btn-default");
                $('#details-' + panel.divElement.id + '-inferred-button').removeClass("btn-primary");
                $('#home-' + panel.divElement.id + '-inferred-button').click(function(event) {
                    panel.options.selectedView = "inferred";
                    if (typeof(Storage) !== "undefined") {          
                        localStorage.setItem("conceptDetailOptions_selectedView", panel.options.selectedView);
                    }                   
                    panel.updateCanvas('');
                });               
            } else {
                $('#home-' + panel.divElement.id + '-stated-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').addClass("btn-primary");
                $('#home-' + panel.divElement.id + '-inferred-button').removeClass("btn-default");
                $('#home-' + panel.divElement.id + '-stated-button').addClass("btn-default");
                $('#home-' + panel.divElement.id + '-stated-button').removeClass("btn-primary");
                $('#details-' + panel.divElement.id + '-stated-button').unbind();
                $('#details-' + panel.divElement.id + '-inferred-button').unbind();
                $('#details-' + panel.divElement.id + '-inferred-button').addClass("btn-primary");
                $('#details-' + panel.divElement.id + '-inferred-button').removeClass("btn-default");
                $('#details-' + panel.divElement.id + '-stated-button').addClass("btn-default");
                $('#details-' + panel.divElement.id + '-stated-button').removeClass("btn-primary");
                $('#home-' + panel.divElement.id + '-stated-button').click(function(event) {
                    panel.options.selectedView = "stated";
                    if (typeof(Storage) !== "undefined") {          
                        localStorage.setItem("conceptDetailOptions_selectedView", panel.options.selectedView);
                    }                    
                    panel.updateCanvas('');
                });                
            }

            panel.relsPId = divElement.id + "-rels-panel";

            if (firstMatch.relationships) {
                firstMatch.relationships.sort(function(a, b) {
                    if (a.groupId < b.groupId) {
                        return -1;
                    } else if (a.groupId > b.groupId) {
                        return 1;
                    } else {
                        if (a.type.conceptId == 116680003) {
                            return -1;
                        }
                        if (b.type.conceptId == 116680003) {
                            return 1;
                        }
                        if (a.target.defaultTerm < b.target.defaultTerm)
                            return -1;
                        if (a.target.defaultTerm > b.target.defaultTerm)
                            return 1;
                        return 0;
                    }
                });
            }

            if (firstMatch.statedRelationships) {
                firstMatch.statedRelationships.forEach(function(loopRel) {
                    if(loopRel.active == true){
                        firstMatch.statedActive = "true";
                    }
                });
                firstMatch.statedRelationships.sort(function(a, b) {
                    if (a.groupId < b.groupId) {
                        return -1;
                    } else if (a.groupId > b.groupId) {
                        return 1;
                    } else {
                        if (a.type.conceptId == 116680003) {
                            return -1;
                        }
                        if (b.type.conceptId == 116680003) {
                            return 1;
                        }
                        if (a.target.defaultTerm < b.target.defaultTerm)
                            return -1;
                        if (a.target.defaultTerm > b.target.defaultTerm)
                            return 1;
                        return 0;
                    }
                });
            }
            Handlebars.registerHelper('push', function(element, array) {
                array.push(element);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a, b, opts) {
                if (a) {
                    if (a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            var additionalRels;
            if (firstMatch.additionalRelationships) {
                $.each(firstMatch.additionalRelationships, function(i, looplr) {
                    if (looplr.active) {
                        if (typeof additionalRels == "undefined")
                            additionalRels = [];
                        additionalRels.push(looplr);
                    }
                });
            }
            var context = {
                options: panel.options,
                firstMatch: firstMatch,
                inferredParents: panel.inferredParents,
                inferredRoles: panel.inferredRoles,
                statedParents: panel.statedParents,
                statedRoles: panel.statedRoles,
                additionalRels: additionalRels,
                statedParentsFromAxioms: panel.statedParentsFromAxioms,
                attributesFromAxioms : panel.attributesFromAxioms,
                totalStatedAxioms : (firstMatch.classAxioms ? firstMatch.classAxioms.length : 0) + (firstMatch.gciAxioms ? firstMatch.gciAxioms.length : 0)
            };
            $("#" + panel.relsPId).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/rels-panel.hbs"](context));


            panel.inferredParents.sort(function(a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            panel.statedParents.sort(function(a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            panel.statedParentsFromAxioms.sort(function(a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            panel.attributesFromAxioms.sort(function(a, b) {
                if (a.target.axiomId < b.target.axiomId)
                    return -1;
                if (a.target.axiomId > b.target.axiomId)
                    return 1;
                return 0;
            });

            panel.inferredRoles.sort(function(a, b) {
                if (a.groupId < b.groupId) {
                    return -1;
                } else if (a.groupId > b.groupId) {
                    return 1;
                } else {
                    if (a.target.defaultTerm < b.target.defaultTerm)
                        return -1;
                    if (a.target.defaultTerm > b.target.defaultTerm)
                        return 1;
                    return 0;
                }
            });

            panel.statedRoles.sort(function(a, b) {
                if (a.groupId < b.groupId) {
                    return -1;
                } else if (a.groupId > b.groupId) {
                    return 1;
                } else {
                    if (a.target.defaultTerm < b.target.defaultTerm)
                        return -1;
                    if (a.target.defaultTerm > b.target.defaultTerm)
                        return 1;
                    return 0;
                }
            });

            Handlebars.registerHelper('substr', function(string, start) {
                var l = string.lastIndexOf("(") - 1;
                return string.substr(start, l);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a, b, opts) {
                if (a) {
                    var s = a.lastIndexOf("(");
                    if (s > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts) {
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
                        
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e) {
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined") {
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
            
            Handlebars.registerHelper('eqLastGroup', function(a, opts) {
                if (panel.lastGroup == null) {
                    panel.lastGroup = a;
                    return opts.fn(this);
                }
                if (a != panel.lastGroup)
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('removeSemtag', function(term) {
                return panel.removeSemtag(term);
            });
            Handlebars.registerHelper('setLastGroup', function(a) {
                panel.lastGroup = a;
            });
            Handlebars.registerHelper('lastColor', function(a) {
                if (a == "get") {
                    return "";
                } else {
                    if (a == "random") {
                        panel.color = getRandomColor();
                    } else {
                        panel.color = a;
                    }
                }
            });
            Handlebars.registerHelper('getRandomColor', function() {               
                return "";
            });
            var context = {
                options: panel.options,
                statedRoles: panel.statedRoles,
                inferredRoles: panel.inferredRoles,
                firstMatch: firstMatch,
                statedParentsFromAxioms: panel.statedParentsFromAxioms,
                attributesFromAxioms : panel.attributesFromAxioms
            };
            $('#home-roles-' + panel.divElement.id).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/home/roles.hbs"](context));

            if (!panel.options.diagrammingMarkupEnabled) {
                $('#home-roles-' + panel.divElement.id).html(panel.stripDiagrammingMarkup($('#home-roles-' + panel.divElement.id).html()));
            }


            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('refset', function(type, data, opts) {
                if (data == "get") {
                    if (panel.refset[type]) {
                        return opts.fn(this);
                    } else {
                        return opts.inverse(this);
                    }
                } else {
                    panel.refset[type] = data;
                }
            });
            
            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "diagram-tab") {
                drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options, panel);
                panel.panelDiagramLoaded = true;
            }
            else if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == (panel.divElement.id + "-history-tab")) {
                $('#history-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getHistory(firstMatch);
            }
            else if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "expression-tab") {
                $("#expression-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                setTimeout(function() {
                    renderExpression(firstMatch, firstMatch, $("#expression-canvas-" + panel.divElement.id), options);
                    panel.panelExpressionLoaded = true;
                }, 300);
            }
            else if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == (panel.divElement.id + "-refsets-tab")) {                
                $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getRefsets(firstMatch);
            }
            else if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "references-tab") {
                $("#references-" + panel.divElement.id + "-resultsTable").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getReferences(firstMatch.conceptId, historyBranch);
            }            
            else if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == (panel.divElement.id + "-members-tab")) {
                $("#members-" + panel.divElement.id + "-resultsTable").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");               
                panel.loadMembers(100, 0, 1, historyBranch);
            } 
            else {
                // do nothing
            }           

            $("#references-tab-link-" + panel.divElement.id).unbind();
            $("#references-tab-link-" + panel.divElement.id).click(function(e) {
                if (panel.panelReferencesLoaded) return;
                $("#references-" + panel.divElement.id + "-resultsTable").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getReferences(firstMatch.conceptId, historyBranch);
            });
            
            $("#diagram-tab-link-" + panel.divElement.id).unbind();
            $("#diagram-tab-link-" + panel.divElement.id).click(function(e) {
                if (panel.panelDiagramLoaded) return;
                $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options, panel);
                panel.panelDiagramLoaded = true;                
            });

            $("#refsets-tab-link-" + panel.divElement.id).unbind();
            $("#refsets-tab-link-" + panel.divElement.id).click(function(e) {
                if (panel.panelRefsetsLoaded) return;
                $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");             
                panel.getRefsets(firstMatch);
            });
            
            $("#history-tab-link-" + panel.divElement.id).unbind();
            $("#history-tab-link-" + panel.divElement.id).click(function(e) {
                if (panel.panelHistoryLoaded) return;  
                $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getHistory(firstMatch);
            });

            $("#members-tab-link-" + panel.divElement.id).unbind();
            $("#members-tab-link-" + panel.divElement.id).click(function(e) {
                if (panel.panelMembersLoaded) return;
                $("#members-" + panel.divElement.id + "-resultsTable").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");               
                panel.loadMembers(100, 0, 1, historyBranch);
            });

            $("#expression-tab-link-" + panel.divElement.id).unbind();
            $("#expression-tab-link-" + panel.divElement.id).click(function(e) {
                if (panel.panelExpressionLoaded) return;
                $("#expression-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                renderExpression(firstMatch, firstMatch, $("#expression-canvas-" + panel.divElement.id), options);
                panel.panelExpressionLoaded = true;
            });

            if (firstMatch.defaultTerm.endsWith("(clinical drug)")) {
                $("#product-details-tab").show();
                var productData = {
                    defaultTerm: firstMatch.defaultTerm,
                    forms: [],
                    groups: {},
                    ingredients: []
                };
                firstMatch.relationships.forEach(function(loopRel) {
                    if (loopRel.type.conceptId == "411116001" && loopRel.active) {
                        productData.forms.push(loopRel);
                    } else if (loopRel.active && loopRel.groupId != 0) {
                        if (typeof productData.groups[loopRel.groupId] == "undefined") {
                            productData.groups[loopRel.groupId] = [];
                        }
                        productData.groups[loopRel.groupId].push(loopRel);
                    }
                });
                Object.keys(productData.groups).forEach(function(loopKey) {
                    var loopGroup = productData.groups[loopKey];
                    var loopIngredient = {};
                    loopGroup.forEach(function(loopRel) {
                        //for or statements the first id is the updated CDI attribute
                        if (loopRel.type.conceptId == "127489000") {
                            loopIngredient.ingredient = loopRel.target;
                        } else if (loopRel.type.conceptId == "1142136003" || loopRel.type.conceptId == "1142137007" || loopRel.type.conceptId == "732946004" || loopRel.type.conceptId == "733723002") {
                            loopIngredient.denominatorValue = loopRel;
                        } else if (loopRel.type.conceptId == "1142135004" || loopRel.type.conceptId == "1142138002" || loopRel.type.conceptId == "732944001" || loopRel.type.conceptId == "733724008") {
                            loopIngredient.numeratorValue = loopRel;
                        } else if (loopRel.type.conceptId == "732943007") {
                            loopIngredient.boss = loopRel.target;
                        } else if (loopRel.type.conceptId == "732947008" || loopRel.type.conceptId == "733722007") {
                            loopIngredient.denominatorUnit = loopRel.target;
                        } else if (loopRel.type.conceptId == "732945000" || loopRel.type.conceptId == "733725009") {
                            loopIngredient.numeratorUnit = loopRel.target;
                        }
                    });
                    productData.ingredients.push(loopIngredient);
                   
                });                
                var context = {
                    productData: productData
                };
                $('#product-details-' + panel.divElement.id).html(
                    JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/product.hbs"](context));
                console.log(context.productData);
            } else {
                if ($("#product-details-tab").hasClass("active")) {
                    $('#details-tabs-' + panel.divElement.id + ' a:first').tab('show');
                }
                $("#product-details-tab").hide();
            }

            $('.more-fields-button').disableTextSelect();
            $('.more-fields-button').popover();

            //          firefox popover
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                $(".more-fields-button").optionsPopover({
                    contents: "",
                    disableBackButton: true
                });

                $(".more-fields-button").click(function(e) {
                    var auxHtml = $(e.target).attr('data-content');
                    $("#popoverContent").html(auxHtml);
                });
            }

            if (panel.options.selectedView == "stated") {
                $('#' + panel.relsPId).find('.inferred-rel').each(function(i, val) {
                    $(val).toggle();
                });
            } else if (panel.options.selectedView == "inferred") {
                $('#' + panel.relsPId).find('.stated-rel').each(function(i, val) {
                    $(val).toggle();
                });
            } else if (panel.options.selectedView != "all") {
                // show all
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e) {
                //                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined") {
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
           
            conceptRequested = 0;
        }).fail(function(xhr, textStatus, error) {
            $("#references-tab-link-" + panel.divElement.id).unbind();
            $("#diagram-tab-link-" + panel.divElement.id).unbind();
            $("#refsets-tab-link-" + panel.divElement.id).unbind();
            $("#members-tab-link-" + panel.divElement.id).unbind();
            $("#history-tab-link-" + panel.divElement.id).unbind();
            $("#expression-tab-link-" + panel.divElement.id).unbind();
            if (xhr && xhr.status === 404) {
                var release = null;
                if (options.releases) {
                    for (var i = 0; i < options.releases.items.length; i++) {
                        if (options.releases.items[i].branchPath == options.edition
                            || (options.releases.items[i].latestVersion && options.releases.items[i].latestVersion.branchPath == options.edition)) {
                            release = options.releases.items[i];
                            break;
                        }
                    }
                }                
                $("#home-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");                
                $("#diagram-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");
                $("#members-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");
                $("#references-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");
                $("#refsets-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");
                $("#expression-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");
                $('#' + panel.attributesPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_concept_not_found'>Concept not found</span><span>" + (release != null ? " in " + release.name : "") + "</span></div>");
                $('#' + panel.descsPId).html("");
                $('#' + panel.relsPId).html("");
            } else if (textStatus !== 'abort') {               
                $("#home-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#diagram-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#members-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#references-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#refsets-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $("#expression-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $('#' + panel.attributesPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
                $('#' + panel.descsPId).html("");
                $('#' + panel.relsPId).html("");
            } else {
                // do nothing
            }
        });      
                
        var branch = options.edition;
        
        if (historyBranch){
            branch = historyBranch;
        }
        else{
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        if(!options.serverUrl.includes('snowowl')){
           $.ajaxSetup({
              headers : {
                'Accept-Language': options.languages
              }
            });
        };

        if (xhrParents != null) {
            xhrParents.abort();
            xhrParents = null;
        };

        xhrParents = $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + panel.conceptId + "/parents?form=" + panel.options.selectedView, function(result) {            
        }).done(function(result) {
            result.forEach(function(c) {
                if(c.pt && c.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && c.fsn.lang != options.defaultLanguage){
                    c.defaultTerm = c.pt.term;
                }
                else{
                    c.defaultTerm = c.fsn.term;
                }
            });
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });

            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts) {
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            var context = {
                divElementId: panel.divElement.id,                    
                statedParents: panel.options.selectedView === 'stated' ? result : [],
                inferredParents: panel.options.selectedView === 'inferred' ? result : [],
                options: panel.options
            };

            $('#home-parents-' + panel.divElement.id).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/home/parents.hbs"](context));
            if (!panel.options.diagrammingMarkupEnabled) {                   
                $('#home-parents-' + panel.divElement.id).html(panel.stripDiagrammingMarkup($('#home-parents-' + panel.divElement.id).html()));
            }

            $("#home-parents-" + panel.divElement.id).unbind();
            $("#home-parents-" + panel.divElement.id).click(function(event) {
                if ($(event.target).hasClass("treeButton")) {
                    var ev = event.target;
                    //firefox issue!
                    if (navigator.userAgent.indexOf("Firefox") > -1) {
                        ev = $(ev).context.children;
                    }
                    var conceptId = $(ev).closest("li").attr('data-concept-id');
                    event.preventDefault();
                    if ($(ev).hasClass("glyphicon-chevron-up")) {
                        $(ev).closest("li").find("ul").remove();
                        $(ev).removeClass("glyphicon-chevron-up");
                        $(ev).addClass("glyphicon-chevron-right");
                    } else if ($(ev).hasClass("glyphicon-chevron-right")) {
                        $(ev).removeClass("glyphicon-chevron-right");
                        $(ev).addClass("glyphicon-refresh");
                        $(ev).addClass("icon-spin");
                        panel.getParent(conceptId, ev, historyBranch);
                    } else if ($(ev).hasClass("glyphicon-minus")) {                      
                    }
                } else if ($(event.target).hasClass("treeLabel")) {
                    var selectedId = $(event.target).attr('data-concept-id');
                    if (typeof selectedId != "undefined") {
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).attr('data-term'),
                            module: $(event.target).attr("data-module"),
                            conceptId: selectedId,
                            source: panel.divElement.id
                        });
                    }
                }
            });
            $("#home-parents-" + panel.divElement.id).dblclick(function(event) {
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                panel.conceptId = conceptId;
                panel.updateCanvas('');
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            });
        });

        if (xhrChildren != null) {
            xhrChildren.abort();
            xhrChildren = null;
        }        
        
        xhrChildren = $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + panel.conceptId + "/children?form=" + panel.options.selectedView, function(result) {
        }).done(function(result) {          

            result.forEach(function(item) {
                if(item.pt && item.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && item.fsn.lang != options.defaultLanguage){
                    item.defaultTerm = item.pt.term;
                }
                else{
                    item.defaultTerm = item.fsn.term;
                }
            });
            // load relationships panel
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            Handlebars.registerHelper('if_gr', function(a, b, opts) {
                if (a) {
                    if (a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts) {
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            xhrChildren = null;
            panel.childrenPId = divElement.id + "-children-panel";
            //                console.log(result);
            var context = {
                displayChildren: panel.options.displayChildren,
                divElementId: panel.divElement.id,
                server: panel.server,
                childrenResult: result,
                selectedView: panel.options.selectedView
            };
            $("#home-children-cant-" + panel.divElement.id).html("(" + result.length + ")");
            $('#' + panel.childrenPId).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/children-panel.hbs"](context));
            $("#home-children-" + panel.divElement.id + "-body").html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/home/children.hbs"](context));
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e) {
                //                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined") {
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
            $("#home-children-" + panel.divElement.id + "-body").unbind();
            $("#home-children-" + panel.divElement.id + "-body").click(function(event) {
                if ($(event.target).hasClass("treeButton")) {
                    var conceptId = $(event.target).closest("li").attr('data-concept-id');
                    var iconId = panel.divElement.id + "-treeicon-" + conceptId;
                    event.preventDefault();
                    if ($("#" + iconId).hasClass("glyphicon-chevron-down")) {
                        //console.log("close");
                        $(event.target).closest("li").find("ul").remove();
                        $("#" + iconId).removeClass("glyphicon-chevron-down");
                        $("#" + iconId).addClass("glyphicon-chevron-right");
                    } else if ($("#" + iconId).hasClass("glyphicon-chevron-right")) {
                        //console.log("open");
                        $("#" + iconId).removeClass("glyphicon-chevron-right");
                        $("#" + iconId).addClass("glyphicon-refresh");
                        $("#" + iconId).addClass("icon-spin");
                        panel.getChildren($(event.target).closest("li").attr('data-concept-id'), true, historyBranch);
                    } else if ($("#" + iconId).hasClass("glyphicon-minus")) {
                        //                    $("#" + iconId).removeClass("glyphicon-minus");
                        //                    $("#" + iconId).addClass("glyphicon-chevron-right");
                    }
                } else if ($(event.target).hasClass("treeLabel")) {
                    var selectedId = $(event.target).attr('data-concept-id');
                    if (typeof selectedId != "undefined") {
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).attr('data-term'),
                            module: $(event.target).attr("data-module"),
                            conceptId: selectedId,
                            source: panel.divElement.id
                        });
                    }
                }
            });

            $("#home-children-" + panel.divElement.id + "-body").dblclick(function(event) {
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                panel.conceptId = conceptId;
                panel.updateCanvas('');
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            });            
            $("#" + panel.divElement.id + "-showChildren").tooltip({
                placement: 'right',
                trigger: 'hover',
                title: i18n_display_children,
                animation: true,
                delay: 500
            });
            $("#" + panel.divElement.id + "-showChildren").click(function() {
                panel.options.displayChildren = true;
                if (typeof(Storage) !== "undefined") {           
                    localStorage.setItem("conceptDetailOptions_displayChildren", panel.options.displayChildren);
                }
                panel.updateCanvas('');
            });
        }).fail(function() {
            $('#' + panel.childrenPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });        
    }
    
    this.getHistory = function(concept) {        
        var branch = options.edition;
        if(options.release.length > 0 && options.release !== 'None'){
            branch = branch + "/" + options.release;
        };
        $.ajaxSetup({
            headers : {
                'Accept-Language': options.languages
            }
        });
        $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + concept.conceptId + "/history?showFutureVersions=false", function(result) {              
           
        }).done(function(result) {
            result.history.forEach(function(item) {
                if(item.branch === 'MAIN'){
                    var temp = item.effectiveTime.slice(0,4) + '-' + item.effectiveTime.slice(4);
                    var date = temp.slice(0,7) + '-' + temp.slice(7);
                    item.branch = 'MAIN/' + date;
                };
                item.conceptId = concept.conceptId;
                item.moduleId = concept.moduleId;
                item.term = concept.term;
            });
            var context = {
                                concept : concept,
                                history : result.history
                            };
            $('#history-' + panel.divElement.id).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/history.hbs"](context));
            panel.panelHistoryLoaded = true;
            setTimeout(function(){
                $('#history-list').find(".history-item").click(function(event) {
                    $('#branchDisplay').css("display", "contents");
                    $('#branchDisplay').html(' - ' + $(event.target).attr('data-branch'));
                    panel.updateCanvas($(event.target).attr('data-branch'));
            });
            }, 500);
        }).fail(function() {
            
        });       
    }

    this.getRefsets = function(firstMatch) {
        if (xhrRefsets != null) {
            xhrRefsets.abort();
            xhrRefsets = null;
        }

        xhrRefsets = $.getJSON(options.serverUrl + "/" + options.edition + "/" + ((options.release && options.release !== 'None') ? options.release + '/': '') + "members?referencedComponentId=" + firstMatch.conceptId + '&active=true', function(result) {
            }).done(function(result) {
                var simpleRefsetMembers = [];
                var simpleMapRefsetMembers = [];
                var attributeValueRefsetMembers = [];
                var associationRefsetMembers = [];
                var ids = [];
                if (result.total > 0) {
                    var initializeRefsetMemberByType = function(item, type) {
                        var refset = {};
                        refset.active = item.active;
                        refset.refsetId = item.refsetId;
                        refset.otherValue = item.additionalFields[type];

                        return refset;
                    }

                    result.items.forEach(function(item) {
                        if (Object.keys(item.additionalFields).length === 0) {
                            var refset = {};
                            refset.active = item.active;
                            refset.refsetId = item.refsetId;

                            simpleRefsetMembers.push(refset)
                            ids.push(item.refsetId);
                        }
                        else if (item.additionalFields.hasOwnProperty('mapTarget')) {
                            var refset = initializeRefsetMemberByType(item,'mapTarget');
                            simpleMapRefsetMembers.push(refset)
                            ids.push(item.refsetId);
                        }
                        else if (item.additionalFields.hasOwnProperty('valueId')) {
                            var refset = initializeRefsetMemberByType(item,'valueId');
                            attributeValueRefsetMembers.push(refset)
                            ids.push(item.refsetId);
                            ids.push(refset.otherValue);
                        }
                        else if (item.additionalFields.hasOwnProperty('targetComponent') || item.additionalFields.hasOwnProperty('targetComponentId')) {
                            var refset = {};
                            refset.active = item.active;
                            refset.refsetId = item.refsetId;
                            if (item.additionalFields.hasOwnProperty('targetComponent')) {
                                refset.otherValue = item.additionalFields.targetComponent['id'];
                            }
                            else {
                                refset.otherValue = item.additionalFields['targetComponentId'];
                            }

                            associationRefsetMembers.push(refset)
                            ids.push(item.refsetId);
                            ids.push(refset.otherValue);
                        }
                        else {
                            // do nothing
                        }
                    });
                }
                Handlebars.registerHelper('if_not_empty', function(list, opts) {
                    if (list) {
                        if (list.length > 0)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });
                if (ids.length > 0) {
                    var getConcepts =  function(list) {
                        var dfd = $.Deferred();
                        var result = {concepts: []};
                        for (var i = 0 ; i < list.length; i++) {
                            $.getJSON(options.serverUrl + "/browser/" + options.edition + "/" + ((options.release && options.release !== 'None') ? options.release + '/' : '') + "concepts/" + list[i], function (concept) {
                            }).done(function (concept) {
                                result.concepts.push(concept)
                                if (result.concepts.length  === list.length) {
                                  dfd.resolve(result);
                                }
                            }).fail(function (xhr, textStatus, error) {
                                // do nothing
                            });
                        }
                        return dfd.promise();
                    };

                    $.when(getConcepts(ids)).then(
                        function( respone ) {
                            var populateRefsetMember = function (list, type, conceptsMap) {
                                if (type === 'simple' || type === 'simplemap'){
                                    list.forEach(function(item) {
                                        var concept = conceptsMap[item.refsetId];

                                        item.definitionStatus = concept.definitionStatus;
                                        item.defaultTerm = concept.pt ? concept.pt.term : concept.fsn.term;
                                        item.module = concept.moduleId;
                                        item.effectiveTime = concept.effectiveTime;
                                        item.conceptId = concept.conceptId;
                                    });
                                }
                                else if (type === 'attr' || type === 'assoc') {
                                    list.forEach(function(item) {
                                        var concept = conceptsMap[item.refsetId];

                                        item.definitionStatus = concept.definitionStatus;
                                        item.defaultTerm =  concept.pt ? concept.pt.term : concept.fsn.term;
                                        item.module = concept.moduleId;
                                        item.effectiveTime = concept.effectiveTime;
                                        item.conceptId = concept.conceptId;

                                        var cidConcept = conceptsMap[item.otherValue];
                                        var cidValue = {};
                                        cidValue.module = cidConcept.moduleId;
                                        cidValue.defaultTerm =  cidConcept.pt ? cidConcept.pt.term : cidConcept.fsn.term;
                                        cidValue.conceptId = cidConcept.conceptId;
                                        cidValue.definitionStatus = cidConcept.definitionStatus;

                                        item.cidValue = cidValue;
                                    });
                                }
                                else {
                                    // do nothing
                                }
                            }

                            var conceptsMap = {};
                            respone.concepts.forEach(function(item) {
                                conceptsMap[item.conceptId] = item;
                            });

                            populateRefsetMember(simpleRefsetMembers,'simple',conceptsMap);
                            populateRefsetMember(simpleMapRefsetMembers,'simplemap',conceptsMap);
                            populateRefsetMember(attributeValueRefsetMembers,'attr',conceptsMap);
                            populateRefsetMember(associationRefsetMembers,'assoc',conceptsMap);

                            var context = {
                                firstMatch : firstMatch,
                                simpleRefsetMembers: simpleRefsetMembers,
                                simpleMapRefsetMembers: simpleMapRefsetMembers,
                                attributeValueRefsetMembers: attributeValueRefsetMembers,
                                associationRefsetMembers: associationRefsetMembers
                            };

                            $('#refsets-' + panel.divElement.id).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/refset.hbs"](context));
                            panel.panelRefsetsLoaded = true;
                        },
                        function( status ) {
                            // do nothing
                        }
                    );
                } else {
                    var context = {
                        firstMatch : firstMatch,
                        simpleRefsetMembers: [],
                        simpleMapRefsetMembers: [],
                        attributeValueRefsetMembers: [],
                        associationRefsetMembers: []
                    };

                    $('#refsets-' + panel.divElement.id).html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/refset.hbs"](context));
                }
            }).fail(function() {
                $("#refsets-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            }
        );
    }

    this.getReferences = function(conceptId, historyBranch) {
        $("#references-" + panel.divElement.id + "-accordion").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (xhrReferences != null) {
            xhrReferences.abort();
            xhrReferences = null;
        };
        var branch = options.edition;
        
        if (historyBranch){
            branch = historyBranch;
        }
        else{
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        if(!options.serverUrl.includes('snowowl')){
           $.ajaxSetup({
              headers : {
                'Accept-Language': options.languages
              }
            });
        };
        xhrReferences = $.getJSON(options.serverUrl + "/" + branch + "/concepts/" + conceptId + "/references?stated=" + (panel.options.selectedView === 'stated') + '&offset=0&limit=10000', function(result) {

        }).done(function(result) {
            Handlebars.registerHelper('if_gr', function(a, b, opts) {
                if (a) {
                    if (a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });

            result.referencesByType.sort(function(a, b) {
                if (a.referenceType.fsn.term >  b.referenceType.fsn.term) {
                    return 1;
                }
                if (a.referenceType.fsn.term <  b.referenceType.fsn.term) {
                    return -1;
                }

                return 0;
            });

            result.referencesByType.forEach(function(item) {
                item.referencingConcepts.sort(function(a, b) {
                    if (a.fsn.term >  b.fsn.term) {
                        return 1;
                    }
                    if (a.fsn.term <  b.fsn.term) {
                        return -1;
                    }

                    return 0;
                });
            });

            var context = {
                divElementId: panel.divElement.id,
                server: panel.server,
                result: result
            };
            $("#references-" + panel.divElement.id + "-accordion").html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/references.hbs"](context));
            $("#references-" + panel.divElement.id + "-accordion").click(function(e) {
                if ($($(e.target).closest("a").attr("href")).hasClass("collapse")) {
                    var target = $($(e.target).closest("a").attr("href") + "-span");
                    if (target.hasClass("glyphicon-chevron-right")) {
                        target.removeClass("glyphicon-chevron-right");
                        target.addClass("glyphicon-chevron-down");
                    } else {
                        target.addClass("glyphicon-chevron-right");
                        target.removeClass("glyphicon-chevron-down");
                    }
                }
            });
            panel.panelReferencesLoaded = true;
        }).fail(function() {
            $("#references-" + panel.divElement.id + "-accordion").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });

    }

    this.getChildren = function(conceptId, forceShow, historyBranch) {
        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        if (panel.options.selectedView == "inferred") {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
        } else {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
        }

        if (xhrChildren != null) {
            xhrChildren.abort();
        };
        var branch = options.edition;
        
        if (historyBranch){
            branch = historyBranch;
        }
        else{
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        if(!options.serverUrl.includes('snowowl')){
           $.ajaxSetup({
              headers : {
                'Accept-Language': options.languages
              }
            });
        };
        xhrChildren = $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + conceptId + "/children?form=" + panel.options.selectedView, function(result) {}).done(function(result) {
            result.forEach(function(item) {
                if(item.pt && item.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && item.fsn.lang != options.defaultLanguage){
                    item.defaultTerm = item.pt.term;
                }
                else{
                    item.defaultTerm = item.fsn.term;
                }
            });
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            var listIconIds = [];
            var context = {
                displayChildren: panel.options.displayChildren,
                childrenResult: result,
                divElementId: panel.divElement.id,
                server: panel.server,
                selectedView: panel.options.selectedView
            };
            if (typeof forceShow != "undefined") {
                if (forceShow) {
                    context.displayChildren = forceShow;
                }
            }
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts) {
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a, b, opts) {
                if (a) {
                    if (a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('push', function(element) {
                listIconIds.push(element);
            });
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            if (result.length > 0) {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
            }
            $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").append(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/home/children.hbs"](context));
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e) {                
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined") {
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

        }).fail(function() {
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
        });
    }

    this.getParent = function(conceptId, target, historyBranch) {
        if (xhrParents != null) {
            xhrParents.abort();
        };
        var branch = options.edition;
        
        if (historyBranch){
            branch = historyBranch;
        }
        else{
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        if(!options.serverUrl.includes('snowowl')){
           $.ajaxSetup({
              headers : {
                'Accept-Language': options.languages
              }
            });
        };
        xhrParents = $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + conceptId + "/parents?form=" + panel.options.selectedView, function(result) {            
        }).done(function(result) {
            result.forEach(function(c) {
                if(c.pt && c.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && c.fsn.lang != options.defaultLanguage){
                    c.defaultTerm = c.pt.term;
                }
                else{
                    c.defaultTerm = c.fsn.term;
                }
            });
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            var auxHtml = "";
            var ind = $(target).attr('data-ind');
            if (result.length > 0) {
                if ($(target).attr('data-firstt')) {
                    auxHtml = "<ul style='margin-left: 95px; list-style-type: none; padding-left: 15px'>";
                } else {
                    auxHtml = "<ul style='list-style-type: none; padding-left: 15px'>";
                }
                $.each(result, function(i, field) {
                    auxHtml = auxHtml + "<li class='treeLabel' data-module='" + field.moduleId + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'><button class='btn btn-link btn-xs treeButton' style='padding:2px'>";
                    if (field.conceptId == "138875005" || field.conceptId == "9999999999") {
                        auxHtml = auxHtml + "<i class='glyphicon glyphicon-minus treeButton' data-ind='" + ind + "'></i></button>";
                    } else {
                        auxHtml = auxHtml + "<i class='glyphicon glyphicon-chevron-right treeButton' data-ind='" + ind + "'></i></button>";
                    }
                    if (field.definitionStatus == "PRIMITIVE") {
                        auxHtml = auxHtml + "<span class='badge alert-warning' draggable='true' ondragstart='drag(event)' data-module='" + field.moduleId + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>&nbsp;&nbsp;</span>&nbsp;&nbsp";
                    } else {
                        auxHtml = auxHtml + "<span class='badge alert-warning' draggable='true' ondragstart='drag(event)' data-module='" + field.moduleId + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>&equiv;</span>&nbsp;&nbsp";
                    }
                    if (countryIcons[field.moduleId]) {
                        auxHtml = auxHtml + "<div class='phoca-flagbox' style='width:26px;height:26px'><span class='phoca-flag " + countryIcons[field.moduleId] + "'></span></div>&nbsp";
                    }
                    auxHtml = auxHtml + "<a id='" + ind + panel.divElement.id + "-treeicon-" + field.conceptId + "' href='javascript:void(0);' style='color: inherit;text-decoration: inherit;'>";
                    auxHtml = auxHtml + "<span class='treeLabel selectable-row' data-module='" + field.moduleId + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>" + field.defaultTerm + "</span></a></li>";
                });
                auxHtml = auxHtml + "</ul>";
            }
            $(target).removeClass("glyphicon-refresh");
            $(target).removeClass("icon-spin");
            if (result.length > 0) {
                $(target).addClass("glyphicon-chevron-up");
            } else {
                $(target).addClass("glyphicon-minus");
            }
            $(target).closest("li").prepend(auxHtml);
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e) {
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined") {
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
        }).fail(function() {});
    }

    this.renderDesriptionsPanel =  function (firstMatch) {
        var allLangsHtml = "";
        firstMatch.descriptions.sort(function(a, b) {
            if (a.lang == options.defaultLanguage && b.lang != options.defaultLanguage)
                return -1;
            if (a.lang != options.defaultLanguage && b.lang == options.defaultLanguage)
                return 1;
            return 0;
        });
        if (panel.options.defaultLanguageReferenceSets && panel.options.defaultLanguageReferenceSets.length > 0) {
            $.each(panel.options.defaultLanguageReferenceSets, function(i, loopSelectedLangRefset) {
                var allDescriptions = firstMatch.descriptions.slice(0);
                var homeDescriptionsHtml = "";
                $.each(allDescriptions, function(i, field) {
                    field.included = false;
                    field.preferred = false;
                    field.acceptable = false;
                    if (panel.options.displayInactiveDescriptions || field.active == true) {
                        if (field.active == true) {
                            if (homeDescriptionsHtml != "") {
                                homeDescriptionsHtml = homeDescriptionsHtml + "<br>";
                            }
                            homeDescriptionsHtml = homeDescriptionsHtml + "&nbsp;&nbsp;<i>" + field.lang + "</i>&nbsp;&nbsp;&nbsp;" + field.term;
                        }
                    }
                });
                Handlebars.registerHelper('removeSemtag', function(term) {
                    return panel.removeSemtag(term);
                });
                Handlebars.registerHelper('if_eq', function(a, b, opts) {
                    if (opts != "undefined") {
                        if (a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });

                var auxDescriptions = [];
                $.each(allDescriptions, function(i, description) {
                    var included = false;                   
                    if (description.acceptabilityMap) {
                        $.each(description.acceptabilityMap, function(langref, acceptability) {
                            if (langref === loopSelectedLangRefset) {
                                included = true;
                                acceptabilityPair = description.acceptabilityMap[i];
                                if (acceptability == "PREFERRED") {
                                    description.preferred = true;
                                } else {
                                    if (acceptability == "ACCEPTABLE") {
                                        description.acceptable = true;
                                    }
                                }
                            }
                            
                        });
                    }

                    if (included) {
                        if (panel.options.displayInactiveDescriptions) {
                            auxDescriptions.push(description);
                        } else {
                            if (description.active) {
                                auxDescriptions.push(description);
                            }
                        }
                    } else {
                        description.acceptable = false;
                        if (panel.options.hideNotAcceptable) {
                            if (panel.options.displayInactiveDescriptions) {
                                auxDescriptions.push(description);
                            }
                        } else {
                            if (panel.options.displayInactiveDescriptions) {
                                auxDescriptions.push(description);
                            } else {
                                if (description.active) {
                                    auxDescriptions.push(description);
                                }
                            }
                        }
                    }
                });
                allDescriptions = auxDescriptions.slice(0);
                allDescriptions.sort(function(a, b) {
                    if (a.active && !b.active)
                        return -1;
                    if (!a.active && b.active)
                        return 1;
                    if (a.active == b.active) {
                        if ((a.acceptable || a.preferred) && (!b.preferred && !b.acceptable))
                            return -1;
                        if ((!a.preferred && !a.acceptable) && (b.acceptable || b.preferred))
                            return 1;
                        if (a.typeId < b.typeId)
                            return -1;
                        if (a.typeId > b.typeId)
                            return 1;
                        if (a.typeId == b.typeId) {
                            if (a.preferred && !b.preferred)
                                return -1;
                            if (!a.preferred && b.preferred)
                                return 1;
                            if (a.preferred == b.preferred) {
                                if (a.term < b.term)
                                    return -1;
                                if (a.term > b.term)
                                    return 1;
                            }
                        }
                    }

                    return 0;
                });

                var context = {
                    options: panel.options,
                    languageName: "(" + options.languageNameOfLangRefset[loopSelectedLangRefset] + ")",
                    longLangName: panel.removeSemtag(panel.options.languageRefsets.filter(function (el) { return el.id == loopSelectedLangRefset;})[0].fsn.term),
                    divElementId: panel.divElement.id,
                    server: panel.server,
                    allDescriptions: allDescriptions
                };
                
                if (allDescriptions.length != 0) {
                    allLangsHtml += JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context);
                }                
                
                $('#home-descriptions-' + panel.divElement.id).html(homeDescriptionsHtml);                   
            });
        }
        else {                    
            // START FOR                    
            for (var language in options.languageObject) {
                var allDescriptions = firstMatch.descriptions.slice(0);
                var homeDescriptionsHtml = "";
                $.each(allDescriptions, function(i, field) {
                    field.included = false;
                    field.preferred = false;
                    field.acceptable = false;
                    if (panel.options.displayInactiveDescriptions || field.active == true) {
                        if (field.active == true) {
                            if (homeDescriptionsHtml != "") {
                                homeDescriptionsHtml = homeDescriptionsHtml + "<br>";
                            }
                            homeDescriptionsHtml = homeDescriptionsHtml + "&nbsp;&nbsp;<i>" + field.lang + "</i>&nbsp;&nbsp;&nbsp;" + field.term;
                        }
                    }
                });
                Handlebars.registerHelper('removeSemtag', function(term) {
                    return panel.removeSemtag(term);
                });
                Handlebars.registerHelper('if_eq', function(a, b, opts) {
                    if (opts != "undefined") {
                        if (a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });

                var auxDescriptions = [];
                $.each(allDescriptions, function(i, description) {
                    var included = false;
                    if(description.lang === language){
                        included = true;
                    }
                    if (description.acceptabilityMap) {
                        $.each(description.acceptabilityMap, function(langref, acceptability) {
                            acceptabilityPair = description.acceptabilityMap[i];
                                if (acceptability == "PREFERRED") {
                                    description.preferred = true;
                                } else {
                                    if (acceptability == "ACCEPTABLE") {
                                        description.acceptable = true;
                                    }
                                }
                        });
                    }

                    if (included) {
                        if (panel.options.displayInactiveDescriptions) {
                            auxDescriptions.push(description);
                        } else {
                            if (description.active) {
                                auxDescriptions.push(description);
                            }
                        }
                    } else {
                        description.acceptable = false;
                        if (panel.options.hideNotAcceptable) {
                            if (panel.options.displayInactiveDescriptions) {
                                auxDescriptions.push(description);
                            }
                        } else {
                            if (options.displayInactiveDescriptions) {
                                auxDescriptions.push(description);
                            } else {
                                if (description.active) {
                                    auxDescriptions.push(description);
                                }
                            }
                        }
                    }
                });
                allDescriptions = auxDescriptions.slice(0);
                allDescriptions.sort(function(a, b) {
                    if (a.active && !b.active)
                        return -1;
                    if (!a.active && b.active)
                        return 1;
                    if (a.active == b.active) {
                        if ((a.acceptable || a.preferred) && (!b.preferred && !b.acceptable))
                            return -1;
                        if ((!a.preferred && !a.acceptable) && (b.acceptable || b.preferred))
                            return 1;
                        if (a.typeId < b.typeId)
                            return -1;
                        if (a.typeId > b.typeId)
                            return 1;
                        if (a.typeId == b.typeId) {
                            if (a.preferred && !b.preferred)
                                return -1;
                            if (!a.preferred && b.preferred)
                                return 1;
                            if (a.preferred == b.preferred) {
                                if (a.term < b.term)
                                    return -1;
                                if (a.term > b.term)
                                    return 1;
                            }
                        }
                    }

                    return 0;
                });

                var context = {
                    options: panel.options,
                    languageName: "(" + language + ")",
                    longLangName: panel.options.languagesArray[language],
                    divElementId: panel.divElement.id,
                    server: panel.server,
                    allDescriptions: allDescriptions
                };                       

                allLangsHtml += JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context);
                
                $('#home-descriptions-' + panel.divElement.id).html(homeDescriptionsHtml);                        
            }
            // END FOR                   
        }
        
        $("#" + panel.descsPId).html(allLangsHtml);

        if (panel.options.displaySynonyms != true) { // hide synonyms
            $('#' + panel.descsPId).find('.synonym-row').each(function(i, val) {
                $(val).toggle();
            });
            $(this).toggleClass('glyphicon-plus');
            $(this).toggleClass('glyphicon-minus');
        }

        $("#" + panel.descsPId + "-descButton").disableTextSelect();
        $("#" + panel.descsPId + "-descButton").click(function() {
            table = $(this).closest("table").first();
            $(this).toggleClass('glyphicon-plus');
            $(this).toggleClass('glyphicon-minus');
            table.find('.synonym-row').each(function(i, val) {
                $(val).toggle();
            });
        });

        $('#' + panel.descsPId).find("[rel=tooltip-right]").tooltip({ placement: 'right' });
    }

    this.loadLanguageRefsets = function() {        
        var branch = options.edition;
        
        if (historyBranch){
            branch = historyBranch;
        }
        else{
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        if(!options.serverUrl.includes('snowowl')){
        $.ajaxSetup({
            headers : {
                'Accept-Language': options.languages
            }
            });
        };
        $.getJSON(options.serverUrl + "/browser/" + branch + "/members?active=true&limit=1", function(result) {              
            // do nothing                
        }).done(function(result) {
            panel.options.languageRefsets = [];                      
            Object.keys(result.referenceSets).forEach(function(key) {
                if (result.referenceSets[key].referenceSetType.id === '900000000000506000') {
                    panel.options.languageRefsets.push(result.referenceSets[key]);                                      
                }
            });

            panel.options.languageRefsets.sort(function(a, b) {
                if (a.conceptId === '900000000000509007'){
                    return -1;
                }
    
                if (b.conceptId === '900000000000509007'){
                    return 1;
                }
    
                return a.fsn.term.localeCompare(b.fsn.term);
            });

            if (!panel.options.defaultLanguageReferenceSets || panel.options.defaultLanguageReferenceSets.length === 0) {
                panel.options.defaultLanguageReferenceSets = [];                
                panel.options.languageRefsets.forEach(function(item) {
                    panel.options.defaultLanguageReferenceSets .push(item.id);  
                });
            }                             
            
            panel.renderDesriptionsPanel(panel.firstMatch);
            
            $("#" + panel.divElement.id + "-configButton").removeAttr("disabled");            
        }).fail(function() {
            panel.renderDesriptionsPanel(panel.firstMatch);
            $("#" + panel.divElement.id + "-configButton").removeAttr("disabled");
        });       
    }

    this.setLangugeRefsets = function(langRefsets) {
        panel.options.languageRefsets = langRefsets;
        if (!panel.options.defaultLanguageReferenceSets || panel.options.defaultLanguageReferenceSets.length === 0) {
            panel.options.defaultLanguageReferenceSets = [];                
            panel.options.languageRefsets.forEach(function(item) {
                panel.options.defaultLanguageReferenceSets .push(item.id);  
            });
        }                  
        if (panel.firstMatch) {
            panel.renderDesriptionsPanel(panel.firstMatch);
        }                
        $("#" + panel.divElement.id + "-configButton").removeAttr("disabled");        
    }

    this.loadMembers = function(returnLimit, skipTo, paginate, historyBranch) {
        var branch = options.edition;
        
        if (historyBranch){
            branch = historyBranch;
        }
        else{
            if(options.release.length > 0 && options.release !== 'None'){
                branch = branch + "/" + options.release;
            }
        }
        var membersUrl = options.serverUrl + "/" + branch + "/members?referenceSet=" + panel.conceptId + "&limit=100&active=true";
        if (skipTo > 0) {
            membersUrl = membersUrl + "&offset=" + skipTo;
        } else {
            $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><i class='glyphicon glyphicon-refresh icon-spin'></i></td></tr>");
        }
        var total;
        if (typeof total != "undefined") {
            paginate = 1;
            membersUrl = membersUrl + "&paginate=1";
        }

        if (xhrMembers != null) {
            xhrMembers.abort();
            xhrMembers = null;
        }

        xhrMembers = $.getJSON(membersUrl, function(result) {

        }).done(function(result) {
            var remaining = "asd";
            if (typeof total == "undefined") total = result.total;
            if (total == skipTo) {
                remaining = 0;
            } else {
                if (total > (skipTo + returnLimit)) {
                    remaining = total - (skipTo + returnLimit);
                } else {
                    remaining = 0;
                }
            }
            if (remaining < returnLimit) {
                var returnLimit2 = remaining;
            } else {
                if (remaining != 0) {
                    var returnLimit2 = returnLimit;
                } else {
                    var returnLimit2 = 0;
                }
            }

            var isReferenceComponentsOfRefsetNotConcepts = false;
            var containingTermOnly = true;
            if (result.items && result.items.length > 0) {
                result.items.forEach(function(item){
                    if(!item.hasOwnProperty('referencedComponent')){
                        isReferenceComponentsOfRefsetNotConcepts = true;
                        return;
                    }
                });

                result.items.forEach(function(item){
                    if(item.hasOwnProperty('referencedComponent')){
                        var referencedComponent = item['referencedComponent'];
                        if (referencedComponent.hasOwnProperty('pt') || referencedComponent.hasOwnProperty('fsn'))
                        containingTermOnly = false;
                        return;
                    }
                });
            }
            console.log("containingTermOnly : " + containingTermOnly);
            var context = {};
            if (isReferenceComponentsOfRefsetNotConcepts) {
                context = {
                    result: {'items':[]},
                    divElementId: panel.divElement.id,
                    server: panel.server,
                    total: total,
                    skipTo: 0,
                    referenceComponentsOfRefsetAreNotConcepts: true,
                    containingTermOnly: containingTermOnly
                };
            }
            else {
                context = {
                    result: result,
                    returnLimit: returnLimit2,
                    remaining: remaining,
                    divElementId: panel.divElement.id,
                    server: panel.server,
                    skipTo: skipTo,
                    panel: panel,
                    total: total,
                    referenceComponentsOfRefsetAreNotConcepts: false,
                    containingTermOnly: containingTermOnly
                };
            }
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a, b, opts) {
                if (a) {
                    if (a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts) {
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            if (result.total != 0) {
                $("#" + panel.divElement.id + "-moreMembers").remove();
                $("#members-" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                if (skipTo == 0) {
                    $('#members-' + panel.divElement.id + "-resultsTable").html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/members.hbs"](context));
                } else {
                    $('#members-' + panel.divElement.id + "-resultsTable").append(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/members.hbs"](context));
                }
                $("#" + panel.divElement.id + "-moreMembers").click(function() {
                    $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                    panel.loadMembers(returnLimit2, skipTo + returnLimit, paginate, historyBranch);
                });
                $("#members-" + panel.divElement.id + "-sort").unbind();
                $("#members-" + panel.divElement.id + "-sort").click(function() {
                    $("#members-" + panel.divElement.id + "-sort").blur();
                    panel.loadMembers(returnLimit, 0, 1, historyBranch);
                });
            } else {
                if (skipTo != 0) {
                    $("#" + panel.divElement.id + "-moreMembers").remove();
                    $("#members-" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                    if (skipTo == 0) {
                        $('#members-' + panel.divElement.id + "-resultsTable").html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/members.hbs"](context));
                    } else {
                        $('#members-' + panel.divElement.id + "-resultsTable").append(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/members.hbs"](context));
                    }
                    $("#" + panel.divElement.id + "-moreMembers").click(function() {
                        $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                        panel.loadMembers(returnLimit2, skipTo + returnLimit, paginate, historyBranch);
                    });
                    $("#members-" + panel.divElement.id + "-sort").unbind();
                    $("#members-" + panel.divElement.id + "-sort").click(function() {
                        $("#members-" + panel.divElement.id + "-sort").blur();
                        panel.loadMembers(returnLimit, 0, 1, historyBranch);
                    });
                } else {
                    $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>"+i18n_no_members+"</span></td></tr>");
                }
            }
            $('#members-' + panel.divElement.id).find(".member-row").unbind();
            $('#members-' + panel.divElement.id).find(".member-row").click(function(e) {
                var clickedConceptId = $(e.target).data("concept-id");
                panel.conceptId = clickedConceptId;
                $('#details-tabs-' + panel.divElement.id + ' a:first').tab('show');
                panel.updateCanvas('');
            });
            panel.panelMembersLoaded = true;
        }).fail(function() {
            $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>"+i18n_no_members+"</span></td></tr>");
        });
    };

    this.stripDiagrammingMarkup = function(htmlString) {
        if (!htmlString)
            htmlString = "";
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-primitive-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-defined-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-attribute-compact"), 'g'), "");
        return htmlString;
    };
    this.escapeRegExp = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };

    this.removeSemtag = function(term) {
        if (term) {
            if (term.lastIndexOf("(") > 0) {
                return term.substr(0, term.lastIndexOf("(") - 1)
            } else {
                return term;
            }
        }
    }

    this.loadMarkers = function() {
        var auxMarker = "",
            right = 0,
            top = 0,
            aux = false,
            visible = false;
        $.each(componentsRegistry, function(i, field) {
            var panelId = field.divElement.id;
            if ($("#" + panelId + "-subscribersMarker").is(':visible')) {
                visible = true;
            }
        });
        if (panel.subscribers.length == 0) {
            right = 14;
            $("#" + panel.divElement.id + "-ownMarker").hide();
        } else {
            if (!visible) {
                $("#" + panel.divElement.id + "-ownMarker").hide();
            }
            aux = true;
        }
        if ($("#" + panel.divElement.id + "-subscribersMarker").is(':visible')) {
            $("#" + panel.divElement.id + "-panelTitle").html($("#" + panel.divElement.id + "-panelTitle").html().replace(/&nbsp;/g, ''));
            if (aux) {
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
            }
            $.each(panel.subscriptionsColor, function(i, field) {
                auxMarker = auxMarker + "<i class='glyphicon glyphicon-bookmark' style='color: " + field + "; top:" + top + "px; right: " + right + "px;'></i>";
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
                top = top + 5;
                right = right + 10;
            });
            $("#" + panel.divElement.id + "-subscribersMarker").html(auxMarker);
        }
    }

    // Subsription methods
    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
        var alreadySubscribed = false;
        $.each(panel.subscriptionsColor, function(i, field) {
            if (field == panelToSubscribe.markerColor) {
                alreadySubscribed = true;
            }
        });        
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
                panel.conceptId = data.conceptId;
                
                // apply for muilti search
                if (data.branch && data.branch !== options.edition) {
                    options.edition = data.branch;
                    panel.options.edition = data.branch;
                    panel.options.languageRefsets = [];
                    panel.options.defaultLanguageReferenceSets = []; 
                    panel.loadLanguageRefsets();
                }

                if (data.showConcept && !$('a[href="#' + panel.divElement.id +'-pane"]').parent().hasClass("active")) {
                    $('a[href="#' + panel.divElement.id +'-pane"]').click();
                }
                if ($("#home-children-" + panel.divElement.id + "-body").length > 0) {
                    panel.updateCanvas('');                    
                } 
                else {
                    panel.setupCanvas();
                    if (panel.loadMarkers) {
                        panel.loadMarkers();
                    }                        
                }                
                
                
            });
            panel.subscriptions.push(subscription);
            panelToSubscribe.subscribers.push(panel.divElement.id);
            panel.subscriptionsColor.push(panelToSubscribe.markerColor);
        }
        $("#" + panel.divElement.id + "-subscribersMarker").show();       
    }

    this.unsubscribe = function(panelToUnsubscribe) {
        var aux = [],
            colors = [],
            unsubscribed = true;
        $.each(panel.subscriptionsColor, function(i, field) {
            if (field != panelToUnsubscribe.markerColor) {
                colors.push(field);
            } else {
                unsubscribed = false;
            }
        });
        if (!unsubscribed) {
            panel.subscriptionsColor = colors;          
            colors = [];
            $.each(panelToUnsubscribe.subscribers, function(i, field) {
                if (field != panel.divElement.id) {
                    aux.push(field);
                }
            });
            panelToUnsubscribe.subscribers = aux;
            $.each(panelToUnsubscribe.subscriptionsColor, function(i, field) {
                colors.push(field);
            });
            if (panelToUnsubscribe.subscribers.length == 0) {
                if (panelToUnsubscribe.subscriptions.length == 0) {
                    $("#" + panelToUnsubscribe.divElement.id + "-subscribersMarker").hide();
                }
            } else {
                //  do nothing
            }
            panelToUnsubscribe.subscriptionsColor = colors;
            aux = [];
            $.each(panel.subscriptions, function(i, field) {
                if (panelToUnsubscribe.divElement.id == field.topic) {
                    field.unsubscribe();
                } else {
                    aux.push(field);
                }
            });
            panel.subscriptions = aux;
            if (panel.subscriptions.length == 0 && panel.subscribers.length == 0) {
                $("#" + panel.divElement.id + "-subscribersMarker").hide();
            }
        }
    }

    this.setupOptionsPanel = function() {        
        var context = {
            options: panel.options,
            divElementId: panel.divElement.id
        };
        Handlebars.registerHelper('if_eq', function(a, b, opts) {
            if (opts != "undefined") {
                if (a == b)
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            }
        });
        Handlebars.registerHelper('ifIn', function(elem, list, options) {
            if (list.indexOf(elem) > -1) {
                return options.fn(this);
            }
            return options.inverse(this);
        });
        $("#" + panel.divElement.id + "-modal-body").html(JST["snomed-interaction-components/views/conceptDetailsPlugin/options.hbs"](context));        
    }

    this.readOptionsPanel = function() {
        panel.options.displaySynonyms = $("#" + panel.divElement.id + "-displaySynonymsOption").is(':checked');
        panel.options.showIds = $("#" + panel.divElement.id + "-displayIdsOption").is(':checked');
        panel.options.displayChildren = $("#" + panel.divElement.id + "-childrenOption").is(':checked');
        panel.options.hideNotAcceptable = $("#" + panel.divElement.id + "-hideNotAcceptableOption").is(':checked');
        panel.options.displayInactiveDescriptions = $("#" + panel.divElement.id + "-displayInactiveDescriptionsOption").is(':checked');
        panel.options.diagrammingMarkupEnabled = $("#" + panel.divElement.id + "-diagrammingMarkupEnabledOption").is(':checked');
        panel.options.selectedView = $("#" + panel.divElement.id + "-relsViewOption").val();
        panel.options.defaultLanguageReferenceSets = [];
        $.each($("#" + panel.divElement.id).find(".langOption"), function(i, field) {
            if ($(field).is(':checked')) {
                panel.options.defaultLanguageReferenceSets.push($(field).val());
            }
        });

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("conceptDetailOptions_displaySynonyms", panel.options.displaySynonyms);
            localStorage.setItem("conceptDetailOptions_showIds", panel.options.showIds);
            localStorage.setItem("conceptDetailOptions_displayInactiveDescriptions", panel.options.displayInactiveDescriptions);
            localStorage.setItem("conceptDetailOptions_hideNotAcceptable", panel.options.hideNotAcceptable);
            localStorage.setItem("conceptDetailOptions_diagrammingMarkupEnabled", panel.options.diagrammingMarkupEnabled);
            localStorage.setItem("conceptDetailOptions_displayChildren", panel.options.displayChildren);
            localStorage.setItem("conceptDetailOptions_selectedView", panel.options.selectedView);
            
            var selectedLanguageRefset = {};
            if (typeof (localStorage.getItem("conceptDetailOptions_selectedLanguageRefset")) !== "undefined" && 
                localStorage.getItem("conceptDetailOptions_selectedLanguageRefset") !== null) {
                selectedLanguageRefset = JSON.parse(localStorage.getItem("conceptDetailOptions_selectedLanguageRefset"));
            }
            selectedLanguageRefset[panel.options.editionShortname] = panel.options.defaultLanguageReferenceSets;
            localStorage.setItem("conceptDetailOptions_selectedLanguageRefset",JSON.stringify(selectedLanguageRefset));            
        }

        $.each(componentsRegistry, function(i, field) {
            if (field.loadMarkers)
                field.loadMarkers();
        });        
    }
}

function updateCD(divElementId, conceptId) {
    $.each(componentsRegistry, function(i, field) {        
        if (field.divElement.id == divElementId) {
            field.conceptId = conceptId;
            field.updateCanvas('');
            channel.publish(field.divElement.id, {
                term: field.term,
                conceptId: field.conceptId,
                module: field.module,
                source: field.divElement.id
            });
        }
    });
    $('.history-button').popover('hide');
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

(function($) {
    $.fn.addConceptDetails = function(conceptId, options) {
        this.filter("div").each(function() {
            var cd = new conceptDetails(this, conceptId, options);
            cd.setupCanvas();
        });
    };
}(jQuery));

$(document).keypress(function(event) {
    if (event.which == '13') {
        event.preventDefault();
    }
});