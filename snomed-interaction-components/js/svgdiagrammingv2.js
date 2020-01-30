/*

 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var idSequence = 0;

function drawSctBox(svg, x, y, label, sctid, cssClass) {
    //console.log("In svg: " + label + " " + sctid + " " + cssClass);
    // x,y coordinates of the top-left corner
    var testText = "Test";
    if (label && sctid) {
        if (label.length > sctid.toString().length) {
            testText = label;
        } else {
            testText = sctid.toString();
        }
    } else if (label) {
        testText = label;
    } else if (sctid) {
        testText = sctid.toString();
    }
    var fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
    //var fontFamily = 'sans-serif';
    var tempText = svg.text(x, y , testText, {fontFamily: fontFamily, fontSize: '12', fill: 'black'});
    var textHeight = tempText.getBBox().height;
    var textWidth = tempText.getBBox().width;
    textWidth = Math.round(textWidth* 1.2);
    svg.remove(tempText);

    var rect = null;
    var widthPadding = 20;
    var heightpadding = 25;

    if (!sctid || !label) {
        heightpadding = 15;
    }

    if (cssClass == "sct-primitive-concept") {
        rect = svg.rect(x, y, textWidth + widthPadding, textHeight + heightpadding, {id: 'rect'+idSequence, fill: '#99ccff', stroke: '#333', strokeWidth: 2});
    } else if (cssClass == "sct-defined-concept") {
        rect = svg.rect(x-2, y-2, textWidth + widthPadding + 4, textHeight + heightpadding + 4, {fill: 'white', stroke: '#333', strokeWidth: 1});
        var innerRect = svg.rect(x, y, textWidth + widthPadding, textHeight + heightpadding, {id: 'rect'+idSequence, fill: '#ccccff', stroke: '#333', strokeWidth: 1});
    } else if (cssClass == "sct-attribute") {
        rect = svg.rect(x-2, y-2, textWidth + widthPadding + 4, textHeight + heightpadding + 4, 18, 18, {fill: 'white', stroke: '#333', strokeWidth: 1});
        var innerRect = svg.rect(x, y, textWidth + widthPadding, textHeight + heightpadding, 18, 18, {id: 'rect'+idSequence, fill: '#ffffcc', stroke: '#333', strokeWidth: 1});
    }else if (cssClass == "sct-slot") {
        rect = svg.rect(x, y, textWidth + widthPadding, textHeight + heightpadding, {id: 'rect'+idSequence, fill: '#99ccff', stroke: '#333', strokeWidth: 2});
    } else {
        rect = svg.rect(x, y, textWidth + widthPadding, textHeight + heightpadding, {id: 'rect'+idSequence, fill: 'white', stroke: 'black', strokeWidth: 1});
    }

    if (sctid && label) {
        svg.text(x + 10, y + 16, sctid.toString(), {fontFamily: fontFamily, fontSize: '10', fill: 'black'});
        svg.text(x + 10, y + 31, label, {fontFamily: fontFamily, fontSize: '12', fill: 'black'});
    } else if (label) {
        svg.text(x + 10, y + 18, label, {fontFamily: fontFamily, fontSize: '12', fill: 'black'});
    } else if (sctid) {
        svg.text(x + 10, y + 18, sctid.toString(), {fontFamily: fontFamily, fontSize: '12', fill: 'black'});
    }

    idSequence++;
    $('rect').click(function(evt){
        //console.log(evt.target);
    });

    return rect;
}

function connectElements(svg, fig1, fig2, side1, side2, endMarker) {
    var rect1cx = fig1.getBBox().x;
    var rect1cy = fig1.getBBox().y;
    var rect1cw = fig1.getBBox().width;
    var rect1ch = fig1.getBBox().height;

    var rect2cx = fig2.getBBox().x;
    var rect2cy = fig2.getBBox().y ;
    var rect2cw = fig2.getBBox().width;
    var rect2ch = fig2.getBBox().height;

    var markerCompensantion1 = 15;
    var markerCompensantion2 = 15;
    
    switch(side1) {
        case 'top':
            originY = rect1cy;
            originX = rect1cx + (rect1cw/2);
            break;
        case 'bottom':
            originY = rect1cy + rect1ch;
            originX = rect1cx + (rect1cw/2);
            break;
        case 'left':
            originX = rect1cx - markerCompensantion1;
            originY = rect1cy + (rect1ch/2);
            break;
        case 'right':
            originX = rect1cx + rect1cw;
            originY = rect1cy + (rect1ch/2);
            break;
        case 'bottom-50':
            originY = rect1cy + rect1ch;
            originX = rect1cx + 40;
            break;
        default:
            originX = rect1cx + (rect1cw/2);
            originY = rect1cy + (rect1ch/2);
            break;
    }
    
    switch(side2) {
        case 'top':
            destinationY = rect2cy;
            destinationX = rect2cx + (rect2cw/2);
            break;
        case 'bottom':
            destinationY = rect2cy + rect2ch;
            destinationX = rect2cx + (rect2cw/2);
            break;
        case 'left':
            destinationX = rect2cx - markerCompensantion2;
            destinationY = rect2cy + (rect2ch/2);
            break;
        case 'right':
            destinationX = rect2cx + rect2cw;
            destinationY = rect2cy + (rect2ch/2);
            break;
        case 'bottom-50':
            destinationY = rect2cy + rect2ch;
            destinationX = rect2cx + 50;
            break;
        default:
            destinationX = rect2cx + (rect2cw/2);
            destinationY = rect2cy + (rect2ch/2);
            break;
    }
    
    if (endMarker == null) endMarker = "BlackTriangle";

    polyline1 = svg.polyline([[originX, originY],
            [originX, destinationY], [destinationX, destinationY]]
        , {id: 'poly1', fill: 'none', stroke: 'black', strokeWidth: 2, 'marker-end': 'url(#' + endMarker + ')'});

}

function loadDefs(svg) {
    var defs = svg.defs('SctDiagramsDefs');
    blackTriangle = svg.marker(defs, 'BlackTriangle', 0, 0, 20, 20, {
        viewBox: '0 0 22 20', refX: '0', refY: '10', markerUnits: 'strokeWidth', markerWidth: '8', markerHeight: '6',
        fill: 'black',stroke: 'black', strokeWidth: 2});
    svg.path(blackTriangle, 'M 0 0 L 20 10 L 0 20 z');
    
    clearTriangle = svg.marker(defs, 'ClearTriangle', 0, 0, 20, 20, {
        viewBox: '0 0 22 20', refX: '0', refY: '10', markerUnits: 'strokeWidth', markerWidth: '8', markerHeight: '8', 
        fill: 'white',stroke: 'black', strokeWidth: 2});
    svg.path(clearTriangle, 'M 0 0 L 20 10 L 0 20 z');

    lineMarker = svg.marker(defs, 'LineMarker', 0, 0, 20, 20, {
        viewBox: '0 0 22 20', refX: '0', refY: '10', markerUnits: 'strokeWidth', markerWidth: '8', markerHeight: '8',
        fill: 'white',stroke: 'black', strokeWidth: 2});
    svg.path(lineMarker, 'M 0 10 L 20 10');
}

function drawAttributeGroupNode(svg, x, y) {
    circle = svg.circle(x, y, 20, {fill: 'white',stroke: 'black', strokeWidth: 2});
    return circle;
}

function drawConjunctionNode(svg, x, y) {
    circle = svg.circle(x, y, 10, {fill: 'black',stroke: 'black', strokeWidth: 2});
    return circle;
}

function drawEquivalentNode(svg, x, y) {
    g = svg.group();
    svg.circle(g, x, y, 20, {fill: 'white',stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y-5, x+7, y-5, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y, x+7, y, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y+5, x+7, y+5, {stroke: 'black', strokeWidth: 2});
    return g;
}

function drawSubsumedByNode(svg, x, y) {
    g = svg.group();
    svg.circle(g, x, y, 20, {fill: 'white',stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y-8, x+7, y-8, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y+3, x+7, y+3, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-6, y-8, x-6, y+3, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y+7, x+7, y+7, {stroke: 'black', strokeWidth: 2});
    return g;
}

function drawSubsumesNode(svg, x, y) {
    g = svg.group();
    svg.circle(g, x, y, 20, {fill: 'white',stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y-8, x+7, y-8, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y+3, x+7, y+3, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x+6, y-8, x+6, y+3, {stroke: 'black', strokeWidth: 2});
    svg.line(g, x-7, y+7, x+7, y+7, {stroke: 'black', strokeWidth: 2});
    return g;
}

