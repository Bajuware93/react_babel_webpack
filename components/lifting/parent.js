import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        value: ''
      };
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick(event){
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render(){
    return(
      <InputComponent value={this.state.value} onClick={this.handleClick} />
    );
  }
}

class InputComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.onClick(event);
  }

  render(){
    return(
      <input type="text" value={this.state.value} onChange={this.handleChange}></input>
    );
  }
}

export default Parent;
//Wenn lifting über mehrere Komponenten, wird in den Komponenten nur die Property an die importierten Komponenten weiter gegeben.
//Nur bei Komponenten bei der die Funktion ausgeführt wird, findet das binding statt.
