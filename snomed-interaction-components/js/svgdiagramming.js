/*

 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var idSequence = 0;

function drawSctBox(parentDiv, x, y, label, cssClass) {
    idSequence++;
    // x,y coordinates of the top-left corner
    var rect = $(document.createElement('div'));
    rect.attr('id', "sct-box-" + idSequence);
    rect.addClass(cssClass);
    rect.css('position', 'absolute');
    rect.css('top', y + 'px');
    rect.css('left', x + 'px');
    // text label (concept)
    if (cssClass == "sct-slot") {
        label = "<div class='sct-slot-straighten-text'>" + label + "</div>";
    }
    rect.html(label);
    parentDiv.append(rect);
    return rect;
}

function connectElements(svg, div1, div2, side1, side2, endMarker) {
    if (!$.svg.isSVGElem(div1)) {
        rect1cx = div1.position().left;
        rect1cy = div1.position().top;
        rect1cw = div1.outerWidth();
        rect1ch = div1.outerHeight();
    } else {
        rect1cx = div1.getBBox().x;
        rect1cy = div1.getBBox().y;
        rect1cw = div1.getBBox().width;
        rect1ch = div1.getBBox().height;
    }
    
    if (!$.svg.isSVGElem(div2)) {
        rect2cx = div2.position().left;
        rect2cy = div2.position().top;
        rect2cw = div2.outerWidth();
        rect2ch = div2.outerHeight();
    } else if (!!div2.getBBox) {
        rect2cx = div2.getBBox().x;
        rect2cy = div2.getBBox().y ;
        rect2cw = div2.getBBox().width;
        rect2ch = div2.getBBox().height;
    }
    
    markerCompensantion1 = 13;
    markerCompensantion2 = 13;
    
    if (!$.svg.isSVGElem(div1) && div1.css('box-shadow') != 'none') {
        markerCompensantion1 = markerCompensantion1 + 6;
    }
    if (!$.svg.isSVGElem(div2) && div2.css('box-shadow') != 'none') {
        //console.log("Shadow: " + div2.css('box-shadow'));
        markerCompensantion2 = markerCompensantion2 + 6;
    }
    
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
            originY = rect1cy + (rect1ch/2);
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

