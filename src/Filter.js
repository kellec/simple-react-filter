/** @jsx React.DOM */
'use strict';

var React = require('react/addons');

var Filter = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'is-interactive': true,
      'active': this.props.active
    });
    var buttonClasses = React.addons.classSet({
      'close': true,
      'hidden': !this.props.active
    });
    return (
      <li className={classes}>
        <a>
          {this.props.name}
          <button type="button" className={buttonClasses}><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        </a>
      </li>
    );
  }
});

module.exports = Filter;