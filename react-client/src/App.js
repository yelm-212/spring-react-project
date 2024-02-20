import logo from './logo.svg';
import {Component, useEffect, useState} from "react";
import React from "react";
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/test")
        .then((res) => {
          return res.json();
        })
        .then(function (result) {
            setData(result);
      })
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
              {data.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
      </header>
      <body>
      </body>
    </div>
  );
}

function FirstComponent(){ // Function Component
  return (
    <div className='FirstComponent'> FirstComponent </div>
  )
}

function SecondComponent(){
  return (
    <div className='SecondComponent'> SecondComponent </div>
  )
}

class ThirdComponent extends Component{
  
  render() {
    return (
      <div className='ThirdComponent'> ThirdComponent </div>
    )
  }
}

class FourthComponent extends Component{
  
  render() {
    return (
      <div className='FourthComponent'> ThirdComponent </div>
    )
  }
}

export default App;
