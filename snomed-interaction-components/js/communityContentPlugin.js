/**
 * Created by termmed on 1/22/15.
 */
function communityContentPanel(divElement, options) {
    var panel = this;
    this.subscribers = [];
    this.subscriptions = [];
    var xhr = null;
    
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

    this.setupCanvas = function() {
        var commnunityContentHtml = "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='" + panel.divElement.id + "-mainPanel'>";
        commnunityContentHtml = commnunityContentHtml + "<div class='panel-heading' id='" + panel.divElement.id + "-panelHeading'>";
        commnunityContentHtml = commnunityContentHtml + "<button id='" + panel.divElement.id + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-bookmark'></i></button>"
        commnunityContentHtml = commnunityContentHtml + "<div class='row'>";
        commnunityContentHtml = commnunityContentHtml + "<div class='col-md-6' id='" + panel.divElement.id + "-panelTitle'>&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_project_content'>Project Content</span></strong></div>";
        commnunityContentHtml = commnunityContentHtml + "</div>";
        commnunityContentHtml = commnunityContentHtml + "</div>";
        commnunityContentHtml = commnunityContentHtml + "<div class='panel-body' style='height:100%' id='" + panel.divElement.id + "-panelBody'>";
        commnunityContentHtml = commnunityContentHtml + "</div>";
        commnunityContentHtml = commnunityContentHtml + "</div>";
        $(divElement).html(commnunityContentHtml);

        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();       
        $("#" + panel.divElement.id + "-subscribersMarker").hide();
        if (typeof panel.options.subscribersMarker != "undefined" && panel.options.subscribersMarker == false) {
            $("#" + panel.divElement.id + "-subscribersMarker").remove();
        }

        panel.readCommnuntyContentReportsSummary();

    }

    this.readCommnuntyContentReportsSummary = function() {
        $('#' + panel.divElement.id + '-panelBody').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (xhr != null) {
            xhr.abort();
            console.log("aborting call...");
        }

        xhr = $.getJSON(options.serverUrl + '/' + options.edition + "/authoring-stats", function( data ) {
            var reportsHtml =  '';        
            reportsHtml = reportsHtml + "<table id='" + panel.divElement.id + "-resultsTable' class='table table-bordered'>";
            reportsHtml = reportsHtml + "<tr><th style='padding: 3px;'>Report</th><th style='padding: 3px;'>Count</th></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='new-concepts' data-title='New Concepts'><td>New Concepts</td><td>" + data.newConceptsCount + "</td></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='inactivated-concepts' data-title='Inactivated Concepts'><td>Inactivated Concepts</td><td>" + data.inactivatedConceptsCount + "</td></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='reactivated-concepts' data-title='Reactivated Concepts'><td>Reactivated Concepts</td><td>" + data.reactivatedConceptsCount + "</td></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='changed-fully-specified-names' data-title='Changed FSNs'><td>Changed FSNs</td><td>" + data.changedFsnCount + "</td></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='inactivated-synonyms' data-title='Inactivated descriptions(synonym only)'><td>Inactivated descriptions(synonym only)</td><td>" + data.inactivatedSynonymsCount + "</td></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='new-synonyms-on-existing-concepts' data-title='New descriptions (synonyms only) for existing concepts'><td>New descriptions (synonyms only) for existing concepts</td><td>" + data.newSynonymsForExistingConceptsCount + "</td></tr>";
            reportsHtml = reportsHtml + "<tr class='selectable-row' data-file='reactivated-synonyms' data-title='Reactivated descriptions(synonyms only)'><td>Reactivated descriptions(synonyms only)</td><td>" + data.reactivatedSynonymsCount + "</td></tr>";
            reportsHtml = reportsHtml + "</table>";
            $('#' + panel.divElement.id + '-panelBody').html(reportsHtml);

            $('#' + panel.divElement.id + '-panelBody').find('.selectable-row').click(function (event) {
                panel.reportTitle = $(event.target).closest('tr').attr('data-title');
                var link = $(event.target).closest('tr').attr('data-file');
                panel.loadReport(link);
            });

        }).fail(function () {
            $('#' + panel.divElement.id + '-panelBody').html("<br><br><p class='text-center'>" +
                "No daily build update details.</p>");
        });
    }

    this.loadReport = function(link) {
        $('#' + panel.divElement.id + '-panelBody').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (xhr != null) {
            xhr.abort();
            console.log("aborting call...");
        }
        xhr = $.getJSON(options.serverUrl + '/' + options.edition + "/authoring-stats/" + link, function( data ) {
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
            reportsHtml = reportsHtml + '  <h4> ' + panel.reportTitle + "</h4>";
            reportsHtml = reportsHtml + '</div>';
            reportsHtml = reportsHtml + "<table id='" + panel.divElement.id + "-resultsTable' class='table table-bordered'>";
            reportsHtml = reportsHtml + "<tr><th style='padding: 3px;'>Concept</th><th style='padding: 3px;'>SCTID</th></tr>";
            $.each( data, function( i, difference ) {
                reportsHtml =  reportsHtml + "<tr class='selectable-row' data-concept-id='" + difference.id + "'><td>" + difference.term + "</td><td>" + difference.id + "</td></tr>" ;
            });
            reportsHtml = reportsHtml + "</table>";
            $('#' + panel.divElement.id + '-panelBody').html(reportsHtml);

            $('#' + panel.divElement.id + '-panelBody').find('.back-to-index').click(function (event) {
                panel.readCommnuntyContentReportsSummary();
            });

            $('#' + panel.divElement.id + '-panelBody').find('.selectable-row').click(function (event) {
                channel.publish(panel.divElement.id, {
                    term: $(event.target).closest('tr').attr('data-term'),
                    conceptId: $(event.target).closest('tr').attr('data-concept-id'),
                    module: $(event.target).closest('tr').attr('data-module'),
                    source: panel.divElement.id
                });
            });
        });
    }


    this.getNextMarkerColor = function(color) {
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

        globalMarkerColor = returnColor;
        return returnColor;
    }

    this.setupCanvas();
}

(function($) {
    $.fn.adddcommnunityContentPanel = function(options) {
        this.filter("div").each(function() {
            var tx = new communityContentPanel(this, options);
        });
    };
}(jQuery));
