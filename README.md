# MENDO (in-progress)

UPDATE:The free wordpress hoster this uses is experiencing a lot of down-time and has yet to be migrated to a new hoster. Please be patient as the page loads.

Mendo is a proof of concept single-page web application based on the original website (www.mendo.nl) and is used for for demonstration purposes only. Current working features include the rendering of CMS assets (book products and banner elements) to a React/Redux frontend.

[Link to Live Page](http://www.kevin-dam.co/MENDO)

## Design/Implementation

Mendo was built using a headless Wordpress as a back end content management system (CMS). The front end utilizes React/Redux, HTML, and CSS to render the Wordpress content.

### Wordpress REST-API

Wordpress' latest v2 REST-API were used to build the back end for this project. All assets were fetched using Wordpress API endpoints. Using a CMS as a back end offers a lot of flexibility not only for developers, but for non-technical users who prefer a GUI to add content. These users can simply login to the Wordpress admin website to add products and edit content, which will then be readily available to the Mendo weppage.

### React/Redux

Redux was used for state/store management via API requests to the Wordpress server. The resources managed by Redux were then manipulated using React to differentially render responsive components.

### Other Dependencies

All resources were bundled using Webpack and Babel was used to transpile .jsx files to JavaScript. Facebook's JSX offers a more semantic syntax for the production of React applications.

### Extensibility

Given Wordpress' extensive features, there is a lot of extensibility to modify and add content on the back end. On the front end, modular React components allow for easy and restructuring of code. Components are highly reusable and React's diff algorithms for DOM manipulation make it fast and responsive.
