IHTSDO Browser Frontend
=======================

This is a generic browser front end project, specific instances used in the IHTSDO browsers are customized in branches of this project.

This project is an HTML / JS application that uses the IHTSDO SNOMED CT Interaction Components (https://github.com/IHTSDO/snomed-interaction-components) to create aa SNOMED CT Browser.

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

