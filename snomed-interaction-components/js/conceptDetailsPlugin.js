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
    this.subscription = null;
    var xhr = null;
    var xhrChildren = null;
    var conceptRequested = 0;

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

    this.setupCanvas = function() {
        panel.attributesPId = panel.divElement.id + "-attributes-panel";
        panel.descsPId = panel.divElement.id + "-descriptions-panel";
        panel.relsPId = panel.divElement.id + "-rels-panel";
        panel.childrenPId = panel.divElement.id + "-children-panel";
        panel.defaultTerm = "";
        $(divElement).html();
        // main panel
        var detailsHtml = "<div style='margin: 5px; height:98%; overflow:auto;' class='panel panel-default'>";
        detailsHtml = detailsHtml + "<div class='panel-heading' id='" + panel.divElement.id + "-panelHeading'>";
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-subscribersMarker' class='btn btn-link btn-lg' style='padding:2px;position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-bookmark'></i></button>"
        detailsHtml = detailsHtml + "<div class='row'>";
        detailsHtml = detailsHtml + "<div class='col-md-8' id='" + panel.divElement.id + "-panelTitle'>&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_concept_details'>Concept Details</span></strong></div>";
        detailsHtml = detailsHtml + "<div class='col-md-4 text-right'>";
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-linkerButton' class='btn btn-link jqui-draggable linker-button' data-panel='" + panel.divElement.id + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>"
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>"
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#" + panel.divElement.id + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>"
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>"
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>"
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>"
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "<div class='panel-body' id='" + panel.divElement.id + "-panelBody'>";
        detailsHtml = detailsHtml + "<!-- Nav tabs -->";
        detailsHtml = detailsHtml + '<ul class="nav nav-tabs" id="details-tabs-' + panel.divElement.id + '">';
        detailsHtml = detailsHtml + '    <li class="active"><a href="#home-' + panel.divElement.id + '" data-toggle="tab" style="padding-top: 3px; padding-bottom:3px;"><span class="i18n" data-i18n-id="i18n_summary">Summary</span></a></li>';
        detailsHtml = detailsHtml + '    <li><a href="#details-' + panel.divElement.id + '" data-toggle="tab" style="padding-top: 3px; padding-bottom:3px;"><span class="i18n" data-i18n-id="i18n_details">Details</span></a></li>';
        detailsHtml = detailsHtml + '    <li id="diagram-tab"><a href="#diagram-' + panel.divElement.id + '" data-toggle="tab" style="padding-top: 3px; padding-bottom:3px;" id="diagram-tab-link-' + panel.divElement.id + '"><span class="i18n" data-i18n-id="i18n_diagram">Diagram</span></a></li>';
        detailsHtml = detailsHtml + '    <li><a href="#refsets-' + panel.divElement.id + '" data-toggle="tab" style="padding-top: 3px; padding-bottom:3px;"><span class="i18n" data-i18n-id="i18n_refsets">Refsets</span></a></li>';
        detailsHtml = detailsHtml + '</ul>';
        detailsHtml = detailsHtml + "<!-- Tab panes -->";
        detailsHtml = detailsHtml + '<div class="tab-content" id="details-tab-content-' + panel.divElement.id + '">';
        detailsHtml = detailsHtml + '    <div class="tab-pane fade in active" id="home-' + panel.divElement.id + '" style="padding: 5px;">';
        detailsHtml = detailsHtml + '       <div class="row" style="margin-right: 20px"><span class="pull-right text-muted" id="home-' + panel.divElement.id + '-viewLabel"></span></div>';
        detailsHtml = detailsHtml + '       <div style="margin-left: 0%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid forestgreen; border-radius: 4px; padding: 5px;" id="home-parents-' + panel.divElement.id + '">No parents</div>';
        detailsHtml = detailsHtml + '       <div style="margin-left: 10%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid saddlebrown; border-radius: 4px; padding: 5px;" id="home-attributes-' + panel.divElement.id + '">Attributes</div>';
        detailsHtml = detailsHtml + '       <div style="margin-left: 20%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid darkslateblue; border-radius: 4px; padding: 5px;" id="home-roles-' + panel.divElement.id + '">Relationships</div>';
        detailsHtml = detailsHtml + '       <div><span class="text-muted pull-right" id="footer-' + panel.divElement.id + '"></span></div>';
        detailsHtml = detailsHtml + '    </div>';
        detailsHtml = detailsHtml + '    <div class="tab-pane fade" id="details-' + panel.divElement.id + '">';
        detailsHtml = detailsHtml + "       <div id='" + panel.attributesPId + "' class='panel panel-default'>";
        detailsHtml = detailsHtml + "       </div>";
        detailsHtml = detailsHtml + "       <div id='" + panel.descsPId + "' class='panel panel-default'>";
        detailsHtml = detailsHtml + "       </div>";
        detailsHtml = detailsHtml + "       <div id='" + panel.relsPId + "' class='panel panel-default'>";
        detailsHtml = detailsHtml + "       </div>";
        detailsHtml = detailsHtml + "       <div id='" + panel.childrenPId + "' class='panel panel-default' style='height:100px;overflow:auto;margin-bottom: 15px;'>";
        detailsHtml = detailsHtml + "       </div>";
        detailsHtml = detailsHtml + '    </div>';
        detailsHtml = detailsHtml + '    <div class="tab-pane fade" id="diagram-' + panel.divElement.id + '">';
        detailsHtml = detailsHtml + '       <div class="row" style="margin-right: 20px"><span class="pull-right text-muted" id="home-' + panel.divElement.id + '-diagram-viewLabel"></span></div>';
        detailsHtml = detailsHtml + '       <div id="diagram-canvas-' + panel.divElement.id + '" style="position: relative; width: 1000px;"></div>';
        //detailsHtml = detailsHtml + '       <div><span class="text-muted pull-right"><a href="http://www.ihtsdo.org/fileadmin/user_upload/Docs_01/Publications/SNOMED_CT_Diagramming_Guideline.pdf" target="_blank">Read about the IHTSDO Diagramming Guideline</a></span></div>';
        detailsHtml = detailsHtml + '    </div>';
        detailsHtml = detailsHtml + '    <div class="tab-pane fade" id="refsets-' + panel.divElement.id + '">';
        detailsHtml = detailsHtml + '    </div>';
        detailsHtml = detailsHtml + '</div>';
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "</div>";
        // modal config panel
        detailsHtml = detailsHtml + "<div class='modal fade' id='" + panel.divElement.id + "-configModal'>";
        detailsHtml = detailsHtml + "<div class='modal-dialog'>";
        detailsHtml = detailsHtml + "<div class='modal-content'>";
        detailsHtml = detailsHtml + "<div class='modal-header'>";
        detailsHtml = detailsHtml + "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
        detailsHtml = detailsHtml + "<h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (" + panel.divElement.id + ")</h4>";
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "<div class='modal-body' id='" + panel.divElement.id + "-modal-body'>";
        detailsHtml = detailsHtml + "<p></p>";
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "<div class='modal-footer'>";
        detailsHtml = detailsHtml + "<button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>";
        detailsHtml = detailsHtml + "<button id='" + panel.divElement.id + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>";
        detailsHtml = detailsHtml + "</div>";
        detailsHtml = detailsHtml + "</div><!-- /.modal-content -->";
        detailsHtml = detailsHtml + "</div><!-- /.modal-dialog -->";
        detailsHtml = detailsHtml + "</div><!-- /.modal -->";
        $(divElement).html(detailsHtml);

        $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();

        $("#" + panel.divElement.id + "-expandButton").hide();
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id + "-closeButton").click(function(event) {
            $(divElement).remove();
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }

        if (typeof panel.options.linkerButton != "undefined" && panel.options.linkerButton == false) {
            $("#" + panel.divElement.id + "-linkerButton").hide();
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
            //if (panel.defaultTerm.length > 25) {
            //    $("#" + panel.divElement.id + "-panelTitle").html("<strong>Concept Details: " + panel.defaultTerm.substring(0, 24).trim() + "...</strong>");
            //} else {
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details: " + panel.defaultTerm + "</strong>");
            //}
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
                    //console.log(JSON.stringify(reversedHistory));
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

        if (typeof i18n_panel_options == "undefined") {
            i18n_panel_options = "Panel options";
        }
        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_options,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_history == "undefined") {
            i18n_history = 'History';
        }
        $("#" + panel.divElement.id + "-historyButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_history,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_panel_links == "undefined") {
            i18n_panel_links = 'Panel links';
        }
        $("#" + panel.divElement.id + "-linkerButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_links,
            animation: true,
            delay: 1000
        });

        $("#" + panel.divElement.id + "-apply-button").click(function() {
            //console.log("apply!");
            panel.readOptionsPanel();
            panel.updateCanvas();
        });

        $("#" + panel.divElement.id + "-linkerButton").draggable({
            cancel: false,
            appendTo: 'body',
            helper: 'clone',
            delay: 500
        });

        $(".resizable").resizable();

        $('#' + panel.divElement.id + '-panelHeading').droppable({
            drop: panel.handleDropEvent,
            hoverClass: "bg-info"
        });

        $("#" + panel.divElement.id + "-linkerButton").click(function(event) {
            $("#" + panel.divElement.id + "-linkerButton").popover({
                trigger: 'manual',
                placement: 'bottomRight',
                html: true,
                content: function() {
                    if (!panel.subscription) {
                        linkerHtml = '<div class="text-center text-muted"><em>Not linked yet<br>Drag to link with other panels</em></div>';
                    } else {
                        linkerHtml = '<div class="text-center"><a href="javascript:void(0);" onclick="cancelSubscription(\'' + panel.subscription.divElement.id + '\',\'' + panel.divElement.id + '\');">Clear link</a></div>';
                    }
                    return linkerHtml;
                }
            });
            $("#" + panel.divElement.id + "-linkerButton").popover('toggle');
        });

        panel.updateCanvas();
        panel.setupOptionsPanel();
    }

    this.handleDropEvent = function(event, ui) {
        var draggable = ui.draggable;
        //console.log(draggable.html() + " |  " + draggable.attr('data-concept-id') + ' was dropped onto me!');
        if (!draggable.attr('data-concept-id')) {
            if (!draggable.attr('data-panel')) {
                //console.log("ignore");
            } else {
                //console.log("OK : " + draggable.attr('data-panel'));
                $.each(componentsRegistry, function(i, field) {
                    if (field.divElement.id == draggable.attr('data-panel')) {
                        if (field.type == "search" || field.type == "taxonomy") {
                            field.subscribe(panel);
                        }
                    }
                });
            }
        } else {
            if (panel.conceptId != draggable.attr('data-concept-id')) {
                if ($.contains($("#" + panel.divElement.id).get(0), $(draggable).get(0))) {
                    draggable.remove();
                }
                panel.conceptId = draggable.attr('data-concept-id');
                panel.updateCanvas();
            }
        }


    }

    this.updateCanvas = function() {
        $('.more-fields-button').popover('hide');
        if (conceptRequested == panel.conceptId) {
            return;
        }
        conceptRequested = panel.conceptId;
        $('#' + panel.attributesPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-attributes-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.descsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.relsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-parents-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-roles-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.childrenPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");

        // load attributes
        if (xhr != null) {
            xhr.abort();
            console.log("aborting call...");
        }
        xhr = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + panel.conceptId, function(result) {

        }).done(function(result) {
            var firstMatch = result;
            xhr = null;
            panel.attributesPId = divElement.id + "-attributes-panel";
            panel.defaultTerm = firstMatch.defaultTerm;
            var d = new Date();
            var time = d.getTime();
            panel.history.push({defaultTerm: firstMatch.defaultTerm, conceptId: firstMatch.conceptId, time: time});
            var attrHtml = "";
            attrHtml = attrHtml + "<table class='table table-default' >";
            attrHtml = attrHtml + "<tr ";
            if (firstMatch.effectiveTime == panel.options.highlightByEffectiveTime) {
                attrHtml = attrHtml + "class = 'highlightEffectiveTime'";
            }
            attrHtml = attrHtml + "><td>";
            attrHtml = attrHtml + "<h4>"
            if (firstMatch.definitionStatus == "Primitive") {
                attrHtml = attrHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + firstMatch.conceptId + '" data-term="' + firstMatch.defaultTerm + '" data-def-status="' + firstMatch.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
            } else {
                attrHtml = attrHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + firstMatch.conceptId + '" data-term="' + firstMatch.defaultTerm + '" data-def-status="' + firstMatch.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
            }
            attrHtml = attrHtml + "<span class='jqui-droppable'>" + firstMatch.defaultTerm + "</span></h4>";
            attrHtml = attrHtml + "<br>SCTID: " + firstMatch.conceptId;

            if (firstMatch.definitionStatus == "Primitive") {
                attrHtml = attrHtml + ", <span class='i18n' data-i18n-id='i18n_primitive'>Primitive</span>";
            } else {
                attrHtml = attrHtml + ", <span class='i18n' data-i18n-id='i18n_fully_defined'>Fully defined</span>";
            }
            if (firstMatch.active == true) {
                attrHtml = attrHtml + ", <span class='i18n' data-i18n-id='i18n_active'>Active</span>";
            } else {
                attrHtml = attrHtml + ", <span class='i18n' data-i18n-id='i18n_inactive'>Inactive</span>";
            }
            attrHtml = attrHtml + "</td>";
            var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr><tr><td style='padding: 3px;'>" + firstMatch.effectiveTime + "</td><td style='padding: 3px;'>" + firstMatch.module + "</td></tr></table>"
            attrHtml = attrHtml + '<td><button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
            var linkHtml = "<form><input class='form-control' id='share-field-" + panel.divElement.id +"' value='" + document.URL.split("?")[0].split("#")[0] +  "?perspective=full&conceptId1=" + panel.conceptId +"'></form><br>Copy the concept link (e.g. CTRL-C) to save and share a reference to this concept.";
            // additional data to include release info in link  +"&edition=" + options.edition  +"&release=" + options.release
            attrHtml = attrHtml + '&nbsp;<button type="button" id="share-link-' + panel.divElement.id + '" class="btn btn-link more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + linkHtml + '" data-html="true"><i class="glyphicon glyphicon-share-alt"></i></button></td>';

            attrHtml = attrHtml + "</tr></table>";

            $('#' + panel.attributesPId).html(attrHtml);
            $('#' + 'share-link-' + panel.divElement.id).disableTextSelect();
            $('#' + 'share-link-' + panel.divElement.id).click(function(event) {
                setTimeout(function () {
                    $('#' + 'share-field-' + panel.divElement.id).select();
                },300);
            });

            // load home-attributes
            var homeAttrHtml = "";
            if (firstMatch.definitionStatus == "Primitive") {
                homeAttrHtml = homeAttrHtml + '<h4><a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + firstMatch.conceptId + '" data-term="' + firstMatch.defaultTerm + '" data-def-status="' + firstMatch.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;<span class="jqui-droppable">';
            } else {
                homeAttrHtml = homeAttrHtml + '<h4><a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + firstMatch.conceptId + '" data-term="' + firstMatch.defaultTerm + '" data-def-status="' + firstMatch.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;<span class="jqui-droppable">';
            }
            homeAttrHtml = homeAttrHtml + firstMatch.defaultTerm + "</span></h4>";
            homeAttrHtml = homeAttrHtml + "<h5>SCTID: " + firstMatch.conceptId + "</h5>";
            homeAttrHtml = homeAttrHtml + '<div id="home-descriptions-' + panel.divElement.id + '"></div>';
            $('#home-attributes-' + panel.divElement.id).html(homeAttrHtml);

            if (!firstMatch.active) {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "LightPink");
            } else {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "white");
            }

            if ($("#" + panel.divElement.id + "-expandButton").is(":visible")) {
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp;&nbsp;&nbsp;<strong>Concept Details: " + panel.defaultTerm + "</strong>");
            }

            $('#' + panel.attributesPId + ',#home-attributes-' + panel.divElement.id).find('.jqui-droppable').droppable({
                drop: panel.handleDropEvent,
                hoverClass: "bg-info"
            });

            $('#' + panel.attributesPId + ',#home-attributes-' + panel.divElement.id).find(".jqui-draggable").draggable({
                appendTo: 'body',
                helper: 'clone',
                delay: 10
            });
            $('#' + panel.attributesPId + ',#home-attributes-' + panel.divElement.id).find(".jqui-draggable").tooltip({
                placement : 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            // load descriptions panel
            panel.descsPId = divElement.id + "-descriptions-panel";
            var languageName = "";
            if (panel.options.langRefset == "900000000000508004") {
                languageName = "(GB)";
            } else if (panel.options.langRefset == "900000000000509007") {
                languageName = "(US)";
            } else if (panel.options.langRefset == "450828004") {
                languageName = "(ES)";
            } else if (panel.options.langRefset == "554461000005103") {
                languageName = "(DA)";
            }
            var descDetailsHtml = "<table class='table table-bordered' id = '" + panel.descsPId + "-table'>";
            descDetailsHtml = descDetailsHtml + "<thead><tr>";
            descDetailsHtml = descDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_term'>Term</span></th>";
            if (panel.options.showIds == true) {
                descDetailsHtml = descDetailsHtml + "<th>SCTID</th>";
            }
            descDetailsHtml = descDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_acceptability'>Acceptability</span> " + languageName + "</th>";
            descDetailsHtml = descDetailsHtml + "</tr></thead><tbody>";

            var allDescriptions = firstMatch.descriptions.slice(0);
            allDescriptions.sort(function(a, b) {
                if (a.type.conceptId < b.type.conceptId)
                    return -1;
                if (a.type.conceptId > b.type.conceptId)
                    return 1;
                if (a.type.conceptId == b.type.conceptId) {
                    if (a.term < b.term)
                        return -1;
                    if (a.term > b.term)
                        return 1;
                }
                return 0;
            })

            var homeDescriptionsHtml = "";
            $.each(allDescriptions, function(i, field) {
                if (panel.options.displayInactiveDescriptions || field.active == true) {
                    if (field.active == true) {
                        if (homeDescriptionsHtml != "") {
                            homeDescriptionsHtml = homeDescriptionsHtml + "<br>";
                        }
                        homeDescriptionsHtml = homeDescriptionsHtml + "&nbsp;&nbsp;&nbsp;&nbsp;" + field.term;
                    }
                    var row = "";
                    var isFsn = false;
                    var isSynonym = false;
                    var isDefinition = false;
                    var isPreferred = false;
                    var isAcceptable = false;

                    if (field.type.conceptId == "900000000000003001") {
                        isFsn = true;
                    } else if (field.type.conceptId == "900000000000013009") {
                        isSynonym = true;
                    } else if (field.type.conceptId == "900000000000550004") {
                        isDefinition = true;
                    }
                    if (typeof field.langMemberships != "undefined") {
                        $.each(field.langMemberships, function(i, lm) {
                            if (lm.refset.conceptId == panel.options.langRefset && lm.acceptability.conceptId == "900000000000548007") {
                                isPreferred = true;
                            } else if (lm.refset.conceptId == panel.options.langRefset && lm.acceptability.conceptId == "900000000000549004") {
                                isAcceptable = true;
                            }
                        });
                    }
                    row = "<tr class='";
                    if (isFsn) {
                        row = row + " fsn-row";
                    } else {
                        row = row + " synonym-row";
                    }
                    if (!field.active) {
                        row = row + " danger";
                    }

                    if (field.effectiveTime == panel.options.highlightByEffectiveTime) {
                        row = row + " highlightEffectiveTime";
                    }

                    row = row + "'><td>";

                    if (isFsn) {
                        row = row + '<span rel="tooltip-right" title="' + i18n_fsn + '">F</span>';
                    } else if (isSynonym) {
                        row = row + '<span rel="tooltip-right" title="' + i18n_synonym + '">S</span>';
                    } else if (isDefinition) {
                        row = row + '<span rel="tooltip-right" title="' + i18n_definition + '">D</span>';
                    }

                    if (isPreferred && isFsn) {
                        row = row + '&nbsp;<span class="glyphicon glyphicon-star-empty" rel="tooltip-right" title="Preferred"></span>';
                    } else if (isPreferred && !isFsn) {
                        row = row + '&nbsp;<span class="glyphicon glyphicon-star" rel="tooltip-right" title="Preferred"></span>';
                    } else if (isAcceptable){
                        row = row + '&nbsp;<span rel="tooltip-right" title="Acceptable">&#10004;</span></span>';
                    } else {
                        row = row + '&nbsp;&nbsp;&nbsp;';
                    }

                    row = row + "&nbsp;&nbsp;&nbsp;" + field.term + "</td>";
                    if (panel.options.showIds == true) {
                        row = row + "<td>" + field.descriptionId + "</td>";
                    }
                    var includedInLanguage = false;
                    if (typeof field.langMemberships != "undefined") {
                        $.each(field.langMemberships, function(i, lang) {
                            if (lang.refset.conceptId == panel.options.langRefset) {
                                if (lang.acceptability.conceptId == "900000000000548007") {
                                    row = row + "<td><span class='i18n' data-i18n-id='i18n_preferred'>Preferred</span>";
                                } else {
                                    row = row + "<td><span class='i18n' data-i18n-id='i18n_acceptable'>Acceptable</span>";
                                }

                                includedInLanguage = true;
                            }
                        });
                    }
                    if (includedInLanguage == false) {
                        row = row + "<td><span class='i18n' data-i18n-id='i18n_not_acceptable'>Not acceptable</span>";
                    }
                    var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>DescriptionId</th><th style='padding: 3px;'>Type</th><th style='padding: 3px;'>Language</th><th style='padding: 3px;'>Case Significance</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                    moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.descriptionId + "</td><td style='padding: 3px;'>" + panel.removeSemtag(field.type.defaultTerm) + "</td><td style='padding: 3px;'>" + field.lang + "</td><td style='padding: 3px;'>" + panel.removeSemtag(field.ics.defaultTerm) + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                    row = row + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                    row = row + "</td></tr>";
                    if (!(includedInLanguage == false && panel.options.hideNotAcceptable) || panel.options.displayInactiveDescriptions) {
                        descDetailsHtml = descDetailsHtml + row;
                    }
                }
            });
            descDetailsHtml = descDetailsHtml + "</tbody></table>";
            $('#' + panel.descsPId).html(descDetailsHtml);
            if (panel.options.displaySynonyms) {
                $('#home-descriptions-' + panel.divElement.id).html(homeDescriptionsHtml);
            }

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
            $('#' + panel.descsPId).find(".jqui-draggable").draggable({
                appendTo: 'body',
                helper: 'clone',
                delay: 500
            });

            $('#' + panel.descsPId).find("[rel=tooltip-right]").tooltip({ placement: 'right'});

            // load relationships panel and home parents/roles
            if (panel.options.selectedView == "inferred") {
                $('#home-' + panel.divElement.id + '-viewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
                $('#home-' + panel.divElement.id + '-diagram-viewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
            } else {
                $('#home-' + panel.divElement.id + '-viewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
                $('#home-' + panel.divElement.id + '-diagram-viewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
            }
            panel.relsPId = divElement.id + "-rels-panel";
            var statedParents = [];
            var inferredParents = [];
            var statedRoles = [];
            var inferredRoles = [];
            var relsDetailsHtml = "<table class='table table-bordered'>";
            relsDetailsHtml = relsDetailsHtml + "<thead><tr>";
            relsDetailsHtml = relsDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_type'>Type</span></th>";
            relsDetailsHtml = relsDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_destination'>Destination</span></th>";
            relsDetailsHtml = relsDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_group'>Group</span></th>";
            relsDetailsHtml = relsDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_char_type'>CharType</span></th>";
            relsDetailsHtml = relsDetailsHtml + "</tr></thead><tbody>";

            if (typeof firstMatch.relationships != "undefined") {
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
                $.each(firstMatch.relationships, function(i, field) {
                    //console.log(JSON.stringify(field));
                    if (field.active == true) {
                        if (field.type.conceptId == 116680003) {
                            inferredParents.push(field);
                        } else {
                            inferredRoles.push(field);
                        }
                        var row = "";
                        row = "<tr class='inferred-rel";
                        if (field.effectiveTime == panel.options.highlightByEffectiveTime) {
                            row = row + " highlightEffectiveTime";
                        }
                        row = row + "'>";

                        row = row + "<td>";
                        if (field.type.definitionStatus == "Primitive") {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.type.conceptId + '" data-term="' + field.type.defaultTerm + '" data-def-status="' + field.type.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.type.conceptId + '" data-term="' + field.type.defaultTerm + '" data-def-status="' + field.type.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        row = row + field.type.defaultTerm + "</td>";
                        row = row + "<td>";
                        if (field.target.definitionStatus == "Primitive") {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.target.conceptId + '" data-term="' + field.target.defaultTerm + '" data-def-status="' + field.target.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.target.conceptId + '" data-term="' + field.target.defaultTerm + '" data-def-status="' + field.target.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        row = row + field.target.defaultTerm + "</td>";
                        row = row + "<td>" + field.groupId + "</td>";
                        if (field.charType.conceptId == "900000000000010007") {
                            row = row + "<td><span class='i18n' data-i18n-id='i18n_stated'>Stated</span>";
                        } else if (field.charType.conceptId == "900000000000011006") {
                            row = row + "<td><span class='i18n' data-i18n-id='i18n_inferred'>Inferred</span>";
                        } else {
                            row = row + "<td><span class='i18n' data-i18n-id='i18n_other'>Other</span>";
                        }
                        var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>TypeId</th><th style='padding: 3px;'>TargetId</th><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                        moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.type.conceptId + "</td><td style='padding: 3px;'>" + field.target.conceptId + "</td><td style='padding: 3px;'>" + field.modifier + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                        row = row + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                        row = row + "</td></tr>";
                        relsDetailsHtml = relsDetailsHtml + row;
                    }
                });
            }

            if (typeof firstMatch.statedRelationships != "undefined") {
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
                $.each(firstMatch.statedRelationships, function(i, field) {
                    //console.log(JSON.stringify(field));
                    if (field.active == true) {
                        if (field.type.conceptId == 116680003) {
                            statedParents.push(field);
                        } else {
                            statedRoles.push(field);
                        }
                        var row = "";
                        row = "<tr class='stated-rel";
                        if (field.effectiveTime == panel.options.highlightByEffectiveTime) {
                            row = row + " highlightEffectiveTime";
                        }
                        row = row + "'>";

                        row = row + "<td>";
                        if (field.type.definitionStatus == "Primitive") {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.type.conceptId + '" data-term="' + field.type.defaultTerm + '" data-def-status="' + field.type.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.type.conceptId + '" data-term="' + field.type.defaultTerm + '" data-def-status="' + field.type.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        row = row + field.type.defaultTerm + "</td>";
                        row = row + "<td>";
                        if (field.target.definitionStatus == "Primitive") {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.target.conceptId + '" data-term="' + field.target.defaultTerm + '" data-def-status="' + field.target.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            row = row + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.target.conceptId + '" data-term="' + field.target.defaultTerm + '" data-def-status="' + field.target.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        row = row + field.target.defaultTerm + "</td>";
                        row = row + "<td>" + field.groupId + "</td>";

                        if (field.charType.conceptId == "900000000000010007") {
                            row = row + "<td><span class='i18n' data-i18n-id='i18n_stated'>Stated</span>";
                        } else if (field.charType.conceptId == "900000000000011006") {
                            row = row + "<td><span class='i18n' data-i18n-id='i18n_inferred'>Inferred</span>";
                        } else {
                            row = row + "<td><span class='i18n' data-i18n-id='i18n_other'>Other</span>";
                        }
                        var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                        moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.modifier + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                        row = row + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                        row = row + "</td></tr>";
                        relsDetailsHtml = relsDetailsHtml + row;
                    }
                });
            }
            if ((inferredParents.length + statedParents.length) == 0) {
                relsDetailsHtml = relsDetailsHtml + "<tr><td colspan='4'><span class='text-muted'>No relationships</span></td></tr>";
            }
            relsDetailsHtml = relsDetailsHtml + "</tbody></table>";
            $('#' + panel.relsPId).html(relsDetailsHtml);

            inferredParents.sort(function(a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            statedParents.sort(function(a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            inferredRoles.sort(function(a, b) {
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

            statedRoles.sort(function(a, b) {
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

            var parentsHomeHtml = "";
            if (panel.options.selectedView == "stated") {
                $.each(statedParents, function(i, field) {
                    parentsHomeHtml = parentsHomeHtml + "<span class='jqui-draggable text-warning' data-concept-id='" + field.type.conceptId + "' data-term='" + field.type.defaultTerm + "'>";
                    if (field.type.defaultTerm.lastIndexOf("(") > 0) {
                        parentsHomeHtml = parentsHomeHtml+ field.type.defaultTerm.substr(0, field.type.defaultTerm.lastIndexOf("(")-1) + "</span>&nbsp&rArr;&nbsp;";
                    } else {
                        parentsHomeHtml = parentsHomeHtml+ field.type.defaultTerm + "</span>&nbsp&rArr;&nbsp;";
                    }
                    parentsHomeHtml = parentsHomeHtml + "<span class='jqui-draggable";
                    if (field.target.definitionStatus == "Primitive") {
                        parentsHomeHtml = parentsHomeHtml + " sct-primitive-concept-compact";
                    } else {
                        parentsHomeHtml = parentsHomeHtml + " sct-defined-concept-compact";
                    }
                    parentsHomeHtml = parentsHomeHtml + "' data-concept-id='" + field.target.conceptId + "' data-term='" + field.target.defaultTerm + "'>";                    if (field.target.defaultTerm.lastIndexOf("(") > 0) {
                        parentsHomeHtml = parentsHomeHtml + field.target.defaultTerm.substr(0, field.target.defaultTerm.lastIndexOf("(")-1) + "</span><br>";
                    } else {
                        parentsHomeHtml = parentsHomeHtml + field.target.defaultTerm + "</span><br>";
                    }
                });
                if (statedParents.length == 0) {
                    parentsHomeHtml = parentsHomeHtml + "<span class='text-muted'>No parents</span>";
                }
            } else {
                $.each(inferredParents, function(i, field) {
                    parentsHomeHtml = parentsHomeHtml + "<span class='jqui-draggable text-warning' data-concept-id='" + field.type.conceptId + "' data-term='" + field.type.defaultTerm + "'>";
                    if (field.type.defaultTerm.lastIndexOf("(") > 0) {
                        parentsHomeHtml = parentsHomeHtml+ field.type.defaultTerm.substr(0, field.type.defaultTerm.lastIndexOf("(")-1) + "</span>&nbsp&rArr;&nbsp;";
                    } else {
                        parentsHomeHtml = parentsHomeHtml+ field.type.defaultTerm + "</span>&nbsp&rArr;&nbsp;";
                    }
                    parentsHomeHtml = parentsHomeHtml + "<span class='jqui-draggable";
                    if (field.target.definitionStatus == "Primitive") {
                        parentsHomeHtml = parentsHomeHtml + " sct-primitive-concept-compact";
                    } else {
                        parentsHomeHtml = parentsHomeHtml + " sct-defined-concept-compact";
                    }
                    parentsHomeHtml = parentsHomeHtml + "' data-concept-id='" + field.target.conceptId + "' data-term='" + field.target.defaultTerm + "'>";
                    if (field.target.defaultTerm.lastIndexOf("(") > 0) {
                        parentsHomeHtml = parentsHomeHtml + field.target.defaultTerm.substr(0, field.target.defaultTerm.lastIndexOf("(")-1) + "</span><br>";
                    } else {
                        parentsHomeHtml = parentsHomeHtml + field.target.defaultTerm + "</span><br>";
                    }
                });
                if (inferredParents.length == 0) {
                    parentsHomeHtml = parentsHomeHtml + "<span class='text-muted'>No parents</span>";
                }
            }
            if (!panel.options.diagrammingMarkupEnabled) {
                parentsHomeHtml = panel.stripDiagrammingMarkup(parentsHomeHtml);
            }
            $('#home-parents-' + panel.divElement.id).html(parentsHomeHtml);

            var rolesHomeHtml = "<div style='line-height: 100%;'>";
            if (panel.options.selectedView == "stated") {
                var lastGroup = 0;
                var barHtml = "";
                var barColor = "white";
                $.each(statedRoles, function(i, field) {
                    if (!(lastGroup == field.groupId)) {
                        rolesHomeHtml = rolesHomeHtml + "<br>";
                        lastGroup = field.groupId;
                        barColor = getRandomColor();
                        barHtml = "&nbsp;&nbsp;&nbsp;<span style='background-color: " + barColor + "'>&nbsp;&nbsp;</span>";
                    }
                    rolesHomeHtml = rolesHomeHtml + barHtml;
                    rolesHomeHtml = rolesHomeHtml + "&nbsp;<span class='jqui-draggable sct-attribute-compact' data-concept-id='" + field.type.conceptId + "' data-term='" + field.type.defaultTerm + "'>";
                    rolesHomeHtml = rolesHomeHtml+ panel.removeSemtag(field.type.defaultTerm) + "</span>&nbsp&rarr;&nbsp;";
                    rolesHomeHtml = rolesHomeHtml + "<span class='jqui-draggable";
                    if (field.target.definitionStatus == "Primitive") {
                        rolesHomeHtml = rolesHomeHtml + " sct-primitive-concept-compact";
                    } else {
                        rolesHomeHtml = rolesHomeHtml + " sct-defined-concept-compact";
                    }
                    rolesHomeHtml = rolesHomeHtml + "' data-concept-id='" + field.target.conceptId + "' data-term='" + field.target.defaultTerm + "'>";
                    rolesHomeHtml = rolesHomeHtml + panel.removeSemtag(field.target.defaultTerm) + "</span><br>";
                });
                if (statedRoles.length == 0) {
                    rolesHomeHtml = rolesHomeHtml + "<span class='i18n text-muted' data-i18n-id='i18n_no_relationships'>No relationships</span>";
                }
            } else {
                var lastGroup = 0;
                var barHtml = "";
                var barColor = "white";
                $.each(inferredRoles, function(i, field) {
                    if (!(lastGroup == field.groupId)) {
                        lastGroup = field.groupId;
                        rolesHomeHtml = rolesHomeHtml + "<br>";
                        barColor = getRandomColor();
                        barHtml = "&nbsp;&nbsp;&nbsp;<span style='background-color: " + barColor + "'>&nbsp;&nbsp;</span>";
                    }
                    rolesHomeHtml = rolesHomeHtml + barHtml;
                    rolesHomeHtml = rolesHomeHtml + "&nbsp;<span class='jqui-draggable sct-attribute-compact' data-concept-id='" + field.type.conceptId + "' data-term='" + field.type.defaultTerm + "'>";
                    rolesHomeHtml = rolesHomeHtml+ panel.removeSemtag(field.type.defaultTerm) + "</span>&nbsp&rarr;&nbsp;";
                    rolesHomeHtml = rolesHomeHtml + "<span class='jqui-draggable";
                    if (field.target.definitionStatus == "Primitive") {
                        rolesHomeHtml = rolesHomeHtml + " sct-primitive-concept-compact";
                    } else {
                        rolesHomeHtml = rolesHomeHtml + " sct-defined-concept-compact";
                    }
                    rolesHomeHtml = rolesHomeHtml + "' data-concept-id='" + field.target.conceptId + "' data-term='" + field.target.defaultTerm + "'>";
                    rolesHomeHtml = rolesHomeHtml + panel.removeSemtag(field.target.defaultTerm) + "</span><br>";
                });
                if (inferredRoles.length == 0) {
                    rolesHomeHtml = rolesHomeHtml + "<span class='i18n text-muted' data-i18n-id='i18n_no_relationships'>No relationships</span>";
                }
            }
            rolesHomeHtml = rolesHomeHtml + "</div>";
            if (!panel.options.diagrammingMarkupEnabled) {
                rolesHomeHtml = panel.stripDiagrammingMarkup(rolesHomeHtml);
            }

            if (panel.options.diagrammingMarkupEnabled) {
                $('#footer-' + panel.divElement.id).html('<a href="http://www.ihtsdo.org/fileadmin/user_upload/Docs_01/Publications/SNOMED_CT_Diagramming_Guideline.pdf" target="_blank">Read about the IHTSDO Diagramming Guideline</a>');
            } else {
                $('#footer-' + panel.divElement.id).html('');
            }


            $('#home-roles-' + panel.divElement.id).html(rolesHomeHtml);


            // Load Refsets info
            var refsetsHtml = "";

            if (firstMatch.memberships) {
                var simpleFound = false;
                var simpleRefsetsHtml = "<table class='table table-bordered'>";
                simpleRefsetsHtml = simpleRefsetsHtml + "<thead><tr>";
                simpleRefsetsHtml = simpleRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_simple_refset_memberships'>Simple Refsets Memberships</span></th>";
                simpleRefsetsHtml = simpleRefsetsHtml + "</tr></thead><tbody>";
                $.each(firstMatch.memberships, function (i, field) {
                    if (field.type == "SIMPLE_REFSET") {
                        simpleFound = true;
                        simpleRefsetsHtml = simpleRefsetsHtml + "<tr class='";
                        if (!field.active) {
                            simpleRefsetsHtml = simpleRefsetsHtml + " danger";
                        }
                        simpleRefsetsHtml = simpleRefsetsHtml + "'><td>";
                        if (field.refset.definitionStatus == "Primitive") {
                            simpleRefsetsHtml = simpleRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            simpleRefsetsHtml = simpleRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        simpleRefsetsHtml = simpleRefsetsHtml + field.refset.defaultTerm + "</td>";
                        var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                        moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.refset.conceptId + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                        simpleRefsetsHtml = simpleRefsetsHtml + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                        simpleRefsetsHtml = simpleRefsetsHtml + "</td></tr>";
                    }
                });
                if (!simpleFound) {
                    simpleRefsetsHtml = simpleRefsetsHtml + "<tr><td><span class='i18n text-muted' data-i18n-id='i18n_no_memberships'>No memberships</span></td></tr>"
                    simpleRefsetsHtml = simpleRefsetsHtml + "</tbody></table>";
                } else {
                    simpleRefsetsHtml = simpleRefsetsHtml + "</tbody></table>";
                    refsetsHtml = refsetsHtml + simpleRefsetsHtml;
                }

                var simpleMapFound = false;
                // collapse <button data-toggle='collapse' href='#simpleMapTable'>X</button><div class='collapse' id='simpleMapTable'>
                var simpleMapRefsetsHtml = "<table class='table table-bordered'>";
                simpleMapRefsetsHtml = simpleMapRefsetsHtml + "<thead><tr>";
                simpleMapRefsetsHtml = simpleMapRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_simple_map_refset_name'>Simple Map Refset name</span></th>";
                simpleMapRefsetsHtml = simpleMapRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_target_code'>Target code</span></th>";
                simpleMapRefsetsHtml = simpleMapRefsetsHtml + "</tr></thead><tbody>";
                $.each(firstMatch.memberships, function (i, field) {
                    if (field.type == "SIMPLEMAP") {
                        simpleMapFound = true;
                        simpleMapRefsetsHtml = simpleMapRefsetsHtml + "<tr class='";
                        if (!field.active) {
                            simpleMapRefsetsHtml = simpleMapRefsetsHtml + " danger";
                        }
                        simpleMapRefsetsHtml = simpleMapRefsetsHtml + "'><td>";
                        if (field.refset.definitionStatus == "Primitive") {
                            simpleMapRefsetsHtml = simpleMapRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            simpleMapRefsetsHtml = simpleMapRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        simpleMapRefsetsHtml = simpleMapRefsetsHtml + field.refset.defaultTerm + "</td>";
                        simpleMapRefsetsHtml = simpleMapRefsetsHtml + "<td>" + field.otherValue;
                        var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                        moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.refset.conceptId + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                        simpleMapRefsetsHtml = simpleMapRefsetsHtml + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                        simpleMapRefsetsHtml = simpleMapRefsetsHtml + "</td></tr>";
                    }
                });
                if (!simpleMapFound) {
                    simpleMapRefsetsHtml = simpleMapRefsetsHtml + "<tr><td colspan='2'><span class='i18n text-muted' data-i18n-id='i18n_no_memberships'>No memberships</span></td></tr>"
                    simpleMapRefsetsHtml = simpleMapRefsetsHtml + "</tbody></table>";
                } else {
                    simpleMapRefsetsHtml = simpleMapRefsetsHtml + "</tbody></table>";
                    refsetsHtml = refsetsHtml + simpleMapRefsetsHtml;
                }

                var attributeValueFound = false;
                var attributeValueRefsetsHtml = "<table class='table table-bordered'>";
                attributeValueRefsetsHtml = attributeValueRefsetsHtml + "<thead><tr>";
                attributeValueRefsetsHtml = attributeValueRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_attribute_value_refset_name'>Attribute Value Refset name</span></th>";
                attributeValueRefsetsHtml = attributeValueRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_value'>Value</span></th>";
                attributeValueRefsetsHtml = attributeValueRefsetsHtml + "</tr></thead><tbody>";
                $.each(firstMatch.memberships, function (i, field) {
                    if (field.type == "ATTRIBUTE_VALUE") {
                        attributeValueFound = true;
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + "<tr class='";
                        if (!field.active) {
                            attributeValueRefsetsHtml = attributeValueRefsetsHtml + " danger";
                        }
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + "'><td>";
                        if (field.refset.definitionStatus == "Primitive") {
                            attributeValueRefsetsHtml = attributeValueRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            attributeValueRefsetsHtml = attributeValueRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + field.refset.defaultTerm + "</td>";
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + "<td>";
                        if (field.cidValue.definitionStatus == "Primitive") {
                            attributeValueRefsetsHtml = attributeValueRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.cidValue.conceptId + '" data-term="' + field.cidValue.defaultTerm + '" data-def-status="' + field.cidValue.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            attributeValueRefsetsHtml = attributeValueRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.cidValue.conceptId + '" data-term="' + field.cidValue.defaultTerm + '" data-def-status="' + field.cidValue.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + field.cidValue.defaultTerm + "</td>";
                        var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                        moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.refset.conceptId + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                        attributeValueRefsetsHtml = attributeValueRefsetsHtml + "</td></tr>";
                    }
                });
                if (!attributeValueFound) {
                    attributeValueRefsetsHtml = attributeValueRefsetsHtml + "<tr><td colspan='2'><span class='i18n text-muted' data-i18n-id='i18n_no_memberships'>No memberships</span></td></tr>"
                    attributeValueRefsetsHtml = attributeValueRefsetsHtml + "</tbody></table>";
                } else {
                    attributeValueRefsetsHtml = attributeValueRefsetsHtml + "</tbody></table>";
                    refsetsHtml = refsetsHtml + attributeValueRefsetsHtml;
                }

                var associationFound = false;
                var associationRefsetsHtml = "<table class='table table-bordered'>";
                associationRefsetsHtml = associationRefsetsHtml + "<thead><tr>";
                associationRefsetsHtml = associationRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_association_refset_name'>Association Refset name</span></th>";
                associationRefsetsHtml = associationRefsetsHtml + "<th><span class='i18n' data-i18n-id='i18n_value'>Value</span></th>";
                associationRefsetsHtml = associationRefsetsHtml + "</tr></thead><tbody>";
                $.each(firstMatch.memberships, function (i, field) {
                    if (field.type == "ASSOCIATION") {
                        associationFound = true;
                        associationRefsetsHtml = associationRefsetsHtml + "<tr class='";
                        if (!field.active) {
                            associationRefsetsHtml = associationRefsetsHtml + " danger";
                        }
                        associationRefsetsHtml = associationRefsetsHtml + "'><td>";
                        if (field.refset.definitionStatus == "Primitive") {
                            associationRefsetsHtml = associationRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            associationRefsetsHtml = associationRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.refset.conceptId + '" data-term="' + field.refset.defaultTerm + '" data-def-status="' + field.refset.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        associationRefsetsHtml = associationRefsetsHtml + field.refset.defaultTerm + "</td>";
                        associationRefsetsHtml = associationRefsetsHtml + "<td>";
                        if (field.cidValue.definitionStatus == "Primitive") {
                            associationRefsetsHtml = associationRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.cidValue.conceptId + '" data-term="' + field.cidValue.defaultTerm + '" data-def-status="' + field.cidValue.definitionStatus + '">&nbsp;</span></a>&nbsp;&nbsp;';
                        } else {
                            associationRefsetsHtml = associationRefsetsHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="badge alert-warning jqui-draggable"  data-concept-id="' + field.cidValue.conceptId + '" data-term="' + field.cidValue.defaultTerm + '" data-def-status="' + field.cidValue.definitionStatus + '">&equiv;</span></a>&nbsp;&nbsp;';
                        }
                        associationRefsetsHtml = associationRefsetsHtml + field.cidValue.defaultTerm + "</td>";
                        var moreDetailsHtml = "<table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>";
                        moreDetailsHtml = moreDetailsHtml + "<tr><td style='padding: 3px;'>" + field.refset.conceptId + "</td><td style='padding: 3px;'>" + field.effectiveTime + "</td><td style='padding: 3px;'>" + field.module + "</td></tr></table>"
                        associationRefsetsHtml = associationRefsetsHtml + '<button type="button" class="btn btn-link unobtrusive-icon more-fields-button pull-right" data-container="body" data-toggle="popover" data-placement="left" data-content="' + moreDetailsHtml + '" data-html="true"><i class="glyphicon glyphicon-info-sign"></i></button>';
                        associationRefsetsHtml = associationRefsetsHtml + "</td></tr>";
                    }
                });
                if (!associationFound) {
                    associationRefsetsHtml = associationRefsetsHtml + "<tr><td colspan='2'><span class='i18n text-muted' data-i18n-id='i18n_no_memberships'>No memberships</span></td></tr>"
                    associationRefsetsHtml = associationRefsetsHtml + "</tbody></table>";
                } else {
                    associationRefsetsHtml = associationRefsetsHtml + "</tbody></table>";
                    refsetsHtml = refsetsHtml + associationRefsetsHtml;
                }

            }

            $('#refsets-' + panel.divElement.id).html(refsetsHtml);


            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "diagram-tab") {
                $("#diagram-canvas-" + panel.divElement.id).html("");
                drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options);
            }

            $("#diagram-tab-link-" + panel.divElement.id).click(function (e) {
                $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                setTimeout(function () {
                    $("#diagram-canvas-" + panel.divElement.id).html("");
                    drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options);
                }, 1000)

            });

            $('.more-fields-button').disableTextSelect();
            $('.more-fields-button').popover();

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
            $('#' + panel.relsPId + ',#home-parents-' + panel.divElement.id + ',#home-roles-' + panel.divElement.id + ',#refsets-' + panel.divElement.id).find(".jqui-draggable").draggable({
                appendTo: 'body',
                helper: 'clone',
                delay: 500
            });
            $('#' + panel.relsPId + ',#home-parents-' + panel.divElement.id + ',#home-roles-' + panel.divElement.id).find(".jqui-draggable").tooltip({
                placement : 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });
            if (typeof(switchLanguage) == "function") {
                switchLanguage(selectedLanguage, selectedFlag, false);
            }
            conceptRequested = 0;
        }).fail(function() {
            $('#' + panel.attributesPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $('#' + panel.descsPId).html("");
            $('#' + panel.relsPId).html("");
            $('#' + panel.relsPId).html("");
        });
//        if (typeof xhr != "undefined") {
//            console.log("aborting call...");
//
//        }
        if (panel.options.displayChildren == false) {
            $('#' + panel.childrenPId).html("");
            $('#' + panel.childrenPId).hide();
        } else {
            $('#' + panel.childrenPId).show();
            if (xhrChildren != null) {
                xhrChildren.abort();
                console.log("aborting children call...");
            }
            xhrChildren = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + panel.conceptId + "/children?form=inferred", function(result) {
                //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
            }).done(function(result) {
                // load relationships panel
                xhrChildren = null;
                panel.childrenPId = divElement.id + "-children-panel";
                childrenDetailsHtml = "<div>";
                childrenDetailsHtml = "<table class='table table-bordered'>";
                childrenDetailsHtml = childrenDetailsHtml + "<thead><tr>";
                childrenDetailsHtml = childrenDetailsHtml + "<th><span class='i18n' data-i18n-id='i18n_children'>Children</span></th>";
                childrenDetailsHtml = childrenDetailsHtml + "</tr></thead><tbody></div>";
                $.each(result, function(i, field) {
                    if (field.active == true) {
                        childrenDetailsHtml = childrenDetailsHtml + "<tr><td class='jqui-draggable' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>" + field.defaultTerm + "</td></tr>";
                    }
                });

                childrenDetailsHtml = childrenDetailsHtml + "</tbody></table>";
                //console.log(JSON.stringify(childrenDetailsHtml));
                $('#' + panel.childrenPId).html(childrenDetailsHtml);
                $('#' + panel.childrenPId).find(".jqui-draggable").draggable({
                    appendTo: 'body',
                    helper: 'clone',
                    delay: 500
                });
            }).fail(function() {
                $('#' + panel.childrenPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            });

        }
    }

    this.stripDiagrammingMarkup = function(htmlString) {
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-primitive-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-defined-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-attribute-compact"), 'g'), "");
        return htmlString;
    }
    this.escapeRegExp = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    this.setSubscription = function(subscriptionPanel) {
        panel.subscription = subscriptionPanel;
        $("#" + panel.divElement.id + "-subscribersMarker").css('color', subscriptionPanel.markerColor);
        $("#" + panel.divElement.id + "-subscribersMarker").show();
    }

    this.clearSubscription = function() {
        panel.subscription = null;
        $("#" + panel.divElement.id + "-subscribersMarker").hide();
    }


    this.setupOptionsPanel = function() {
        optionsHtml = '<form role="form" id="' + panel.divElement.id + '-options-form">';

        optionsHtml = optionsHtml + '<div class="form-group">';
        optionsHtml = optionsHtml + '<div class="checkbox">';
        optionsHtml = optionsHtml + '<label>';
        if (panel.options.displaySynonyms == false) {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-displaySynonymsOption"> <span class="i18n" data-i18n-id="i18n_display_synonyms2">Display Synonyms along with FSN and preferred terms</span>';
        } else {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-displaySynonymsOption" checked> <span class="i18n" data-i18n-id="i18n_display_synonyms2">Display Synonyms along with FSN and preferred terms</span>';
        }
        optionsHtml = optionsHtml + '</label>';
        optionsHtml = optionsHtml + '</div>';

        optionsHtml = optionsHtml + '<div class="checkbox">';
        optionsHtml = optionsHtml + '<label>';
        if (panel.options.showIds == false) {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-displayIdsOption"> <span class="i18n" data-i18n-id="i18n_display_ids">Display Ids</span>';
        } else {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-displayIdsOption" checked> <span class="i18n" data-i18n-id="i18n_display_ids">Display Ids</span>';
        }
        optionsHtml = optionsHtml + '</label>';
        optionsHtml = optionsHtml + '</div>';

        optionsHtml = optionsHtml + '<div class="checkbox">';
        optionsHtml = optionsHtml + '<label>';
        if (panel.options.displayInactiveDescriptions == false) {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-displayInactiveDescriptionsOption"> <span class="i18n" data-i18n-id="i18n_display_inactive_descriptions">Display inactive descriptions</span>';
        } else {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-displayInactiveDescriptionsOption" checked> <span class="i18n" data-i18n-id="i18n_display_inactive_descriptions">Display inactive descriptions</span>';
        }
        optionsHtml = optionsHtml + '</label>';
        optionsHtml = optionsHtml + '</div>';

        optionsHtml = optionsHtml + '<div class="checkbox">';
        optionsHtml = optionsHtml + '<label>';
        if (panel.options.hideNotAcceptable == false) {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-hideNotAcceptableOption"> <span class="i18n" data-i18n-id="i18n_hide_not_acceptable">Hide descriptions with no acceptability</span>';
        } else {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-hideNotAcceptableOption" checked> <span class="i18n" data-i18n-id="i18n_hide_not_acceptable">Hide descriptions with no acceptability</span>';
        }
        optionsHtml = optionsHtml + '</label>';
        optionsHtml = optionsHtml + '</div>';

        optionsHtml = optionsHtml + '<div class="checkbox">';
        optionsHtml = optionsHtml + '<label>';
        if (panel.options.diagrammingMarkupEnabled == false) {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-diagrammingMarkupEnabledOption"> <span class="i18n" data-i18n-id="i18n_diagramming_markup_enabled">Diagramming Guideline colors enabled</span>';
        } else {
            optionsHtml = optionsHtml + '<input type="checkbox" id="' + panel.divElement.id + '-diagrammingMarkupEnabledOption" checked> <span class="i18n" data-i18n-id="i18n_diagramming_markup_enabled">Diagramming Guideline colors enabled</span>';
        }
        optionsHtml = optionsHtml + '</label>';
        optionsHtml = optionsHtml + '</div>';
        optionsHtml = optionsHtml + '</div>';

        optionsHtml = optionsHtml + '<div class="form-group">';
        optionsHtml = optionsHtml + '<label for="selectedRelsView"><span class="i18n" data-i18n-id="i18n_rels_view">Relationships View</span></label>';
        optionsHtml = optionsHtml + '<select class="form-control" id="' + panel.divElement.id + '-relsViewOption">';
        if (typeof i18n_inferred == "undefined") {
            i18n_inferred = "Inferred";
        }
        if (typeof i18n_stated == "undefined") {
            i18n_stated = "Stated";
        }
        if (typeof i18n_all == "undefined") {
            i18n_all = "All";
        }
        if (panel.options.selectedView == "stated") {
            optionsHtml = optionsHtml + '<option value="stated" selected>' + i18n_stated + '</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="stated">' + i18n_stated + '</option>';
        }
        if (panel.options.selectedView == "inferred") {
            optionsHtml = optionsHtml + '<option value="inferred" selected>' + i18n_inferred + '</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="inferred">' + i18n_inferred + '</option>';
        }
        if (panel.options.selectedView == "all") {
            optionsHtml = optionsHtml + '<option value="all" selected>' + i18n_all + '</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="all">' + i18n_all + '</option>';
        }
        optionsHtml = optionsHtml + '</select>';
        optionsHtml = optionsHtml + '</div>';

        optionsHtml = optionsHtml + '<div class="form-group">';
        optionsHtml = optionsHtml + '<label for="' + panel.divElement.id + '-langRefsetOption"><span class="i18n" data-i18n-id="i18n_language_refset">Language Refset</span></label>';
        optionsHtml = optionsHtml + '<select class="form-control" id="' + panel.divElement.id + '-langRefsetOption">';
        if (panel.options.langRefset == "900000000000508004") {
            optionsHtml = optionsHtml + '<option value="900000000000508004" selected>GB Language Refset</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="900000000000508004">GB Language Refset</option>';
        }
        if (panel.options.langRefset == "900000000000509007") {
            optionsHtml = optionsHtml + '<option value="900000000000509007" selected>US Language Refset</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="900000000000509007">US Language Refset</option>';
        }
        if (panel.options.langRefset == "450828004") {
            optionsHtml = optionsHtml + '<option value="450828004" selected>ES Language Refset</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="450828004">ES Language Refset</option>';
        }
        if (panel.options.langRefset == "554461000005103") {
            optionsHtml = optionsHtml + '<option value="554461000005103" selected>DA Language Refset</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="554461000005103">DA Language Refset</option>';
        }
        if (panel.options.langRefset == "46011000052107") {
            optionsHtml = optionsHtml + '<option value="46011000052107" selected>SV Language Refset</option>';
        } else {
            optionsHtml = optionsHtml + '<option value="46011000052107">SV Language Refset</option>';
        }
        optionsHtml = optionsHtml + '</select>';
        optionsHtml = optionsHtml + '</div>';
        optionsHtml = optionsHtml + '</form>';
        $("#" + panel.divElement.id + "-modal-body").html(optionsHtml);
    }

    this.readOptionsPanel = function() {
        panel.options.displaySynonyms = $("#" + panel.divElement.id + "-displaySynonymsOption").is(':checked');
        panel.options.showIds = $("#" + panel.divElement.id + "-displayIdsOption").is(':checked');
        panel.options.displayChildren = $("#" + panel.divElement.id + "-childrenOption").is(':checked');
        panel.options.hideNotAcceptable = $("#" + panel.divElement.id + "-hideNotAcceptableOption").is(':checked');
        panel.options.displayInactiveDescriptions = $("#" + panel.divElement.id + "-displayInactiveDescriptionsOption").is(':checked');
        panel.options.diagrammingMarkupEnabled = $("#" + panel.divElement.id + "-diagrammingMarkupEnabledOption").is(':checked');
        panel.options.selectedView = $("#" + panel.divElement.id + "-relsViewOption").val();
        panel.options.langRefset = $("#" + panel.divElement.id + "-langRefsetOption").val();
    }

    this.removeSemtag = function(term) {
        if (term.lastIndexOf("(") > 0) {
            return term.substr(0, term.lastIndexOf("(")-1)
        } else {
            return term;
        }
    }
}

function updateCD(divElementId, conceptId) {
    $.each(componentsRegistry, function(i, field) {
        //console.log(field.divElement.id + ' == ' + divElementId.id);
        if (field.divElement.id == divElementId) {
            field.conceptId = conceptId;
            field.updateCanvas();
        }
    });
    $('.history-button').popover('hide');
}

function cancelSubscription(divElementId1, divElementId2) {
    var d1;
    var d2;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == divElementId1) {
            d1 = field;
        } else if (field.divElement.id == divElementId2) {
            d2 = field;
        }
    });
    d1.unsubscribe(d2);
    $(d2.divElement).find('.linker-button').popover('toggle');
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
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
}
);



