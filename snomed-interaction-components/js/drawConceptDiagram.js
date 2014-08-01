function drawConceptDiagram (concept, div, options) {
    var svgIsaModel = [];
    var svgAttrModel = [];
    if (options.selectedView == "stated") {
        $.each(concept.statedRelationships, function(i, field) {
            if (field.active == true) {
                if (field.type.conceptId == 116680003) {
                    svgIsaModel.push(field);
                } else {
                    svgAttrModel.push(field);
                }
            }
        });
    } else {
        $.each(concept.relationships, function(i, field) {
            if (field.active == true) {
                if (field.type.conceptId == 116680003) {
                    svgIsaModel.push(field);
                } else {
                    svgAttrModel.push(field);
                }
            }
        });
    }
    var parentDiv = div;

    parentDiv.svg('destroy');
    parentDiv.svg({
        settings: {
            width: '1000px',
            height: '2000px'}});
    var svg = parentDiv.svg('get');
    loadDefs(svg);
    var x = 10;
    var y = 10;
    var sctClass = "";
    if (concept.definitionStatus == "Primitive") {
        sctClass = "sct-primitive-concept";
    } else {
        sctClass = "sct-defined-concept";
    }
    //console.log("In draw: " + concept.defaultTerm + " " + concept.conceptId + " " + sctClass);
    var rect1 = drawSctBox(svg, x, y, concept.defaultTerm, concept.conceptId, sctClass);
    x = x + 90;
    y = y + rect1.getBBox().height + 40;
    var circle1;
    if (concept.definitionStatus == "Primitive") {
        circle1 = drawSubsumedByNode(svg, x, y);
    } else {
        circle1 = drawEquivalentNode(svg, x, y);
    }
    connectElements(svg, rect1, circle1, 'bottom-50', 'left');
    x = x + 55;
    var circle2 = drawConjunctionNode(svg, x, y);
    connectElements(svg, circle1, circle2, 'right', 'left', 'LineMarker');
    x = x + 40;
    y = y - 18;
    // load stated parents
    sctClass = "sct-defined-concept";
    $.each(svgIsaModel, function(i, relationship) {
        if (relationship.target.definitionStatus == "Primitive") {
            sctClass = "sct-primitive-concept";
        } else {
            sctClass = "sct-defined-concept";
        }
        var rectParent = drawSctBox(svg, x, y, relationship.target.defaultTerm, relationship.target.conceptId, sctClass);
        // $("#" + rectParent.id).css({"top":
        // (rectParent.outerHeight()/2) + "px"});
        connectElements(svg, circle2, rectParent, 'center', 'left', 'ClearTriangle');
        y = y + rectParent.getBBox().height + 25;
    });

    // load ungrouped attributes
    var maxRoleNumber = 0;
    $.each(svgAttrModel, function(i, relationship) {
        if (relationship.target.definitionStatus == "Primitive") {
            sctClass = "sct-primitive-concept";
        } else {
            sctClass = "sct-defined-concept";
        }
        if (relationship.groupId == 0) {
            var rectAttr = drawSctBox(svg, x, y, relationship.type.defaultTerm,relationship.type.conceptId, "sct-attribute");
            connectElements(svg, circle2, rectAttr, 'center', 'left');
            var rectTarget = drawSctBox(svg, x + rectAttr.getBBox().width + 50, y, relationship.target.defaultTerm,relationship.target.conceptId, sctClass);
            connectElements(svg, rectAttr, rectTarget, 'right', 'left');
            y = y + rectTarget.getBBox().height + 25;
        } else {
            if (relationship.groupId > maxRoleNumber) {
                maxRoleNumber = relationship.groupId;
            }
        }
    });
    y = y + 15;
    for (var i = 1; i <= maxRoleNumber; i++) {
        var groupNode = drawAttributeGroupNode(svg, x, y);
        connectElements(svg, circle2, groupNode, 'center', 'left');
        var conjunctionNode = drawConjunctionNode(svg, x + 55, y);
        connectElements(svg, groupNode, conjunctionNode, 'right', 'left');
        $.each(svgAttrModel, function(m, relationship) {
            if (relationship.groupId == i) {
                if (relationship.target.definitionStatus == "Primitive") {
                    sctClass = "sct-primitive-concept";
                } else {
                    sctClass = "sct-defined-concept";
                }
                var rectRole = drawSctBox(svg, x + 85, y - 18, relationship.type.defaultTerm, relationship.type.conceptId,"sct-attribute");
                connectElements(svg, conjunctionNode, rectRole, 'center', 'left');
                var rectRole2 = drawSctBox(svg, x + 85 + rectRole.getBBox().width + 30, y - 18, relationship.target.defaultTerm,relationship.target.conceptId, sctClass);
                connectElements(svg, rectRole, rectRole2, 'right', 'left');
                y = y + rectRole2.getBBox().height + 25;
            }
        });
    }
    var svgCode = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + parentDiv.html();
    svgCode = svgCode.substr(0, svgCode.indexOf("svg") + 4) +
        ' xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://web.resource.org/cc/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" ' +
        svgCode.substr(svgCode.indexOf("svg") + 5)
    var b64 = Base64.encode(svgCode);
    $(div).prepend($("<a href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n"+b64+"' download='diagram.svg'>Download</a>"));

}

function saveAsPng(svg) {
    //Create PNG Image
    //Get the svg
    //Create the canvas element
    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    document.body.appendChild(canvas);

    //Load the canvas element with our svg
    canvg(document.getElementById('canvas'), svg);

    //Save the svg to png
    Canvas2Image.saveAsPNG(canvas);

    //Clear the canvas
    canvas.width = canvas.width;
}