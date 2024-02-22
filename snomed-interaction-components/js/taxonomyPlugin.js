/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function taxonomyPanel(divElement, conceptId, options) {
    var nodeCount = 0;
    var panel = this;
    var xhr = null;
    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    this.markerColor = 'black';
    if (typeof globalMarkerColor == "undefined") {
        globalMarkerColor = 'black';
    }

    this.type = "taxonomy";
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    var componentLoaded = false;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == panel.divElement.id) {
            componentLoaded = true;
        }
    });
    if (componentLoaded == false) {
        componentsRegistry.push(panel);
    }    
    panel.default = {};
    panel.default.conceptId = conceptId;
    panel.subscribers = [];
    panel.subscriptions = [];
    panel.subscriptionsColor = [];
    this.history = [];

    this.setupCanvas = function() {
        var context = {
            divElementId: panel.divElement.id
        };
        $(divElement).html(JST["snomed-interaction-components/views/taxonomyPlugin/main.hbs"](context));
        $("#" + panel.divElement.id + "-resetButton").disableTextSelect();
        //        $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").hide();
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id + "-closeButton").click(function(event) {
            $(divElement).remove();
        });

        $("#" + panel.divElement.id + "-configButton").click(function(event) {
            panel.setupOptionsPanel();
            //            $("#" + panel.divElement.id + "-taxonomyConfigBar").slideToggle('slow');
        });

        $("#" + panel.divElement.id + "-clearConceptButton").click(function(event) {
            panel.default.conceptId = 138875005;
            panel.setToConcept(panel.default.conceptId);
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }

        //        if (typeof panel.options.linkerButton != "undefined" && panel.options.linkerButton == false) {
        //            $("#" + panel.divElement.id + "-linkerButton").hide();
        //        }

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
        });
        $("#" + panel.divElement.id + "-collapseButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
            $("#" + panel.divElement.id + "-expandButton").show();
            $("#" + panel.divElement.id + "-collapseButton").hide();
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
        $("#" + panel.divElement.id + "-resetButton").tooltip({
            placement: 'left',
            trigger: 'hover',
            title: i18n_reset,
            animation: true,
            delay: 1000
        });       

        $("#" + panel.divElement.id + "-resetButton").click(function() {            
            panel.setToConcept(panel.default.conceptId);
        });

        $("#" + panel.divElement.id + "-apply-button").click(function() {
            //console.log("apply!");
            panel.readOptionsPanel();            
        });

        $("#" + panel.divElement.id + "-historyButton").click(function(event) {
            $("#" + panel.divElement.id + "-historyButton").popover({
                trigger: 'manual',
                placement: function(context, src) {  $(context).addClass(panel.divElement.id + '-historyButton-popover'); return 'bottomRight'; },
                html: true,
                content: function() {
                    historyHtml = '<div style="height:100px;overflow:auto;">';
                    if (panel.history.length == 0) {
                        historyHtml = historyHtml + '<div class="text-center text-muted" style="width:100%"><em>' + i18n_no_terms + '</span>...</em></div>';
                    }
                    historyHtml = historyHtml + '<table>';
                    var reversedHistory = panel.history.slice(0);
                    reversedHistory.reverse();
                    //console.log(JSON.stringify(reversedHistory));
                    var second_text = jQuery.i18n.prop('i18n_second');
                    var seconds_text = jQuery.i18n.prop('i18n_seconds');
                    var minute_text = jQuery.i18n.prop('i18n_minute');
                    var minutes_text = jQuery.i18n.prop('i18n_minutes');
                    var hour_text = jQuery.i18n.prop('i18n_hour');
                    var hours_text = jQuery.i18n.prop('i18n_hours');
                    var ago_text = jQuery.i18n.prop('i18n_ago');
                    var second_html = "<span class='i18n' data-i18n-id='i18n_second'>"+second_text+"</span>";
                    var seconds_html = "<span class='i18n' data-i18n-id='i18n_seconds'>"+seconds_text+"</span>";
                    var minute_html = "<span class='i18n' data-i18n-id='i18n_minute'>"+minute_text+"</span>";
                    var minutes_html = "<span class='i18n' data-i18n-id='i18n_minutes'>"+minutes_text+"</span>";
                    var hour_html = "<span class='i18n' data-i18n-id='i18n_hour'>"+hour_text+"</span>";
                    var hours_html = "<span class='i18n' data-i18n-id='i18n_hours'>"+hours_text+"</span>";
                    var ago_html = "<span class='i18n' data-i18n-id='i18n_ago'>"+ago_text+"</span>";
                    $.each(reversedHistory, function(i, field) {
                        var d = new Date();
                        var curTime = d.getTime();
                        var ago = curTime - field.time;
                        var agoString = "";
                        if (ago < (1000 * 60)) {
                            if (Math.round((ago / 1000)) == 1) {
                                agoString = Math.round((ago / 1000)) + ' '+ second_html + ' ' + ago_html;
                            } else {
                                agoString = Math.round((ago / 1000)) + ' '+ seconds_html + ' ' + ago_html;
                            }
                        } else if (ago < (1000 * 60 * 60)) {
                            if (Math.round((ago / 1000) / 60) == 1) {
                                agoString = Math.round((ago / 1000) / 60) + ' '+ minute_html + ' ' + ago_html;
                            } else {
                                agoString = Math.round((ago / 1000) / 60) + ' '+ minutes_html + ' ' + ago_html;
                            }
                        } else if (ago < (1000 * 60 * 60 * 60)) {
                            if (Math.round(((ago / 1000) / 60) / 60) == 1) {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' '+ hour_html + ' ' + ago_html;
                            } else {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' '+ hours_html + ' ' + ago_html;
                            }
                        }
                        historyHtml = historyHtml + '<tr><td><a href="javascript:void(0);" onclick="historyInTaxPanel(\'' + panel.divElement.id + '\',\'' + field.conceptId + '\');">' + field.term + '</a>';
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
    
        if (typeof(Storage) !== "undefined") {
            panel.options.descendantsCount = localStorage.getItem("descendantsCountFlag") ? (localStorage.getItem("descendantsCountFlag") === 'true') : false;
        }

        $("#" + panel.divElement.id + "-descendantsCountTrue").click(function(event) {
            panel.options.descendantsCount = true;
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("descendantsCountFlag", true);
            }
            var i18n_descendants_count = jQuery.i18n.prop('i18n_descendants_count');            
            var i18n_on = jQuery.i18n.prop('i18n_on');            
            $("#" + panel.divElement.id + '-txViewLabel2').html("<span class='i18n' data-i18n-id='i18n_descendants_count'>"+i18n_descendants_count+"</span>" + ": " + "<span class='i18n' data-i18n-id='i18n_on'>"+i18n_on+"</span>");
            panel.reloadCurrentConcept();
            
        });

        $("#" + panel.divElement.id + "-descendantsCountFalse").click(function(event) {
            panel.options.descendantsCount = false;
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("descendantsCountFlag", false);
            }
            var i18n_descendants_count = jQuery.i18n.prop('i18n_descendants_count');           
            var i18n_off = jQuery.i18n.prop('i18n_off');            
            $("#" + panel.divElement.id + '-txViewLabel2').html("<span class='i18n' data-i18n-id='i18n_descendants_count'>"+i18n_descendants_count+"</span>" + ": " + "<span class='i18n' data-i18n-id='i18n_off'>"+i18n_off+"</span>");
            panel.reloadCurrentConcept();           
        });

        $("#" + panel.divElement.id + "-inferredViewButton").click(function(event) {
            panel.options.selectedView = 'inferred';
            var i18n_inferred_view = jQuery.i18n.prop('i18n_inferred_view');            
            $("#" + panel.divElement.id + '-txViewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>"+i18n_inferred_view+"</span>");
            panel.reloadCurrentConcept();          
        });

        $("#" + panel.divElement.id + "-statedViewButton").click(function(event) {
            panel.options.selectedView = 'stated';
            var i18n_stated_view = jQuery.i18n.prop('i18n_stated_view');
            $("#" + panel.divElement.id + '-txViewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>"+i18n_stated_view+"</span>");
            panel.reloadCurrentConcept();
            
        });

        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        if (panel.options.selectedView == "inferred") {
            var i18n_inferred_view = jQuery.i18n.prop('i18n_inferred_view');
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_inferred_view'>"+i18n_inferred_view+"</span>");
        } else {
            var i18n_stated_view = jQuery.i18n.prop('i18n_stated_view');                        
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_stated_view'>"+i18n_stated_view+"</span>");
        }

        if (typeof panel.options.descendantsCount === 'undefined') {
            panel.options.descendantsCount = false;
        }

        var i18n_descendants_count = jQuery.i18n.prop('i18n_descendants_count');
        if (panel.options.descendantsCount) {
            var i18n_on = jQuery.i18n.prop('i18n_on');               
            $("#" + panel.divElement.id + '-txViewLabel2').html("<span class='i18n' data-i18n-id='i18n_descendants_count'>"+i18n_descendants_count+"</span>" + ": " + "<span class='i18n' data-i18n-id='i18n_on'>"+i18n_on+"</span>");
        } 
        else {            
            var i18n_off = jQuery.i18n.prop('i18n_off');                
            $("#" + panel.divElement.id + '-txViewLabel2').html("<span class='i18n' data-i18n-id='i18n_descendants_count'>"+i18n_descendants_count+"</span>" + ": " + "<span class='i18n' data-i18n-id='i18n_off'>"+i18n_off+"</span>");
        }
        
        $("#" + panel.divElement.id + "-ownMarker").css('color', panel.markerColor);
    }

    this.setupOptionsPanel = function() {
        var possibleSubscribers = [];
        $.each(componentsRegistry, function(i, field) {
            if (field.divElement.id != panel.divElement.id) {
                var object = {};
                object.subscriptions = field.subscriptions;
                object.id = field.divElement.id;
                possibleSubscribers.push(object);
            }
        });
        var aux = false;
        $.each(possibleSubscribers, function(i, field) {
            aux = false;
            $.each(panel.subscriptions, function(j, subscription) {
                if (field.id == subscription.topic) {
                    aux = true;
                }
            });
            field.subscribed = aux;
            aux = false;
            $.each(field.subscriptions, function(i, subscription) {
                if (subscription.topic == panel.divElement.id) {
                    aux = true;
                }
            });
            field.subscriptor = aux;
        });
        panel.options.possibleSubscribers = possibleSubscribers;
        var context = {
            options: panel.options,
            divElementId: panel.divElement.id
        };
        $("#" + panel.divElement.id + "-modal-body").html(JST["snomed-interaction-components/views/taxonomyPlugin/options.hbs"](context));
    }

    this.readOptionsPanel = function() {
        $.each(panel.options.possibleSubscribers, function(i, field) {
            field.subscribed = $("#" + panel.divElement.id + "-subscribeTo-" + field.id).is(':checked');
            field.subscriptor = $("#" + panel.divElement.id + "-subscriptor-" + field.id).is(':checked');
            var panelToSubscribe = {};
            $.each(componentsRegistry, function(i, panelS) {
                if (panelS.divElement.id == field.id) {
                    panelToSubscribe = panelS;
                }
            });
            if (field.subscribed) {
                panel.subscribe(panelToSubscribe);
            } else {
                panel.unsubscribe(panelToSubscribe);
            }
            if (field.subscriptor) {
                panelToSubscribe.subscribe(panel);
            } else {
                panelToSubscribe.unsubscribe(panel);
            }
        });
        $.each(componentsRegistry, function(i, field) {
            if (field.loadMarkers)
                field.loadMarkers();
        });
    }

    this.setupParents = function(parents, focusConcept) {
        var lastParent;
        $.each(parents, function(i, parent) {
            lastParent = parent;
        });
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
            if (a > b)
                return opts.fn(this);
            else
                return opts.inverse(this);
        });
        Handlebars.registerHelper('if_def', function(conceptId, opts) {
            if (conceptId == panel.default.conceptId)
                return opts.fn(this);
            else
                return opts.inverse(this);
        });
        var context = {
            parents: parents,
            focusConcept: focusConcept,
            divElementId: panel.divElement.id
        };
        Handlebars.registerHelper('slice', function(a, b) {
            $("#" + panel.divElement.id + "-panelBody").html($("#" + panel.divElement.id + "-panelBody").html().slice(a, b));
        });
        $("#" + panel.divElement.id + "-panelBody").html(JST["snomed-interaction-components/views/taxonomyPlugin/body/parents.hbs"](context));
        
        if (panel.options.descendantsCount) {            
            var auxArray = parents;
            auxArray.push(focusConcept);
            auxArray.forEach(function(concept) {
                var descedants = concept.descendantCount;                
                $("#" + panel.divElement.id + "-panelBody").find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + descedants + "</span>");                
            });
        }

        //console.log(JST["snomed-interaction-components/views/taxonomyPlugin/body/parents.hbs"](context));
        $(".treeButton").disableTextSelect();
        $("#" + panel.divElement.id + "-panelBody").unbind("dblclick");
        $("#" + panel.divElement.id + "-panelBody").dblclick(function(event) {
            if ($(event.target).hasClass("treeLabel")) {
                var d = new Date();
                var time = d.getTime();
                var selectedModule = $(event.target).attr('data-module');
                var selectedId = $(event.target).attr('data-concept-id');
                var descendantCount = $(event.target).attr('data-descendants')
                var selectedLabel = $(event.target).attr('data-term');
                var definitionStatus = $(event.target).attr('data-definition-status');
                var fsn = {'term' : $(event.target).attr('data-fsn')};
                var pt = {'term': $(event.target).attr('data-preferred-term')};                

                panel.history.push({ term: selectedLabel, conceptId: selectedId, time: time });
                panel.default.conceptId = selectedId;
                var branch = options.edition;
                if(options.release.length > 0 && options.release !== 'None'){
                    branch = branch + "/" + options.release;
                };
                if (typeof selectedId != "undefined") {
                    $.ajaxSetup({
                        headers : {
                          'Accept-Language': panel.options.acceptLanguageValue
                        }
                    });
                    $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + selectedId + "/parents?form=" + panel.options.selectedView + "&includeDescendantCount=" + panel.options.descendantsCount, function(result) {
                        result.forEach(function(item) {
                            if(panel.options.showPreferredTerm){
                                item.defaultTerm = item.pt.term;
                            }
                            else{
                                item.defaultTerm = item.fsn.term;
                            }
                        });
                    }).done(function(result) {
                        if (selectedId === '138875005') {
                            $("#" + panel.divElement.id + "-selectedConceptSection").hide();
                        } else {
                            $("#" + panel.divElement.id + "-selectedConceptTerm").text(selectedLabel);
                            $("#" + panel.divElement.id + "-selectedConceptSection").show();
                        }

                        panel.setupParents(result, { conceptId: selectedId, defaultTerm: selectedLabel, definitionStatus: definitionStatus, module: selectedModule, descendantCount: descendantCount, fsn: fsn, pt: pt});
                    }).fail(function() {});
                }
            }
        });
        $("#" + panel.divElement.id + "-panelBody").unbind("click");
        $("#" + panel.divElement.id + "-panelBody").click(function(event) {
            if ($(event.target).hasClass("treeButton")) {
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                var matchingI =  $(event.target).closest("i");
                event.preventDefault();
                if (matchingI.length !== 0) {
                    var closestI = matchingI[0];
                    if ($(closestI).hasClass("glyphicon-chevron-down")) {
                        $(event.target).closest("li").find("ul").remove();
                        $(closestI).removeClass("glyphicon-chevron-down");
                        $(closestI).addClass("glyphicon-chevron-right");
                    } else if ($(closestI).hasClass("glyphicon-chevron-right")) {
                        $(closestI).removeClass("glyphicon-chevron-right");
                        $(closestI).addClass("glyphicon-refresh");
                        $(closestI).addClass("icon-spin");
                        panel.getChildren(conceptId, event.target);
                    } else if ($(closestI).hasClass("glyphicon-chevron-up")) {
                        $(closestI).removeClass("glyphicon-chevron-up");
                        $(closestI).addClass("glyphicon-refresh");
                        $(closestI).addClass("icon-spin");
                        panel.wrapInParents(conceptId, $(event.target).closest("li"));
                    } else if ($(closestI).hasClass("glyphicon-minus")) {
                        //                    $("#" + iconId).removeClass("glyphicon-minus");
                        //                    $("#" + iconId).addClass("glyphicon-chevron-right");
                    }
                }                
            } else if ($(event.target).hasClass("treeLabel")) {
                var selectedId = $(event.target).attr('data-concept-id');
                if (typeof selectedId != "undefined") {
                    channel.publish(panel.divElement.id, {
                        term: $(event.target).attr('data-term'),
                        module: $(event.target).attr("data-module"),
                        conceptId: selectedId,
                        source: panel.divElement.id,
                        showConcept: true
                    });
                }
            }

        });

        var iconId = panel.divElement.id + "-treeicon-" + focusConcept.conceptId;
        $("#" + iconId).removeClass("glyphicon-chevron-right");
        $("#" + iconId).addClass("glyphicon-refresh");
        $("#" + iconId).addClass("icon-spin");
        panel.getChildren(focusConcept.conceptId);
    };

    this.getChildren = function(conceptId, target) {
        var branch = options.edition;
        if(options.release.length > 0 && options.release !== 'None'){
            branch = branch + "/" + options.release;
        };
        $.ajaxSetup({
            headers : {
              'Accept-Language': panel.options.acceptLanguageValue
            }
        });
        $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + conceptId + "/children?form=" + panel.options.selectedView + "&includeDescendantCount=" + panel.options.descendantsCount, function(result) {}).done(function(result) {
            result.forEach(function(item) {
                if(panel.options.showPreferredTerm){
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
            //console.log(JSON.stringify(result));
            var listIconIds = [];
            //console.log(JSON.stringify(listIconIds));

            var context = {
                result: result,
                divElementId: panel.divElement.id,
                selectedView: panel.options.selectedView
            };
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
            Handlebars.registerHelper('push', function(element) {
                listIconIds.push(element);
            });
            if (target) {
                var closestLi = ($(target).parent().parent())[0];
                var closestI =  $(target).closest("#" + panel.divElement.id + "-treeicon-" + conceptId)[0];
                
                $(closestI).removeClass("glyphicon-refresh");
                $(closestI).removeClass("icon-spin");
                if (result.length > 0) {
                    $(closestI).addClass("glyphicon-chevron-down");
                } else {
                    $(closestI).addClass("glyphicon-minus");
                }
                $(closestLi).find("ul").remove();
                $(closestLi).append(JST["snomed-interaction-components/views/taxonomyPlugin/body/children.hbs"](context));
                if (panel.options.descendantsCount == true) {
                    result.forEach(function(concept) {
                        if (concept.active) {
                            var descedants = concept.descendantCount;
                            $(closestLi).find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + descedants + "</span>");
                            
                        }
                    });                
                }
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
                if (result.length > 0) {
                    $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
                } else {
                    $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
                }
                $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").find("ul").remove();
                $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").append(JST["snomed-interaction-components/views/taxonomyPlugin/body/children.hbs"](context));
                if (panel.options.descendantsCount == true) {
                    result.forEach(function(concept) {
                        if (concept.active) {
                            var descedants = concept.descendantCount;
                            $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + descedants + "</span>");
                            
                        }
                    });                
                }
            }
            
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

        }).fail(function() {
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
        });
    }

    this.wrapInParents = function(conceptId, liItem) {
        var topUl = $("#" + panel.divElement.id + "-panelBody").find('ul:first');
        var branch = options.edition;
        if(options.release.length > 0 && options.release !== 'None'){
            branch = branch + "/" + options.release;
        };
        $.ajaxSetup({
            headers : {
              'Accept-Language': panel.options.acceptLanguageValue
            }
        });
        $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + conceptId + "/parents?form=" + panel.options.selectedView + "&includeDescendantCount=" + panel.options.descendantsCount, function(parents) {
        }).done(function(parents) {
            if (parents.length > 0) {
                var firstParent = "empty";
                var parentsStrs = [];
                $.each(parents, function(i, parent) {
                    var parentLiHtml = "<li data-concept-id='" + parent.conceptId + "' data-term='" + parent.fsn.term + "' class='treeLabel'>";
                    parentLiHtml = parentLiHtml + "<button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-";
                    if (parent.conceptId == "138875005" || parent.conceptId == "9999999999") {
                        parentLiHtml = parentLiHtml + "down";
                    } else {
                        parentLiHtml = parentLiHtml + "up";
                    }
                    parentLiHtml = parentLiHtml + " treeButton'  id='" + panel.divElement.id + "-treeicon-" + parent.conceptId + "'></i></button>";
                    if (parent.definitionStatus == "PRIMITIVE") {
                        parentLiHtml = parentLiHtml + '<span class="badge alert-warning context-menu" data-concept-id="' + parent.conceptId + '" data-fsn="' + parent.fsn.term + '" data-preferred-term="' + parent.pt.term + '" data-term="' + parent.fsn.term + '" draggable="true" ondragstart="drag(event)" class="treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + parent.conceptId + '">&nbsp;&nbsp;</span>&nbsp;&nbsp;';
                    } else {
                        parentLiHtml = parentLiHtml + '<span class="badge alert-warning context-menu" data-concept-id="' + parent.conceptId + '" data-fsn="' + parent.fsn.term + '" data-preferred-term="' + parent.pt.term + '" data-term="' + parent.fsn.term + '" draggable="true" ondragstart="drag(event)" class="treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + parent.conceptId + '">&equiv;</span>&nbsp;&nbsp;';
                    }
                    if (countryIcons[parent.module]) {
                        parentLiHtml = parentLiHtml + "<div class='phoca-flagbox' style='width:33px;height:33px'><span class='phoca-flag " + countryIcons[parent.module] + "'></span></div> ";
                    }
                    var defaultTerm = "";
                    if(panel.options.showPreferredTerm){
                        defaultTerm = parent.pt.term;
                    }
                    else{
                        defaultTerm = parent.fsn.term;
                    }
                    parentLiHtml = parentLiHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="treeLabel selectable-row" data-concept-id="' + parent.conceptId + '" data-term="' + parent.fsn.term + '" data-preferred-term="' + parent.pt.term + '" draggable="true" ondragstart="drag(event)"> ' + defaultTerm + '</span></a>';
                    parentLiHtml = parentLiHtml + "</li>";
                    parentsStrs.push(parentLiHtml);
                    if (firstParent == "empty") {
                        firstParent = parent.conceptId;
                    }
                });

                var staticChildren = topUl.children().slice(0);
                topUl.append(parentsStrs[0]);
                $('#' + panel.divElement.id + '-treenode-' + firstParent).closest('li').append("<ul id='parent-ul-id-" + firstParent + "' style='list-style-type: none; padding-left: 15px;'></ul>");
                if (panel.options.descendantsCount == true) {
                    parents.forEach(function(concept) {
                        var descedants = concept.descendantCount;                        
                        $(topUl).find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + descedants + "</span>");
                    });
                }
                var newMainChild;
                $.each(staticChildren, function(i, child) {
                    if ($(child).attr('data-concept-id') == conceptId) {
                        newMainChild = $(child);
                        var newUl = $('#' + panel.divElement.id + '-treenode-' + firstParent).closest('li').find('ul:first');
                        newUl.append($(child));
                        $(child).find('i:first').removeClass("glyphicon-chevron-up");
                        $(child).find('i:first').addClass("glyphicon-chevron-down");
                    }
                });
                $.each(staticChildren, function(i, child) {
                    if ($(child).attr('data-concept-id') != conceptId) {
                        $.each($(child).children(), function(i, subchild) {
                            if ($(subchild).is('ul')) {
                                newMainChild.append(subchild);
                            }
                        });
                        $('#' + panel.divElement.id + '-treenode-' + $(child).attr('data-concept-id')).closest('li').remove();
                    }
                });
                $.each(parentsStrs, function(i, parentsStr) {
                    if (parentsStr != parentsStrs[0]) {
                        topUl.prepend(parentsStr);
                    }
                });
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-up");
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
        }).fail(function() {});
    }

    this.setToConcept = function(conceptId, term, definitionStatus, module, descendantCount) {
        $("#" + panel.divElement.id + "-selectedConceptSection").hide();
        $("#" + panel.divElement.id + "-panelBody").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        var branch = options.edition;
        if(options.release.length > 0 && options.release !== 'None'){
            branch = branch + "/" + options.release;
        };
        $.ajaxSetup({
            headers : {
              'Accept-Language': panel.options.acceptLanguageValue
            }
        });
        $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + conceptId + "/parents?form=" + panel.options.selectedView + "&includeDescendantCount=" + panel.options.descendantsCount, function(result) {
            $.each(result, function(i, item) {
                if (typeof item.defaultTerm == "undefined") {
                    if(panel.options.showPreferredTerm){
                        item.defaultTerm = item.pt.term;
                    }
                    else{
                        item.defaultTerm = item.fsn.term;
                    }                    
                }
            });
        }).done(function(result) {            
            if (typeof term == "undefined" || typeof definitionStatus == "undefined" || term == null || definitionStatus == null) {
                $.ajaxSetup({
                    headers : {
                      'Accept-Language': panel.options.acceptLanguageValue
                    }
                });
                var urlArgs = '?descendantCountForm=' + panel.options.selectedView;                
                $.getJSON(options.serverUrl + "/browser/" + branch + "/concepts/" + conceptId + urlArgs, function(res) {
                    if(panel.options.showPreferredTerm){
                        res.defaultTerm = res.pt.term;
                    }
                    else{
                        res.defaultTerm = res.fsn.term;
                    }
                    
                    if (conceptId === 138875005) {
                        $("#" + panel.divElement.id + "-selectedConceptSection").hide();
                    } else {
                        $("#" + panel.divElement.id + "-selectedConceptTerm").text(res.defaultTerm);
                        $("#" + panel.divElement.id + "-selectedConceptSection").show();
                    }
                    
                    panel.setupParents(result, { conceptId: conceptId, defaultTerm: res.defaultTerm, definitionStatus: res.definitionStatus, module: module, descendantCount: res.descendantCount, fsn: res.fsn, pt: res.pt });
                });
            } else {
                panel.setupParents(result, { conceptId: conceptId, defaultTerm: term, definitionStatus: definitionStatus, module: module, descendantCount: descendantCount, fsn: res.fsn, pt: res.pt });
            }
        }).fail(function() {
            $("#" + panel.divElement.id + "-panelBody").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });
    }

    this.setLanguageRefsets = function(languageRefsets) {
        panel.initializeLanguageDropdown(languageRefsets);
    }

    panel.initializeLanguageDropdown = function(languageRefsets) {
        const usFSN = {id: '900000000000509007-fsn', label: 'FSN in US', dialectId: "900000000000509007"};
        const usPT = {id: '900000000000509007-pt', label: 'PT in US', dialectId: "900000000000509007"};
        var i18n_language = jQuery.i18n.prop('i18n_language');
        var languageFilter = [];
        languageFilter.push(usFSN);
        languageFilter.push(usPT);
        languageRefsets.forEach(function(languageRefset) {
            if (languageRefset.conceptId !== '900000000000509007' && languageRefset.conceptId !== '900000000000508004') {
                var dialect = {id: languageRefset.conceptId, label: 'PT in ' + panel.options.languageNameOfLangRefset[languageRefset.conceptId], dialectId: languageRefset.conceptId};
                languageFilter.push(dialect);
            }            
        });
        languageFilter.forEach(function(language) {        
            var li = "<li><button class='btn btn-link' id='" + panel.divElement.id + "-txLangage-" + language['id'] + "'><span>" + language['label'] + "</span></button></li>";
            $("#" + panel.divElement.id + "-txLanguageMenu").append(li);
            
            $("#" + panel.divElement.id + "-txLangage-" + language['id']).unbind("click");
            $("#" + panel.divElement.id + "-txLangage-" + language['id']).click(function(event) {                
                $("#" + panel.divElement.id + "-txLanguageSwitcherLabel").html("<span><span class='i18n' data-i18n-id='i18n_language'>" + i18n_language + "</span>: " + language['label'] + "</span>");
                panel.options.acceptLanguageValue = panel.getAcceptLanguage(language.dialectId);
                panel.options.showPreferredTerm = language['id'] !== '900000000000509007-fsn';
                
                panel.reloadCurrentConcept();
            });
        });

        var defaultLanguage;
        panel.options.showPreferredTerm = true;
        if (languageFilter.length === 2) {
            defaultLanguage = languageFilter[0];
            panel.options.showPreferredTerm = false;
        } else if (languageFilter.length === 3) {
            defaultLanguage = languageFilter[2];
        } else {
            defaultLanguage = languageFilter[1];
        }
        
        $("#" + panel.divElement.id + "-txLanguageSwitcherLabel").html("<span><span class='i18n' data-i18n-id='i18n_language'>" + i18n_language + "</span>: " + defaultLanguage['label'] + "</span>");
        panel.options.acceptLanguageValue = panel.getAcceptLanguage(defaultLanguage['dialectId']);
    }

    panel.getAcceptLanguage = function(dialectId) {
        if (dialectId !== "900000000000509007") {
            if (panel.options.languageNameOfLangRefset[dialectId].includes('-')) {
                var strArray = panel.options.languageNameOfLangRefset[dialectId].split('-');
                return strArray[0].toLowerCase() + '-' + strArray[1].toUpperCase() + '-x-' + dialectId + ';q=0.8,en-US;q=0.5';
            }

            return panel.options.languageNameOfLangRefset[dialectId] + '-' + panel.options.languageNameOfLangRefset[dialectId].toUpperCase() + '-x-' + dialectId + ';q=0.8,en-US;q=0.5';
        } else {
            return "en-us;q=0.8,en-gb;q=0.5";
        }        
    }

    panel.reloadCurrentConcept = function() {
        if (panel.default && panel.default.conceptId) {
            panel.setToConcept(panel.default.conceptId);
        }
        else {
            panel.setToConcept(138875005); // root concept
        }
    }

    // Subscription methods
    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
        //        console.log('Subscribing to id: ' + panelId);
        var alreadySubscribed = false;
        $.each(panel.subscriptionsColor, function(i, field) {
            if (field == panelToSubscribe.markerColor) {
                alreadySubscribed = true;
            }
        });
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {                
                panel.default.conceptId = data.conceptId;
                panel.setToConcept(data.conceptId);
                
            });
            panel.subscriptions.push(subscription);
            panelToSubscribe.subscribers.push(panel.divElement.id);
            panel.subscriptionsColor.push(panelToSubscribe.markerColor);
        }        
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        $("#" + panelId + "-subscribersMarker").show();
    }

    this.refsetSubscribe = function(refsetId) {
        channel.subscribe("refsetSubscription-" + refsetId, function(data, envelope) {
            panel.setToConcept(data.conceptId);
        });
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
                //                colors.push(panelToUnsubscribe.markerColor);
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

    this.updateCanvas = function() {
        if (!conceptId || conceptId == 138875005) {        
            panel.setToConcept(138875005);       
        } else {
            if (xhr != null) {
                xhr.abort();
                //console.log("aborting call...");
            }
    
            panel.setToConcept(conceptId); 
        }
    }

    this.setupCanvas();
}

function clearTaxonomyPanelSubscriptions(divElementId1) {
    var d1;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == divElementId1) {
            d1 = field;
        }
    });
    d1.unsubscribeAll();
    $("#" + divElementId1).find('.linker-button').popover('toggle');
}

function historyInTaxPanel(divElementId, conceptId) {
    $.each(componentsRegistry, function(i, field) {
        //console.log(field.divElement.id + ' == ' + divElementId);
        if (field.divElement.id == divElementId) {
            //            $('#' + divElementId + '-searchBox').val(searchTerm);
            //            field.search(searchTerm,0,100,false);
            field.setToConcept(conceptId);
        }
    });
    $('.history-button').popover('hide');
}

(function($) {
    $.fn.addTaxonomy = function(options) {
        this.filter("div").each(function() {
            var tx = new conceptDetails(this, options);
        });
    };
}(jQuery));
