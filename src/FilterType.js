/** @jsx React.DOM */
'use strict';

var React = require('react');
var Panel = require('react-bootstrap/Panel');
var Filter = require('./Filter');

var FilterType = React.createClass({
  propTypes: {
    activeKey: React.PropTypes.bool, // why is this a boolean?
    onSelect: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      active: false,
      activeKey: null
    };
  },

  render: function() {
    var activeKey =
      this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
    var title = (<h3>{this.props.title}</h3>);
    return (
      <Panel header={title}>
        <ul className='nav nav-pills nav-stacked'>
          {this.props.filterOptions.map(function(option, index) {
            return <Filter name={option} key={index} />
          })}
        </ul>
      </Panel>
    );
  }
});

module.exports = FilterType;