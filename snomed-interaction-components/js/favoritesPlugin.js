/**
 * Created by termmed on 9/1/14.
 */

function favoritePanel(divElement, options) {
    var panel = this;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    var favoriteCall = null;
    this.type = "favorites";
    panel.subscribers = [];


//    if (!componentsRegistry){
//        componentsRegistry = [];
//        componentsRegistry.push(panel);
//    }else{
//        componentLoaded = false;
//        $.each(componentsRegistry, function(i, field) {
//            if (field.divElement.id == panel.divElement.id) {
//                componentLoaded = true;
//            }
//        });
//        if (componentLoaded == false) {
//            componentsRegistry.push(panel);
//        }
//    }



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

    this.setUpFavs = function (){
        var context = {
            divElementId: panel.divElement.id
        }
        $(divElement).html(JST["snomed-interaction-components/views/favorites/main.hbs"](context));
    }

    panel.setUpFavs();

    this.loadFavs = function (){
        $("#" + panel.divElement.id + "-panelBody").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        var favs = stringToArray(localStorage.getItem("favs")), concepts = [];

        function loadFavsTemplate(concepts){
            var context = {
                concepts: concepts
            }
            $("#" + panel.divElement.id + "-panelBody").html(JST["snomed-interaction-components/views/favorites/body.hbs"](context));
            $('#' + panel.divElement.id + '-panelBody').find(".glyphicon-remove-circle").click(function (e) {
                var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                $.each(favs, function(i,field){
                    if (field != $(e.target).attr("data-concept-id")){
                        auxFavs.push(field);
                    }
                });
                localStorage.setItem("favs", auxFavs);
                localStorage.removeItem("conceptId:" + $(e.target).attr("data-concept-id"));
                panel.loadFavs();
            });
            $("#exportFavsXls").click(function(){
                return ExcellentExport.excel(this, 'tableFavs');
            });
            $('#' + panel.divElement.id + '-panelBody').find(".fav-item").click(function (event) {
                if (typeof options.setDefaultConceptId !== 'undefined') {
                    options.setDefaultConceptId($(event.target).attr('data-concept-id'));
                }
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: $(event.target).attr('data-concept-id'),
                    source: panel.divElement.id,
                    showConcept: true
                });
            });
        }

        var length = favs.length - 1;
        $.each(favs, function(i, field){
            var concept = localStorage.getItem("conceptId:" + field);
            concept = JSON.parse(concept);
            concepts.push(concept);
        });
        loadFavsTemplate(concepts);
    }

    channel.subscribe("favsAction", function() {
        panel.loadFavs();
    });
    $("#" + panel.divElement.id + "-li").click(function(){
        panel.loadFavs();
    });
}