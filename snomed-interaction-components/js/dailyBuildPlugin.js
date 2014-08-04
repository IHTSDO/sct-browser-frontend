/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function dailyBuildPanel(divElement, options) {
    var panel = this;
    this.subscribers = [];
    var xhr = null;
    var title = "";
    var executionTime = "";
    var reportTitle = "";
    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    this.markerColor = 'black';
    this.type = "diffReportViewer";
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
        var taxonomyHtml = "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='" + panel.divElement.id + "-mainPanel'>";
        taxonomyHtml = taxonomyHtml + "<div class='panel-heading' id='" + panel.divElement.id + "-panelHeading'>";
        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-bookmark'></i></button>"
        taxonomyHtml = taxonomyHtml + "<div class='row'>";
        taxonomyHtml = taxonomyHtml + "<div class='col-md-6' id='" + panel.divElement.id + "-panelTitle'>&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_daily_build'>Daily Build</span></strong></div>";
        taxonomyHtml = taxonomyHtml + "<div class='col-md-6 text-right'>";
        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-linkerButton' class='btn btn-link jqui-draggable linker-button' data-panel='" + panel.divElement.id + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>"
        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-configButton' class='btn btn-link' style='padding:2px' data-target='#" + panel.divElement.id + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>"
        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>"
        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>"
        taxonomyHtml = taxonomyHtml + "<button id='" + panel.divElement.id + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>"
        taxonomyHtml = taxonomyHtml + "</div>";
        taxonomyHtml = taxonomyHtml + "</div>";
        taxonomyHtml = taxonomyHtml + "</div>";
        taxonomyHtml = taxonomyHtml + "<div class='panel-body' style='height:100%' id='" + panel.divElement.id + "-panelBody'>";
        taxonomyHtml = taxonomyHtml + "</div>";
        taxonomyHtml = taxonomyHtml + "</div>";
        $(divElement).html(taxonomyHtml);
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
        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_options,
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

        panel.readReportsSummary();

    }

    this.readReportsSummary = function() {
        $('#' + panel.divElement.id + '-panelBody').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (xhr != null) {
            xhr.abort();
            console.log("aborting call...");
        }
        xhr = $.getJSON("http://107.170.53.78/diff_reports/diff_index.json", function( data ) {
            var reportsHtml =  '';
            panel.title = data.title;
            panel.executionTime = data.executionTime;
            reportsHtml = reportsHtml + '<div style="margin: 5px">';
            reportsHtml = reportsHtml + '  <h4>' +  panel.title + '</h4>';
            reportsHtml = reportsHtml + '  <br>';
            reportsHtml = reportsHtml + '  &nbsp;&nbsp;&nbsp;<em class="text-muted pull-right">(last run ' + panel.executionTime + ")</em><br>";
            reportsHtml = reportsHtml + '</div>';
            reportsHtml = reportsHtml + "<table id='" + panel.divElement.id + "-resultsTable' class='table table-bordered'>";
            reportsHtml = reportsHtml + "<tr><th style='padding: 3px;'>Report</th><th style='padding: 3px;'>Count</th></tr>";
            $.each( data.reports, function( i, report ) {
                reportsHtml =  reportsHtml + "<tr class='selectable-row' data-file='" + report.file + "' data-title='" + report.name + "'><td>" + report.name + "</td><td>" + report.count + "</td></tr>" ;
            });
            reportsHtml = reportsHtml + "</table>";
            $('#' + panel.divElement.id + '-panelBody').html(reportsHtml);

            $('#' + panel.divElement.id + '-panelBody').find('.selectable-row').click(function (event) {
                panel.reportTitle = $(event.target).closest('tr').attr('data-title');
                var link = $(event.target).closest('tr').attr('data-file');
                panel.loadReport("http://107.170.53.78/diff_reports/" + link);
            });

        });
    }

    this.loadReport = function(link) {
        $('#' + panel.divElement.id + '-panelBody').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (xhr != null) {
            xhr.abort();
            console.log("aborting call...");
        }
        xhr = $.getJSON( link, function( data ) {
            data.sort(function(a, b) {
                if (a.term.toLowerCase() < b.term.toLowerCase())
                    return -1;
                if (a.term.toLowerCase() > b.term.toLowerCase())
                    return 1;
                return 0;
            })
            var reportsHtml =  '';
            reportsHtml = reportsHtml + '  &nbsp;&nbsp;&nbsp;<a class="back-to-index" href="javascript:void(0);">Back to reports summary</a><br><br>';
            reportsHtml = reportsHtml + '<div style="margin: 5px">';
            reportsHtml = reportsHtml + '  <h4>' +  panel.title + '</h4>';
            reportsHtml = reportsHtml + '  <br>';
            reportsHtml = reportsHtml + '  <h4> ' + panel.reportTitle + "</h4>";
            reportsHtml = reportsHtml + '  <br>';
            reportsHtml = reportsHtml + '  &nbsp;&nbsp;&nbsp;<em class="text-muted pull-right">(last run ' + panel.executionTime + ")</em><br>";
            reportsHtml = reportsHtml + '</div>';
            reportsHtml = reportsHtml + "<table id='" + panel.divElement.id + "-resultsTable' class='table table-bordered'>";
            reportsHtml = reportsHtml + "<tr><th style='padding: 3px;'>Concept</th><th style='padding: 3px;'>SCTID</th></tr>";
            $.each( data, function( i, difference ) {
                reportsHtml =  reportsHtml + "<tr class='selectable-row' data-concept-id='" + difference.cId + "'><td>" + difference.term + "</td><td>" + difference.cId + "</td></tr>" ;
            });
            reportsHtml = reportsHtml + "</table>";
            $('#' + panel.divElement.id + '-panelBody').html(reportsHtml);

            $('#' + panel.divElement.id + '-panelBody').find('.back-to-index').click(function (event) {
                panel.readReportsSummary();
            });

            $('#' + panel.divElement.id + '-panelBody').find('.selectable-row').click(function (event) {
                channel.publish(panel.divElement.id, {
                    term: $(event.target).closest('tr').attr('data-term'),
                    conceptId: $(event.target).closest('tr').attr('data-concept-id'),
                    module: $(event.target).closest('tr').attr('data-module'),
                    source: panel.divElement.id
                });
//                $.each(panel.subscribers, function (i, field) {
//                    field.conceptId = $(event.target).closest('tr').attr('data-concept-id');
//                    field.updateCanvas();
//                });
            });

        });
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
    $.fn.adddailyBuildPanel = function(options) {
        this.filter("div").each(function() {
            var tx = new dailyBuildPanel(this, options);
        });
    };
}(jQuery));
