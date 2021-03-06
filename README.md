#g5-component.js

React + Browserify Component Scaffold

---

* [g5-component.js](https://github.com/MajorLeagueBaseball/g5-component) with React
* No handlebars templating
* Simplified overall setup
* Composable React components with a single instance
* TODO: update to ESLint
* TODO: implement [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)

---

###Setup

> Install the package and use it as a module, create new components quickly and efficiently ([documentation](https://github.com/MajorLeagueBaseball/g5-component/blob/master/docs/usage-module.md))

```
npm i g5-component
```

> Or clone the package and use it as a scaffold/baseline for your project ([documentation](https://github.com/MajorLeagueBaseball/g5-component/blob/master/docs/usage-scaffold.md))

```
git clone https://github.com/MajorLeagueBaseball/g5-component.git && cd g5-component
```

> Install the dependencies and run the initial build, once done you can simply run the server and start development.

```
npm i && npm run build
```

---

###Server / Development

> Server running on [http://localhost:9966](http://localhost:9966) with auto - split builds (vendor dependencies are built separately for faster build times) [Ctrl+C] to kill server

```
npm run start-dev
```

###Server

> Server running on [http://localhost:9966](http://localhost:9966) with full build [Ctrl+C] to kill server

```
npm run start
```

---

###Commands

####[build-js](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L66)

> Bundle build, without vendor dependencies

```
npm run build-js
```

####[build-js-vendor](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L67)

> Vendor build (Bootstrap, jQuery, LoDash, etc...)

```
npm run build-js-vendor
```

####[build-js-full](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L68)

> Full build, including vendor and bundle

```
npm run build-js-full
```

####[build](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L73)

> Full build, including vendor, bundle and CSS

```
npm run build
```

####[test](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L80)

> babel-tape-runner test

```
npm test
```

####[compress-images](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L64)

> compresses all images in src/images/ and outputs to src/images/build

```
npm run compress-images
```

####[lint](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L84)

> JSHint, options set in [.jshintrc](https://github.com/MajorLeagueBaseball/g5-component/blob/master/.jshintrc)

```
npm run lint
```

####[minify-css](https://github.com/MajorLeagueBaseball/g5-component/blob/master/package.json#L78)

> minifies CSS via cleancss

```
npm run minify-css
```

---

###Options

A single shared options Object, easily add options and have them available throughout

* `Element` __container__ - primary container
* `String` __css__ - classes
* `String` __i18n__ - localization
* `Number` __interval__ - polling interval (ms)
* `String` __path__ - data path (remote/local)
* `Boolean` __enablePolling__ - flag to enable/disable data polling

###Methods

> Simple set of core methods

```js
exampleComponent.init(); // initiates component
```

```js
exampleComponent.hasInstance(); // checks if container has an instance of g5-component
```

```js
exampleComponent.detachEvents(); // detaches all events
```

```js
exampleComponent.attachEvents(); // attaches all events
```

```js
exampleComponent.destroy(); // kills component instance, cleans everything out to prevent memory leaks
```

###Events

> Events must be attached before the component is initiated

```js
exampleComponent.on('ready', function(obj) {

    // console.log('component model and viewModel have been initiated', obj);

});

exampleComponent.on('data', function(data) {

    // console.log('component data from model', data);

});

exampleComponent.on('data-error', function(err) {

    // console.log('component model data error', err);

});

exampleComponent.on('destroy', function(obj) {

    // console.log('component instance killed', obj);

});
```

###Example Usage

```js
let linescoreComponent = g5Component({
    container: document.querySelector('.g5-component--linescore'),
    css: 'g5-component--linescore-initiated', // class to add after instantiation
    interval: 15000, // polling interval
    path: '/src/data/linescore.json' // data path (local or remote)
});

linescoreComponent.init();
```
