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
                text = document.URL.split("?")[0].split("#")[0] + "?perspective=full&conceptId1=" + conceptId + "&edition=" + (options.publicBrowser ? options.edition.substring(0, options.edition.lastIndexOf('/')) : options.edition) + "&release=" + options.release + "&languages=" + options.languages; 
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