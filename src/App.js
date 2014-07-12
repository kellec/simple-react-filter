/** @jsx React.DOM */
'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var FilterGroup = require('./FilterGroup');
var data = require('./data');


var App = React.createClass({
  getInitialState: function() {
    return {
      activeFilter: null,
      activeFilterGroup: null
    }
  },

  handleSelect: function (key, filterGroup) {
    this.setState({
      activeFilter: key,
      activeFilterGroup: filterGroup
    });
  },

  handleUnselect: function (e) {
    e.stopPropagation();
    this.setState({
      activeFilter: null,
      activeFilterGroup: null
    });
  },

  getFilteredItems: function() {
    if ( this.state.activeFilter === null ) {
      return data.content;
    }

    return data.content.filter( function( item ) {
      return item[ this.state.activeFilterGroup ] === this.state.activeFilter;
    }.bind( this ) );
  },

  renderFilteredContent: function(items) {
    var filteredItems = items.map( function(item, index) {
      return(<li className={'list-group-item team team--' + item.slug} key={index}><span>{item.name}</span></li>);
    });

    return (
      <ul className="list-group h-clearfix">
        <ReactCSSTransitionGroup transitionName="team">
          {filteredItems}
        </ReactCSSTransitionGroup>
      </ul>
    );
  },

  render: function() {
    var handleSelect = this.handleSelect;
    var handleUnselect = this.handleUnselect;
    var activeFilter = this.state.activeFilter;
    var activeFilterGroup = this.state.activeFilterGroup;
    return (
      <Grid>
        <Row>
          <Col md={4} className="clearfix">
          <h2>Filters</h2>
          {data.filters.map(function(filter, index) {
            return (
              <FilterGroup
                key={index}
                title={filter.filterName}
                filterOptions={filter.filterOptions}
                activeFilter={activeFilter}
                activeFilterGroup={activeFilterGroup}
                onSelect={handleSelect}
                onUnselect={handleUnselect}/>
            );
          })}
          </Col>
          <Col md={8}>
            <h2>Teams</h2>
            {this.renderFilteredContent(this.getFilteredItems())}
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = App;