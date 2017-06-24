import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Logs from '../../api/logs';

const style = {
  logsContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'white',
    zIndex: '999',
  },
  form: {
    padding: '10px 20px',
  },
  input: {
    paddingRight: '50px',
  },
  sendBtn: {
    position: 'absolute',
    right: '30px',
    bottom: '25px',
    width: '20px',
    cursor: 'pointer',
  }
}

export default class LogsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logText: '',
      errorText: '',
    }
    this.handleLogSubmit = this.handleLogSubmit.bind(this);
    this.handleLogTextFieldChange = this.handleLogTextFieldChange.bind(this);
  }

  handleLogSubmit(e) {
    e.preventDefault();
    
    // If log is empty, handle the error
    if(!this.state.logText || this.state.logText === ''){
      this.setState({
        errorText: 'Please enter some text',
      })
      return;
    }

    // If no user, abort insert
    if(!Meteor.userId()) return;

    // If the log is not empty, insert it in database
    Logs.insert({
      userId: Meteor.userId(),
      text: this.state.logText,
      timeStamp: new Date(),
    }, (err, records) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          logText: '',
          errorText: '',
        })
        this.props.onLogAdd();
      }
    });
  }

  handleLogTextFieldChange(e, logText) {
    this.setState({ logText });
  }

  render() {
    return (
      <div style={style.logsContainer}>
        <form onSubmit={this.handleLogSubmit} style={style.form}>
          <TextField
            hintText="Enter your log here"
            errorText={this.state.errorText}
            onChange={this.handleLogTextFieldChange}
            value={this.state.logText}
            fullWidth={true}
            inputStyle={style.input}
          />
          <img style={style.sendBtn} src="/images/send_black_icon.png" onClick={this.handleLogSubmit} />
        </form>
      </div>
    )
  }
}