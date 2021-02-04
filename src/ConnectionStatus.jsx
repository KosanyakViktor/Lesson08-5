import React, { Component } from 'react';

class ConnectionStatus extends Component {

  constructor(props) {
    super(props);

    this.state = {
      status: false,
    }
  }

  // state = {
  //   isOnline: true,
  // }

   componentDidMount() {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffLine);
  }

  // componentDidUpdate() {
  //   console.log('Test1')
  // }

  handleOnline = () => {
    this.setState({
      // isOnline: true,
      status: 'online'
    });
  }

  handleOffLine = () => {
    this.setState({
      // isOnline: false,
      status: 'offline'
    });
  }

  render() {
        // this.state.isOnline
        // ? <div className="status">online</div>
        // : <div className="status status_offline">offline</div>
        
        const { status } = this.state;
        const className = `status ${status === 'offline' ? 'stuts_offline' : ''}`
        return <div className={className}> {status}</div>

  };
}


export default ConnectionStatus;