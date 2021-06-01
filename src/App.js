
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Useritem from './components/users/Useritem'

class App extends Component {
  foo = () => 'barrrr';

  render(){


    return (
      <div className="App">
       <Navbar title="Github Finder" icon='fab fa-github'/>
       <Useritem />
      </div>
    );
  }
  
}

export default App;
