import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    isOnline: true,
  }

   componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffLine);
  }

  handleOnline = () => {
    this.setState({
      isOnline: true,
    });
  }

  handleOffLine = () => {
    this.setState({
      isOnline: false,
    });
  }

  render() {
    return (
        this.state.isOnline
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>
    );
  };
}


export default ConnectionStatus;