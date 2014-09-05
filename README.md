IHTSDO Multi-English Browser Frontend
=====================================

IHTSDO Browser App customized for the Multi-English combined edition browser.

This project is an HTML / JS application that uses the IHTSDO SNOMED CT Interaction Components (https://github.com/IHTSDO/snomed-interaction-components) to create Multi-English combined edition Browser.

The browser connects to a backend REST API provided by the project: https://github.com/IHTSDO/sct-snapshot-rest-api

Project Structure
-----------------

The browser is a one page HTML/JS app, the components (widgets) used to navigate and display SNOMED CT content are used as an external dependency.

The index.html includes all the logic for rendering the Browser UI, switching between different SNOMED CT releases and UI layouts (perspectives).

* bootstrap-custom: folder that contains a custom build of the Boostrap framework
* css: stylesheets for this site
* external-libs: js libraries used by this site
* snomed-interaction-components: js, css and fonts for the SNOMED CT widgets contained in this site
* img: images for the site
* i18n: internationalization files for the site and the widgets
* index.html: one page application

Backend connection parameters
-----------------------------

The index.html defines the connection parameters that will passed to each of the components on initialization:
```javascript
var options = {
                serverUrl: "http://162.243.35.127:3000/snomed",
                edition: "multi-edition",
                release: "v20140701",
```
These parameters include the server, the edition and the release,

Internationalization
--------------------

This project uses the jquery-i18n-properties plugin to support internationalization, translation of the UI components to many languages. (https://github.com/jquery-i18n-properties/jquery-i18n-properties)

The i18n folder includes the base language file (/i18n/Languages.properties), this files defines the labels for English language:

```
i18n_app_name = IHTSDO SNOMED CT Browser
i18n_release = Release
i18n_perspective = Perspective
i18n_about = About
i18n_provide_feedback = Provide feedback on this browser
```
In other files, that include the ISO language code in the name, the labels are translated, like:

Languages_es.properties (Spanish)
```
i18n_app_name = Navegador de SNOMED CT 
i18n_release = Edición
i18n_perspective = Perspectiva
i18n_about = Sobre
i18n_provide_feedback = Proporcione sus comentarios sobre este navegador
```

Languages_da.properties  (Danish)
```
i18n_welcome = Velkommen
i18n_app_name = IHTSDO SNOMED CT Browser
i18n_release = Udgivelse
i18n_perspective = Visning
i18n_about = Om
i18n_provide_feedback = Send en kommentar om denne browser
```
Customization of content access links
-------------------------------------

The buttons that link to the browser with specific languages and releases need to be customized on each implementation to match available content.

Customization points:
*Dropdown for Release Selection:
```javascript
<li class="navbar-btn" id="edition-selector">
   <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">
            <span class="i18n" data-i18n-id="i18n_release">Release</span>:&nbsp;<span id="editionLabel">Multi-english Edition 20140604</span> <span class="caret"></span>
   </button>
   <ul class="dropdown-menu" role="menu">
     <li><a href="javascript:void(0);" onclick="switchRelease('Multi-english Edition 20140604', 'multi-edition', 'v20140701', '900000000000509007');reloadCurrentPerspective();">Multi-english Edition 20140604</a></li>
                                
```
*Buttons for Release Selection:
```javascript
<div id="welcome-perspective"  class="bperspective">
     <div class="jumbotron">
     <h1><span class="i18n" data-i18n-id="i18n_welcome">Welcome</span></h1>
     <p><span class="i18n" data-i18n-id="i18n_home1">This is a beta... a work in progress of ways to browse and search SNOMED CT as part of development within the IHTSDO Open Tooling Framework, by the IHTSDO and its development partners</span></p>
     <p><span class="i18n" data-i18n-id="i18n_home2">Please select a SNOMED CT release and a perspective from the top menu to start, or...</span></p>
      <p><a class="btn btn-primary btn-lg" role="button" onclick="switchRelease('Multi-english Edition 20140604', 'multi-edition', 'v20140701', '900000000000509007');switchLanguage('en_US', 'img/flags/us.png', true);switchToFullHeight(404684003, 138875005);"><img src="img/flags/gb.png">&nbsp;&nbsp;&nbsp;Go browsing...</span><br><span class="small">Multi-English Browser</span></a>

```

URL Shortcuts
-------------

The browser includes URL parameters that will act as shorcuts for opening the browser with pre-defined settings or content selections, skipping the need of selecting options from the main view.

Use:
http://browser.ihtsdotools.org/index.html?perspective=full&conceptId1=195967001&edition=en-edition&release=v20140731&langRefset=900000000000509007

Parameter|Example Value|Use
---|---|---
server|HTTP URL for the alternative server|Used to specifed an alternative backend server, other than the default one.
edition|en-edition, es-edition|Sets the edition that will be browsed, using the edition names defined by the backend.
release|v20140731|Name of the release, usually the effective time preceded by a "v".
perspective|full,browsing,etc.|Sets the perspective to load.
ui_language|en, es, da|Sets the UI language.
conceptId1|any SCTID|Sets the first concept details widget to this concept.
conceptId2|any SCTID|Sets the second concept details widget to this concept.
conceptIdTx1|any SCTID|Sets the first taxonomy widget to this concept.
conceptIdTx2|any SCTID|Sets the second taxonomy widget to this concept.
acceptLicense|1, 0|Is 1, the SNOMED CT Browser License is automatically accepted without displaying the modal window.
