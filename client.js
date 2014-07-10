'use strict';

var React = require('react');
var App = require('./src/App');

window.onload = function() {
  React.renderComponent(App(), document.getElementById('App'));
}