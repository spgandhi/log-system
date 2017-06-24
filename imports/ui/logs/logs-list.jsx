import React, { Component } from 'react';
import Logs from '../../api/logs';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const style = {
  logsListWrapper: {
    wordWrap: 'break-word',
    position: 'relative',
  },
  listItem: {
    lineHeight: '20px',
  },
  deleteIconWrapper: {
    position: 'absolute',
    right: 0,
    top: '10px',
    display: 'inline-block',
    zIndex: '99',
  },
  deleteIcon: {
    width: '10px',
    padding: '10px',
  }
}

export default class LogsList extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.logsList && this.props.logsList.map((log, index) => (
            <div style={style.logsListWrapper} key={index}>
              <div style={style.deleteIconWrapper}>
                <img
                  src="/images/times-icon.png"
                  style={style.deleteIcon}
                  data-value={log._id}
                  onClick={this.props.onLogDelete}
                />
              </div>
              <ListItem primaryText={log.text} style={style.listItem} />
              <Divider />
            </div>
          ))
          }
        </List>
        {this.props.logsList && this.props.logsList.length === 0 &&
          <div className="no-logs-label">
            You don't have any logs
          </div>
        }
      </div>
    )
  }
}