/** @jsx React.DOM */
'use strict';

var React = require('react/addons');

var FilterItem = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      active: this.props.active
    };
  },

  componentDidReceiveProps: function() {
    this.setState({
      active: this.props.active
    });
  },

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
      <li className={classes} onClick={this.props.onSelect.bind(null, this.props.key, this.props.parentFilterGroup)}>
        <a>
          {this.props.name}
          <button
            onClick={this.props.onUnselect}
            type="button"
            className={buttonClasses}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
        </a>
      </li>
    );
  }
});

module.exports = FilterItem;