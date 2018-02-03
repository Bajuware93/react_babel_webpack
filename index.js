import React from 'react'
import ReactDOM  from 'react-dom'
import Parent from './components/parent'
//import Clock from './components/clock'
import Clockbtn from './components/clockbtn'
ReactDOM.render(
  <div>
  <Parent />
  </div>,
  document.getElementById('react')
);

ReactDOM.render(
  <div>
  <Clockbtn />
  </div>,
  document.getElementById('react-clock')
);
