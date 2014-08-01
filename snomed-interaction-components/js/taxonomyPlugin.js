/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function taxonomyPanel(divElement, conceptId, options) {
    var nodeCount = 0;
    var panel = this;
    this.subscribers = [];
    var xhr = null;
    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    this.markerColor = 'black';
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

    this.history = [];

    this.setupCanvas = function() {
//        var taxonomyHtml = "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='" + panel.divElement.id + "-mainPanel'>";
//        taxonomyHtml = taxonomyHtml + "<div class='panel-heading' id='" + panel.divElement.id + "-panelHeading'>";
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-bookmark'></i></button>"
//        taxonomyHtml = taxonomyHtml + "<div class='row'>";
//        taxonomyHtml = taxonomyHtml + "<div class='col-md-6' id='" + panel.divElement.id + "-panelTitle'>&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_taxonomy'>Taxonomy</span></strong></div>";
//        taxonomyHtml = taxonomyHtml + "<div class='col-md-6 text-right'>";
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-resetButton' class='btn btn-link' data-panel='" + panel.divElement.id + "' style='padding:2px'><i class='glyphicon glyphicon-repeat'></i></button>"
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-linkerButton' class='btn btn-link jqui-draggable linker-button' data-panel='" + panel.divElement.id + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>"
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-configButton' class='btn btn-link' style='padding:2px' data-target='#" + panel.divElement.id + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>"
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>"
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>"
//        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>"
//        taxonomyHtml = taxonomyHtml + "</div>";
//        taxonomyHtml = taxonomyHtml + "</div>";
//        taxonomyHtml = taxonomyHtml + "</div>";
//        taxonomyHtml = taxonomyHtml + "<div id='" + panel.divElement.id + "-taxonomyConfigBar' style='margin-bottom: 10px;'><nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>";
//        taxonomyHtml = taxonomyHtml + " <ul class='nav navbar-nav navbar-left'>";
//        taxonomyHtml = taxonomyHtml + "     <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>";
//        taxonomyHtml = taxonomyHtml + "         <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='" + panel.divElement.id + "-txViewLabel'></span> <b class='caret'></b></a>";
//        taxonomyHtml = taxonomyHtml + "         <ul class='dropdown-menu' role='menu' style='float: none;'>";
//        taxonomyHtml = taxonomyHtml + "             <li><button class='btn btn-link' id='" + panel.divElement.id + "-inferredViewButton'><span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span></button></li>";
//        taxonomyHtml = taxonomyHtml + "             <li><button class='btn btn-link' id='" + panel.divElement.id + "-statedViewButton'><span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span></button></li>";
//        taxonomyHtml = taxonomyHtml + "         </ul>";
//        taxonomyHtml = taxonomyHtml + "     </li>";
//        taxonomyHtml = taxonomyHtml + " </ul>";
//        taxonomyHtml = taxonomyHtml + "</nav></div>";
//        taxonomyHtml = taxonomyHtml + "<div class='panel-body' style='height:100%' id='" + panel.divElement.id + "-panelBody'>";
//        taxonomyHtml = taxonomyHtml + "</div>";
//        taxonomyHtml = taxonomyHtml + "</div>";
//        $(divElement).html(taxonomyHtml);
        var context = {
            divElementId: panel.divElement.id
        }
        $.get("./views/taxonomyPlugin/taxonomyPlugin-main.hbs").then(function (src) {
            var template = Handlebars.compile(src);
            $(divElement).html(template(context));
            $("#" + panel.divElement.id + "-resetButton").disableTextSelect();
            $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
            $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
            $("#" + panel.divElement.id + "-configButton").disableTextSelect();
            $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
            $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
            $("#" + panel.divElement.id + "-closeButton").disableTextSelect();
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-subscribersMarker").hide();

            $("#" + panel.divElement.id + "-closeButton").click(function(event) {
                $(divElement).remove();
            });

            $("#" + panel.divElement.id + "-configButton").click(function (event) {
                $("#" + panel.divElement.id + "-taxonomyConfigBar").slideToggle('slow');
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
            });
            $("#" + panel.divElement.id + "-collapseButton").click(function(event) {
                $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
                $("#" + panel.divElement.id + "-expandButton").show();
                $("#" + panel.divElement.id + "-collapseButton").hide();
            });
            if (typeof i18n_panel_options == "undefined") {
                i18n_panel_options = 'Options';
            }
            $("#" + panel.divElement.id + "-configButton").tooltip({
                placement : 'left',
                trigger: 'hover',
                title: i18n_panel_options,
                animation: true,
                delay: 1000
            });
            if (typeof i18n_reset == "undefined") {
                i18n_reset = 'Reset';
            }
            $("#" + panel.divElement.id + "-resetButton").tooltip({
                placement : 'left',
                trigger: 'hover',
                title: i18n_reset,
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
            $("#" + panel.divElement.id + "-linkerButton").draggable({
                cancel: false,
                appendTo: 'body',
                helper: 'clone',
                delay: 500,
                revert: false
            });

            $("#" + panel.divElement.id + "-panelBody").droppable({
                drop: panel.handleDropEvent,
                hoverClass: "bg-info"
            });

            $("#" + panel.divElement.id + "-panelHeading").droppable({
                drop: panel.handleDropEvent,
                hoverClass: "bg-info"
            });

            $("#" + panel.divElement.id + "-resetButton").click(function() {
                panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive"});
            });

            $("#" + panel.divElement.id + "-apply-button").click(function() {
                //console.log("apply!");
                panel.readOptionsPanel();
                panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive"});
            });


            $("#" + panel.divElement.id + "-linkerButton").click(function(event) {
                $("#" + panel.divElement.id + "-linkerButton").popover({
                    trigger: 'manual',
                    placement: 'bottomRight',
                    html: true,
                    content: function() {
                        linkerHtml = '<div class="text-center text-muted"><em>Drag to link with other panels<br>';
                        if (panel.subscribers.length == 1) {
                            linkerHtml = linkerHtml + panel.subscribers.length + ' link established</em></div>';
                        } else {
                            linkerHtml = linkerHtml + panel.subscribers.length + ' links established</em></div>';
                        }
                        linkerHtml = linkerHtml + '<div class="text-center"><a href="javascript:void(0);" onclick="clearTaxonomyPanelSubscriptions(\'' + panel.divElement.id + '\');">Clear links</a></div>';
                        return linkerHtml;
                    }
                });
                $("#" + panel.divElement.id + "-linkerButton").popover('toggle');
            });

            $("#" + panel.divElement.id + "-inferredViewButton").click(function (event) {
                panel.options.selectedView = 'inferred';
                $("#" + panel.divElement.id + '-txViewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
                panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive"});
            });

            $("#" + panel.divElement.id + "-statedViewButton").click(function (event) {
                panel.options.selectedView = 'stated';
                $("#" + panel.divElement.id + '-txViewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
                panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive"});
            });
            $("#" + panel.divElement.id + "-inferredViewButton").click();
        });

    }

    this.setupParents = function(parents, focusConcept) {
        var treeHtml = "<div style='height:100%;margin-bottom: 15px;'>";
        treeHtml = treeHtml + "<ul style='list-style-type: none; padding-left: 5px;'>";
        var lastParent;
        $.each(parents, function(i, parent) {
            lastParent = parent;
            treeHtml = treeHtml + "<li data-concept-id='" + parent.conceptId + "' data-term='" + parent.defaultTerm + "' class='treeLabel'>";
            treeHtml = treeHtml + "<button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-up treeButton'  id='" + panel.divElement.id + "-treeicon-" + parent.conceptId + "'></i></button>";
            if (parent.definitionStatus == "Primitive") {
                treeHtml = treeHtml + '<span class="badge alert-warning">&nbsp;</span>&nbsp;&nbsp;';
            } else {
                treeHtml = treeHtml + '<span class="badge alert-warning">&equiv;</span>&nbsp;&nbsp;';
            }
            treeHtml = treeHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span data-concept-id="' + parent.conceptId + '" data-term="' + parent.defaultTerm + '" class="jqui-draggable treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + parent.conceptId + '">' + parent.defaultTerm + '</span></a>';
            treeHtml = treeHtml + "</li>";
        });
        if (parents.length > 0) {
            treeHtml = treeHtml.slice(0, -5);
        }
        treeHtml = treeHtml + "<ul style='list-style-type: none; padding-left: 15px;'>";
        treeHtml = treeHtml + "<li data-concept-id='" + focusConcept.conceptId + "' data-term='" + focusConcept.defaultTerm + "' class='treeLabel'>";
        treeHtml = treeHtml + "<button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-right treeButton'  id='" + panel.divElement.id + "-treeicon-" + focusConcept.conceptId + "'></i></button>";
        if (focusConcept.definitionStatus == "Primitive") {
            treeHtml = treeHtml + '<span class="badge alert-warning">&nbsp;</span>&nbsp;&nbsp;';
        } else {
            treeHtml = treeHtml + '<span class="badge alert-warning">&equiv;</span>&nbsp;&nbsp;';
        }
        treeHtml = treeHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span data-concept-id="' + focusConcept.conceptId + '" data-term="' + focusConcept.defaultTerm + '" class="jqui-draggable treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + focusConcept.conceptId + '">' + focusConcept.defaultTerm + "</span></a>";
        treeHtml = treeHtml + "</li>";
        treeHtml = treeHtml + "</ul>";
        if (parents.length > 0) {
            treeHtml = treeHtml + "</li>";
        }
        treeHtml = treeHtml + "</ul>";
        treeHtml = treeHtml + "</div>";
        $("#" + panel.divElement.id + "-panelBody").html(treeHtml);

        $(".treeButton").disableTextSelect();

        $('.jqui-draggable').draggable({
            appendTo: 'body',
            helper: 'clone',
            delay: 500
        });
        $("#" + panel.divElement.id + "-panelBody").unbind("dblclick");
        $("#" + panel.divElement.id + "-panelBody").dblclick(function(event) {
            if ($(event.target).hasClass("treeLabel")) {
                var selectedId = $(event.target).attr('data-concept-id');
                var selectedLabel = $(event.target).attr('data-term');
                if (typeof selectedId != "undefined") {
                    console.log(panel.options.selectedView);
                    $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + selectedId + "/parents?form=" + panel.options.selectedView, function(result) {
                        // done
                    }).done(function(result) {
                        panel.setupParents(result, {conceptId: selectedId, defaultTerm: selectedLabel, definitionStatus: "Primitive"});
                    }).fail(function() {
                    });
                }
            }
        });
        $("#" + panel.divElement.id + "-panelBody").unbind("click");
        $("#" + panel.divElement.id + "-panelBody").click(function(event) {
            if ($(event.target).hasClass("treeButton")) {
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                var iconId = panel.divElement.id + "-treeicon-" + conceptId;
                event.preventDefault();
                if ($("#" + iconId).hasClass("glyphicon-chevron-down")) {
                    //console.log("close");
                    $(event.target).closest("li").find("ul").remove();
                    $("#" + iconId).removeClass("glyphicon-chevron-down");
                    $("#" + iconId).addClass("glyphicon-chevron-right");
                } else if ($("#" + iconId).hasClass("glyphicon-chevron-right")){
                    //console.log("open");
                    $("#" + iconId).removeClass("glyphicon-chevron-right");
                    $("#" + iconId).addClass("glyphicon-refresh");
                    $("#" + iconId).addClass("icon-spin");
                    panel.getChildren($(event.target).closest("li").attr('data-concept-id'));
                } else if ($("#" + iconId).hasClass("glyphicon-chevron-up")){
                    $("#" + iconId).removeClass("glyphicon-chevron-up");
                    $("#" + iconId).addClass("glyphicon-refresh");
                    $("#" + iconId).addClass("icon-spin");
                    panel.wrapInParents($(event.target).closest("li").attr('data-concept-id'), $(event.target).closest("li"));
                } else if ($("#" + iconId).hasClass("glyphicon-minus")){
                    $("#" + iconId).removeClass("glyphicon-minus");
                    $("#" + iconId).addClass("glyphicon-chevron-right");
                }

            } else if ($(event.target).hasClass("treeLabel")) {
                var selectedId = $(event.target).attr('data-concept-id');
                if (typeof selectedId != "undefined") {
                    $.each(panel.subscribers, function(i, suscriberPanel) {
                        if (suscriberPanel.conceptId != selectedId) {
                            suscriberPanel.conceptId = selectedId;
                            suscriberPanel.updateCanvas();
                        }
                    });
                }
            }

        });

        var iconId = panel.divElement.id + "-treeicon-" + focusConcept.conceptId;
        $("#" + iconId).removeClass("glyphicon-chevron-right");
        $("#" + iconId).addClass("glyphicon-refresh");
        $("#" + iconId).addClass("icon-spin");
        //console.log("getChildren..." + focusConcept.conceptId);
        panel.getChildren(focusConcept.conceptId);
    }

    this.getChildren = function(conceptId) {
        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        if (panel.options.selectedView == "inferred") {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
        } else {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
        }

        $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/children?form=" + panel.options.selectedView, function(result) {
        }).done(function(result) {
            var nodeHtml = "<ul style='list-style-type: none; padding-left: 15px;'>";
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            })
            //console.log(JSON.stringify(result));
            var listIconIds = [];
            $.each(result, function(i, field) {
                if (field.active == true) {
                    nodeHtml = nodeHtml + "<li data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "' class='treeLabel'>";
                    nodeHtml = nodeHtml + "<button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-right treeButton' id='" + panel.divElement.id + "-treeicon-" + field.conceptId + "'></i></button>";
                    if (field.definitionStatus == "Primitive") {
                        nodeHtml = nodeHtml + '<span class="badge alert-warning">&nbsp;</span>&nbsp;&nbsp;';
                    } else {
                        nodeHtml = nodeHtml + '<span class="badge alert-warning">&equiv;</span>&nbsp;&nbsp;';
                    }
                    nodeHtml = nodeHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="jqui-draggable treeLabel selectable-row" data-concept-id="' + field.conceptId + '" data-term="' + field.defaultTerm + '" id="' + panel.divElement.id + '-treenode-' + field.conceptId + '">' + field.defaultTerm + '</span></a>';
                    listIconIds.push(field.conceptId);
                }
            });
            nodeHtml = nodeHtml + "</li>";
            nodeHtml = nodeHtml + "</ul>";
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            if (result.length > 0) {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
            }
            $("#" + panel.divElement.id + "-treenode-" + conceptId).after(nodeHtml);
            $(".treeButton").disableTextSelect();
            //console.log(JSON.stringify(listIconIds));
            $.each(listIconIds, function(i, nodeId) {
                $('#' + panel.divElement.id + "-treenode-" + nodeId).draggable({
                    appendTo: 'body',
                    helper: 'clone',
                    delay: 500,
                    revert: false
                });
            });
        }).fail(function() {
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
        });
    }

    this.wrapInParents = function(conceptId, liItem) {
        var topUl = $("#" + panel.divElement.id + "-panelBody").find('ul:first');
        $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/parents?form=" + panel.options.selectedView, function(parents) {
            // done
        }).done(function(parents) {
                if (parents.length > 0) {
                    var firstParent = "empty";
                    var parentsStrs = [];
                    $.each(parents, function(i, parent) {
                        var parentLiHtml = "<li data-concept-id='" + parent.conceptId + "' data-term='" + parent.defaultTerm + "' class='treeLabel'>";
                        parentLiHtml = parentLiHtml + "<button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-up treeButton'  id='" + panel.divElement.id + "-treeicon-" + parent.conceptId + "'></i></button>";
                        if (parent.definitionStatus == "Primitive") {
                            parentLiHtml = parentLiHtml + '<span class="badge alert-warning">&nbsp;</span>&nbsp;&nbsp;';
                        } else {
                            parentLiHtml = parentLiHtml + '<span class="badge alert-warning">&equiv;</span>&nbsp;&nbsp;';
                        }
                        parentLiHtml = parentLiHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span data-concept-id="' + parent.conceptId + '" data-term="' + parent.defaultTerm + '" class="jqui-draggable treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + parent.conceptId + '">' + parent.defaultTerm + '</span></a>';
                        parentLiHtml = parentLiHtml + "</li>";
                        parentsStrs.push(parentLiHtml);
                        if (firstParent == "empty") {
                            firstParent = parent.conceptId;
                        }
                    });

                    var staticChildren = topUl.children().slice(0);
                    topUl.append(parentsStrs[0]);
                    $('#' + panel.divElement.id + '-treenode-' + firstParent).closest('li').append("<ul id='parent-ul-id-" + firstParent + "' style='list-style-type: none; padding-left: 15px;'></ul>");
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
                            $('#' + panel.divElement.id + '-treenode-' +$(child).attr('data-concept-id')).closest('li').remove();
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
            }).fail(function() {
            });
    }

    this.setToConcept = function(conceptId, term, definitionStatus) {
        $("#" + panel.divElement.id + "-panelBody").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        console.log(panel.options.selectedView);
        $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/parents?form="+panel.options.selectedView, function(result) {
            // done
        }).done(function(result) {
            if (definitionStatus != "Primitive" && definitionStatus != "Fully defined") {
                definitionStatus = "Primitive";
            }
            panel.setupParents(result, {conceptId: conceptId, defaultTerm: term, definitionStatus: definitionStatus});
        }).fail(function() {
        });
    }

    this.handleDropEvent = function(event, ui) {
        var draggable = ui.draggable;

        //console.log(draggable.html() + " |  " + draggable.attr('data-concept-id') + ' was dropped onto me!');
        if (!draggable.attr('data-concept-id')) {
            //console.log("ignore");
        } else {
            var conceptId = draggable.attr('data-concept-id');
            var term = draggable.attr('data-term');
            var definitionStatus = draggable.attr('data-def-status');
            if (panel.options.selectedView == "undefined") {
                panel.options.selectedView = "inferred";
            }
            if (typeof conceptId != "undefined") {
                panel.setToConcept(conceptId, term, definitionStatus);
            }
            $(ui.helper).remove(); //destroy clone
        }


        if (!draggable.attr('data-panel')) {
            //console.log("ignore");
        } else {
            //console.log("OK : " + draggable.attr('data-panel'));
            $.each(componentsRegistry, function(i, field) {
                if (field.divElement.id == draggable.attr('data-panel')) {
                    if (field.type == "concept-details") {
                        panel.subscribe(field);
                    }
                }
            });
        }
    }

    this.subscribe = function(subscriber) {
        var alreadySubscribed = false;
        $.each(panel.subscribers, function(i, field) {
            if (subscriber.divElement.id == field.divElement.id) {
                alreadySubscribed = true;
            }
        });
        if (!alreadySubscribed) {
            if (panel.subscribers.length == 0) {
                if (typeof globalMarkerColor == "undefined") {
                    globalMarkerColor = 'black';
                }
                panel.markerColor = panel.getNextMarkerColor(globalMarkerColor);
                //console.log(panel.markerColor);
                $("#" + panel.divElement.id + "-subscribersMarker").css('color', panel.markerColor);
                $("#" + panel.divElement.id + "-subscribersMarker").show();
            }
            panel.subscribers.push(subscriber);
            subscriber.setSubscription(panel);
        }
    }

    this.unsubscribe = function(subscriber) {
        var indexToRemove = -1;
        var i = 0;
        $.each(panel.subscribers, function(i, field) {
            if (subscriber.divElement.id == field.divElement.id) {
                indexToRemove = i;
            }
            i = i + 1;
        });
        if (indexToRemove > -1) {
            panel.subscribers.splice(indexToRemove, 1);
        }
        if (panel.subscribers.length == 0) {
            $("#" + panel.divElement.id + "-subscribersMarker").hide();
        }
        subscriber.clearSubscription();
    }

    this.unsubscribeAll = function() {
        var subscribersClone = panel.subscribers.slice(0);
        $.each(subscribersClone, function (i, field) {
            panel.unsubscribe(field);
        });
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

    this.setupCanvas();
    if (!conceptId || conceptId == 138875005) {
        this.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive"});
    } else {
        if (xhr != null) {
            xhr.abort();
            console.log("aborting call...");
        }
        xhr = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId, function(result) {

        }).done(function(result) {
           panel.setToConcept(conceptId, result.defaultTerm);
        }).fail(function() {
            console.log("Error");
        });
    }
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

(function($) {
    $.fn.addTaxonomy = function(options) {
        this.filter("div").each(function() {
            var tx = new conceptDetails(this, options);
        });
    };
}(jQuery));
