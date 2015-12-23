this["JST"] = this["JST"] || {};

this["JST"]["views/conceptDetailsPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='margin: 5px; height:98%; overflow:auto;' class='panel panel-default'>\n    <div class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading' ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding:2px;position: absolute;top: 1px;'><i class='glyphicon glyphicon-bookmark'></i></button>\n        <div class='row'>\n            <div class='col-md-8' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_concept_details'>Concept Details</span></strong></div>\n            <div class='col-md-4 text-right'>\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\n            </div>\n        </div>\n    </div>\n    <div class='panel-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" id=\"details-tabs-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <li class=\"active\"><a href=\"#home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_summary\">Summary</span></a></li>\n            <li><a href=\"#details-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_details\">Details</span></a></li>\n            <li id=\"diagram-tab\"><a href=\"#diagram-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\" id=\"diagram-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"i18n\" data-i18n-id=\"i18n_diagram\">Diagram</span></a></li>\n            <li id=\"expression-tab\"><a href=\"#expression-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\" id=\"expression-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Expression</a></li>\n            <li><a href=\"#refsets-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_refsets\">Refsets</span></a></li>\n            <li id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-members-tab\"><a href=\"#members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_members\">Members</span></a></li>\n            <li id=\"references-tab\"><a id=\"references-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_references\">References</span></a></li>\n        </ul>\n        <!-- Tab panes -->\n        <div class=\"tab-content\" id=\"details-tab-content-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"tab-pane fade in active\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"padding: 5px;\">\n                <div class=\"pull-right\">\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                        <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-stated-button\">Stated</button>\n                        <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inferred-button\">Inferred</button>\n                    </div>\n                    <div><span class=\"text-muted text-center\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-wf-status-label\"></span></div>\n                </div>\n                <div style=\"max-height: 300px; overflow: auto; margin-left: 0%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\">\n                    <div class=\"panel-heading\">\n                        <h4><span data-i18n-id=\"i18n_parents\" class=\"i18n\">Parents</span></h4>\n                    </div>\n                    <div class=\"panel-body\" id=\"home-parents-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                        <span data-i18n-id=\"i18n_no_parents\" class=\"i18n\">No parents</span>\n                    </div>\n                </div>\n                <div class=\"row\" style=\"overflow: auto; max-height: 30%;\">\n                    <div class=\"col-md-offset-1 col-md-4\" style=\"color: #ffffff;background-color: #1e90ff;display: inline-block; border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\" id=\"home-attributes-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Attributes</div>\n                    <div class=\"col-md-4\" style=\"background-color: rgba(30, 144, 255, 0.17); display: inline-block; min-height: 100%; margin-left: 10px; border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\" id=\"home-roles-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Relationships</div>\n                </div>\n                <div style=\"max-height: 300px; overflow: auto; margin-left: 0%; margin-bottom: 10px; margin-top: 10px; width: 80%;border: 2px solid #357ebd; border-radius: 4px; padding: 5px;\" id=\"home-children-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <div class=\"panel-heading\">\n                        <h4><span data-i18n-id=\"i18n_children\" class=\"i18n\">Children</span>&nbsp;<span id=\"home-children-cant-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></h4>\n                    </div>\n                    <div class=\"panel-body\" id=\"home-children-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-body\"></div>\n                </div>\n                <div><span class=\"text-muted pull-right\" id=\"footer-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"details-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-attributes-panel' class='panel panel-default'>\n                </div>\n                <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descriptions-panel' class='panel panel-default'>\n                </div>\n                <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-rels-panel' class='panel panel-default'>\n                </div>\n                <!--<div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-children-panel' class='panel panel-default' style='height:100px;overflow:auto;margin-bottom: 15px;'>-->\n                <!--</div>-->\n            </div>\n            <div class=\"tab-pane fade\" id=\"diagram-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"row\" style=\"margin-right: 20px\"><span class=\"pull-right text-muted\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagram-viewLabel\"></span></div>\n                <div id=\"diagram-canvas-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"expression-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"row\" style=\"margin-right: 20px\"><span class=\"pull-right text-muted\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expression-viewLabel\"></span></div>\n                <div id=\"expression-canvas-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"refsets-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            </div>\n            <div class=\"tab-pane fade\" id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <!--<div class=\"pull-right\" style=\"padding: 5px\">-->\n                    <!--<button id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-sort\" class=\"btn btn-default\">Sort results</button>-->\n                    <!--<span class=\"text-muted\">This operation may time-out for large refsets</span>-->\n                <!--</div>-->\n                <!--<br>-->\n                <table id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable\" class=\"table table-hover table-bordered\">\n                </table>\n                <!--<button id=\"members-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-normal\" class=\"btn btn-default\">100 first members</button>-->\n            </div>\n            <div class=\"tab-pane fade\" id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <div class=\"panel-group\" id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-accordion\">\n\n                </div>\n                <!--<br>-->\n                <!--<span class=\"text-muted\" style=\"padding: 5px;\" id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-total\"></span>-->\n                <!--<table id=\"references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable\" class=\"table table-hover table-bordered\">-->\n                <!--</table>-->\n            </div>\n        </div>\n    </div>\n</div>\n<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>\n    <div class='modal-dialog'>\n        <div class='modal-content'>\n            <div class='modal-header'>\n                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n                <h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>\n            </div>\n            <div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>\n                <p></p>\n            </div>\n            <div class='modal-footer'>\n                <button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>\n            </div>\n        </div>\n    </div>\n</div>\n        ";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/options.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displaySynonymsOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_display_synonyms2\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options) : helperMissing.call(depth0, "i18n", "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options)))
    + "</span>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displaySynonymsOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_display_synonyms2\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options) : helperMissing.call(depth0, "i18n", "i18n_display_synonyms2", "Display Synonyms along with FSN and preferred terms", options)))
    + "</span>\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayIdsOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_display_ids\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_ids", "Display Description Ids", options) : helperMissing.call(depth0, "i18n", "i18n_display_ids", "Display Description Ids", options)))
    + "</span>\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayIdsOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_display_ids\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_ids", "Display Description Ids", options) : helperMissing.call(depth0, "i18n", "i18n_display_ids", "Display Description Ids", options)))
    + "</span>\n                ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayInactiveDescriptionsOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_display_inactive_descriptions\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_inactive_descriptions", "Display inactive descriptions", options) : helperMissing.call(depth0, "i18n", "i18n_display_inactive_descriptions", "Display inactive descriptions", options)))
    + "</span>\n                ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayInactiveDescriptionsOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_display_inactive_descriptions\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_inactive_descriptions", "Display inactive descriptions", options) : helperMissing.call(depth0, "i18n", "i18n_display_inactive_descriptions", "Display inactive descriptions", options)))
    + "</span>\n                ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-hideNotAcceptableOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_hide_not_acceptable\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options) : helperMissing.call(depth0, "i18n", "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options)))
    + "</span>\n                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-hideNotAcceptableOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_hide_not_acceptable\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options) : helperMissing.call(depth0, "i18n", "i18n_hide_not_acceptable", "Hide descriptions with no acceptability", options)))
    + "</span>\n                ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagrammingMarkupEnabledOption\" checked> <span class=\"i18n\" data-i18n-id=\"i18n_diagramming_markup_enabled\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options) : helperMissing.call(depth0, "i18n", "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options)))
    + "</span>\n                ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagrammingMarkupEnabledOption\"> <span class=\"i18n\" data-i18n-id=\"i18n_diagramming_markup_enabled\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options) : helperMissing.call(depth0, "i18n", "i18n_diagramming_markup_enabled", "Diagramming Guideline colors enabled", options)))
    + "</span>\n                ";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return "checked";
  }

function program23(depth0,data) {
  
  
  return "\n                <option value=\"stated\" selected>Stated</option>\n            ";
  }

function program25(depth0,data) {
  
  
  return "\n                <option value=\"stated\">Stated</option>\n            ";
  }

function program27(depth0,data) {
  
  
  return "\n                <option value=\"inferred\" selected>Inferred</option>\n            ";
  }

function program29(depth0,data) {
  
  
  return "\n                <option value=\"inferred\">Inferred</option>\n            ";
  }

function program31(depth0,data) {
  
  
  return "\n                <option value=\"all\" selected>All</option>\n            ";
  }

function program33(depth0,data) {
  
  
  return "\n                <option value=\"all\">All</option>\n            ";
  }

function program35(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.manifest)),stack1 == null || stack1 === false ? stack1 : stack1.languageRefsets), {hash:{},inverse:self.noop,fn:self.programWithDepth(36, program36, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program36(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"checkbox\">\n                    <label>\n                        <input class=\"langOption\" type=\"checkbox\" value=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifIn || (depth0 && depth0.ifIn),options={hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptId), ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.langRefset), options) : helperMissing.call(depth0, "ifIn", (depth0 && depth0.conceptId), ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.langRefset), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                    </label>\n                </div>\n            ";
  return buffer;
  }

function program38(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "-->\n                    <!--<tr>-->\n                        <!--<td>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>-->\n                        <!--<td>-->\n                            <!--<div class=\"checkbox\">-->\n                                <!--<label>-->\n                                    <!--<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscribeTo-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">-->\n                                <!--</label>-->\n                            <!--</div>-->\n                        <!--</td>-->\n                        <!--<td>-->\n                            <!--<div class=\"checkbox\">-->\n                                <!--<label>-->\n                                    <!--<input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscriptor-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscriptor), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">-->\n                                <!--</label>-->\n                            <!--</div>-->\n                        <!--</td>-->\n                    <!--</tr>-->\n                <!--";
  return buffer;
  }

  buffer += "<form role=\"form\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-options-form\">\n    <div class=\"form-group\">\n        <div class=\"checkbox\">\n            <label>\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.displaySynonyms), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.showIds), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.displayInactiveDescriptions), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.hideNotAcceptable), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.diagrammingMarkupEnabled), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </label>\n        </div>\n        <div class=\"checkbox\">\n            <label>\n                <input type=\"checkbox\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-displayChildren\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.displayChildren), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"i18n\" data-i18n-id=\"i18n_display_children\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_display_children", "Display All Children", options) : helperMissing.call(depth0, "i18n", "i18n_display_children", "Display All Children", options)))
    + "</span>\n            </label>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"selectedRelsView\"><span class=\"i18n\" data-i18n-id=\"i18n_rels_view\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_rels_view", "Relationships View", options) : helperMissing.call(depth0, "i18n", "i18n_rels_view", "Relationships View", options)))
    + "</span></label>\n        <select class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-relsViewOption\">\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(29, program29, data),fn:self.program(27, program27, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "all", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "all", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <label><span class=\"i18n\" data-i18n-id=\"i18n_language_refset\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_language_refset", "Language Refset", options) : helperMissing.call(depth0, "i18n", "i18n_language_refset", "Language Refset", options)))
    + "</span></label>\n\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.manifest)),stack1 == null || stack1 === false ? stack1 : stack1.languageRefsets), {hash:{},inverse:self.noop,fn:self.programWithDepth(35, program35, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <!--<div class=\"form-group\">-->\n        <!--<table class='table table-bordered table-hover'>-->\n            <!--<thead>-->\n                <!--<tr>-->\n                    <!--<th>Panel</th>-->\n                    <!--<th>Subscribed</th>-->\n                    <!--<th>Subscriptor</th>-->\n                <!--</tr>-->\n            <!--</thead>-->\n            <!--<tbody>-->\n                <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.possibleSubscribers), {hash:{},inverse:self.noop,fn:self.programWithDepth(38, program38, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n            <!--</tbody>-->\n        <!--</table>-->\n    <!--</div>-->\n</form>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/attributes-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n        class = 'highlightEffectiveTime'\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"color: inherit;text-decoration: inherit;\"><span class=\"badge alert-warning\">&nbsp;&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"color: inherit;text-decoration: inherit;\"><span class=\"badge alert-warning\" >&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n                , <span class='i18n' data-i18n-id='i18n_primitive'>Primitive</span>\n            ";
  }

function program9(depth0,data) {
  
  
  return "\n                , <span class='i18n' data-i18n-id='i18n_fully_defined'>Fully defined</span>\n            ";
  }

function program11(depth0,data) {
  
  
  return "\n                , <span class='i18n' data-i18n-id='i18n_active'>Active</span>\n            ";
  }

function program13(depth0,data) {
  
  
  return "\n                , <span class='i18n' data-i18n-id='i18n_inactive'>Inactive</span>\n            ";
  }

function program15(depth0,data) {
  
  
  return "\n            ";
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                . Descendants count, Stated: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedDescendantsString)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " concepts, Inferred: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.inferredDescendantsString)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " concepts.\n            ";
  return buffer;
  }

  buffer += "<table class='table table-default' >\n    <tr\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            >\n        <td>\n            <h4>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                <span ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </h4>\n            <br>SCTID: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.active), true, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.active), true, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = (helper = helpers.if_undefined || (depth0 && depth0.if_undefined),options={hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedDescendantsString), options) : helperMissing.call(depth0, "if_undefined", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedDescendantsString), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n        <td>\n            <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                <table border='1'><tr><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr><tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.effectiveTime)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr></table>\n                \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\n            &nbsp;\n            <span class=\"pull-right\">\n                <div class=\"dropdown\">\n                    <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenu1-details\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                        <i class=\"glyphicon glyphicon-export pull-right\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-icon-details\"></i>\n                    </button>\n                    <ul class=\"dropdown-menu small pull-right\" role=\"menu\" aria-labelledby=\"dropdownMenu1-details\">\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-sctid-details\">Copy ConceptId</a></li>\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-term-details\">Copy term</a></li>\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-sctid-term-details\">Copy ConceptId + term</a></li>\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-link-details\">Copy Link to share</a></li>\n                    </ul>\n                </div>\n            </span>\n            <!--<button type=\"button\" id=\"share-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-link more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"-->\n                    <!--<form><input class='form-control' id='share-field-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' value='";
  if (helper = helpers.dataContentValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dataContentValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "?perspective=full&conceptId1="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&edition=";
  if (helper = helpers.edition) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.edition); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&release=";
  if (helper = helpers.release) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.release); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&server=";
  if (helper = helpers.server) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.server); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&langRefset=";
  if (helper = helpers.langRefset) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.langRefset); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></form><br>Copy the concept link (e.g. CTRL-C) to save and share a reference to this concept.-->\n                    <!--\" data-html=\"true\"><i class=\"glyphicon glyphicon-share-alt\"></i></button>-->\n            <span class=\"pull-right\">\n               <div class=\"phoca-flagbox\" style=\"width:40px;height:40px\">\n                   <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n               </div>\n            </span>\n        </td>\n\n    </tr>\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/children-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <tr><td draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n    ";
  return buffer;
  }

  buffer += "<div>\n    <table class='table table-bordered'>\n        <thead>\n        <tr>\n            <th>\n                <span class='i18n' data-i18n-id='i18n_children'>Children</span>\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n</div>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.childrenResult), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tbody>\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  
  return "\n                <th>SCTID</th>\n            ";
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <tr class='";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000003001", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000003001", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.effectiveTime), ((stack1 = (depth1 && depth1.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.effectiveTime), ((stack1 = (depth1 && depth1.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000003001", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000003001", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.preferred), {hash:{},inverse:self.program(27, program27, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        &nbsp;&nbsp;&nbsp;";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth1 && depth1.options)),stack1 == null || stack1 === false ? stack1 : stack1.showIds), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    <td>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.preferred), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                        <table border='1'><tr><th style='padding: 3px;'>DescriptionId</th><th style='padding: 3px;'>Type</th><th style='padding: 3px;'>Language</th><th style='padding: 3px;'>Case Significance</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                                <tr><td style='padding: 3px;'>";
  if (helper = helpers.descriptionId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>"
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.lang) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lang); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>"
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ics)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.ics)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                        </table>\n                        \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\n                    </td>\n                </tr>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " fsn-row";
  }

function program6(depth0,data) {
  
  
  return " synonym-row";
  }

function program8(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return " danger";
  }

function program12(depth0,data) {
  
  
  return " highlightEffectiveTime";
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                            <span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_fsn", "FSN", options) : helperMissing.call(depth0, "i18n", "i18n_fsn", "FSN", options)))
    + "\">F</span>\n                        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000013009", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000013009", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                <span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_synonym", "Synonym", options) : helperMissing.call(depth0, "i18n", "i18n_synonym", "Synonym", options)))
    + "\">S</span>\n                            ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000550004", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000550004", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                    <span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_definition", "Definition", options) : helperMissing.call(depth0, "i18n", "i18n_definition", "Definition", options)))
    + "\">D</span>\n                                ";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000003001", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000003001", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                &nbsp;<span class=\"glyphicon glyphicon-star-empty\" rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_preferred", "Preferred", options) : helperMissing.call(depth0, "i18n", "i18n_preferred", "Preferred", options)))
    + "\"></span>\n                            ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                &nbsp;<span class=\"glyphicon glyphicon-star\" rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_preferred", "Preferred", options) : helperMissing.call(depth0, "i18n", "i18n_preferred", "Preferred", options)))
    + "\"></span>\n                            ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.acceptable), {hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                &nbsp;<span rel=\"tooltip-right\" title=\""
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_acceptable", "Acceptable", options) : helperMissing.call(depth0, "i18n", "i18n_acceptable", "Acceptable", options)))
    + "\">&#10004;</span></span>\n                            ";
  return buffer;
  }

function program30(depth0,data) {
  
  
  return "\n                                &nbsp;&nbsp;&nbsp;\n                            ";
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <td>";
  if (helper = helpers.descriptionId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.descriptionId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    ";
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                            <span class='i18n' data-i18n-id='i18n_preferred'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_preferred", "Preferred", options) : helperMissing.call(depth0, "i18n", "i18n_preferred", "Preferred", options)))
    + "</span>\n                        ";
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.acceptable), {hash:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program37(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                <span class='i18n' data-i18n-id='i18n_acceptable'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_acceptable", "Acceptable", options) : helperMissing.call(depth0, "i18n", "i18n_acceptable", "Acceptable", options)))
    + "</span>\n                            ";
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                <span class='i18n' data-i18n-id='i18n_not_acceptable'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_not_acceptable", "Not acceptable", options) : helperMissing.call(depth0, "i18n", "i18n_not_acceptable", "Not acceptable", options)))
    + "</span>\n                            ";
  return buffer;
  }

  buffer += "<table class='table table-bordered' id = '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descriptions-panel-table'>\n    <thead>\n        <tr>\n           <th colspan=\"2\" class=\"text-center\">"
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.longLangName), options) : helperMissing.call(depth0, "removeSemtag", (depth0 && depth0.longLangName), options)))
    + "</th>\n        </tr>\n        <tr>\n            <th><span class='i18n' data-i18n-id='i18n_term'>Term</span></th>\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.showIds), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <th><span class='i18n' data-i18n-id='i18n_acceptability'>Acceptability</span>&nbsp;&nbsp;";
  if (helper = helpers.languageName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.languageName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</th>\n        </tr>\n    </thead>\n    <tbody>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.allDescriptions), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n</table>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/diagram.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\" style=\"max-width: 100%;\">\n    <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagram-toolbar\" class=\"row\">\n        <div class=\"row\" style=\"margin: 15px;\">\n            <div class=\"btn-toolbar pull-right\" role=\"toolbar\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\" style=\"margin-right: 5px;\">\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-stated-button-d\">Stated</button>\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inferred-button-d\">Inferred</button>\n                </div>\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-download-button\" type=\"button\" class=\"btn btn-primary btn-sm disabled\" style=\"display: block;\">Download</button>\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-progress-button\" type=\"button\" class=\"btn btn-warning btn-sm disabled\" style=\"display: none;\">Generating downloadable files <span class='glyphicon glyphicon-refresh icon-spin'></span></button>\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-png-button\" type=\"button\" class=\"btn btn-success btn-sm\" style=\"display: none;\"><span class=\"glyphicon glyphicon-picture\"></span> PNG</button>\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-svg-button\" type=\"button\" class=\"btn btn-success btn-sm\" style=\"display: none;\"><span class=\"glyphicon glyphicon-tint\"></span> SVG</button>\n            </div>\n        </div>\n    </div>\n    <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-diagram-body\" class=\"row\" style=\"overflow: auto; width: 1000;\">\n\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/details/rels-panel.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            <tr><td colspan='4'><span class='text-muted'>No relationships</span></td></tr>\n        ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.relationships), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(9, program9, data, depth2),fn:self.programWithDepth(7, program7, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <tr class='inferred-rel\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.effectiveTime), ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.effectiveTime), ((stack1 = (depth2 && depth2.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            '>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                    </td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    <td>";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.charType)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000010007", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.charType)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000010007", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                                <table border='1'><tr><th style='padding: 3px;'>TypeId</th><th style='padding: 3px;'>TargetId</th><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                                    <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                                </table>\n                                \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\n                </td>\n                </tr>\n            ";
  return buffer;
  }
function program7(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.inferredParents), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.inferredParents), options)))
    + "\n                ";
  return buffer;
  }

function program9(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.inferredRoles), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.inferredRoles), options)))
    + "\n                ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\n                                 highlightEffectiveTime\n                            ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <td><span class='i18n' data-i18n-id='i18n_stated'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_stated", "Stated", options) : helperMissing.call(depth0, "i18n", "i18n_stated", "Stated", options)))
    + "</span>\n                    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.charType)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000011006", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.charType)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000011006", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        <td><span class='i18n' data-i18n-id='i18n_inferred'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_inferred", "Inferred", options) : helperMissing.call(depth0, "i18n", "i18n_inferred", "Inferred", options)))
    + "</span>\n                        ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        <td><span class='i18n' data-i18n-id='i18n_other'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_other", "Other", options) : helperMissing.call(depth0, "i18n", "i18n_other", "Other", options)))
    + "</span>\n                        ";
  return buffer;
  }

function program28(depth0,data) {
  
  
  return "\n    ";
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), {hash:{},inverse:self.noop,fn:self.programWithDepth(31, program31, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program31(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(32, program32, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program32(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(35, program35, data, depth2),fn:self.programWithDepth(33, program33, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), 116680003, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <tr class='stated-rel\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.effectiveTime), ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.highlightByEffectiveTime), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            '>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    <td>";
  if (helper = helpers.groupId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.groupId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.charType)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000010007", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.charType)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "900000000000010007", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                        <table border='1'><tr><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                            <tr><td style='padding: 3px;'>";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                        </table>\n                        \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\n                </td>\n                </tr>\n            ";
  return buffer;
  }
function program33(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.statedParents), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.statedParents), options)))
    + "\n                ";
  return buffer;
  }

function program35(depth0,data,depth3) {
  
  var buffer = "", helper, options;
  buffer += "\n                    "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, depth0, (depth3 && depth3.statedRoles), options) : helperMissing.call(depth0, "push", depth0, (depth3 && depth3.statedRoles), options)))
    + "\n                ";
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program41(depth0,data) {
  
  
  return "\n    <p>No additional relationships</p>\n";
  }

function program43(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <table class='table table-bordered'>\n        <thead>\n        <tr>\n            <th><span class='i18n' data-i18n-id='i18n_type'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_type", "Type", options) : helperMissing.call(depth0, "i18n", "i18n_type", "Type", options)))
    + "</span></th>\n            <th><span class='i18n' data-i18n-id='i18n_destination'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_destination", "Destination", options) : helperMissing.call(depth0, "i18n", "i18n_destination", "Destination", options)))
    + "</span></th>\n            <th><span class='i18n' data-i18n-id='i18n_char_type'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_char_type", "CharType", options) : helperMissing.call(depth0, "i18n", "i18n_char_type", "CharType", options)))
    + "</span></th>\n        </tr>\n        </thead>\n        <tbody>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.additionalRels), {hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tbody>\n    </table>\n";
  return buffer;
  }
function program44(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program45(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <tr>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(39, program39, data),fn:self.program(37, program37, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    <td>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                    <td><span class='i18n' data-i18n-id='i18n_additional'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_additional", "Additional", options) : helperMissing.call(depth0, "i18n", "i18n_additional", "Additional", options)))
    + "</span>\n                        <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                        <table border='1'><tr><th style='padding: 3px;'>Modifier</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                            <tr><td style='padding: 3px;'>";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                        </table>\n                        \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i></button>\n                    </td>\n                </tr>\n            ";
  return buffer;
  }

  buffer += "<table class='table table-bordered'>\n    <thead>\n    <tr>\n        <th><span class='i18n' data-i18n-id='i18n_type'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_type", "Type", options) : helperMissing.call(depth0, "i18n", "i18n_type", "Type", options)))
    + "</span></th>\n        <th><span class='i18n' data-i18n-id='i18n_destination'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_destination", "Destination", options) : helperMissing.call(depth0, "i18n", "i18n_destination", "Destination", options)))
    + "</span></th>\n        <th><span class='i18n' data-i18n-id='i18n_group'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_group", "Group", options) : helperMissing.call(depth0, "i18n", "i18n_group", "Group", options)))
    + "</span></th>\n        <th><span class='i18n' data-i18n-id='i18n_char_type'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_char_type", "CharType", options) : helperMissing.call(depth0, "i18n", "i18n_char_type", "CharType", options)))
    + "</span></th>\n    </tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.relationships), "undefined", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.relationships), "undefined", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.statedRelationships), "undefined", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </tbody>\n</table>\n\n";
  stack1 = (helper = helpers.if_undefined || (depth0 && depth0.if_undefined),options={hash:{},inverse:self.program(43, program43, data),fn:self.program(41, program41, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.additionalRels), options) : helperMissing.call(depth0, "if_undefined", (depth0 && depth0.additionalRels), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/expression.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"\" style=\"margin-top: 20px;\">Pre-coordinated Expression (*)&nbsp;&nbsp;&nbsp;&nbsp;<small><i class=\"glyphicon glyphicon-export\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-pre-coordinated-expression\"></i></small></p>\n<div class=\"expression-code\" style=\"margin-top: 10px; padding: 10px;\">";
  if (helper = helpers.preCoordinatedExpressionHtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.preCoordinatedExpressionHtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<p class=\"\" style=\"margin-top: 20px;\">Expression from Stated Concept Definition (*)&nbsp;&nbsp;&nbsp;&nbsp;<small><i class=\"glyphicon glyphicon-export\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-stated-expression\"></i></small></p>\n<div class=\"expression-code\" style=\"margin-top: 10px; padding: 10px;\">";
  if (helper = helpers.statedExpressionHtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statedExpressionHtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<p class=\"\" style=\"margin-top: 20px;\">Expression from Inferred Concept Definition (*)&nbsp;&nbsp;&nbsp;&nbsp;<small><i class=\"glyphicon glyphicon-export\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-inferred-expression\"></i></small></p>\n<div class=\"expression-code\" style=\"margin-top: 10px; padding: 10px;\">";
  if (helper = helpers.inferredExpressionHtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.inferredExpressionHtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<br><br>\n<div class=\"well small\">\n    <p>(*) The expressions are generated according to the ABNF syntax found in the \"SNOMED CT Compositional Grammar Specification and Guide\" (<a href=\"http://snomed.org/compgrammar\" target=\"_blank\">http://snomed.org/compgrammar</a>)</p>\n    <p>SNOMED CT Compositional Grammar is a lightweight syntax for the representation of SNOMED CT expressions. SNOMED CT expressions are used in Electronic Health Records (EHRs) to represent clinical meanings in a way that enables automatic interpretation. They are also carried in messages, used to define precoordinated concepts and used to represent links between SNOMED CT and other terminologies.</p>\n    <p>These expressions are generated as an example from the published concept definition, a Pre-coordinated Expression is direct reference to the concept, and Post-coordinated expressions are generated from the stated or inferred relationships. In a Sufficiently Defined concept, all three will be equivalent.</p>\n</div>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/attributes.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "-empty";
  }

function program5(depth0,data) {
  
  
  return "\n            &nbsp;&nbsp;\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            &equiv;\n        ";
  }

  buffer += "<h4 data-droppable=\"true\" ondrop=\"dropC(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\">\n    <span class=\"pull-right\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\" style=\"padding: 0px;\">\n                <i class=\"glyphicon glyphicon-export pull-right\" style=\"color: white;\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-icon\"></i>\n            </button>\n            <ul class=\"dropdown-menu small\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-sctid\">Copy ConceptId</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-term\">Copy term</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-sctid-term\">Copy ConceptId + term</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-link\">Copy Link to share</a></li>\n            </ul>\n        </div>\n    </span>\n    <span class=\"pull-right\">\n        <a href=\"javascript:void(0);\" style=\"font-size: 20px; color: white; padding: 5px;\">\n            <span data-conceptId=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"glyphicon glyphicon-star";
  stack1 = (helper = helpers.if_fav || (depth0 && depth0.if_fav),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), options) : helperMissing.call(depth0, "if_fav", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\n        </a>\n    </span>\n    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\"  draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <span class=\"badge alert-warning\">\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </span>\n    </a>\n    &nbsp;&nbsp;\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    <span class=\"pull-right\">\n       <div class=\"phoca-flagbox\" style=\"width:40px;height:40px\">\n           <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n       </div>\n    </span>\n</h4>\n\n<h5>SCTID: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br><br><div id=\"copy-content\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " | "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " |</div></h5>\n\n<script type=\"text/javascript\">\n// inspired by this: https://www.lucidchart.com/techblog/2014/12/02/definitive-guide-copying-pasting-javascript/\n//\ndocument.addEventListener(\"copy\", copyHandler, false);\nfunction copyHandler(e) {\n  if(window.getSelection().isCollapsed) {\n	  var copyContent = document.getElementById(\"copy-content\");\n	  e.clipboardData.setData('text/plain', copyContent.innerHTML);\n	  e.preventDefault();\n  }\n}\n</script>\n\n<div id=\"home-descriptions-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/children.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        <span data-i18n-id=\"i18n_no_children\" class=\"text-muted i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_children", "No Children", options) : helperMissing.call(depth0, "i18n", "i18n_no_children", "No Children", options)))
    + "</span>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul style='list-style-type: none; padding-left: 15px;'>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.childrenResult), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    ";
  return buffer;
  }
function program5(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program6(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\n                        <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth2 && depth2.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", (depth2 && depth2.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i></button>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(16, program16, data, depth1),fn:self.programWithDepth(14, program14, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                            <span class=\"treeLabel selectable-row\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                        </a>\n                    </li>\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafInferred), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafInferred), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program8(depth0,data) {
  
  
  return "minus";
  }

function program10(depth0,data) {
  
  
  return "chevron-right";
  }

function program12(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafStated), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafStated), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program14(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program16(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                            <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\n                                <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                            </div>\n                        ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        <span data-i18n-id=\"i18n_no_children\" class=\"text-muted i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_children", "No children", options) : helperMissing.call(depth0, "i18n", "i18n_no_children", "No children", options)))
    + "</span>\n    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 30, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length), 30, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-showChildren\" class=\"btn btn-link\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.childrenResult)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_children\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_children", "children", options) : helperMissing.call(depth0, "i18n", "i18n_children", "children", options)))
    + "</span></button>\n        ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <ul style='list-style-type: none; padding-left: 15px;'>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.childrenResult), {hash:{},inverse:self.noop,fn:self.programWithDepth(27, program27, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        ";
  return buffer;
  }
function program27(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(28, program28, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program28(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\n                            <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth2 && depth2.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", (depth2 && depth2.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i></button>\n                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(31, program31, data, depth1),fn:self.programWithDepth(29, program29, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                                <span class=\"treeLabel selectable-row\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                            </a>\n                        </li>\n                    ";
  return buffer;
  }
function program29(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                            ";
  return buffer;
  }

function program31(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\n                            ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\n                                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                                </div>\n                            ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayChildren), {hash:{},inverse:self.program(20, program20, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/parents.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(4, program4, data, depth0),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.statedParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.statedParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n        <span class='text-muted'>No parents</span>\n    ";
  }

function program4(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul style='list-style-type: none; padding-left: 2px;'>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.statedParents), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    ";
  return buffer;
  }
function program5(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <li class=\"treeLabel\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                <!--<span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='text-warning' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>-->\n                    <!--";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), 0, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n                <!--</span>&nbsp;&rArr;&nbsp;-->\n                    <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' data-first=\"true\" data-ind=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i></button>\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(17, program17, data, depth1),fn:self.programWithDepth(15, program15, data, depth1),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "hasCountryIcon", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(23, program23, data, depth2),fn:self.programWithDepth(21, program21, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        </span>\n                    </a>\n                </li>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\n                        <!--"
    + escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), 0, options) : helperMissing.call(depth0, "substr", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), 0, options)))
    + "-->\n                    <!--";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n                        <!--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-->\n                    <!--";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "minus";
  }

function program12(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "9999999999", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "9999999999", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program13(depth0,data) {
  
  
  return "chevron-right";
  }

function program15(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n                        <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program17(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += "\n                        <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&equiv;</span>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\n                            <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                        </div>\n                    ";
  return buffer;
  }

function program21(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n                            <span id='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = (depth3 && depth3.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='sct-primitive-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                        ";
  return buffer;
  }

function program23(depth0,data,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n                            <span id='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + escapeExpression(((stack1 = (depth3 && depth3.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='sct-defined-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                        ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(26, program26, data, depth0),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.inferredParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.inferredParents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program26(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul style='list-style-type: none; padding-left: 2px; padding-top: 0px;'>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.inferredParents), {hash:{},inverse:self.noop,fn:self.programWithDepth(27, program27, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n    ";
  return buffer;
  }
function program27(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <li class=\"treeLabel\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                <!--<span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='text-warning' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>-->\n                    <!--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-->\n                <!--</span>&nbsp;&rArr;&nbsp;-->\n                    <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), "138875005", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' data-first=\"true\" data-ind=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i></button>\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(17, program17, data, depth1),fn:self.programWithDepth(15, program15, data, depth1),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "hasCountryIcon", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(23, program23, data, depth2),fn:self.programWithDepth(21, program21, data, depth2),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        </span>\n                    </a>\n                </li>\n            ";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(25, program25, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["views/conceptDetailsPlugin/tabs/home/roles.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.statedRoles), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.statedRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.statedRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <!--<br>-->\n            ";
  stack1 = (helper = helpers.eqLastGroup || (depth0 && depth0.eqLastGroup),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "eqLastGroup", (depth0 && depth0.groupId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            &nbsp;<span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-attribute-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "</span>&nbsp;&rarr;&nbsp;\n\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "\n            </span><br>\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                </div>\n                "
    + escapeExpression((helper = helpers.setLastGroup || (depth0 && depth0.setLastGroup),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "setLastGroup", (depth0 && depth0.groupId), options)))
    + "\n                "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "random", options) : helperMissing.call(depth0, "lastColor", "random", options)))
    + "\n                <div ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.groupId), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\n            ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "style=\"border: 1px solid darkgrey; border-radius: 4px; padding: 3px; background-color: white; margin: 5px;\"";
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-primitive-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-defined-concept-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n            <span class='i18n text-muted' data-i18n-id='i18n_no_attributes'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_attributes", "No relationships", options) : helperMissing.call(depth0, "i18n", "i18n_no_attributes", "No relationships", options)))
    + "</span>\n        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.inferredRoles), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.inferredRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.inferredRoles)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <!--<br>inferred-->\n                    ";
  stack1 = (helper = helpers.eqLastGroup || (depth0 && depth0.eqLastGroup),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "eqLastGroup", (depth0 && depth0.groupId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    &nbsp;<span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "' draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='sct-attribute-compact' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                    "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "</span>&nbsp;&rarr;&nbsp;\n            <span draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ' data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "</span><br>\n        ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        </div>\n                        "
    + escapeExpression((helper = helpers.setLastGroup || (depth0 && depth0.setLastGroup),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), options) : helperMissing.call(depth0, "setLastGroup", (depth0 && depth0.groupId), options)))
    + "\n                        "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "random", options) : helperMissing.call(depth0, "lastColor", "random", options)))
    + "\n                        <div ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.groupId), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.groupId), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                        <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\n                    ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                        <span style='background-color: "
    + escapeExpression((helper = helpers.lastColor || (depth0 && depth0.lastColor),options={hash:{},data:data},helper ? helper.call(depth0, "get", options) : helperMissing.call(depth0, "lastColor", "get", options)))
    + "'></span>\n                    ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\n                     sct-primitive-concept-compact\n                ";
  }

function program24(depth0,data) {
  
  
  return "\n                     sct-defined-concept-compact\n                ";
  }

  buffer += "<div style='line-height: 100%;'>\n    "
    + escapeExpression((helper = helpers.setLastGroup || (depth0 && depth0.setLastGroup),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.null), options) : helperMissing.call(depth0, "setLastGroup", (depth0 && depth0.null), options)))
    + "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.selectedView), "stated", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/members.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <thead>\n        <tr>\n            <th><span data-i18n-id=\"i18n_term\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_term", "Term", options) : helperMissing.call(depth0, "i18n", "i18n_term", "Term", options)))
    + "</span></th>\n            <th><span data-i18n-id=\"i18n_conceptId\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_conceptId", "Concept Id", options) : helperMissing.call(depth0, "i18n", "i18n_conceptId", "Concept Id", options)))
    + "</span></th>\n        </tr>\n    </thead>\n";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class=\"member-row\">\n            <td data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </td>\n            <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\n                <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span></button>\n            </td>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <td class=\"text-muted\" class=\"text-center\" colspan=\"2\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_members\" class=\"i18n\">members</span></td>\n            ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\n                    </td>\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <td class=\"text-center\" colspan=\"2\">\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\n                    </td>\n                ";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.skipTo), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.skipTo), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.members), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <tr class=\"more-row\">\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), "asd", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), "asd", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tr>\n</tbody>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/references.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div style=\"margin-top: 10px;\" class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3 style=\"font-size: 12px\" class=\"panel-title\">\n                <a style=\"text-decoration: inherit;\" data-toggle=\"collapse\" data-parent=\"#references-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-accordion\" href=\"#references-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                    <span id=\"references-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-span\" class=\"references glyphicon glyphicon-";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), 10, options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.length), 10, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span>\n                </a>&nbsp;"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0[0])),stack1 == null || stack1 === false ? stack1 : stack1.relationship)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " (";
  if (helper = helpers.length) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.length); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")\n            </h3>\n        </div>\n        <div id=\"references-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"panel-collapse collapse ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.length), 10, options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.length), 10, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <div class=\"panel-body\">\n                <table class=\"table table-hover table-bordered\">\n                    <thead>\n                    <tr>\n                        <th>Term</th>\n                        <th>ConceptId</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.programWithDepth(10, program10, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "chevron-right";
  }

function program4(depth0,data) {
  
  
  return "chevron-down";
  }

function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "in";
  }

function program10(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <tr>\n                            <td>\n                                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\n                                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                            </td>\n                            <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                        </tr>\n                    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\n                                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                                    </div>\n                                ";
  return buffer;
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\n        <!--<tr>-->\n            <!--<td>-->\n                <!--<span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>-->\n                <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n                <!--";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-->\n            <!--</td>-->\n            <!--<td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>-->\n            <!--<td>-->\n                <!--";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.relationships), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n\n                <!--";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.statedRelationships), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n            <!--</td>-->\n        <!--</tr>-->\n    <!--";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\n                    <!--<div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">-->\n                        <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>-->\n                    <!--</div>-->\n                <!--";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n                    <!--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-->\n                <!--";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.groups), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<!--<thead>-->\n    <!--<tr>-->\n        <!--<th>Term</th>-->\n        <!--<th>ConceptId</th>-->\n        <!--<th>Relationships Type</th>-->\n    <!--</tr>-->\n<!--</thead>-->\n<!--<tbody>-->\n    <!--";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n</tbody>";
  return buffer;
  });

this["JST"]["views/conceptDetailsPlugin/tabs/refset.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLE_REFSET", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLE_REFSET", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simple", true, options) : helperMissing.call(depth0, "refset", "simple", true, options)))
    + "\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLEMAP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLEMAP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n            "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simplemap", true, options) : helperMissing.call(depth0, "refset", "simplemap", true, options)))
    + "\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "ATTRIBUTE_VALUE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "ATTRIBUTE_VALUE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "attr", true, options) : helperMissing.call(depth0, "refset", "attr", true, options)))
    + "\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                "
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "assoc", true, options) : helperMissing.call(depth0, "refset", "assoc", true, options)))
    + "\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLE_REFSET", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLE_REFSET", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </td>\n            <td>";
  if (helper = helpers.otherValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n                </div>\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                    <table border='1'>\n                        <tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                        <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                    </table>\"data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\n                </button>\n            </td>\n        </tr>\n        ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program16(depth0,data) {
  
  
  return "danger";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\n        </tbody>\n    ";
  }

function program24(depth0,data) {
  
  
  return "\n        <tr><td><span class='i18n text-muted' data-i18n-id='i18n_no_memberships'>No memberships</span></td></tr>\n        </tbody>\n    ";
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "SIMPLEMAP", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "SIMPLEMAP", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </td>\n            <td class=\"refset-simplemap\" data-refsetId=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-conceptId=\"";
  if (helper = helpers.otherValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.otherValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.otherValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n            <td>\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n                </div>\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                    <table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                        <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                    </table>\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\n                </button>\n            </td>\n        </tr>\n        ";
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"  data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "ATTRIBUTE_VALUE", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "ATTRIBUTE_VALUE", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </td>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td>\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n                </div>\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                    <table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                        <tr><td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n                    </table>\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\n                </button>\n            </td>\n        </tr>\n        ";
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span  class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\"  data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span  class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "ASSOCIATION", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.type), "ASSOCIATION", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program39(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class='";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </td>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(42, program42, data),fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td>\n                <div class=\"phoca-flagbox\" style=\"width:35px;height:35px\">\n                    <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n                </div>\n                <button type=\"button\" class=\"btn btn-link unobtrusive-icon more-fields-button pull-right\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"\n                    <table border='1'><tr><th style='padding: 3px;'>RefsetId</th><th style='padding: 3px;'>Effective Time</th><th style='padding: 3px;'>ModuleId</th></tr>\n                        <tr>\n                            <td style='padding: 3px;'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.refset)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.effectiveTime) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.effectiveTime); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td><td style='padding: 3px;'>";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                            </td>\n                        </tr>\n                    </table>\n                    \" data-html=\"true\"><i class=\"glyphicon glyphicon-info-sign\"></i>\n                </button>\n            </td>\n        </tr>\n        ";
  return buffer;
  }
function program40(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart = \"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.cidValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

  buffer += escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simple", false, options) : helperMissing.call(depth0, "refset", "simple", false, options)))
    + "\n"
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "simplemap", false, options) : helperMissing.call(depth0, "refset", "simplemap", false, options)))
    + "\n"
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "attr", false, options) : helperMissing.call(depth0, "refset", "attr", false, options)))
    + "\n"
    + escapeExpression((helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},data:data},helper ? helper.call(depth0, "assoc", false, options) : helperMissing.call(depth0, "refset", "assoc", false, options)))
    + "\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div style=\"margin: 10px;\">\n    <a class=\"btn btn-primary btn-sm pull-right\" href=\"https://mapping.ihtsdotools.org/#/record/conceptId/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/autologin?refSetId=P447562003\" target=\"_blank\" role=\"button\">Open maps for this concept</a>\n</div>\n\n<table class='table table-hover'>\n    <thead><tr>\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_simple_refset_memberships'>Simple Refsets Membership</span></th>\n    </tr></thead>\n<tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "simple", "get", options) : helperMissing.call(depth0, "refset", "simple", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n\n<table class='table table-hover'>\n    <thead><tr>\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_simple_map_refset_name'>Simple Map Refset name</span></th>\n    </tr></thead>\n<tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "simplemap", "get", options) : helperMissing.call(depth0, "refset", "simplemap", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n\n<table class='table table-hover'>\n    <thead><tr>\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_attribute_value_refset_name'>Attribute Value Refset name</span></th>\n    </tr></thead>\n<tbody>\n\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "attr", "get", options) : helperMissing.call(depth0, "refset", "attr", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n\n<table class='table table-hover'>\n    <thead><tr>\n        <th colspan=\"3\"><span class='i18n' data-i18n-id='i18n_association_refset_name'>Association Refset name</span></th>\n    </tr></thead>\n<tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.memberships), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.refset || (depth0 && depth0.refset),options={hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, "assoc", "get", options) : helperMissing.call(depth0, "refset", "assoc", "get", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/andCriteria.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"addedCriteria\">\n    <div class=\"form-group text-center\" style=\"width: 75px;\">\n        AND\n    </div>\n    <div class=\"form-group\">\n        <div class=\"dropdown\">\n            <button style=\"width: 147px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <span class=\"addSelectCriteria\">";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOf</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOrSelfOf</a></li>\n                <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">ancestorOf</a></li>-->\n                <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">ancestorOrSelfOf</a></li>-->\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">self</a></li>\n                <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">childrenOf</a></li>-->\n                <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">parentsOf</a></li>-->\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">isMemberOf</a></li>\n                <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">hasDescription</a></li>-->\n                <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">hasRelationship</a></li>-->\n            </ul>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control andCriteriaConcept\" placeholder=\"Drag a concept here\" readonly>\n    </div>\n    <div class=\"form-group\"><button type=\"button\" class=\"btn btn-link glyphicon glyphicon-remove removeCriteria\" style=\"text-decoration: none;\"></button></div>\n    <div class=\"form-group\"><button type=\"button\" class=\"btn btn-link glyphicon glyphicon-plus addCriteria\" style=\"text-decoration: none;\"></button></div>\n</div>";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/criteria.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), 0, options) : helperMissing.call(depth0, "if_eq", (data == null || data === false ? data : data.index), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"constraint\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-criteria=\"";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <!--";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;-->\n                <div style=\"display: inline-block;\" class=\"dropdown\">\n                    <button style=\"text-decoration: inherit; color: inherit; display: inline-block; padding: 0px;\" class=\"btn btn-link dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                        ";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li role=\"presentation\"><a class=\"criteriaDropdownOption\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOf</a></li>\n                        <li role=\"presentation\"><a class=\"criteriaDropdownOption\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOrSelfOf</a></li>\n                        <li role=\"presentation\"><a class=\"criteriaDropdownOption\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">self</a></li>\n                        <li role=\"presentation\"><a class=\"criteriaDropdownOption\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">isMemberOf</a></li>\n                    </ul>\n                </div>\n                <span style=\"color: forestgreen;\">";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>&nbsp;\n                |\n                <span style=\"color: firebrick;\">";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                |\n            </span>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            ";
  }

function program4(depth0,data) {
  
  
  return "\n                <br>\n                <div style=\"margin-left: 45px; display: inline-block\">AND</div>\n            ";
  }

  buffer += "<li data-modifier=\"";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item clearfix query-condition\">\n    <span class=\"text-muted line-number\" style=\"font-size: 200%;\"></span>&nbsp;&nbsp;\n    <span style=\"position: relative; top: -5px;\">\n        <div style=\"width: 45px;display: inline-block;\">";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ",</div>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.criterias), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </span>\n    <button class='pull-right btn btn-link removeLi' style=\"position: relative; top: 3px;\">\n        <i class='glyphicon glyphicon-remove'></i>\n    </button>\n </li>";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <br>\n                    <h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":<span data-htmlValue=\"";
  if (helper = helpers.htmlValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.htmlValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"pull-right btn btn-primary btn-xs loadExample\" style=\"padding: 0px; display: inline-block;\">Load this query</span></h4>\n                    <div style=\"margin: 10px;\">";
  if (helper = helpers.htmlValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.htmlValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n                ";
  return buffer;
  }

  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\n    <div class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\n        <div class='row'>\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong>";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_terminology_content_selection", "Terminology content selections", options) : helperMissing.call(depth0, "i18n", "i18n_terminology_content_selection", "Terminology content selections", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></div>\n            <div class='col-md-6 text-right'>\n                <!--<a class=\"btn btn-link\" href=\"help/topics/creating-queries.html\" target=\"_blank\" title=\"Help\" role=\"button\"><i class='glyphicon glyphicon-question-sign'></i></a>-->\n            </div>\n        </div>\n    </div>\n    <div class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n        <!--<p style=\"margin: 10px;\">Create a query, conditions are evaluated in order:</p>-->\n        <div class=\"row container-fluid\" style=\"margin: 10px;\">\n            <form class=\"form-inline\" role=\"form\">\n                <!--<span>New condition: </span>-->\n                <!--<button type=\"button\" class=\"btn btn-default pull-right\"  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectButton' style=\"margin: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load_query", "Load query", options) : helperMissing.call(depth0, "i18n", "i18n_load_query", "Load query", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>-->\n                <button type=\"button\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-clearButton\" class=\"btn btn-default pull-right\" style=\"margin: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_clear", "Clear", options) : helperMissing.call(depth0, "i18n", "i18n_clear", "Clear", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n                <div class=\"form-group\">\n                    <div class=\"dropdown\">\n                        <button style=\"width: 75px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modifierButton\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                            <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedModifier\">Include</span>\n                            <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modifierButton\">\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"modifier-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">Include</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"modifier-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">Exclude</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"dropdown\">\n                        <button style=\"width: 147px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                            <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedCriteria\">descendantOf</span>\n                            <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOf</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOrSelfOf</a></li>\n                            <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">ancestorOf</a></li>-->\n                            <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">ancestorOrSelfOf</a></li>-->\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">self</a></li>\n                            <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">childrenOf</a></li>-->\n                            <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">parentsOf</a></li>-->\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">isMemberOf</a></li>\n                            <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">hasDescription</a></li>-->\n                            <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">hasRelationship</a></li>-->\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"form-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-conceptField\">\n                    <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedConcept\" placeholder=\"Drag a concept here\" readonly>\n                    <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedType\" placeholder=\"Drag a type here\" readonly>\n                    <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedTarget\" placeholder=\"Drag a destination here\" readonly>\n                    <input type=\"text\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchTerm\" placeholder=\"Type search string\">\n                    <span class=\"dropdown\">\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-formdropdown\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                            <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedForm\">stated</span>\n                            <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-formdropdown\">\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"form-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">stated</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"form-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">inferred</a></li>\n                        </ul>\n                    </span>\n                </div>\n                <div style=\"margin-left: 38px;\" class=\"form-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addCriteriaAnd\"><button type=\"button\" class=\"btn btn-link glyphicon glyphicon-plus addCriteria\" style=\"text-decoration: none;\"></button></div>\n            </form>\n            <form class=\"form-inline\" role=\"form\">\n                <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-primary\"  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addCriteriaButton' style=\"margin: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_add_condition", "Add instruction", options) : helperMissing.call(depth0, "i18n", "i18n_add_condition", "Add instruction", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n                    <!--<button type=\"button\" class=\"btn btn-primary\"  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-cloudResults' style=\"margin: 10px; position: relative;\" title=\"Open Cloud Queries Processor\" data-toggle=\"modal\" data-target=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-cloudModal\"><i class='glyphicon glyphicon-cloud' style=\"position: relative; top: 3px;\"></i> <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-cloudCount\"></span></button>-->\n\n                    <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addmsg\" for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addCriteriaButton\" class=\"small text-danger\"></span>\n                </div>\n            </form>\n            <ul class=\"list-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-listGroup\">\n            </ul>\n            <div class=\"btn btn-success\" style=\"margin: 10px;\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-computeInferredButton'>";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_run_query", "Run query", options) : helperMissing.call(depth0, "i18n", "i18n_run_query", "Run query", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n            <button class=\"btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExamplesModal\" type=\"button\">Examples</button>\n            <button type=\"button\" class=\"btn btn-primary pull-right\"  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-open-grammar' style=\"margin: 10px; position: relative;\" data-toggle=\"modal\" data-target=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-constraintGrammarModal\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_constraint_grammar", "Constraint Grammar", options) : helperMissing.call(depth0, "i18n", "i18n_constraint_grammar", "Constraint Grammar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            <br>\n            <br>\n            ";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_results", "Results", options) : helperMissing.call(depth0, "i18n", "i18n_results", "Results", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":  <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultInfo\" class=\"text-muted small\"></span>\n        </div>\n        <div class=\"row container-fluid\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-output\" style=\"margin: 10px;\">\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th>Concept</th>\n                    <th>Id</th>\n                </tr>\n                </thead>\n                <tbody id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-outputBody\"></tbody>\n                <tfoot>\n                <tr><td colspan=\"2\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-footer\" class=\"text-center text-muted small\"></td></tr>\n                </tfoot>\n            </table>\n            <table id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-output2\" style=\"display: none\">\n                <thead>\n                <tr>\n                    <th>Concept</th>\n                    <th>Id</th>\n                </tr>\n                </thead>\n                <tbody id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-outputBody2\">\n                </tbody>\n            </table>\n\n            <a class=\"btn btn-default\" download=\"results.xls\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-exportXls\" href=\"javascript:void(0);\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_export_results_in_xls", "Export results in XLS", options) : helperMissing.call(depth0, "i18n", "i18n_export_results_in_xls", "Export results in XLS", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <img style=\"height: 23px;\" src=\"img/excel.png\"></a>\n        </div>\n        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n    </div>\n</div>\n<!-- Modals -->\n<div class=\"modal fade\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExamplesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-myCloudModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\" >\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">Terminology content selections examples</h4>\n            </div>\n            <div class=\"modal-body\" style=\"max-height: 450px; overflow: auto;\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.examples), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-constraintGrammarModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"constraintGrammarModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" style=\"max-height: 450px;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-constraintGrammarModalLabel\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_constraint_grammar", "Constraint Grammar", options) : helperMissing.call(depth0, "i18n", "i18n_constraint_grammar", "Constraint Grammar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n            </div>\n            <div class=\"modal-body\" style=\"max-height: 450px; overflow: auto;\">\n                <div class=\"row\">\n                    <div class=\"expression-code col-md-11\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-constraintGrammar\">\n\n                    </div>\n                    <div class=\"col-md-1\">\n                        <i class=\"glyphicon glyphicon-copy pull-right\" style=\"font-size: 20px;cursor: pointer;\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copyConstraint\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn-group pull-left\" role=\"group\" aria-label=\"...\">\n                    <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-full-syntax-button\">Full</button>\n                    <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-brief-syntax-button\">Brief</button>\n                </div>\n                &nbsp;&nbsp;\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/relsCriteria.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li data-modifier=\"";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-criteria=\"";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type-id=\"";
  if (helper = helpers.typeId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-type-term=\"";
  if (helper = helpers.typeTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-target-term=\"";
  if (helper = helpers.targetTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.targetTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-target-id=\"";
  if (helper = helpers.targetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.targetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-form=\"";
  if (helper = helpers.form) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.form); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item clearfix query-condition\">\n    <span class=\"text-muted line-number\" style=\"font-size: 200%;\"></span>&nbsp;&nbsp;\n    <span style=\"position: relative; top: -5px;\">\n        ";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;\n        <span style=\"color: forestgreen;\">";
  if (helper = helpers.typeId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>&nbsp;\n        |\n        <span style=\"color: firebrick;\">"
    + escapeExpression((helper = helpers.isEmptyString || (depth0 && depth0.isEmptyString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.typeTerm), "Any", options) : helperMissing.call(depth0, "isEmptyString", (depth0 && depth0.typeTerm), "Any", options)))
    + "</span>\n        |\n        &nbsp;->&nbsp;\n        <span style=\"color: forestgreen;\">";
  if (helper = helpers.targetId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.targetId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>&nbsp;\n        |\n        <span style=\"color: firebrick;\">"
    + escapeExpression((helper = helpers.isEmptyString || (depth0 && depth0.isEmptyString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.targetTerm), "Any", options) : helperMissing.call(depth0, "isEmptyString", (depth0 && depth0.targetTerm), "Any", options)))
    + "</span>\n        |&nbsp;&nbsp;";
  if (helper = helpers.form) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.form); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </span>\n    <button class='pull-right btn btn-link removeLi' style=\"position: relative; top: 3px;\">\n        <i class='glyphicon glyphicon-remove'></i>\n    </button>\n </li>";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/searchCriteria.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li data-modifier=\"";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-criteria=\"";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-search-term=\"";
  if (helper = helpers.searchTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item clearfix query-condition\">\n    <span class=\"text-muted line-number\" style=\"font-size: 200%;\"></span>&nbsp;&nbsp;\n    <span style=\"position: relative; top: -5px;\">\n        ";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;\n        <span style=\"color: firebrick;\">";
  if (helper = helpers.searchTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </span>\n    <button class='pull-right btn btn-link removeLi' style=\"position: relative; top: 3px;\">\n        <i class='glyphicon glyphicon-remove'></i>\n    </button>\n</li>";
  return buffer;
  });

this["JST"]["views/favorites/body.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <tr>\n                        <td>";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                        <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    </tr>\n                ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n                <tr>\n                    <td>\n                        <span class=\"text-muted\"> No favorites</span>\n                    </td>\n                </tr>\n            ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.concepts), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <tr>\n                        <td>\n                            <a class=\"fav-item\" href=\"javascript:void(0);\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style=\"color: inherit; text-decoration: inherit;\">\n                                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\n                                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                            </a>\n                        </td>\n                        <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                            <a href=\"javascript:void(0);\" style=\"text-decoration: inherit;\">\n                                <span data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class=\"pull-right glyphicon glyphicon-remove-circle\"></span>\n                            </a>\n                        </td>\n                    </tr>\n                ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\n                                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                                    </div>\n                                ";
  return buffer;
  }

  buffer += "<div style=\"margin-top: 10px\" class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <table id=\"tableFavs\" style=\"display: none;\">\n            <thead>\n                <tr>\n                    <td>Term</td>\n                    <td>Concept ID</td>\n                </tr>\n            </thead>\n            <tbody>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.concepts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tbody>\n        </table>\n        <table id=\"\" class=\"table table-hover table-bordered\">\n            <tbody>\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.concepts)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.concepts)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tbody>\n        </table>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["views/favorites/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\n        <div class='row'>\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_favorites'>Favorites</span></strong></div>\n            <!--<div class='col-md-6 text-right'>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resetButton' class='btn btn-link' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-repeat'></i></button>-->\n                <!--&lt;!&ndash;<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>&ndash;&gt;-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>-->\n            <!--</div>-->\n        </div>\n    </div>\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n    </div>\n</div>\n<!--<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>-->\n    <!--<div class='modal-dialog'>-->\n        <!--<div class='modal-content'>-->\n            <!--<div class='modal-header'>-->\n                <!--<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>-->\n                <!--<h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>-->\n            <!--</div>-->\n            <!--<div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>-->\n                <!--<p></p>-->\n            <!--</div>-->\n            <!--<div class='modal-footer'>-->\n                <!--<button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n<!--</div>-->";
  return buffer;
  });

this["JST"]["views/refsetPlugin/body.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\n                    <tr>\n                        <td colspan=\"3\">\n                            <span class=\"text-muted\"> No refsets</span>\n                        </td>\n                    </tr>\n                ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.refsets), {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program4(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <tr>\n                            <td>";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                            <td>\n                                <a class=\"refset-item\" href=\"javascript:void(0);\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style=\"color: inherit; text-decoration: inherit;\">\n                                    <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\n                                    ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                    ";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                                </a>\n                            </td>\n                            <td>\n                                ";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                            </td>\n                        </tr>\n                    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                        <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\n                                            <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                                        </div>\n                                    ";
  return buffer;
  }

  buffer += "<div style=\"margin-top: 10px\" class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <div class=\"row container-fluid\" style=\"max-height: 260px; overflow-y: scroll; margin: 10px;\">\n            <table class=\"table table-hover table-bordered\">\n                <thead>\n                    <tr>\n                        <th>Type</th>\n                        <th>Refset</th>\n                        <th>Members count</th>\n                    </tr>\n                </thead>\n                <tbody>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.refsets)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.refsets)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n        </div>\n        <div class=\"row container-fluid\">\n            <table id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable\" class=\"table table-hover table-bordered\">\n\n            </table>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["views/refsetPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\n        <div class='row'>\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_refsets'>Refsets</span></strong></div>\n        </div>\n    </div>\n    <div ondrop=\"dropF(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["views/refsetPlugin/members.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <thead>\n        <tr>\n            <th colspan=\"2\">Members of ";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " (<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>)</th>\n        </tr>\n        <tr>\n            <th><span data-i18n-id=\"i18n_term\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_term", "Term", options) : helperMissing.call(depth0, "i18n", "i18n_term", "Term", options)))
    + "</span></th>\n            <th><span data-i18n-id=\"i18n_conceptId\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_conceptId", "Concept Id", options) : helperMissing.call(depth0, "i18n", "i18n_conceptId", "Concept Id", options)))
    + "</span></th>\n        </tr>\n    </thead>\n";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr class=\"member-concept-row\">\n            <td>\n                <span class=\"badge alert-warning\" draggable='true' ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>&nbsp;&nbsp;</span>\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </td>\n            <td>";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:22px;height:22px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\n                <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span></button>\n            </td>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <td class=\"text-muted\" class=\"text-center\" colspan=\"2\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_members\" class=\"i18n\">members</span></td>\n            ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.remaining), (depth0 && depth0.returnLimit), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <td class=\"text-center\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers\" colspan=\"2\">\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\n                    </td>\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <td class=\"text-center\" colspan=\"2\">\n                        <button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moreMembers'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining", "remaining", options) : helperMissing.call(depth0, "i18n", "i18n_remaining", "remaining", options)))
    + "</span>)</button>\n                    </td>\n                ";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.skipTo), 0, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.skipTo), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.members), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <tr class=\"more-row\">\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), "asd", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.remaining), "asd", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tr>\n</tbody>";
  return buffer;
  });

this["JST"]["views/searchPlugin/aux.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div style='margin: 5px; height:95%;' class='panel panel-default'>\n    <div class='panel-heading'>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 15px;'><i class='glyphicon glyphicon-bookmark'></i></button>\n        <div class='row'>\n            <div class='col-md-8' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_search'>Search</span></span></strong></div>\n            <div class='col-md-4 text-right'>\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>-->\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\n            </div>\n        </div>\n    </div>\n    <div class='panel-body' style='height:86%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n        <div style=\"display: inline;width: 34%;height: 100%; float: left; border: 1px solid lightgray; border-radius: 4px; padding: 5px; \">\n            <h4><span>Options</span></h4>\n            <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchConfigBar' style='margin-bottom: 10px;'>\n                <!--<nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>-->\n                <!--<ul class=\"list-group\">-->\n                <!--&lt;!&ndash;<li class=\"list-group-item\">&ndash;&gt;-->\n                <!--<li class=\"list-group-item\"><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>Full text search mode</span></button></li>-->\n                <!--<li class=\"list-group-item\"><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>Partial matching search mode</span></button></li>-->\n                <!--<li class=\"list-group-item\"><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>Regular Expressions search mode</span></button></li>-->\n                <!--</ul>-->\n                <div style=\"margin-top: 20px\" class=\"btn-group\">\n                    <button style=\"white-space: normal;\" type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">\n                        <span class='i18n' data-i18n-id='i18n_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_search_mode", "Search Mode", options) : helperMissing.call(depth0, "i18n", "i18n_search_mode", "Search Mode", options)))
    + "</span>: <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchMode\"></span>&nbsp;<span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li>\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_full_text_search_mode", "Full text search mode", options) : helperMissing.call(depth0, "i18n", "i18n_full_text_search_mode", "Full text search mode", options)))
    + "</span></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_partial_match_search_mode", "Partial matching search mode", options) : helperMissing.call(depth0, "i18n", "i18n_partial_match_search_mode", "Partial matching search mode", options)))
    + "</span></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_regex_search_mode", "Regular Expressions search mode", options) : helperMissing.call(depth0, "i18n", "i18n_regex_search_mode", "Regular Expressions search mode", options)))
    + "</span></a>\n                        </li>\n                    </ul>\n                </div>\n                <div style=\"margin-top: 5px\" class=\"btn-group\">\n                    <button style=\"white-space: normal;\" type=\"button\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\">\n                        <span class='i18n' data-i18n-id='i18n_status'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_status", "Status", options) : helperMissing.call(depth0, "i18n", "i18n_status", "Status", options)))
    + "</span>: <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchStatus\"></span>&nbsp;<span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li>\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeOnlyButton' data-i18n-id='i18n_active_only'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_active_only", "Active components only", options) : helperMissing.call(depth0, "i18n", "i18n_active_only", "Active components only", options)))
    + "</a>\n                        </li>\n                        <li>\n                            <a href=\"#\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeInactiveButton' data-i18n-id='i18n_active_and_inactive'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_active_and_inactive", "Active and inactive components", options) : helperMissing.call(depth0, "i18n", "i18n_active_and_inactive", "Active and inactive components", options)))
    + "</a>\n                        </li>\n                        <li>\n                            <a href=\"#\"id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inactiveOnlyButton' data-i18n-id='i18n_inactive_only'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_inactive_only", "Inactive components only", options) : helperMissing.call(depth0, "i18n", "i18n_inactive_only", "Inactive components only", options)))
    + "</a>\n                        </li>\n                    </ul>\n                </div>\n                <div style=\"margin-top: 5px; \" class=\"checkbox\">\n                    <label>\n                        <input id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-groupConcept\" type=\"checkbox\"><span class='i18n' data-i18n-id='i18n_group_by_concept'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_group_by_concept", "Group by concept", options) : helperMissing.call(depth0, "i18n", "i18n_group_by_concept", "Group by concept", options)))
    + "</span>\n                    </label>\n                </div>\n                <!--<ul class='nav navbar-nav navbar-left'>-->\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\n                <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navSearchModeLabel'></span> <b class='caret'></b></a>-->\n                <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>Full text search mode</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>Partial matching search mode</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>Regular Expressions search mode</span></button></li>-->\n                <!--</ul>-->\n                <!--</li>-->\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\n                <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navLanguageLabel'></span> <b class='caret'></b></a>-->\n                <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-danishLangButton'><span class='i18n' data-i18n-id='i18n_danish_stemmer'>Danish language stemmer</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-englishLangButton'><span class='i18n' data-i18n-id='i18n_english_stemmer'>English language stemmer</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-spanishLangButton'><span class='i18n' data-i18n-id='i18n_spanish_stemmer'>Spanish language stemmer</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-swedishLangButton'><span class='i18n' data-i18n-id='i18n_swedish_stemmer'>Swedish language stemmer</span></button></li>-->\n                <!--</ul>-->\n                <!--</li>-->\n                <!--<li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>-->\n                <!--<a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navStatusFilterLabel'></span> <b class='caret'></b></a>-->\n                <!--<ul class='dropdown-menu' role='menu' style='float: none;'>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeOnlyButton'><span class='i18n' data-i18n-id='i18n_active_only'>Active components only</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeInactiveButton'><span class='i18n' data-i18n-id='i18n_active_and_inactive'>Active and inactive components</span></button></li>-->\n                <!--<li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inactiveOnlyButton'><span class='i18n' data-i18n-id='i18n_inactive_only'>Inactive components only</span></button></li>-->\n                <!--</ul>-->\n                <!--</li>-->\n                <!--</ul>-->\n                <!--</nav>-->\n            </div>\n            <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBar2\"></div>\n        </div>\n        <div style=\"display: inline; width: 66%; float: right; padding: 5px;\">\n            <form>\n                <div class=\"form-group\" style=\"margin-bottom: 2px;\">\n                    <label for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\">\n                        <span class=\"i18n\" data-i18n-id=\"i18n_type_3_chars\">Type at least 3 characters</span> <i class=\"glyphicon glyphicon-remove text-danger\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-typeIcon\"></i> <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchExample\"></span></label>\n                    <br><div class=\"btn-group\" style=\"width: 100%;\"><input data-droppable=\"true\" ondrop=\"dropS(event);\" ondragover=\"removeHighlight();\" ondragstart=\"allowDrop(event);\" type=\"search\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\" placeholder=\"Search...\" autocomplete=\"off\">\n                    <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-clearButton\" class=\"searchclear glyphicon glyphicon-remove-circle\"></span></div>\n                </div>\n            </form>\n            <div class='panel panel-default' style='height:70%;overflow:auto;margin-bottom: 15px;min-height: 300px;' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsScrollPane'>\n                <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBar\"></div>\n                <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFilters\"></div>\n                <table class='table table-bordered'>\n                    <tbody id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable'>\n                    </tbody>\n                </table>\n            </div>\n            <div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>\n                <div class='modal-dialog'>\n                    <div class='modal-content'>\n                        <div class='modal-header'>\n                            <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n                            <h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>\n                        </div>\n                        <div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>\n                            <p></p>\n                        </div>\n                        <div class='modal-footer'>\n                            <button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>\n                            <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/0.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr class='resultRow selectable-row ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.danger), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n        <td class='col-md-7'>\n            <div class='result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(6, program6, data, depth1),fn:self.programWithDepth(4, program4, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href='javascript:void(0);' style='color: inherit;text-decoration: inherit;' draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n            </div>\n        </td>\n        <td class='text-muted small-text col-md-5 result-item' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n            "
    + escapeExpression(((stack1 = ((stack1 = (depth1 && depth1.result)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        </td>\n    </tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "danger";
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:20px;height:20px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <tr><td class='text-muted'><span data-i18n-id=\"i18n_no_results\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_results", "No results", options) : helperMissing.call(depth0, "i18n", "i18n_no_results", "No results", options)))
    + "</span></td></tr>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.descriptions), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.descriptions)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.descriptions)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/1.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data,depth1) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr class='resultRow selectable-row";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.active), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.active), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n        <td class='col-md-7'>\n            <div class='result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(8, program8, data, depth1),fn:self.programWithDepth(6, program6, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href='javascript:void(0);' style='color: inherit;text-decoration: inherit;' draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n            </div>\n        </td>\n        <td class='text-muted small-text col-md-5 result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n            ";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </td>\n    </tr>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "danger";
  }

function program4(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptActive), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.conceptActive), false, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:20px;height:20px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.matches), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/bar.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <span class='text-muted'>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " matches found in ";
  if (helper = helpers.elapsed) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.elapsed); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " seconds.</span>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "-->\n<!--";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n    <!--&nbsp;&nbsp;<span class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-semtag'>&times;</a></span>&nbsp;&nbsp;-->\n<!--";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n    <!--&nbsp;&nbsp;<span class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-lang'>&times;</a></span>&nbsp;&nbsp;-->\n<!--";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n    <!--&nbsp;&nbsp;<span class='label label-danger'>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-module'>&times;</a></span>&nbsp;&nbsp;-->\n<!--";
  return buffer;
  }
function program10(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program12(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n                        <!--<li><a class='lang-link' href='javascript:void(0);' data-lang='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\n                    <!--";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n                        <!--<li><a class='semtag-link' href='javascript:void(0);' data-semtag='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\n                    <!--";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\n                        <!--<li><a class='module-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-module='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " (";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")-->\n                        <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.value), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n                        <!--</a></li>-->\n                    <!--";
  return buffer;
  }
function program19(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program21(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program23(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\n                            <!--<div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">-->\n                                <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.value), options)))
    + "\"></span>-->\n                            <!--</div>-->\n                        <!--";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<!--<span class='pull right'>-->\n<!--<a class='btm btn-xs' style='margin: 3px; color: #777; background-color: #fff; border: 1px #ccc solid; margin-left: 25px;' data-toggle='collapse' href='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFiltersPanel'>-->\n    <!--<span class='i18n' data-i18n-id='i18n_filters'>"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters", "Filters", options) : helperMissing.call(depth0, "i18n", "i18n_filters", "Filters", options)))
    + "</span>-->\n<!--</a>-->\n<!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n<!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n<!--";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n<!--</span>-->\n<!--<div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFiltersPanel' class='panel-collapse collapse'>-->\n    <!--<div class='tree'>-->\n        <!--<ul>-->\n            <!--<li><a><span data-i18n-id=\"i18n_filters_language\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_language", "Filter results by Language", options) : helperMissing.call(depth0, "i18n", "i18n_filters_language", "Filter results by Language", options)))
    + "</span></a>-->\n                <!--<ul>-->\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.lang), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n                <!--</ul>-->\n            <!--</li>-->\n        <!--</ul>-->\n        <!--<ul>-->\n            <!--<li><a><span data-i18n-id=\"i18n_filters_semtag\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_semtag", "Filter results by Semantic Tag", options) : helperMissing.call(depth0, "i18n", "i18n_filters_semtag", "Filter results by Semantic Tag", options)))
    + "</span></a>-->\n                <!--<ul>-->\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.semTag), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n                <!--</ul>-->\n            <!--</li>-->\n        <!--</ul>-->\n        <!--<ul>-->\n            <!--<li><a><span data-i18n-id=\"i18n_filters_module\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_module", "Filter results by Module", options) : helperMissing.call(depth0, "i18n", "i18n_filters_module", "Filter results by Module", options)))
    + "</span></a>-->\n                <!--<ul>-->\n                    <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.module), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n                <!--</ul>-->\n            <!--</li>-->\n        <!--</ul>-->\n    <!--</div>-->\n<!--</div>-->";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/bar2.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <h3 style=\"margin-top: 5px;\">\n        <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-moduleResumed\" style=\"font-size: 12px;white-space: normal\" class='label label-danger' data-name=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-module'>&times;</a></span>\n    </h3>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program6(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program8(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilterName), options)));
  }

function program10(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), options)));
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3 style=\"margin-top: 5px;\">\n        <span style=\"font-size: 12px; margin-top: 5px;\" class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-lang'>&times;</a></span>\n    </h3>\n";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h3 style=\"margin-top: 5px;\">\n        <span style=\"font-size: 12px; margin-top: 5px;\" class='label label-danger'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-semtag'>&times;</a></span>\n    </h3>\n";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <h3 style=\"margin-top: 5px;\">\n        <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-refsetResumed\" style=\"font-size: 12px; margin-top: 5px;\" class='label label-danger' data-name=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " &nbsp;<a href='javascript:void(0);' style='color: white;text-decoration: none;' class='remove-refset'>&times;</a></span>\n    </h3>\n";
  return buffer;
  }
function program17(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program19(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program21(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilterName), options)));
  }

function program23(depth0,data) {
  
  var stack1, helper, options;
  return escapeExpression((helper = helpers.first20chars || (depth0 && depth0.first20chars),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), options) : helperMissing.call(depth0, "first20chars", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), options)));
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(40, program40, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <!--<div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFiltersPanel2' class=''>-->\n    <!--<div class='tree'>-->\n    <!--<ul>-->\n    <!--<li><a><span data-i18n-id=\"i18n_filters_language\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_language", "Filter results by Language", options) : helperMissing.call(depth0, "i18n", "i18n_filters_language", "Filter results by Language", options)))
    + "</span></a>-->\n    <!--<ul>-->\n            <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.lang), {hash:{},inverse:self.noop,fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n    <!--</ul>-->\n    <!--</li>-->\n    <!--</ul>-->\n    <!--<ul>-->\n    <!--<li><a><span data-i18n-id=\"i18n_filters_semtag\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_semtag", "Filter results by Semantic Tag", options) : helperMissing.call(depth0, "i18n", "i18n_filters_semtag", "Filter results by Semantic Tag", options)))
    + "</span></a>-->\n    <!--<ul>-->\n            <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.semTag), {hash:{},inverse:self.noop,fn:self.program(48, program48, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n    <!--</ul>-->\n    <!--</li>-->\n    <!--</ul>-->\n    <!--<ul>-->\n    <!--<li><a><span data-i18n-id=\"i18n_filters_module\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_module", "Filter results by Module", options) : helperMissing.call(depth0, "i18n", "i18n_filters_module", "Filter results by Module", options)))
    + "</span></a>-->\n    <!--<ul>-->\n            <!--";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.module), {hash:{},inverse:self.noop,fn:self.program(50, program50, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n    <!--</ul>-->\n    <!--</li>-->\n    <!--</ul>-->\n    <!--</div>-->\n    <!--</div>-->\n";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div style=\"margin-top: 10px\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_language", "Filter results by Language", options) : helperMissing.call(depth0, "i18n", "i18n_filters_language", "Filter results by Language", options)))
    + "</h3>\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.lang), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>\n                            <a class='lang-link' href='javascript:void(0);' data-lang='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                        </li>\n                    ";
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_semtag", "Filter results by Semantic Tag", options) : helperMissing.call(depth0, "i18n", "i18n_filters_semtag", "Filter results by Semantic Tag", options)))
    + "</h3>\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.semTag), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>\n                            <a class='semtag-link' href='javascript:void(0);' data-semtag='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                        </li>\n                    ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_module", "Filter results by Module", options) : helperMissing.call(depth0, "i18n", "i18n_filters_module", "Filter results by Module", options)))
    + "</h3>\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.module), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n        </div>\n    ";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                            <a class='module-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-module='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.value), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </a>\n                        </li>\n                    ";
  return buffer;
  }
function program34(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program36(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program38(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                                    <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\n                                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.value), options)))
    + "\"></span>\n                                    </div>\n                                ";
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(43, program43, data),fn:self.program(41, program41, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.refsetId)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.refsetId)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program41(depth0,data) {
  
  
  return "\n        ";
  }

function program43(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div style=\"margin-top: 10px\" class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_filters_refset", "Filter results by Refset", options) : helperMissing.call(depth0, "i18n", "i18n_filters_refset", "Filter results by Refset", options)))
    + "</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <ul class=\"list-group\">\n                        ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.filters)),stack1 == null || stack1 === false ? stack1 : stack1.refsetId), {hash:{},inverse:self.noop,fn:self.program(44, program44, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </ul>\n                </div>\n            </div>\n        ";
  return buffer;
  }
function program44(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li class=\"list-group-item\">\n                                <span class=\"badge\">";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                                <a class='refset-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-refset='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                            </li>\n                        ";
  return buffer;
  }

function program46(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n    <!--<li><a class='lang-link' href='javascript:void(0);' data-lang='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\n            <!--";
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n    <!--<li><a class='semtag-link' href='javascript:void(0);' data-semtag='"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ")</a></li>-->\n            <!--";
  return buffer;
  }

function program50(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "-->\n    <!--<li><a class='module-link' href='javascript:void(0);' data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-module='";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.term), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " (";
  if (helper = helpers.cant) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cant); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")-->\n            <!--";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.value), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n    <!--</a></li>-->\n            <!--";
  return buffer;
  }
function program51(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "-->\n    <!--<div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">-->\n    <!--<span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.value), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.value), options)))
    + "\"></span>-->\n    <!--</div>-->\n            <!--";
  return buffer;
  }

  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.moduleFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.langFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(14, program14, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.semTagFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.refsetFilter), "none", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(25, program25, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total), 0, options) : helperMissing.call(depth0, "if_eq", ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/body/default.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.if_gre || (depth0 && depth0.if_gre),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, "0", ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.matches)),stack1 == null || stack1 === false ? stack1 : stack1.length), options) : helperMissing.call(depth0, "if_gre", "0", ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.matches)),stack1 == null || stack1 === false ? stack1 : stack1.length), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr><td class='text-muted'><span data-i18n-id=\"i18n_no_results\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_results", "No results", options) : helperMissing.call(depth0, "i18n", "i18n_no_results", "No results", options)))
    + "</span></td></tr>\n        ";
  stack1 = (helper = helpers.hasFilters || (depth0 && depth0.hasFilters),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.options), options) : helperMissing.call(depth0, "hasFilters", (depth0 && depth0.options), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <tr><td class='text-center'><span data-i18n-id=\"i18n_remove_filters\" class=\"i18n\">\n            "
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remove_filters", "There are filters active, remove them to search again with a broader criteria.", options) : helperMissing.call(depth0, "i18n", "i18n_remove_filters", "There are filters active, remove them to search again with a broader criteria.", options)))
    + "</span><br>\n            <button class=\"btn btn-danger btn-sm\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-remove-all-filters\"><span data-i18n-id=\"i18n_remove_filters_button\" class=\"i18n\">Remove all filters</span></button>\n        </td></tr>        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.matches), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.remaining), 0, options) : helperMissing.call(depth0, "if_gr", (depth0 && depth0.remaining), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <tr class='resultRow selectable-row";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.active), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.active), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n                <td class='col-md-6'>\n                    <div class='result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>\n                        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(13, program13, data, depth1),fn:self.programWithDepth(11, program11, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        <a href='javascript:void(0);' style='color: inherit;text-decoration: inherit;' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n                    </div>\n                </td>\n                <td class='text-muted small-text col-md-6 result-item' data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.fsn) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fsn); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </td>\n            </tr>\n        ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return " danger";
  }

function program9(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptActive), false, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.conceptActive), false, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program11(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program13(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.term) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.term); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\n                        ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                            <div class=\"phoca-flagbox\" style=\"width:20px;height:20px\">\n                                <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                            </div>\n                        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <tr class='more-row'><td colspan='2' class='text-center'><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-more'><span data-i18n-id=\"i18n_load\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_load", "Load", options) : helperMissing.call(depth0, "i18n", "i18n_load", "Load", options)))
    + "</span> ";
  if (helper = helpers.returnLimit) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.returnLimit); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_more\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_more", "more", options) : helperMissing.call(depth0, "i18n", "i18n_more", "more", options)))
    + "</span> (";
  if (helper = helpers.remaining) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.remaining); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span data-i18n-id=\"i18n_remaining_server\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remaining_server", "remaining on server", options) : helperMissing.call(depth0, "i18n", "i18n_remaining_server", "remaining on server", options)))
    + "</span>)</button></td></tr>\n        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <tr class='more-row'><td colspan='2' class='text-center text-muted'><span data-i18n-id=\"i18n_all_res\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_all_res", "All", options) : helperMissing.call(depth0, "i18n", "i18n_all_res", "All", options)))
    + "</span> "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.details)),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <span data-i18n-id=\"i18n_results_displayed\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_results_displayed", "results are displayed", options) : helperMissing.call(depth0, "i18n", "i18n_results_displayed", "results are displayed", options)))
    + "</span></td></tr>\n        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr><td class='text-muted'><span data-i18n-id=\"i18n_no_results\" class=\"i18n\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_no_results", "No results", options) : helperMissing.call(depth0, "i18n", "i18n_no_results", "No results", options)))
    + "</span></td></tr>\n    ";
  stack1 = (helper = helpers.hasFilters || (depth0 && depth0.hasFilters),options={hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.options), options) : helperMissing.call(depth0, "hasFilters", (depth0 && depth0.options), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr><td class='text-center'><span data-i18n-id=\"i18n_remove_filters\" class=\"i18n\">\n            "
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_remove_filters", "There are filters active, remove them to search again with a broader criteria.", options) : helperMissing.call(depth0, "i18n", "i18n_remove_filters", "There are filters active, remove them to search again with a broader criteria.", options)))
    + "</span><br>\n            <button class=\"btn btn-danger btn-sm\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-remove-all-filters\"><span data-i18n-id=\"i18n_remove_filters_button\" class=\"i18n\">Remove all filters</span></button>\n        </td></tr>\n    ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.matches), {hash:{},inverse:self.program(21, program21, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["views/searchPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='margin: 5px; height:95%;' class='panel panel-default'>\n    <div class='panel-heading'>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 15px;'><i class='glyphicon glyphicon-bookmark'></i></button>\n        <div class='row'>\n            <div class='col-md-8' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_search'>Search</span></span></strong></div>\n            <div class='col-md-4 text-right'>\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>-->\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\n            </div>\n        </div>\n    </div>\n    <div class='panel-body' style='height:86%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n        <form>\n            <div class=\"form-group\" style=\"margin-bottom: 2px;\">\n                <label for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\">\n                    <span class=\"i18n\" data-i18n-id=\"i18n_type_3_chars\">Type at least 3 characters</span> <i class=\"glyphicon glyphicon-remove text-danger\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-typeIcon\"></i> <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchExample\"></span></label>\n                <br><div class=\"btn-group\" style=\"width: 100%;\"><input data-droppable=\"true\" ondrop=\"dropS(event);\" ondragover=\"removeHighlight();\" ondragstart=\"allowDrop(event);\" type=\"search\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBox\" placeholder=\"Search...\" autocomplete=\"off\">\n                <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-clearButton\" class=\"searchclear glyphicon glyphicon-remove-circle\"></span></div>\n            </div>\n        </form>\n        <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchConfigBar' style='margin-bottom: 10px;'><nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>\n            <ul class='nav navbar-nav navbar-left'>\n                <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\n                    <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navSearchModeLabel'></span> <b class='caret'></b></a>\n                    <ul class='dropdown-menu' role='menu' style='float: none;'>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-fullTextButton'><span class='i18n' data-i18n-id='i18n_full_text_search_mode'>Full text search mode</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-partialMatchingButton'><span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>Partial matching search mode</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-regexButton'><span class='i18n' data-i18n-id='i18n_regex_search_mode'>Regular Expressions search mode</span></button></li>\n                    </ul>\n                </li>\n                <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\n                    <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navLanguageLabel'></span> <b class='caret'></b></a>\n                    <ul class='dropdown-menu' role='menu' style='float: none;'>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-danishLangButton'><span class='i18n' data-i18n-id='i18n_danish_stemmer'>Danish language stemmer</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-englishLangButton'><span class='i18n' data-i18n-id='i18n_english_stemmer'>English language stemmer</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-spanishLangButton'><span class='i18n' data-i18n-id='i18n_spanish_stemmer'>Spanish language stemmer</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-swedishLangButton'><span class='i18n' data-i18n-id='i18n_swedish_stemmer'>Swedish language stemmer</span></button></li>\n                    </ul>\n                </li>\n                <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\n                    <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-navStatusFilterLabel'></span> <b class='caret'></b></a>\n                    <ul class='dropdown-menu' role='menu' style='float: none;'>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeOnlyButton'><span class='i18n' data-i18n-id='i18n_active_only'>Active components only</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-activeInactiveButton'><span class='i18n' data-i18n-id='i18n_active_and_inactive'>Active and inactive components</span></button></li>\n                        <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inactiveOnlyButton'><span class='i18n' data-i18n-id='i18n_inactive_only'>Inactive components only</span></button></li>\n                    </ul>\n                </li>\n            </ul>\n        </nav></div>\n        <div class='panel panel-default' style='height:70%;overflow:auto;margin-bottom: 15px;min-height: 300px;' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsScrollPane'>\n            <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchBar\"></div>\n            <div id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-searchFilters\"></div>\n            <table class='table table-bordered'>\n                <tbody  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultsTable'>\n                </tbody>\n            </table>\n        </div>\n        <div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>\n            <div class='modal-dialog'>\n                <div class='modal-content'>\n                    <div class='modal-header'>\n                        <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n                        <h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>\n                    </div>\n                    <div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>\n                        <p></p>\n                    </div>\n                    <div class='modal-footer'>\n                        <button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>\n                        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n        ";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/body/children.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\n                <button class='btn btn-link btn-xs treeButton' style='padding:2px'>\n                    <i class='glyphicon glyphicon-";
  stack1 = (helper = helpers.if_eq || (depth2 && depth2.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth2 && depth2.selectedView), "inferred", options) : helperMissing.call(depth0, "if_eq", (depth2 && depth2.selectedView), "inferred", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i>\n                </button>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.programWithDepth(12, program12, data, depth1),fn:self.programWithDepth(10, program10, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                    <span class=\"treeLabel selectable-row\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\""
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </a>\n                "
    + escapeExpression((helper = helpers.push || (depth0 && depth0.push),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptId), options) : helperMissing.call(depth0, "push", (depth0 && depth0.conceptId), options)))
    + "\n            </li>\n        ";
  return buffer;
  }
function program3(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafInferred), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafInferred), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program4(depth0,data) {
  
  
  return "minus";
  }

function program6(depth0,data) {
  
  
  return "chevron-right";
  }

function program8(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.isLeafStated), true, options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.isLeafStated), true, options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program10(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program12(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '"
    + escapeExpression(((stack1 = (depth2 && depth2.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "')\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">&equiv;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:26px;height:26px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

  buffer += "<ul style='list-style-type: none; padding-left: 15px;'>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/body/parents.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id='";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' data-term='";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='treeLabel'>\n                <button class='btn btn-link btn-xs treeButton' style='padding:2px'>\n                    <i class='glyphicon glyphicon-chevron-";
  stack1 = (helper = helpers.if_def || (depth0 && depth0.if_def),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.conceptId), options) : helperMissing.call(depth0, "if_def", (depth0 && depth0.conceptId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " treeButton' id='"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treeicon-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'></i>\n                </button>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "hasCountryIcon", (depth0 && depth0.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                    <span data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"treeLabel selectable-row\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-treenode-";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                </a>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "down";
  }

function program4(depth0,data) {
  
  
  return "up";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" data-module=\"";
  if (helper = helpers.module) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.module); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-concept-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\">&equiv;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:33px;height:33px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.module), options) : helperMissing.call(depth0, "countryIcon", (depth0 && depth0.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n            "
    + escapeExpression((helper = helpers.slice || (depth0 && depth0.slice),options={hash:{},data:data},helper ? helper.call(depth0, 0, -5, options) : helperMissing.call(depth0, "slice", 0, -5, options)))
    + "\n        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&nbsp;&nbsp;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <span class=\"badge alert-warning\" draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">&equiv;</span>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    <div class=\"phoca-flagbox\" style=\"width:33px;height:33px\">\n                        <span class=\"phoca-flag "
    + escapeExpression((helper = helpers.countryIcon || (depth0 && depth0.countryIcon),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "countryIcon", ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options)))
    + "\"></span>\n                    </div>\n                ";
  return buffer;
  }

function program20(depth0,data) {
  
  
  return "\n            </li>\n        ";
  }

  buffer += "<div style='height:100%;margin-bottom: 15px;'>\n    <ul style='list-style-type: none; padding-left: 5px;'>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.parents), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <ul style='list-style-type: none; padding-left: 15px;'>\n            <li data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' data-term='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "' class='treeLabel'>\n                <button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-right treeButton'  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-treeicon-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></i></button>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = (helper = helpers.hasCountryIcon || (depth0 && depth0.hasCountryIcon),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options) : helperMissing.call(depth0, "hasCountryIcon", ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\">\n                    <span data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"treeLabel selectable-row\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-treenode-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                </a>\n            </li>\n        </ul>\n        ";
  stack1 = (helper = helpers.if_gr || (depth0 && depth0.if_gr),options={hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options) : helperMissing.call(depth0, "if_gr", ((stack1 = (depth0 && depth0.parents)),stack1 == null || stack1 === false ? stack1 : stack1.length), 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style='height:100%;margin: 5px; overflow:auto;' class='panel panel-default' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mainPanel'>\n    <div ondrop=\"dropT(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-heading' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelHeading'>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ownMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 0px;'><i class='glyphicon glyphicon-book'></i></button>\n        <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-subscribersMarker' class='btn btn-link btn-lg' style='padding: 2px; position: absolute;top: 1px;left: 15px;'><i class='glyphicon glyphicon-bookmark'></i></button>\n        <div class='row'>\n            <div class='col-md-6' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelTitle'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><span class='i18n' data-i18n-id='i18n_taxonomy'>Taxonomy</span></strong></div>\n            <div class='col-md-6 text-right'>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-historyButton' class='btn btn-link history-button' style='padding:2px'><i class='glyphicon glyphicon-time'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resetButton' class='btn btn-link' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-repeat'></i></button>\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-linkerButton' draggable=\"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" class='btn btn-link linker-button' data-panel='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' style='padding:2px'><i class='glyphicon glyphicon-link'></i></button>-->\n                <!--<button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configButton' class='btn btn-link' data-toggle='modal' style='padding:2px' data-target='#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'><i class='glyphicon glyphicon-cog'></i></button>-->\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-collapseButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-small'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-expandButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-resize-full'></i></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-closeButton' class='btn btn-link' style='padding:2px'><i class='glyphicon glyphicon-remove'></i></button>\n            </div>\n        </div>\n    </div>\n    <div id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-taxonomyConfigBar' style='margin-bottom: 10px;'><nav class='navbar navbar-default' role='navigation' style='min-height: 28px;border-radius: 0px;border-bottom: 1px lightgray solid;'>\n        <ul class='nav navbar-nav navbar-left'>\n            <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\n                <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-txViewLabel'></span> <b class='caret'></b></a>\n                <ul class='dropdown-menu' role='menu' style='float: none;'>\n                    <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-inferredViewButton'><span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span></button></li>\n                    <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-statedViewButton'><span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span></button></li>\n                </ul>\n            </li>\n        </ul>\n    </nav></div>\n    <div ondrop=\"dropT(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class='panel-body' style='height:100%' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-panelBody'>\n    </div>\n</div>\n<div class='modal fade' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-configModal'>\n    <div class='modal-dialog'>\n        <div class='modal-content'>\n            <div class='modal-header'>\n                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n                <h4 class='modal-title'><span class='i18n' data-i18n-id='i18n_options'>Options</span> (";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</h4>\n            </div>\n            <div class='modal-body' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modal-body'>\n                <p></p>\n            </div>\n            <div class='modal-footer'>\n                <button type='button' class='btn btn-danger' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_cancel'>Cancel</span></button>\n                <button id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-apply-button' type='button' class='btn btn-success' data-dismiss='modal'><span class='i18n' data-i18n-id='i18n_apply_changes'>Apply changes</span></button>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["views/taxonomyPlugin/options.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <tr>\n                    <td>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    <td>\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscribeTo-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscribed), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"i18n\"></span>\n                            </label>\n                        </div>\n                    </td>\n                    <td>\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-subscriptor-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subscriptor), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> <span class=\"i18n\"></span>\n                            </label>\n                        </div>\n                    </td>\n                </tr>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

  buffer += "<form role=\"form\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-options-form\">\n    <div class=\"form-group\">\n        <table class='table table-bordered table-hover'>\n            <thead>\n            <tr>\n                <th>Panel</th>\n                <th><span class=\"i18n\" data-i18n-id=\"i18n_subscribed\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_subscribe", "Subscribed", options) : helperMissing.call(depth0, "i18n", "i18n_subscribe", "Subscribed", options)))
    + "</span></th>\n                <th><span class=\"i18n\" data-i18n-id=\"i18n_subscriptor\">"
    + escapeExpression((helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_subscriptor", "Subscriptor", options) : helperMissing.call(depth0, "i18n", "i18n_subscriptor", "Subscriptor", options)))
    + "</span></th>\n            </tr>\n            </thead>\n            <tbody>\n            ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.possibleSubscribers), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </tbody>\n        </table>\n    </div>\n</form>";
  return buffer;
  });