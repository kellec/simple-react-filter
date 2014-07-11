/** @jsx React.DOM */
'use strict';

var React = require('react');
var Panel = require('react-bootstrap/Panel');
var FilterItem = require('./FilterItem');

var Filter = React.createClass({
  getSafeName: function() {
    return this.props.title.replace(/\s+/g, '-').toLowerCase();
  },

  render: function() {
    var handleSelect = this.props.onSelect;
    var handleUnselect = this.props.onUnselect;
    var activeFilterKey = this.props.activeFilter;
    var title = (<h3>{this.props.title}</h3>);
    var slug = this.getSafeName();

    return (
      <Panel header={title}>
        <ul className='nav nav-pills nav-stacked'>
          {this.props.filterOptions.map(function(option, index) {
            var key = slug + '-' + index;

            return (
              <FilterItem
                active={activeFilterKey === key}
                parentFilterGroup={slug}
                name={option}
                key={key}
                onSelect={handleSelect}
                onUnselect={handleUnselect} />
            );
          })}
        </ul>
      </Panel>
    );
  }
});

module.exports = Filter;