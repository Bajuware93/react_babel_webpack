import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';

class Clockbtn extends React.Component{
  constructor(props){
    super(props);
    this.state = {btnactive: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      btnactive: !prevState.btnactive
    }));
  }

  render(){
    return(
      <div>
      <p>Starte die Uhr</p>
      <button onClick={this.handleClick}>{this.state.btnactive ? 'Stoppen': 'Starten'}</button>
      <Clock active={this.state.btnactive} />
      </div>
    );
  }

}

export default Clockbtn;
