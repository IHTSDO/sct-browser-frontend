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
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_references\">References</span></a></li>\n            <li id=\"product-details-tab\" style=\"display: none;\"><a id=\"product-details-tab-link-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#product-details-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-toggle=\"tab\" style=\"padding-top: 3px; padding-bottom:3px;\"><span class=\"i18n\" data-i18n-id=\"i18n_vcd\">CD</span></a></li>\n        </ul>\n        <!-- Tab panes -->\n        <div class=\"tab-content\" id=\"details-tab-content-";
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
    + "-resultsTable\" class=\"table table-hover table-bordered\">-->\n                <!--</table>-->\n            </div>\n            <div class=\"tab-pane fade\" id=\"product-details-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class='modal fade' id='";
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
    + "-copy-sctid-details\" class=\"clip-btn\" data-clipboard-text=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Copy ConceptId</a></li>\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-term-details\" class=\"clip-btn\" data-clipboard-text=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Copy term</a></li>\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-sctid-term-details\" class=\"clip-btn\" data-clipboard-text=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " |"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "|\">Copy ConceptId + term</a></li>\n                        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-link-details\" class=\"clip-btn\" data-clipboard-text=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Copy Link to share</a></li>\n                    </ul>\n                </div>\n            </span>\n            <!--<button type=\"button\" id=\"share-link-";
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


  buffer += "<p class=\"\" style=\"margin-top: 20px;\">Pre-coordinated Expression (*)&nbsp;&nbsp;&nbsp;&nbsp;<small><i class=\"glyphicon glyphicon-export clip-btn-exp\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-pre-coordinated-expression\"  data-clipboard-text=\"";
  if (helper = helpers.plainPreCoordinatedExpression) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.plainPreCoordinatedExpression); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i></small></p>\n<div class=\"expression-code\" style=\"margin-top: 10px; padding: 10px;\">";
  if (helper = helpers.preCoordinatedExpressionHtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.preCoordinatedExpressionHtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<p class=\"\" style=\"margin-top: 20px;\">Expression from Stated Concept Definition (*)&nbsp;&nbsp;&nbsp;&nbsp;<small><i class=\"glyphicon glyphicon-export clip-btn-exp\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-stated-expression\" data-clipboard-text=\"";
  if (helper = helpers.plainStatedExpression) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.plainStatedExpression); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i></small></p>\n<div class=\"expression-code\" style=\"margin-top: 10px; padding: 10px;\">";
  if (helper = helpers.statedExpressionHtml) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statedExpressionHtml); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<p class=\"\" style=\"margin-top: 20px;\">Expression from Inferred Concept Definition (*)&nbsp;&nbsp;&nbsp;&nbsp;<small><i class=\"glyphicon glyphicon-export clip-btn-exp\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-inferred-expression\" data-clipboard-text=\"";
  if (helper = helpers.plainInferredExpression) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.plainInferredExpression); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i></small></p>\n<div class=\"expression-code\" style=\"margin-top: 10px; padding: 10px;\">";
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
    + "-copy-sctid\" class=\"clip-btn\" data-clipboard-text=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Copy ConceptId</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-term\" class=\"clip-btn\" data-clipboard-text=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Copy term</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-sctid-term\" class=\"clip-btn\" data-clipboard-text=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " |"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "|\">Copy ConceptId + term</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copy-link\" class=\"clip-btn\" data-clipboard-text=\"";
  if (helper = helpers.link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Copy Link to share</a></li>\n            </ul>\n        </div>\n    </span>\n    <span class=\"pull-right\">\n        <a href=\"javascript:void(0);\" style=\"font-size: 20px; color: white; padding: 5px;\">\n            <span data-conceptId=\""
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
    + "<br><br><div id=\"copy-content-custom\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " | "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.firstMatch)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " |</div></h5>\n\n<div id=\"home-descriptions-";
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

this["JST"]["views/conceptDetailsPlugin/tabs/product.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </td>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.target)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            </td>\n        </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
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
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
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
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
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
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
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
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n            <td>\n                ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                <br>\n                &nbsp;&nbsp;&nbsp;<span class=\"text-muted\"><em>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.boss)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em></span>\n            </td>\n            <td>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.numeratorValue), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n            <td>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.numeratorUnit), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n            <td>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.denominatorValue), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n            <td>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.denominatorUnit), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </td>\n        </tr>\n    ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.ingredient)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "\n                ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "\n                ";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.numeratorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "\n                ";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorValue)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(33, program33, data),fn:self.program(31, program31, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus), "Primitive", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    "
    + escapeExpression((helper = helpers.removeSemtag || (depth0 && depth0.removeSemtag),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options) : helperMissing.call(depth0, "removeSemtag", ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm), options)))
    + "\n                ";
  return buffer;
  }
function program31(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&nbsp;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"javascript:void(0);\" style=\"color: inherit;text-decoration: inherit;\" draggable = \"true\" ondragstart=\"drag(event, '";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "')\" data-module=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.module)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-def-status=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.denominatorUnit)),stack1 == null || stack1 === false ? stack1 : stack1.definitionStatus)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><span class=\"badge alert-warning\">&equiv;</span></a>&nbsp;&nbsp;\n                    ";
  return buffer;
  }

  buffer += "<br>\n<h4>&nbsp;&nbsp;&nbsp;"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.productData)),stack1 == null || stack1 === false ? stack1 : stack1.defaultTerm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n<br>\n<table class='table table-bordered' id = ''>\n    <thead>\n        <tr><th colspan=\"2\">Dose form</th></tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.productData)),stack1 == null || stack1 === false ? stack1 : stack1.forms), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n</table>\n<br>\n<table class='table table-bordered' id = ''>\n    <thead>\n    <tr>\n        <th>Ingredient / BoSS</th>\n        <th colspan=\"2\">Strength Numerator</th>\n        <th colspan=\"2\">Strength Denominator</th>\n    </tr>\n    </thead>\n    <tbody>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.productData)),stack1 == null || stack1 === false ? stack1 : stack1.ingredients), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n</table>";
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
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Conjunction";
  }

function program3(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.typeSelected) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.typeSelected); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program5(depth0,data) {
  
  
  return "\n            and\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            attribute\n        ";
  }

function program9(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "style=\"display: none;\"";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <li role=\"presentation\"><a class=\"selectTypeOpt\" data-id=\"";
  if (helper = helpers.conceptId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.conceptId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-term=\"";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">";
  if (helper = helpers.defaultTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.defaultTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n                ";
  return buffer;
  }

  buffer += "<div class=\"addedCriteria\" data-typeSelected=\"";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.typeSelected), "false", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.typeSelected), "false", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    <div class=\"form-group text-center\" style=\"width: 75px;\">\n        ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.typeSelected), "Conjunction", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.typeSelected), "Conjunction", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div data-type-concept-id=\"false\" class=\"form-group typeCritCombo\" ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.typeSelected), "Refinement", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.typeSelected), "Refinement", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        <div class=\"dropdown\">\n            <button style=\"width: 147px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <span>Select type&nbsp;</span>\n                <span class=\"caret\"></span>\n            </button>\n            <ul style=\"max-height: 400px; overflow: auto;\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                <li role=\"presentation\"><a class=\"selectTypeOpt\" data-id=\"*\" data-term=\"Any\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">Any</a></li>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.types), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"dropdown\">\n            <button style=\"width: 147px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <span class=\"addSelectCriteria\">";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOf</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOrSelfOf</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">self</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">isMemberOf</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control andCriteriaConcept\" placeholder=\"Drag a concept here\" readonly>\n    </div>\n    <div class=\"form-group\"><button type=\"button\" class=\"btn btn-link glyphicon glyphicon-remove removeCriteria\" style=\"text-decoration: none;\"></button></div>\n    <div class=\"form-group\"><button type=\"button\" class=\"btn btn-link glyphicon glyphicon-plus addCriteria\" style=\"text-decoration: none;\"></button></div>\n</div>";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/criteria.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
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
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <!--";
  if (helper = helpers.criteria) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.criteria); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;-->\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <div style=\"display: inline-block;\" class=\"dropdown\">\n                    <button style=\"text-decoration: inherit; color: inherit; display: inline-block; padding: 0px;\" class=\"btn btn-link dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                        ";
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
    + "</span>\n                |";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth1 && depth1.criterias)),stack1 == null || stack1 === false ? stack1 : stack1[1])),stack1 == null || stack1 === false ? stack1 : stack1.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), {hash:{},inverse:self.noop,fn:self.programWithDepth(17, program17, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </span>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n            ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <br>\n                <div style=\"margin-left: ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; display: inline-block\">\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "68";
  }

function program7(depth0,data) {
  
  
  return "43";
  }

function program9(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "AND";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-type-concept-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-type-term=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.term)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <span style=\"color: forestgreen;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.conceptId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> |\n                    <span style=\"color: firebrick;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.type)),stack1 == null || stack1 === false ? stack1 : stack1.term)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> | =\n                ";
  return buffer;
  }

function program17(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                    ";
  stack1 = (helper = helpers.if_eqInd || (depth2 && depth2.if_eqInd),options={hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), ((stack1 = (depth2 && depth2.criterias)),stack1 == null || stack1 === false ? stack1 : stack1.length), options) : helperMissing.call(depth0, "if_eqInd", (data == null || data === false ? data : data.index), ((stack1 = (depth2 && depth2.criterias)),stack1 == null || stack1 === false ? stack1 : stack1.length), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program18(depth0,data) {
  
  
  return "\n                    ";
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.index), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program21(depth0,data) {
  
  
  return "\n                            ,\n                        ";
  }

function program23(depth0,data) {
  
  
  return "\n                            :\n                        ";
  }

  buffer += "<li data-modifier=\"";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item clearfix query-condition\">\n    <span class=\"text-muted line-number\" style=\"font-size: 200%;\"></span>&nbsp;&nbsp;\n    <span style=\"position: relative; top: -5px;\">\n        <div style=\"width: 45px;display: inline-block;\">";
  if (helper = helpers.modifier) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.modifier); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ":</div>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.criterias), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </span>\n    <button class='pull-right btn btn-link removeLi' style=\"position: relative; top: 3px;\">\n        <i class='glyphicon glyphicon-remove'></i>\n    </button>\n </li>";
  return buffer;
  });

this["JST"]["views/developmentQueryPlugin/examples.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <br>\n    <div id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-modal-examples\" ";
  stack1 = (helper = helpers.if_eqInd || (depth1 && depth1.if_eqInd),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), ((stack1 = (depth1 && depth1.examples)),stack1 == null || stack1 === false ? stack1 : stack1.length), options) : helperMissing.call(depth0, "if_eqInd", (data == null || data === false ? data : data.index), ((stack1 = (depth1 && depth1.examples)),stack1 == null || stack1 === false ? stack1 : stack1.length), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        <h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n        <span data-htmlValue=\"";
  if (helper = helpers.htmlValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.htmlValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"pull-right btn btn-primary btn-xs loadExample\" style=\"padding: 0px; display: inline-block;\">Load instructions</span>\n        <br>\n        <div class=\"contentExamples\" style=\"margin: 10px;\">";
  if (helper = helpers.htmlValue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.htmlValue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        <br>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "style=\"min-height: 450px;\"";
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.examples), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["views/developmentQueryPlugin/main.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                    <li><a contenteditable=\"false\" href=\"#"
    + escapeExpression(((stack1 = (depth1 && depth1.divElementId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-modal-examples\" class=\"list-group-item\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n                                ";
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
    + "-panelBody'>\n        <!--<p style=\"margin: 10px;\">Create a query, conditions are evaluated in order:</p>-->\n        <div class=\"row container-fluid\" style=\"margin: 10px;\">\n            <p class=\"lead col-md-6\">Build a constraint</p>\n            <button type=\"button\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-helpButton\" class=\"btn btn-default pull-right\" style=\"margin: 10px;\" data-toggle=\"modal\" data-target=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-queryHelpModal\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_help", "Help", options) : helperMissing.call(depth0, "i18n", "i18n_help", "Help", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            <button type=\"button\" class=\"btn btn-default pull-right\" data-toggle=\"modal\" data-target=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExamplesModal\" style=\"margin: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_examples", "Examples", options) : helperMissing.call(depth0, "i18n", "i18n_examples", "Examples", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n            <button type=\"button\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-clearButton\" class=\"btn btn-default pull-right\" style=\"margin: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_clear", "Clear", options) : helperMissing.call(depth0, "i18n", "i18n_clear", "Clear", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n        </div>\n        <div>\n            <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-BuilderTab\" data-toggle=\"tab\"><span class=\"i18n\" data-i18n-id=\"i18n_builder\">Builder</span></a></li>\n                <li><a href=\"#";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExpTab\" data-toggle=\"tab\"><span class=\"i18n\" data-i18n-id=\"i18n_expression\">Expression</span></a></li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-BuilderTab\" style=\"padding: 0px;margin: 0;\">\n                    <div class=\"row container-fluid\" style=\"margin: 10px;\">\n                        <form class=\"form-inline\" role=\"form\">\n                            <div class=\"form-group\">\n                                <div class=\"dropdown\">\n                                    <button style=\"width: 75px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modifierButton\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                                        <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedModifier\">Include</span>\n                                        <span class=\"caret\"></span>\n                                    </button>\n                                    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-modifierButton\">\n                                        <li role=\"presentation\"><a role=\"menuitem\" data-role=\"modifier-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">Include</a></li>\n                                        <li role=\"presentation\"><a role=\"menuitem\" data-role=\"modifier-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">Exclude</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"dropdown\">\n                                    <button style=\"width: 147px;\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                                        <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedCriteria\">descendantOf</span>\n                                        <span class=\"caret\"></span>\n                                    </button>\n                                    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n                                        <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOf</a></li>\n                                        <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">descendantOrSelfOf</a></li>\n                                        <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">ancestorOf</a></li>-->\n                                        <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">ancestorOrSelfOf</a></li>-->\n                                        <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">self</a></li>\n                                        <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">childrenOf</a></li>-->\n                                        <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">parentsOf</a></li>-->\n                                        <li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">isMemberOf</a></li>\n                                        <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">hasDescription</a></li>-->\n                                        <!--<li role=\"presentation\"><a role=\"menuitem\" data-role=\"criteria-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">hasRelationship</a></li>-->\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-conceptField\">\n                                <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedConcept\" placeholder=\"Drag a concept here\" readonly>\n                                <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedType\" placeholder=\"Drag a type here\" readonly>\n                                <input type=\"text\" data-droppable=\"true\" ondrop=\"dropField(event)\" ondragleave=\"removeHighlight();\" ondragover=\"allowDrop(event)\" class=\"form-control\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-selectedTarget\" placeholder=\"Drag a destination here\" readonly>\n                                <input type=\"text\" class=\"form-control\" id=\"";
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
    + "-formdropdown\">\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"form-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">stated</a></li>\n                            <li role=\"presentation\"><a role=\"menuitem\" data-role=\"form-selector\" tabindex=\"-1\" href=\"javascript:void(0);\">inferred</a></li>\n                        </ul>\n                    </span>\n                            </div>\n                            <div style=\"margin-left: 41px;\" class=\"form-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addCriteriaAnd\">\n                                <div class=\"dropdown\">\n                                    <button style=\"text-decoration: none;\" class=\"btn btn-link dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\"><span data-toggle=\"tooltip\" data-placement=\"top\" title=\"More\" class=\"glyphicon glyphicon-plus\"></span></button>\n                                    <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                                        <li role=\"presentation\"><a class=\"addCriteria\" data-type=\"Conjunction\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">Add AND</a></li>\n                                        <li role=\"presentation\"><a class=\"addCriteria\" data-type=\"Refinement\" role=\"menuitem\" tabindex=\"-1\" href=\"javascript:void(0);\">Add Refinement</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </form>\n                        <form class=\"form-inline\" role=\"form\">\n                            <div class=\"form-group\">\n                                <button type=\"button\" class=\"btn btn-primary\"  id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addCriteriaButton' style=\"margin: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_add_condition", "Add instruction", options) : helperMissing.call(depth0, "i18n", "i18n_add_condition", "Add instruction", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n                                <!--<button type=\"button\" class=\"btn btn-primary\"  id='";
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
    + "-cloudCount\"></span></button>-->\n\n                                <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addmsg\" for=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-addCriteriaButton\" class=\"small text-danger\"></span>\n                            </div>\n                        </form>\n                        <ul class=\"list-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-listGroup\">\n                        </ul>\n                        <div class=\"btn btn-success\" style=\"margin: 10px;\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-computeInferredButton'>";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_run_query", "Execute", options) : helperMissing.call(depth0, "i18n", "i18n_run_query", "Execute", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n                        <div class=\"btn btn-success\" style=\"display: none; margin: 10px;\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-computeOntoserver'>Run on Ontoserver</div>\n                        <button type=\"button\" class=\"btn btn-primary pull-right\"  id='";
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
  buffer += "</button>\n                        <br>\n                        <br>\n                    </div>\n                </div>\n                <div class=\"tab-pane\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExpTab\" style=\"padding: 15px;margin: 0;\">\n                    <textarea rows=\"5\" class=\"form-control\" placeholder=\"Expression...\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExpText\"></textarea>\n                    <div class=\"btn btn-success\" style=\"margin: 10px;\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-computeInferredButton2'>";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_run_query", "Execute", options) : helperMissing.call(depth0, "i18n", "i18n_run_query", "Execute", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n                    <div class=\"btn btn-success\" style=\"display: none; margin: 10px;\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-computeOntoserver2'>Run on Ontoserver</div>\n                    <br>\n                    <br>\n                </div>\n            </form>\n            <ul class=\"list-group\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-listGroup\">\n            </ul>\n            <div class=\"btn btn-success\" style=\"margin: 10px;\" id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-computeInferredButton'>";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_run_query", "Execute", options) : helperMissing.call(depth0, "i18n", "i18n_run_query", "Execute", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n            <button type=\"button\" class=\"btn btn-primary pull-right\"  id='";
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
    + "-resultInfo\" class=\"text-muted small\"></span>\n        </div>\n\n        <span style=\"margin-left: 10px;\">";
  stack1 = (helper = helpers.i18n || (depth0 && depth0.i18n),options={hash:{},data:data},helper ? helper.call(depth0, "i18n_results", "Results", options) : helperMissing.call(depth0, "i18n", "i18n_results", "Results", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>  <span id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-resultInfo\"></span>\n        <div class=\"row container-fluid\" id=\"";
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
    + "-outputBody2\">\n                </tbody>\n            </table>\n\n        </div>\n        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n    </div>\n</div>\n<!-- Modals -->\n<div class=\"modal fade\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExamplesModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-myCloudModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" style=\"width: 80%;\">\n        <div class=\"modal-content\" >\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">Terminology content selections examples</h4>\n            </div>\n            <div class=\"modal-body\" style=\"max-height: 450px; overflow: auto;\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"list-group navbar\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-sidebar\">\n                            <ul id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mynav\" data-spy=\"affix\" data-offset-top=\"280\" class=\"nav\" style=\"position: fixed; width: 30%;\">\n                                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.examples), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"col-md-8\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-mycontentExamples\">\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-ExamplesModal-close\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-queryHelpModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-myCloudModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\" >\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">Terminology content selections help</h4>\n            </div>\n            <div class=\"modal-body\" style=\"max-height: 450px; overflow: auto;\">\n                <h2>Terminology content selections</h2>\n                <p>This tool implements a subset of functions from the \"SNOMED CT Expression Constraint Language Specification and Guide\" (<a href=\"http://snomed.org/expressionconstraint\" target=\"_blank\">http://snomed.org/expressionconstraint)</a>.</p>\n                <p>The goal of this tool is to enable the creation of a terminology constraint for the selection of content in SNOMED CT, with a user friendly UI designed to support the most common real world use cases for content selection, like the creation of reference sets to support implementation.</p>\n                <h3>How to use</h3>\n                <p>Add Inclusion and Exclusion instructions to the constraint, consider that all inclusions will be interpreted first, and all the exclusions last. The specific order of instructions within Inclusions or within Exclusions has no impact on the results.</p>\n                <p>Each instruction has a criteria that defines the concept selection:</p>\n                <ul>\n                    <li><b>self</b>: selects only the specified concept.</li>\n                    <li><b>descendantOf</b>: selects all descendants concepts, subtypes and subtypes of the subtypes, all the way to the leaf concpts in the hierarchy.</li>\n                    <li><b>descendantOrSelfOf</b>: selects the specified concept plus all the descendants concepts.</li>\n                    <li><b>memberOf</b>: the concepts that are members of the specified reference set. In this case the spcified concepts needs to be a reference set concept.</li>\n                </ul>\n                <p>After adding each instruction the number of concepts involved in the sentence will be calculated, in order to provide an estimate of the complexity of the resulting instructions.</p>\n                <p>The different instructions result in a \"disjunction\" operator in the constraint logic: \"Include A, Include B\" results in \"A,B\" (A OR B).</p>\n                <p>Inside each instruction is possible to add \"conjunction\" operations. \"Include descendantOf A and descendantOf B\" means that only concepts are descendants of A and also descendants of B will be included in teh results.</p>\n                <p>The \"Constraint Grammar\" button will display a valid constraint grammar expression that when executed will produce the same results as the logic described in the sequence of instructions.</p>\n                <br>\n                <h3>Degree of support of the Constraint Language Specification</h3>\n                <p>This is partial implementation of the Constraint Language, prioritizing the features that support the most common use cases and the proposed simplified user interface.</p>\n                <p>Supported features:</p>\n                <ul>\n                    <li>simpleExpressionConstraint</li>\n                    <li>compoundExpressionConstraint</li>\n                    <li>exclusionExpressionConstraint</li>\n                    <li>disjunctionExpressionConstraint</li>\n                    <li>conjunctionExpressionConstraint</li>\n                    <li>refinedExpressionConstraint</li>\n                </ul>\n                <p>Unsupported features: (some may be added in future versions)</p>\n                <ul>\n                    <li>nested expressions</li>\n                    <li>arbitrary order of instructions</li>\n                    <li>complex operators like \"^ <\" (descendants of members)</li>\n                </ul>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"";
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
    + "-constraintGrammar\">\n\n                    </div>\n                    <div class=\"col-md-1\">\n                        <small><i class=\"glyphicon glyphicon-export pull-right\" style=\"font-size: 14px;cursor: pointer;\" id=\"";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-copyConstraint\"></i></small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"btn-group pull-left\" role=\"group\" aria-label=\"...\">\n                    <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-full-syntax-button\">Full</button>\n                    <button type=\"button\" class=\"btn btn-default\" id=\"home-";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-brief-syntax-button\">Brief</button>\n                </div>\n                &nbsp;&nbsp;\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
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
    + " data-statedDescendants='";
  if (helper = helpers.statedDescendants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statedDescendants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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
    + "\" data-statedDescendants=\"";
  if (helper = helpers.statedDescendants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statedDescendants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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
    + "' data-statedDescendants='";
  if (helper = helpers.statedDescendants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statedDescendants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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
    + "\" data-statedDescendants=\"";
  if (helper = helpers.statedDescendants) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statedDescendants); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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
    + "' data-statedDescendants='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.statedDescendants)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
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
    + "\" data-statedDescendants=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.focusConcept)),stack1 == null || stack1 === false ? stack1 : stack1.statedDescendants)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
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
    + "-statedViewButton'><span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span></button></li>\n                </ul>\n            </li>\n            <li class='dropdown' style='margin-bottom: 2px; margin-top: 2px;'>\n                <a href='javascript:void(0);' class='dropdown-toggle' data-toggle='dropdown' style='padding-top: 2px; padding-bottom: 2px;'><span id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-txViewLabel2'></span> <b class='caret'></b></a>\n                <ul class='dropdown-menu' role='menu' style='float: none;'>\n                    <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descendantsCountTrue'><span class='i18n' data-i18n-id='i18n_on'>On</span></button></li>\n                    <li><button class='btn btn-link' id='";
  if (helper = helpers.divElementId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.divElementId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-descendantsCountFalse'><span class='i18n' data-i18n-id='i18n_off'>Off</span></button></li>\n                </ul>\n            </li>\n        </ul>\n    </nav></div>\n    <div ondrop=\"dropT(event, '";
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

var renderExpression = function(concept, inferredConcept, div, options) {
    var preCoordinatedHtml = referenceToExpression(concept);
    var tmp = document.createElement("DIV");
    tmp.innerHTML = preCoordinatedHtml;
    var plainPreCoordinatedExpression =  tmp.textContent || tmp.innerText || "";
    plainPreCoordinatedExpression = plainPreCoordinatedExpression.replace(/\s\s+/g, ' ');

    var statedHtml = conceptToPostCoordinatedExpression(concept, "statedRelationships", div, options);
    var tmp = document.createElement("DIV");
    tmp.innerHTML = statedHtml;
    var plainStatedExpression =  tmp.textContent || tmp.innerText || "";
    plainStatedExpression = plainStatedExpression.replace(/\s\s+/g, ' ');

    var inferredHtml = conceptToPostCoordinatedExpression(concept, "relationships", div, options);
    var tmp = document.createElement("DIV");
    tmp.innerHTML = inferredHtml;
    var plainInferredExpression =  tmp.textContent || tmp.innerText || "";
    plainInferredExpression = plainInferredExpression.replace(/\s\s+/g, ' ');

    //console.log(div);

    var context = {
        divElementId: div.attr('id'),
        preCoordinatedExpressionHtml: preCoordinatedHtml,
        statedExpressionHtml: statedHtml,
        inferredExpressionHtml: inferredHtml,
        plainPreCoordinatedExpression: plainPreCoordinatedExpression,
        plainStatedExpression: plainStatedExpression,
        plainInferredExpression: plainInferredExpression
    };
    div.html(JST["views/conceptDetailsPlugin/tabs/expression.hbs"](context).trim());

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
};
$(function() {
    $.extend($.fn.disableTextSelect = function() {
        return this.each(function() {
            $(this).mousedown(function() {
                return false;
            });
        });
    });
    $('.noSelect').disableTextSelect(); //No text selection on elements with a class of 'noSelect'
});

function conceptDetails(divElement, conceptId, options) {

    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    var languageNameOfLangRefset = {
        "20581000087109": "fr-CA",
        "19491000087109": "en-CA",
        "900000000000508004": "en-GB",
        "900000000000509007": "en-US",
        "450828004":"es-ES",
        "554461000005103":"DA",
        "46011000052107":"SV",
        "32570271000036106":"AU",
        "999001251000000103":"UK",
        "11000146104":"NL"
    };

    if (options.languageNameOfLangRefset)
        languageNameOfLangRefset = options.languageNameOfLangRefset;

    var panel = this;
    this.type = "concept-details";
    this.conceptId = conceptId;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    this.attributesPId = "";
    this.descsPId = "";
    this.relsPId = "";
    this.history = [];
    this.color = "white";
    panel.preferred = false;
    panel.acceptable = false;
    panel.included = false;
    panel.refset = {};
    panel.refset.simple = false;
    panel.refset.simplemap = false;
    panel.refset.attr = false;
    panel.refset.assoc = false;
    this.lastGroup = null;
    this.subscription = null;
    var xhr = null;
    var xhrChildren = null;
    var xhrReferences = null;
    var xhrParents = null;
    var xhrMembers = null;
    var conceptRequested = 0;
    panel.subscriptionsColor = [];
    panel.subscriptions = [];
    panel.subscribers = [];

    componentLoaded = false;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == panel.divElement.id) {
            componentLoaded = true;
        }
    });
    if (componentLoaded == false) {
        componentsRegistry.push(panel);
    }


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

    this.setupCanvas = function() {
        panel.attributesPId = panel.divElement.id + "-attributes-panel";
        panel.descsPId = panel.divElement.id + "-descriptions-panel";
        panel.relsPId = panel.divElement.id + "-rels-panel";
        panel.childrenPId = panel.divElement.id + "-children-panel";
        panel.defaultTerm = "";
        $(divElement).html();
        var context = {
            divElementId: panel.divElement.id,
        };
        //        options statedParents inferredParents firstMatch statedRoles inferredRoles allDescriptions
        // dataContentValue = document.URL.split("?")[0].split("#")[0]

        $(divElement).html(JST["views/conceptDetailsPlugin/main.hbs"](context));

//        $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();

        $("#" + panel.divElement.id + "-expandButton").hide();
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id + "-closeButton").click(function(event) {
            $(divElement).remove();
        });

        $("#" + panel.divElement.id + "-configButton").click(function (event) {
            panel.setupOptionsPanel();
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }

//        if (typeof panel.options.linkerButton != "undefined" && panel.options.linkerButton == false) {
//            $("#" + panel.divElement.id + "-linkerButton").hide();
//        }

        if (typeof panel.options.subscribersMarker != "undefined" && panel.options.subscribersMarker == false) {
            $("#" + panel.divElement.id + "-subscribersMarker").remove();
        }

        if (typeof panel.options.collapseButton != "undefined" && panel.options.collapseButton == false) {
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        }

        $("#" + panel.divElement.id + "-expandButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideDown("fast");
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").show();
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details</strong>");
        });

        $("#" + panel.divElement.id + "-collapseButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
            $("#" + panel.divElement.id + "-expandButton").show();
            $("#" + panel.divElement.id + "-collapseButton").hide();
            //if (panel.defaultTerm.length > 25) {
            //    $("#" + panel.divElement.id + "-panelTitle").html("<strong>Concept Details: " + panel.defaultTerm.substring(0, 24).trim() + "...</strong>");
            //} else {
            $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp<strong>Concept Details: " + panel.defaultTerm + "</strong>");
            //}
        });

        $('#' + panel.divElement.id).click(function(event) {
            if (!$(event.target).hasClass('glyphicon')) {
                $('#' + panel.divElement.id).find('.more-fields-button').popover('hide');
            }
        });

        $("#" + panel.divElement.id + "-historyButton").click(function(event) {
            $("#" + panel.divElement.id + "-historyButton").popover({
                trigger: 'manual',
                placement: 'bottomRight',
                html: true,
                content: function() {
                    var historyHtml = '<div style="height:100px;overflow:auto;">';
                    historyHtml = historyHtml + '<table>';
                    var reversedHistory = panel.history.slice(0);
                    reversedHistory.reverse();
                    //console.log(JSON.stringify(reversedHistory));
                    $.each(reversedHistory, function(i, field) {
                        var d = new Date();
                        var curTime = d.getTime();
                        var ago = curTime - field.time;
                        var agoString = "";
                        if (ago < (1000 * 60)) {
                            if (Math.round((ago / 1000)) == 1) {
                                agoString = Math.round((ago / 1000)) + ' second ago';
                            } else {
                                agoString = Math.round((ago / 1000)) + ' seconds ago';
                            }
                        } else if (ago < (1000 * 60 * 60)) {
                            if (Math.round((ago / 1000) / 60) == 1) {
                                agoString = Math.round((ago / 1000) / 60) + ' minute ago';
                            } else {
                                agoString = Math.round((ago / 1000) / 60) + ' minutes ago';
                            }
                        } else if (ago < (1000 * 60 * 60 * 60)) {
                            if (Math.round(((ago / 1000) / 60) / 60) == 1) {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hour ago';
                            } else {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hours ago';
                            }
                        }
                        historyHtml = historyHtml + '<tr><td><a href="javascript:void(0);" onclick="updateCD(\'' + panel.divElement.id + '\',' + field.conceptId + ');">' + field.defaultTerm + '</a>';
                        historyHtml = historyHtml + ' <span class="text-muted" style="font-size: 80%"><em>' + agoString + '<em></span>';
                        historyHtml = historyHtml + '</td></tr>';
                    });
                    historyHtml = historyHtml + '</table>';
                    historyHtml = historyHtml + '</div>';
                    return historyHtml;
                }
            });
            $("#" + panel.divElement.id + "-historyButton").popover('toggle');
        });

        if (typeof i18n_panel_options == "undefined") {
            i18n_panel_options = "Panel options";
        }
        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_options,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_history == "undefined") {
            i18n_history = 'History';
        }
        $("#" + panel.divElement.id + "-historyButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_history,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_panel_links == "undefined") {
            i18n_panel_links = 'Panel links';
        }
//        $("#" + panel.divElement.id + "-linkerButton").tooltip({
//            placement : 'left',
//            trigger: 'hover',
//            title: i18n_panel_links,
//            animation: true,
//            delay: 1000
//        });

        $("#" + panel.divElement.id + "-apply-button").click(function() {
            //console.log("apply!");
            panel.readOptionsPanel();
//            panel.updateCanvas();
        });

//        $("#" + panel.divElement.id + "-linkerButton").click(function(event) {
//            $("#" + panel.divElement.id + "-linkerButton").popover({
//                trigger: 'manual',
//                placement: 'bottomRight',
//                html: true,
//                content: function() {
//                    if (panel.subscriptions.length == 0) {
//                        linkerHtml = '<div class="text-center text-muted"><em>Not linked yet<br>Drag to link with other panels</em></div>';
//                    } else {
//                        var linkHtml = '';
//                        $.each(panel.subscriptions, function(i, field){
//                            var panelLink = {};
//                            $.each(componentsRegistry, function(i, panl){
//                                if (panl.divElement.id == field.topic){
//                                    panelLink = panl;
//                                }
//                            });
//                            linkHtml = linkHtml + '<div class="text-center"><a href="javascript:void(0);" onclick="\'' + panel.unsubscribe(panelLink) + '\'">Clear link with '+ field.topic +'</a><br></div>';
//                        });
//                        linkHtml = linkHtml + '';
//                        linkerHtml = linkHtml;
//                    }
//                    return linkerHtml;
//                }
//            });
//            $("#" + panel.divElement.id + "-linkerButton").popover('toggle');
//        });

        panel.updateCanvas();
        channel.publish(panel.divElement.id, {
            term: panel.term,
            module: panel.module,
            conceptId: panel.conceptId,
            source: panel.divElement.id
        });
        panel.setupOptionsPanel();
        if (panel.subscriptions.length > 0 || panel.subscribers.length > 0){
            $("#" + panel.divElement.id + "-subscribersMarker").show();
        }
        $("#" + panel.divElement.id + "-ownMarker").css('color', panel.markerColor);
    }

    this.updateCanvas = function() {
//        $("#members-" + panel.divElement.id).html("");
        $("#home-children-cant-" + panel.divElement.id).html("");
        $('.more-fields-button').popover('hide');
        if (conceptRequested == panel.conceptId) {
            return;
        }
        conceptRequested = panel.conceptId;
        $("#home-children-" + panel.divElement.id + "-body").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.attributesPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-attributes-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.descsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.relsPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-parents-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#home-roles-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#' + panel.childrenPId).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#refsets-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $('#product-details-' + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");

        // load attributes
        if (xhr != null) {
            xhr.abort();
            //console.log("aborting call...");
        }
        xhr = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + panel.conceptId, function (result) {

        }).done(function (result) {
            var firstMatch = result;
            xhr = null;
            panel.attributesPId = divElement.id + "-attributes-panel";
            panel.defaultTerm = firstMatch.defaultTerm;
            var d = new Date();
            var time = d.getTime();
            panel.history.push({defaultTerm: firstMatch.defaultTerm, conceptId: firstMatch.conceptId, time: time});
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            if (firstMatch.statedDescendants) {
                firstMatch.statedDescendantsString = firstMatch.statedDescendants.toLocaleString();
            }
            if (firstMatch.inferredDescendants) {
                firstMatch.inferredDescendantsString = firstMatch.inferredDescendants.toLocaleString();
            }
            var context = {
                options: panel.options,
                firstMatch: firstMatch,
                divElementId: panel.divElement.id,
                edition: options.edition,
                release: options.release,
                server: options.serverUrl.substr(0, options.serverUrl.length - 10),
                langRefset: panel.options.langRefset,
//                dataContentValue: options.serverUrl.substr(0, options.serverUrl.length - 10)
                dataContentValue: document.URL.split("?")[0].split("#")[0]
            };

            $('#' + panel.attributesPId).html(JST["views/conceptDetailsPlugin/tabs/details/attributes-panel.hbs"](context));
            $('#' + 'share-link-' + panel.divElement.id).disableTextSelect();
            $('#' + 'share-link-' + panel.divElement.id).click(function (event) {
                setTimeout(function () {
                    $('#' + 'share-field-' + panel.divElement.id).select();
                }, 300);
            });


            // load home-attributes
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper("if_fav", function (concept, opts){
                var favs = stringToArray(localStorage.getItem("favs"));
                var found = false;
                if (favs){
                    $.each(favs, function (i, field){
                        if (field == concept){
                            found = true;
                        }
                    });
                    if (found){
                        return opts.fn(this);
                    }else{
                        return opts.inverse(this);
                    }
                }else{
                    return opts.inverse(this);
                }
            });
            var context = {
                panel: panel,
                firstMatch: firstMatch,
                divElementId: panel.divElement.id,
                link: document.URL.split("?")[0].split("#")[0] + "?perspective=full&conceptId1=" + firstMatch.conceptId + "&edition=" + panel.options.edition + "&release=" + panel.options.release + "&server=" + panel.options.serverUrl + "&langRefset=" + panel.options.langRefset
            };
            $('#home-attributes-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/home/attributes.hbs"](context));

            // Update browser history
            var historyUrl = "?perspective=full&conceptId1=" + firstMatch.conceptId + "&edition=" + options.edition + "&release=" + options.release + "&server=" + options.serverUrl + "&langRefset=" + options.langRefset;
            manualStateChange = false;
            var state = {
                name: firstMatch.defaultTerm,
                conceptId: firstMatch.conceptId,
                url: historyUrl
            };
            History.pushState(state, "SNOMED CT - " + firstMatch.defaultTerm, historyUrl);

            $(".glyphicon-star-empty").click(function(e){
                var concept = {
                    module: firstMatch.module,
                    conceptId: firstMatch.conceptId,
                    defaultTerm: firstMatch.defaultTerm
                };
                if ($(e.target).hasClass("glyphicon-star")){
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    $.each(favs, function(i,field){
                        if (field != $(e.target).attr("data-conceptId")){
                            auxFavs.push(field);
                        }
                    });
                    localStorage.setItem("favs", auxFavs);
                    localStorage.removeItem("conceptId:" + $(e.target).attr("data-conceptId"));
                    $(e.target).addClass("glyphicon-star-empty");
                    $(e.target).removeClass("glyphicon-star");
//                            console.log("removed from favs");
                }else{
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    if (!favs){
                        favs = [];
                        favs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", favs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }else{
                        $.each(favs, function(i,field){
                            if (field != $(e.target).attr("data-conceptId")){
                                auxFavs.push(field);
                            }
                        });
                        auxFavs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", auxFavs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }
                    $(e.target).addClass("glyphicon-star");
                    $(e.target).removeClass("glyphicon-star-empty");
                }
                channel.publish("favsAction");
            });
            // console.log("paso");
            //$('.clip-btn').unbind();
            if (panel.clipboard) panel.clipboard.destroy();
            panel.clipboard = new Clipboard('.clip-btn');
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


            $(".glyphicon-star").click(function(e){
                var concept = {
                    module: firstMatch.module,
                    conceptId: firstMatch.conceptId,
                    defaultTerm: firstMatch.defaultTerm
                };
                if ($(e.target).hasClass("glyphicon-star")){
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    $.each(favs, function(i,field){
                        if (field != $(e.target).attr("data-conceptId")){
                            auxFavs.push(field);
                        }
                    });
                    localStorage.setItem("favs", auxFavs);
                    localStorage.removeItem("conceptId:" + $(e.target).attr("data-conceptId"));
                    $(e.target).addClass("glyphicon-star-empty");
                    $(e.target).removeClass("glyphicon-star");
//                            console.log("removed from favs");
                }else{
                    var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                    if (!favs){
                        favs = [];
                        favs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", favs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }else{
                        $.each(favs, function(i,field){
                            if (field != $(e.target).attr("data-conceptId")){
                                auxFavs.push(field);
                            }
                        });
                        auxFavs.push($(e.target).attr("data-conceptId"));
                        localStorage.setItem("favs", auxFavs);
                        localStorage.setItem("conceptId:" + $(e.target).attr("data-conceptId"), JSON.stringify(concept));
                    }
                    $(e.target).addClass("glyphicon-star");
                    $(e.target).removeClass("glyphicon-star-empty");
                }
                channel.publish("favsAction");
            });

            if (!firstMatch.active) {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "LightPink");
            } else {
                $('#home-attributes-' + panel.divElement.id).css("background-color", "#428bca");
            }

            if ($("#" + panel.divElement.id + "-expandButton").is(":visible")) {
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp;&nbsp;&nbsp;<strong>Concept Details: " + panel.defaultTerm + "</strong>");
            }
            if (typeof i18n_drag_this == "undefined") {
                i18n_drag_this = "Drag this";
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

            // load descriptions panel
            panel.descsPId = divElement.id + "-descriptions-panel";
            var languageName = "";
            if (panel.options.langRefset == "900000000000508004") {
                languageName = "(GB)";
            } else if (panel.options.langRefset == "900000000000509007") {
                languageName = "(US)";
            } else if (panel.options.langRefset == "450828004") {
                languageName = "(ES)";
            } else if (panel.options.langRefset == "554461000005103") {
                languageName = "(DA)";
            } else if (panel.options.langRefset == "46011000052107") {
                languageName = "(SV)";
            } else if (panel.options.langRefset == "32570271000036106") {
                languageName = "(AU)";
            } else if (panel.options.langRefset == "999001251000000103") {
                languageName = "(UK)";
            } else if (panel.options.langRefset == "31000146106") {
                languageName = "(NL)";
            }
            // START FOR
            var allLangsHtml = "";
            $.each(panel.options.langRefset, function (i, loopSelectedLangRefset){
                var allDescriptions = firstMatch.descriptions.slice(0);
                var homeDescriptionsHtml = "";
                $.each(allDescriptions, function (i, field) {
                    field.included = false;
                    field.preferred = false;
                    field.acceptable = false;
                    if (panel.options.displayInactiveDescriptions || field.active == true) {
                        if (field.active == true) {
                            if (homeDescriptionsHtml != "") {
                                homeDescriptionsHtml = homeDescriptionsHtml + "<br>";
                            }
                            homeDescriptionsHtml = homeDescriptionsHtml + "&nbsp;&nbsp;&nbsp;&nbsp;" + field.term;
                        }
                    }
                });
                Handlebars.registerHelper('removeSemtag', function (term) {
                    return panel.removeSemtag(term);
                });
                Handlebars.registerHelper('if_eq', function (a, b, opts) {
                    if (opts != "undefined") {
                        if (a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });

                var auxDescriptions = [];
                $.each(allDescriptions, function (i, description){
                    var included = false;
                    if (description.langMemberships){
                        $.each(description.langMemberships, function (i, langMembership){
                            if (langMembership.refset.conceptId == loopSelectedLangRefset){
                                included = true;
                                if (langMembership.acceptability.conceptId == "900000000000548007"){
                                    description.preferred = true;
                                }else{
                                    if (langMembership.acceptability.conceptId == "900000000000549004"){
                                        description.acceptable = true;
                                    }
                                }
                            }
                        });
                    }
                    if (included){
                        auxDescriptions.push(description);
                    }else{
                        description.acceptable = false;
                        if (panel.options.hideNotAcceptable){
                            if (panel.options.displayInactiveDescriptions){
                                auxDescriptions.push(description);
                            }
                        }else{
                            if (options.displayInactiveDescriptions){
                                auxDescriptions.push(description);
                            }else{
                                if (description.active){
                                    auxDescriptions.push(description);
                                }
                            }
                        }
                    }
                });
                allDescriptions = auxDescriptions.slice(0);
                allDescriptions.sort(function (a, b) {
                    if (a.active && !b.active)
                        return -1;
                    if (!a.active && b.active)
                        return 1;
                    if (a.active == b.active) {
                        if ((a.acceptable || a.preferred) && (!b.preferred && !b.acceptable))
                            return -1;
                        if ((!a.preferred && !a.acceptable) && (b.acceptable || b.preferred))
                            return 1;
                        if (a.type.conceptId < b.type.conceptId)
                            return -1;
                        if (a.type.conceptId > b.type.conceptId)
                            return 1;
                        if (a.type.conceptId == b.type.conceptId) {
                            if (a.preferred && !b.preferred)
                                return -1;
                            if (!a.preferred && b.preferred)
                                return 1;
                            if (a.preferred == b.preferred) {
                                if (a.term < b.term)
                                    return -1;
                                if (a.term > b.term)
                                    return 1;
                            }
                        }
                    }

                    return 0;
                });

                var context = {
                    options: panel.options,
                    languageName: "(" + languageNameOfLangRefset[loopSelectedLangRefset] + ")",
                    longLangName: loopSelectedLangRefset,
                    divElementId: panel.divElement.id,
                    allDescriptions: allDescriptions
                };

                $.each(panel.options.manifest.languageRefsets, function (i, looplr){
                    if (looplr.conceptId == loopSelectedLangRefset) {
                        context.longLangName = looplr.defaultTerm;
                    }
                });

                allLangsHtml += JST["views/conceptDetailsPlugin/tabs/details/descriptions-panel.hbs"](context);
                //if (panel.options.displaySynonyms) {
                    $('#home-descriptions-' + panel.divElement.id).html(homeDescriptionsHtml);
                //}
            });
            // END FOR
            $("#" + panel.descsPId).html(allLangsHtml);


            if (panel.options.displaySynonyms != true) { // hide synonyms
                $('#' + panel.descsPId).find('.synonym-row').each(function (i, val) {
                    $(val).toggle();
                });
                $(this).toggleClass('glyphicon-plus');
                $(this).toggleClass('glyphicon-minus');
            }
            $("#" + panel.descsPId + "-descButton").disableTextSelect();
            $("#" + panel.descsPId + "-descButton").click(function () {
                table = $(this).closest("table").first();
                $(this).toggleClass('glyphicon-plus');
                $(this).toggleClass('glyphicon-minus');
                table.find('.synonym-row').each(function (i, val) {
                    $(val).toggle();
                });
            });

            $('#' + panel.descsPId).find("[rel=tooltip-right]").tooltip({ placement: 'right'});


            // load relationships panel and home parents/roles
            if (panel.options.selectedView == "stated") {
                //$('#home-' + panel.divElement.id + '-viewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
                //$('#home-' + panel.divElement.id + '-diagram-viewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
                $('#home-' + panel.divElement.id + '-stated-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').unbind();
                $('#home-' + panel.divElement.id + '-stated-button').addClass("btn-primary");
                $('#home-' + panel.divElement.id + '-stated-button').removeClass("btn-default");
                $('#home-' + panel.divElement.id + '-inferred-button').addClass("btn-default");
                $('#home-' + panel.divElement.id + '-inferred-button').removeClass("btn-primary");
                $('#home-' + panel.divElement.id + '-inferred-button').click(function (event) {
                    panel.options.selectedView = "inferred";
                    panel.updateCanvas();
                });
            } else {
                //$('#home-' + panel.divElement.id + '-viewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
                //$('#home-' + panel.divElement.id + '-diagram-viewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
                $('#home-' + panel.divElement.id + '-stated-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').unbind();
                $('#home-' + panel.divElement.id + '-inferred-button').addClass("btn-primary");
                $('#home-' + panel.divElement.id + '-inferred-button').removeClass("btn-default");
                $('#home-' + panel.divElement.id + '-stated-button').addClass("btn-default");
                $('#home-' + panel.divElement.id + '-stated-button').removeClass("btn-primary");
                $('#home-' + panel.divElement.id + '-stated-button').click(function (event) {
                    panel.options.selectedView = "stated";
                    panel.updateCanvas();
                });
            }
            panel.relsPId = divElement.id + "-rels-panel";
            panel.statedParents = [];
            panel.inferredParents = [];
            panel.statedRoles = [];
            panel.inferredRoles = [];


            if (firstMatch.relationships) {
                firstMatch.relationships.sort(function (a, b) {
                    if (a.groupId < b.groupId) {
                        return -1;
                    } else if (a.groupId > b.groupId) {
                        return 1;
                    } else {
                        if (a.type.conceptId == 116680003) {
                            return -1;
                        }
                        if (b.type.conceptId == 116680003) {
                            return 1;
                        }
                        if (a.target.defaultTerm < b.target.defaultTerm)
                            return -1;
                        if (a.target.defaultTerm > b.target.defaultTerm)
                            return 1;
                        return 0;
                    }
                });
            }
            if (firstMatch.statedRelationships) {
                firstMatch.statedRelationships.sort(function (a, b) {
                    if (a.groupId < b.groupId) {
                        return -1;
                    } else if (a.groupId > b.groupId) {
                        return 1;
                    } else {
                        if (a.type.conceptId == 116680003) {
                            return -1;
                        }
                        if (b.type.conceptId == 116680003) {
                            return 1;
                        }
                        if (a.target.defaultTerm < b.target.defaultTerm)
                            return -1;
                        if (a.target.defaultTerm > b.target.defaultTerm)
                            return 1;
                        return 0;
                    }
                });
            }
            Handlebars.registerHelper('push', function (element, array) {
                array.push(element);
                // return ;
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            var additionalRels;
            if (firstMatch.additionalRelationships) {
                $.each(firstMatch.additionalRelationships, function (i, looplr){
                    if (looplr.active) {
                        if (typeof additionalRels == "undefined")
                            additionalRels = [];
                        additionalRels.push(looplr);
                    }
                });
            }
            var context = {
                options: panel.options,
                firstMatch: firstMatch,
                inferredParents: panel.inferredParents,
                inferredRoles: panel.inferredRoles,
                statedParents: panel.statedParents,
                statedRoles: panel.statedRoles,
                additionalRels: additionalRels
            };
            $("#" + panel.relsPId).html(JST["views/conceptDetailsPlugin/tabs/details/rels-panel.hbs"](context));


            panel.inferredParents.sort(function (a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            panel.statedParents.sort(function (a, b) {
                if (a.target.defaultTerm < b.target.defaultTerm)
                    return -1;
                if (a.target.defaultTerm > b.target.defaultTerm)
                    return 1;
                return 0;
            });

            panel.inferredRoles.sort(function (a, b) {
                if (a.groupId < b.groupId) {
                    return -1;
                } else if (a.groupId > b.groupId) {
                    return 1;
                } else {
                    if (a.target.defaultTerm < b.target.defaultTerm)
                        return -1;
                    if (a.target.defaultTerm > b.target.defaultTerm)
                        return 1;
                    return 0;
                }
            });

            panel.statedRoles.sort(function (a, b) {
                if (a.groupId < b.groupId) {
                    return -1;
                } else if (a.groupId > b.groupId) {
                    return 1;
                } else {
                    if (a.target.defaultTerm < b.target.defaultTerm)
                        return -1;
                    if (a.target.defaultTerm > b.target.defaultTerm)
                        return 1;
                    return 0;
                }
            });

            Handlebars.registerHelper('substr', function (string, start) {
                var l = string.lastIndexOf("(") - 1;
                return string.substr(start, l);
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function (a, b, opts) {
                if (a) {
                    var s = a.lastIndexOf("(");
                    if (s > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            var context = {
                divElementId: panel.divElement.id,
                statedParents: panel.statedParents,
                inferredParents: panel.inferredParents,
                options: panel.options
            };
            $('#home-parents-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/home/parents.hbs"](context));
            if (!panel.options.diagrammingMarkupEnabled) {
                $('#home-parents-' + panel.divElement.id).html(panel.stripDiagrammingMarkup($('#home-parents-' + panel.divElement.id).html()));
            }
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
            $("#home-parents-" + panel.divElement.id).unbind();
            $("#home-parents-" + panel.divElement.id).click(function (event) {
                if ($(event.target).hasClass("treeButton")) {
                    var ev = event.target;
                    //firefox issue!
                    if (navigator.userAgent.indexOf("Firefox") > -1) {
                        ev = $(ev).context.children;
                    }
                    var conceptId = $(ev).closest("li").attr('data-concept-id');
                    event.preventDefault();
                    if ($(ev).hasClass("glyphicon-chevron-up")) {
                        $(ev).closest("li").find("ul").remove();
                        $(ev).removeClass("glyphicon-chevron-up");
                        $(ev).addClass("glyphicon-chevron-right");
                    } else if ($(ev).hasClass("glyphicon-chevron-right")) {
                        $(ev).removeClass("glyphicon-chevron-right");
                        $(ev).addClass("glyphicon-refresh");
                        $(ev).addClass("icon-spin");
                        panel.getParent(conceptId, ev);
                    } else if ($(ev).hasClass("glyphicon-minus")) {
//                      $("#" + iconId).removeClass("glyphicon-minus");
//                    $("#" + iconId).addClass("glyphicon-chevron-right");
                    }
                } else if ($(event.target).hasClass("treeLabel")) {
                    var selectedId = $(event.target).attr('data-concept-id');
                    if (typeof selectedId != "undefined") {
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).attr('data-term'),
                            module: $(event.target).attr("data-module"),
                            conceptId: selectedId,
                            source: panel.divElement.id
                        });
                    }
                }
            });
            $("#home-parents-" + panel.divElement.id).dblclick(function (event){
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                panel.conceptId = conceptId;
                panel.updateCanvas();
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            });

            Handlebars.registerHelper('eqLastGroup', function (a, opts) {
//                console.log(a, panel.lastGroup);
                if(panel.lastGroup == null){
                    panel.lastGroup = a;
                    return opts.fn(this);
                }
                if (a != panel.lastGroup)
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('removeSemtag', function (term) {
                return panel.removeSemtag(term);
            });
            Handlebars.registerHelper('setLastGroup', function (a) {
                panel.lastGroup = a;
            });
            Handlebars.registerHelper('lastColor', function (a) {
                if (a == "get") {
                    return "";
//                    return panel.color;
                } else {
                    if (a == "random"){
                        panel.color = getRandomColor();
                    }else{
                        panel.color = a;
                    }
                }
            });
            Handlebars.registerHelper('getRandomColor', function () {
//                return getRandomColor();
                return "";
            });
            var context = {
                options: panel.options,
                statedRoles: panel.statedRoles,
                inferredRoles: panel.inferredRoles
            };
//            console.log(panel.statedRoles);
//            console.log(panel.inferredRoles);
            $('#home-roles-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/home/roles.hbs"](context));

            if (!panel.options.diagrammingMarkupEnabled) {
                $('#home-roles-' + panel.divElement.id).html(panel.stripDiagrammingMarkup($('#home-roles-' + panel.divElement.id).html()));
            }


            Handlebars.registerHelper('if_eq', function (a, b, opts) {
                if (opts != "undefined") {
                    if (a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('refset', function (type, data, opts) {
                if (data == "get") {
                    if (panel.refset[type]) {
                        return opts.fn(this);
                    } else {
                        return opts.inverse(this);
                    }
                } else {
                    panel.refset[type] = data;
                }
            });
            var context = {
                firstMatch: firstMatch
            };
            $('#refsets-' + panel.divElement.id).html(JST["views/conceptDetailsPlugin/tabs/refset.hbs"](context));

            $.each($("#refsets-" + panel.divElement.id).find('.refset-simplemap'), function (i, field) {
//                console.log(field);
//                console.log($(field).attr('data-refsetId'));
                if ($(field).attr('data-refsetId') == "467614008") {
                    channel.publish("refsetSubscription-467614008", {
                        conceptId: $(field).attr('data-conceptId')
                    });
                }
            });

            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "references-tab") {
                $("#references-" + panel.divElement.id + "-resultsTable").html("");
                panel.getReferences(firstMatch.conceptId);
            }

            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "diagram-tab") {
                drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options, panel);
            }

            if ($('ul#details-tabs-' + panel.divElement.id + ' li.active').attr('id') == "expression-tab") {
                $("#expression-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                setTimeout(function () {
                    renderExpression(firstMatch, firstMatch, $("#expression-canvas-" + panel.divElement.id), options);
                }, 300);
            }

            $("#references-tab-link-" + panel.divElement.id).unbind();
            $("#references-tab-link-" + panel.divElement.id).click(function (e) {
                $("#references-" + panel.divElement.id + "-resultsTable").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                panel.getReferences(firstMatch.conceptId);
            });
            $("#diagram-tab-link-" + panel.divElement.id).unbind();
            $("#diagram-tab-link-" + panel.divElement.id).click(function (e) {
                $("#diagram-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                setTimeout(function () {
                    $("#diagram-canvas-" + panel.divElement.id).html("");
                    drawConceptDiagram(firstMatch, $("#diagram-canvas-" + panel.divElement.id), panel.options, panel);
                }, 1000);
            });

            $("#expression-tab-link-" + panel.divElement.id).unbind();
            $("#expression-tab-link-" + panel.divElement.id).click(function (e) {
                $("#expression-canvas-" + panel.divElement.id).html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                setTimeout(function () {
                    $("#expression-canvas-" + panel.divElement.id).html("");
                    renderExpression(firstMatch, firstMatch, $("#expression-canvas-" + panel.divElement.id), options);
                }, 1000)
            });

            if (firstMatch.defaultTerm.endsWith("(clinical drug)")) {
                $("#product-details-tab").show();
                var productData = {
                    defaultTerm: firstMatch.defaultTerm,
                    forms: [],
                    groups: {},
                    ingredients: []
                };
                firstMatch.relationships.forEach(function(loopRel) {
                    if (loopRel.type.conceptId == "411116001" && loopRel.active) {
                        productData.forms.push(loopRel);
                    } else if (loopRel.active && loopRel.groupId != 0) {
                        if (typeof productData.groups[loopRel.groupId] == "undefined") {
                            productData.groups[loopRel.groupId] = [];
                        }
                        productData.groups[loopRel.groupId].push(loopRel);
                    }
                });
                Object.keys(productData.groups).forEach(function(loopKey) {
                    var loopGroup = productData.groups[loopKey];
                    var loopIngredient = {};
                    loopGroup.forEach(function(loopRel) {
                        if (loopRel.type.conceptId == "127489000") {
                            loopIngredient.ingredient = loopRel.target;
                        } else if (loopRel.type.conceptId == "732946004") {
                            loopIngredient.denominatorValue = loopRel.target;
                        } else if (loopRel.type.conceptId == "732944001") {
                            loopIngredient.numeratorValue = loopRel.target;
                        } else if (loopRel.type.conceptId == "732943007") {
                            loopIngredient.boss = loopRel.target;
                        } else if (loopRel.type.conceptId == "732947008") {
                            loopIngredient.denominatorUnit = loopRel.target;
                        } else if (loopRel.type.conceptId == "732945000") {
                            loopIngredient.numeratorUnit = loopRel.target;
                        }
                    });
                    productData.ingredients.push(loopIngredient);
                    // var demoIngredient1 = {
                    //     ingredient: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"Atenolol (substance)"},
                    //     boss: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"Atenolol (substance)"},
                    //     numeratorValue: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"50 (qualifier value)"},
                    //     numeratorUnit: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"milligram (qualifier value)"},
                    //     denominatorValue: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"1 (qualifier value)"},
                    //     denominatorUnit: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"Tablet (unit of presentation)"}
                    // };
                    // var demoIngredient2 = {
                    //     ingredient: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"Chlorthalidone (substance)"},
                    //     boss: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"Chlorthalidone (substance)"},
                    //     numeratorValue: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"12.5 (qualifier value)"},
                    //     numeratorUnit: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"milligram (qualifier value)"},
                    //     denominatorValue: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"1 (qualifier value)"},
                    //     denominatorUnit: {definitionStatus: "Primitive",conceptId:1,defaultTerm:"Tablet (unit of presentation)"}
                    // };
                    //productData.ingredients = [demoIngredient1, demoIngredient2];
                });
                console.log(productData);
                var context = {
                    productData: productData
                };
                $('#product-details-' + panel.divElement.id).html(
                    JST["views/conceptDetailsPlugin/tabs/product.hbs"](context));
            } else {
                $("#product-details-tab").hide();
                $('#details-tabs-' + panel.divElement.id + ' a:first').tab('show')
            }

            $('.more-fields-button').disableTextSelect();
            $('.more-fields-button').popover();

//          firefox popover
            if (navigator.userAgent.indexOf("Firefox") > -1) {
                $(".more-fields-button").optionsPopover({
                    contents: "",
                    disableBackButton: true
                });

                $(".more-fields-button").click(function (e) {
                    var auxHtml = $(e.target).attr('data-content');
                    $("#popoverContent").html(auxHtml);
                });
            }

            if (panel.options.selectedView == "stated") {
                $('#' + panel.relsPId).find('.inferred-rel').each(function (i, val) {
                    $(val).toggle();
                });
            } else if (panel.options.selectedView == "inferred") {
                $('#' + panel.relsPId).find('.stated-rel').each(function (i, val) {
                    $(val).toggle();
                });
            } else if (panel.options.selectedView != "all") {
                // show all
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

            if (typeof(switchLanguage) == "function") {
                switchLanguage(selectedLanguage, selectedFlag, false);
            }
            conceptRequested = 0;

//            membersUrl = options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + panel.conceptId + "/members";

        }).fail(function () {
            panel.relsPId = divElement.id + "-rels-panel";
            panel.attributesPId = divElement.id + "-attributes-panel";
            panel.descsPId = divElement.id + "-descriptions-panel";
            $("#home-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $("#diagram-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $("#members-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $("#references-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $("#refsets-" + panel.divElement.id).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $('#' + panel.attributesPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
            $('#' + panel.descsPId).html("");
            $('#' + panel.relsPId).html("");
        });
//        if (typeof xhr != "undefined") {
//            console.log("aborting call...");
//
//        }
        if (panel.options.displayChildren) {
            var context = {

            };
        } else {
        }

//        if (panel.options.displayChildren == false) {
////            $("#home-children-" + panel.divElement.id).hide();
//            $('#' + panel.childrenPId).html("");
//            $('#' + panel.childrenPId).hide();
//        } else {
//            $("#home-children-" + panel.divElement.id).show();
//            $('#' + panel.childrenPId).show();
        if (xhrChildren != null) {
            xhrChildren.abort();
            //console.log("aborting children call...");
        }
        xhrChildren = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + panel.conceptId + "/children?form=" + panel.options.selectedView, function (result) {
            //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
        }).done(function (result) {
            // load relationships panel
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            xhrChildren = null;
            panel.childrenPId = divElement.id + "-children-panel";
//                console.log(result);
            var context = {
                displayChildren: panel.options.displayChildren,
                divElementId: panel.divElement.id,
                childrenResult: result,
                selectedView: panel.options.selectedView
            };
            $("#home-children-cant-" + panel.divElement.id).html("(" + result.length + ")");
            $('#' + panel.childrenPId).html(JST["views/conceptDetailsPlugin/tabs/details/children-panel.hbs"](context));
            $("#home-children-" + panel.divElement.id + "-body").html(JST["views/conceptDetailsPlugin/tabs/home/children.hbs"](context));
            $(".treeButton").disableTextSelect();
            if (typeof i18n_drag_this == "undefined"){
                i18n_drag_this = "Drag this";
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
            $("#home-children-" + panel.divElement.id + "-body").unbind();
            $("#home-children-" + panel.divElement.id + "-body").click(function (event) {
                if ($(event.target).hasClass("treeButton")) {
                    var conceptId = $(event.target).closest("li").attr('data-concept-id');
                    var iconId = panel.divElement.id + "-treeicon-" + conceptId;
                    event.preventDefault();
                    if ($("#" + iconId).hasClass("glyphicon-chevron-down")) {
                        //console.log("close");
                        $(event.target).closest("li").find("ul").remove();
                        $("#" + iconId).removeClass("glyphicon-chevron-down");
                        $("#" + iconId).addClass("glyphicon-chevron-right");
                    } else if ($("#" + iconId).hasClass("glyphicon-chevron-right")) {
                        //console.log("open");
                        $("#" + iconId).removeClass("glyphicon-chevron-right");
                        $("#" + iconId).addClass("glyphicon-refresh");
                        $("#" + iconId).addClass("icon-spin");
                        panel.getChildren($(event.target).closest("li").attr('data-concept-id'), true);
                    } else if ($("#" + iconId).hasClass("glyphicon-minus")) {
//                    $("#" + iconId).removeClass("glyphicon-minus");
//                    $("#" + iconId).addClass("glyphicon-chevron-right");
                    }
                } else if ($(event.target).hasClass("treeLabel")) {
                    var selectedId = $(event.target).attr('data-concept-id');
                    if (typeof selectedId != "undefined") {
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).attr('data-term'),
                            module: $(event.target).attr("data-module"),
                            conceptId: selectedId,
                            source: panel.divElement.id
                        });
                    }
                }
            });

            $("#home-children-" + panel.divElement.id + "-body").dblclick(function (event){
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                panel.conceptId = conceptId;
                panel.updateCanvas();
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            });
            if (typeof i18n_display_children == "undefined"){
                i18n_display_children = "Display Children";
            }
            $("#" + panel.divElement.id + "-showChildren").tooltip({
                placement : 'right',
                trigger: 'hover',
                title: i18n_display_children,
                animation: true,
                delay: 500
            });
            $("#" + panel.divElement.id + "-showChildren").click(function(){
                panel.options.displayChildren = true;
                panel.updateCanvas();
            });
        }).fail(function () {
            $('#' + panel.childrenPId).html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });
//    }
        panel.loadMembers(100, 0);
    }

    this.getReferences = function (conceptId){
        $("#references-" + panel.divElement.id + "-accordion").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        //console.log(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/references");
        if (xhrReferences != null) {
            xhrReferences.abort();
            //console.log("aborting references call...");
        }
        xhrReferences = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/references?form=" + panel.options.selectedView, function(result) {

        }).done(function(result){
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            $.each(result, function (i, field){
                if (field.statedRelationships){
                    field.relationship = field.statedRelationships[0].type.defaultTerm;
                }else{
                    field.relationship = field.relationships[0].type.defaultTerm;
                }
            });
            result.sort(function (a, b) {
                if (a.relationship < b.relationship)
                    return -1;
                if (a.relationship > b.relationship)
                    return 1;
                if (a.relationship == b.relationship) {
                    if (a.defaultTerm < b.defaultTerm)
                        return -1;
                    if (a.defaultTerm > b.defaultTerm)
                        return 1;
                }
                return 0;
            });
            result.groups = [];
            var lastR = "", auxArray = [];
            $.each(result, function(i, field){
                if (lastR == ""){
                    auxArray.push(field);
                    lastR = field.relationship;
                }else{
                    if (lastR == field.relationship){
                        auxArray.push(field);
                    }else{
                        result.groups.push(auxArray);
                        auxArray = [];
                        auxArray.push(field);
                        lastR = field.relationship;
                    }
                }
            });
            result.groups.push(auxArray);
//            console.log(result.groups);
            var context = {
                divElementId: panel.divElement.id,
                result: result,
                groups: result.groups
            };
//            $("#references-" + panel.divElement.id + "-total").html(result.length  + " references");
            $("#references-" + panel.divElement.id + "-accordion").html(JST["views/conceptDetailsPlugin/tabs/references.hbs"](context));
            $("#references-" + panel.divElement.id + "-accordion").click(function(e){
                if ($($(e.target).closest("a").attr("href")).hasClass("collapse")){
                    //console.log("finded");
                    var target = $($(e.target).closest("a").attr("href") + "-span");
                    if (target.hasClass("glyphicon-chevron-right")){
                        target.removeClass("glyphicon-chevron-right");
                        target.addClass("glyphicon-chevron-down");
                    }else{
                        target.addClass("glyphicon-chevron-right");
                        target.removeClass("glyphicon-chevron-down");
                    }
                }
            });
//            console.log(result, result.length);
        }).fail(function(){
            $("#references-" + panel.divElement.id + "-accordion").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });

    }

    this.getChildren = function(conceptId, forceShow) {
        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        if (panel.options.selectedView == "inferred") {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
        } else {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
        }

        if (xhrChildren != null) {
            xhrChildren.abort();
            //console.log("aborting children call...");
        }
        xhrChildren = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/children?form=" + panel.options.selectedView, function(result) {
        }).done(function(result) {
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            //console.log(JSON.stringify(result));
            var listIconIds = [];
            //console.log(JSON.stringify(listIconIds));
            var context = {
                displayChildren: panel.options.displayChildren,
                childrenResult: result,
                divElementId: panel.divElement.id,
                selectedView: panel.options.selectedView
            };
            if (typeof forceShow != "undefined"){
                if (forceShow){
                    context.displayChildren = forceShow;
                }
            }
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('push', function (element){
                listIconIds.push(element);
            });
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            if (result.length > 0) {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
            }
            $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").append(JST["views/conceptDetailsPlugin/tabs/home/children.hbs"](context));
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

        }).fail(function() {
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
        });
    }

    this.getParent = function(conceptId, target){
        if (xhrParents != null) {
            xhrParents.abort();
            //console.log("aborting children call...");
        }
        xhrParents = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/parents", function(result) {
            //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
        }).done(function(result) {
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            var auxHtml = "";
            var ind = $(target).attr('data-ind');
            if (result.length > 0){
                if ($(target).attr('data-firstt')){
                    auxHtml = "<ul style='margin-left: 95px; list-style-type: none; padding-left: 15px'>";
                }else{
                    auxHtml = "<ul style='list-style-type: none; padding-left: 15px'>";
                }
                $.each(result, function(i, field){
//                    console.log(field);
                    auxHtml = auxHtml + "<li class='treeLabel' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'><button class='btn btn-link btn-xs treeButton' style='padding:2px'>";
                    if (field.conceptId == "138875005" || field.conceptId == "9999999999"){
                        auxHtml = auxHtml + "<i class='glyphicon glyphicon-minus treeButton' data-ind='" + ind + "'></i></button>";
                    }else{
                        auxHtml = auxHtml + "<i class='glyphicon glyphicon-chevron-right treeButton' data-ind='" + ind + "'></i></button>";
                    }
                    if (field.definitionStatus == "Primitive"){
                        auxHtml = auxHtml + "<span class='badge alert-warning' draggable='true' ondragstart='drag(event)' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>&nbsp;&nbsp;</span>&nbsp;&nbsp";
                    }else{
                        auxHtml = auxHtml + "<span class='badge alert-warning' draggable='true' ondragstart='drag(event)' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>&equiv;</span>&nbsp;&nbsp";
                    }
                    if (countryIcons[field.module]){
                        auxHtml = auxHtml + "<div class='phoca-flagbox' style='width:26px;height:26px'><span class='phoca-flag " + countryIcons[field.module] + "'></span></div>&nbsp";
                    }
                    auxHtml = auxHtml + "<a id='" + ind + panel.divElement.id + "-treeicon-" + field.conceptId + "' href='javascript:void(0);' style='color: inherit;text-decoration: inherit;'>";
                    auxHtml = auxHtml + "<span class='treeLabel selectable-row' data-module='" + field.module + "' data-concept-id='" + field.conceptId + "' data-term='" + field.defaultTerm + "'>" + field.defaultTerm + "</span></a></li>";
                });
                auxHtml = auxHtml + "</ul>";
            }
            $(target).removeClass("glyphicon-refresh");
            $(target).removeClass("icon-spin");
            if (result.length > 0) {
                $(target).addClass("glyphicon-chevron-up");
            } else {
                $(target).addClass("glyphicon-minus");
            }
            $(target).closest("li").prepend(auxHtml);
//            $("#" + ind + panel.divElement.id + "-treeicon-" + conceptId).after(auxHtml);
            $(".treeButton").disableTextSelect();
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
        }).fail(function(){
        });
    }

    this.loadMembers = function(returnLimit, skipTo, paginate){
        var membersUrl = options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + panel.conceptId + "/members?limit=" + returnLimit;
        if (skipTo > 0){
            membersUrl = membersUrl + "&skip=" + skipTo;
        }else{
            $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><i class='glyphicon glyphicon-refresh icon-spin'></i></td></tr>");
        }
        var total;
        if (panel.options.manifest){
//                console.log(panel.options.manifest);
            $.each(panel.options.manifest.refsets, function (i, field){
                if (field.conceptId == panel.conceptId){
                    if (field.count){
                        total = field.count;
                    }
                }
            });
        }
        if (typeof total != "undefined"){
//            console.log(total);
//            if (total < 25000){
                paginate = 1;
                membersUrl = membersUrl + "&paginate=1";
            //}

        }
//        console.log(membersUrl);
        if (xhrMembers != null) {
            xhrMembers.abort();
            //console.log("aborting call...");
        }
        xhrMembers = $.getJSON(membersUrl, function(result){

        }).done(function(result){
            var remaining = "asd";
            if (typeof total == "undefined") total = result.details.total;
            if (total == skipTo){
                remaining = 0;
            }else{
                if (total > (skipTo + returnLimit)){
                    remaining = total - (skipTo + returnLimit);
                }else{
//                        if (result.details.total < returnLimit && skipTo != 0){
                        remaining = 0;
//                        }else{
//                            remaining = result.details.total;
//                        }
                }
            }
            if (remaining < returnLimit){
                var returnLimit2 = remaining;
            }else{
                if (remaining != 0){
                    var returnLimit2 = returnLimit;
                }else{
                    var returnLimit2 = 0;
                }
            }
            var context = {
                result: result,
                returnLimit: returnLimit2,
                remaining: remaining,
                divElementId: panel.divElement.id,
                skipTo: skipTo,
                panel: panel
            };
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            if (result.members.length != 0){
                $("#" + panel.divElement.id + "-moreMembers").remove();
                $("#members-" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                if (skipTo == 0) {
                    $('#members-' + panel.divElement.id + "-resultsTable").html(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                }else{
                    $('#members-' + panel.divElement.id + "-resultsTable").append(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                }
                $("#" + panel.divElement.id + "-moreMembers").click(function(){
                    $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                    panel.loadMembers(returnLimit2, skipTo + returnLimit, paginate);
                });
                $("#members-" + panel.divElement.id + "-sort").unbind();
                $("#members-" + panel.divElement.id + "-sort").click(function(){
                    $("#members-" + panel.divElement.id + "-sort").blur();
                    panel.loadMembers(returnLimit, 0, 1);
                });
            }else{
                if (skipTo != 0){
                    $("#" + panel.divElement.id + "-moreMembers").remove();
                    $("#members-" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                    if (skipTo == 0) {
                        $('#members-' + panel.divElement.id + "-resultsTable").html(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                    }else{
                        $('#members-' + panel.divElement.id + "-resultsTable").append(JST["views/conceptDetailsPlugin/tabs/members.hbs"](context));
                    }
                    $("#" + panel.divElement.id + "-moreMembers").click(function(){
                        $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                        panel.loadMembers(returnLimit2, skipTo + returnLimit, paginate);
                    });
                    $("#members-" + panel.divElement.id + "-sort").unbind();
                    $("#members-" + panel.divElement.id + "-sort").click(function(){
                        $("#members-" + panel.divElement.id + "-sort").blur();
                        panel.loadMembers(returnLimit, 0, 1);
                    });
                }else{
                    $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
                }
            }
            $('#members-' + panel.divElement.id).find(".member-row").unbind();
            $('#members-' + panel.divElement.id).find(".member-row").click(function(e){
                var clickedConceptId = $(e.target).data("concept-id");
                //var clickedTerm = $(e.target).data("term");
                panel.conceptId = clickedConceptId;
                $('#details-tabs-' + panel.divElement.id + ' a:first').tab('show');
                panel.updateCanvas();
            });
        }).fail(function(){
            $('#members-' + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
        });
    };

    this.stripDiagrammingMarkup = function(htmlString) {
        if (!htmlString)
            htmlString = "";
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-primitive-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-defined-concept-compact"), 'g'), "");
        htmlString = htmlString.replace(new RegExp(panel.escapeRegExp("sct-attribute-compact"), 'g'), "");
        return htmlString;
    };
    this.escapeRegExp = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };

//    this.setSubscription = function(subscriptionPanel) {
//        panel.subscription = subscriptionPanel;
//        $("#" + panel.divElement.id + "-subscribersMarker").css('color', subscriptionPanel.markerColor);
//        $("#" + panel.divElement.id + "-subscribersMarker").show();
//    }

//    this.clearSubscription = function() {
//        panel.subscription = null;
//        $("#" + panel.divElement.id + "-subscribersMarker").hide();
//    }

    this.removeSemtag = function(term) {
        if (term.lastIndexOf("(") > 0) {
            return term.substr(0, term.lastIndexOf("(")-1)
        } else {
            return term;
        }
    }

    this.loadMarkers = function (){
        var auxMarker = "", right = 0, top = 0, aux = false, visible = false;
        $.each(componentsRegistry, function(i, field){
            var panelId = field.divElement.id;
            if ($("#" + panelId + "-subscribersMarker").is(':visible')){
                visible = true;
            }
        });
        if (panel.subscribers.length == 0){
            right = 14;
            $("#" + panel.divElement.id + "-ownMarker").hide();
        }else{
            if (!visible){
                $("#" + panel.divElement.id + "-ownMarker").hide();
            }
            aux = true;
        }
        if ($("#" + panel.divElement.id + "-subscribersMarker").is(':visible')){
            $("#" + panel.divElement.id + "-panelTitle").html($("#" + panel.divElement.id + "-panelTitle").html().replace(/&nbsp;/g, ''));
            if (aux){
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
            }
            $.each(panel.subscriptionsColor, function(i, field){
                auxMarker = auxMarker + "<i class='glyphicon glyphicon-bookmark' style='color: "+ field +"; top:" + top + "px; right: " + right + "px;'></i>";
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
                top = top + 5;
                right = right + 10;
            });
            $("#" + panel.divElement.id + "-subscribersMarker").html(auxMarker);
        }
    }

    // Subsription methods
    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
        var alreadySubscribed = false;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field == panelToSubscribe.markerColor){
                alreadySubscribed = true;
            }
        });
        //console.log('Subscribing to id: ' + panelId, !alreadySubscribed);
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
//                console.log("listening in " + panel.divElement.id);
                panel.conceptId = data.conceptId;
                if (data.showConcept){
                    $('a[href="#fh-cd1_canvas-pane"]').click();
                }
                if ($("#home-children-" + panel.divElement.id + "-body").length > 0){
                }else{
                    panel.setupCanvas();
                    if (panel.loadMarkers)
                        panel.loadMarkers();
                }
                panel.updateCanvas();
//            This creates a cycle
//            channel.publish(panel.divElement.id, {
//                term: data.term,
//                conceptId: data.conceptId,
//                source: data.source
//            });
            });
            panel.subscriptions.push(subscription);
            panelToSubscribe.subscribers.push(panel.divElement.id);
            panel.subscriptionsColor.push(panelToSubscribe.markerColor);
        }
        $("#" + panelId + "-ownMarker").show();
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        $("#" + panelId + "-ownMarker").show();
    }

    this.unsubscribe = function(panelToUnsubscribe) {
        var aux = [], colors = [], unsubscribed = true;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field != panelToUnsubscribe.markerColor){
                colors.push(field);
            }else{
                unsubscribed = false;
            }
        });
        if (!unsubscribed){
            panel.subscriptionsColor = colors;
//            console.log(panel.divElement.id);
//            console.log(panel.subscriptionsColor);
            colors = [];
            $.each(panelToUnsubscribe.subscribers, function(i, field){
                if (field != panel.divElement.id){
                    aux.push(field);
                }
            });
            panelToUnsubscribe.subscribers = aux;
            $.each(panelToUnsubscribe.subscriptionsColor, function(i, field){
                colors.push(field);
            });
            if (panelToUnsubscribe.subscribers.length == 0){
                if (panelToUnsubscribe.subscriptions.length == 0){
                    $("#" + panelToUnsubscribe.divElement.id + "-subscribersMarker").hide();
                }
            }else{
//                colors.push(panelToUnsubscribe.markerColor);
            }
            panelToUnsubscribe.subscriptionsColor = colors;
//            console.log(panelToUnsubscribe.divElement.id);
//            console.log(panelToUnsubscribe.subscriptionsColor);
            aux = [];
            $.each(panel.subscriptions, function(i, field){
                if (panelToUnsubscribe.divElement.id == field.topic){
                    field.unsubscribe();
                }else{
                    aux.push(field);
                }
            });
            panel.subscriptions = aux;
            if (panel.subscriptions.length == 0 && panel.subscribers.length == 0){
                $("#" + panel.divElement.id + "-subscribersMarker").hide();
            }
        }
    }

    this.setupOptionsPanel = function() {
        //var possibleSubscribers = [];
        //$.each(componentsRegistry, function(i, field){
        //    if (field.divElement.id != panel.divElement.id){
        //        var object = {};
        //        object.subscriptions = field.subscriptions;
        //        object.id = field.divElement.id;
        //        possibleSubscribers.push(object);
        //    }
        //});
        //var aux = false;
        //$.each(possibleSubscribers, function(i, field){
        //    aux = false;
        //    $.each(panel.subscriptions, function(j, subscription){
        //        if (field.id == subscription.topic){
        //            aux = true;
        //        }
        //    });
        //    field.subscribed = aux;
        //    aux = false;
        //    $.each(field.subscriptions, function(i, subscription){
        //        if (subscription.topic == panel.divElement.id){
        //            aux = true;
        //        }
        //    });
        //    field.subscriptor = aux;
        //});
        //panel.options.possibleSubscribers = possibleSubscribers;
        if (!panel.options.manifest) {
            $("#" + panel.divElement.id + "-modal-body").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
            xhr = $.getJSON(options.serverUrl.replace("snomed", "") + "server/releases", function (result) {
                // nothing
            }).done(function (result) {
                $.each(result, function (i, field){
                    manifests.push(field);
                    if (field.databaseName == options.edition) {
                        panel.options.manifest = field;
                    }
                });
                var context = {
                    options: panel.options,
                    divElementId: panel.divElement.id
                };
                Handlebars.registerHelper('if_eq', function(a, b, opts) {
                    if (opts != "undefined") {
                        if(a == b)
                            return opts.fn(this);
                        else
                            return opts.inverse(this);
                    }
                });
                Handlebars.registerHelper('ifIn', function(elem, list, options) {
                    if(list.indexOf(elem) > -1) {
                        return options.fn(this);
                    }
                    return options.inverse(this);
                });
                $("#" + panel.divElement.id + "-modal-body").html(JST["views/conceptDetailsPlugin/options.hbs"](context));
            });
        } else {
            var context = {
                options: panel.options,
                divElementId: panel.divElement.id
            };
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('ifIn', function(elem, list, options) {
                if(list.indexOf(elem) > -1) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
            $("#" + panel.divElement.id + "-modal-body").html(JST["views/conceptDetailsPlugin/options.hbs"](context));
        }
    }

    this.readOptionsPanel = function() {
        panel.options.displaySynonyms = $("#" + panel.divElement.id + "-displaySynonymsOption").is(':checked');
        panel.options.showIds = $("#" + panel.divElement.id + "-displayIdsOption").is(':checked');
        panel.options.displayChildren = $("#" + panel.divElement.id + "-childrenOption").is(':checked');
        panel.options.hideNotAcceptable = $("#" + panel.divElement.id + "-hideNotAcceptableOption").is(':checked');
        panel.options.displayInactiveDescriptions = $("#" + panel.divElement.id + "-displayInactiveDescriptionsOption").is(':checked');
        panel.options.diagrammingMarkupEnabled = $("#" + panel.divElement.id + "-diagrammingMarkupEnabledOption").is(':checked');
        panel.options.selectedView = $("#" + panel.divElement.id + "-relsViewOption").val();

        panel.options.langRefset = [];
        $.each($("#" + panel.divElement.id).find(".langOption"), function (i, field) {
            if ($(field).is(':checked')) {
                panel.options.langRefset.push($(field).val());
            }
        });
        //console.log(panel.options.langRefset);
        //panel.options.langRefset = $("#" + panel.divElement.id + "-langRefsetOption").val();

        panel.options.displayChildren = $("#" + panel.divElement.id + "-displayChildren").is(':checked');
        //$.each(panel.options.possibleSubscribers, function (i, field){
        //    field.subscribed = $("#" + panel.divElement.id + "-subscribeTo-" + field.id).is(':checked');
        //    field.subscriptor = $("#" + panel.divElement.id + "-subscriptor-" + field.id).is(':checked');
        //    var panelToSubscribe = {};
        //    $.each(componentsRegistry, function(i, panelS){
        //        if (panelS.divElement.id == field.id){
        //            panelToSubscribe = panelS;
        //        }
        //    });
        //    if (field.subscribed){
        //        panel.subscribe(panelToSubscribe);
        //    }else{
        //        panel.unsubscribe(panelToSubscribe);
        //    }
        //    if (field.subscriptor){
        //        panelToSubscribe.subscribe(panel);
        //    }else{
        //        panelToSubscribe.unsubscribe(panel);
        //    }
        //});
        $.each(componentsRegistry, function (i, field){
            if (field.loadMarkers)
                field.loadMarkers();
        });
        panel.updateCanvas();
    }
}

function updateCD(divElementId, conceptId) {
    $.each(componentsRegistry, function(i, field) {
        //console.log(field.divElement.id + ' == ' + divElementId.id);
        if (field.divElement.id == divElementId) {
            field.conceptId = conceptId;
            field.updateCanvas();
            channel.publish(field.divElement.id, {
                term: field.term,
                conceptId: field.conceptId,
                module: field.module,
                source: field.divElement.id
            });
        }
    });
    $('.history-button').popover('hide');
}

//function cancelSubscription(divElementId1, divElementId2) {
//    var d1;
//    var d2;
//    $.each(componentsRegistry, function(i, field) {
//        if (field.divElement.id == divElementId1) {
//            d1 = field;
//        } else if (field.divElement.id == divElementId2) {
//            d2 = field;
//        }
//    });
//    d1.unsubscribe(d2);
//    $(d2.divElement).find('.linker-button').popover('toggle');
//}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

(function($) {
    $.fn.addConceptDetails = function(conceptId, options) {
        this.filter("div").each(function() {
            var cd = new conceptDetails(this, conceptId, options);
            cd.setupCanvas();
        });
    };
}(jQuery));

$(document).keypress(function(event) {
    if (event.which == '13') {
        event.preventDefault();
    }
}
);
/**
 * Created by alo on 7/17/14.
 */
countryIcons = {
    '999000041000000102': 'gb',
    '999000011000000103': 'gb',
    '999000021000000109': 'gb',
    '999000031000000106': 'gb',
    '450829007': 'es',
    '731000124108': 'us',
    '5991000124107': 'us',
    '161771000036108': 'au',
    '32570231000036109': 'au',
    '32506021000036107': 'au',
    '32570491000036106': 'au',
    '45991000052106': 'se',
    '554471000005108': 'dk',
    '9999999998': 'gmdn',
    '466707005': 'mdp',
    '11000146104': 'nl',
    '20621000087109': 'ca',
    '19481000087107': 'ca',
    '20611000087101': 'ca',
    '22091000087100': 'ca',
    '5641000179103': 'uy',
    '5631000179106': 'uy'
};

Handlebars.registerHelper('countryIcon', function(moduleId) {
    return countryIcons[moduleId];
});

function drawConceptDiagram (concept, div, options, panel) {
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
    div.html(JST["views/conceptDetailsPlugin/tabs/details/diagram.hbs"](context));

    var parentDiv = $("#" + div.attr('id') + "-diagram-body");
    parentDiv.svg('destroy');

    parentDiv.svg({
        settings: {
            width: '1000px',
            height: '2000px'}});
    var svg = parentDiv.svg('get');
    loadDefs(svg);
    var x = 10;
    var y = 10;
    var maxX = 10;
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
    maxX = ((maxX < x) ? x : maxX);
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
        maxX = ((maxX < x + rectParent.getBBox().width + 50) ? x + rectParent.getBBox().width + 50 : maxX);
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
            maxX = ((maxX < x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50) ? x + rectAttr.getBBox().width + 50 + rectTarget.getBBox().width + 50 : maxX);
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
                maxX = ((maxX < x + 85 + rectRole.getBBox().width + 30 + rectRole2.getBBox().width + 50) ? x + 85 + rectRole.getBBox().width + 30 + rectRole2.getBBox().width + 50 : maxX);
            }
        });
    }
    var svgCode = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + parentDiv.html();
    svgCode = svgCode.substr(0, svgCode.indexOf("svg") + 4) +
        ' xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://web.resource.org/cc/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" ' +
        svgCode.substr(svgCode.indexOf("svg") + 4)
    svgCode = svgCode.replace('width="1000px" height="2000px"', 'width="' + maxX + '" height="' + y + '"');
    var b64 = Base64.encode(svgCode);

    $("#" + div.attr('id') + "-download-button").disableTextSelect();
    $("#" + div.attr('id') + "-progress-button").disableTextSelect();
    $("#" + div.attr('id') + "-png-button").disableTextSelect();
    $("#" + div.attr('id') + "-svg-button").disableTextSelect();
    $("#" + div.attr('id') + "-download-button").removeClass('disabled');
    $("#" + div.attr('id') + "-download-button").unbind().click(function(event) {
        $("#" + div.attr('id') + "-download-button").hide();
        $("#" + div.attr('id') + "-progress-button").show();
        $.post(options.serverUrl.replace("snomed", "") + "util/svg2png", { svgContent: svgCode}).done(function( response ) {
            //console.log(response);
            $("#" + div.attr('id') + "-progress-button").hide();
            $("#" + div.attr('id') + "-png-button").show();
            $("#" + div.attr('id') + "-svg-button").show();

            $("#" + div.attr('id') + "-png-button").unbind().click(function(event) {
                window.open(options.serverUrl.replace("snomed", "") + response);
            });
            $("#" + div.attr('id') + "-svg-button").unbind().click(function(event) {
                window.open(options.serverUrl.replace("snomed", "") + response.replace(".png", ".svg"));
            });

            //$(div).prepend($("<a href-lang='image/svg+xml' href=options.serverUrl.replace("snomed", "")+response+"' download='diagram.png'>Download as PNG</a>&nbsp;&nbsp;&nbsp;"));
        }).fail(function() {
            //console.log("Error");
        });
    });
    if (panel.options.selectedView == "stated") {
        $("#" + div.attr('id') + '-stated-button-d').unbind();
        $("#" + div.attr('id') + '-inferred-button-d').unbind();
        $("#" + div.attr('id') + '-stated-button-d').addClass("btn-primary");
        $("#" + div.attr('id') + '-stated-button-d').removeClass("btn-default");
        $("#" + div.attr('id') + '-inferred-button-d').addClass("btn-default");
        $("#" + div.attr('id') + '-inferred-button-d').removeClass("btn-primary");
        $("#" + div.attr('id') + '-inferred-button-d').click(function (event) {
            panel.options.selectedView = "inferred";
            panel.updateCanvas();
        });
    } else {
        $("#" + div.attr('id') + '-stated-button-d').unbind();
        $("#" + div.attr('id') + '-inferred-button-d').unbind();
        $("#" + div.attr('id') + '-inferred-button-d').addClass("btn-primary");
        $("#" + div.attr('id') + '-inferred-button-d').removeClass("btn-default");
        $("#" + div.attr('id') + '-stated-button-d').addClass("btn-default");
        $("#" + div.attr('id') + '-stated-button-d').removeClass("btn-primary");
        $("#" + div.attr('id') + '-stated-button-d').click(function (event) {
            panel.options.selectedView = "stated";
            panel.updateCanvas();
        });
    }



    //$(div).prepend($("<a href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n"+b64+"' download='diagram.svg'>Download as SVG</a>"));




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
!function ($) {
    /* =======================
     *   Popover jQuery Plugin
     *  =======================
     *  Current version: v1.0.0, Last updated: 01-28-2013
     *  Description: Cross-browser, mobile compatible popover.
     *
     *  Author: Jordan Kelly
     *  Github: https://github.com/FoundOPS/popover
     *
     *  Compatible browsers: IE 9+, Chrome ?+, FF 3.6+, Android 2.3+, iOS 4+
     *
     *  jQuery functions:
     *      $(selector).popover([methods] or [config]);
     *      $(selector).optionsPopover([methods] or [config]);
     *
     *  Config parameters:  Example usage - $(selector).popover({..., fontColor: "#000", ...});
     *       id              - When passed for initial menu, id must be the same as the id/class used in selector.
     *                         eg) "#popoverButton"
     *
     *       title           - Title to be displayed on header.
     *
     *       contents        - popover:          An html string to be inserted.
     *                       - optionsPopover:   An array of row data.
     *                       //TODO: Document more.
     *
     *       backgroundColor - Sets the background color for all popups. Accepts hex and color keywords.
     *                         eg) "#000000", "black", etc.
     *
     *       fontColor       - Sets the font color for all popups. Accepts hex and color keywords.
     *                         eg) "#000000", "black", etc.
     *
     *       borderColor     - Sets the border color for all popups. Accepts hex and color keywords.
     *                         eg) "#000000", "black", etc.
     *
     *       keepData        - Boolean that indicates if header and content should be cleared/set on visible.
     *                         WARNING: MAY BE REMOVED IN FUTURE VERSIONS.
     *                         eg) truthy or falsesy values
     *
     *       childToAppend   - A documentFragment or dom element to be appended after content is set.
     *                         WARNING: MAY BE REMOVED IN FUTURE VERSIONS.
     *                         eg)
     *
     *       onCreate        - A function to be called after popover is created.
     *                         eg) function(){ console.log("popover has been created!"); }
     *
     *       onVisible       - A function to be called after popover is visible.
     *                         eg) function(){ console.log("popover is visible!"); }
     *
     *       disableHeader   - Boolean that indicates if a header should not be used on parent listener.
     *                         eg) Truthy/Falsey values
     *
     *   Methods: Example usage - $(selector).popover("methodName", argument1, argument2 ...);
     *       [Internal] - Functions needed for setup/initialization.
     *           _popoverInit        - Internal function used to setup popover.
     *                                 Arguments: options_config, popover_instance
     *           _optionsPopoverInit - Internal function used to setup optionsPopover.
     *                                 Arguments: options_config, popover_instance
     *       [Public]
     *           disableHeader       - Function used to disable header for a popover instance.
     *                                 Arguments: popover_instance
     *           enableHeader        - Function used to enable header for a popover instance.
     *                                 Arguments: popover_instance
     *           lockPopover         - Function used to lock all popovers. Prevents popover from opening/closing.
     *                                 Arguments: none
     *           unlockPopover       - Function used to unlock all popovers.
     *                                 Arguments: none
     *           addMenu             - Function used to add a new menu. Menus can be accessed by all popover instances.
     *                                 Arguments: id, title, contents
     *           closePopover        - Function used to close popover.
     *                                 Arguments: none
     *       [Private] - Note: Only use if you have to.
     *           _getPopoverClass    - Function used to return internal Popover class.
     *                                 Arguments: none
     *
     *   Triggers:   Currently all events are namespaced under popover.* This may change in future versions.
     *       popover.created         - Fired when popup is created and placed in DOM.
     *       popover.listenerClicked - Fired when root popup listener is clicked.
     *       popover.action          - Fired when a menu changes.
     *                                 Arguments: DOM Element causing action.
     *       popover.visible         - Fired when popover is visible.
     *       popover.updatePositions - Fired when left and top positions are updated.
     *       popover.resize          - Fired when popover is resized.
     *       popover.closing         - Fired before popover closes.
     *       popover.setContent      - Fired after popover's contenet is set.
     ================================================================================================================*/

    var methods = {
        _init: function(options, popover) {
            //Theme modifiers
            if(typeof(options.backgroundColor) !== 'undefined'){
                Popover.setBackgroundColor(options.backgroundColor);
            }

            if(typeof(options.fontColor) !== 'undefined'){
                Popover.setFontColor(options.fontColor);
            }

            if(typeof(options.borderColor) !== 'undefined'){
                Popover.setBorderColor(options.borderColor);
            }

            //Functionality modifiers
            //TODO: Rename disableBackButton option.
            if(typeof(options.disableBackButton) !== "undefined"){
                if(options.disableBackButton === true){
                    popover.disableBackButton();
                }else if(options.disableBackButton === false){
                    popover.enableBackButton();
                }
            }

            if(typeof(options.enableBackButton) !== "undefined"){
                if(options.enableBackButton === true){
                    popover.enableBackButton();
                }else if(options.enableBackButton === false){
                    popover.disableBackButton();
                }
            }

            if(typeof(options.disableHeader) !== 'undefined'){
                if(options.disableHeader === true){
                    popover.disableHeader();
                }else if(options.disableHeader === false){
                    popover.enableHeader();
                }
            }

            if(typeof(options.keepData) !== 'undefined'){
                popover.keepData(options.keepData);
            }

            if(typeof(options.childToAppend) !== 'undefined'){
                popover.childToAppend = options.childToAppend;
            }

            //Callbacks
            if(typeof(options.onCreate) !== 'undefined'){
                popover._onCreate = options.onCreate;
            }

            if(typeof(options.onVisible) !== 'undefined'){
                popover._onVisible = options.onVisible;
            }

            Popover.addMenu(options.id, options.title, options.contents);
        },
        _popoverInit: function(options) {
            var popover = new Popover(this.selector);
            methods._init(options, popover);
            return popover;
        },
        _optionsPopoverInit: function (options) {
            var popover = new OptionsPopover(this.selector);
            methods._init(options, popover);
            return popover;
        },
        //Requires instance to be passed.
        disableHeader: function(popover) {
            popover.disableHeader();
        },
        //Requires instance to be passed.
        enableHeader: function(popover) {
            popover.enableHeader();
        },
        //Static functions
        lockPopover: function() {
            Popover.lockPopover();
        },
        unlockPopover: function() {
            Popover.unlockPopover();
        },
        addMenu: function (menu) {
            Popover.addMenu(menu.id, menu.title, menu.contents);
        },
        closePopover: function () {
            Popover.closePopover();
        },
        _getPopoverClass: function() {
            return Popover;
        }
    };

    $.fn.optionsPopover = function (method) {
        // Create some defaults, extending them with any options that were provided
        //var settings = $.extend({}, options);
        // Method calling logic
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods._optionsPopoverInit.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.optionsPopover');
        }

        return this.each(function () {});
    };

    $.fn.ppopover = function (method) {
        // Create some defaults, extending them with any options that were provided
        //var settings = $.extend({}, options);
        // Method calling logic
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods._popoverInit.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.popover');
        }

        return this.each(function () {});
    };

////////////////////////////////////////////////////////////
//          Popover Block
////////////////////////////////////////////////////////////
    /**     Popover CONSTRUCTOR    **/
    function Popover(popoverListener) {
        this.constructor = Popover;

        //Set this popover's number and increment Popover count.
        this.popoverNumber = ++Popover.popoverNum;
        //Class added to detect clicks on primary buttons triggering popovers.
        this.popoverListenerID = "popoverListener"+this.popoverNumber;
        this.isHeaderDisabled = true;
        this.isDataKept = false;
        this.hasBeenOpened = false;

        var thisPopover = this;
        var listenerElements = $(popoverListener);
        listenerElements.addClass(this.popoverListenerID);
        listenerElements.css("cursor", "pointer");
        listenerElements.click(function (e) {
            thisPopover.toggleVisible(e, $(this));
            $(document).trigger("popover.listenerClicked");
        });
    }

    Popover.prototype.disableHeader = function() {
        this.isHeaderDisabled = true;
    };

    Popover.prototype.enableHeader = function() {
        this.isHeaderDisabled = false;
    };

    Popover.prototype.disablePopover = function() {
        this.isDisabled = true;
    };

    Popover.prototype.enablePopover = function() {
        this.isDisabled = false;
    };

    Popover.prototype.keepData = function(bool){
        this.isDataKept = bool;
    };

    Popover.prototype.appendChild = function(){
        var child = this.childToAppend;
        if(!child)return;
        $("#popoverContent")[0].appendChild(child);
    };

    Popover.prototype.toggleVisible = function (e, clicked) {
        Popover.lastPopoverClicked = this;
        var clickedDiv = $(clicked);
        if (!clickedDiv) {
            //console.log("ERROR: No element clicked!");
            return;
        }

        var popoverWrapperDiv = $("#popoverWrapper");
        if (popoverWrapperDiv.length === 0) {
            //console.log("Popover not initialized; initializing.");
            popoverWrapperDiv = this.createPopover();
            if (popoverWrapperDiv.length === 0) {
                //console.log("ERROR: Failed to create Popover!");
                return;
            }
        }

        //TODO: In the future, add passed id to selected div's data-* or add specific class.
        var id = clickedDiv.attr("id");
        var identifierList = clickedDiv.attr('class').split(/\s+/);

        //NOTE: identifierList contains the clicked element's id and class names. This is used to find its
        //      associated menu. The next version will have a specialized field to indicate this.
        identifierList.push(id);
        //console.log("List: "+identifierList);

        //TODO: Fix repetition.
        if ($("#popover").is(":visible") && Popover.lastElementClick) {
            if (clickedDiv.is("#" + Popover.lastElementClick)) {
                //console.log("Clicked on same element!");
                //console.log("Last clicked: " + Popover.lastElementClick);
                Popover.closePopover();
                return;
            }
            //console.log("Clicked on different element!");
            Popover.closePopover();
        }

        //Blocking statement that waits until popover closing animation is complete.
        $("#popover").promise().done(function () {});

        //If popover is locked, don't continue actions.
        if(Popover.isLocked||this.isDisabled)return;
        //Update content
        this.populate(identifierList);

        clickedDiv.trigger("popover.action", clickedDiv);

        if(Popover.backgroundColor){
            $("#popoverHeader").css("backgroundColor", Popover.backgroundColor);
            $("#popoverContent").css("backgroundColor", Popover.backgroundColor);
        }

        if(Popover.fontColor){
            $("#popover").css("color", Popover.fontColor);
            //TODO: Trigger color change event and move to OptionsPopover.
            $("#popover a").css("color", Popover.fontColor);
        }

        if(Popover.borderColor){
            $("#popoverHeader").css("border-color", Popover.borderColor);
            $("#popoverContent").css("border-color", Popover.borderColor);
            $(".popoverContentRow").css("border-color", Popover.borderColor);
        }

        //Make popover visible
        $("#popover").stop(false, true).fadeIn('fast');
        $("#popoverWrapper").css("visibility", "visible");
        $("#popover").promise().done(function () {});
        popoverWrapperDiv.trigger("popover.visible");

        if(this._onVisible){
            //console.log("LOG: Executing onVisible callback.");
            this._onVisible();
        }

        if((this.isDataKept && !this.hasBeenOpened) || (!this.isDataKept)){
            var child = this.childToAppend;
            if(child){
                this.appendChild(child);
            }
        }
        this.hasBeenOpened = true;

        //Update left, right and caret positions for popover.
        //NOTE: Must be called after popover.visible event, in order to trigger jspScrollPane update.
        Popover.updatePositions(clickedDiv);

        Popover.lastElementClick = clickedDiv.attr("id");
    };

    Popover.updatePositions = function(target){
        Popover.updateTopPosition(target);
        Popover.updateLeftPosition(target);
        $(document).trigger("popover.updatePositions");
    };

    Popover.updateTopPosition = function(target){
        var top = Popover.getTop(target);
        $("#popoverWrapper").css("padding-top", top + "px");
    };

    Popover.updateLeftPosition = function(target){
        var offset = Popover.getLeft(target);
        $("#popoverWrapper").css("left", offset.popoverLeft);
        Popover.setCaretPosition(offset.targetLeft - offset.popoverLeft + Popover.padding);
    };


//Function returns the left offset of the popover and target element.
    Popover.getLeft = function (target) {
        var popoverWrapperDiv = $("#popoverWrapper");
        Popover.currentTarget = target;
        var targetLeft = target.offset().left + target.outerWidth() / 2;
        var rightOffset = targetLeft + popoverWrapperDiv.outerWidth() / 2;
        var offset = targetLeft - popoverWrapperDiv.outerWidth() / 2 + Popover.padding + 1;
        var windowWidth = $(window).width();

        Popover.offScreenX = false;
        if (offset < 0) {
            Popover.offScreenX = true;
            offset = Popover.padding;
        } else if (rightOffset > windowWidth) {
            Popover.offScreenX = true;
            offset = windowWidth - popoverWrapperDiv.outerWidth();
        }

        //Returns left offset of popover from window.
        return {targetLeft: targetLeft, popoverLeft: offset};
    };

    Popover.getTop = function(target){
        var caretHeight =  $("#popoverArrow").height();
        //TODO: Make more readable.
        //If absolute position from mobile css, don't offset from scroll.
        var scrollTop = ($("#popoverWrapper").css("position")==="absolute")?0:$(window).scrollTop();
        var targetTop = target.offset().top - scrollTop;
        var targetBottom = targetTop + target.outerHeight();
        var popoverTop = targetBottom + caretHeight;
        var windowHeight = $(window).height();
        var popoverContentHeight = $("#popoverContent").height();
        var popoverHeight = popoverContentHeight + $("#popoverHeader").outerHeight() + caretHeight;

        Popover.above = false;
        Popover.offScreenY = false;

        //If popover is past the bottom of the screen.
        //else if popover is above the top of the screen.
        if (windowHeight < targetBottom + popoverHeight) {
            Popover.offScreenY = true;
            //If there is room above, move popover above target
            //else keep popover bottom at bottom of screen.
            if(targetTop >= popoverHeight){
                popoverTop = targetTop - popoverHeight;
                Popover.above = true;
            }else{
                popoverTop = windowHeight - popoverHeight;
            }
        } else if (popoverTop < 0) {
            Popover.offScreenY = true;
            popoverTop = Popover.padding + caretHeight;
        }

        /*
         //Debug logs
         console.log("------------------------------------------------------------");
         console.log("Caret Height: " + caretHeight);
         console.log("TargetTop: " + targetTop);
         console.log("Popover Cont Height: " + popoverContentHeight);
         console.log("Cont Height: " + $("#popoverContent").height());
         console.log("Header Height: " + $("#popoverHeader").outerHeight());
         console.log("targetBottom: " + targetBottom);
         console.log("popoverHeight: " + popoverHeight);
         console.log("popoverBottom: " + (targetBottom + popoverHeight));
         console.log("Popover Height: " + $("#popover").height());
         console.log("PopoverWrapper Height: " + $("#popoverWrapper").height());
         console.log("PopoverWrapper2 Height: " + $("#popoverWrapper").height(true));
         console.log("popoverTop: " + popoverTop);
         console.log("windowHeight: " + windowHeight);
         console.log("offScreenY: " + Popover.offScreenY);
         console.log("Popover.above: " + Popover.above);
         console.log("\n");
         */

        return popoverTop;
    };

    Popover.setCaretPosition = function(offset){
        //console.log("LOG: Setting caret position.");
        var caretPos = "50%";
        var caret = $("#popoverArrow");
        if (Popover.offScreenX) {
            caretPos = offset;
        }
        //Moves carrot on popover div.
        caret.css("left", caretPos);

        //console.log("LOG: Popover.above: "+Popover.above);
        if(Popover.above){
            var popoverHeight = $("#popoverContent").outerHeight() - 4;
            $("#popoverArrow").css("margin-top", popoverHeight+"px")
                .addClass("flipArrow")
                .html("▼");
        }else{
            $("#popoverArrow").css("margin-top", "")
                .removeClass("flipArrow")
                .html("▲");
        }
        Popover.caretLeftOffset = caretPos;
    };

// createPopover: Prepends popover to dom
    Popover.prototype.createPopover = function () {
        //Creates popover div that will be populated in the future.
        var popoverWrapperDiv = $(document.createElement("div"));
        popoverWrapperDiv.attr("id", "popoverWrapper");

        var s = "<div id='popover'>" +
            "<div id='popoverArrow'>▲</div>" +
            "<div id='currentPopoverAction' style='display: none;'></div>" +
            "<div id='popoverContentWrapper'>" +
            "<div id='popoverContent'></div>" +
            "</div>" +
            "</div>";
        popoverWrapperDiv.html(s);
        popoverWrapperDiv.find("#popover").css("display", "none");

        //Appends created div to page.
        $("body").prepend(popoverWrapperDiv);

        //Window resize listener to check if popover is off screen.
        $(window).on('resize', function () {
            if ($("#popover").is(":visible")) {
                Popover.updatePositions(Popover.currentTarget);
            }
            var popoverWrapperDiv = $("#popoverWrapper");
            if(popoverWrapperDiv.css("position")==="absolute"){
                popoverWrapperDiv.css("height", $(document).height());
            }else{
                popoverWrapperDiv.css("height", "");
            }
        });

        //Click listener to detect clicks outside of popover
        $('html')
            .on('click touchend', function (e) {
                var clicked = $(e.target);
                //TODO: Return if not visible.
                var popoverHeaderLen = clicked.parents("#popoverHeader").length + clicked.is("#popoverHeader") ? 1 : 0;
                var popoverContentLen = (clicked.parents("#popoverContentWrapper").length && !clicked.parent().is("#popoverContentWrapper")) ? 1 : 0;
                var isListener = clicked.parents("."+Popover.lastPopoverClicked.popoverListenerID).length + clicked.is("."+Popover.lastPopoverClicked.popoverListenerID) ? 1 : 0;
                if (popoverHeaderLen === 0 && popoverContentLen === 0 && isListener === 0) {
                    Popover.closePopover();
                }
            }
        );

        var popoverContentWrapperDiv = $("#popoverContentWrapper");
        var throttleTimeout;
        $(window).bind('resize', function () {
            if ($.browser.msie) {
                if (!throttleTimeout) {
                    throttleTimeout = setTimeout(function () {
                            popoverContentWrapperDiv.trigger("popover.resize");
                            throttleTimeout = null;
                        }, 50
                    );
                }
            } else {
                popoverContentWrapperDiv.trigger("popover.resize");
            }
        });
        popoverContentWrapperDiv.trigger("popover.created");
        if(this._onCreate)this._onCreate();

        //Function also returns the popover div for ease of use.
        return popoverWrapperDiv;
    };

//Closes the popover
    Popover.closePopover = function () {
        if(Popover.isLocked)return;
        Popover.lastElementClick = null;

        $(document).trigger("popover.closing");
        Popover.history = [];
        $("#popover").stop(false, true).fadeOut('fast');
        $("#popoverWrapper").css("visibility", "hidden");
    };

    Popover.getAction = function () {
        return $("#currentPopoverAction").html();
    };

    Popover.setAction = function (id) {
        $("#currentPopoverAction").html(id);
    };

    Popover.prototype.disableBackButton = function(){
        this.isBackEnabled = false;
    };

    Popover.prototype.enableBackButton = function(){
        this.isBackEnabled = true;
    };

    Popover.prototype.previousPopover = function(){
        Popover.history.pop();
        if (Popover.history.length <= 0) {
            Popover.closePopover();
            return;
        }
        var menu = Popover.history[Popover.history.length - 1];
        this.populateByMenu(menu);
    };

//Public setter function for static var title and sets title of the html popover element.
    Popover.setTitle = function (t) {
        Popover.title = t;
        $("#popoverTitle").html(t);
    };

// Public getter function that returns a popover menu.
// Returns: Popover menu object if found, null if not.
// Arguments:   id - id of menu to lookup
    Popover.getMenu = function (id) {
        //Searches for a popover data object by the id passed, returns data object if found.
        var i;
        for (i = 0; i < Popover.menus.length; i += 1) {
            //console.log("LOG: getMenu - Popover.menus["+i+"]: "+Popover.menus[i].id);
            if (Popover.menus[i].id === id) {
                return Popover.menus[i];
            }
        }

        //Null result returned if popover data object is not found.
        //console.log("LOG: getMenu - No data found, returning null.");
        return null;
    };

    Popover.addMenu = function (id, title, contents) {
        Popover.menus.push({'id': id, 'title': title, 'contents': contents});
    };

    Popover.prototype.populateByMenu = function(menu){
        $(document).trigger('popover.populating');

        this.lastContentHeight = Popover.getPopoverContentHeight();

        if(!this.isDataKept){
            this.clearData();
        }

        //If data is kept, header and other content will still be in dom, so don't do either.
        if(!this.isHeaderDisabled && !this.isDataKept) {
            this.insertHeader();
        }else{
            this.removeHeader();
        }

        var popoverDisplay = $("#popover").css("display");

        if(!this.isDataKept || !this.hasBeenOpened)this.setData(menu);

        this.currentContentHeight = Popover.getPopoverContentHeight();

        if(Popover.above && popoverDisplay!=="none"){
            var oldPopoverTop = parseInt($("#popoverWrapper").css("padding-top"), 10);
            var contentHeightDelta = this.currentContentHeight - this.lastContentHeight;
            var popoverTop = oldPopoverTop - (contentHeightDelta);
            $("#popoverWrapper").css("padding-top", popoverTop + "px");
            Popover.setCaretPosition(Popover.caretLeftOffset);
        }

        return true;
    };

//Public void function that populates setTitle and setContent with data found by id passed.
    Popover.prototype.populate = function(identifierList){
        //console.log(identifierList);
        var newMenu = null;
        var i=0;
        for(i; i<identifierList.length; i++){
            newMenu = Popover.getMenu(identifierList[i]);
            if(newMenu){
                //console.log("Found menu! id: "+identifierList[i]);
                break;
            }
        }

        if (!newMenu) {
            //console.log("ID not found.");
            return false;
        }

        Popover.history.push(newMenu);
        return this.populateByMenu(newMenu);
    };

    Popover.getPopoverContentHeight = function(){
        var popoverDisplay = $("#popover").css("display");
        $("#popover").show();
        var popoverHeight = $("#popoverContent").height();
        $("#popover").css("display",popoverDisplay);
        return popoverHeight;
    };

    Popover.prototype.insertHeader = function (){
        var header = "<div id='popoverHeader'>" +
            "<div id='popoverTitle'></div>" +
            "<a id='popoverClose'><span id='popoverCloseIcon'>✕</span></a>" +
            "</div>";

        $("#popoverContentWrapper").before(header);

        //Create back button
        //Don't create back button or listener if disabled.
        if(this.isBackEnabled){
            //console.log("LOG: Creating back button.");
            var thisPopover = this;
            $("#popoverHeader").prepend("<a id='popoverBack'><span id='popoverBackIcon'>◄</span></a>");
            $("#popoverBack").on("click", function () {
                thisPopover.previousPopover();
            });
        }

        //Click listener for popover close button.
        $("#popoverClose").on("click", function () {
            Popover.closePopover();
        });

        $("#popoverContent").css("paddingTop", "47px");
    };

    Popover.prototype.removeHeader = function() {
        $("#popoverBack").off("click");
        $("#popoverClose").off("click");
        $("#popoverHeader").remove();
        $("#popoverContent").css("paddingTop", "");
    };

    Popover.prototype.clearData = function (){
        this.removeHeader();

        $("#popoverTitle").html("");
        $("#popoverContent").html("");
    };

    Popover.prototype.setData = function (data) {
        Popover.setAction(data.id);
        Popover.setTitle(data.title);
        Popover.setContent(data.contents);
    };

    Popover.prototype.replaceMenu = function (menu, newMenu){
        var property;
        for(property in menu){
            delete menu[property];
        }
        for(property in newMenu){
            menu[property] = newMenu[property];
        }
    };

//Public setter function for private var content and sets content of the html popover element.
    Popover.setContent = function (cont) {
        Popover.content = cont;
        //$("#popoverContentWrapper").data('jsp').getContentPane().find("#popoverContent").html(cont);
        //Note: Popover content set without using jscrollpane api.
        $("#popoverContent").html(cont);
        //Note: Removed 'this' reference passed.
        $("#popoverContentWrapper").trigger("popover.setContent");
    };

    /**     STATIC VARIABLES     **/
    Popover.popoverNum = 0;
    Popover.lastElementClick = null;
    Popover.currentTarget = null;
    Popover.title = "";
    Popover.content = "";
    Popover.menus = [];
    Popover.history = [];
    Popover.backgroundColor = null;
    Popover.fontColor = null;
    Popover.borderColor = null;
    Popover.padding = 3;
    Popover.offScreenX = false;
    Popover.offScreenY = false;
    Popover.isLocked = false;
    Popover.above = false;
    Popover.caretLeftOffset = "50%";
    Popover.lastPopoverClicked = null;

    /**     STATIC FUNCTIONS     **/
    Popover.setBackgroundColor = function(color){
        Popover.backgroundColor = color;
    };

    Popover.setFontColor = function(color){
        Popover.fontColor = color;
    };

    Popover.setBorderColor = function(color){
        Popover.borderColor = color;
    };

    Popover.lockPopover = function(){
        Popover.isLocked = true;
    };

    Popover.unlockPopover = function(){
        Popover.isLocked = false;
    };

////////////////////////////////////////////////////////////
//          OptionsPopover Block
////////////////////////////////////////////////////////////

    /**   OptionsPopover CONSTRUCTOR  **/
    function OptionsPopover(popoverListener){
        //Super constructor call.
        Popover.apply(this, [popoverListener]);
        this.constructor = OptionsPopover;
        this.superConstructor = Popover;

        this.isHeaderDisabled = false;
        this.isBackEnabled = true;

        if(!OptionsPopover.hasRun){
            this.init();
            OptionsPopover.hasRun = true;
        }
    }
//Inherit Popover
    OptionsPopover.prototype = new Popover();
    OptionsPopover.constructor = OptionsPopover;

    /**     STATIC VARIABLES        **/
    OptionsPopover.hasRun = false;

    /**     PROTOTYPE FUNCTIONS     **/
//Run-once function for listeners
    OptionsPopover.prototype.init = function(){
        $(document)
            .on('touchstart mousedown', '#popover a',
            function () {
                $(this).css({backgroundColor: "#488FCD"});
            })
            .on('touchend mouseup mouseout', '#popover a',
            function () {
                $(this).css({backgroundColor: ""});
            })
            .on('click', '.popoverContentRow',
            function () {
                var newId = [];
                newId.push($(this).attr('id'));

                if ($(this).hasClass("popoverEvent")) {
                    $(this).trigger("popover.action", $(this));
                }

                var keepOpen = Popover.lastPopoverClicked.populate(newId);
                if (!keepOpen) Popover.closePopover();
            });
    };

    OptionsPopover.prototype.setData = function (data) {
        var contArray = data.contents;
        var c = "";
        var i;

        for (i = 0; i < contArray.length; i++) {
            var lastElement = "";
            var popoverEvent = "";
            var menuId = "";
            var menuUrl = "";
            if (i === contArray.length - 1) {
                lastElement = " last";
            }

            //Links are given the popoverEvent class if no url passed. If link has popoverEvent,
            // event is fired based on currentPopoverAction.
            if (typeof(contArray[i].id) !== 'undefined') {
                menuId = " id='" + contArray[i].id + "'";
            }

            if (typeof(contArray[i].url) !== 'undefined') {
                menuUrl = " href='" + contArray[i].url + "'";
            } else {
                popoverEvent = " popoverEvent";
            }

            c += "<a" + menuUrl + menuId + " class='popoverContentRow" + popoverEvent + lastElement + "'>" +
                contArray[i].name +
                "</a>";
        }

        Popover.setAction(data.id);
        Popover.setTitle(data.title);
        Popover.setContent(c);
    };
}(window.jQuery);
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function searchPanel(divElement, options) {
    var thread = null;
    var panel = this;
    var lastT = "";
    var xhr = null;
    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    this.markerColor = 'black';
    if (typeof globalMarkerColor == "undefined") {
        globalMarkerColor = 'black';
    }
    this.type = "search";
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    var componentLoaded = false;
    panel.shown0 = false;
    $.each(componentsRegistry, function (i, field) {
        if (field.divElement.id == panel.divElement.id) {
            componentLoaded = true;
        }
    });
    if (componentLoaded == false) {
        componentsRegistry.push(panel);
    }
    panel.subscribers = [];
    panel.subscriptions = [];
    panel.subscriptionsColor = [];
    this.history = [];

    this.setupCanvas = function () {
        var context = {
            divElementId: panel.divElement.id
        };
        $(divElement).html(JST["views/searchPlugin/aux.hbs"](context));

        $('#' + panel.divElement.id + '-searchBox').keyup(function () {
            clearTimeout(thread);
            var $this = $(this);
            thread = setTimeout(function () {
                panel.search($this.val(),0,100,false);
            }, 500);
        });
//        $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();
        $("#" + panel.divElement.id + "-clearButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").hide();
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id).find('.semtag-button').click(function (event) {
            //console.log("Semtag click: " + $(this).html());
        });

        //$("#" + panel.divElement.id + "-searchConfigBar").slideUp('fast');
        if (options.searchMode != "fullText") {
            $("#" + panel.divElement.id + '-navLanguageLabel').closest('a').hide();
        }

        $("#" + panel.divElement.id + "-configButton").click(function (event) {
            panel.setupOptionsPanel();
//            $("#" + panel.divElement.id + "-searchConfigBar").slideToggle('slow');
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }

//        if (typeof panel.options.linkerButton != "undefined" && panel.options.linkerButton == false) {
//            $("#" + panel.divElement.id + "-linkerButton").hide();
//        }

        if (typeof panel.options.subscribersMarker != "undefined" && panel.options.subscribersMarker == false) {
            $("#" + panel.divElement.id + "-subscribersMarker").remove();
        }

        if (typeof panel.options.collapseButton != "undefined" && panel.options.collapseButton == false) {
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        }

        $("#" + panel.divElement.id + "-expandButton").click(function (event) {
            $("#" + panel.divElement.id + "-panelBody").slideDown("fast");
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").show();
        });
        $("#" + panel.divElement.id + "-collapseButton").click(function (event) {
            $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
            $("#" + panel.divElement.id + "-expandButton").show();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        });

        if (typeof i18n_panel_options == "undefined") {
            i18n_panel_options = "Panel options";
        }
        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_options,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_history == "undefined") {
            i18n_history = 'History';
        }
        $("#" + panel.divElement.id + "-historyButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_history,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_panel_links == "undefined") {
            i18n_panel_links = 'Panel links';
        }
//        $("#" + panel.divElement.id + "-linkerButton").tooltip({
//            placement : 'left',
//            trigger: 'hover',
//            title: i18n_panel_links,
//            animation: true,
//            delay: 1000
//        });
        $("#" + panel.divElement.id + "-apply-button").click(function () {
            panel.readOptionsPanel();

        });
        $("#" + panel.divElement.id + "-clearButton").click(function () {
            panel.options.semTagFilter = "none";
            panel.options.langFilter = "none";
            panel.options.moduleFilter ="none";
            panel.options.refsetFilter = "none";
            $('#' + panel.divElement.id + '-searchBox').val('');
            $('#' + panel.divElement.id + '-searchFilters').html("");
            $('#' + panel.divElement.id + '-resultsTable').html("");
            $('#' + panel.divElement.id + '-searchBar').html("");
            $('#' + panel.divElement.id + '-searchBar2').html("");
            $('#' + panel.divElement.id + '-typeIcon').removeClass('glyphicon-ok');
            $('#' + panel.divElement.id + '-typeIcon').removeClass('text-success');
            $('#' + panel.divElement.id + '-typeIcon').addClass('glyphicon-remove');
            $('#' + panel.divElement.id + '-typeIcon').addClass('text-danger');
            lastT = "";
        });
        $("#" + panel.divElement.id + "-historyButton").click(function (event) {
            $("#" + panel.divElement.id + "-historyButton").popover({
                trigger: 'manual',
                placement: 'bottomRight',
                html: true,
                content: function () {
                    historyHtml = '<div style="height:100px;overflow:auto;">';
                    if (typeof i18n_no_search_terms == "undefined") {
                        i18n_no_search_terms = "No search terms"
                    }
                    if (panel.history.length == 0) {
                        historyHtml = historyHtml + '<div class="text-center text-muted" style="width:100%"><em>'+ i18n_no_search_terms + '</span>...</em></div>';
                    }
                    historyHtml = historyHtml + '<table>';
                    var reversedHistory = panel.history.slice(0);
                    reversedHistory.reverse();
                    //console.log(JSON.stringify(reversedHistory));
                    $.each(reversedHistory, function (i, field) {
                        var d = new Date();
                        var curTime = d.getTime();
                        var ago = curTime - field.time;
                        var agoString = "";
                        if (ago < (1000 * 60)) {
                            if (Math.round((ago / 1000)) == 1) {
                                agoString = Math.round((ago / 1000)) + ' second ago';
                            } else {
                                agoString = Math.round((ago / 1000)) + ' seconds ago';
                            }
                        } else if (ago < (1000 * 60 * 60)) {
                            if (Math.round((ago / 1000) / 60) == 1) {
                                agoString = Math.round((ago / 1000) / 60) + ' minute ago';
                            } else {
                                agoString = Math.round((ago / 1000) / 60) + ' minutes ago';
                            }
                        } else if (ago < (1000 * 60 * 60 * 60)) {
                            if (Math.round(((ago / 1000) / 60) / 60) == 1) {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hour ago';
                            } else {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hours ago';
                            }
                        }
                        historyHtml = historyHtml + '<tr><td><a href="javascript:void(0);" onclick="searchInPanel(\'' + panel.divElement.id + '\',\'' + field.searchTerm + '\');">' + field.searchTerm + '</a>';
                        historyHtml = historyHtml + ' <span class="text-muted" style="font-size: 80%"><em>' + agoString + '<em></span>';
                        historyHtml = historyHtml + '</td></tr>';
                    });
                    historyHtml = historyHtml + '</table>';
                    historyHtml = historyHtml + '</div>';
                    return historyHtml;
                }
            });
            $("#" + panel.divElement.id + "-historyButton").popover('toggle');
        });
//        $("#" + panel.divElement.id + "-linkerButton").click(function (event) {
//            $("#" + panel.divElement.id + "-linkerButton").popover({
//                trigger: 'manual',
//                placement: 'bottomRight',
//                html: true,
//                content: function () {
//                    var linkerHtml = '<div class="text-center text-muted"><em><span class="i18n" data-i18n-id="i18n_drag_to_link">Drag to link with other panels</span><br>';
//                    if (panel.subscriptions.length == 1) {
//                        linkerHtml = linkerHtml + panel.subscriptions.length + ' link established</em></div>';
//                    } else {
//                        linkerHtml = linkerHtml + panel.subscriptions.length + ' links established</em></div>';
//                    }
//                    linkerHtml = linkerHtml + '<div class="text-center"><a href="javascript:void(0);" onclick="clearSearchPanelSubscriptions(\'' + panel.divElement.id + '\');"><span class="i18n" data-i18n-id="i18n_clear_links">Clear links</span></a></div>';
//                    return linkerHtml;
//                }
//            });
//            $("#" + panel.divElement.id + "-linkerButton").popover('toggle');
//        });

        $("#" + panel.divElement.id + "-fullTextButton").click(function (event) {
            panel.options.searchMode = 'fullText';
            panel.updateSearchLabel();
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            $("#" + panel.divElement.id + '-navLanguageLabel').closest('a').show();
            if (searchTerm.charAt(0) == "^") {
                $("#" + panel.divElement.id + '-searchBox').val(searchTerm.slice(1));
            }
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });
        $("#" + panel.divElement.id + "-partialMatchingButton").click(function (event) {
            panel.options.searchMode = 'partialMatching';
            panel.updateSearchLabel();
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            $("#" + panel.divElement.id + '-navLanguageLabel').closest('a').hide();
            if (searchTerm.charAt(0) == "^") {
                $("#" + panel.divElement.id + '-searchBox').val(searchTerm.slice(1));
            }
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });
        $("#" + panel.divElement.id + "-regexButton").click(function (event) {
            panel.options.searchMode = 'regex';
            panel.updateSearchLabel();
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            $("#" + panel.divElement.id + '-navLanguageLabel').closest('a').hide();
            if (searchTerm.charAt(0) != "^") {
                $("#" + panel.divElement.id + '-searchBox').val("^" + searchTerm);
            }
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });

        $("#" + panel.divElement.id + "-danishLangButton").click(function (event) {
            panel.options.searchLang = 'danish';
            $("#" + panel.divElement.id + '-navLanguageLabel').html(i18n_danish_stemmer);
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });
        $("#" + panel.divElement.id + "-englishLangButton").click(function (event) {
            panel.options.searchLang = 'english';
            $("#" + panel.divElement.id + '-navLanguageLabel').html(i18n_english_stemmer);
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });
        $("#" + panel.divElement.id + "-spanishLangButton").click(function (event) {
            panel.options.searchLang = 'spanish';
            $("#" + panel.divElement.id + '-navLanguageLabel').html(i18n_spanish_stemmer);
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });
        $("#" + panel.divElement.id + "-swedishLangButton").click(function (event) {
            panel.options.searchLang = 'swedish';
            $("#" + panel.divElement.id + '-navLanguageLabel').html(i18n_swedish_stemmer);
            var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
            if (searchTerm.length > 0) {
                panel.search(searchTerm,0,100,true);
            }
        });

        panel.updateStatusFilterLabel();

        $("#" + panel.divElement.id + "-activeOnlyButton").click(function (event) {
            panel.options.statusSearchFilter = 'activeOnly';
            panel.updateStatusFilterLabel();
        });

        $("#" + panel.divElement.id + "-activeInactiveButton").click(function (event) {
            panel.options.statusSearchFilter = 'activeAndInactive';
            panel.updateStatusFilterLabel();
        });

        $("#" + panel.divElement.id + "-inactiveOnlyButton").click(function (event) {
            panel.options.statusSearchFilter = 'inactiveOnly';
            panel.updateStatusFilterLabel();
        });
        $("#" + panel.divElement.id + "-partialMatchingButton").click();
        $("#" + panel.divElement.id + "-ownMarker").css('color', panel.markerColor);
    };

    this.setupOptionsPanel = function() {
        var possibleSubscribers = [];
        $.each(componentsRegistry, function(i, field){
            if (field.divElement.id != panel.divElement.id){
                var object = {};
                object.subscriptions = field.subscriptions;
                object.id = field.divElement.id;
                possibleSubscribers.push(object);
            }
        });
        var aux = false;
        $.each(possibleSubscribers, function(i, field){
            aux = false;
            $.each(panel.subscriptions, function(j, subscription){
                if (field.id == subscription.topic){
                    aux = true;
                }
            });
            field.subscribed = aux;
            aux = false;
            $.each(field.subscriptions, function(i, subscription){
                if (subscription.topic == panel.divElement.id){
                    aux = true;
                }
            });
            field.subscriptor = aux;
        });
        panel.options.possibleSubscribers = possibleSubscribers;
        var context = {
            options: panel.options,
            divElementId: panel.divElement.id
        };
        $("#" + panel.divElement.id + "-modal-body").html(JST["views/taxonomyPlugin/options.hbs"](context));
    }

    this.readOptionsPanel = function() {
        $.each(panel.options.possibleSubscribers, function (i, field){
            field.subscribed = $("#" + panel.divElement.id + "-subscribeTo-" + field.id).is(':checked');
            field.subscriptor = $("#" + panel.divElement.id + "-subscriptor-" + field.id).is(':checked');
            var panelToSubscribe = {};
            $.each(componentsRegistry, function(i, panelS){
                if (panelS.divElement.id == field.id){
                    panelToSubscribe = panelS;
                }
            });
            if (field.subscribed){
                panel.subscribe(panelToSubscribe);
            }else{
                panel.unsubscribe(panelToSubscribe);
            }
            if (field.subscriptor){
                panelToSubscribe.subscribe(panel);
            }else{
                panelToSubscribe.unsubscribe(panel);
            }
        });
        $.each(componentsRegistry, function (i, field){
            if (field.loadMarkers)
                field.loadMarkers();
        });
    }

    this.updateStatusFilterLabel = function() {
        if (typeof i18n_active_and_inactive == "undefined") {
            i18n_active_and_inactive = 'Active and Inactive';
        }
        if (typeof i18n_inactive_only == "undefined") {
            i18n_inactive_only = 'Inactive Only';
        }
        if (typeof i18n_active_only == "undefined") {
            i18n_active_only = 'Active Only';
        }
        if (panel.options.statusSearchFilter == 'activeAndInactive') {
            $("#" + panel.divElement.id + '-searchStatus').html(i18n_active_and_inactive);
            $("#" + panel.divElement.id + '-navStatusFilterLabel').html(i18n_active_and_inactive);
        } else if (panel.options.statusSearchFilter == 'inactiveOnly') {
            $("#" + panel.divElement.id + '-searchStatus').html(i18n_inactive_only);
            $("#" + panel.divElement.id + '-navStatusFilterLabel').html(i18n_inactive_only);
        } else {
            panel.options.statusSearchFilter = 'activeOnly';
            $("#" + panel.divElement.id + '-searchStatus').html(i18n_active_only);
            $("#" + panel.divElement.id + '-navStatusFilterLabel').html(i18n_active_only);
        }
        var searchTerm = $('#' + panel.divElement.id + '-searchBox').val();
        if (searchTerm.length > 0) {
            panel.search(searchTerm,0,100,true);
        }
    }

    this.search = function (t, skipTo, returnLimit, forceSearch) {
        if (typeof panel.options.searchMode == "undefined") {
            panel.options.searchMode = "partialMatching";
        }
        if (typeof panel.options.semTagFilter == "undefined") {
            panel.options.semTagFilter = "none";
        }
        if (typeof panel.options.langFilter == "undefined") {
            panel.options.langFilter = "none";
        }
        if (typeof panel.options.moduleFilter == "undefined"){
            panel.options.moduleFilter = "none";
        }
        if (typeof panel.options.textIndexNormalized == "undefined"){
            panel.options.textIndexNormalized = "none";
        }
        if (typeof panel.options.refsetFilter == "undefined"){
            panel.options.refsetFilter = "none";
        }

        if (typeof forceSearch == "undefined") {
            forceSearch = false;
        }
        // panel.divElement.id + '-typeIcon
        if (t != "" && (t != lastT || forceSearch)) {
            if (t.length < 3) {
                $('#' + panel.divElement.id + '-typeIcon').removeClass('glyphicon-ok');
                $('#' + panel.divElement.id + '-typeIcon').removeClass('text-success');
                $('#' + panel.divElement.id + '-typeIcon').addClass('glyphicon-remove');
                $('#' + panel.divElement.id + '-typeIcon').addClass('text-danger');
            } else {
                $('#' + panel.divElement.id + '-typeIcon').removeClass('glyphicon-remove');
                $('#' + panel.divElement.id + '-typeIcon').removeClass('text-danger');
                $('#' + panel.divElement.id + '-typeIcon').addClass('glyphicon-ok');
                $('#' + panel.divElement.id + '-typeIcon').addClass('text-success');
                //if (t != lastT) {
                //    panel.options.semTagFilter = "none";
                //    panel.options.langFilter = "none";
                //    panel.options.moduleFilter ="none";
                //    panel.options.refsetFilter = "none";
                //    //panel.options.textIndexNormalized = "none";
                //}
                lastT = t;
                //console.log(t);
                var d = new Date();
                var time = d.getTime();
                panel.history.push({searchTerm: t, time: time});
                //t = t.charAt(0).toUpperCase() + t.slice(1);
                //console.log("Capitalized t: " + t);
                $('#' + panel.divElement.id + '-searchFilters').html("");
                if (skipTo == 0) {
                    $('#' + panel.divElement.id + '-resultsTable').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                } else {
                    $('#' + panel.divElement.id + '-resultsTable').find('.more-row').html("<td colspan='2' class='text-center'><i class='glyphicon glyphicon-refresh icon-spin'></i>&nbsp;&nbsp;</td>");
                }
                var resultsHtml = "";
                if (xhr != null) {
                    xhr.abort();
                    //console.log("aborting call...");
                }
                $('#' + panel.divElement.id + '-searchBar').html("<span class='text-muted'>Searching..</span>");
                //console.log("panel.options.searchMode " + panel.options.searchMode);
                t = t.trim();
                if (isNumber(t)) {
                    if (t.substr(-2, 1) == "0") {
                        // Search conceptId
                        xhr = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + t,function (result) {

                        }).done(function (result) {
                            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                                if (opts != "undefined") {
                                    if(a == b)
                                        return opts.fn(this);
                                    else
                                        return opts.inverse(this);
                                }
                            });
                            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                                if (countryIcons[moduleId])
                                    return opts.fn(this);
                                else
                                    return opts.inverse(this);
                            });
                            var resDescriptions = [];
                            $.each(result.descriptions, function (i, field){
                                var aux = field;
                                aux.definitionStatus = result.definitionStatus;
                                aux.conceptActive = result.active;
                                if (!aux.active || !aux.conceptActive) {
                                    aux.danger = true;
                                }
                                if(field.active){
                                    if (panel.options.statusSearchFilter=="activeOnly"){
                                        resDescriptions.push(aux);
                                    }
                                    if (panel.options.statusSearchFilter=="activeAndInactive"){
                                        resDescriptions.push(aux);
                                    }
                                }else{
                                    aux.danger = true;
                                    if (panel.options.statusSearchFilter=="inactiveOnly"){
                                        resDescriptions.push(aux);
                                    }
                                    if (panel.options.statusSearchFilter=="activeAndInactive"){
                                        resDescriptions.push(aux);
                                    }
                                }
                            });
                            result.descriptions = resDescriptions;
                            var context = {
                                result: result
                            };
                            //console.log(context);
                            $('#' + panel.divElement.id + '-resultsTable').html(JST["views/searchPlugin/body/0.hbs"](context));
                            $('#' + panel.divElement.id + '-searchBar').html("<span class='text-muted'></span>");
                            $('#' + panel.divElement.id + '-resultsTable').find(".result-item").click(function (event) {
//                                $.each(panel.subscribers, function (i, field) {
//                                    //console.log("Notify to " + field.divElement.id + " selected " + $(event.target).attr('data-concept-id'));
//                                    field.conceptId = $(event.target).attr('data-concept-id');
//                                    field.updateCanvas();
//                                });
                                channel.publish(panel.divElement.id, {
                                    term: $(event.target).attr('data-term'),
                                    module: $(event.target).attr("data-module"),
                                    conceptId: $(event.target).attr('data-concept-id'),
                                    source: panel.divElement.id
                                });
                            });
                        }).fail(function(){
                            resultsHtml = resultsHtml + "<tr><td class='text-muted'>No results</td></tr>";
                            $('#' + panel.divElement.id + '-resultsTable').html(resultsHtml);
                            $('#' + panel.divElement.id + '-searchBar2').html("");
                        });
                    } else if (t.substr(-2, 1) == "1") {
                        xhr = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/descriptions/" + t,function (result) {

                        }).done(function (result) {
                            //console.log(result);
                            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                                if (opts != "undefined") {
                                    if(a == b)
                                        return opts.fn(this);
                                    else
                                        return opts.inverse(this);
                                }
                            });
                            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                                if (countryIcons[moduleId])
                                    return opts.fn(this);
                                else
                                    return opts.inverse(this);
                            });
                            var context = {
                                result: result
                            };
                            $('#' + panel.divElement.id + '-resultsTable').html(JST["views/searchPlugin/body/1.hbs"](context));
                            $('#' + panel.divElement.id + '-searchBar').html("<span class='text-muted'></span>");
                            $('#' + panel.divElement.id + '-resultsTable').find(".result-item").click(function (event) {
//                                $.each(panel.subscribers, function (i, field) {
//                                    //console.log("Notify to " + field.divElement.id + " selected " + $(event.target).attr('data-concept-id'));
//                                    field.conceptId = $(event.target).attr('data-concept-id');
//                                    field.updateCanvas();
//                                });
                                channel.publish(panel.divElement.id, {
                                    term: $(event.target).attr('data-term'),
                                    module: $(event.target).attr("data-module"),
                                    conceptId: $(event.target).attr('data-concept-id'),
                                    source: panel.divElement.id
                                });
                            });
                        }).fail(function(){
                            resultsHtml = resultsHtml + "<tr><td class='text-muted'>No results</td></tr>";
                            $('#' + panel.divElement.id + '-resultsTable').html(resultsHtml);
                            $('#' + panel.divElement.id + '-searchBar2').html("");
                        });
                    } else {
//                        console.log(t.substr(-2, 1));
                        resultsHtml = resultsHtml + "<tr><td class='text-muted'>No results</td></tr>";
                        $('#' + panel.divElement.id + '-resultsTable').html(resultsHtml);
                        $('#' + panel.divElement.id + '-searchBar').html("<span class='text-muted'></span>");
                        $('#' + panel.divElement.id + '-searchBar2').html("");
                    }
                } else {
                    if (panel.options.searchMode == "partialMatching") {
                        t = t.toLowerCase();
                        t = t.replace("(","");
                        t = t.replace(")","");
                    }
                    var startTime = Date.now();
                    var searchUrl = options.serverUrl + "/" + options.edition + "/" + options.release + "/descriptions?query=" + encodeURIComponent(t) + "&limit=50&searchMode=" + panel.options.searchMode + "&lang=" + panel.options.searchLang + "&statusFilter=" + panel.options.statusSearchFilter + "&skipTo=" + skipTo + "&returnLimit=" + returnLimit;
                    if (panel.options.semTagFilter != "none") {
                        searchUrl = searchUrl + "&semanticFilter=" + panel.options.semTagFilter;
                    }
                    if (panel.options.langFilter != "none") {
                        searchUrl = searchUrl + "&langFilter=" + panel.options.langFilter;
                    }
                    if (panel.options.moduleFilter != 'none'){
                        searchUrl = searchUrl + "&moduleFilter=" + panel.options.moduleFilter;
                    }
                    if (panel.options.refsetFilter != 'none'){
                        searchUrl = searchUrl + "&refsetFilter=" + panel.options.refsetFilter;
                    }
                    if (panel.options.textIndexNormalized != "none"){
                        searchUrl = searchUrl + "&normalize=" + panel.options.textIndexNormalized;
                    }
                    if ($("#" + panel.divElement.id + "-groupConcept").is(":checked")){
                        searchUrl = searchUrl + "&groupByConcept=1";
                    }
                    //console.log(searchUrl);
                    xhr = $.getJSON(searchUrl,function (result) {

                    }).done(function (result) {
                        $('#' + panel.divElement.id + '-resultsTable').find('.more-row').remove();
                        var endTime = Date.now();
                        var elapsed = (endTime - startTime)/1000;
                        Handlebars.registerHelper('if_eq', function(a, b, opts) {
                            if (opts != "undefined") {
                                if(a == b)
                                    return opts.fn(this);
                                else
                                    return opts.inverse(this);
                            }
                        });
                        Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                            if (countryIcons[moduleId])
                                return opts.fn(this);
                            else
                                return opts.inverse(this);
                        });
                        Handlebars.registerHelper("first20chars", function(string){
                            return (string.substr(0, 18) + "...");
                        });
//                        console.log(panel.options.manifest);
                        var auxArray = [];
                        if (result.filters && panel.options.manifest){
                            if (result.filters.refsetId){
                                $.each(result.filters.refsetId, function (i, refset){
                                    var found = false;
                                    var auxObject = {};
                                    $.each(panel.options.manifest.refsets, function(j, field){
                                        if (i == field.conceptId){
                                            auxObject.term = field.defaultTerm;
                                            auxObject.value = i;
                                            auxObject.cant = refset;
                                            found = true;
                                        }
                                    })
                                    if (!found){
                                        auxObject.term = null;
                                        auxObject.value = i;
                                        auxObject.cant = refset;
                                    }
                                    auxArray.push(auxObject);
                                });
                                result.filters.refsetId = [];
                                result.filters.refsetId = auxArray;
                                result.filters.refsetId.sort(function (a, b) {
                                    if (a.cant > b.cant)
                                        return -1;
                                    if (a.cant < b.cant)
                                        return 1;
                                    return 0;
                                });
                            }else{
                                result.filters.refsetId = [];
                            }
                            auxArray = [];
                            $.each(result.filters.module, function (i, field){
                                var found = false;
                                var auxObject = {};
                                $.each(panel.options.manifest.modules, function(j, module){
                                    if (i == module.conceptId){
                                        auxObject.term = module.defaultTerm;
                                        auxObject.value = i;
                                        auxObject.cant = field;
                                        found = true;
                                    }
                                })
                                if (!found){
                                    auxObject.term = null;
                                    auxObject.value = i;
                                    auxObject.cant = field;
                                }
                                auxArray.push(auxObject);
//                            console.log(auxObject);
                            });
                            result.filters.module = [];
                            result.filters.module = auxArray;
                            result.filters.module.sort(function (a, b) {
                                if (a.cant > b.cant)
                                    return -1;
                                if (a.cant < b.cant)
                                    return 1;
                                return 0;
                            });
                            if(result.filters.lang && result.filters.semTag){
                                function sortObject(object){
                                    var sortable = [], sortedObj = {};
                                    for (var attr in object)
                                        sortable.push([attr, object[attr]]);
                                    sortable.sort(function(a, b) {return b[1] - a[1]});
                                    $.each(sortable, function (i, field){
                                        sortedObj[field[0]] = field[1];
                                    });
                                    return sortedObj;
                                }
                                result.filters.lang = sortObject(result.filters.lang);
                                result.filters.semTag = sortObject(result.filters.semTag);
                            }
                        }
//                        console.log(auxArray);
//                        console.log(result.filters.module);
//                        var ind = 0;
//                        $.each(result.filters.refsetId, function (i, field){
//                            ind++;
//                        });
//                        if (ind == 0){
//                            result.filters.refsetId = 0;
//                        }
                        var context = {
                            result: result,
                            elapsed: elapsed,
                            divElementId: panel.divElement.id,
                            options: panel.options
                        };
                        $('#' + panel.divElement.id + '-searchBar').html(JST["views/searchPlugin/body/bar.hbs"](context));
                        $('#' + panel.divElement.id + '-searchBar2').html(JST["views/searchPlugin/body/bar2.hbs"](context));

                        $('#' + panel.divElement.id + '-moduleResumed').tooltip({
                            placement: 'left auto',
                            trigger: 'hover',
                            title: $('#' + panel.divElement.id + '-moduleResumed').attr("data-name"),
                            animation: true,
                            delay: 500
                        });

                        $('#' + panel.divElement.id + '-refsetResumed').tooltip({
                            placement: 'left auto',
                            trigger: 'hover',
                            title: $('#' + panel.divElement.id + '-refsetResumed').attr("data-name"),
                            animation: true,
                            delay: 500
                        });

                        $("#" + panel.divElement.id + '-searchBar2').find('.semtag-link').click(function (event) {
                            panel.options.semTagFilter = $(event.target).attr('data-semtag');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.module-link').click(function (event) {
                            panel.options.moduleFilter = $(event.target).attr('data-module');
                            panel.options.moduleFilterName = $(event.target).attr('data-term');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.lang-link').click(function (event) {
                            panel.options.langFilter = $(event.target).attr('data-lang');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.refset-link').click(function (event) {
                            panel.options.refsetFilter = $(event.target).attr('data-refset');
                            panel.options.refsetFilterName = $(event.target).attr('data-term');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.remove-semtag').click(function (event) {
                            panel.options.semTagFilter = "none";
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.remove-lang').click(function (event) {
                            panel.options.langFilter = "none";
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.remove-module').click(function (event) {
                            panel.options.moduleFilter = "none";
                            panel.options.moduleFilterName = null;
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar2').find('.remove-refset').click(function (event) {
                            panel.options.refsetFilter = "none";
                            panel.options.refsetFilterName = null;
                            panel.search(t, 0, returnLimit, true);
                        });

                        //original filter
                        $("#" + panel.divElement.id + '-searchBar').find('.semtag-link').click(function (event) {
                            panel.options.semTagFilter = $(event.target).attr('data-semtag');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar').find('.module-link').click(function (event) {
                            panel.options.moduleFilter = $(event.target).attr('data-module');
                            panel.options.moduleFilterName = $(event.target).attr('data-term');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar').find('.lang-link').click(function (event) {
                            panel.options.langFilter = $(event.target).attr('data-lang');
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar').find('.remove-semtag').click(function (event) {
                            panel.options.semTagFilter = "none";
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar').find('.remove-lang').click(function (event) {
                            panel.options.langFilter = "none";
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + '-searchBar').find('.remove-module').click(function (event) {
                            panel.options.moduleFilter = "none";
                            panel.options.moduleFilterName = null;
                            panel.search(t, 0, returnLimit, true);
                        });
                        if (result.details) {
                            var searchComment = "<span class='text-muted'>" + result.details.total + " matches found in " + elapsed + " seconds.</span>";
                        }
                        xhr = null;
                        var matchedDescriptions = result.matches;
                        //console.log(JSON.stringify(result));
                        var remaining = result.details.total - (skipTo + returnLimit);

                        if (panel.options.searchMode == "regex") {
                            result.matches.sort(function (a, b) {
                                if (a.term.length < b.term.length)
                                    return -1;
                                if (a.term.length > b.term.length)
                                    return 1;
                                return 0;
                            });
                        }
                        Handlebars.registerHelper('if_eq', function(a, b, opts) {
                            if (opts != "undefined") {
                                if(a == b)
                                    return opts.fn(this);
                                else
                                    return opts.inverse(this);
                            }
                        });
                        Handlebars.registerHelper('if_gr', function(a,b, opts) {
                            if (a){
                                if(a > parseInt(b))
                                    return opts.fn(this);
                                else
                                    return opts.inverse(this);
                            }
                        });
                        Handlebars.registerHelper('if_gre', function(a,b, opts) {
                            if (a){
                                if(parseInt(a) >= b)
                                    return opts.fn(this);
                                else
                                    return opts.inverse(this);
                            }
                        });
                        Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                            if (countryIcons[moduleId])
                                return opts.fn(this);
                            else
                                return opts.inverse(this);
                        });

                        Handlebars.registerHelper('hasFilters', function(options, opts){
                            if (options.semTagFilter != "none" ||
                                options.langFilter != "none" ||
                                options.moduleFilter != "none" ||
                                options.refsetFilter != "none") {
                                return  opts.fn(this);;
                            } else {
                                return opts.inverse(this);
                            }
                        });
                        var context = {
                            options: panel.options,
                            result: result,
                            divElementId: panel.divElement.id,
                            remaining: remaining,
                            returnLimit: returnLimit
                        };

                        if (skipTo == 0) {
                            $('#' + panel.divElement.id + '-resultsTable').html(JST["views/searchPlugin/body/default.hbs"](context));
                        } else {
                            $('#' + panel.divElement.id + '-resultsTable').append(JST["views/searchPlugin/body/default.hbs"](context));
                        }
                        $("#" + panel.divElement.id + "-groupConcept").click(function(){
                            panel.search(t, parseInt(skipTo), returnLimit, true);
                        });
                        $("#" + panel.divElement.id + "-remove-all-filters").unbind();
                        $("#" + panel.divElement.id + "-remove-all-filters").click(function (event) {
                            panel.options.semTagFilter = "none";
                            panel.options.langFilter = "none";
                            panel.options.moduleFilter = "none";
                            panel.options.refsetFilter = "none";
                            panel.search(t, 0, returnLimit, true);
                        });
                        $("#" + panel.divElement.id + "-more").unbind();
                        $("#" + panel.divElement.id + "-more").click(function (event) {
                            panel.search(t, (parseInt(skipTo) + parseInt(returnLimit)), returnLimit, true);
                        });
                        $('#' + panel.divElement.id + '-resultsTable').find(".result-item").click(function (event) {
                            channel.publish(panel.divElement.id, {
                                term: $(event.target).attr("data-term"),
                                module: $(event.target).attr("data-module"),
                                conceptId: $(event.target).attr('data-concept-id'),
                                source: panel.divElement.id
                            });
                        });
                        $("[draggable='true']").tooltip({
                            placement: 'left auto',
                            trigger: 'hover',
                            title: i18n_drag_this,
                            animation: true,
                            delay: 500
                        });

                        $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                            var term = $(e.target).attr("data-term");
                            if (typeof term == "undefined"){
                                term = $($(e.target).parent()).attr("data-term");
                            }
                            icon = iconToDrag(term);
                        });

                    }).fail(function () {
                        resultsHtml = resultsHtml + "<tr><td class='text-muted'>No results</td></tr>";
                        $('#' + panel.divElement.id + '-resultsTable').html(resultsHtml);
                        $('#' + panel.divElement.id + '-searchBar2').html("");
                    });
                }
            }
        }
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

    // Subscription methods
    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
//        console.log('Subscribing to id: ' + panelId);
        var alreadySubscribed = false;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field == panelToSubscribe.markerColor){
                alreadySubscribed = true;
            }
        });
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
//                console.log("listening in " + panel.divElement.id);
                panel.options.searchMode = "fullText";
                panel.search(data.conceptId, 0, 100, false);
                $('#' + panel.divElement.id + '-searchBox').val(data.term);
            });
            panel.subscriptions.push(subscription);
            panelToSubscribe.subscribers.push(panel.divElement.id);
            panel.subscriptionsColor.push(panelToSubscribe.markerColor);
        }
        $("#" + panelId + "-ownMarker").show();
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        $("#" + panelId + "-subscribersMarker").show();
    }

    this.unsubscribe = function(panelToUnsubscribe) {
        var aux = [], colors = [], unsubscribed = true;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field != panelToUnsubscribe.markerColor){
                colors.push(field);
            }else{
                unsubscribed = false;
            }
        });
        if (!unsubscribed){
            panel.subscriptionsColor = colors;
//            console.log(panel.divElement.id);
//            console.log(panel.subscriptionsColor);
            colors = [];
            $.each(panelToUnsubscribe.subscribers, function(i, field){
                if (field != panel.divElement.id){
                    aux.push(field);
                }
            });
            panelToUnsubscribe.subscribers = aux;
            $.each(panelToUnsubscribe.subscriptionsColor, function(i, field){
                colors.push(field);
            });
            if (panelToUnsubscribe.subscribers.length == 0){
                if (panelToUnsubscribe.subscriptions.length == 0){
                    $("#" + panelToUnsubscribe.divElement.id + "-subscribersMarker").hide();
                }
            }else{
//                colors.push(panelToUnsubscribe.markerColor);
            }
            panelToUnsubscribe.subscriptionsColor = colors;
//            console.log(panelToUnsubscribe.divElement.id);
//            console.log(panelToUnsubscribe.subscriptionsColor);
            aux = [];
            $.each(panel.subscriptions, function(i, field){
                if (panelToUnsubscribe.divElement.id == field.topic){
                    field.unsubscribe();
                }else{
                    aux.push(field);
                }
            });
            panel.subscriptions = aux;
            if (panel.subscriptions.length == 0 && panel.subscribers.length == 0){
                $("#" + panel.divElement.id + "-subscribersMarker").hide();
            }
        }
    }

    this.loadMarkers = function (){
        var auxMarker = "", right = 0, top = 0, aux = false, visible = false;
        $.each(componentsRegistry, function(i, field){
            var panelId = field.divElement.id;
            if ($("#" + panelId + "-subscribersMarker").is(':visible')){
                visible = true;
            }
        });
        if (panel.subscribers.length == 0){
            right = 14;
            $("#" + panel.divElement.id + "-ownMarker").hide();
        }else{
            if (!visible){
                $("#" + panel.divElement.id + "-ownMarker").hide();
            }
            aux = true;
        }
        if ($("#" + panel.divElement.id + "-subscribersMarker").is(':visible')){
            $("#" + panel.divElement.id + "-panelTitle").html($("#" + panel.divElement.id + "-panelTitle").html().replace(/&nbsp;/g, ''));
            if (aux){
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
            }
            $.each(panel.subscriptionsColor, function(i, field){
                auxMarker = auxMarker + "<i class='glyphicon glyphicon-bookmark' style='color: "+ field +"; top:" + top + "px; right: " + right + "px;'></i>";
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
                top = top + 5;
                right = right + 10;
            });
            $("#" + panel.divElement.id + "-subscribersMarker").html(auxMarker);
        }
    }

    this.updateSearchLabel = function () {
        if (typeof panel.options.searchMode == "undefined") {
            panel.options.searchMode = "partialMatching";
        }
        if (typeof i18n_search_examp_1 == "undefined") {
            i18n_search_examp_1 = 'Example 1';
        }
        if (typeof i18n_search_examp_2 == "undefined") {
            i18n_search_examp_2 = 'Example 2';
        }
        if (typeof i18n_search_examp_3 == "undefined") {
            i18n_search_examp_3 = 'Example 3';
        }
        if (typeof i18n_regex_search_mode == "undefined") {
            i18n_regex_search_mode = 'Regex';
        }
        if (typeof i18n_partial_match_search_mode == "undefined") {
            i18n_partial_match_search_mode = 'Partial';
        }
        if (typeof i18n_full_text_search_mode == "undefined") {
            i18n_full_text_search_mode = 'Full';
        }
        if (panel.options.searchMode == "regex") {
            $("#" + panel.divElement.id + "-searchMode").html("<span class='i18n' data-i18n-id='i18n_regex_search_mode'>" + i18n_regex_search_mode + "</span>");
            $("#" + panel.divElement.id + '-searchExample').html("<span class='i18n text-muted' data-i18n-id='i18n_search_examp_1'>" + i18n_search_examp_1  +  "</span> ");
            $("#" + panel.divElement.id + '-navSearchModeLabel').html("<span class='i18n' data-i18n-id='i18n_regex_search_mode'>" + i18n_regex_search_mode  +  "</span>");
        } else if (panel.options.searchMode == "fullText") {
            $("#" + panel.divElement.id + "-searchMode").html("<span class='i18n' data-i18n-id='i18n_full_text_search_mode'>" + i18n_full_text_search_mode + "</span>");
            $("#" + panel.divElement.id + '-searchExample').html("<span class='i18n text-muted' data-i18n-id='i18n_search_examp_2'>" + i18n_search_examp_2  +  "</em></span> ");
            $("#" + panel.divElement.id + '-navSearchModeLabel').html("<span class='i18n' data-i18n-id='i18n_full_text_search_mode'>" + i18n_full_text_search_mode  +  "</span>");
        } else if (panel.options.searchMode == "partialMatching") {
            $("#" + panel.divElement.id + "-searchMode").html("<span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>" + i18n_partial_match_search_mode + "</span>");
            $("#" + panel.divElement.id + '-searchExample').html("<span class='i18n text-muted' data-i18n-id='i18n_search_examp_3'>" + i18n_search_examp_3  +  "</span> ");
            $("#" + panel.divElement.id + '-navSearchModeLabel').html("<span class='i18n' data-i18n-id='i18n_partial_match_search_mode'>" + i18n_partial_match_search_mode  +  "</span>");
        }

        if (typeof panel.options.searchLang == "undefined") {
            panel.options.searchLang = "english";
        }
        if (typeof i18n_danish_stemmer == "undefined") {
            i18n_danish_stemmer = 'Danish Stemmer';
        }
        if (typeof i18n_english_stemmer == "undefined") {
            i18n_english_stemmer = 'English Stemmer';
        }
        if (typeof i18n_spanish_stemmer == "undefined") {
            i18n_spanish_stemmer = 'Spanish Stemmer';
        }
        if (panel.options.searchLang == "danish") {
            $("#" + panel.divElement.id + '-navLanguageLabel').html("<span class='i18n' data-i18n-id='i18n_danish_stemmer'>" + i18n_danish_stemmer  +  "</span>");
        } else if (panel.options.searchLang == "english") {
            $("#" + panel.divElement.id + '-navLanguageLabel').html("<span class='i18n' data-i18n-id='i18n_english_stemmer'>" + i18n_english_stemmer  +  "</span>");
        } else if (panel.options.searchLang == "spanish") {
            $("#" + panel.divElement.id + '-navLanguageLabel').html("<span class='i18n' data-i18n-id='i18n_spanish_stemmer'>" + i18n_spanish_stemmer  +  "</span>");
        }

    }

    this.setupCanvas();
    this.updateSearchLabel();

}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function clearSearchPanelSubscriptions(divElementId1) {
    var d1;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == divElementId1) {
            d1 = field;
        }
    });
    d1.unsubscribeAll();
    $("#" + divElementId1).find('.linker-button').popover('toggle');
}

function searchInPanel(divElementId, searchTerm) {
    $.each(componentsRegistry, function (i, field) {
//console.log(field.divElement.id + ' == ' + divElementId);
        if (field.divElement.id == divElementId) {
            $('#' + divElementId + '-searchBox').val(searchTerm);
            field.search(searchTerm,0,100,false);
        }
    });
    $('.history-button').popover('hide');
}

$(document).keypress(function (event) {
    if (event.which == '13') {
        event.preventDefault();
    }
});

(function($) {
    $.fn.addSearch = function(options) {
        this.filter("div").each(function() {
            var tx = new conceptDetails(this, options);
        });
    };
}(jQuery));

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


/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function taxonomyPanel(divElement, conceptId, options) {
    var nodeCount = 0;
    var panel = this;
    var xhr = null;
    if (typeof componentsRegistry == "undefined") {
        componentsRegistry = [];
    }

    this.markerColor = 'black';
    if (typeof globalMarkerColor == "undefined") {
        globalMarkerColor = 'black';
    }

    this.type = "taxonomy";
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    var componentLoaded = false;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == panel.divElement.id) {
            componentLoaded = true;
        }
    });
    if (componentLoaded == false) {
        componentsRegistry.push(panel);
    }
    panel.default = {};
    panel.default.conceptId = conceptId;
    panel.subscribers = [];
    panel.subscriptions = [];
    panel.subscriptionsColor = [];
    this.history = [];

    if (!options.rootConceptDescendants){
        $.ajax({
            type: "POST",
            url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
            data: {
                expression: "< 138875005|SNOMED CT Concept|",
                limit : 1,
                skip : 0,
                form: panel.options.selectedView
            },
            dataType: "json",
            success: function(result) {
                if (result.computeResponse) {
                    options.rootConceptDescendants = result.computeResponse.total;
                }
            }
        }).done(function(result){
            // done
        });
    }

    this.setupCanvas = function() {
        var context = {
            divElementId: panel.divElement.id
        };
        $(divElement).html(JST["views/taxonomyPlugin/main.hbs"](context));
        $("#" + panel.divElement.id + "-resetButton").disableTextSelect();
//        $("#" + panel.divElement.id + "-linkerButton").disableTextSelect();
        $("#" + panel.divElement.id + "-subscribersMarker").disableTextSelect();
        $("#" + panel.divElement.id + "-historyButton").disableTextSelect();
        $("#" + panel.divElement.id + "-configButton").disableTextSelect();
        $("#" + panel.divElement.id + "-collapseButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").disableTextSelect();
        $("#" + panel.divElement.id + "-closeButton").disableTextSelect();
        $("#" + panel.divElement.id + "-expandButton").hide();
        $("#" + panel.divElement.id + "-subscribersMarker").hide();

        $("#" + panel.divElement.id + "-closeButton").click(function(event) {
            $(divElement).remove();
        });

        $("#" + panel.divElement.id + "-configButton").click(function (event) {
            panel.setupOptionsPanel();
//            $("#" + panel.divElement.id + "-taxonomyConfigBar").slideToggle('slow');
        });

        if (typeof panel.options.closeButton != "undefined" && panel.options.closeButton == false) {
            $("#" + panel.divElement.id + "-closeButton").hide();
        }

//        if (typeof panel.options.linkerButton != "undefined" && panel.options.linkerButton == false) {
//            $("#" + panel.divElement.id + "-linkerButton").hide();
//        }

        if (typeof panel.options.subscribersMarker != "undefined" && panel.options.subscribersMarker == false) {
            $("#" + panel.divElement.id + "-subscribersMarker").remove();
        }

        if (typeof panel.options.collapseButton != "undefined" && panel.options.collapseButton == false) {
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        }

        $("#" + panel.divElement.id + "-expandButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideDown("fast");
            $("#" + panel.divElement.id + "-expandButton").hide();
            $("#" + panel.divElement.id + "-collapseButton").show();
        });
        $("#" + panel.divElement.id + "-collapseButton").click(function(event) {
            $("#" + panel.divElement.id + "-panelBody").slideUp("fast");
            $("#" + panel.divElement.id + "-expandButton").show();
            $("#" + panel.divElement.id + "-collapseButton").hide();
        });
        if (typeof i18n_panel_options == "undefined") {
            i18n_panel_options = 'Options';
        }
        $("#" + panel.divElement.id + "-configButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_panel_options,
            animation: true,
            delay: 1000
        });

        if (typeof i18n_history == "undefined") {
            i18n_history = 'History';
        }

        $("#" + panel.divElement.id + "-historyButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_history,
            animation: true,
            delay: 1000
        });

        if (typeof i18n_reset == "undefined") {
            i18n_reset = 'Reset';
        }

        $("#" + panel.divElement.id + "-resetButton").tooltip({
            placement : 'left',
            trigger: 'hover',
            title: i18n_reset,
            animation: true,
            delay: 1000
        });
        if (typeof i18n_panel_links == "undefined") {
            i18n_panel_links = 'Panel links';
        }
//        $("#" + panel.divElement.id + "-linkerButton").tooltip({
//            placement : 'left',
//            trigger: 'hover',
//            title: i18n_panel_links,
//            animation: true,
//            delay: 1000
//        });

        $("#" + panel.divElement.id + "-resetButton").click(function() {
//            panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
            panel.setToConcept(panel.default.conceptId);
        });

        $("#" + panel.divElement.id + "-apply-button").click(function() {
            //console.log("apply!");
            panel.readOptionsPanel();
//            panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
        });

        $("#" + panel.divElement.id + "-historyButton").click(function (event) {
            $("#" + panel.divElement.id + "-historyButton").popover({
                trigger: 'manual',
                placement: 'bottomRight',
                html: true,
                content: function () {
                    historyHtml = '<div style="height:100px;overflow:auto;">';
                    if (typeof i18n_no_terms == "undefined") {
                        i18n_no_terms = "No terms"
                    }
                    if (panel.history.length == 0) {
                        historyHtml = historyHtml + '<div class="text-center text-muted" style="width:100%"><em>'+ i18n_no_terms + '</span>...</em></div>';
                    }
                    historyHtml = historyHtml + '<table>';
                    var reversedHistory = panel.history.slice(0);
                    reversedHistory.reverse();
                    //console.log(JSON.stringify(reversedHistory));
                    $.each(reversedHistory, function (i, field) {
                        var d = new Date();
                        var curTime = d.getTime();
                        var ago = curTime - field.time;
                        var agoString = "";
                        if (ago < (1000 * 60)) {
                            if (Math.round((ago / 1000)) == 1) {
                                agoString = Math.round((ago / 1000)) + ' second ago';
                            } else {
                                agoString = Math.round((ago / 1000)) + ' seconds ago';
                            }
                        } else if (ago < (1000 * 60 * 60)) {
                            if (Math.round((ago / 1000) / 60) == 1) {
                                agoString = Math.round((ago / 1000) / 60) + ' minute ago';
                            } else {
                                agoString = Math.round((ago / 1000) / 60) + ' minutes ago';
                            }
                        } else if (ago < (1000 * 60 * 60 * 60)) {
                            if (Math.round(((ago / 1000) / 60) / 60) == 1) {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hour ago';
                            } else {
                                agoString = Math.round(((ago / 1000) / 60) / 60) + ' hours ago';
                            }
                        }
                        historyHtml = historyHtml + '<tr><td><a href="javascript:void(0);" onclick="historyInTaxPanel(\'' + panel.divElement.id + '\',\'' + field.conceptId + '\');">' + field.term + '</a>';
                        historyHtml = historyHtml + ' <span class="text-muted" style="font-size: 80%"><em>' + agoString + '<em></span>';
                        historyHtml = historyHtml + '</td></tr>';
                    });
                    historyHtml = historyHtml + '</table>';
                    historyHtml = historyHtml + '</div>';
                    return historyHtml;
                }
            });
            $("#" + panel.divElement.id + "-historyButton").popover('toggle');
        });
//        $("#" + panel.divElement.id + "-linkerButton").click(function(event) {
//            $("#" + panel.divElement.id + "-linkerButton").popover({
//                trigger: 'manual',
//                placement: 'bottomRight',
//                html: true,
//                content: function() {
//                    linkerHtml = '<div class="text-center text-muted"><em>Drag to link with other panels<br>';
//                    if (panel.subscriptions.length == 1) {
//                        linkerHtml = linkerHtml + panel.subscriptions.length + ' link established</em></div>';
//                    } else {
//                        linkerHtml = linkerHtml + panel.subscriptions.length + ' links established</em></div>';
//                    }
//                    linkerHtml = linkerHtml + '<div class="text-center"><a href="javascript:void(0);" onclick="clearTaxonomyPanelSubscriptions(\'' + panel.divElement.id + '\');">Clear links</a></div>';
//                    return linkerHtml;
//                }
//            });
//            $("#" + panel.divElement.id + "-linkerButton").popover('toggle');
//        });

        $("#" + panel.divElement.id + "-descendantsCountTrue").click(function (event) {
            panel.options.descendantsCount = true;
            $("#" + panel.divElement.id + '-txViewLabel2').html("Descendants Count: On");
            panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
        });

        $("#" + panel.divElement.id + "-descendantsCountFalse").click(function (event) {
            panel.options.descendantsCount = false;
            $("#" + panel.divElement.id + '-txViewLabel2').html("Descendants Count: Off");
            panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
        });

        $("#" + panel.divElement.id + "-inferredViewButton").click(function (event) {
            panel.options.selectedView = 'inferred';
            $("#" + panel.divElement.id + '-txViewLabel').html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
            panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
        });

        $("#" + panel.divElement.id + "-statedViewButton").click(function (event) {
            panel.options.selectedView = 'stated';
            $("#" + panel.divElement.id + '-txViewLabel').html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
            panel.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
        });
        //$("#" + panel.divElement.id + "-inferredViewButton").click();
        $("#" + panel.divElement.id + "-ownMarker").css('color', panel.markerColor);
    }

    this.setupOptionsPanel = function() {
        var possibleSubscribers = [];
        $.each(componentsRegistry, function(i, field){
            if (field.divElement.id != panel.divElement.id){
                var object = {};
                object.subscriptions = field.subscriptions;
                object.id = field.divElement.id;
                possibleSubscribers.push(object);
            }
        });
        var aux = false;
        $.each(possibleSubscribers, function(i, field){
            aux = false;
            $.each(panel.subscriptions, function(j, subscription){
                if (field.id == subscription.topic){
                    aux = true;
                }
            });
            field.subscribed = aux;
            aux = false;
            $.each(field.subscriptions, function(i, subscription){
                if (subscription.topic == panel.divElement.id){
                    aux = true;
                }
            });
            field.subscriptor = aux;
        });
        panel.options.possibleSubscribers = possibleSubscribers;
        var context = {
            options: panel.options,
            divElementId: panel.divElement.id
        };
        $("#" + panel.divElement.id + "-modal-body").html(JST["views/taxonomyPlugin/options.hbs"](context));
    }

    this.readOptionsPanel = function() {
        $.each(panel.options.possibleSubscribers, function (i, field){
            field.subscribed = $("#" + panel.divElement.id + "-subscribeTo-" + field.id).is(':checked');
            field.subscriptor = $("#" + panel.divElement.id + "-subscriptor-" + field.id).is(':checked');
            var panelToSubscribe = {};
            $.each(componentsRegistry, function(i, panelS){
                if (panelS.divElement.id == field.id){
                    panelToSubscribe = panelS;
                }
            });
            if (field.subscribed){
                panel.subscribe(panelToSubscribe);
            }else{
                panel.unsubscribe(panelToSubscribe);
            }
            if (field.subscriptor){
                panelToSubscribe.subscribe(panel);
            }else{
                panelToSubscribe.unsubscribe(panel);
            }
        });
        $.each(componentsRegistry, function (i, field){
            if (field.loadMarkers)
                field.loadMarkers();
        });
    }

    this.setupParents = function(parents, focusConcept) {
        var lastParent;
        $.each(parents, function(i, parent){
            lastParent = parent;
        });
        Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
            if (countryIcons[moduleId])
                return opts.fn(this);
            else
                return opts.inverse(this);
        });
        Handlebars.registerHelper('if_eq', function(a, b, opts) {
            if (opts != "undefined") {
                if(a == b)
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            }
        });
        Handlebars.registerHelper('if_gr', function(a,b, opts) {
            if(a > b)
                return opts.fn(this);
            else
                return opts.inverse(this);
        });
        Handlebars.registerHelper('if_def', function(conceptId, opts){
            if (conceptId == panel.default.conceptId)
                return opts.fn(this);
            else
                return opts.inverse(this);
        });
        var context = {
            parents: parents,
            focusConcept: focusConcept,
            divElementId: panel.divElement.id
        };
        Handlebars.registerHelper('slice', function (a, b) {
            $("#" + panel.divElement.id + "-panelBody").html($("#" + panel.divElement.id + "-panelBody").html().slice(a, b));
        });
        $("#" + panel.divElement.id + "-panelBody").html(JST["views/taxonomyPlugin/body/parents.hbs"](context));

        if (panel.options.descendantsCount == true) {
            var auxArray = parents;
            auxArray.push(focusConcept);
            auxArray.forEach(function(concept){
                // $.ajax({
                //     type: "POST",
                //     url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
                //     data: {
                //         expression: "< " + concept.conceptId + "|" + concept.defaultTerm + "|",
                //         limit : 1,
                //         skip : 0,
                //         form: panel.options.selectedView
                //     },
                //     dataType: "json",
                //     success: function(result) {
                //         if (result.computeResponse) {
                            $("#" + panel.divElement.id + "-panelBody").find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + concept.statedDescendants + "</span>");
                //         }
                //     }
                // }).done(function(result){
                //     // done
                // });
            });
        }
        //console.log(JST["views/taxonomyPlugin/body/parents.hbs"](context));
        $(".treeButton").disableTextSelect();
        $("#" + panel.divElement.id + "-panelBody").unbind("dblclick");
        $("#" + panel.divElement.id + "-panelBody").dblclick(function(event) {
            if ($(event.target).hasClass("treeLabel")) {
                var d = new Date();
                var time = d.getTime();
                var selectedModule = $(event.target).attr('data-module');
                var selectedId = $(event.target).attr('data-concept-id');
                var selectedLabel = $(event.target).attr('data-term');
                var statedDescendants = $(event.target).attr('data-statedDescendants');
                panel.history.push({term: selectedLabel, conceptId: selectedId, time: time});
                if (typeof selectedId != "undefined") {
                    $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + selectedId + "/parents?form=" + panel.options.selectedView, function(result) {
                        // done
                    }).done(function(result) {
                        panel.setupParents(result, {conceptId: selectedId, defaultTerm: selectedLabel, definitionStatus: "Primitive", module: selectedModule, statedDescendants: statedDescendants});
                    }).fail(function() {
                    });
                }
            }
        });
        $("#" + panel.divElement.id + "-panelBody").unbind("click");
        $("#" + panel.divElement.id + "-panelBody").click(function(event) {
            if ($(event.target).hasClass("treeButton")) {
                var conceptId = $(event.target).closest("li").attr('data-concept-id');
                var iconId = panel.divElement.id + "-treeicon-" + conceptId;
                event.preventDefault();
                if ($("#" + iconId).hasClass("glyphicon-chevron-down")) {
                    //console.log("close");
                    $(event.target).closest("li").find("ul").remove();
                    $("#" + iconId).removeClass("glyphicon-chevron-down");
                    $("#" + iconId).addClass("glyphicon-chevron-right");
                } else if ($("#" + iconId).hasClass("glyphicon-chevron-right")){
                    //console.log("open");
                    $("#" + iconId).removeClass("glyphicon-chevron-right");
                    $("#" + iconId).addClass("glyphicon-refresh");
                    $("#" + iconId).addClass("icon-spin");
                    panel.getChildren($(event.target).closest("li").attr('data-concept-id'));
                } else if ($("#" + iconId).hasClass("glyphicon-chevron-up")){
                    $("#" + iconId).removeClass("glyphicon-chevron-up");
                    $("#" + iconId).addClass("glyphicon-refresh");
                    $("#" + iconId).addClass("icon-spin");
                    panel.wrapInParents($(event.target).closest("li").attr('data-concept-id'), $(event.target).closest("li"));
                } else if ($("#" + iconId).hasClass("glyphicon-minus")){
//                    $("#" + iconId).removeClass("glyphicon-minus");
//                    $("#" + iconId).addClass("glyphicon-chevron-right");
                }
            } else if ($(event.target).hasClass("treeLabel")) {
                var selectedId = $(event.target).attr('data-concept-id');
                if (typeof selectedId != "undefined") {
                    channel.publish(panel.divElement.id, {
                        term: $(event.target).attr('data-term'),
                        module: $(event.target).attr("data-module"),
                        conceptId: selectedId,
                        source: panel.divElement.id
                    });
                }
            }

        });

        var iconId = panel.divElement.id + "-treeicon-" + focusConcept.conceptId;
        $("#" + iconId).removeClass("glyphicon-chevron-right");
        $("#" + iconId).addClass("glyphicon-refresh");
        $("#" + iconId).addClass("icon-spin");
        //console.log("getChildren..." + focusConcept.conceptId);
        panel.getChildren(focusConcept.conceptId);
    };

    this.getChildren = function(conceptId) {
        if (typeof panel.options.selectedView == "undefined") {
            panel.options.selectedView = "inferred";
        }

        if (panel.options.selectedView == "inferred") {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_inferred_view'>Inferred view</span>");
        } else {
            $("#" + panel.divElement.id + "-txViewLabel").html("<span class='i18n' data-i18n-id='i18n_stated_view'>Stated view</span>");
        }

        if (panel.options.descendantsCount == true) $("#" + panel.divElement.id + "-txViewLabel2").html("Descendants Count: On");
        else $("#" + panel.divElement.id + "-txViewLabel2").html("Descendants Count: Off");


        $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/children?form=" + panel.options.selectedView, function(result) {
        }).done(function(result) {
            if (result && result[0] && typeof result[0].statedDescendants == "undefined") $("#" + panel.divElement.id + "-txViewLabel2").closest("li").hide();
            result.sort(function(a, b) {
                if (a.defaultTerm.toLowerCase() < b.defaultTerm.toLowerCase())
                    return -1;
                if (a.defaultTerm.toLowerCase() > b.defaultTerm.toLowerCase())
                    return 1;
                return 0;
            });
            //console.log(JSON.stringify(result));
            var listIconIds = [];
            //console.log(JSON.stringify(listIconIds));
            var context = {
                result: result,
                divElementId: panel.divElement.id,
                selectedView: panel.options.selectedView
            };
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('push', function (element){
                listIconIds.push(element);
            });
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            if (result.length > 0) {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
            }
            $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").append(JST["views/taxonomyPlugin/body/children.hbs"](context));
            if (panel.options.descendantsCount == true) {
                result.forEach(function(concept){
                    if (concept.active){
                        // $.ajax({
                        //     type: "POST",
                        //     url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
                        //     data: {
                        //         expression: "< " + concept.conceptId + "|" + concept.defaultTerm + "|",
                        //         limit : 1,
                        //         skip : 0,
                        //         form: panel.options.selectedView
                        //     },
                        //     dataType: "json",
                        //     success: function(result) {
                        //         if (result.computeResponse) {
                                    $("#" + panel.divElement.id + "-treenode-" + conceptId).closest("li").find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + concept.statedDescendants + "</span>");
                        //         }
                        //     }
                        // }).done(function(result){
                        //     // done
                        // });
                    }
                });
            }
            $(".treeButton").disableTextSelect();
            if (typeof i18n_drag_this == "undefined"){
                i18n_drag_this = "Drag this";
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });

        }).fail(function() {
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
            $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-minus");
        });
    }

    this.wrapInParents = function(conceptId, liItem) {
        var topUl = $("#" + panel.divElement.id + "-panelBody").find('ul:first');
        $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/parents?form=" + panel.options.selectedView, function(parents) {
            // done
        }).done(function(parents) {
            if (parents.length > 0) {
                var firstParent = "empty";
                var parentsStrs = [];
                $.each(parents, function(i, parent) {
                    var parentLiHtml = "<li data-concept-id='" + parent.conceptId + "' data-term='" + parent.defaultTerm + "' class='treeLabel'>";
                    parentLiHtml = parentLiHtml + "<button class='btn btn-link btn-xs treeButton' style='padding:2px'><i class='glyphicon glyphicon-chevron-";
                    if (parent.conceptId == "138875005" || parent.conceptId == "9999999999"){
                        parentLiHtml = parentLiHtml + "down";
                    }else{
                        parentLiHtml = parentLiHtml + "up";
                    }
                    parentLiHtml = parentLiHtml + " treeButton'  id='" + panel.divElement.id + "-treeicon-" + parent.conceptId + "'></i></button>";
                    if (parent.definitionStatus == "Primitive") {
                        parentLiHtml = parentLiHtml + '<span class="badge alert-warning" data-concept-id="' + parent.conceptId + '" data-term="' + parent.defaultTerm + '" draggable="true" ondragstart="drag(event)" class="treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + parent.conceptId + '">&nbsp;&nbsp;</span>&nbsp;&nbsp;';
                    } else {
                        parentLiHtml = parentLiHtml + '<span class="badge alert-warning" data-concept-id="' + parent.conceptId + '" data-term="' + parent.defaultTerm + '" draggable="true" ondragstart="drag(event)" class="treeLabel selectable-row" id="' + panel.divElement.id + '-treenode-' + parent.conceptId + '">&equiv;</span>&nbsp;&nbsp;';
                    }
                    if (countryIcons[parent.module]){
                        parentLiHtml = parentLiHtml + "<div class='phoca-flagbox' style='width:33px;height:33px'><span class='phoca-flag " + countryIcons[parent.module] + "'></span></div> ";
                    }
                    parentLiHtml = parentLiHtml + '<a href="javascript:void(0);" style="color: inherit;text-decoration: inherit;"><span class="treeLabel selectable-row" data-concept-id="' + parent.conceptId + '" data-term="' + parent.defaultTerm + '"> ' + parent.defaultTerm + '</span></a>';
                    parentLiHtml = parentLiHtml + "</li>";
                    parentsStrs.push(parentLiHtml);
                    if (firstParent == "empty") {
                        firstParent = parent.conceptId;
                    }
                });

                var staticChildren = topUl.children().slice(0);
                topUl.append(parentsStrs[0]);
                $('#' + panel.divElement.id + '-treenode-' + firstParent).closest('li').append("<ul id='parent-ul-id-" + firstParent + "' style='list-style-type: none; padding-left: 15px;'></ul>");
                if (panel.options.descendantsCount == true) {
                    parents.forEach(function(concept){
                        // $.ajax({
                        //     type: "POST",
                        //     url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
                        //     data: {
                        //         expression: "< " + concept.conceptId + "|" + concept.defaultTerm + "|",
                        //         limit : 1,
                        //         skip : 0,
                        //         form: panel.options.selectedView
                        //     },
                        //     dataType: "json",
                        //     success: function(result) {
                        //         if (result.computeResponse) {
                                    $(topUl).find('.selectable-row[data-concept-id="' + concept.conceptId + '"]').append("&nbsp;&nbsp;&nbsp;&nbsp;<span class='text-muted'>" + concept.statedDescendants + "</span>");
                        //         }
                        //     }
                        // }).done(function(result){
                        //     // done
                        // });
                    });
                }
                var newMainChild;
                $.each(staticChildren, function(i, child) {
                    if ($(child).attr('data-concept-id') == conceptId) {
                        newMainChild = $(child);
                        var newUl = $('#' + panel.divElement.id + '-treenode-' + firstParent).closest('li').find('ul:first');
                        newUl.append($(child));
                        $(child).find('i:first').removeClass("glyphicon-chevron-up");
                        $(child).find('i:first').addClass("glyphicon-chevron-down");
                    }
                });
                $.each(staticChildren, function(i, child) {
                    if ($(child).attr('data-concept-id') != conceptId) {
                        $.each($(child).children(), function(i, subchild) {
                            if ($(subchild).is('ul')) {
                                newMainChild.append(subchild);
                            }
                        });
                        $('#' + panel.divElement.id + '-treenode-' +$(child).attr('data-concept-id')).closest('li').remove();
                    }
                });
                $.each(parentsStrs, function(i, parentsStr) {
                    if (parentsStr != parentsStrs[0]) {
                        topUl.prepend(parentsStr);
                    }
                });
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-down");
            } else {
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("glyphicon-refresh");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).removeClass("icon-spin");
                $("#" + panel.divElement.id + "-treeicon-" + conceptId).addClass("glyphicon-chevron-up");
            }
            $("[draggable='true']").tooltip({
                placement: 'left auto',
                trigger: 'hover',
                title: i18n_drag_this,
                animation: true,
                delay: 500
            });

            $("[draggable='true']").mouseover(function(e){
//                console.log(e);
                var term = $(e.target).attr("data-term");
                if (typeof term == "undefined"){
                    term = $($(e.target).parent()).attr("data-term");
                }
                icon = iconToDrag(term);
            });
        }).fail(function() {
        });
    }

    this.setToConcept = function(conceptId, term, definitionStatus, module, statedDescendants) {
        $("#" + panel.divElement.id + "-panelBody").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/parents?form="+panel.options.selectedView, function(result) {
            // done
        }).done(function(result) {
            if (definitionStatus != "Primitive" && definitionStatus != "Fully defined") {
                definitionStatus = "Primitive";
            }
            if (conceptId == 138875005) statedDescendants = options.rootConceptDescendants;
            if (typeof term == "undefined" || typeof statedDescendants == "undefined"){
                $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId, function(res){
                    term = res.defaultTerm;
                    if (typeof res.statedDescendants == "undefined") $("#" + panel.divElement.id + "-txViewLabel2").closest("li").hide();
                    statedDescendants = res.statedDescendants;
                    panel.setupParents(result, {conceptId: conceptId, defaultTerm: term, definitionStatus: definitionStatus, module: module, statedDescendants: statedDescendants});
                });
            }else{
                panel.setupParents(result, {conceptId: conceptId, defaultTerm: term, definitionStatus: definitionStatus, module: module, statedDescendants: statedDescendants});
            }
        }).fail(function() {
            $("#" + panel.divElement.id + "-panelBody").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        });
    }

    // Subscription methods
    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
//        console.log('Subscribing to id: ' + panelId);
        var alreadySubscribed = false;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field == panelToSubscribe.markerColor){
                alreadySubscribed = true;
            }
        });
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
//                console.log("listening in " + panel.divElement.id);
                panel.setToConcept(data.conceptId, data.term, data.definitionStatus, data.module, data.statedDescendants);
            });
            panel.subscriptions.push(subscription);
            panelToSubscribe.subscribers.push(panel.divElement.id);
            panel.subscriptionsColor.push(panelToSubscribe.markerColor);
        }
        $("#" + panelId + "-ownMarker").show();
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        $("#" + panelId + "-subscribersMarker").show();
    }

    this.refsetSubscribe = function(refsetId){
        channel.subscribe("refsetSubscription-" + refsetId, function(data, envelope){
            panel.setToConcept(data.conceptId);
        });
    }

    this.unsubscribe = function(panelToUnsubscribe) {
        var aux = [], colors = [], unsubscribed = true;
        $.each(panel.subscriptionsColor, function(i, field){
            if (field != panelToUnsubscribe.markerColor){
                colors.push(field);
            }else{
                unsubscribed = false;
            }
        });
        if (!unsubscribed){
            panel.subscriptionsColor = colors;
//            console.log(panel.divElement.id);
//            console.log(panel.subscriptionsColor);
            colors = [];
            $.each(panelToUnsubscribe.subscribers, function(i, field){
                if (field != panel.divElement.id){
                    aux.push(field);
                }
            });
            panelToUnsubscribe.subscribers = aux;
            $.each(panelToUnsubscribe.subscriptionsColor, function(i, field){
                colors.push(field);
            });
            if (panelToUnsubscribe.subscribers.length == 0){
                if (panelToUnsubscribe.subscriptions.length == 0){
                    $("#" + panelToUnsubscribe.divElement.id + "-subscribersMarker").hide();
                }
            }else{
//                colors.push(panelToUnsubscribe.markerColor);
            }
            panelToUnsubscribe.subscriptionsColor = colors;
//            console.log(panelToUnsubscribe.divElement.id);
//            console.log(panelToUnsubscribe.subscriptionsColor);
            aux = [];
            $.each(panel.subscriptions, function(i, field){
                if (panelToUnsubscribe.divElement.id == field.topic){
                    field.unsubscribe();
                }else{
                    aux.push(field);
                }
            });
            panel.subscriptions = aux;
            if (panel.subscriptions.length == 0 && panel.subscribers.length == 0){
                $("#" + panel.divElement.id + "-subscribersMarker").hide();
            }
        }
    }

    this.loadMarkers = function (){
        var auxMarker = "", right = 0, top = 0, aux = false, visible = false;
        $.each(componentsRegistry, function(i, field){
            var panelId = field.divElement.id;
            if ($("#" + panelId + "-subscribersMarker").is(':visible')){
                visible = true;
            }
        });
        if (panel.subscribers.length == 0){
            right = 14;
            $("#" + panel.divElement.id + "-ownMarker").hide();
        }else{
            if (!visible){
                $("#" + panel.divElement.id + "-ownMarker").hide();
            }
            aux = true;
        }
        if ($("#" + panel.divElement.id + "-subscribersMarker").is(':visible')){
            $("#" + panel.divElement.id + "-panelTitle").html($("#" + panel.divElement.id + "-panelTitle").html().replace(/&nbsp;/g, ''));
            if (aux){
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
            }
            $.each(panel.subscriptionsColor, function(i, field){
                auxMarker = auxMarker + "<i class='glyphicon glyphicon-bookmark' style='color: "+ field +"; top:" + top + "px; right: " + right + "px;'></i>";
                $("#" + panel.divElement.id + "-panelTitle").html("&nbsp&nbsp" + $("#" + panel.divElement.id + "-panelTitle").html());
                top = top + 5;
                right = right + 10;
            });
            $("#" + panel.divElement.id + "-subscribersMarker").html(auxMarker);
        }
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


    this.setupCanvas();
    if (!conceptId || conceptId == 138875005) {
        this.setupParents([], {conceptId: 138875005, defaultTerm: "SNOMED CT Concept", definitionStatus: "Primitive", "statedDescendants": options.rootConceptDescendants });
    } else {
        if (xhr != null) {
            xhr.abort();
            //console.log("aborting call...");
        }
        xhr = $.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId, function(result) {
            if (typeof result.statedDescendants == "undefined") $("#" + panel.divElement.id + "-txViewLabel2").closest("li").hide();
        }).done(function(result) {
            panel.setToConcept(conceptId, result.defaultTerm, result.definitionStatus, result.module, result.statedDescendants);
        }).fail(function() {
            //console.log("Error");
        });
    }
}

function clearTaxonomyPanelSubscriptions(divElementId1) {
    var d1;
    $.each(componentsRegistry, function(i, field) {
        if (field.divElement.id == divElementId1) {
            d1 = field;
        }
    });
    d1.unsubscribeAll();
    $("#" + divElementId1).find('.linker-button').popover('toggle');
}

function historyInTaxPanel(divElementId, conceptId) {
    $.each(componentsRegistry, function (i, field) {
    //console.log(field.divElement.id + ' == ' + divElementId);
        if (field.divElement.id == divElementId) {
//            $('#' + divElementId + '-searchBox').val(searchTerm);
//            field.search(searchTerm,0,100,false);
            field.setToConcept(conceptId);
        }
    });
    $('.history-button').popover('hide');
}

(function($) {
    $.fn.addTaxonomy = function(options) {
        this.filter("div").each(function() {
            var tx = new conceptDetails(this, options);
        });
    };
}(jQuery));

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

    this.setUpPanel = function (){
        var context = {
            divElementId: panel.divElement.id
        }
        $(divElement).html(JST["views/refsetPlugin/main.hbs"](context));
    }
    panel.setUpPanel();

    this.loadRefsets = function(){
//        console.log(panel.options.manifest);
        if (panel.options.manifest){
            panel.options.manifest.refsets.sort(function (a, b) {
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
            $("#" + panel.divElement.id + "-panelBody").html(JST["views/refsetPlugin/body.hbs"](context));
            $('#' + panel.divElement.id + '-panelBody').find(".refset-item").click(function (event) {
                panel.loadMembers($(event.target).attr('data-concept-id'), $(event.target).attr('data-term'), 100, 0);
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: $(event.target).attr('data-concept-id'),
                    source: panel.divElement.id
                });
            });
        }else{
            $("#" + panel.divElement.id + "-panelBody").html("<div class='alert alert-danger'><span class='i18n' data-i18n-id='i18n_ajax_failed'><strong>Error</strong> while retrieving data from server...</span></div>");
        }
    }
    panel.loadRefsets();

    this.loadMembers = function(conceptId, term, returnLimit, skipTo, paginate){
        var membersUrl = options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/" + conceptId + "/members?limit=" + returnLimit;
        if (skipTo > 0){
            membersUrl = membersUrl + "&skip=" + skipTo;
        }else{
            $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><i class='glyphicon glyphicon-refresh icon-spin'></i></td></tr>");
        }
        var total;
        if (panel.options.manifest){
            $.each(panel.options.manifest.refsets, function (i, field){
                if (field.conceptId == panel.conceptId){
                    if (field.count){
                        total = field.count;
                    }
                }
            });
        }
        if (typeof total != "undefined"){
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
        xhrMembers = $.getJSON(membersUrl, function(result){

        }).done(function(result){
            var remaining = "asd";
            if (typeof total == "undefined") total = result.details.total;
            if (total == skipTo){
                remaining = 0;
            }else{
                if (total > (skipTo + returnLimit)){
                    remaining = total - (skipTo + returnLimit);
                }else{
//                        if (result.details.total < returnLimit && skipTo != 0){
                    remaining = 0;
//                        }else{
//                            remaining = result.details.total;
//                        }
                }
            }
            if (remaining < returnLimit){
                var returnLimit2 = remaining;
            }else{
                if (remaining != 0){
                    var returnLimit2 = returnLimit;
                }else{
                    var returnLimit2 = 0;
                }
            }
            var context = {
                result: result,
                returnLimit: returnLimit2,
                remaining: remaining,
                divElementId: panel.divElement.id,
                skipTo: skipTo,
                term: term,
                conceptId: conceptId
            };
            Handlebars.registerHelper('if_eq', function(a, b, opts) {
                if (opts != "undefined") {
                    if(a == b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('if_gr', function(a,b, opts) {
                if (a){
                    if(a > b)
                        return opts.fn(this);
                    else
                        return opts.inverse(this);
                }
            });
            Handlebars.registerHelper('hasCountryIcon', function(moduleId, opts){
                if (countryIcons[moduleId])
                    return opts.fn(this);
                else
                    return opts.inverse(this);
            });
            if (result.members.length != 0){
                $("#" + panel.divElement.id + "-moreMembers").remove();
                $("#" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                if (skipTo == 0) {
                    $('#' + panel.divElement.id + "-resultsTable").html(JST["views/refsetPlugin/members.hbs"](context));
                }else{
                    $('#' + panel.divElement.id + "-resultsTable").append(JST["views/refsetPlugin/members.hbs"](context));
                }
                $("#" + panel.divElement.id + "-moreMembers").click(function(){
                    $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                    skipTo = skipTo + returnLimit;
                    panel.loadMembers(conceptId, term, returnLimit2, skipTo , paginate);
                });
                $("#" + panel.divElement.id + "-sort").unbind();
                $("#" + panel.divElement.id + "-sort").click(function(){
                    $("#" + panel.divElement.id + "-sort").blur();
                    panel.loadMembers(conceptId, term, returnLimit2, 0, 1);
                });
            }else{
                if (skipTo != 0){
                    $("#" + panel.divElement.id + "-moreMembers").remove();
                    $("#" + panel.divElement.id + "-resultsTable").find(".more-row").remove();
                    if (skipTo == 0) {
                        $('#' + panel.divElement.id + "-resultsTable").html(JST["views/refsetPlugin/members.hbs"](context));
                    }else{
                        $('#' + panel.divElement.id + "-resultsTable").append(JST["views/refsetPlugin/members.hbs"](context));
                    }
                    $("#" + panel.divElement.id + "-moreMembers").click(function(){
                        $("#" + panel.divElement.id + "-moreMembers").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                        skipTo = skipTo + returnLimit;
                        panel.loadMembers(conceptId, term, returnLimit2, skipTo, paginate);
                    });
                    $("#" + panel.divElement.id + "-sort").unbind();
                    $("#" + panel.divElement.id + "-sort").click(function(){
                        $("#" + panel.divElement.id + "-sort").blur();
                        panel.loadMembers(conceptId, term, returnLimit2, 0, 1);
                    });
                }else{
                    $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
                }
            }
            $('#' + panel.divElement.id + '-resultsTable').find(".member-concept-row").click(function (event) {
                var clickedBadge = $(event.target).closest(".member-concept-row").find(".badge");
                channel.publish(panel.divElement.id, {
                    term: clickedBadge.attr('data-term'),
                    module: clickedBadge.attr("data-module"),
                    conceptId: clickedBadge.attr('data-concept-id'),
                    source: panel.divElement.id
                });
            });
        }).fail(function(err){
            if (xhrMembers.status === 0) {
                if (xhrMembers.statusText === 'abort') {
                }else{
                    $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
                }
            }else{
                $("#" + panel.divElement.id + "-resultsTable").html("<tr><td class='text-muted' colspan='2'><span data-i18n-id='i18n_no_members' class='i18n'>This concept has no members</span></td></tr>");
            }
        });
    }

}
/**
 * Created by termmed on 9/1/14.
 */

function favoritePanel(divElement, options) {
    var panel = this;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    var favoriteCall = null;
    this.type = "favorites";
    panel.subscribers = [];


//    if (!componentsRegistry){
//        componentsRegistry = [];
//        componentsRegistry.push(panel);
//    }else{
//        componentLoaded = false;
//        $.each(componentsRegistry, function(i, field) {
//            if (field.divElement.id == panel.divElement.id) {
//                componentLoaded = true;
//            }
//        });
//        if (componentLoaded == false) {
//            componentsRegistry.push(panel);
//        }
//    }



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

    this.setUpFavs = function (){
        var context = {
            divElementId: panel.divElement.id
        }
        $(divElement).html(JST["views/favorites/main.hbs"](context));
    }

    panel.setUpFavs();

    this.loadFavs = function (){
        $("#" + panel.divElement.id + "-panelBody").html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        var favs = stringToArray(localStorage.getItem("favs")), concepts = [];

        function loadFavsTemplate(concepts){
            var context = {
                concepts: concepts
            }
            $("#" + panel.divElement.id + "-panelBody").html(JST["views/favorites/body.hbs"](context));
            $('#' + panel.divElement.id + '-panelBody').find(".glyphicon-remove-circle").click(function (e) {
                var favs = stringToArray(localStorage.getItem("favs")), auxFavs = [];
                $.each(favs, function(i,field){
                    if (field != $(e.target).attr("data-concept-id")){
                        auxFavs.push(field);
                    }
                });
                localStorage.setItem("favs", auxFavs);
                localStorage.removeItem("conceptId:" + $(e.target).attr("data-concept-id"));
                panel.loadFavs();
            });
            $("#exportFavsXls").click(function(){
                return ExcellentExport.excel(this, 'tableFavs');
            });
            $('#' + panel.divElement.id + '-panelBody').find(".fav-item").click(function (event) {
                channel.publish(panel.divElement.id, {
                    term: $(event.target).attr('data-term'),
                    module: $(event.target).attr("data-module"),
                    conceptId: $(event.target).attr('data-concept-id'),
                    source: panel.divElement.id
                });
            });
        }

        var length = favs.length - 1;
        $.each(favs, function(i, field){
            var concept = localStorage.getItem("conceptId:" + field);
            concept = JSON.parse(concept);
            concepts.push(concept);
        });
        loadFavsTemplate(concepts);
    }

    channel.subscribe("favsAction", function() {
        panel.loadFavs();
    });
    $("#" + panel.divElement.id + "-li").click(function(){
        panel.loadFavs();
    });
}
/**
 * Created by termmed on 9/1/14.
 */

function queryComputerPanel(divElement, options) {
    var panel = this;
    panel.showId = false;
    var limit = 100;
    var skip = 0;
    var xhrTotal = null;
    var xhrExecute = null;
    panel.currentEx = 0;
    this.divElement = divElement;
    this.options = jQuery.extend(true, {}, options);
    this.type = "query-computer";
    panel.subscribers = [];
    panel.totalResults = [];

    if (!componentsRegistry){
        componentsRegistry = [];
        componentsRegistry.push(panel);
    }else{
        var componentLoaded = false;
        $.each(componentsRegistry, function(i, field) {
            if (field.divElement && field.divElement.id == panel.divElement.id) {
                componentLoaded = true;
            }
        });
        if (componentLoaded == false) {
            componentsRegistry.push(panel);
        }
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
    //panel.markerColor = panel.getNextMarkerColor(globalMarkerColor);
    panel.markerColor = "asdasdasdas";

    this.subscribe = function(panelToSubscribe) {
        var panelId = panelToSubscribe.divElement.id;
        var alreadySubscribed = false;
        if (!alreadySubscribed) {
            var subscription = channel.subscribe(panelId, function(data, envelope) {
                if (data){
                    panel.updateCanvas(data);
                }
            });
        }
        $("#" + panelId + "-ownMarker").show();
        $("#" + panel.divElement.id + "-subscribersMarker").show();
        $("#" + panelId + "-ownMarker").show();
    }

    this.setUpPanel = function (){
        var context = {
            divElementId: panel.divElement.id,
            examples: [
                {
                    title: "All excision procedures that are also procedures on the digestive system",
                    context: [
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOf", conceptId: "65801008", term: "Excision (procedure)"},
                                {criteria: "descendantOf", conceptId: "118673008", term: "Procedure on digestive system (procedure)"}
                            ]
                        }
                    ]
                },
                {
                    title: "All pneumonias except intersticial pneumonias",
                    context: [
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOf", conceptId: "233604007", term: "Pneumonia (disorder)"}
                            ]
                        },
                        {
                            modifier: "Exclude",
                            criterias: [
                                {criteria: "descendantOrSelfOf", conceptId: "64667001", term: "Interstitial pneumonia (disorder)"}
                            ]
                        }
                    ]
                },
                {
                    title: "Hypertension related concepts, disorders, personal history and family history",
                    context: [
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOf", conceptId: "38341003", term: "Hypertensive disorder, systemic arterial (disorder)"}
                            ]
                        },
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "self", conceptId: "160273004", term: "No family history: Hypertension (situation)"}
                            ]
                        },
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOrSelfOf", conceptId: "161501007", term: "History of hypertension (situation)"}
                            ]
                        },
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOrSelfOf", conceptId: "160357008", term: "Family history: Hypertension (situation)"}
                            ]
                        }
                    ]
                },
                {
                    title: "Disorders that descendants of Necrosis of an anatomical site and of a disorder of the heart muscle",
                    context: [
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOf", conceptId: "609410002", term: "Necrosis of anatomical site (disorder)"},
                                {criteria: "descendantOf", conceptId: "57809008", term: "Myocardial disease (disorder)"}
                            ]
                        }
                    ]
                },
                {
                    title: "All disorders of the lung with an associated morphology with value Edema or any descendant",
                    context: [
                        {
                            modifier: "Include",
                            criterias: [
                                {criteria: "descendantOf", conceptId: "19829001", term: "Disorder of lung (disorder)", type: {conceptId: "", term: ''}},
                                {criteria: "descendantOrSelfOf", conceptId: "79654002", term: "Edema (morphologic abnormality)", type: {conceptId: "116676008", term: 'Associated morphology (attribute)'}}
                            ]
                        }
                    ]
                }
                //{
                //    title: "",
                //    context: [
                //        {
                //            modifier: "",
                //            criterias: [
                //                {criteria: "", conceptId: "", term: "", type: {conceptId: "", term: ''}}
                //            ]
                //        }
                //    ]
                //},
            ]
        };
        $(divElement).html(JST["views/developmentQueryPlugin/main.hbs"](context));

        $(divElement).find('textarea').unbind();
        $(divElement).find('textarea').keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
                var s = $(this).val();
                $(this).val(s+"\n");
            }
        });
        $('[data-toggle="tooltip"]').tooltip();

        $("#" + panel.divElement.id + "-ExamplesModal").scrollspy({ target: '#' + panel.divElement.id + '-sidebar', offset:80 });

        var clicked = false;
        $("#" + panel.divElement.id + "-mynav li a").click(
            function(){
                //console.log('click...');
                $('#' + panel.divElement.id + '-mycontent > div > h4').css('padding-top',0);
                $($( this ).attr('href') + ' > h4').css('padding-top','50px');
                clicked = true;
            }
        );

        $("#" + panel.divElement.id + "-ExamplesModal").on('activate.bs.scrollspy', function () {
            //console.log('scrolling...');
            if(!clicked)$('#' + panel.divElement.id + '-mycontent > div > h4').css('padding-top',0);
            clicked = false;
        });

        $("#" + panel.divElement.id + "-ExamplesModal").on('shown.bs.modal', function() {
            $("#" + panel.divElement.id + "-mycontentExamples").html(JST["views/developmentQueryPlugin/examples.hbs"](context));
            context.examples.forEach(function(item, index){
                var contextHtml = "";
                item.context.forEach(function(loopContext){
                    //contextHtml+= JST[""(loopContext)];
                    contextHtml+= JST["views/developmentQueryPlugin/criteria.hbs"](loopContext);
                });
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().html(contextHtml);
                if ($("#" + panel.divElement.id + "-ExpTab").hasClass("active")){
                    contextHtml = panel.exportToConstraintGrammar(true, false, false, $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first());
                    if (contextHtml.indexOf("(") == 0)
                        contextHtml = contextHtml.substr(1, contextHtml.length - 2);
                    $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().html(contextHtml);
                }
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().find(".btn").addClass("disabled");
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".query-condition").each(function(index) {
                    $(this).find(".line-number").html(index + 1);
                });
                $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".loadExample").first().attr("data-htmlValue", $("#" + panel.divElement.id + "-" + index + "-modal-examples").find(".contentExamples").first().html());
            });
            $("#" + panel.divElement.id + "-mycontentExamples").find(".loadExample").unbind();
            $("#" + panel.divElement.id + "-mycontentExamples").find(".loadExample").click(function(e){
                var htmlToPut = $(e.target).attr("data-htmlValue");
                if ($("#" + panel.divElement.id + "-ExpTab").hasClass("active")){
                    $('#' + panel.divElement.id + '-ExpText').html(htmlToPut);
                    $('#' + panel.divElement.id + '-ExpText').val(htmlToPut.replace(/(<([^>]+)>)/ig,"").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<"));
                    $("#" + panel.divElement.id + "-ExamplesModal").modal("hide");
                }else{
                    $('#' + panel.divElement.id + '-listGroup').html(htmlToPut);
                    $('#' + panel.divElement.id + '-listGroup').find(".btn").removeClass("disabled");
                    $('#' + panel.divElement.id + '-listGroup').find(".query-condition").each(function(i){
                        var critToUpdate = $(this);
                        $(critToUpdate).find("small").remove();
                        $(critToUpdate).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                        $("#" + panel.divElement.id + "-ExamplesModal").modal("hide");
                        panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critToUpdate), true, function(resultCount){
                            $(critToUpdate).find("small").remove();
                            $(critToUpdate).find(".glyphicon-refresh").first().remove();
                            var cont = parseInt(resultCount);
                            $(critToUpdate).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                        });

                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").unbind();
                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").click(function(e){
                            var prevValue = $(e.target).closest(".constraint").attr('data-criteria');
                            var newValue = $(e.target).html();
                            if (prevValue != newValue){
                                $(e.target).closest(".constraint").attr('data-criteria', newValue);
                                $(e.target).closest("div").find("button").first().html(newValue + "&nbsp;");
                                var critToUpdate = $(e.target).closest(".query-condition");
                                $(critToUpdate).find("small").remove();
                                $(critToUpdate).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                                panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critToUpdate), true, function(resultCount){
                                    $(critToUpdate).find("small").remove();
                                    $(critToUpdate).find(".glyphicon-refresh").first().remove();
                                    var cont = parseInt(resultCount);
                                    $(critToUpdate).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                                });
                            }
                        });

                        $(divElement).find(".removeLi").unbind();
                        $(divElement).find(".removeLi").disableTextSelect();
                        $(divElement).find(".removeLi").click(function(e){
                            $(e.target).closest("li").remove();
                            panel.renumLines();
                        });
                    });
                }
            });
        });

        if (!panel.typeArray || !panel.typeArray.length){
            $.ajax({
                type: "POST",
                url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
                data: {
                    expression: "< 410662002|Concept model attribute (attribute)|",
                    limit : 5000,
                    skip : 0,
                    form: "inferred"
                },
                dataType: "json",
                //timeout: 300000,
                success: function(result) {
                    //console.log(result);
                    //console.log(result.computeResponse.matches);
                    result.computeResponse.matches.push({conceptId: "<< 47429007", defaultTerm: "Associated with (attribute) [<<]"});
                    result.computeResponse.matches.push({conceptId: "<< 405815000", defaultTerm: "Procedure device (attribute) [<<]"});
                    result.computeResponse.matches.push({conceptId: "<< 405816004", defaultTerm: "Procedure morphology (attribute) [<<]"});
                    result.computeResponse.matches.push({conceptId: "<< 363704007", defaultTerm: "Procedure site (attribute) [<<]"});
                    panel.typeArray = result.computeResponse.matches;
                    panel.typeArray.sort(function (a, b) {
                        if (a.defaultTerm < b.defaultTerm)
                            return -1;
                        if (a.defaultTerm > b.defaultTerm)
                            return 1;
                        return 0;
                    });
                }
            }).done(function(result){

            });
        }

        //$.getJSON(options.serverUrl + "/" + options.edition + "/" + options.release + "/concepts/410662002/children?form=inferred").done(function(result) {
        //    //console.log(result);
        //    result.sort(function (a, b) {
        //        if (a.defaultTerm < b.defaultTerm)
        //            return -1;
        //        if (a.defaultTerm > b.defaultTerm)
        //            return 1;
        //        return 0;
        //    });
        //    panel.typeArray = result;
        //});

        //$("#" + panel.divElement.id + "-ExamplesModal").find(".btn").addClass("disabled");
        //$("#" + panel.divElement.id + "-ExamplesModal").find(".loadExample").removeClass("disabled");
        //$("#" + panel.divElement.id + "-ExamplesModal-close").removeClass("disabled");

        var bindAddCriteriaFunction = function(){
            $(divElement).find(".addCriteria").unbind();
            $(divElement).find(".addCriteria").disableTextSelect();
            $(divElement).find(".addCriteria").click(function(e){
                $(e.target).closest(".form-group").hide();
                var criteria = $('#' + panel.divElement.id + '-selectedCriteria').html();
                var typeSelected = $(e.target).attr("data-type");
                if ($(divElement).find(".addedCriteria").length)
                    typeSelected = $(divElement).find(".addedCriteria").first().attr("data-typeSelected");
                $(e.target).closest(".form-inline").append(JST["views/developmentQueryPlugin/andCriteria.hbs"]({criteria: criteria, typeSelected: typeSelected, types: panel.typeArray}));

                $(divElement).find(".addedCriteria").find(".selectTypeOpt").unbind();
                $(divElement).find(".addedCriteria").find(".selectTypeOpt").click(function(e){
                    $(e.target).closest(".typeCritCombo").attr("data-type-term", $(e.target).attr("data-term"));
                    $(e.target).closest(".typeCritCombo").attr("data-type-concept-id", $(e.target).attr("data-id"));
                    var term = $(e.target).attr("data-term");
                    if (term.length > 15)
                        term = term.substr(0, 14) + "...";
                    $(e.target).closest("div").find("span").first().html(term);
                });

                $(divElement).find(".addedCriteria").find(".removeCriteria").unbind();
                $(divElement).find(".addedCriteria").find(".removeCriteria").click(function(e){
                    $(e.target).closest(".addedCriteria").remove();
                    var foundAddedCriteria = $(divElement).find(".addedCriteria");
                    if (!foundAddedCriteria.length){
                        $("#" + panel.divElement.id + "-addCriteriaAnd").show();
                    }else{
                        $(divElement).find(".addedCriteria").find(".dropFirstType").hide();
                        $(divElement).find(".addedCriteria").first().find(".dropFirstType").first().show();
                        //console.log($(foundAddedCriteria[foundAddedCriteria.length - 1]).find(".addCriteria").first().closest(".form-group"));
                        $(foundAddedCriteria[foundAddedCriteria.length - 1]).find(".addCriteria").first().closest(".form-group").show();
                    }
                });
                $(divElement).find(".addedCriteria").find("a[data-role='criteria-selector']").unbind();
                $(divElement).find(".addedCriteria").find("a[data-role='criteria-selector']").click(function (e) {
                    $(e.target).closest(".dropdown").find("span").first().html($(e.target).html());
                });
                bindAddCriteriaFunction();
            });
        };
        bindAddCriteriaFunction();

        $('#' + panel.divElement.id + '-addCriteriaAnd').unbind();

        $('#' + panel.divElement.id + '-clearButton').unbind();
        $('#' + panel.divElement.id + '-clearButton').disableTextSelect();
        $('#' + panel.divElement.id + '-clearButton').click(function(){
            if (xhrExecute != null)
                xhrExecute.abort();
            panel.setUpPanel();
        });

        $('#' + panel.divElement.id + '-copyConstraint').unbind();
        $("#" + panel.divElement.id + "-copyConstraint").disableTextSelect();
        var clientGrammar = new ZeroClipboard( document.getElementById(panel.divElement.id + "-copyConstraint") );
        clientGrammar.on( "ready", function( readyEvent ) {
            clientGrammar.on( "copy", function (event) {
//                var grammar = panel.exportToConstraintGrammar(false, fullSyntax);
                //console.log(grammar);
                $("#" + panel.divElement.id + "-copyConstraint").addClass("animated rubberBand");
                window.setTimeout( function(){
                    $("#" + panel.divElement.id + "-copyConstraint").removeClass('animated rubberBand');
                }, 1000);
                alertEvent("Constraint Grammar copied to clipboard", "success");
                var clipboard = event.clipboardData;
                clipboard.setData("text/plain", panel.grammarToCopy);
            });
        });


        panel.options.devQuery = true;

        $('#' + panel.divElement.id + '-exportXls').unbind();
        $('#' + panel.divElement.id + '-exportXls').click(function (e) {
//            var rowsHtml = "";
//            alertEvent("Please wait", "info");
//            panel.getTotalResults(function(){
//                $.each(panel.allResults, function(i, field){
//                    rowsHtml+= "<tr><td>" + field.defaultTerm + "</td><td>" + field.conceptId + "</td></tr>";
//                });
//                $("#" + panel.divElement.id + "-outputBody2").html(rowsHtml);
            if (panel.allResults){
                return ExcellentExport.excel(this, panel.divElement.id + '-output2');
            }else{
                e.preventDefault();
                e.stopPropagation();
                panel.getTotalResults();
            }
//            });
        });

        $('#' + panel.divElement.id + '-exportBriefcase').unbind();
        $('#' + panel.divElement.id + '-exportBriefcase').click(function (e) {
            function exportToBriefcase(){
                var result = [];
                $.each(panel.allResults, function(i, field){
                    var loopConcept = {};
                    loopConcept.conceptId = field.conceptId;
                    loopConcept.defaultTerm = field.defaultTerm;
                    loopConcept.module = field.module;
                    result.push(loopConcept);
                });
                briefcase.addConcepts(result);
            }
            if (panel.allResults){
                exportToBriefcase();
            }else{
                alertEvent("Exporting concepts, please wait", "info");
                panel.getTotalResults(function(){
                    exportToBriefcase();
                });
            }
        });

        $('#' + panel.divElement.id + '-open-grammar').unbind();
        $("#" + panel.divElement.id + "-open-grammar").disableTextSelect();
        $("#" + panel.divElement.id + "-open-grammar").click(function (e) {
            panel.updateGrammarModal(false);
        });
        //-brief-syntax-button
        $('#home-' + panel.divElement.id + '-full-syntax-button').unbind();
        $('#home-' + panel.divElement.id + '-full-syntax-button').disableTextSelect();
        $('#home-' + panel.divElement.id + '-full-syntax-button').addClass("btn-primary");
        $('#home-' + panel.divElement.id + '-full-syntax-button').removeClass("btn-default");
        $('#home-' + panel.divElement.id + '-full-syntax-button').click(function (event) {
            panel.updateGrammarModal(true);
        });

        $('#home-' + panel.divElement.id + '-brief-syntax-button').unbind();
        $('#home-' + panel.divElement.id + '-brief-syntax-button').disableTextSelect();
        $('#home-' + panel.divElement.id + '-brief-syntax-button').addClass("btn-default");
        $('#home-' + panel.divElement.id + '-brief-syntax-button').removeClass("btn-primary");
        $('#home-' + panel.divElement.id + '-brief-syntax-button').click(function (event) {
            panel.updateGrammarModal(false);
        });

        $('#' + panel.divElement.id + '-exportBriefcaseClean').unbind();
        $('#' + panel.divElement.id + '-exportBriefcaseClean').click(function (e) {
            function exportToBriefcase(){
                var result = [];
                briefcase.emptyBriefcase();
                $.each(panel.allResults, function(i, field){
                    var loopConcept = {};
                    loopConcept.conceptId = field.conceptId;
                    loopConcept.defaultTerm = field.defaultTerm;
                    loopConcept.module = field.module;
                    result.push(loopConcept);
                });
                briefcase.addConcepts(result);
            }
            if (panel.allResults){
                exportToBriefcase();
            }else{
                alertEvent("Exporting concepts, please wait", "info");
                panel.getTotalResults(function(){
                    exportToBriefcase();
                });
            }
        });

        $('#' + panel.divElement.id + '-computeButton').unbind();
        $('#' + panel.divElement.id + '-computeButton').click(function (e) {
            var query = $('#' + panel.divElement.id + '-input').val();
            var request = {
                query : JSON.parse(query),
                pathId : options.path.id
            };
            panel.compute(request);
        });

        $("#" + panel.divElement.id).find("a[data-role='modifier-selector']").unbind();
        $("#" + panel.divElement.id).find("a[data-role='modifier-selector']").click(function (e) {
            $('#' + panel.divElement.id + '-selectedModifier').html($(e.target).html());
        });

        $('#' + panel.divElement.id + '-selectedConcept').show();
        $('#' + panel.divElement.id + '-selectedType').hide();
        $('#' + panel.divElement.id + '-selectedTarget').hide();
        $('#' + panel.divElement.id + '-searchTerm').hide();
        $('#' + panel.divElement.id + '-searchTerm').unbind();
        $('#' + panel.divElement.id + '-searchTerm').keyup(function(e){
            if (e.keyCode === 13) {
                $('#' + panel.divElement.id + '-addCriteriaButton').click();
            }
        });
        $('#' + panel.divElement.id + '-formdropdown').hide();
        $("#" + panel.divElement.id).find("a[data-role='criteria-selector']").unbind();
        $("#" + panel.divElement.id).find("a[data-role='criteria-selector']").click(function (e) {
            $('#' + panel.divElement.id + '-selectedCriteria').html($(e.target).html());
            //$(e.target).closest(".dropdown").find("span").first().html($(e.target).html());
            var selectedCriteria = $(e.target).html();
            if (selectedCriteria == "hasDescription") {
                $('#' + panel.divElement.id + '-selectedConcept').hide();
                $('#' + panel.divElement.id + '-selectedType').hide();
                $('#' + panel.divElement.id + '-selectedTarget').hide();
                $('#' + panel.divElement.id + '-searchTerm').show();
                $('#' + panel.divElement.id + '-formdropdown').hide();
            } else if (selectedCriteria == "hasRelationship") {
                $('#' + panel.divElement.id + '-selectedConcept').hide();
                $('#' + panel.divElement.id + '-selectedType').show();
                $('#' + panel.divElement.id + '-selectedTarget').show();
                $('#' + panel.divElement.id + '-searchTerm').hide();
                $('#' + panel.divElement.id + '-formdropdown').show();
            } else {
                $('#' + panel.divElement.id + '-selectedConcept').show();
                $('#' + panel.divElement.id + '-selectedType').hide();
                $('#' + panel.divElement.id + '-selectedTarget').hide();
                $('#' + panel.divElement.id + '-searchTerm').hide();
                $('#' + panel.divElement.id + '-formdropdown').hide();
            }
        });
        $("#" + panel.divElement.id).find("a[data-role='form-selector']").unbind();
        $("#" + panel.divElement.id).find("a[data-role='form-selector']").click(function (e) {
            $('#' + panel.divElement.id + '-selectedForm').html($(e.target).html());
        });

        $('#' + panel.divElement.id + '-addCriteriaButton').unbind();
        $('#' + panel.divElement.id + '-addCriteriaButton').click(function (e) {
            var modifier = $('#' + panel.divElement.id + '-selectedModifier').html();
            var criteria = $('#' + panel.divElement.id + '-selectedCriteria').html();
            var conceptIdDroped = $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId");
            if ($('#' + panel.divElement.id + '-listGroup').find('.constraint[data-criteria="' + criteria + '"][data-concept-id="' + conceptIdDroped + '"]').length){
                if ($('#' + panel.divElement.id + '-listGroup').find('.constraint[data-criteria="' + criteria + '"][data-concept-id="' + conceptIdDroped + '"]').closest(".query-condition").attr("data-modifier") == modifier){
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Criteria already added...");
                }else{
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Contradictory criteria...");
                }
            }
            //if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-criteria="' + criteria + '"][data-modifier="' + modifier + '"][data-concept-id="' + conceptIdDroped + '"]').length){
            //    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
            //    $('#' + panel.divElement.id + '-addmsg').html("Criteria already added...");
            //}else if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-criteria="' + criteria + '"][data-concept-id="' + conceptIdDroped + '"]').length){
            //    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
            //    $('#' + panel.divElement.id + '-addmsg').html("Contradictory criteria...");
            //}
            else if (criteria == "hasDescription") {
                var searchTerm = $('#' + panel.divElement.id + '-searchTerm').val();
                if (searchTerm == "") {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Enter a search term...");
                } else {
                    $('#' + panel.divElement.id + '-addmsg').html("");
                    $('#' + panel.divElement.id + '-conceptField').removeClass("has-error");
                    var context2 = {
                        modifier: modifier,
                        criteria: criteria,
                        searchTerm: searchTerm
                    };
                    $('#' + panel.divElement.id + '-listGroup').append(JST["views/developmentQueryPlugin/searchCriteria.hbs"](context2));
                    panel.renumLines();
                    $(divElement).find(".removeLi").unbind();
                    $(divElement).find(".removeLi").disableTextSelect();
                    $(divElement).find(".removeLi").click(function(e){
                        $(e.target).closest("li").remove();
                        panel.renumLines();
                    });
                    $('#' + panel.divElement.id + '-selectedConcept').val("");
                    $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedType').val("");
                    $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedTarget').val("");
                    $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-searchTerm').val("");
                }
            } else if (criteria == "hasRelationship") {
                var typeId = $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId");
                var typeTerm = $('#' + panel.divElement.id + '-selectedType').val();
                var targetId = $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId");
                var targetTerm = $('#' + panel.divElement.id + '-selectedTarget').val();
                var form = $('#' + panel.divElement.id + '-selectedForm').html();
                if ((typeof typeId == "undefined" || typeId == "") && typeTerm == "" &&
                    (typeof targetId == "undefined" || targetId == "") && targetTerm == "" ) {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Drop a concept...");
                } else {
                    $('#' + panel.divElement.id + '-addmsg').html("");
                    $('#' + panel.divElement.id + '-conceptField').removeClass("has-error");
                    var context2 = {
                        modifier: modifier,
                        criteria: criteria,
                        typeId: typeId,
                        typeTerm: typeTerm,
                        targetId: targetId,
                        targetTerm: targetTerm,
                        form: form
                    };
                    $('#' + panel.divElement.id + '-listGroup').append(JST["views/developmentQueryPlugin/relsCriteria.hbs"](context2));
                    panel.renumLines();
                    $(divElement).find(".removeLi").unbind();
                    $(divElement).find(".removeLi").disableTextSelect();
                    $(divElement).find(".removeLi").click(function(e){
                        $(e.target).closest("li").remove();
                        panel.renumLines();
                    });
                    $('#' + panel.divElement.id + '-selectedConcept').val("");
                    $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedType').val("");
                    $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-selectedTarget').val("");
                    $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId", "");
                    $('#' + panel.divElement.id + '-searchTerm').val("");
                }
            } else {
                var conceptId = $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId");
                var term = $('#' + panel.divElement.id + '-selectedConcept').val();
                if (typeof conceptId == "undefined" || conceptId == "" || term == "") {
                    $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                    $('#' + panel.divElement.id + '-addmsg').html("Drop a concept...");
                } else {
                    $('#' + panel.divElement.id + '-addmsg').html("");
                    $('#' + panel.divElement.id + '-conceptField').removeClass("has-error");
                    var criterias = [{criteria: criteria, conceptId: conceptId, term: term}];
                    if ($(divElement).find(".addedCriteria").length){
                        var typeSelected = $(divElement).find(".addedCriteria").first().attr("data-typeSelected");
                        $(divElement).find(".addedCriteria").each(function(i){
                            var addedConceptId = $(this).find(".andCriteriaConcept").first().attr("data-conceptId");
                            var addedTerm = $(this).find(".andCriteriaConcept").first().val();
                            var addedCrit = $(this).find(".addSelectCriteria").first().html();
                            if (addedConceptId && addedTerm){
                                criterias.forEach(function(criteriaAdded){
                                    if (criteriaAdded.criteria == addedCrit && criteriaAdded.conceptId == addedConceptId){
                                        $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                                        $('#' + panel.divElement.id + '-addmsg').html("Criteria already added...");
                                        return false;
                                    }
                                });
                                var crit = {
                                    criteria: addedCrit,
                                    conceptId: addedConceptId,
                                    term: addedTerm
                                };
                                if (typeSelected == "Refinement"){
                                    if ($(this).find(".typeCritCombo").first().attr("data-type-concept-id") == "false"){
                                        $('#' + panel.divElement.id + '-addmsg').html("Select a type...");
                                        return false;
                                    }else{
                                        crit.type = {
                                            conceptId: $(this).find(".typeCritCombo").first().attr("data-type-concept-id"),
                                            term: $(this).find(".typeCritCombo").first().attr("data-type-term")
                                        };
                                    }
                                }
                                criterias.push(crit);
                            }else{
                                $('#' + panel.divElement.id + '-conceptField').addClass("has-error");
                                $('#' + panel.divElement.id + '-addmsg').html("Drop a concept...");
                                return false;
                            }
                        });
                    }
                    if ($('#' + panel.divElement.id + '-addmsg').html() == ""){
                        $(divElement).find(".addedCriteria").remove();
                        $("#" + panel.divElement.id + "-addCriteriaAnd").show();
                        var context2 = {
                            modifier: modifier,
                            criterias: criterias
                        };
                        // Add Excludes always at the end, and includes before exclude
                        var foundExclude = false;
                        $('#' + panel.divElement.id + '-listGroup').find(".query-condition").each(function (index) {
                            var modifier = $(this).data('modifier');
                            if (modifier == "Exclude") {
                                $(this).before(JST["views/developmentQueryPlugin/criteria.hbs"](context2));
                                var critAdded = $('#' + panel.divElement.id + '-listGroup').find(".query-condition")[index];
                                $(critAdded).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                                panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critAdded), true, function(resultCount){
                                    $(critAdded).find(".glyphicon-refresh").first().remove();
                                    var cont = parseInt(resultCount);
                                    $(critAdded).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                                });
                                foundExclude = true;
                                return false;
                            }
                        });
                        if (!foundExclude) {
                            $('#' + panel.divElement.id + '-listGroup').append(JST["views/developmentQueryPlugin/criteria.hbs"](context2));
                            var critAdded = $('#' + panel.divElement.id + '-listGroup').find(".query-condition")[$('#' + panel.divElement.id + '-listGroup').find(".query-condition").length - 1];
                            $(critAdded).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                            panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critAdded), true, function(resultCount){
                                $(critAdded).find(".glyphicon-refresh").first().remove();
                                var cont = parseInt(resultCount);
                                $(critAdded).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                            });
                        }
                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").unbind();
                        $('#' + panel.divElement.id + '-listGroup').find(".criteriaDropdownOption").click(function(e){
                            var prevValue = $(e.target).closest(".constraint").attr('data-criteria');
                            var newValue = $(e.target).html();
                            if (prevValue != newValue){
                                $(e.target).closest(".constraint").attr('data-criteria', newValue);
                                $(e.target).closest("div").find("button").first().html(newValue + "&nbsp;");
                                var critToUpdate = $(e.target).closest(".query-condition");
                                $(critToUpdate).find("small").remove();
                                $(critToUpdate).append('<small class="text-muted pull-right glyphicon glyphicon-refresh icon-spin" style="position: relative; top: 12px;"></small>');
                                panel.execute("inferred", panel.exportToConstraintGrammar(false, false, critToUpdate), true, function(resultCount){
                                    $(critToUpdate).find("small").remove();
                                    $(critToUpdate).find(".glyphicon-refresh").first().remove();
                                    var cont = parseInt(resultCount);
                                    $(critToUpdate).append('<small class="text-muted pull-right" style="position: relative; top: 10px;" title="This instruction involves the selection of ' + cont + ' concepts">' + cont + ' cpts</small>');
                                });
                            }
                        });
                        panel.renumLines();

                        $(divElement).find(".removeLi").unbind();
                        $(divElement).find(".removeLi").disableTextSelect();
                        $(divElement).find(".removeLi").click(function(e){
                            $(e.target).closest("li").remove();
                            panel.renumLines();
                        });
                        $('#' + panel.divElement.id + '-selectedConcept').val("");
                        $('#' + panel.divElement.id + '-selectedConcept').attr("data-conceptId", "");
                        $('#' + panel.divElement.id + '-selectedType').val("");
                        $('#' + panel.divElement.id + '-selectedType').attr("data-conceptId", "");
                        $('#' + panel.divElement.id + '-selectedTarget').val("");
                        $('#' + panel.divElement.id + '-selectedTarget').attr("data-conceptId", "");
                        $('#' + panel.divElement.id + '-searchTerm').val("");
                    }
                }
            }
        });

        $('#' + panel.divElement.id + '-computeInferredButton2').unbind();
        $('#' + panel.divElement.id + '-computeInferredButton2').disableTextSelect();
        $('#' + panel.divElement.id + '-computeInferredButton2').click(function (e) {
            var expression = $.trim($("#" + panel.divElement.id + "-ExpText").val());
            $('#' + panel.divElement.id + '-computeInferredButton2').addClass("disabled");
            $.post(options.serverUrl.replace("snomed", "expressions/") + "parse/brief", {expression: expression}).done(function(res){
                //console.log(res);
                if (res.validation){
                    panel.execute("inferred", expression, true);
                }else{
                    alertEvent("Invalid Expression", "error")
                }
            }).fail(function(err){
                //console.log(err);
            }).always(function(){
                $('#' + panel.divElement.id + '-computeInferredButton2').removeClass("disabled");
            });
        });

        $('#' + panel.divElement.id + '-computeInferredButton').unbind();
        $('#' + panel.divElement.id + '-computeInferredButton').disableTextSelect();
        $('#' + panel.divElement.id + '-computeInferredButton').click(function (e) {
            var grammar = panel.exportToConstraintGrammar(false, false);
            if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-modifier="Include"]').length){
                panel.execute("inferred", grammar, true);
            }else{
                //console.log("add at least one include");
                //alertEvent("Add at least one include", "error");
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-danger'>Add at least one include</span>");
                $("#" + panel.divElement.id + "-footer").html("");
                //$('#' + panel.divElement.id + '-resultInfo').html('ERROR');
            }
        });

        $('#' + panel.divElement.id + '-computeOntoserver').unbind();
        $('#' + panel.divElement.id + '-computeOntoserver').click(function (e) {
            var grammar = panel.exportToConstraintGrammar(false, false);
            if ($('#' + panel.divElement.id + '-listGroup').find('.query-condition[data-modifier="Include"]').length){
                var ontoserverUrl = "http://52.21.192.244:8080/ontoserver/resources/ontology/findConceptsByQuery?versionedId=http%3A%2F%2Fsnomed.info%2Fsct%2F32506021000036107%2Fversion%2F20151130&field=shortId&field=label&field=primitive&field=inferredAxioms&format=json&start=0&rows=100";
                var ontoserverConstraintParam = "&query=Constraint(";
                var sampleEncodedConstraint = "%3C%2019829001%20%7Cdisorder%20of%20lung%7C%3A%20%0A116676008%20%7Cassociated%20morphology%7C%20%3D%20*";
                var encodedGrammar = encodeURIComponent(grammar);
                var executeUrl = ontoserverUrl + ontoserverConstraintParam + encodedGrammar + ")";
                panel.currentEx++;
                $('#' + panel.divElement.id + '-resultInfo').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $('#' + panel.divElement.id + '-footer').html('<div class="progress progress-striped active"> <div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span>Searching</span></div></div><p id="' + panel.divElement.id + '-waitingSearch-text" class="lead animated"></p>');
                $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                $("#" + panel.divElement.id + "-waitingSearch-text").html("OntoServer is processing your instructions...");
                $.getJSON(executeUrl, function (result) {
                    //$.getJSON(panel.url + "rest/browser/concepts/" + panel.conceptId + "/children", function(result) {
                }).done(function (result) {
                    //console.log(result);
                    $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'>Found " + result.totalResults + " concepts</span>");
                    $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                    //TODO: implement pagination with Ontoserver
                    if (result.totalResults > 100) {
                        $('#' + panel.divElement.id + '-footer').html("Showing first 100 matches");
                    } else {
                        $('#' + panel.divElement.id + '-footer').html("Showing all matches");
                    }
                    $.each(result.data, function (i, row){
                        $('#' + panel.divElement.id + '-outputBody').append("<tr style='cursor: pointer;' class='conceptResult' data-module='' data-concept-id='" + row.shortId + "' data-term='" + row.label + "'><td>" + row.label + "</td><td>" + row.shortId + "</td></tr>");
                        $('#' + panel.divElement.id + '-outputBody2').append("<tr><td>" + row.label + "</td><td>" + row.shortId + "</td></tr>");
                    });
                    $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").unbind();
                    $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").click(function(event){
                        //console.log("clicked",$(event.target).closest("tr").attr('data-term'));
                        channel.publish(panel.divElement.id, {
                            term: $(event.target).closest("tr").attr('data-term'),
                            module: $(event.target).closest("tr").attr("data-module"),
                            conceptId: $(event.target).closest("tr").attr('data-concept-id'),
                            source: panel.divElement.id
                        });
                    });
                }).fail(function (err) {
                    //console.log("Error",err);
                });

            }else{
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-danger'>Add at least one include</span>");
                $("#" + panel.divElement.id + "-footer").html("");
            }
        });
    };

    panel.updateGrammarModal = function(fullSyntax) {
        if (fullSyntax) {
            $('#home-' + panel.divElement.id + '-full-syntax-button').addClass("btn-primary");
            $('#home-' + panel.divElement.id + '-full-syntax-button').removeClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').addClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').removeClass("btn-primary");
        } else {
            $('#home-' + panel.divElement.id + '-full-syntax-button').removeClass("btn-primary");
            $('#home-' + panel.divElement.id + '-full-syntax-button').addClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').removeClass("btn-default");
            $('#home-' + panel.divElement.id + '-brief-syntax-button').addClass("btn-primary");
        }
        panel.grammarToCopy = panel.exportToConstraintGrammar(false, fullSyntax);
        $("#" + panel.divElement.id + "-constraintGrammar").html(panel.exportToConstraintGrammar(true, fullSyntax));
    };

    panel.setUpPanel();

    this.renumLines = function() {
        $('#' + panel.divElement.id + '-listGroup').find(".query-condition").each(function(index) {
            $(this).find(".line-number").html(index + 1);
        });
    };

    this.getTotalResults = function(callback){
        if (xhrTotal != null){
            xhrTotal.abort();
        }
        panel.lastRequest.skip = 0;
        panel.lastRequest.limit = panel.lastTotalValues + 1;
        $('#' + panel.divElement.id + '-exportXls').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        xhrTotal = $.ajax({
            type: "POST",
            url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
            data: panel.lastRequest,
            dataType: "json",
            success: function(result) {
                xhrTotal = null;
                panel.allResults = result.computeResponse.matches;
                var rowsHtml = "";
                if (panel.allResults && panel.allResults.length){
                    $.each(panel.allResults, function(i, field){
                        rowsHtml+= "<tr><td>" + field.defaultTerm + "</td><td>" + field.conceptId + "</td></tr>";
                    });
                }
                $("#" + panel.divElement.id + "-outputBody2").html(rowsHtml);
                $('#' + panel.divElement.id + '-exportXls').html('Download XLS <img style="height: 23px;" src="img/excel.png">');
                if (callback)
                    callback();
            }
        }).always(function(result){
            xhrTotal = null;
        }).fail(function(){
            alertEvent("Failed!", "error");
        });

        //xhrTotal = $.post(panel.lastUrl, panel.lastRequest).done(function(data){
        //    xhrTotal = null;
        //    panel.allResults = data.matches;
        //    var rowsHtml = "";
        //    if (panel.allResults && panel.allResults.length){
        //        $.each(panel.allResults, function(i, field){
        //            rowsHtml+= "<tr><td>" + field.defaultTerm + "</td><td>" + field.conceptId + "</td></tr>";
        //        });
        //    }
        //    $("#" + panel.divElement.id + "-outputBody2").html(rowsHtml);
        //    $('#' + panel.divElement.id + '-exportXls').html('Download XLS <img style="height: 23px;" src="img/excel.png">');
        //    if (callback)
        //        callback();
        //}).fail(function(){
        //    alertEvent("Failed!", "error");
        //});
    };

    this.getExpressionForCondition = function(condition, htmlFormat, fullSyntax) {
        var grammar = "";
        var operator = "";
        if (condition.criteria == "self") {
            if (fullSyntax) {
                operator = "self ";
            } else {
                operator = "";
            }
        } else if (condition.criteria == "descendantOf") {
            if (fullSyntax) {
                operator = "descendantOf ";
            } else {
                operator = "< ";
            }
        } else if (condition.criteria == "descendantOrSelfOf") {
            if (fullSyntax) {
                operator = "descendantOrSelfOf ";
            } else {
                operator = "<< ";
            }
        } else if (condition.criteria == "childrenOf") {
            if (fullSyntax) {
                operator = "childrenOf ";
            } else {
                operator = "<1 ";
            }
        } else if (condition.criteria == "ancestorOf") {
            if (fullSyntax) {
                operator = "ancestorOf ";
            } else {
                operator = "> ";
            }
        } else if (condition.criteria == "ancestorOrSelfOf") {
            if (fullSyntax) {
                operator = "ancestorOrSelfOf ";
            } else {
                operator = ">> ";
            }
        } else if (condition.criteria == "parentsOf") {
            if (fullSyntax) {
                operator = "parentsOf ";
            } else {
                operator = ">1 ";
            }
        } else if (condition.criteria == "hasDescription") {
            if (fullSyntax) {
                operator = "hasDescription ";
            } else {
                operator = "desc ";
            }
        }  else if (condition.criteria == "hasRelationship") {
            if (fullSyntax) {
                operator = "hasRelationship ";
            } else {
                operator = "rel ";
            }
        }  else if (condition.criteria == "isMemberOf") {
            if (fullSyntax) {
                operator = "isMemberOf ";
            } else {
                operator = "^ ";
            }
        };
        var term = "|" + condition.term + "|";
        if (htmlFormat) {
            operator = "<span class='exp-operators'>" + operator + "</span>";
            term = "<span class='exp-term'>" +  term + "</span>";
        }
        if (condition.typeId) {
            if (condition.typeId == "*") {
                grammar = " * = " + operator + condition.conceptId + term;
            } else {
                var typeTerm = "|" + condition.typeTerm + "|";
                if (htmlFormat) {
                    term = "<span class='exp-term'>" +  typeTerm + "</span>";
                }
                grammar = condition.typeId + typeTerm + " = " + operator + condition.conceptId + term;
            }
        } else {
            grammar = operator + condition.conceptId + term;
        }
        return grammar;
    };

    this.exportToConstraintGrammar = function(htmlFormat, fullSyntax, htmlObj, fullObjHtml) {
        var breakLine = " ";
        if (htmlFormat) {
            breakLine = "<br>";
        }
        var grammar = "";
        if ($('#' + panel.divElement.id + '-listGroup').find(".query-condition").length == 0 && !htmlObj && !fullObjHtml) {
            //console.log("Add at least one instruction...");
        } else {
            var includes = [];
            var excludes = [];
            if (htmlObj){
                var conditions = [];
                $(htmlObj).find(".constraint").each(function (index2) {
                    var condition = {
                        "criteria": $(this).attr('data-criteria'),
                        "typeId": $(this).attr('data-type-concept-id'),
                        "typeTerm": $(this).attr('data-type-term'),
                        "conceptId": $(this).attr('data-concept-id'),
                        "term": $(this).attr('data-term')
                    };
                    conditions.push(condition);
                });
                includes.push(conditions);
            }else{
                var objTouse = '#' + panel.divElement.id + '-listGroup';
                if (fullObjHtml)
                    objTouse = fullObjHtml
                $(objTouse).find(".query-condition").each(function (index) {
                    var conditions = [];
                    $(this).find(".constraint").each(function (index2) {
                        var condition = {
                            "criteria": $(this).attr('data-criteria'),
                            "typeId": $(this).attr('data-type-concept-id'),
                            "typeTerm": $(this).attr('data-type-term'),
                            "conceptId": $(this).attr('data-concept-id'),
                            "term": $(this).attr('data-term')
                        };
                        conditions.push(condition);
                    });
                    if ($(this).data('modifier') == "Exclude") {
                        excludes.push(conditions);
                    } else {
                        includes.push(conditions);
                    }
                });
            }
            var isRefined = function(conditions) {
                var refined = false;
                if (conditions.length > 1) {
                    if (conditions[1].typeId) {
                        refined = true;
                    }
                }
                return refined;
            };
            //if (includes.length > 1) grammar += "(";
            $.each(includes, function (index, conditions) {
                if (index > 0) grammar += " OR ";
                if (conditions.length > 1 || isRefined(conditions)) grammar += " (";
                if (isRefined(conditions)) {
                    $.each(conditions, function (index2, condition) {
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (index2 == 0) {
                            grammar += " : ";
                        } else if(index2 < conditions.length -1) {
                            grammar += " , ";
                        }
                        if (htmlFormat && index2 < conditions.length -1) {
                            grammar += "<br>";
                        }
                    });
                } else {
                    $.each(conditions, function (index2, condition) {
                        if (index2 > 0) grammar += " AND ";
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (htmlFormat && index2 < conditions.length -1) {
                            grammar += "<br>";
                        }
                    });
                }
                if (conditions.length > 1 || isRefined(conditions)) grammar += ") ";
                if (htmlFormat && index < includes.length -1) {
                    grammar += "<br>";
                }
            });
            //if (includes.length > 1) grammar += ")";

            if (excludes.length > 0 && includes.length > 1) {
                grammar = "(" + grammar;
                grammar += ") MINUS ";
                if (htmlFormat) {
                    grammar += "<br>";
                }
            } else if (excludes.length > 0) {
                grammar += " MINUS ";
                if (htmlFormat) {
                    grammar += "<br>";
                }
            }
            if (excludes.length > 1) grammar += "(";
            $.each(excludes, function (index, conditions) {
                if (index > 0) grammar += " OR ";
                if (conditions.length > 1 || isRefined(conditions)) grammar += " (";
                if (isRefined(conditions)) {
                    $.each(conditions, function (index2, condition) {
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (index2 == 0) {
                            grammar += " : ";
                        } else if(index2 < conditions.length -1) {
                            grammar += " , ";
                        }
                        if (htmlFormat && index2 < conditions.length -1) {
                            grammar += "<br>";
                        }
                    });
                } else {
                    $.each(conditions, function (index2, condition) {
                        if (index2 > 0) grammar += " AND ";
                        grammar += panel.getExpressionForCondition(condition, htmlFormat, fullSyntax);
                        if (htmlFormat && index2 < conditions.length -1) {
                            grammar += "<br>";
                        }
                    });
                }
                if (conditions.length > 1 || isRefined(conditions)) grammar += ") ";
                if (htmlFormat && index < excludes.length -1) {
                    grammar += "<br>";
                }
            });
            if (excludes.length > 1) grammar += ")";
        }
        grammar = grammar.trim();
        //console.log(grammar.charAt(0));
        //console.log(grammar.charAt(grammar.length-1));
        //if (grammar.charAt(0) == "(" && grammar.charAt(grammar.length-1) == ")") {
        //    grammar = grammar.substr(1,grammar.length-2);
        //}
        return grammar;
    };

    this.execute = function (form, expression, clean, onlyTotal){
        panel.currentEx++;
        var currentEx = panel.currentEx;
        //$('#' + panel.divElement.id + '-footer').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
        if (onlyTotal){
            limit = 1;
            skip = 0;
        }else{
            $('#' + panel.divElement.id + '-footer').html('<div class="progress progress-striped active"> <div class="progress-bar"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span>Searching</span></div></div><p id="' + panel.divElement.id + '-waitingSearch-text" class="lead animated"></p>');
            $("#" + panel.divElement.id + "-waitingSearch-text").html("");
            $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
            $("#" + panel.divElement.id + "-waitingSearch-text").html("The server is processing your instructions...");
            setTimeout(function(){
                $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
            }, 600);
            setTimeout(function(){
                //console.log(currentEx, panel.currentEx);
                if (xhrExecute != null && currentEx == panel.currentEx){
                    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
                    setTimeout(function(){
                        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                        $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("The server is still processing your instructions...");
                        setTimeout(function(){
                            $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
                        }, 600);
                    }, 600);
                }
            }, 15000);
            setTimeout(function(){
                if (xhrExecute != null && currentEx == panel.currentEx){
                    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
                    setTimeout(function(){
                        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                        $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("This seems to be a complex set of instructions, still processing...");
                        setTimeout(function(){
                            $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
                        }, 600);
                    }, 600);
                }
            }, 30000);
            setTimeout(function(){
                if (xhrExecute != null && currentEx == panel.currentEx){
                    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
                    setTimeout(function(){
                        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("");
                        $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
                        $("#" + panel.divElement.id + "-waitingSearch-text").html("The server is processing a complex set of instructions. This action might not be supported in a public server. Some times instructions can be simplified by specifying conditions using concepts closer in the hierarchy to the intended results, avoiding unnecessary selections of large portions of the terminology.");
                        setTimeout(function(){
                            $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
                        }, 600);
                    }, 600);
                }
            }, 45000);
            //setTimeout(function(){
            //    $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeOutLeft");
            //    setTimeout(function(){
            //        $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeOutLeft");
            //        if (xhrExecute != null && currentEx == panel.currentEx){
            //            $("#" + panel.divElement.id + "-waitingSearch-text").html("");
            //            $("#" + panel.divElement.id + "-waitingSearch-text").addClass("fadeInRight");
            //            $("#" + panel.divElement.id + "-waitingSearch-text").html("Instruction set exceeds maximum allowed time for computation. Some times instructions can be simplified by specifying conditions using concepts closer in the hierarchy to the intended results, avoiding unnecessary selections of large portions of the terminology.");
            //            setTimeout(function(){
            //                $("#" + panel.divElement.id + "-waitingSearch-text").removeClass("fadeInRight");
            //            }, 600);
            //        }
            //    }, 600);
            //}, 61000);

            $('#' + panel.divElement.id + '-resultInfo').html("<i class='glyphicon glyphicon-refresh icon-spin'></i>");
            if (clean){
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                limit = 100;
                skip = 0;
            }
        }
        var data = {
            expression: expression,
            limit : limit,
            skip : skip,
            form: form
        };
        panel.lastRequest = data;
        if (xhrExecute != null && !onlyTotal)
            xhrExecute.abort();
        var xhrExecute2 = $.ajax({
            type: "POST",
            url: options.serverUrl.replace("snomed", "expressions/") + options.edition + "/" + options.release + "/execute/brief",
            data: data,
            dataType: "json",
            //timeout: 300000,lasturl
            success: function(result) {
                if (result.paserResponse.validation) {
                    data = result.computeResponse;
                    //result.computeResponse.matches
                    if (!onlyTotal){
                        $("#" + panel.divElement.id + "-exportResults").removeClass("disabled");
                        if (data.performanceCutOff) {
                            $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'>Found " + data.total + " concepts. <span class='text-danger'>This query cannot be completed in real-time, please schedule a Cloud executions. Results below are incomplete and some conditions were not tested. </span></span>");
                        } else {
                            $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-muted small'>Found " + data.total + " concepts</span>");
                        }
                        $.each(data.matches, function (i, row){
                            $('#' + panel.divElement.id + '-outputBody').append("<tr style='cursor: pointer;' class='conceptResult' data-module='" + row.module + "' data-concept-id='" + row.conceptId + "' data-term='" + row.defaultTerm + "'><td>" + row.defaultTerm + "</td><td>" + row.conceptId + "</td></tr>");
                            $('#' + panel.divElement.id + '-outputBody2').append("<tr><td>" + row.defaultTerm + "</td><td>" + row.conceptId + "</td></tr>");
                        });

                        $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").unbind();
                        $('#' + panel.divElement.id + '-outputBody').find(".conceptResult").click(function(event){
                            //console.log("clicked",$(event.target).closest("tr").attr('data-term'));
                            channel.publish(panel.divElement.id, {
                                term: $(event.target).closest("tr").attr('data-term'),
                                module: $(event.target).closest("tr").attr("data-module"),
                                conceptId: $(event.target).closest("tr").attr('data-concept-id'),
                                source: panel.divElement.id,
                                showConcept: true
                            });
                        });

                        panel.lastTotalValues = data.total;
                        if (limit + skip < data.total) {
                            $('#' + panel.divElement.id + '-footer').html("<span id='" + panel.divElement.id + "-more'>Show more (viewing " + (limit + skip) + " of " + data.total + " total)</span>");
                        } else {
                            $('#' + panel.divElement.id + '-footer').html("Showing all " + data.total + " matches");
                        }

                        $('#' + panel.divElement.id + '-more').unbind();
                        $('#' + panel.divElement.id + '-more').click(function (e) {
                            skip = skip + 100;
                            panel.execute(form, expression, false);
                        });
                    }else{
                        onlyTotal(data.total);
                    }

//                    $("#" + panel.divElement.id + "-syntax-result").html('<span class="label label-success">OK</span>');
//                    var resultsHtml = "";
//                    resultsHtml+='<p><span class="text-success">Total matches: ' + result.computeResponse.total + '</span></p>';
//                    if (result.computeResponse.matches) {
//                        result.computeResponse.matches.forEach(function(match){
//                            resultsHtml+=match.defaultTerm + ' ' + match.conceptId + '<br>';
//                        });
//                    } else {
//                        resultsHtml = result.computeResponse;
//                    }
//                    $("#" + panel.divElement.id + "-results").html(resultsHtml);
                } else {
                    if (!onlyTotal){
                        $("#" + panel.divElement.id + "-syntax-result").html('<span class="label label-danger">ERROR</span>');
                        $("#" + panel.divElement.id + "-results").html("Error...");
                    }else{
                        onlyTotal("Error");
                    }
                }
            }
        }).done(function(result){
            // done
            xhrExecute2 = null;
        }).fail(function(jqXHR){
            //console.log(xhrExecute2);
            if (jqXHR && jqXHR.responseJSON && jqXHR.responseJSON.computeResponse && jqXHR.responseJSON.computeResponse.message){
                $('#' + panel.divElement.id + '-outputBody').html("");
                $('#' + panel.divElement.id + '-outputBody2').html("");
                $("#" + panel.divElement.id + "-footer").html("");
                $('#' + panel.divElement.id + '-resultInfo').html("<span class='text-danger'>" + jqXHR.responseJSON.computeResponse.message + "</span>");
            }else{
                var textStatus = xhrExecute2.statusText;
                if (textStatus != "abort"){
                    if (xhrExecute2.status == 0)
                        textStatus = "timeout";
                    xhrExecute2 = null;
                    if(textStatus === 'timeout') {
//                $("#" + panel.divElement.id + "-syntax-result").html('<span class="label label-danger">ERROR</span>');
//                $("#" + panel.divElement.id + "-results").html("Timeout...");
                        if (!onlyTotal){
                            $('#' + panel.divElement.id + '-footer').html("<p class='lead'>Instruction set exceeds maximum allowed time for computation. Some times instructions can be simplified by specifying conditions using concepts closer in the hierarchy to the intended results, avoiding unnecessary selections of large portions of the terminology.</p>");
                            $('#' + panel.divElement.id + '-resultInfo').html("This query cannot be completed in real-time.");
                            //$('#' + panel.divElement.id + '-footer').html("Timeout Error");
                        }else{
                            onlyTotal("Error");
                        }
                    } else {
                        if (!onlyTotal){
                            $("#" + panel.divElement.id + "-syntax-result").html('<span class="label label-danger">ERROR</span>');
                            $("#" + panel.divElement.id + "-results").html("Error...");
                        }else{
                            onlyTotal("Error");
                        }
                    }
                }
            }
        });
        if (!onlyTotal)
            xhrExecute = xhrExecute2;
    }
}
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
    $.each(ev.target.attributes, function (){
        if (this.name.substr(0, 4) == "data"){
            ev.dataTransfer.setData(this.name.substr(5), this.value);
            if (this.name.substr(5) == "concept-id"){
                conceptId = this.value;
            }
            if (this.name.substr(5) == "term"){
                term = this.value;
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
    dataText = conceptId + "|" + term;
    ev.dataTransfer.setData("Text", dataText);
    ev.dataTransfer.setData("divElementId", id);
}

function dropS(ev){
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
    ev.preventDefault();
    var text = ev.dataTransfer.getData("Text");
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

function dropC(ev, id) {
    $(document).find('.drop-highlighted').removeClass('drop-highlighted');
    ev.preventDefault();
    var text = ev.dataTransfer.getData("Text");
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
            panelAct.updateCanvas();
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
        var definitionStatus = ev.dataTransfer.getData("def-status");
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
                panel.history.push({term: term, conceptId: conceptId, time: time});
                panel.setToConcept(conceptId, term, definitionStatus, module);
                channel.publish(panel.divElement.id, {
                    term: term,
                    conceptId: conceptId,
                    source: panel.divElement.id
                });
            }
        }
    }
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

function alertEvent(message, type) {
    $.notify(message,type);
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