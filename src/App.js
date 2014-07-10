/** @jsx React.DOM */
'use strict';

var React = require('react');
var Panel = require('react-bootstrap/Panel');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Well = require('react-bootstrap/Well');

var data = require('./data');

var Filter = React.createClass({
  render: function() {
    return (<li>{this.props.name}</li>);
  }
});

var FilterType = React.createClass({
  render: function() {
    var title = (<h3>{this.props.title}</h3>);
    return (
      <Panel header={title}>
        <ul>
          {this.props.filterOptions.map(function(option) {
            return <Filter name={option} />
          })}
        </ul>
      </Panel>
    );

  }
});

var App = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col md={4} className="clearfix">
          <h2>Filters</h2>
          {data.filters.map(function(filter) {
            return (<FilterType title={filter.filterName} filterOptions={filter.filterOptions} />);
          })}
          </Col>
          <Col md={8}>
            <h2>Teams</h2>
            <Well>
              <ul>
                {data.content.map(function(item) {
                  return(<li className={item.slug}>{item.name}</li>);
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