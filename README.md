# Art Project Template

I've created a small boilerplate for working on small, creative coding projects/experiments in vanilla JS. 

This template repo is used as a boilerplate and meant to speed up development with some extremely common tools to give a great developer experience and decrease time between feedback cycles.

## Tooling

* Express
* Livereload
* Scss

## Prerequisites

* Node v10+
* NPM v6+
* node-sass (should install with `npm install`)

## Installation Instructions

Clone repo and run `npm install` to install dependencies

## How to use

* Run `npm run dev` to start a local environment on `localhost:3000`
* Start coding!
  * HTML is in `index.html`
  * (S)CSS is in `style.scss`
  * JS is in `/static/script.js`
  * Any HTML, CSS, or JS changes will automatically cause the browser to refresh

When you are ready to release your code, run `npm run release` and your site will be ready to deploy via the `/dist` folder

To remove all "compiled" files, run `npm run clean` to delete the `/dist` folder

Happy creative coding!