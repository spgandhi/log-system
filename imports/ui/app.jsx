import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import FlatButton from 'material-ui/FlatButton';
import Header from './common/header';
import { Accounts } from 'meteor/accounts-base';
import LogsLayout from './logs/logs-layout';
import browserhistory from 'react-router'
import Login from './user/login';

const style = {
  logsLayout: {
    padding: '20px',
  },
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
    this.handleSignout = this.handleSignout.bind(this);
  }

  componentDidMount() {
    Accounts.onLogin(() => {
      if (Meteor.user()) {
        localStorage.setItem('userId', Meteor.userId());
        this.setState({ user: Meteor.user() });
      }
    })
  }

  handleSignout() {
    Meteor.logout(() => {
      localStorage.removeItem('userId');
      this.setState({ user: null });
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div >
        <Header rightElement={user && <FlatButton onClick={this.handleSignout} label="Signout" />}
        />
        {user &&
          <div style={style.logsLayout}>
            <LogsLayout />
          </div>
        }
        {!user && localStorage.getItem('userId') && <div className="login-wrapper">Loading</div>}
        {!user && !localStorage.getItem('userId') && <div className="login-wrapper"><Login /></div>}
      </div>
    );
  }
}