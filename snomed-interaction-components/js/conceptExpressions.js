/**
 * Created by alo on 5/9/15.
 */
var e_openCurlyBraces = '<span class="exp-brackets">{</span>';
var e_closeCurlyBraces = '<span class="exp-brackets">}</span>';
var e_colon = '<span class="exp-operators">:</span>';
var e_plus = '<span class="exp-operators">+</span>';
var e_equals = '<span class="exp-operators">=</span>';
var e_pipe = '<span class="exp-pipes">|</span>';

var panel = {};

var referenceToExpression = function(conceptReference, concrete, type) {
    if(!concrete){
        return conceptReference.conceptId + " " + e_pipe + "<span class='exp-term'>" +
            conceptReference.defaultTerm + "</span>" + e_pipe;
    }
    else{
        if(type === 'INTEGER'){
            return '#' + conceptReference;
        }
        else if(type === 'DECIMAL'){
            return '#' + conceptReference;
        }
        else if(type === 'STRING'){
            return '\"' + conceptReference + '\"';
        }
        
    }
};

var conceptToPostCoordinatedExpression = function(conceptDefinitionStatus, relationships) {
    var expression = "";
    var tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
    if (conceptDefinitionStatus == "PRIMITIVE") {
        expression += "<span class='exp-operators'>&lt;&lt;&lt;</span> ";        
    } else {
        expression += "<span class='exp-operators'>===</span> "; 
    }
    if (relationships && relationships.length > 0) {
        //expression += ' <span class="exp-brackets">{</span>';
        var firstParent = true;
        var attributes = {};
        $.each(relationships, function(i, rel){
            if (rel.active == true && rel.type.conceptId == "116680003") {
                if (!firstParent) {
                    expression += " " + e_plus + " <br>";
                    expression += tab + referenceToExpression(rel.target, false);
                } else {
                    expression += referenceToExpression(rel.target, false);
                }
                firstParent = false;

            } else if (rel.active == true && rel.type.conceptId != "116680003") {
                if (!attributes[rel.groupId]) {
                    attributes[rel.groupId] = [];
                }
                attributes[rel.groupId].push(rel);
            }
        });
        //console.log(attributes);
        var groups = Object.keys(attributes);
        if (groups.length > 0) {
            expression += " " + e_colon;
        }
        $.each(groups, function(i, group){
            expression += "<br>";

            var firstInGroup = true;
            $.each(attributes[group], function(i, rel){
                if (!firstInGroup) {
                    expression += ", <br>";
                }
                if (group > 0) {
                    expression += tab + tab + tab;
                } else {
                    expression += tab + tab;
                }
                if (firstInGroup && group > 0) {
                    expression += e_openCurlyBraces + " ";
                } else if (group > 0){
                    expression += "&nbsp;&nbsp;";
                }
                firstInGroup = false;
                if(rel.concreteValue){
                    expression += referenceToExpression(rel.type) + " " + e_equals + " " + referenceToExpression(rel.concreteValue.value, true, rel.concreteValue.dataType);
                }
                else{
                    expression += referenceToExpression(rel.type) + " " + e_equals + " " + referenceToExpression(rel.target, false);
                }
            });
            if (group != 0) {
                expression += " " + e_closeCurlyBraces;
            }
        });
    }
    return expression;
};

function formatOwlAxiomExpression (owlExpression, conceptsMap) {
    var lines = getLines(owlExpression);
    
    // Add tab char
    var tabCount = 0;
    for (var i = 0 ; i < lines.length; i++) {        
        lines[i] = lines[i].trim();
        if (lines[i].indexOf(')') !== -1) {
            tabCount--;
        }
        if (i !== 0 && tabCount > 0) {
            for (var j = 0 ; j < tabCount; j++) {
                lines[i] = '\t' + lines[i];
            }
        }
        if (lines[i].indexOf('(') !== -1) {
            tabCount++;
        }

        // Fill FSN
        lines[i] = fillConceptFSN(lines[i], conceptsMap);       
    }
    return lines.join('\n');
}

function addTabToLine(line, tabCount) {}

function getLines(text) {
    text = text.replace(/\(/g, "(\n");
    text = text.replace(/\)/g, "\n)\n"); 
    text = text.replace(/(:\d*)\s/g, "$&\n");
    text = text.replace(/(:roleGroup)\s/g, "$&\n");

    var lines = text.split("\n");
    lines = lines.filter(function (el) {
      el = el.trim();
      return el != '';
    });

    return lines;
}

function fillConceptFSN (text, conceptsMap) {
    var tempStr = text.trim();
    if (tempStr.indexOf(':roleGroup') != -1) {
      return text.replace(':roleGroup', ':609096000 |Role group (attribute)|');
    } else {
      const match = /(^:\d*)/g;
      if (match.test(tempStr)) {
        var conceptId = tempStr.substring(1,tempStr.length);
        if (conceptsMap.hasOwnProperty(conceptId)) {
          return text + ' |' + conceptsMap[conceptId] + '|';
        } else {
          return text;
        }
      } else {
        return text;
      }
    }
}

function getConceptIdsFromOwlExpresstion(owlExpression) {
    var lines = getLines(owlExpression);
    var conceptIds = [];
    for (var i = 0 ; i < lines.length; i++) {
        var line = lines[i].trim();
        const match = /(^:\d*)/g;
        if (match.test(line)) {
            conceptIds.push(line.substring(1,line.length));            
        }
    }
    return conceptIds;
}

function renderExpressionForAxioms (concept, members, classAxiomOwlExpressions, gciAxiomOwlExpressions, otherOwlExpressions) {
    Handlebars.registerHelper('if_gr', function(a, b, opts) {
        if (a > b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    });
    
    var owlAxiomExpressions = {};    

    members.forEach(function(item) {
        if (item.additionalFields.hasOwnProperty('owlExpression')) {                               
            if(item.memberId){
                owlAxiomExpressions[item.memberId] = item.additionalFields['owlExpression'];
            }
            else{
                owlAxiomExpressions[item.id] = item.additionalFields['owlExpression'];
            }                       
        }
    });

    var conceptsMap = {};
    conceptsMap[concept.conceptId] = concept.fsn.term;
    conceptsMap[609096000] = 'Role group (attribute)';
    conceptsMap[116680003] = 'Is a (attribute)';

    if(concept.classAxioms && concept.classAxioms.length !== 0) {
        concept.classAxioms.forEach(function(classAxiom){
            classAxiom.relationships.forEach(function(relationship){
                conceptsMap[relationship.type.conceptId] = relationship.type.fsn.term;
                conceptsMap[relationship.target.conceptId] = relationship.target.fsn.term; 
        });         
        });
    } 
    
    if(concept.gciAxioms && concept.gciAxioms.length !== 0) {
        concept.gciAxioms.forEach(function(classAxiom){
            classAxiom.relationships.forEach(function(relationship){
                conceptsMap[relationship.type.conceptId] = relationship.type.fsn.term;
                conceptsMap[relationship.target.conceptId] = relationship.target.fsn.term; 
        });         
        });
    }

    var owlAxiomExpression = {};
    for (var key in owlAxiomExpressions) {
        owlAxiomExpression[key] = formatOwlAxiomExpression(owlAxiomExpressions[key], conceptsMap);
    }

    var inUseOwlExpressionIds = [];
    if(concept.classAxioms && concept.classAxioms.length !== 0) {
        concept.classAxioms.forEach(function(classAxiom){
            if (owlAxiomExpression.hasOwnProperty(classAxiom.axiomId)) {
                classAxiomOwlExpressions.push(owlAxiomExpression[classAxiom.axiomId]);
                inUseOwlExpressionIds.push(classAxiom.axiomId);
            }
        });
    } 
    
    if(concept.gciAxioms && concept.gciAxioms.length !== 0) {
        concept.gciAxioms.forEach(function(gciAxiom){
            if (owlAxiomExpression.hasOwnProperty(gciAxiom.axiomId)) {
                gciAxiomOwlExpressions.push(owlAxiomExpression[gciAxiom.axiomId]);
                inUseOwlExpressionIds.push(gciAxiom.axiomId);
            }        
        });
    }

    for (var key in owlAxiomExpressions) {
        if (!inUseOwlExpressionIds.includes(key)) {
            otherOwlExpressions.push(owlAxiomExpressions[key]);
        }
    }
}
  
var renderExpression = function(concept, inferredConcept, div, options) {
    var preCoordinatedHtml = referenceToExpression(concept);
    var tmp = document.createElement("DIV");
    tmp.innerHTML = preCoordinatedHtml;
    var plainPreCoordinatedExpression =  tmp.textContent || tmp.innerText || "";
    plainPreCoordinatedExpression = plainPreCoordinatedExpression.replace(/\s\s+/g, ' ');

    if((concept.classAxioms && concept.classAxioms.length !== 0) || (concept.gciAxioms && concept.gciAxioms.length !== 0)) {
        
        $.getJSON(options.serverUrl + "/" + options.edition + "/" + ((options.release && options.release !== 'None') ? options.release + '/': '') + "members?referencedComponentId=" + concept.conceptId + '&active=true', function(result) {
        }).done(function(result) {
            var classAxiomOwlExpressions = [];
            var gciAxiomOwlExpressions = [];
            var otherOwlExpressions = [];           
            if (result.total > 0) {
                renderExpressionForAxioms (concept, result.items, classAxiomOwlExpressions, gciAxiomOwlExpressions, otherOwlExpressions)
            }

            var inferredHtml = conceptToPostCoordinatedExpression(concept.definitionStatus, concept.relationships);
            var tmp = document.createElement("DIV");
            tmp.innerHTML = inferredHtml;
            var plainInferredExpression =  tmp.textContent || tmp.innerText || "";
            plainInferredExpression = plainInferredExpression.replace(/\s\s+/g, ' ');

            var statedHtml = '';
            var plainStatedExpression = '';
            $.each(concept.classAxioms, function(i, axiom){
                if (axiom.active) {
                    if (statedHtml.length !== 0) {
                        statedHtml += ' <br><br>';
                    }
                    statedHtml += conceptToPostCoordinatedExpression(concept.definitionStatus, axiom.relationships)
                }
            });
            if (statedHtml.length !== 0) {
                tmp = document.createElement("DIV");
                tmp.innerHTML = statedHtml;
                plainStatedExpression =  tmp.textContent || tmp.innerText || "";
                plainStatedExpression = plainStatedExpression.replace(/\s\s+/g, ' ');
            }

            var context = {
                options: options,
                divElementId: div.attr('id'),
                preCoordinatedExpressionHtml: preCoordinatedHtml,
                statedExpressionHtml: statedHtml,
                inferredExpressionHtml: inferredHtml,
                plainPreCoordinatedExpression: plainPreCoordinatedExpression,
                plainStatedExpression: plainStatedExpression,
                classAxiomOwlExpressions: classAxiomOwlExpressions,
                otherOwlExpressions: otherOwlExpressions,
                gciAxiomOwlExpressions: gciAxiomOwlExpressions,
                plainInferredExpression: plainInferredExpression
            };
            if (otherOwlExpressions.length !== 0) {
                var conceptIds = [];
                otherOwlExpressions.forEach(function(expression) {
                    conceptIds = conceptIds.concat(getConceptIdsFromOwlExpresstion(expression));
                });

                $.getJSON(options.serverUrl + "/" + options.edition + "/" + ((options.release && options.release !== 'None') ? options.release + '/': '') + "concepts?conceptIds=" + conceptIds.join(','), function(result) {
                }).done(function(result) {
                    var conceptsMap = {};
                    if (result && result.items) {
                        result.items.forEach(function(item) {
                            conceptsMap[item.conceptId] = item.fsn.term;
                        });
                    }
                    for (var i = 0; i < otherOwlExpressions.length; i++) {                   
                        otherOwlExpressions[i] = formatOwlAxiomExpression(otherOwlExpressions[i], conceptsMap);
                    }
                    div.html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/expression.hbs"](context).trim());
                });
            } else {
                div.html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/expression.hbs"](context).trim());
            }            

            if (panel.clipboard) panel.clipboard.destroy();
            panel.clipboard = new Clipboard('.clip-btn-exp');
            panel.clipboard.on('success', function(e) {                
                alertEvent("Copied!", "info");
                e.clearSelection();
            });
            panel.clipboard.on('error', function(e) {
                console.log("Error!");
                alertEvent("Error", "error");
            });
        });
    } else {        
        var statedHtml = conceptToPostCoordinatedExpression(concept.definitionStatus, concept.statedRelationships);
        var tmp = document.createElement("DIV");
        tmp.innerHTML = statedHtml;
        var plainStatedExpression =  tmp.textContent || tmp.innerText || "";
        plainStatedExpression = plainStatedExpression.replace(/\s\s+/g, ' ');

        var inferredHtml = conceptToPostCoordinatedExpression(concept.definitionStatus, concept.relationships);
        var tmp = document.createElement("DIV");
        tmp.innerHTML = inferredHtml;
        var plainInferredExpression =  tmp.textContent || tmp.innerText || "";
        plainInferredExpression = plainInferredExpression.replace(/\s\s+/g, ' ');

        var context = {
            divElementId: div.attr('id'),
            preCoordinatedExpressionHtml: preCoordinatedHtml,
            statedExpressionHtml: statedHtml,
            inferredExpressionHtml: inferredHtml,
            plainPreCoordinatedExpression: plainPreCoordinatedExpression,
            plainStatedExpression: plainStatedExpression,
            classAxiomOwlExpressions: [],
            gciAxiomOwlExpressions: [],
            plainInferredExpression: plainInferredExpression
        };
        div.html(JST["snomed-interaction-components/views/conceptDetailsPlugin/tabs/expression.hbs"](context).trim());

        if (panel.clipboard) panel.clipboard.destroy();
        panel.clipboard = new Clipboard('.clip-btn-exp');
        panel.clipboard.on('success', function(e) {
            // console.info('Action:', e.action);
            // console.info('Text:', e.text);
            // console.info('Trigger:', e.trigger);
            alertEvent("Copied!", "info");
            e.clearSelection();
        });
        panel.clipboard.on('error', function(e) {
            console.log("Error!");
            alertEvent("Error", "error");
        });
    }    
};
