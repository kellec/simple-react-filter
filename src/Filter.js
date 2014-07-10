/** @jsx React.DOM */
'use strict';

var React = require('react/addons');

var Filter = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      active: false
    };
  },

  handleSelect: function (e) {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.key);
    }

    e.preventDefault();

    this.setState({
      active: true
    });
  },

  render: function() {
    var classes = React.addons.classSet({
      'is-interactive': true,
      'active': this.state.active
    });
    var buttonClasses = React.addons.classSet({
      'close': true,
      'hidden': !this.state.active
    });
    return (
      <li className={classes}>
        <a onClick={this.handleSelect}>
          {this.props.name}
          <button type="button" className={buttonClasses}><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        </a>
      </li>
    );
  }
});

module.exports = Filter;