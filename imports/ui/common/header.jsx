import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default Header = (props) => {
  return (
    <AppBar
      title="Log System"
      iconElementLeft={<span />}
      iconElementRight={props.rightElement}
    />
  )
};
