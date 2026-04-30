# Browser Frontend by SNOMED International

![Last Commit](https://img.shields.io/github/last-commit/ihtsdo/sct-browser-frontend/develop)
![Issues](https://img.shields.io/github/issues/ihtsdo/sct-browser-frontend)
![Contributors](https://img.shields.io/github/contributors/ihtsdo/sct-browser-frontend)

![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![GitHub commit activity the past year](https://img.shields.io/github/commit-activity/m/ihtsdo/sct-browser-frontend/develop)

This is a generic browser front end project, specific instances used in the IHTSDO browsers are customized in branches of this project.

The browser connects to a backend REST API provided by the project: https://github.com/IHTSDO/snowstorm

Project Structure
-----------------

The index.html includes all the logic for rendering the Browser UI, switching between different SNOMED CT releases and UI layouts (perspectives).

* bootstrap-custom: folder that contains a custom build of the Bootstrap framework
* css: stylesheets for this site
* external-libs: js libraries used by this site
* snomed-interaction-components: js, css and fonts for the SNOMED CT widgets contained in this site
* img: images for the site
* i18n: internationalization files for the site and the widgets
* index.html: one page application

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

## Local configuration, build and run the browser locally

Local configuration
-------------------
Run `npm install` to make the local application aware of your grunt installation.


Build
-----

The Grunt default task will create all these components, running `grunt` in the root folder of the project will build all widgets and create the distribution files.

- js
  - internal-libs/snomed-interaction-components.min.js
- css
  - css/snomed-interaction-components.min.css


Run locally
-----------

In order to obtain api-endpoint information within the local environment, a configuration similar to the following should be used:

```
user 'details here';
worker_processes  1;
 
events {
    worker_connections  1024;
}
 
http {
	include    mime.types;
    server {
		listen		8080;
		server_name	localhost;

    location / {
      root /FileLocation/sct-browser-frontend/;
    }       
    
    location /snowstorm/ {
      proxy_pass https://dev-browser.ihtsdotools.org/snowstorm/;
    }
	}	
}
```

## URL Shortcuts

The browser includes URL parameters that will act as shortcuts for opening the browser with pre-defined settings or content selections, skipping the need of selecting options from the main view.

Use:
http://browser.ihtsdotools.org/index.html?perspective=full&conceptId1=195967001

Parameter|Example Value|Use
---|---|---
edition|MAIN/SNOMEDCT-ES, MAIN/SNOMEDCT-AU|Sets the edition that will be browsed, using the edition names defined by the backend.
perspective|full,browsing,etc.|Sets the perspective to load.
languages|en, es, da, pt|Sets the UI language.
conceptId1|any SCTID|Sets the first concept details widget to this concept.
acceptLicense|true| the SNOMED CT Browser License is automatically accepted without displaying the modal window. This means that you are explicitly accepting the license.
diagrammingMarkupEnabled|true|SNOMED CT diagramming Markup is enabled.

## Docker

If you want to build an image based on any local changes you have made run the following on the command line:

```bash
docker build -t snomedinternational/snomedct-browser .
```

Or you can just jump to running the following command, replacing the `<host>` variable with the full URL to your snowstorm instance:

```bash
docker run --name snowstorm-nginx -d -p 80:80 --env API_HOST=<host> snomedinternational/snomedct-browser
```
