/** @jsx React.DOM */
'use strict';

var React = require('react');
var Panel = require('react-bootstrap/Panel');
var FilterItem = require('./FilterItem');

var Filter = React.createClass({
  render: function() {
    var handleSelect = this.props.onSelect;
    var handleUnselect = this.props.onUnselect;
    var title = (<h3>{this.props.title}</h3>);
    return (
      <Panel header={title}>
        <ul className='nav nav-pills nav-stacked'>
          {this.props.filterOptions.map(function(option, index) {
            return <FilterItem name={option} key={index} onSelect={handleSelect} onUnselect={handleUnselect} />
          })}
        </ul>
      </Panel>
    );
  }
});

module.exports = Filter;