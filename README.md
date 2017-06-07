# MENDO

[Link to Live Page](http://www.kevin-dam.co/MENDO)

Mendo is a proof of concept single-page web application based on the original website (www.mendo.nl) and is used for for demonstration purposes only.
Mendo was built using headless Wordpress as a back end CMS. The front end utilizes React/Redux, HTML, and CSS.

## Design/Implementation

### Wordpress REST-API

Wordpress' latest v2 REST-API were used to build the back end for this project. All assets were fetched using this REST-API. Using a CMS as a back end offers a lot of flexibility not only for developers, but for non-technical users who prefer a GUI to add content. These users can simply login to the Wordpress admin server to add products and edit content, which will then readily available to the front end client.

### React/Redux

Redux was used for state/store management via API requests to the Wordpress server. The resources managed by Redux were then manipulated using React to differentially render responsive components.

### Other Dependencies

All resources were bundled using Webpack. Furthermore, Babel was used to transpile .jsx files to plain JavaScript. Facebook's JSX offers a more semantic syntax for the production of React applications.

### Extensibility

Given Wordpress' extensive features, there is a lot of extensibility to modify and add content on the back end. On the front end, modular React components allow for easy and restructuring of code.
