
import React, {useState, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import axios from 'axios'
import About from './components/pages/About'

import GithubState from './context/github/GithubState';

const App = () => {


  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const getUserRepos = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setRepos(res.data)
    setLoading(false)
  }




  //set alert

  const showAlert = (msg, type) => {
    //send alert to state

    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 5000)
  }

  
    return (
      <GithubState>
      <Router>
      <div className="App">
       <Navbar title="Github Finder" icon='fab fa-github'/>
       <div className = "container">
         <Alert alert={alert} />
         <Switch>
           <Route exact path='/' render={props => (
             <Fragment>
                <Search /* give this a prop that we can use in the Search.js
              but that prop calls a function from this file app.js to keep it
              centralized */
              setAlert={showAlert} />
              <Users />
             </Fragment>
             
           )} />
           
           <Route exact path='/about'>
              <About />
           </Route>
           <Route exact path='/user/:login' render={props => (
              <User {...props} getUserRepos={getUserRepos} repos={repos} />
           )}/>
         </Switch>
        
       </div>
       
      </div>
      </Router>
      </GithubState>
    );
  
  
}

export default App;
