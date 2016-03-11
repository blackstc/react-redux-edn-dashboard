import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

import Scheduler from './Scheduler';
import SquareWidget from './SquareWidget'
import Bar from './Bar';

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    if (!this.props.data.water_level) {
      return (
        <div>loading...</div>
      )
    }

  return (
    <div className="col-xs-12">
      <div className="col-xs-4">
        <p className="days-left title">Remaining Days</p>
          <div className="bar-graph col-xs-6">
            <Bar
              level={this.props.data.water_level.level}
              days={this.props.data.water_level.days_left}
            />
          <p className='title'>Water Level</p>
          </div>
          <div className="bar-graph col-xs-6">
            <Bar
              level={this.props.data.nutrients.level}
              days={this.props.data.nutrients.days_left}
            />
          <p className='title'>Nutrient Level</p>
          </div>
        </div>

      <div className="col-xs-8">
          <div className="scheduler col-xs-12">
            <Scheduler
              start={this.props.data.schedule.start}
              end={this.props.data.schedule.end}
            />
          </div>
        <div className='widgets'>
            <div className="col-xs-6">
              <SquareWidget
                title={this.props.data.widget_info.light.title}
                image={this.props.data.widget_info.light.image_url}
                status={this.props.data.widget_info.light.status}
              />
            </div>
          <div className="col-xs-6">
            <SquareWidget
              title={this.props.data.widget_info.water.title}
              image={this.props.data.widget_info.water.image_url}
              status={this.props.data.widget_info.water.status}
            />
          </div>
          <div className="col-xs-6">
            <SquareWidget
              image={this.props.data.widget_info.temperature.image_url}
              title={this.props.data.widget_info.temperature.title}
              status={this.props.data.widget_info.temperature.status}
            />
          </div>
          <div className="col-xs-6">
            <SquareWidget
              title={this.props.data.widget_info.nutrients.title}
              image={this.props.data.widget_info.nutrients.image_url}
              status={this.props.data.widget_info.nutrients.status}
            />
          </div>
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
