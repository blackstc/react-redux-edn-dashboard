import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

import Scheduler from './Scheduler';
import SquareWidget from './SquareWidget'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="col-xs-4">
          levels
        </div>
        <div className="col-xs-8">
          <div className="col-xs-12">
            <Scheduler />
          </div>
          <div className="col-xs-6">
            <SquareWidget />
          </div>
          <div className="col-xs-6">
            <SquareWidget />
          </div>
          <div className="col-xs-6">
            <SquareWidget />
          </div>
          <div className="col-xs-6">
            <SquareWidget />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.data.all };
}

export default connect(mapStateToProps, { fetchData })(Dashboard);
