function drawConceptDiagram (concept, div, options, panel) {
    
    var getDefautTermForRelationShip = function (concept) {
        if(concept.pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && concept.fsn.lang != options.defaultLanguage){
            return concept.pt.term;
        }
        else{
            return concept.fsn.term;
        }
    };

    var isUngroupAttribute = function (ungroupedAttributes, conceptId) {
        for (var i = 0; i < ungroupedAttributes.length; i++) {                
            if(ungroupedAttributes[i].referencedComponentId === conceptId) {
                return true;
            }
        }
        return false;
    };

    var saveAsPng = function(svg, conceptId) {
        //Create PNG Image
        //Get the svg
        //Create the canvas element
        var canvas = document.createElement('canvas');
        canvas.id = "canvas";
        document.body.appendChild(canvas);
    
        //Load the canvas element with our svg
        canvg(document.getElementById('canvas'), svg);
    
        //Save the svg to png
        Canvas2Image.saveAsPNG(canvas, null, null, "diagram-" + conceptId);
    
        //Clear the canvas
        canvas.width = canvas.width;
    };

    var renderDiagram = function(concept, div, options, ungroupedAttributes) {
        var svgIsaModel = [];
        var svgAttrModel = [];
        var axioms = [];
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
            $.each(concept.classAxioms, function (i, axiom) {
                var axiomToPush = {
                    relationships : [],
                    type : 'add',
                    definitionStatus: axiom.definitionStatus
                };
                $.each(axiom.relationships, function (i, field) {
                    if (field.type.conceptId === '116680003') {
                        axiomToPush.relationships.push(field);
                    } else {
                        axiomToPush.relationships.push(field);
                    }
                });
                axioms.push(axiomToPush);
            });
            $.each(concept.gciAxioms, function (i, axiom) {
                var axiomToPush = {};
                axiomToPush.relationships = [];
                axiomToPush.type = 'gci';
                $.each(axiom.relationships, function (i, field) {
                    if (field.type.conceptId === '116680003') {
                        axiomToPush.relationships.push(field);
                    } else {
                        axiomToPush.relationships.push(field);
                    }
                });
                axioms.push(axiomToPush);
            });            
        } else {
            if (concept.relationships) {
                $.each(concept.relationships, function (i, field) {
                    if (field.active == true) {
                        if (field.type.conceptId == 116680003) {
                            svgIsaModel.push(field);
                        } else {
                            svgAttrModel.push(field);
                        }
                    }
                });
            }
        }
        var context = {
            divElementId: div.attr('id')
        };
        //console.log(context);
        div.html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/details/diagram.hbs"](context));

        var parentDiv = $("#" + div.attr('id') + "-diagram-body");
        var height = 350;
        var width = 700;

        $.each(svgIsaModel, function (i, field) {
            height = height + 50;
            width = width + 80;
        });

        $.each(svgAttrModel, function (i, field) {
            height = height + 65;
            width = width + 110;
        });

        if(options.selectedView === 'stated'){
            $.each(concept.classAxioms, function (i, axiom) {
                height = height + 40;
                width = width + 80;
                $.each(axiom.relationships, function (i, field) {
                    height = height + 55;
                    width = width + 110;
                });
            });
            $.each(concept.gciAxioms, function (i, axiom) {
                height = height + 40;
                width = width + 80;
                $.each(axiom.relationships, function (i, field) {
                    height = height + 55;
                    width = width + 110;
                });
            });
        }

        // parentDiv.svg('destroy');

        parentDiv.svg({
            settings: {
                width: width + 'px',
                height: height + 'px'}});
        var svg = parentDiv.svg('get');
        loadDefs(svg);
        var x = 10;
        var y = 10;
        var maxX = 10;
        var sctClass = "";
        if (concept.definitionStatus == "PRIMITIVE") {
            sctClass = "sct-primitive-concept";
        } else {
            sctClass = "sct-defined-concept";
        }
        //console.log("In draw: " + concept.defaultTerm + " " + concept.conceptId + " " + sctClass);
        var pt = {};
        $.each(concept.descriptions, function(i, description) {
            if (description.lang == options.defaultLanguage && description.active) {
                $.each(description.acceptabilityMap, function(i, map){
                    if(map == "PREFERRED"){
                        pt = description;
                    }
                })
            }
        });
        if(pt.lang === options.defaultLanguage && options.defaultLanguage != 'en' && concept.fsn.lang != options.defaultLanguage){
            concept.defaultTerm = pt.term;
        }
        else{
            concept.defaultTerm = concept.fsn.term;
        }
    
        var rect1 = drawSctBox(svg, x, y, concept.defaultTerm, concept.conceptId, sctClass);
        x = x + 90;
        y = y + rect1.getBBox().height + 40;
        if(options.selectedView === 'stated' && svgIsaModel && svgIsaModel.length > 0 || options.selectedView != 'stated'){
            var circle1;
            if (concept.definitionStatus == "PRIMITIVE") {
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
        }
        
        
        if (!svgIsaModel || svgIsaModel.length === 0) {
            x = x + 20;
            y = y + 3;
        }
        
        maxX = ((maxX < x) ? x : maxX);
        // load stated parents
        sctClass = "sct-defined-concept";
        $.each(svgIsaModel, function(i, relationship) {
            if (relationship.target.definitionStatus == "PRIMITIVE") {
                sctClass = "sct-primitive-concept";
            } else {
                sctClass = "sct-defined-concept";
            }
            var rectParent = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.target), relationship.target.conceptId, sctClass);
            // $("#" + rectParent.id).css({"top":
            // (rectParent.outerHeight()/2) + "px"});
            connectElements(svg, circle2, rectParent, 'center', 'left', 'ClearTriangle');
            y = y + rectParent.getBBox().height + 25;
            maxX = ((maxX < x + rectParent.getBBox().width + 50) ? x + rectParent.getBBox().width + 50 : maxX);
        });

        // load ungrouped attributes
        var roleGroups = [];
        $.each(svgAttrModel, function(i, relationship) {
            if (relationship.target.definitionStatus == "PRIMITIVE") {
                sctClass = "sct-primitive-concept";
            } else {
                sctClass = "sct-defined-concept";
            }
            if (relationship.groupId == 0) {
                if (!isUngroupAttribute(ungroupedAttributes, relationship.type.conceptId)) {
                    y = y + 20;                   
                    var circleSelfgroupAttr = drawAttributeGroupNode(svg, x, y);
                    connectElements(svg, circle2, circleSelfgroupAttr, 'center', 'left');
                    y = y - 20;                
                    x = x + circleSelfgroupAttr.getBBox().width + 40;                
                    var rectAttr = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.type), relationship.type.conceptId, "sct-attribute");
                    connectElements(svg, circleSelfgroupAttr, rectAttr, 'right', 'left');
                    x = x + rectAttr.getBBox().width + 50;
                    var rectTarget = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.target), relationship.target.conceptId, sctClass);
                    connectElements(svg, rectAttr, rectTarget, 'right', 'left'); 
                    x = x - (circleSelfgroupAttr.getBBox().width + rectAttr.getBBox().width + 90 );                
                    y = y + rectTarget.getBBox().height + 25;
                    maxX = ((maxX < x + 20 + circleSelfgroupAttr.getBBox().width + 50 + rectAttr.getBBox().width + 50) ? x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50 : maxX);                    
                } 
                else {
                    var rectAttr = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.type),relationship.type.conceptId, "sct-attribute");
                    connectElements(svg, circle2, rectAttr, 'center', 'left');
                    var rectTarget = drawSctBox(svg, x + rectAttr.getBBox().width + 50, y, getDefautTermForRelationShip(relationship.target),relationship.target.conceptId, sctClass);
                    connectElements(svg, rectAttr, rectTarget, 'right', 'left');
                    y = y + rectTarget.getBBox().height + 25;
                    maxX = ((maxX < x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50) ? x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50 : maxX);
                }                
            } else {
                if (roleGroups.indexOf(relationship.groupId) === -1) {
                    roleGroups.push(relationship.groupId);
                }
            }
        });
        y = y + 15;
        roleGroups.sort(function(a, b){return a-b});
        for (var i = 0; i < roleGroups.length; i++) {
            var groupNode = drawAttributeGroupNode(svg, x, y);
            connectElements(svg, circle2, groupNode, 'center', 'left');
            var conjunctionNode = drawConjunctionNode(svg, x + 55, y);
            connectElements(svg, groupNode, conjunctionNode, 'right', 'left');
            $.each(svgAttrModel, function(m, relationship) {
                if (relationship.groupId == roleGroups[i]) {
                    if (relationship.target.definitionStatus == "PRIMITIVE") {
                        sctClass = "sct-primitive-concept";
                    } else {
                        sctClass = "sct-defined-concept";
                    }
                    var rectRole = drawSctBox(svg, x + 85, y - 18, getDefautTermForRelationShip(relationship.type), relationship.type.conceptId,"sct-attribute");
                    connectElements(svg, conjunctionNode, rectRole, 'center', 'left');
                    var rectRole2 = drawSctBox(svg, x + 85 + rectRole.getBBox().width + 30, y - 18, getDefautTermForRelationShip(relationship.target),relationship.target.conceptId, sctClass);
                    connectElements(svg, rectRole, rectRole2, 'right', 'left');
                    y = y + rectRole2.getBBox().height + 25;
                    maxX = ((maxX < x + 85 + rectRole.getBBox().width + 30 + rectRole2.getBBox().width + 50) ? x + 85 + rectRole.getBBox().width + 30 + rectRole2.getBBox().width + 50 : maxX);
                }
            });
        }


        $.each(axioms, function (i, axiom) {
            console.log(axiom);
            x = 100;
            y = y -3;
            var circle1;
            if(axiom.type === "gci"){
                circle1 = drawSubsumesNode(svg, x, y);
            }
            else if(axiom.type !== "gci" && axiom.definitionStatus === "FULLY_DEFINED"){
                circle1 = drawEquivalentNode(svg, x, y);
            }
            else{
                console.log('drawing 2');
                circle1 = drawSubsumedByNode(svg, x, y);
            }
            connectElements(svg, rect1, circle1, 'bottom-50', 'left');
            x = x + 55;
            var circle2 = drawConjunctionNode(svg, x, y);
            connectElements(svg, circle1, circle2, 'right', 'left', 'LineMarker');
            x = x + 40;
            y = y - 18;
            maxX = ((maxX < x) ? x : maxX);
            var axiomRoleNumber = 0;
            $.each(axiom.relationships, function (i, relationship) {
                console.log('here');
                if(relationship.type.conceptId === '116680003'){
                    if (relationship.target.definitionStatus === "PRIMITIVE") {
                        sctClass = "sct-primitive-concept";
                    } else {
                        sctClass = "sct-defined-concept";
                    }
                    var rectParent = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.target), relationship.target.conceptId, sctClass);
                    // $("#" + rectParent.id).css({"top":
                    // (rectParent.outerHeight()/2) + "px"});
                    connectElements(svg, circle2, rectParent, 'center', 'left', 'ClearTriangle');
                    y = y + rectParent.getBBox().height + 25;
                    maxX = ((maxX < x + rectParent.getBBox().width + 50) ? x + rectParent.getBBox().width + 50 : maxX);
                }
                else{
                    if (relationship.target.definitionStatus === "PRIMITIVE") {
                        sctClass = "sct-primitive-concept";
                    } else {
                        sctClass = "sct-defined-concept";
                    }
                    if (relationship.groupId === 0) {
                        if (!isUngroupAttribute(ungroupedAttributes, relationship.type.conceptId)) {
                            y = y + 20;                   
                            var circleSelfgroupAttr = drawAttributeGroupNode(svg, x, y);
                            connectElements(svg, circle2, circleSelfgroupAttr, 'center', 'left');
                            y = y - 20;                
                            x = x + circleSelfgroupAttr.getBBox().width + 40;                
                            var rectAttr = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.type), relationship.type.conceptId, "sct-attribute");
                            connectElements(svg, circleSelfgroupAttr, rectAttr, 'right', 'left');
                            x = x + rectAttr.getBBox().width + 50;
                            var rectTarget = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.target), relationship.target.conceptId, sctClass);
                            connectElements(svg, rectAttr, rectTarget, 'right', 'left'); 
                            x = x - (circleSelfgroupAttr.getBBox().width + rectAttr.getBBox().width + 90 );                
                            y = y + rectTarget.getBBox().height + 25;
                            maxX = ((maxX < x + 20 + circleSelfgroupAttr.getBBox().width + 50 + rectAttr.getBBox().width + 50) ? x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50 : maxX);                    
                        } 
                        else {                       
                            var rectAttr = drawSctBox(svg, x, y, getDefautTermForRelationShip(relationship.type), relationship.type.conceptId, "sct-attribute");
                            connectElements(svg, circle2, rectAttr, 'center', 'left');
                            var rectTarget = drawSctBox(svg, x + rectAttr.getBBox().width + 50, y, getDefautTermForRelationShip(relationship.target), relationship.target.conceptId, sctClass);
                            connectElements(svg, rectAttr, rectTarget, 'right', 'left');
                            y = y + rectTarget.getBBox().height + 25;
                            maxX = ((maxX < x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50) ? x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50 : maxX);
                        }
                    } else {
                        if (relationship.groupId > axiomRoleNumber) {
                            axiomRoleNumber = relationship.groupId;
                        }
                    }

                }

            });

            y = y + 15;
            for (var i = 1; i <= axiomRoleNumber; i++) {
                var groupNode = drawAttributeGroupNode(svg, x, y);
                connectElements(svg, circle2, groupNode, 'center', 'left');
                var conjunctionNode = drawConjunctionNode(svg, x + 55, y);
                connectElements(svg, groupNode, conjunctionNode, 'right', 'left');
                $.each(axiom.relationships, function (m, relationship) {
                    if (relationship.groupId === i) {
                        if (relationship.target.definitionStatus ==
                            "PRIMITIVE") { sctClass = "sct-primitive-concept"; } else {
                            sctClass = "sct-defined-concept";
                        }
                        var rectRole = drawSctBox(svg, x + 85, y - 18, getDefautTermForRelationShip(relationship.type), relationship.type.conceptId, "sct-attribute");
                        connectElements(svg, conjunctionNode, rectRole, 'center', 'left');
                        var rectRole2 = drawSctBox(svg, x + 85 + rectRole.getBBox().width + 30, y - 18, getDefautTermForRelationShip(relationship.target), relationship.target.conceptId, sctClass);
                        connectElements(svg, rectRole, rectRole2, 'right', 'left');
                        y = y + rectRole2.getBBox().height + 25;
                        maxX = ((maxX < x + 85 + rectRole.getBBox().width + 30 + rectRole2.getBBox().width + 50) ? x + 85 + rectRole.getBBox().width + 30 + rectRole2.getBBox().width + 50 : maxX);
                    }
                });
            }
        });

        var svgCode = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + parentDiv.html();
        svgCode = svgCode.substr(0, svgCode.indexOf("svg") + 4) +
            ' xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://web.resource.org/cc/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" ' +
            svgCode.substr(svgCode.indexOf("svg") + 4)
        svgCode = svgCode.replace('width="1000px" height="2000px"', 'width="' + maxX + '" height="' + y + '"');
        var b64 = Base64.encode(svgCode);    

        $("#" + div.attr('id') + "-download-button").disableTextSelect();    
        $("#" + div.attr('id') + "-png-button").disableTextSelect();
        $("#" + div.attr('id') + "-svg-button").disableTextSelect();
        $("#" + div.attr('id') + "-download-button").removeClass('disabled');
        $("#" + div.attr('id') + "-download-button").unbind().click(function(event) {
            $("#" + div.attr('id') + "-download-button").hide();
            $("#" + div.attr('id') + "-png-button").show();
            $("#" + div.attr('id') + "-svg-button").show();

            $("#" + div.attr('id') + "-png-button").unbind().click(function(event) {
                saveAsPng(svgCode,concept.conceptId);
            });
            $("#" + div.attr('id') + "-svg-button").unbind().click(function(event) {
                var downloadLink = document.createElement("a");
                downloadLink.href = 'data:image/svg+xml;base64,\n' + b64;
                downloadLink.download = "diagram-"+ concept.conceptId +".svg";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });
        });
    };    

    var branch = options.edition;
    if(options.release.length > 0 && options.release !== 'None'){
        branch = branch + "/" + options.release;
    };
    if(!options.serverUrl.includes('snowowl')){
        $.ajaxSetup({
        headers : {
            'Accept-Language': options.languages
        }
        });
    };
    $.getJSON(options.serverUrl + "/" + branch + "/members?referenceSet=723561005&offset=0&limit=500&active=true&expand=referencedComponent(expand(fsn()))", function(result) {
    }).done(function(result) {
        var ungroupedAttributes = [];
        if (result.items) {
            ungroupedAttributes = result.items.filter(function(attribute) {
            return attribute.additionalFields
                    && attribute.additionalFields.hasOwnProperty('grouped')
                    && attribute.additionalFields.grouped !== "1";
            });
        }
        renderDiagram(concept, div, options, ungroupedAttributes);
    });
}


