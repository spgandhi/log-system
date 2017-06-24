import React, { Component } from 'react';
import LogsList from './logs-list';
import LogsAdd from './logs-add';
import browserhistory from 'react-router'

export default class LogsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logsList: null,
    }
    this.handleLogUpdate = this.handleLogUpdate.bind(this);
    this.handleLogDelete = this.handleLogDelete.bind(this);
  }

  componentDidMount() {
    Meteor.subscribe('logs', (result) => {
      this.handleLogUpdate();
    })
  }

  handleLogDelete(e) {
    const _id = e.target.getAttribute('data-value');
    Meteor.call('deleteLog', _id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.handleLogUpdate();
      }
    });
  }

  // Runs when a log is inserted or deleted
  handleLogUpdate() {
    this.setState({
      logsList: Logs.find({}, { "sort": { "timeStamp": -1 } }).fetch(),
    });
  }

  render() {
    return (
      <div>
        <LogsList
          logsList={this.state.logsList}
          onLogDelete={this.handleLogDelete}
        />
        <LogsAdd onLogAdd={this.handleLogUpdate} />
      </div>
    )
  }
}