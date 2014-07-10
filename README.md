# react-quickstart

A _very_ minimal React project template based on 
[react-quickstart](https://github.com/andreypopp/react-quickstart) which 
combines:

  * [express][] to serve basic assets

  * [browserify][] to provide module system for a browser

  * [npm][] to install and manage server-side and client-side dependencies

## Project structure

Project structure is really minimal, you'd probably like to customize it for
your specific needs and taste:

    .
    ├── assets
    ├── src
    ├──── App.js
    ├── client.js
    ├── index.html
    ├── package.json
    └── server.js

## Development workflow

After cloning a git repo, run:

    % npm install

to install all needed dependencies and then:

    % npm run start

to start a development server.

Now you can start edit the source code and when the bundled code is requested
by the server it rebundles it ensuring you have the latest changes.
