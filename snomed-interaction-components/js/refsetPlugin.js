/**
 * Created by termmed on 9/2/14.
 */
/**
 * Created by termmed on 9/1/14.
 */

function refsetPanel(divElement, options) {
    var panel = this;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    var favoriteCall = null;
    this.type = "favorites";
    panel.subscribers = [];
    var xhrMembers = null;
    var xhrRefset = null;

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

    this.setUpPanel = function() {
        var context = {
            divElementId: panel.divElement.id
        }
        $(divElement).html(JST["snomed-interaction-components/views/refsetPlugin/main.hbs"](context));
    }
    panel.setUpPanel();

    this.loadRefsets = function() {
        $("#" + panel.divElement.id + "-panelBody").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        var branch = options.edition;
        if(options.release.length > 0 && options.release !== 'None'){
            branch = branch + "/" + options.release;
        };
        if (xhrRefset != null) {
            xhrChildren.abort();
            xhrRefset = null;
        };
        xhrRefset = $.getJSON(options.serverUrl + "/browser/" + branch + "/members?active=true&limit=1", function(result) {
            var refsets = [];
            var refsetItem = null;
            Object.keys(result.memberCountsByReferenceSet).forEach(function(key) {
                refsetItem = {};
                refsetItem.module = result.referenceSets[key].moduleId;
                refsetItem.conceptId = key;
                refsetItem.defaultTerm = result.referenceSets[key].fsn.term;
                refsetItem.count = result.memberCountsByReferenceSet[key];
                refsetItem.type = result.referenceSets[key].referenceSetType.pt.term;
                refsetItem.definitionStatus = result.referenceSets[key].definitionStatus;

                refsets.push(refsetItem);
            });

            refsets.sort(function(a, b) {
                if (a.type < b.type)
                    return -1;
                if (a.type > b.type)
                    return 1;
                if (a.defaultTerm < b.defaultTerm)
                    return -1;
                if (a.defaultTerm > b.defaultTerm)
                    return 1;
                return 0;
            });

            var context = {
                divElementId: panel.divElement.id,
                refsets: refsets
            }
            $("#" + panel.divElement.id + "-panelBody").html(JST["snomed-interaction-components/views/refsetPlugin/body.hbs"](context));
            $('#' + panel.divElement.id + '-panelBody').find(".refset-item").click(function(event) {
                panel.loadMembers($(event.target).attr('data-concept-id'), $(event.target).attr('data-term'), 100, 0);
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: $(event.target).attr('data-concept-id'),
                    source: panel.divElement.id,
                    showConcept: true
                });
            });
        }).done(function(result) {
            
        }).fail(function() {
            $("#" + panel.divElement.id + "-panelBody").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });
        /*if (panel.options.manifest) {
            panel.options.manifest.refsets.sort(function(a, b) {
                if (a.type == "daily-build" && a.type != b.type)
                    return -1;
                if (a.type < b.type)
                    return -1;
                if (a.type > b.type)
                    return 1;
                if (a.defaultTerm < b.defaultTerm)
                    return -1;
                if (a.defaultTerm > b.defaultTerm)
                    return 1;
                return 0;
            });
            var context = {
                divElementId: panel.divElement.id,
                refsets: panel.options.manifest.refsets
            }
            $("#" + panel.divElement.id + "-panelBody").html(JST["snomed-interaction-components/views/refsetPlugin/body.hbs"](context));
            $('#' + panel.divElement.id + '-panelBody').find(".refset-item").click(function(event) {
                panel.loadMembers($(event.target).attr('data-concept-id'), $(event.target).attr('data-term'), 100, 0);
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: $(event.target).attr('data-concept-id'),
                    source: panel.divElement.id
                });
            });
        } else {
            $("#" + panel.divElement.id + "-panelBody").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        }*/
    }
    panel.loadRefsets();

    this.loadMembers = function(conceptId, term, returnLimit, skipTo, paginate) {
        var branch = options.edition;
        if(options.release.length > 0 && options.release !== 'None'){
            branch = branch + "/" + options.release;
        };
        var membersUrl = options.serverUrl + "/" + branch + "/members?referenceSet=" + conceptId + "&limit=100&active=true";
        if (skipTo > 0) {
            membersUrl = membersUrl + "&offset=" + skipTo;
        } else {
            $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><i class='glyphicon glyphicon-refresh icon-spin'></i></td></tr>");
        }
        var total;
        if (panel.options.manifest) {
            $.each(panel.options.manifest.refsets, function(i, field) {
                if (field.conceptId == panel.conceptId) {
                    if (field.count) {
                        total = field.count;
                    }
                }
            });
        }
        if (typeof total != "undefined") {
            //if (total < 25000){
            paginate = 1;
            membersUrl = membersUrl + "&paginate=1";
            //}

        }
        //        console.log(membersUrl);
        if (xhrMembers != null) {
            xhrMembers.abort();
            //console.log("aborting call...");
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
                    //                        if (result.details.total < returnLimit && skipTo != 0){
                    remaining = 0;
                    //                        }else{
                    //                            remaining = result.details.total;
                    //                        }
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
            if (result.items && result.items.length > 0) {
                result.items.forEach(function(item){
                    if(!item.hasOwnProperty('referencedComponent')){
                        isReferenceComponentsOfRefsetNotConcepts = true;
                        return;
                    }
                });
            }
            
            var context = {};
            if (isReferenceComponentsOfRefsetNotConcepts) {
                context = {
                    result: {'items':[]},                  
                    divElementId: panel.divElement.id,                   
                    term: term,
                    conceptId: conceptId,
                    total: total,
                    skipTo: 0,                 
                    referenceComponentsOfRefsetAreNotConcepts: true
                }; 
            }
            else {
                context = {
                    result: result,
                    returnLimit: returnLimit2,
                    remaining: remaining,
                    divElementId: panel.divElement.id,
                    skipTo: skipTo,
                    term: term,
                    conceptId: conceptId,
                    total: total,
                    referenceComponentsOfRefsetAreNotConcepts: false
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
                $("#" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                if (skipTo == 0) {
                    $('#' + panel.divElement.id + "-resultsTable").html(JST["snomed-interaction-components/views/refsetPlugin/members.hbs"](context));
                } else {
                    $('#' + panel.divElement.id + "-resultsTable").append(JST["snomed-interaction-components/views/refsetPlugin/members.hbs"](context));
                }
                $("#" + panel.divElement.id + "-moreMembers").click(function() {
                    $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                    skipTo = skipTo + returnLimit;
                    panel.loadMembers(conceptId, term, returnLimit2, skipTo, paginate);
                });
                $("#" + panel.divElement.id + "-sort").unbind();
                $("#" + panel.divElement.id + "-sort").click(function() {
                    $("#" + panel.divElement.id + "-sort").blur();
                    panel.loadMembers(conceptId, term, returnLimit2, 0, 1);
                });
            } else {
                if (skipTo != 0) {
                    $("#" + panel.divElement.id + "-moreMembers").remove();
                    $("#" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                    if (skipTo == 0) {
                        $('#' + panel.divElement.id + "-resultsTable").html(JST["snomed-interaction-components/views/refsetPlugin/members.hbs"](context));
                    } else {
                        $('#' + panel.divElement.id + "-resultsTable").append(JST["snomed-interaction-components/views/refsetPlugin/members.hbs"](context));
                    }
                    $("#" + panel.divElement.id + "-moreMembers").click(function() {
                        $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                        skipTo = skipTo + returnLimit;
                        panel.loadMembers(conceptId, term, returnLimit2, skipTo, paginate);
                    });
                    $("#" + panel.divElement.id + "-sort").unbind();
                    $("#" + panel.divElement.id + "-sort").click(function() {
                        $("#" + panel.divElement.id + "-sort").blur();
                        panel.loadMembers(conceptId, term, returnLimit2, 0, 1);
                    });
                } else {
                    $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
                }
            }
            $('#' + panel.divElement.id + '-resultsTable').find(".member-concept-row").click(function(event) {
                var clickedBadge = $(event.target).closest(".member-concept-row").find(".badge");
                channel.publish(panel.divElement.id, {
                    term: clickedBadge.attr('data-term'),
                    module: clickedBadge.attr("data-module"),
                    conceptId: clickedBadge.attr('data-concept-id'),
                    source: panel.divElement.id,
                    showConcept: true
                });
            });
        }).fail(function(err) {
            if (xhrMembers.status === 0) {
                if (xhrMembers.statusText === 'abort') {} else {
                    $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
                }
            } else {
                $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
            }
        });
    }

}