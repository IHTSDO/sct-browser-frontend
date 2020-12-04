/**
 * Created by termmed on 9/1/14.
 */

function queryComputerPanel(divElement, options) {
    var panel = this;
    panel.showId = false;
    var thread = null;
    var limit = 100;
    var skip = 0;
    var xhrTotal = null;
    var xhrExecute = null;
    panel.currentEx = 0;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    this.options.eclQueryFilter = "inferred";
    this.type = "query-computer";
    panel.subscribers = [];
    panel.totalResults = [];

    if (!componentsRegistry) {
        componentsRegistry = [];
        componentsRegistry.push(panel);
    } else {
        var componentLoaded = false;
        $.each(componentsRegistry, function(i, field) {
            if (field.divElement && field.divElement.id == panel.divElement.id) {
                componentLoaded = true;
            }
        });
        if (componentLoaded == false) {
            componentsRegistry.push(panel);
        }
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
        //panel.markerColor = panel.getNextMarkerColor(globalMarkerColor);
    panel.markerColor = "asdasdasdas";

    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
        var alreadySubscribed = false;
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
                if (data) {
                    panel.updateCanvas(data);
                }
            });
        }
        // $("#" + panelId + "-ownMarker").show();
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        // $("#" + panelId + "-ownMarker").show();
    }

    this.setUpPanel = function() {
        var context = {
            divElementId: panel.divElement.id,
            examples: [{
                    title: "All excision procedures that are also procedures on the digestive system",
                    context: [{
                        modifier: "Include",
                        criterias: [
                            { criteria: "descendantOf", conceptId: "65801008", term: "Excision (procedure)" },
                            { criteria: "descendantOf", conceptId: "118673008", term: "Procedure on digestive system (procedure)" }
                        ]
                    }]
                },
                {
                    title: "All pneumonias except intersticial pneumonias",
                    context: [{
                            modifier: "Include",
                            criterias: [
                                { criteria: "descendantOf", conceptId: "233604007", term: "Pneumonia (disorder)" }
                            ]
                        },
                        {
                            modifier: "Exclude",
                            criterias: [
                                { criteria: "descendantOrSelfOf", conceptId: "64667001", term: "Interstitial pneumonia (disorder)" }
                            ]
                        }
                    ]
                },
                {
                    title: "Hypertension related concepts, disorders, personal history and family history",
                    context: [{
                            modifier: "Include",
                            criterias: [
                                { criteria: "descendantOf", conceptId: "38341003", term: "Hypertensive disorder, systemic arterial (disorder)" }
                            ]
                        },
                        {
                            modifier: "Include",
                            criterias: [
                                { criteria: "self", conceptId: "160273004", term: "No family history: Hypertension (situation)" }
                            ]
                        },
                        {
                            modifier: "Include",
                            criterias: [
                                { criteria: "descendantOrSelfOf", conceptId: "161501007", term: "History of hypertension (situation)" }
                            ]
                        },
                        {
                            modifier: "Include",
                            criterias: [
                                { criteria: "descendantOrSelfOf", conceptId: "160357008", term: "Family history: Hypertension (situation)" }
                            ]
                        }
                    ]
                }
                //{
                //    title: "",
                //    context: [
                //        {
                //            modifier: "",
                //            criterias: [
                //                {criteria: "", conceptId: "", term: "", type: {conceptId: "", term: ''}}
                //            ]
                //        }
                //    ]
                //},
            ]
        };
        $(divElement).html(JST["snomed-interaction-components/views/developmentQueryPlugin/main.hbs"](context));

        $(divElement).find('textarea').unbind();
        $(divElement).find('textarea').keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
                var s = $(this).val();
                $(this).val(s + "\n");
            }
        });
        $('[data-toggle="tooltip"]').tooltip();

        $("#" + panel.divElement.id + "-ExamplesModal").scrollspy({ target: '#' + panel.divElement.id + '-sidebar', offset: 80 });

        var clicked = false;
        $("#" + panel.divElement.id + "-mynav li a").click(
            function() {
                //console.log('click...');
                $('#' + panel.divElement.id + '-mycontent > div > h4').css('padding-top', 0);
                $($(this).attr('href') + ' > h4').css('padding-top', '50px');
                clicked = true;
            }
        );

        $("#" + panel.divElement.id + "-ExamplesModal").on('activate.bs.scrollspy', function() {
            //console.log('scrolling...');
            if (!clicked) $('#' + panel.divElement.id + '-mycontent > div > h4').css('padding-top', 0);
            clicked = false;
        });

        $('#' + panel.divElement.id + '-searchBoxOption').keyup(function() {
            clearTimeout(thread);
            var $this = $(this);
            thread = setTimeout(function() {
                panel.doSearch();
            }, 500);
        });
        
        $("#" + panel.divElement.id + "-noneTypeButton").click(function(event) {
            panel.options.typeSearchFilter = '';            
            panel.updateTypeFilterLabel();
        });

        $("#" + panel.divElement.id + "-fsnTypeButton").click(function(event) {
            panel.options.typeSearchFilter = 'fsn';            
            panel.updateTypeFilterLabel();
        });

        $("#" + panel.divElement.id + "-synonymTypeButton").click(function(event) {
            panel.options.typeSearchFilter = 'synonym';            
            panel.updateTypeFilterLabel();
        });

        $("#" + panel.divElement.id + "-definitionTypeButton").click(function(event) {
            panel.options.typeSearchFilter = 'definition';            
            panel.updateTypeFilterLabel();
        });

        $("#" + panel.divElement.id + "-ExamplesModal").on('shown.bs.modal', function() {
            $("#" + panel.divElement.id + "-mycontentExamples").html(JST["snomed-interaction-components/views/developmentQueryPlugin/examples.hbs"](context));
            context.examples.forEach(function(item, index) {
                var contextHtml = "";
                item.context.forEach(function(loopContext) {
                    //contextHtml+= JST[""(loopContext)];
                    contextHtml += JST["snomed-interaction-components/views/developmentQueryPlugin/criteria.hbs"](loopContext);
                });
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().html(contextHtml);
                if ($("#" + panel.divElement.id + "-ExpTab").hasClass("active")) {
                    contextHtml = panel.exportToConstraintGrammar(true, false, false, $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first());
                    if (contextHtml.indexOf("(") == 0)
                        contextHtml = contextHtml.substr(1, contextHtml.length - 2);
                    $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().html(contextHtml);
                }
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().find(".btn").addClass("disabled");
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".query-condition").each(function(index) {
                    $(this).find(".line-number").html(index + 1);
                });
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".loadExample").first().attr("data-htmlValue", $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().html());
            });
            $("#" + panel.divElement.id + "-mycontentExamples").find(".loadExample").unbind();
            $("#" + panel.divElement.id + "-mycontentExamples").find(".loadExample").click(function(e) {
                var htmlToPut = $(e.target).attr("data-htmlValue");
                if ($("#" + panel.divElement.id + "-ExpTab").hasClass("active")) {
                    $('#' + panel.divElement.id + '-ExpText').html(htmlToPut);
                    $('#' + panel.divElement.id + '-ExpText').val(htmlToPut.replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<"));
                    $("#" + panel.divElement.id + "-ExamplesModal").modal("hide");
                } else {
                    $('#' + panel.divElement.id + '-listGroup').html(htmlToPut);
                    $('#' + panel.divElement.id + '-listGroup').find(".btn").removeClass("disabled");
                    $('#' + panel.divElement.id + '-listGroup').find(".query-condition").each(function(i) {
                        var critToUpdate = $(this);
                        $(critToUpdate).find("small").remove();
                        $(critToUpdate).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                        $("#" + panel.divElement.id + "-ExamplesModal").modal("hide");
                        panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critToUpdate), true, function(resultCount) {
                            $(critToUpdate).find("small").remove();
                            $(critToUpdate).find(".glyphicon-refresh").first().remove();
                            var cont = parseInt(resultCount);
                            $(critToUpdate).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                        });

                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").unbind();
                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").click(function(e) {
                            var prevValue = $(e.target).closest(".constraint").attr('data-criteria');
                            var newValue = $(e.target).html();
                            if (prevValue != newValue) {
                                $(e.target).closest(".constraint").attr('data-criteria', newValue);
                                $(e.target).closest("div").find("button").first().html(newValue + "&nbsp;");
                                var critToUpdate = $(e.target).closest(".query-condition");
                                $(critToUpdate).find("small").remove();
                                $(critToUpdate).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                                panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critToUpdate), true, function(resultCount) {
                                    $(critToUpdate).find("small").remove();
                                    $(critToUpdate).find(".glyphicon-refresh").first().remove();
                                    var cont = parseInt(resultCount);
                                    $(critToUpdate).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                                });
                            }
                        });

                        $(divElement).find(".removeLi").unbind();
                        $(divElement).find(".removeLi").disableTextSelect();
                        $(divElement).find(".removeLi").click(function(e) {
                            $(e.target).closest("li").remove();
                            panel.renumLines();
                        });
                    });
                }
            });
        });

        // if (!panel.typeArray || !panel.typeArray.length) {
        //     var branch = options.edition;
        //     if(options.release.length > 0 && options.release !== 'None'){
        //         branch = branch + "/" + options.release;
        //     };
        //     $.ajax({
        //         type: "POST",
        //         url: options.serverUrl.replace("snomed", "expressions/") + branch + "/execute/brief",
        //         data: {
        //             expression: "< 410662002|Concept model attribute (attribute)|",
        //             limit: 5000,
        //             skip: 0,
        //             form: "inferred"
        //         },
        //         dataType: "json",
        //         //timeout: 300000,
        //         success: function(result) {
        //             //console.log(result);
        //             //console.log(result.computeResponse.matches);
        //             result.computeResponse.matches.push({ conceptId: "<< 47429007", defaultTerm: "Associated with (attribute) [<<]" });
        //             result.computeResponse.matches.push({ conceptId: "<< 405815000", defaultTerm: "Procedure device (attribute) [<<]" });
        //             result.computeResponse.matches.push({ conceptId: "<< 405816004", defaultTerm: "Procedure morphology (attribute) [<<]" });
        //             result.computeResponse.matches.push({ conceptId: "<< 363704007", defaultTerm: "Procedure site (attribute) [<<]" });
        //             panel.typeArray = result.computeResponse.matches;
        //             panel.typeArray.sort(function(a, b) {
        //                 if (a.defaultTerm < b.defaultTerm)
        //                     return -1;
        //                 if (a.defaultTerm > b.defaultTerm)
        //                     return 1;
        //                 return 0;
        //             });
        //         }
        //     }).done(function(result) {

        //     });
        // }

        //$.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/410662002/children?form=inferred").done(function(result) {
        //    //console.log(result);
        //    result.sort(function (a, b) {
        //        if (a.defaultTerm < b.defaultTerm)
        //            return -1;
        //        if (a.defaultTerm > b.defaultTerm)
        //            return 1;
        //        return 0;
        //    });
        //    panel.typeArray = result;
        //});

        //$("#" + panel.divElement.id + "-ExamplesModal").find(".btn").addClass("disabled");
        //$("#" + panel.divElement.id + "-ExamplesModal").find(".loadExample").removeClass("disabled");
        //$("#" + panel.divElement.id + "-ExamplesModal-close").removeClass("disabled");

        var bindAddCriteriaFunction = function() {
            $(divElement).find(".addCriteria").unbind();
            $(divElement).find(".addCriteria").disableTextSelect();
            $(divElement).find(".addCriteria").click(function(e) {
                $(e.target).closest(".form-group").hide();
                var criteria = $('#' + panel.divElement.id + '-selectedCriteria').html();
                var typeSelected = $(e.target).attr("data-type");
                if ($(divElement).find(".addedCriteria").length)
                    typeSelected = $(divElement).find(".addedCriteria").first().attr("data-typeSelected");
                $(e.target).closest(".form-inline").append(JST["snomed-interaction-components/views/developmentQueryPlugin/andCriteria.hbs"]({ criteria: criteria, typeSelected: typeSelected, types: panel.typeArray }));

                $(divElement).find(".addedCriteria").find(".selectTypeOpt").unbind();
                $(divElement).find(".addedCriteria").find(".selectTypeOpt").click(function(e) {
                    $(e.target).closest(".typeCritCombo").attr("data-type-term", $(e.target).attr("data-term"));
                    $(e.target).closest(".typeCritCombo").attr("data-type-concept-id", $(e.target).attr("data-id"));
                    var term = $(e.target).attr("data-term");
                    if (term.length > 15)
                        term = term.substr(0, 14) + "...";
                    $(e.target).closest("div").find("span").first().html(term);
                });

                $(divElement).find(".addedCriteria").find(".removeCriteria").unbind();
                $(divElement).find(".addedCriteria").find(".removeCriteria").click(function(e) {
                    $(e.target).closest(".addedCriteria").remove();
                    var foundAddedCriteria = $(divElement).find(".addedCriteria");
                    if (!foundAddedCriteria.length) {
                        $("#" + panel.divElement.id + "-addCriteriaAnd").show();
                    } else {
                        $(divElement).find(".addedCriteria").find(".dropFirstType").hide();
                        $(divElement).find(".addedCriteria").first().find(".dropFirstType").first().show();
                        //console.log($(foundAddedCriteria[foundAddedCriteria.length - 1]).find(".addCriteria").first().closest(".form-group"));
                        $(foundAddedCriteria[foundAddedCriteria.length - 1]).find(".addCriteria").first().closest(".form-group").show();
                    }
                });
                $(divElement).find(".addedCriteria").find("a[data-role='criteria-selector']").unbind();
                $(divElement).find(".addedCriteria").find("a[data-role='criteria-selector']").click(function(e) {
                    $(e.target).closest(".dropdown").find("span").first().html($(e.target).html());
                });
                bindAddCriteriaFunction();
            });
        };
        bindAddCriteriaFunction();

        $('#' + panel.divElement.id + '-addCriteriaAnd').unbind();

        $('#' + panel.divElement.id + '-clearButton').unbind();
        $('#' + panel.divElement.id + '-clearButton').disableTextSelect();
        $('#' + panel.divElement.id + '-clearButton').click(function() {
            if (xhrExecute != null)
                xhrExecute.abort();
            panel.setUpPanel();
        });

        $("#" + panel.divElement.id + "-configButton").click(function(event) {
            panel.setupOptionsPanel();
        });

        $("#" + panel.divElement.id + "-apply-button").click(function() {            
            panel.readOptionsPanel();
            
            var expression = $.trim($("#" + panel.divElement.id + "-ExpText").val());
            var optionalTermFilter = $.trim($("#" + panel.divElement.id + "-searchBoxOption").val());            
            $('#' + panel.divElement.id + '-computeInferredButton2').addClass("disabled");           
            panel.execute(panel.options.eclQueryFilter, expression, true, null, optionalTermFilter);            
            $('#' + panel.divElement.id + '-computeInferredButton2').removeClass("disabled");
           
        });

        $('#' + panel.divElement.id + '-copyConstraint').unbind();
        $("#" + panel.divElement.id + "-copyConstraint").disableTextSelect();
        var clientGrammar = new ZeroClipboard(document.getElementById(panel.divElement.id + "-copyConstraint"));
        clientGrammar.on("ready", function(readyEvent) {
            clientGrammar.on("copy", function(event) {
                //                var grammar = panel.exportToConstraintGrammar(false, fullSyntax);
                //console.log(grammar);
                $("#" + panel.divElement.id + "-copyConstraint").addClass("animated rubberBand");
                window.setTimeout(function() {
                    $("#" + panel.divElement.id + "-copyConstraint").removeClass('animated rubberBand');
                }, 1000);
                alertEvent("Constraint Grammar copied to clipboard", "success");
                var clipboard = event.clipboardData;
                clipboard.setData("text/plain", panel.grammarToCopy);
            });
        });


        panel.options.devQuery = true;

        $('#' + panel.divElement.id + '-exportXls').unbind();
        $('#' + panel.divElement.id + '-exportXls').click(function(e) {
            //            var rowsHtml = "";
            //            alertEvent("Please wait", "info");
            //            panel.getTotalResults(function(){
            //                $.each(panel.allResults, function(i, field){
            //                    rowsHtml+= "<tr><td>" + field.defaultTerm + "</td><td>" + field.conceptId + "</td></tr>";
            //                });
            //                $("#" + panel.divElement.id + "-outputBody2").html(rowsHtml);
            if (panel.allResults) {
                return ExcellentExport.excel(this, panel.divElement.id + '-output2');
            } else {
                e.preventDefault();
                e.stopPropagation();
                panel.getTotalResults();
            }
            //            });
        });

        $('#' + panel.divElement.id + '-exportBriefcase').unbind();
        $('#' + panel.divElement.id + '-exportBriefcase').click(function(e) {
            function exportToBriefcase() {
                var result = [];
                $.each(panel.allResults, function(i, field) {
                    var loopConcept = {};
                    loopConcept.conceptId = field.conceptId;
                    loopConcept.defaultTerm = field.defaultTerm;
                    loopConcept.module = field.module;
                    result.push(loopConcept);
                });
                briefcase.addConcepts(result);
            }
            if (panel.allResults) {
                exportToBriefcase();
            } else {
                alertEvent("Exporting concepts, please wait", "info");
                panel.getTotalResults(function() {
                    exportToBriefcase();
                });
            }
        });

        $('#' + panel.divElement.id + '-open-grammar').unbind();
        $("#" + panel.divElement.id + "-open-grammar").disableTextSelect();
        $("#" + panel.divElement.id + "-open-grammar").click(function(e) {
            panel.updateGrammarModal(false);
        });
        //-brief-syntax-button
        $('#home-' + panel.divElement.id + '-full-syntax-button').unbind();
        $('#home-' + panel.divElement.id + '-full-syntax-button').disableTextSelect();
        $('#home-' + panel.divElement.id + '-full-syntax-button').addClass("btn-primary");
        $('#home-' + panel.divElement.id + '-full-syntax-button').removeClass("btn-default");
        $('#home-' + panel.divElement.id + '-full-syntax-button').click(function(event) {
            panel.updateGrammarModal(true);
        });

        $('#home-' + panel.divElement.id + '-brief-syntax-button').unbind();
        $('#home-' + panel.divElement.id + '-brief-syntax-button').disableTextSelect();
        $('#home-' + panel.divElement.id + '-brief-syntax-button').addClass("btn-default");
        $('#home-' + panel.divElement.id + '-brief-syntax-button').removeClass("btn-primary");
        $('#home-' + panel.divElement.id + '-brief-syntax-button').click(function(event) {
            panel.updateGrammarModal(false);
        });

        $('#' + panel.divElement.id + '-exportBriefcaseClean').unbind();
        $('#' + panel.divElement.id + '-exportBriefcaseClean').click(function(e) {
            function exportToBriefcase() {
                var result = [];
                briefcase.emptyBriefcase();
                $.each(panel.allResults, function(i, field) {
                    var loopConcept = {};
                    loopConcept.conceptId = field.conceptId;
                    loopConcept.defaultTerm = field.defaultTerm;
                    loopConcept.module = field.module;
                    result.push(loopConcept);
                });
                briefcase.addConcepts(result);
            }
            if (panel.allResults) {
                exportToBriefcase();
            } else {
                alertEvent("Exporting concepts, please wait", "info");
                panel.getTotalResults(function() {
                    exportToBriefcase();
                });
            }
        });

        $('#' + panel.divElement.id + '-computeButton').unbind();
        $('#' + panel.divElement.id + '-computeButton').click(function(e) {
            var query = $('#' + panel.divElement.id + '-input').val();
            var request = {
                query: JSON.parse(query),
                pathId: options.path.id
            };
            panel.compute(request);
        });

        $("#" + panel.divElement.id).find("a[data-role='modifier-selector']").unbind();
        $("#" + panel.divElement.id).find("a[data-role='modifier-selector']").click(function(e) {
            $('#' + panel.divElement.id + '-selectedModifier').html($(e.target).html());
        });

        $('#' + panel.divElement.id + '-selectedConcept').show();
        $('#' + panel.divElement.id + '-selectedType').hide();
        $('#' + panel.divElement.id + '-selectedTarget').hide();
        $('#' + panel.divElement.id + '-searchTerm').hide();
        $('#' + panel.divElement.id + '-searchTerm').unbind();
        $('#' + panel.divElement.id + '-searchTerm').keyup(function(e) {
            if (e.keyCode === 13) {
                $('#' + panel.divElement.id + '-addCriteriaButton').click();
            }
        });
        $('#' + panel.divElement.id + '-formdropdown').hide();
        $("#" + panel.divElement.id).find("a[data-role='criteria-selector']").unbind();
        $("#" + panel.divElement.id).find("a[data-role='criteria-selector']").click(function(e) {
            $('#' + panel.divElement.id + '-selectedCriteria').html($(e.target).html());
            //$(e.target).closest(".dropdown").find("span").first().html($(e.target).html());
            var selectedCriteria = $(e.target).html();
            if (selectedCriteria == "hasDescription") {
                $('#' + panel.divElement.id + '-selectedConcept').hide();
                $('#' + panel.divElement.id + '-selectedType').hide();
                $('#' + panel.divElement.id + '-selectedTarget').hide();
                $('#' + panel.divElement.id + '-searchTerm').show();
                $('#' + panel.divElement.id + '-formdropdown').hide();
            } else if (selectedCriteria == "hasRelationship") {
                $('#' + panel.divElement.id + '-selectedConcept').hide();
                $('#' + panel.divElement.id + '-selectedType').show();
                $('#' + panel.divElement.id + '-selectedTarget').show();
                $('#' + panel.divElement.id + '-searchTerm').hide();
                $('#' + panel.divElement.id + '-formdropdown').show();
            } else {
                $('#' + panel.divElement.id + '-selectedConcept').show();
                $('#' + panel.divElement.id + '-selectedType').hide();
                $('#' + panel.divElement.id + '-selectedTarget').hide();
                $('#' + panel.divElement.id + '-searchTerm').hide();
                $('#' + panel.divElement.id + '-formdropdown').hide();
            }
        });
        $("#" + panel.divElement.id).find("a[data-role='form-selector']").unbind();
        $("#" + panel.divElement.id).find("a[data-role='form-selector']").click(function(e) {
            $('#' + panel.divElement.id + '-selectedForm').html($(e.target).html());
        });

        $('#' + panel.divElement.id + '-addCriteriaButton').unbind();
        $('#' + panel.divElement.id + '-addCriteriaButton').click(function(e) {
            var modifier = $('#' + panel.divElement.id + '-selectedModifier').html();
            var criteria = $('#' + panel.divElement.id + '-selectedCriteria').html();
            var conceptIdDroped = $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId");
            if ($('#' + panel.divElement.id + '-listGroup').find('.constraint[data-criteria="' + criteria + '"][data-concept-id="' + conceptIdDroped + '"]').length) {
                if ($('#' + panel.divElement.id + '-listGroup').find('.constraint[data-criteria="' + criteria + '"][data-concept-id="' + conceptIdDroped + '"]').closest(".query-condition").attr("data-modifier") == modifier) {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Criteria already added...");
                } else {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Contradictory criteria...");
                }
            }
            //if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-criteria="' + criteria + '"][data-modifier="' + modifier + '"][data-concept-id="' + conceptIdDroped + '"]').length){
            //    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
            //    $('#' + panel.divElement.id + '-addmsg').html("Criteria already added...");
            //}else if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-criteria="' + criteria + '"][data-concept-id="' + conceptIdDroped + '"]').length){
            //    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
            //    $('#' + panel.divElement.id + '-addmsg').html("Contradictory criteria...");
            //}
            else if (criteria == "hasDescription") {
                var searchTerm = $('#' + panel.divElement.id + '-searchTerm').val();
                if (searchTerm == "") {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Enter a search term...");
                } else {
                    $('#' + panel.divElement.id + '-addmsg').html("");
                    $('#' + panel.divElement.id + '-conceptField').removeClass("has-error");
                    var context2 = {
                        modifier: modifier,
                        criteria: criteria,
                        searchTerm: searchTerm
                    };
                    $('#' + panel.divElement.id + '-listGroup').append(JST["snomed-interaction-components/views/developmentQueryPlugin/searchCriteria.hbs"](context2));
                    panel.renumLines();
                    $(divElement).find(".removeLi").unbind();
                    $(divElement).find(".removeLi").disableTextSelect();
                    $(divElement).find(".removeLi").click(function(e) {
                        $(e.target).closest("li").remove();
                        panel.renumLines();
                    });
                    $('#' + panel.divElement.id + '-selectedConcept').val("");
                    $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedType').val("");
                    $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedTarget').val("");
                    $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-searchTerm').val("");
                }
            } else if (criteria == "hasRelationship") {
                var typeId = $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId");
                var typeTerm = $('#' + panel.divElement.id + '-selectedType').val();
                var targetId = $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId");
                var targetTerm = $('#' + panel.divElement.id + '-selectedTarget').val();
                var form = $('#' + panel.divElement.id + '-selectedForm').html();
                if ((typeof typeId == "undefined" || typeId == "") && typeTerm == "" &&
                    (typeof targetId == "undefined" || targetId == "") && targetTerm == "") {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Drop a concept...");
                } else {
                    $('#' + panel.divElement.id + '-addmsg').html("");
                    $('#' + panel.divElement.id + '-conceptField').removeClass("has-error");
                    var context2 = {
                        modifier: modifier,
                        criteria: criteria,
                        typeId: typeId,
                        typeTerm: typeTerm,
                        targetId: targetId,
                        targetTerm: targetTerm,
                        form: form
                    };
                    $('#' + panel.divElement.id + '-listGroup').append(JST["snomed-interaction-components/views/developmentQueryPlugin/relsCriteria.hbs"](context2));
                    panel.renumLines();
                    $(divElement).find(".removeLi").unbind();
                    $(divElement).find(".removeLi").disableTextSelect();
                    $(divElement).find(".removeLi").click(function(e) {
                        $(e.target).closest("li").remove();
                        panel.renumLines();
                    });
                    $('#' + panel.divElement.id + '-selectedConcept').val("");
                    $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedType').val("");
                    $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedTarget').val("");
                    $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-searchTerm').val("");
                }
            } else {
                var conceptId = $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId");
                var term = $('#' + panel.divElement.id + '-selectedConcept').val();
                if (typeof conceptId == "undefined" || conceptId == "" || term == "") {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Drop a concept...");
                } else {
                    $('#' + panel.divElement.id + '-addmsg').html("");
                    $('#' + panel.divElement.id + '-conceptField').removeClass("has-error");
                    var criterias = [{ criteria: criteria, conceptId: conceptId, term: term }];
                    if ($(divElement).find(".addedCriteria").length) {
                        var typeSelected = $(divElement).find(".addedCriteria").first().attr("data-typeSelected");
                        $(divElement).find(".addedCriteria").each(function(i) {
                            var addedConceptId = $(this).find(".andCriteriaConcept").first().attr("data-conceptId");
                            var addedTerm = $(this).find(".andCriteriaConcept").first().val();
                            var addedCrit = $(this).find(".addSelectCriteria").first().html();
                            if (addedConceptId && addedTerm) {
                                criterias.forEach(function(criteriaAdded) {
                                    if (criteriaAdded.criteria == addedCrit && criteriaAdded.conceptId == addedConceptId) {
                                        $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                                        $('#' + panel.divElement.id + '-addmsg').html("Criteria already added...");
                                        return false;
                                    }
                                });
                                var crit = {
                                    criteria: addedCrit,
                                    conceptId: addedConceptId,
                                    term: addedTerm
                                };
                                if (typeSelected == "Refinement") {
                                    if ($(this).find(".typeCritCombo").first().attr("data-type-concept-id") == "false") {
                                        $('#' + panel.divElement.id + '-addmsg').html("Select a type...");
                                        return false;
                                    } else {
                                        crit.type = {
                                            conceptId: $(this).find(".typeCritCombo").first().attr("data-type-concept-id"),
                                            term: $(this).find(".typeCritCombo").first().attr("data-type-term")
                                        };
                                    }
                                }
                                criterias.push(crit);
                            } else {
                                $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                                $('#' + panel.divElement.id + '-addmsg').html("Drop a concept...");
                                return false;
                            }
                        });
                    }
                    if ($('#' + panel.divElement.id + '-addmsg').html() == "") {
                        $(divElement).find(".addedCriteria").remove();
                        $("#" + panel.divElement.id + "-addCriteriaAnd").show();
                        var context2 = {
                            modifier: modifier,
                            criterias: criterias
                        };
                        // Add Excludes always at the end, and includes before exclude
                        var foundExclude = false;
                        $('#' + panel.divElement.id + '-listGroup').find(".query-condition").each(function(index) {
                            var modifier = $(this).data('modifier');
                            if (modifier == "Exclude") {
                                $(this).before(JST["snomed-interaction-components/views/developmentQueryPlugin/criteria.hbs"](context2));
                                var critAdded = $('#' + panel.divElement.id + '-listGroup').find(".query-condition")[index];
                                $(critAdded).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                                panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critAdded), true, function(resultCount) {
                                    $(critAdded).find(".glyphicon-refresh").first().remove();
                                    var cont = parseInt(resultCount);
                                    $(critAdded).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                                });
                                foundExclude = true;
                                return false;
                            }
                        });
                        if (!foundExclude) {
                            $('#' + panel.divElement.id + '-listGroup').append(JST["snomed-interaction-components/views/developmentQueryPlugin/criteria.hbs"](context2));
                            var critAdded = $('#' + panel.divElement.id + '-listGroup').find(".query-condition")[$('#' + panel.divElement.id + '-listGroup').find(".query-condition").length - 1];
                            $(critAdded).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                            panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critAdded), true, function(resultCount) {
                                $(critAdded).find(".glyphicon-refresh").first().remove();
                                var cont = parseInt(resultCount);
                                $(critAdded).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                            });
                        }
                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").unbind();
                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").click(function(e) {
                            var prevValue = $(e.target).closest(".constraint").attr('data-criteria');
                            var newValue = $(e.target).html();
                            if (prevValue != newValue) {
                                $(e.target).closest(".constraint").attr('data-criteria', newValue);
                                $(e.target).closest("div").find("button").first().html(newValue + "&nbsp;");
                                var critToUpdate = $(e.target).closest(".query-condition");
                                $(critToUpdate).find("small").remove();
                                $(critToUpdate).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                                panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critToUpdate), true, function(resultCount) {
                                    $(critToUpdate).find("small").remove();
                                    $(critToUpdate).find(".glyphicon-refresh").first().remove();
                                    var cont = parseInt(resultCount);
                                    $(critToUpdate).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                                });
                            }
                        });
                        panel.renumLines();

                        $(divElement).find(".removeLi").unbind();
                        $(divElement).find(".removeLi").disableTextSelect();
                        $(divElement).find(".removeLi").click(function(e) {
                            $(e.target).closest("li").remove();
                            panel.renumLines();
                        });
                        $('#' + panel.divElement.id + '-selectedConcept').val("");
                        $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId", "");
                        $('#' + panel.divElement.id + '-selectedType').val("");
                        $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId", "");
                        $('#' + panel.divElement.id + '-selectedTarget').val("");
                        $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId", "");
                        $('#' + panel.divElement.id + '-searchTerm').val("");
                    }
                }
            }
        });

        $('#' + panel.divElement.id + '-computeInferredButton2').unbind();
        $('#' + panel.divElement.id + '-computeInferredButton2').disableTextSelect();
        $('#' + panel.divElement.id + '-computeInferredButton2').click(function(e) {
            var expression = $.trim($("#" + panel.divElement.id + "-ExpText").val());
            var optionalTermFilter = $.trim($("#" + panel.divElement.id + "-searchBoxOption").val());
            $('#' + panel.divElement.id + '-computeInferredButton2').addClass("disabled");
            /*  $.post(options.serverUrl.replace("snomed", "expressions/") + "parse/brief", { expression: expression }).done(function(res) {
                  //console.log(res);
                  if (res.validation) { */
            panel.execute("inferred", expression, true, null, optionalTermFilter);
            /* } else {
                      alertEvent("Invalid Expression", "error")
                  }
              }).fail(function(err) {
                  //console.log(err);
              }).always(function() { */
            $('#' + panel.divElement.id + '-computeInferredButton2').removeClass("disabled");
            // });
        });

        $('#' + panel.divElement.id + '-computeInferredButton').unbind();
        $('#' + panel.divElement.id + '-computeInferredButton').disableTextSelect();
        $('#' + panel.divElement.id + '-computeInferredButton').click(function(e) {
            var grammar = panel.exportToConstraintGrammar(false, false);
            if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-modifier="Include"]').length) {
                panel.execute("inferred", grammar, true);
            } else {
                //console.log("add at least one include");
                //alertEvent("Add at least one include", "error");
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $('#' + panel.divElement.id + '-').html("<span class='text-danger'>Add at least one include</span>");
                $("#" + panel.divElement.id + "-footer").html("");
                //$('#' + panel.divElement.id + '-resultInfo').html('ERROR');
            }
        });

        $('#' + panel.divElement.id + '-computeOntoserver').unbind();
        $('#' + panel.divElement.id + '-computeOntoserver').click(function(e) {
            var grammar = panel.exportToConstraintGrammar(false, false);
            if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-modifier="Include"]').length) {
                var ontoserverUrl = "http://52.21.192.244:8080/ontoserver/resources/ontology/findConceptsByQuery?versionedId=http%3A%2F%2Fsnomed.info%2Fsct%2F32506021000036107%2Fversion%2F20151130&field=shortId&field=label&field=primitive&field=inferredAxioms&format=json&start=0&rows=100";
                var ontoserverConstraintParam = "&query=Constraint(";
                var sampleEncodedConstraint = "%3C%2019829001%20%7Cdisorder%20of%20lung%7C%3A%20%0A116676008%20%7Cassociated%20morphology%7C%20%3D%20*";
                var encodedGrammar = encodeURIComponent(grammar);
                var executeUrl = ontoserverUrl + ontoserverConstraintParam + encodedGrammar + ")";
                panel.currentEx++;
                var i18n_searching_text = jQuery.i18n.prop('i18n_searching');
                $('#' + panel.divElement.id + '-resultInfo').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");                
                $('#' + panel.divElement.id + '-footer').html('<div class="progress progress-striped active"> <div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span>'+i18n_searching_text+'</span></div></div><p id="' + panel.divElement.id + '-waitingSearch-text" class="lead animated"></p>');
                $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                $("#" + panel.divElement.id + "-waitingSearch-text").html("OntoServer is processing your instructions...");
                $.getJSON(executeUrl, function(result) {
                    //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
                }).done(function(result) {
                    //console.log(result);
                    var i18n_found_text = jQuery.i18n.prop('i18n_found');                   
                    var i18n_concepts_text = jQuery.i18n.prop('i18n_concepts');                    
                    $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'><span class='i18n' data-i18n-id='i18n_found'>"+ i18n_found_text +"</span> " + result.totalResults + " <span class='i18n' data-i18n-id='i18n_concepts'>"+ i18n_concepts_text +"</span></span>");
                    $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                    //TODO: implement pagination with Ontoserver
                    if (result.totalResults > 100) {
                        $('#' + panel.divElement.id + '-footer').html("Showing first 100 " + panel.options.eclQueryFilter + " matches");
                    } else {
                        $('#' + panel.divElement.id + '-footer').html("Showing all " + panel.options.eclQueryFilter + " matches");
                    }
                    $.each(result.data, function(i, row) {
                        $('#' + panel.divElement.id + '-outputBody').append("<tr style='cursor: pointer;' class='conceptResult' data-module='' data-concept-id='" + row.shortId + "' data-term='" + row.label + "'><td>" + row.label + "</td><td>" + row.shortId + "</td></tr>");
                        $('#' + panel.divElement.id + '-outputBody2').append("<tr><td>" + row.label + "</td><td>" + row.shortId + "</td></tr>");
                    });
                    $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").unbind();
                    $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").click(function(event) {
                        //console.log("clicked",$(event.target).closest("tr").attr('data-term'));
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).closest("tr").attr('data-term'),
                            module: $(event.target).closest("tr").attr("data-module"),
                            conceptId: $(event.target).closest("tr").attr('data-concept-id'),
                            source: panel.divElement.id,
                            showConcept: true
                        });
                    });
                }).fail(function(err) {
                    //console.log("Error",err);
                });

            } else {
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-danger'>Add at least one include</span>");
                $("#" + panel.divElement.id + "-footer").html("");
            }
        });
    };

    panel.updateGrammarModal = function(fullSyntax) {
        if (fullSyntax) {
            $('#home-' + panel.divElement.id + '-full-syntax-button').addClass("btn-primary");
            $('#home-' + panel.divElement.id + '-full-syntax-button').removeClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').addClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').removeClass("btn-primary");
        } else {
            $('#home-' + panel.divElement.id + '-full-syntax-button').removeClass("btn-primary");
            $('#home-' + panel.divElement.id + '-full-syntax-button').addClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').removeClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').addClass("btn-primary");
        }
        panel.grammarToCopy = panel.exportToConstraintGrammar(false, fullSyntax);
        $("#" + panel.divElement.id + "-constraintGrammar").html(panel.exportToConstraintGrammar(true, fullSyntax));
    };

    panel.setUpPanel();

    this.doSearch = function() {
        var expression = $.trim($("#" + panel.divElement.id + "-ExpText").val());
        var optionalTermFilter = $.trim($("#" + panel.divElement.id + "-searchBoxOption").val());
        if (expression) {
            var view = panel.options.eclQueryFilter ? panel.options.eclQueryFilter : "inferred";
            panel.execute("inferred", expression, true, null, optionalTermFilter);
        }
    }

    this.setLanguageRefsets = function(languageRefsets) {
        panel.options.languageRefsets = languageRefsets;
        if (panel.options.languageRefsets.length !== 0) {
            panel.setupLanguageRefsetDropdown();
        }        
    }

    this.setupLanguageRefsetDropdown = function() {
        panel.options.languageRefsets.forEach(function(concept) {
            // add item to language refset dropdow list
            var o = new Option(concept.pt.term, concept.id);
            $(o).html(concept.pt.term);
            $('#' + panel.divElement.id + '-filterLanguageRefsetOpt').append(o);
        });

        $('#' + panel.divElement.id + '-filterLanguageRefsetOpt').multiselect({            
            buttonClass: 'btn btn-success',       
            selectedClass: '',
            enableHTML: true,
            templates: {
                button: '<button type="button" style="white-space: normal;" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
            },
            buttonText: function(options, select) {
                var i18n_language_refsets = jQuery.i18n.prop('i18n_language_refsets');                        
                if (options.length === 0) {
                   return "<span class='i18n' data-i18n-id='i18n_language_refsets'>"+i18n_language_refsets+"</span>";
                }
                else{
                    var selected = '';
                    options.each(function() {
                       var label = ($(this).attr('label') !== undefined) ?  $(this).attr('label'):$(this).html();
                       selected += label + ', ';
                    });
                    return "<span class='i18n' data-i18n-id='i18n_language_refsets'>"+i18n_language_refsets+"</span>: " + selected.substr(0, selected.length - 2);
                 }
            },          
            onChange: function(option, checked, select) {
                if (typeof panel.options.languageRefsetSearchFilter === 'undefined') {
                    panel.options.languageRefsetSearchFilter = [];
                }

                if (checked) {
                    if (!panel.options.languageRefsetSearchFilter.includes(option.val())) {
                        panel.options.languageRefsetSearchFilter.push(option.val());
                    }
                }
                else {
                    panel.options.languageRefsetSearchFilter = panel.options.languageRefsetSearchFilter.filter(function (value) {
                        return value !== option.val();
                    });
                }

                panel.doSearch();
            }
        });

        // must add a label attribue after muiltiselect initialised
        $('#' + panel.divElement.id + '-filterLanguageRefsetOpt option').each(function() {
            $(this).attr('label', panel.options.languageNameOfLangRefset[$(this).val()]);
        });
        $('#' + panel.divElement.id + '-filterLanguageRefsetOptHidden').hide()
    };

    this.updateTypeFilterLabel = function() {        
        if (panel.options.typeSearchFilter == 'fsn') {
            var i18n_fsn = jQuery.i18n.prop('i18n_fsn');           
            $("#" + panel.divElement.id + '-searchTypeOpt').html("<span class='i18n' data-i18n-id='i18n_fsn'>"+i18n_fsn+"</span>");
           
        } else if (panel.options.typeSearchFilter == 'synonym') {
            var i18n_synonym = jQuery.i18n.prop('i18n_synonym');            
            $("#" + panel.divElement.id + '-searchTypeOpt').html("<span class='i18n' data-i18n-id='i18n_synonym'>"+i18n_synonym+"</span>");
           
        } else if (panel.options.typeSearchFilter == 'definition') {
            var i18n_definition = jQuery.i18n.prop('i18n_definition');            
            $("#" + panel.divElement.id + '-searchTypeOpt').html("<span class='i18n' data-i18n-id='i18n_definition'>"+i18n_definition+"</span>");
           
        } else {
            var i18n_none = jQuery.i18n.prop('i18n_none');
            $("#" + panel.divElement.id + '-searchTypeOpt').html("<span class='i18n' data-i18n-id='i18n_none'>"+i18n_none+"</span>");            
        }

        panel.doSearch();
    };

    this.renumLines = function() {
        $('#' + panel.divElement.id + '-listGroup').find(".query-condition").each(function(index) {
            $(this).find(".line-number").html(index + 1);
        });
    };

    this.getTotalResults = function(callback) {
        // if (xhrTotal != null) {
        //     xhrTotal.abort();
        // }
        // panel.lastRequest.skip = 0;
        // panel.lastRequest.limit = panel.lastTotalValues + 1;
        // $('#' + panel.divElement.id + '-exportXls').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        // var branch = options.edition;
        // if(options.release.length > 0 && options.release !== 'None'){
        //     branch = branch + "/" + options.release;
        // };
        // xhrTotal = $.ajax({
        //     type: "POST",
        //     url: options.serverUrl.replace("snomed", "expressions/") + "/" + branch + "/execute/brief",
        //     data: panel.lastRequest,
        //     dataType: "json",
        //     success: function(result) {
        //         xhrTotal = null;
        //         panel.allResults = result.computeResponse.matches;
        //         var rowsHtml = "";
        //         if (panel.allResults && panel.allResults.length) {
        //             $.each(panel.allResults, function(i, field) {
        //                 rowsHtml += "<tr><td>" + field.defaultTerm + "</td><td>" + field.conceptId + "</td></tr>";
        //             });
        //         }
        //         $("#" + panel.divElement.id + "-outputBody2").html(rowsHtml);
        //         $('#' + panel.divElement.id + '-exportXls').html('Download XLS <img style="height: 23px;" src="img/excel.png">');
        //         if (callback)
        //             callback();
        //     }
        // }).always(function(result) {
        //     xhrTotal = null;
        // }).fail(function() {
        //     alertEvent("Failed!", "error");
        // });

        //xhrTotal = $.post(panel.lastUrl, panel.lastRequest).done(function(data){
        //    xhrTotal = null;
        //    panel.allResults = data.matches;
        //    var rowsHtml = "";
        //    if (panel.allResults && panel.allResults.length){
        //        $.each(panel.allResults, function(i, field){
        //            rowsHtml+= "<tr><td>" + field.defaultTerm + "</td><td>" + field.conceptId + "</td></tr>";
        //        });
        //    }
        //    $("#" + panel.divElement.id + "-outputBody2").html(rowsHtml);
        //    $('#' + panel.divElement.id + '-exportXls').html('Download XLS <img style="height: 23px;" src="img/excel.png">');
        //    if (callback)
        //        callback();
        //}).fail(function(){
        //    alertEvent("Failed!", "error");
        //});
    };

    this.getExpressionForCondition = function(condition, htmlFormat, fullSyntax) {
        var grammar = "";
        var operator = "";
        if (condition.criteria == "self") {
            if (fullSyntax) {
                operator = "self ";
            } else {
                operator = "";
            }
        } else if (condition.criteria == "descendantOf") {
            if (fullSyntax) {
                operator = "descendantOf ";
            } else {
                operator = "< ";
            }
        } else if (condition.criteria == "descendantOrSelfOf") {
            if (fullSyntax) {
                operator = "descendantOrSelfOf ";
            } else {
                operator = "<< ";
            }
        } else if (condition.criteria == "childrenOf") {
            if (fullSyntax) {
                operator = "childrenOf ";
            } else {
                operator = "<1 ";
            }
        } else if (condition.criteria == "ancestorOf") {
            if (fullSyntax) {
                operator = "ancestorOf ";
            } else {
                operator = "> ";
            }
        } else if (condition.criteria == "ancestorOrSelfOf") {
            if (fullSyntax) {
                operator = "ancestorOrSelfOf ";
            } else {
                operator = ">> ";
            }
        } else if (condition.criteria == "parentsOf") {
            if (fullSyntax) {
                operator = "parentsOf ";
            } else {
                operator = ">1 ";
            }
        } else if (condition.criteria == "hasDescription") {
            if (fullSyntax) {
                operator = "hasDescription ";
            } else {
                operator = "desc ";
            }
        } else if (condition.criteria == "hasRelationship") {
            if (fullSyntax) {
                operator = "hasRelationship ";
            } else {
                operator = "rel ";
            }
        } else if (condition.criteria == "isMemberOf") {
            if (fullSyntax) {
                operator = "isMemberOf ";
            } else {
                operator = "^ ";
            }
        };
        var term = "|" + condition.term + "|";
        if (htmlFormat) {
            operator = "<span class='exp-operators'>" + operator + "</span>";
            term = "<span class='exp-term'>" + term + "</span>";
        }
        if (condition.typeId) {
            if (condition.typeId == "*") {
                grammar = " * = " + operator + condition.conceptId + term;
            } else {
                var typeTerm = "|" + condition.typeTerm + "|";
                if (htmlFormat) {
                    term = "<span class='exp-term'>" + typeTerm + "</span>";
                }
                grammar = condition.typeId + typeTerm + " = " + operator + condition.conceptId + term;
            }
        } else {
            grammar = operator + condition.conceptId + term;
        }
        return grammar;
    };

    this.exportToConstraintGrammar = function(htmlFormat, fullSyntax, htmlObj, fullObjHtml) {
        var breakLine = " ";
        if (htmlFormat) {
            breakLine = "<br>";
        }
        var grammar = "";
        if ($('#' + panel.divElement.id + '-listGroup').find(".query-condition").length == 0 && !htmlObj && !fullObjHtml) {
            //console.log("Add at least one instruction...");
        } else {
            var includes = [];
            var excludes = [];
            if (htmlObj) {
                var conditions = [];
                $(htmlObj).find(".constraint").each(function(index2) {
                    var condition = {
                        "criteria": $(this).attr('data-criteria'),
                        "typeId": $(this).attr('data-type-concept-id'),
                        "typeTerm": $(this).attr('data-type-term'),
                        "conceptId": $(this).attr('data-concept-id'),
                        "term": $(this).attr('data-term')
                    };
                    conditions.push(condition);
                });
                includes.push(conditions);
            } else {
                var objTouse = '#' + panel.divElement.id + '-listGroup';
                if (fullObjHtml)
                    objTouse = fullObjHtml
                $(objTouse).find(".query-condition").each(function(index) {
                    var conditions = [];
                    $(this).find(".constraint").each(function(index2) {
                        var condition = {
                            "criteria": $(this).attr('data-criteria'),
                            "typeId": $(this).attr('data-type-concept-id'),
                            "typeTerm": $(this).attr('data-type-term'),
                            "conceptId": $(this).attr('data-concept-id'),
                            "term": $(this).attr('data-term')
                        };
                        conditions.push(condition);
                    });
                    if ($(this).data('modifier') == "Exclude") {
                        excludes.push(conditions);
                    } else {
                        includes.push(conditions);
                    }
                });
            }
            var isRefined = function(conditions) {
                var refined = false;
                if (conditions.length > 1) {
                    if (conditions[1].typeId) {
                        refined = true;
                    }
                }
                return refined;
            };
            //if (includes.length > 1) grammar += "(";
            $.each(includes, function(index, conditions) {
                if (index > 0) grammar += " OR ";
                if (conditions.length > 1 || isRefined(conditions)) grammar += " (";
                if (isRefined(conditions)) {
                    $.each(conditions, function(index2, condition) {
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (index2 == 0) {
                            grammar += " : ";
                        } else if (index2 < conditions.length - 1) {
                            grammar += " , ";
                        }
                        if (htmlFormat && index2 < conditions.length - 1) {
                            grammar += "<br>";
                        }
                    });
                } else {
                    $.each(conditions, function(index2, condition) {
                        if (index2 > 0) grammar += " AND ";
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (htmlFormat && index2 < conditions.length - 1) {
                            grammar += "<br>";
                        }
                    });
                }
                if (conditions.length > 1 || isRefined(conditions)) grammar += ") ";
                if (htmlFormat && index < includes.length - 1) {
                    grammar += "<br>";
                }
            });
            //if (includes.length > 1) grammar += ")";

            if (excludes.length > 0 && includes.length > 1) {
                grammar = "(" + grammar;
                grammar += ") MINUS ";
                if (htmlFormat) {
                    grammar += "<br>";
                }
            } else if (excludes.length > 0) {
                grammar += " MINUS ";
                if (htmlFormat) {
                    grammar += "<br>";
                }
            }
            if (excludes.length > 1) grammar += "(";
            $.each(excludes, function(index, conditions) {
                if (index > 0) grammar += " OR ";
                if (conditions.length > 1 || isRefined(conditions)) grammar += " (";
                if (isRefined(conditions)) {
                    $.each(conditions, function(index2, condition) {
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (index2 == 0) {
                            grammar += " : ";
                        } else if (index2 < conditions.length - 1) {
                            grammar += " , ";
                        }
                        if (htmlFormat && index2 < conditions.length - 1) {
                            grammar += "<br>";
                        }
                    });
                } else {
                    $.each(conditions, function(index2, condition) {
                        if (index2 > 0) grammar += " AND ";
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (htmlFormat && index2 < conditions.length - 1) {
                            grammar += "<br>";
                        }
                    });
                }
                if (conditions.length > 1 || isRefined(conditions)) grammar += ") ";
                if (htmlFormat && index < excludes.length - 1) {
                    grammar += "<br>";
                }
            });
            if (excludes.length > 1) grammar += ")";
        }
        grammar = grammar.trim();
        //console.log(grammar.charAt(0));
        //console.log(grammar.charAt(grammar.length-1));
        //if (grammar.charAt(0) == "(" && grammar.charAt(grammar.length-1) == ")") {
        //    grammar = grammar.substr(1,grammar.length-2);
        //}
        return grammar;
    };

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
        $("#" + panel.divElement.id + "-modal-body").html(JST["snomed-interaction-components/views/developmentQueryPlugin/options.hbs"](context));
        
    }

    this.readOptionsPanel = function() {
        panel.options.displayPreferredTerm = $("#" + panel.divElement.id + "-displayPreferredTermOption").is(':checked');
        panel.options.eclQueryFilter = $("#" + panel.divElement.id + "-relsTypeFilterOption").val();
    }

    this.execute = function(form, expression, clean, onlyTotal, optionalTermFilter) {
        panel.currentEx++;
        var currentEx = panel.currentEx;
        //$('#' + panel.divElement.id + '-footer').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (onlyTotal) {
            limit = 1;
            skip = 0;
        } else {
            var i18n_searching_text = jQuery.i18n.prop('i18n_searching');            
            var i18n_server_is_processing1_text = jQuery.i18n.prop('i18n_server_is_processing1_text');            
            $('#' + panel.divElement.id + '-footer').html('<div class="progress progress-striped active"> <div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span>'+i18n_searching_text+'</span></div></div><p id="' + panel.divElement.id + '-waitingSearch-text" class="lead animated"></p>');
            $("#" + panel.divElement.id + "-waitingSearch-text").html("");
            $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
            $("#" + panel.divElement.id + "-waitingSearch-text").html("<span class='i18n' data-i18n-id='i18n_server_is_processing1_text'>"+i18n_server_is_processing1_text+"</span>...");
            setTimeout(function() {
                $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
            }, 600);
            setTimeout(function() {
                //console.log(currentEx, panel.currentEx);
                if (xhrExecute != null && currentEx == panel.currentEx) {
                    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
                    setTimeout(function() {
                        var i18n_server_is_processing2_text = jQuery.i18n.prop('i18n_server_is_processing2_text');                       
                        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                        $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");                        
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("<span class='i18n' data-i18n-id='i18n_server_is_processing2_text'>"+i18n_server_is_processing2_text+"</span>...");
                        setTimeout(function() {
                            $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
                        }, 600);
                    }, 600);
                }
            }, 15000);
            setTimeout(function() {
                if (xhrExecute != null && currentEx == panel.currentEx) {
                    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
                    setTimeout(function() {
                        var i18n_server_is_processing3_text = jQuery.i18n.prop('i18n_server_is_processing3_text');                        
                        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                        $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("<span class='i18n' data-i18n-id='i18n_server_is_processing3_text'>"+i18n_server_is_processing3_text+"</span>...");
                        setTimeout(function() {
                            $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
                        }, 600);
                    }, 600);
                }
            }, 30000);
            setTimeout(function() {
                if (xhrExecute != null && currentEx == panel.currentEx) {
                    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
                    setTimeout(function() {
                        var i18n_server_is_processing4_text = jQuery.i18n.prop('i18n_server_is_processing4_text');                        
                        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                        $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("<span class='i18n' data-i18n-id='i18n_server_is_processing4_text'>"+i18n_server_is_processing4_text+"</span>.");
                        setTimeout(function() {
                            $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
                        }, 600);
                    }, 600);
                }
            }, 45000);
            //setTimeout(function(){
            //    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
            //    setTimeout(function(){
            //        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
            //        if (xhrExecute != null && currentEx == panel.currentEx){
            //            $("#" + panel.divElement.id + "-waitingSearch-text").html("");
            //            $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
            //            $("#" + panel.divElement.id + "-waitingSearch-text").html("Instruction set exceeds maximum allowed time for computation. Some times instructions can be simplified by specifying conditions using concepts closer in the hierarchy to the intended results, avoiding unnecessary selections of large portions of the terminology.");
            //            setTimeout(function(){
            //                $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
            //            }, 600);
            //        }
            //    }, 600);
            //}, 61000);

            $('#' + panel.divElement.id + '-resultInfo').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
            if (clean) {
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                limit = 100;
                skip = 0;
            }
        }
        var data = {
            expression: expression,
            limit: limit,
            skip: skip,
            form: form
        };
        console.log("normal " + expression);
        var strippedExpression1 = expression.replace(/\|.*?\|/guim, '');
        var strippedExpression = strippedExpression1.replace(/\n/guim, '');
        console.log("stripped " + strippedExpression);
        panel.lastRequest = data;
        page = skip / limit;
        var expressionURL;
        var branch = options.edition;
                if(options.release.length > 0 && options.release !== 'None'){
                    branch = branch + "/" + options.release;
                };
        expressionURL = options.serverUrl + "/" + branch + "/concepts?module=900000000000207008&" + (panel.options.eclQueryFilter === "stated" ? "statedEcl" : "ecl")   + "=" + encodeURIComponent(strippedExpression) + "&offset=" + skip + "&limit=" + limit + "&term=" + (typeof optionalTermFilter !== 'undefined' ? optionalTermFilter : '');
        console.log("queryURL " + expressionURL);
        if (xhrExecute != null && !onlyTotal)
            xhrExecute.abort();
        var xhrExecute2 = $.ajax({
            type: "GET",
            headers: {
                'Accept-Language': panel.options.languages
            },
            url: expressionURL,
            //timeout: 300000,lasturl
            success: function(result) {
                //if (result.paserResponse.validation) {
                data = result;
                //result.computeResponse.matches
                if (!onlyTotal) {
                    $("#" + panel.divElement.id + "-exportResults").removeClass("disabled");
                    var i18n_found_text = jQuery.i18n.prop('i18n_found');                   
                    var i18n_concepts_text = jQuery.i18n.prop('i18n_concepts');                    
                    if (data.performanceCutOff) {
                        if (!data.totalElements) {
                            $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'><span class='i18n' data-i18n-id='i18n_found'>"+ i18n_found_text +"</span> " + data.total + " <span class='i18n' data-i18n-id='i18n_concepts'>"+ i18n_concepts_text +"</span>. <span class='text-danger'>This query cannot be completed in real-time, please schedule a Cloud executions. Results below are incomplete and some conditions were not tested. </span></span>");
                        } else {
                            $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'><span class='i18n' data-i18n-id='i18n_found'>"+ i18n_found_text +"</span> " + data.totalElements + " <span class='i18n' data-i18n-id='i18n_concepts'>"+ i18n_concepts_text +"</span>. <span class='text-danger'>This query cannot be completed in real-time, please schedule a Cloud executions. Results below are incomplete and some conditions were not tested. </span></span>");
                        }                        
                    } else {
                        if (!data.totalElements) {
                            $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'><span class='i18n' data-i18n-id='i18n_found'>"+ i18n_found_text +"</span> " + data.total + " <span class='i18n' data-i18n-id='i18n_concepts'>"+ i18n_concepts_text +"</span></span>");
                        } else {
                            $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'><span class='i18n' data-i18n-id='i18n_found'>"+ i18n_found_text +"</span> " + data.totalElements + " <span class='i18n' data-i18n-id='i18n_concepts'>"+ i18n_concepts_text +"</span></span>");
                        }
                    }
                    $.each(data.items, function(i, row) {
                        var countryIcon = '';
                        if (countryIcons[row.moduleId]) {
                            countryIcon = '<div class="phoca-flagbox" style="width:20px;height:20px"> <span class="phoca-flag ' + countryIcons[row.moduleId] + '"></span> </div> &nbsp';
                        }
                        $('#' + panel.divElement.id + '-outputBody').append("<tr style='cursor: pointer;' class='conceptResult' data-module='" + row.moduleId + "' data-concept-id='" + row.id + "' data-term='" + (panel.options.displayPreferredTerm ? row.pt.term : row.fsn.term) + "'><td>" + countryIcon + (panel.options.displayPreferredTerm ? row.pt.term : row.fsn.term) + "</td><td>" + row.pt.term + "</td><td>" + row.id + "</td></tr>");
                        //$('#' + panel.divElement.id + '-outputBody2').append("<tr><td>" + row.fsn.term + "</td><td>" + row.pt.term + "</td><td>" + row.id + "</td></tr>");
                    });

                    $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").unbind();
                    $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").click(function(event) {
                        //console.log("clicked",$(event.target).closest("tr").attr('data-term'));
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).closest("tr").attr('data-term'),
                            module: $(event.target).closest("tr").attr("data-module"),
                            conceptId: $(event.target).closest("tr").attr('data-concept-id'),
                            source: panel.divElement.id,
                            showConcept: true
                        });
                    });

                    var i18n_show_text = jQuery.i18n.prop('i18n_show');                    
                    var i18n_more_text = jQuery.i18n.prop('i18n_more');                    
                    var i18n_viewing_text = jQuery.i18n.prop('i18n_viewing');                    
                    var i18n_items_of_text = jQuery.i18n.prop('i18n_items_of');                    
                    var i18n_total_text = jQuery.i18n.prop('i18n_total');                    
                    var i18n_showing_all_text = jQuery.i18n.prop('i18n_showing_all');                    
                    var i18n_matches_text = jQuery.i18n.prop('i18n_matches');
                   
                    var show_html = "<span class='i18n' data-i18n-id='i18n_show'>"+i18n_show_text+"</span>";
                    var more_html = "<span class='i18n' data-i18n-id='i18n_more'>"+i18n_more_text+"</span>";
                    var viewing_html = "<span class='i18n' data-i18n-id='i18n_viewing'>"+i18n_viewing_text+"</span>";
                    var items_of_html = "<span class='i18n' data-i18n-id='i18n_items_of'>"+i18n_items_of_text+"</span>";
                    var total_html = "<span class='i18n' data-i18n-id='i18n_total'>"+i18n_total_text+"</span>";
                    var showing_all_html = "<span class='i18n' data-i18n-id='i18n_showing_all'>"+i18n_showing_all_text+"</span>";
                    var matches_html = "<span class='i18n' data-i18n-id='i18n_matches'>"+i18n_matches_text+"</span>";

                    if (!data.totalElements) {
                        panel.lastTotalValues = data.total;
                        if (limit + skip < data.total) {
                            $('#' + panel.divElement.id + '-footer').html("<span id='" + panel.divElement.id + "-more'>"+show_html+" "+more_html+" ("+viewing_html+ (limit + skip) + " " + panel.options.eclQueryFilter + " "+items_of_html+" " + data.total + " "+total_html+")</span>");
                        } else {
                            $('#' + panel.divElement.id + '-footer').html(showing_all_html+" " + data.total + " " + panel.options.eclQueryFilter + " "+matches_html);
                        }
                    } else {
                        panel.lastTotalValues = data.totalElements;
                        if (limit + skip < data.totalElements) {
                            $('#' + panel.divElement.id + '-footer').html("<span id='" + panel.divElement.id + "-more'>"+show_html+" "+more_html+" ("+viewing_html+ (limit + (page * limit)) + " " + panel.options.eclQueryFilter + " "+items_of_html+" " + data.totalElements + " "+total_html+")</span>");
                        } else {
                            $('#' + panel.divElement.id + '-footer').html(showing_all_html+" " + data.totalElements + " " + panel.options.eclQueryFilter + " "+matches_html);
                        }
                    }

                    $('#' + panel.divElement.id + '-more').unbind();
                    $('#' + panel.divElement.id + '-more').click(function(e) {
                        skip = (page * limit) + 100;
                        panel.execute(form, expression, false);
                    });
                } else {
                    onlyTotal(data.total);
                }
            }
        }).done(function(result) {
            // done
            xhrExecute2 = null;
        }).fail(function(jqXHR) {
            //console.log(xhrExecute2);
            if (jqXHR && jqXHR.responseJSON && jqXHR.responseJSON.computeResponse && jqXHR.responseJSON.computeResponse.message) {
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $("#" + panel.divElement.id + "-footer").html("");
                $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-danger'>" + jqXHR.responseJSON.computeResponse.message + "</span>");
            } 
            else if (jqXHR && jqXHR.status && jqXHR.status === 500) {
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $("#" + panel.divElement.id + "-footer").html("");
                $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-danger'>" + jqXHR.responseJSON.message + "</span>");
            }
            else {
                var textStatus = xhrExecute2.statusText;
                if (textStatus != "abort") {
                    if (xhrExecute2.status == 0)
                        textStatus = "timeout";
                    xhrExecute2 = null;
                    if (textStatus === 'timeout') {
                        //                $("#" + panel.divElement.id + "-syntax-result").html('<span class="label label-danger">ERROR</span>');
                        //                $("#" + panel.divElement.id + "-results").html("Timeout...");
                        if (!onlyTotal) {
                            $('#' + panel.divElement.id + '-footer').html("<p class='lead'>Instruction set exceeds maximum allowed time for computation. Some times instructions can be simplified by specifying conditions using concepts closer in the hierarchy to the intended results, avoiding unnecessary selections of large portions of the terminology.</p>");
                            $('#' + panel.divElement.id + '-resultInfo').html("This query cannot be completed in real-time.");
                            //$('#' + panel.divElement.id + '-footer').html("Timeout Error");
                        } else {
                            onlyTotal("Error");
                        }
                    } else {
                        if (!onlyTotal) {
                            $("#" + panel.divElement.id + "-syntax-result").html('<span class="label label-danger">ERROR</span>');
                            $("#" + panel.divElement.id + "-results").html("Error...");
                        } else {
                            onlyTotal("Error");
                        }
                    }
                }
            }
        });
        if (!onlyTotal)
            xhrExecute = xhrExecute2;
    }
}
