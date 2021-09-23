import React, { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Works from './pages/works/Works'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './components/projectss/Projects'


function App() {

  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <Router>
      <div className="app">

        <Topbar setmenuOpen={setmenuOpen} menuOpen={menuOpen} />
        <Menu setmenuOpen={setmenuOpen} menuOpen={menuOpen} />

        <Switch>
          <Route exact path="/">
            <div className="sections">
              <Intro />
            </div>
          </Route>
          <Route path="/works">
            <div className="sections">
              <Works />
            </div>
          </Route>
          <Route path="/projects">
            <div className="sections">
              <Projects />
            </div>
          </Route>
          <Route path="/contact">
            <div className="sections">
              <Contact />
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
