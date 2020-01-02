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

var referenceToExpression = function(conceptReference) {
    return conceptReference.conceptId + " " + e_pipe + "<span class='exp-term'>" +
        conceptReference.defaultTerm + "</span>" + e_pipe;
};

var conceptToPostCoordinatedExpression = function(concept, relsProperty, div, options) {
    var expression = "";
    var tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
    if (concept.definitionStatus == "Fully defined" || concept.definitionStatus == "Sufficiently defined") {
        expression += "<span class='exp-operators'>===</span> ";
    } else {
        expression += "<span class='exp-operators'>&lt;&lt;&lt;</span> ";
    }
    if (concept[relsProperty] && concept[relsProperty].length > 0) {
        //expression += ' <span class="exp-brackets">{</span>';
        var firstParent = true;
        var attributes = {};
        $.each(concept[relsProperty], function(i, rel){
            if (rel.active == true && rel.type.conceptId == "116680003") {
                if (!firstParent) {
                    expression += " " + e_plus + " <br>";
                    expression += tab + referenceToExpression(rel.target);
                } else {
                    expression += referenceToExpression(rel.target);
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
                expression += referenceToExpression(rel.type) + " " + e_equals + " " + referenceToExpression(rel.target);
            });
            if (group != 0) {
                expression += " " + e_closeCurlyBraces;
            }
        });
    }
    return expression;
};

function formatOwlAxiomExpression (owlExpression, conceptsMap) {
    var text = owlExpression;
    
    // Add new line char
    text = text.replace(/\(/g, "(\n");
    text = text.replace(/\)/g, "\n)\n"); 
    text = text.replace(/(:\d*)\s/g, "$&\n");
    text = text.replace(/(:roleGroup)\s/g, "$&\n");

    var textArr = text.split("\n");
    textArr = textArr.filter(function (el) {
      el = el.trim();
      return el != '';
    });

    // Add tab char
    var tabCount = 0;
    for (var i = 0 ; i < textArr.length; i++) {        
      textArr[i] = textArr[i].trim();
      if (textArr[i].indexOf(')') !== -1) {
        tabCount--;
      }
      if (i !== 0 && tabCount > 0) {
        for (var j = 0 ; j < tabCount; j++) {
          textArr[i] = '\t' + textArr[i];
        }
      }
      if (textArr[i].indexOf('(') !== -1) {
        tabCount++;
      }

      // Fill FSN
      textArr[i] = fillConceptFSN(textArr[i], conceptsMap);       
    }
    return textArr.join('\n');
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

function renderExpressionForAxioms (concept, members, classAxiomOwlExpressions, gciAxiomOwlExpressions) {
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

    if(concept.classAxioms && concept.classAxioms.length !== 0) {
        concept.classAxioms.forEach(function(classAxiom){
            if (owlAxiomExpression.hasOwnProperty(classAxiom.axiomId)) {
                classAxiomOwlExpressions.push(owlAxiomExpression[classAxiom.axiomId]);
            }
        });
    } 
    
    if(concept.gciAxioms && concept.gciAxioms.length !== 0) {
        concept.gciAxioms.forEach(function(classAxiom){
            if (owlAxiomExpression.hasOwnProperty(classAxiom.axiomId)) {
                gciAxiomOwlExpressions.push(owlAxiomExpression[classAxiom.axiomId]);
            }        
        });
    }
}
  
var renderExpression = function(concept, inferredConcept, div, options) {
    var preCoordinatedHtml = referenceToExpression(concept);
    var tmp = document.createElement("DIV");
    tmp.innerHTML = preCoordinatedHtml;
    var plainPreCoordinatedExpression =  tmp.textContent || tmp.innerText || "";
    plainPreCoordinatedExpression = plainPreCoordinatedExpression.replace(/\s\s+/g, ' ');

    if((concept.classAxioms && concept.classAxioms.length !== 0) || concept.gciAxioms && concept.gciAxioms.length !== 0) {
        
        $.getJSON(options.serverUrl + "/" + options.edition + "/" + ((options.release && options.release !== 'None') ? options.release + '/': '') + "members?referencedComponentId=" + concept.conceptId + '&active=true', function(result) {
        }).done(function(result) {
            var classAxiomOwlExpressions = [];
            var gciAxiomOwlExpressions = [];           
            if (result.total > 0) {
                renderExpressionForAxioms (concept, result.items, classAxiomOwlExpressions, gciAxiomOwlExpressions)
            }

            var inferredHtml = conceptToPostCoordinatedExpression(concept, "relationships", div, options);
            var tmp = document.createElement("DIV");
            tmp.innerHTML = inferredHtml;
            var plainInferredExpression =  tmp.textContent || tmp.innerText || "";
            plainInferredExpression = plainInferredExpression.replace(/\s\s+/g, ' ');

            var context = {
                divElementId: div.attr('id'),
                preCoordinatedExpressionHtml: preCoordinatedHtml,
                statedExpressionHtml: '',
                inferredExpressionHtml: inferredHtml,
                plainPreCoordinatedExpression: plainPreCoordinatedExpression,
                plainStatedExpression: plainStatedExpression,
                classAxiomOwlExpressions: classAxiomOwlExpressions,
                gciAxiomOwlExpressions: gciAxiomOwlExpressions,
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
        });
    } else {
        var statedHtml = conceptToPostCoordinatedExpression(concept, "statedRelationships");
        var tmp = document.createElement("DIV");
        tmp.innerHTML = statedHtml;
        var plainStatedExpression =  tmp.textContent || tmp.innerText || "";
        plainStatedExpression = plainStatedExpression.replace(/\s\s+/g, ' ');

        var inferredHtml = conceptToPostCoordinatedExpression(concept, "relationships", div, options);
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
