# BootLeaf

## What is Bootleaf?

A simple, responsive template for building web mapping applications with [Bootstrap](http://getbootstrap.com/), [Leaflet](http://leafletjs.com/), and [typeahead.js](http://twitter.github.io/typeahead.js/).

## What is Bootleaf-Sass then?

A fork of Bootleaf, using Sass for generating CSS and with a Grunt driven build workflow to make it simpler to use Bootleaf as a template for your projects. Simpler if you use Sass and like Grunt that is. It worked for me, which was why I wrote this.

## Requirements

### Node.js

Native installers for most operating systems, as well as the source code are available on nodejs.org's [download](https://nodejs.org/download/) page. If you're using a Mac and [Homebrew](http://brew.sh/) then try the following.

```bash
$ brew install node
```

### Ruby

Most operating systems come with Ruby preinstalled, but it's a good idea to check.

```bash
$ ruby -v
```

### Grunt

Grunt is installed via `npm`; if you've installed Node, you already have `npm` installed for you.

```bash
$ npm install -g grunt-cli
```

### Bower

Bower is also installed via `npm`.

```bash
$ npm install -g bower
```

### Sass

```bash
$ gem install sass
```

## Building Bootleaf

Clone the [Bootleaf-Sass](https://github.com/vicchi/bootleaf-sass) GitHub repository.

```bash
$ git clone git@github.com:vicchi/bootleaf-sass.git
```

Install all component dependencies.

```bash
$ bower install
$ npm install
```

Build all Javascript and CSS files using the latest version of Bootleaf's components.

```bash
$ grunt build
```

All of Bootleaf's files, with the exception of the `index.html` landing page, is contained within the `assets` directory. You can also package up all of the required files into a single `dist` directory, suitable for uploading to your web server of choice, using Grunt's `deploy` command.

```bash
$ grunt deploy
```


## Demo

http://vicchi.github.io/bootleaf-sass/. See also the original Bootleaf demo here: http://bmcbride.github.io/bootleaf/

## Features
* Fullscreen mobile-friendly map template with responsive Navbar and modal placeholders
* jQuery loading of external GeoJSON files
* Logical multiple layer marker clustering via the [leaflet marker cluster plugin](https://github.com/Leaflet/Leaflet.markercluster)
* Elegant client-side multi-layer feature search with autocomplete using [typeahead.js](http://twitter.github.io/typeahead.js/)
* Responsive sidebar feature list with sorting and filtering via [list.js](http://listjs.com/)
* Marker icons included in grouped layer control via the [grouped layer control plugin](https://github.com/ismyrnow/Leaflet.groupedlayercontrol)

## Screenshots

![Desktop](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-desktop1.png)

![Desktop Search](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-desktop2.png)

![Desktop Popup](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-desktop3.png)

![Mobile](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-mobile1.png)

![Mobile Popup](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-mobile2.png)

![Mobile Search](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-mobile3.png)

![Mobile Menu](http://bmcbride.github.io/bootleaf/screenshots/bootleaf-mobile4.png)
