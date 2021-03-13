# commands

Webpack dev server and typescript+nodemon can run at the same time

- Webpack for updating browser on code changes

- typescript+nodemon for running JS in node. Great for console.logs in the terminal

## webpack

this is configured in the webpack config

`npm run build` will run `webpack --mode production` 

Will compiel the project into the dist folder

`npm startWebpack` will run `webpack serve --open --mode development`

dev server

## typescript

This is configured in the tsconfig.json

`npm start:build` will run `tsc -w`

compiles every time a change has been made

## nodemon

`npm start:run` will run `nodemon build/src/index.js`

watches and runs JS in the console

## typescript + nodemon

These two work together. Typescript compiles on code changes, and nodemon runs the js files

`npm start` will run `concurrently npm:start:*`

runs typescript and nodemon scripts
