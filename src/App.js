/** @jsx React.DOM */
'use strict';

var React = require('react');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Well = require('react-bootstrap/Well');

var Filter = require('./Filter');
var data = require('./data');


var App = React.createClass({
  handleSelect: function (key) {
    this.setState({
      activeFilter: key
    });
  },

  handleUnselect: function (key) {
    this.setState({
      activeFilter: null
    });
  },

  render: function() {
    var handleSelect = this.handleSelect;
    var handleUnselect = this.handleUnselect;

    return (
      <Grid>
        <Row>
          <Col md={4} className="clearfix">
          <h2>Filters</h2>
          {data.filters.map(function(filter, index) {
            return (
              <Filter
                key={index}
                title={filter.filterName}
                filterOptions={filter.filterOptions}
                onSelect={handleSelect}
                onUnselect={handleUnselect}/>
            );
          })}
          </Col>
          <Col md={8}>
            <h2>Teams</h2>
            <Well>
              <ul>
                {data.content.map(function(item, index) {
                  return(
                    <li className={item.slug} key={index}>{item.name}</li>
                  );
                })}
              </ul>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = App;