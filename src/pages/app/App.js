import React, { Component } from 'react';
import './App.css';
import Conteudo from '../components/conteudo/Conteudo'

class App extends Component {
  render() {
    return (
      <div className="culty-wraper">
        <div className="culty-header">
          <Conteudo />
        </div>
      </div>
    )
  }
}

export default App;
