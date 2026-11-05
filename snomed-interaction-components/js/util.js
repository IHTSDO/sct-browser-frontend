/**
 * Created by alo on 7/18/14.
 */
icon = document.createElement("img");
channel = postal.channel("Selections");

Handlebars.registerHelper('i18n', function (i18n, defaultV){
    if (typeof window[i18n] == "undefined"){
        //console.log(i18n, "=", defaultV);
        return defaultV;
    }else{
        return window[i18n];
    }
});

Handlebars.registerHelper('if_undefined', function (a, opts) {
    if (opts != "undefined") {
        if (typeof a == "undefined")
            return opts.fn(this);
        else
            return opts.inverse(this);
    }
});

Handlebars.registerHelper("if_eqInd", function(a, b, opts){
    if ((parseInt(a) + 1) == parseInt(b))
        return opts.fn(this);
    else
        return opts.inverse(this);
});

Handlebars.registerHelper("console", function(a){
    console.log(a);
});

$(document).on('dragend', function(){
    removeHighlight();
});

function setDefaultTerm(concept) {
	if (concept) {
		if (concept.fsn) {
			if (typeof concept.fsn == "object") {
				concept.defaultTerm = concept.fsn.term;
			} else {
				concept.defaultTerm = concept.fsn;
			}
		}
		if (concept.relationships) {
			concept.statedRelationships = [];
			concept.relationships.forEach(function(r) {
				r.type.defaultTerm = r.type.fsn.term;
				r.target.defaultTerm = r.target.fsn.term;
				if (r.characteristicType == "STATED_RELATIONSHIP") {
					concept.statedRelationships.push(r);
				}
			})
			// Remove statedRelationships from relationships array
			concept.statedRelationships.forEach(function(r) {
				concept.relationships.splice(concept.relationships.indexOf(r), 1);
			})
		}
		if (concept.definitionStatus == "PRIMITIVE") {
			concept.definitionStatus = "PRIMITIVE";
		}
	}
}

// Snowstorm returns pt: {} / fsn: {} when no description matches the requested dialects.
function conceptDisplayTerm(concept, preferPreferredTerm) {
    if (!concept) {
        return "";
    }
    var preferred = concept.pt && concept.pt.term;
    var fsn = concept.fsn && concept.fsn.term;
    var term = preferPreferredTerm ? (preferred || fsn) : (fsn || preferred);
    return term || concept.conceptId || concept.id || "";
}

function compareDefaultTerms(a, b) {
    return String((a && a.defaultTerm) || "").toLowerCase().localeCompare(String((b && b.defaultTerm) || "").toLowerCase());
}

function getUsFsn(concept) {
    for (var i = 0; i < concept.descriptions.length; i++) {
        var desc = concept.descriptions[i];
        if (desc.active && desc.type === "FSN" && desc.acceptabilityMap["900000000000509007"] === "PREFERRED") {
            return desc.term;
        }
    }
    return null;
}

function removeHighlight(){
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
}

function allowDrop(ev) {
    ev.preventDefault();

    var aux;
    if ($(ev.target).attr("data-droppable") == "true"){
        aux = $(ev.target);
    }else{
        aux = $(ev.target).closest("div");
    }
//    while (typeof $(aux).closest('div').attr('ondrop') != "undefined"){
//        aux = $(aux).closest('div');
//    }
    $(aux).addClass("drop-highlighted");
}

function dropField(ev){
    var text = ev.dataTransfer.getData("Text");
    text = removeSpaces(text);
    if (text != "javascript:void(0);"){
        var i = 0;
        while (text.charAt(i) != "|" && i < text.length){
            i++;
        }
        var conceptId = ev.dataTransfer.getData("concept-id");
        if (typeof conceptId == "undefined" && i < text.length){
            conceptId = text.substr(0, i);
        }
        var term = ev.dataTransfer.getData("term");
        if (typeof term == "undefined"){
            term = text.substr(i);
        }
        $(ev.target).val(term);
        $(ev.target).attr("data-conceptId", conceptId);
    }
}

function iconToDrag(text){
    var CVS = document.createElement('canvas'),
        ctx = CVS.getContext('2d');
    CVS.width  = 300;
    CVS.height = 300;
    ctx.font = "15px sans-serif";
    ctx.strokeText(text, 10, 20);
    var icon = document.createElement("img");
    icon.src = CVS.toDataURL();
    return icon;
}

function drag(ev, id) {
    var dataText = "";
    var term = "", conceptId = "";
    var branch = "";
    $.each(ev.target.attributes, function (){
        if (this.name.substr(0, 4) == "data"){
            ev.dataTransfer.setData(this.name.substr(5), this.value);
            if (this.name.substr(5) == "concept-id"){
                conceptId = this.value;
            }
            if (this.name.substr(5) == "term"){
                term = this.value;
            }
            if (this.name.substr(5) == "branch"){
                branch = this.value;
            }
        }
    });
    icon = iconToDrag(term);
    if (navigator.userAgent.indexOf("Chrome") > -1){
        icon = iconToDrag(term);
        ev.dataTransfer.setDragImage(icon, 0, 0);
    }else{
//            icon = iconToDrag(term);
    }
    ev.dataTransfer.setDragImage(icon, 0, 0);
    dataText = conceptId + " |" + term + "|";
    ev.dataTransfer.setData("Text", dataText);
    ev.dataTransfer.setData("divElementId", id);
    ev.dataTransfer.setData("branch", branch);
}

function dropE(ev){
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
    var text = ev.dataTransfer.getData("Text");
    if (text != "javascript:void(0);") {
        setTimeout(function(){
            insertCursorAtEndTarget(ev.target, text);
        }, 0);
    }
}

function insertCursorAtEndTarget(target) {
	var txtarea = target;
	var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var endPos = 0;
	var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?  "ff" : (document.selection ? "ie" : false ) );
	if (br == "ie") {
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart ('character', -txtarea.value.length);
        strPos = range.text.length;
        endPos = strPos;
	}
	else if (br == "ff") {
        strPos = txtarea.selectionStart;
        endPos = txtarea.selectionEnd;
    }

	if (br == "ie") {
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart ('character', -txtarea.value.length);
		range.moveStart ('character', strPos);
		range.moveEnd ('character', 0);
		range.select();
	}
	else if (br == "ff") {
		txtarea.selectionStart = endPos;
		txtarea.selectionEnd = endPos;
		txtarea.focus();
	}
	txtarea.scrollTop = scrollPos;
}

function dropS(ev){
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
    ev.preventDefault();
    var text = ev.dataTransfer.getData("Text");
    text = removeSpaces(text);
    if (text != "javascript:void(0);"){
        var i = 0;
        while (text.charAt(i) != "|" && i < text.length){
            i++;
        }
        var conceptId = ev.dataTransfer.getData("concept-id");
        if (typeof conceptId == "undefined" && i < text.length){
            conceptId = text.substr(0, i);
        }
        var term = ev.dataTransfer.getData("term");
        if (typeof term == "undefined"){
            term = text.substr(i);
        }
        $(ev.target).val(term);
        var id = $(ev.target).attr("id").replace("-searchBox", "");
        $.each(componentsRegistry, function(i, field) {
            if (field.divElement.id == id) {
                field.search(term, 0, 100, false);
            }
        });
    }
}

function dropC(ev, id, historyBranch) {
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
    ev.preventDefault();
    var text = ev.dataTransfer.getData("Text");
    text = removeSpaces(text);
    if (text != "javascript:void(0);"){
        var i = 0;
        while (text.charAt(i) != "|" && i < text.length){
            i++;
        }
        var conceptId = ev.dataTransfer.getData("concept-id");
        if (typeof conceptId == "undefined" && i < text.length){
            conceptId = text.substr(0, i);
        }
        var term = ev.dataTransfer.getData("term");
        if (typeof term == "undefined"){
            term = text.substr(i);
        }
        var divElementID = id;
        var panelAct;
        $.each(componentsRegistry, function (i, field){
            if (field.divElement.id == divElementID){
                panelAct = field;
            }
        });
        if (conceptId && panelAct.conceptId != conceptId) {
            panelAct.conceptId = conceptId;
            panelAct.updateCanvas(historyBranch);
            channel.publish(panelAct.divElement.id, {
                term: term,
                conceptId: panelAct.conceptId,
                source: panelAct.divElement.id
            });
        }
    }

}

function dropF(ev, id) {
    var text = ev.dataTransfer.getData("Text");
    text = removeSpaces(text);
    if (text != "javascript:void(0);"){
        var i = 0;
        while (text.charAt(i) != "|" && i < text.length){
            i++;
        }
        var conceptId = ev.dataTransfer.getData("concept-id");
        if (typeof conceptId == "undefined" && i < text.length){
            conceptId = text.substr(0, i);
        }
        var term = ev.dataTransfer.getData("term");
        var module = ev.dataTransfer.getData("module");
        if (typeof term == "undefined"){
            term = text.substr(i);
        }
        var favs = stringToArray(localStorage.getItem("favs")), found = false;
        $.each(favs, function(i,field){
            if (field == conceptId){
                found = true;
            }
        });
        var concept = {
            defaultTerm: term,
            conceptId: conceptId,
            module: module
        };
        if (!found){
//            console.log(concept);
            favs.push(conceptId);
            localStorage.setItem("favs", favs);
            localStorage.setItem("conceptId:" + conceptId, JSON.stringify(concept));
        }
        channel.publish("favsAction");
    }
}

function dropT(ev, id) {
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
    ev.preventDefault();
    var text = ev.dataTransfer.getData("Text");
    text = removeSpaces(text);
    if (text != "javascript:void(0);") {
        var i = 0;
        while (text.charAt(i) != "|" && i < text.length){
            i++;
        }
        var divElementId = id;
        var panel;
        var conceptId = ev.dataTransfer.getData("concept-id");
        if (typeof conceptId == "undefined" && i < text.length){
            conceptId = text.substr(0, i);
        }
        var term = ev.dataTransfer.getData("term");
        if (typeof term == "undefined"){
            term = text.substr(i);
        }
        var definitionStatus = ev.dataTransfer.getData("data-def-status");
        var module = ev.dataTransfer.getData("module");

        $.each(componentsRegistry, function (i, field){
            if (field.divElement.id == divElementId){
                panel = field;
            }
        });

        if (conceptId) {
            if (panel.options.selectedView == "undefined") {
                panel.options.selectedView = "inferred";
            }
            if (typeof conceptId != "undefined") {
                var d = new Date();
                var time = d.getTime();
                panel.default.conceptId = conceptId;
                panel.history.push({term: term, conceptId: conceptId, time: time});
                panel.setToConcept(conceptId);
                channel.publish(panel.divElement.id, {
                    term: term,
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            }
        }
    }
}

function removeSpaces(text) {
    if (text.length !== 0) {
        text = text.replace(/ /g,'');
        if (text.endsWith('|')) {
            text = text.substring(0, text.length -1);
        }
    }

    return text;
}

function stringToArray (string){
    if (typeof string == "string"){
        var ind = 0, auxString, array = [];
        while (ind < string.length){
            auxString = "";
            while (string.substr(ind, 1) != "," && ind < string.length){
                auxString = auxString + string.substr(ind,1);
                ind++;
            }
            array.push(auxString);
            ind++;
        }
        return(array);
    }else{
        return false;
    }
}
var lastEventTime = (new Date()).getTime();
function alertEvent(message, type) {
    var t = (new Date()).getTime();
    if (t-lastEventTime < 10 && message.toLowerCase().includes("copied")) {
        // Ignore notification
    } else {
        $.notify(message,type);
    }
    lastEventTime = t;
}

function registerContextMenu(options) {
    var items = options.hideConceptShareLink ? {
        "copyConceptId": {name: "Copy Concept ID"},
        "copyFsn": {name: "Copy FSN"},
        "copyFsnAndConceptId": {name: "Copy FSN and Concept ID"},
        "copyPreferredTermAndConceptId": {name: "Copy PT and Concept ID"}
    } : {
        "copyConceptId": {name: "Copy Concept ID"},
        "copyFsn": {name: "Copy FSN"},
        "copyFsnAndConceptId": {name: "Copy FSN and Concept ID"},
        "copyPreferredTermAndConceptId": {name: "Copy PT and Concept ID"},
        "copyLinkToShare": {name: "Copy link to share"}
    };

    $.contextMenu({
        selector: '.context-menu',
        callback: function(key, opt) {
            var conceptId = $($(opt.$trigger)[0]).attr('data-concept-id');
            var fsn = $($(opt.$trigger)[0]).attr('data-fsn');
            var prefferedTerm = $($(opt.$trigger)[0]).attr('data-preferred-term');

            var text = '';
            if (key === 'copyConceptId') {
                text = conceptId;
            } else if (key === 'copyFsn') {
                text = fsn;
            } else if (key === 'copyFsnAndConceptId') {
                text = conceptId + ' |' + fsn + '|';
            } else if (key === 'copyPreferredTermAndConceptId') {
                text = conceptId + ' |' + prefferedTerm + '|';
            } else if (key === 'copyLinkToShare') {
                text = document.URL.split("?")[0].split("#")[0] + "?perspective=full&conceptId1=" + conceptId + "&edition=" + (options.publicBrowser ? options.edition.substring(0, options.edition.lastIndexOf('/')) : options.edition) + "&release=" + options.release + "&languages=" + options.languages + (typeof options.latestRedirect !== 'undefined' && !options.publicBrowser ? '&latestRedirect=' + options.latestRedirect : '');
            }

            var textArea = document.createElement("textarea");
            textArea.value = text;

            // Avoid scrolling to bottom
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                alertEvent("Copied!", "info");
            } catch (err) {
                alertEvent("Error", "error");
            }

            document.body.removeChild(textArea);
        },
        items: items
    });
}

// Snowstorm defaults member searches to 50 rows and caps each page at 10000.
// Keep requesting the next page until every member has been collected.
function fetchAllReferenceSetMembers(baseUrl) {
    var deferred = $.Deferred();
    var collected = [];
    var separator = baseUrl.indexOf('?') === -1 ? '?' : '&';
    var pageSize = 10000;
    var currentRequest = null;
    var aborted = false;
    var promise = deferred.promise();

    promise.abort = function() {
        aborted = true;
        if (currentRequest && currentRequest.abort) {
            currentRequest.abort();
        }
    };

    var fetchPage = function(offset) {
        if (aborted) {
            deferred.reject(currentRequest, 'abort');
            return;
        }
        currentRequest = $.getJSON(baseUrl + separator + 'limit=' + pageSize + '&offset=' + offset);
        currentRequest.done(function(result) {
            if (aborted) {
                deferred.reject(currentRequest, 'abort');
                return;
            }
            if (result.items && result.items.length) {
                collected = collected.concat(result.items);
            }
            var total = typeof result.total === 'number' ? result.total : collected.length;
            if (collected.length < total && result.items && result.items.length) {
                fetchPage(collected.length);
                return;
            }
            result.items = collected;
            result.total = total;
            deferred.resolve(result);
        }).fail(function(xhr, textStatus, errorThrown) {
            deferred.reject(xhr, aborted ? 'abort' : textStatus, errorThrown);
        });
    };

    fetchPage(0);
    return promise;
}

// US English, GB English, the edition's main language refset, then the rest by name.
function sortLanguageRefsets(languageRefsets, defaultLanguageReferenceSets) {
    var mainExtensionRefset = (defaultLanguageReferenceSets || []).find(function(id) {
        return id !== "900000000000509007" && id !== "900000000000508004";
    });
    function rank(refset) {
        var id = refset.conceptId || refset.id;
        if (id === "900000000000509007") {
            return 0;
        }
        if (id === "900000000000508004") {
            return 1;
        }
        if (mainExtensionRefset && id === mainExtensionRefset) {
            return 2;
        }
        return 3;
    }
    function name(refset) {
        return (refset.fsn && refset.fsn.term) || (refset.pt && refset.pt.term) || "";
    }
    return languageRefsets.sort(function(a, b) {
        return rank(a) - rank(b) || name(a).localeCompare(name(b));
    });
}

var languageRefsetLanguageCodes = {};

// The language of a language refset is the language of the descriptions it holds, as the Search
// "Language Refsets" filter shows. One active member is enough because Snowstorm returns its description.
function loadLanguageRefsetLanguageCode(serverUrl, branch, refsetId) {
    var deferred = $.Deferred();
    var key = branch + "|" + refsetId;
    if (!refsetId || languageRefsetLanguageCodes[key] !== undefined) {
        return deferred.resolve(languageRefsetLanguageCodes[key]).promise();
    }
    $.ajax({
        url: serverUrl + "/" + branch + "/members?referenceSet=" + refsetId + "&active=true&limit=1",
        dataType: 'json'
    }).done(function(result) {
        var member = result && result.items && result.items[0];
        languageRefsetLanguageCodes[key] = (member && member.referencedComponent && member.referencedComponent.lang) || "";
    }).fail(function() {
        languageRefsetLanguageCodes[key] = "";
    }).always(function() {
        deferred.resolve(languageRefsetLanguageCodes[key]);
    });
    return deferred.promise();
}

// Snowstorm takes each PT from the first Accept-Language entry that has one, and only when the description
// language matches the entry's language code. The default header goes last so terms missing from the
// chosen refset still come from the default.
function languageRefsetAcceptLanguage(refsetId, languageCode, defaultAcceptLanguage) {
    if (!refsetId) {
        return defaultAcceptLanguage;
    }
    if (!/^[a-z]{2}$/i.test(languageCode || "")) {
        languageCode = String(defaultAcceptLanguage || "").substring(0, 2);
    }
    if (!/^[a-z]{2}$/i.test(languageCode)) {
        languageCode = "en";
    }
    var acceptLanguage = languageCode.toLowerCase() + "-x-" + refsetId;
    return defaultAcceptLanguage ? acceptLanguage + "," + defaultAcceptLanguage : acceptLanguage;
}

// Code systems are already loaded on the index as options.releases. Each one may set
// alternateSchemaSctid and alternateSchemaUri, for example "30051010000102" and "http://loinc.org".
function loadAlternateIdentifierSchemeUrlMap(codeSystems) {
    var urlMap = {};
    var items = (codeSystems && codeSystems.items) || [];
    for (var i = 0; i < items.length; i++) {
        var codeSystem = items[i] || {};
        if (codeSystem.alternateSchemaSctid && codeSystem.alternateSchemaUri) {
            urlMap[codeSystem.alternateSchemaSctid] = codeSystem.alternateSchemaUri;
        }
    }
    return urlMap;
}

function alternativeIdentifierHref(identifier, metadata) {
    if (!identifier || !identifier.alternateIdentifier || !metadata || typeof metadata.hash !== "undefined") {
        return "";
    }
    var scheme = identifier.identifierScheme || {};
    var schemeId = identifier.identifierSchemeId || scheme.conceptId;
    var base = schemeId ? metadata[schemeId] : "";
    if (!base || String(base).indexOf("http") !== 0) {
        return "";
    }
    return String(base).replace(/\/+$/, "") + "/" + identifier.alternateIdentifier;
}

// No metadata entry: the original label. Otherwise the label plus a white arrow that opens base/id in a new tab.
Handlebars.registerHelper("alternativeIdentifier", function(identifier, metadata, options) {
    var home = options.hash.home;
    var margin = options.hash.margin ? "margin-right:" + options.hash.margin + ";" : "";
    var label = Handlebars.escapeExpression(identifier.identifierScheme.pt.term + ": " + identifier.alternateIdentifier);
    var href = alternativeIdentifierHref(identifier, metadata);
    if (!href) {
        if (home) {
            return new Handlebars.SafeString('<div class="row" style="background-color:#fff;color:rgb(66,139,202);padding:2.5px 4px 2px;border:1px solid darkgrey;border-radius:4px;width:fit-content;margin-left:0;' + margin + '">' + label + '</div>');
        }
        return new Handlebars.SafeString('<div style="background-color:rgb(66,139,202);color:#fff;padding:2px 4px;border:1px solid darkgrey;border-radius:4px;width:fit-content;display:inline;margin-left:10px;">' + label + '</div>');
    }
    var labelStyle = home ? "background:#fff;color:rgb(66,139,202);" : "background:rgb(66,139,202);color:#fff;";
    var linkStyle = home
        ? "display:flex;width:fit-content;text-decoration:none;margin-left:0;" + margin
        : "display:inline-flex;text-decoration:none;margin-left:10px;vertical-align:middle;";
    return new Handlebars.SafeString(
        '<a href="' + Handlebars.escapeExpression(href) + '" target="_blank" rel="noopener noreferrer" title="Opens in a new tab" style="' + linkStyle + '">' +
        '<span style="' + labelStyle + 'padding:2px 4px;border:1px solid darkgrey;border-radius:4px 0 0 4px;">' + label + '</span>' +
        '<span style="background:#fff;color:#428bca;border:1px solid darkgrey;border-left:0;border-radius:0 4px 4px 0;padding:2px 5px;"><span class="glyphicon glyphicon-new-window"></span></span></a>'
    );
});

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}