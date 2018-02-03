import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clockActive: this.props.active
    };
  }

  componentDidMount() {
   this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps.active !== this.props.active ){
      this.setState({
        clockActive: nextProps.active
      });
    }
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
      <h1>Hello, world!</h1>
      { this.state.clockActive === true &&
        <p>Es ist {this.state.date.toLocaleTimeString()}.</p>
      }
      </div>
    );
  }
}

export default Clock;
