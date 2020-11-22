import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './pages/css/style.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'





function App() {
  return (
    <Router>
    <Switch>
    <div>
      <Navbar/>
      <div>

        {/* routes */}
        <Route exact path='/' component={AboutMe} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
 
      </div>
      <Footer />
    </div>
    </Switch>
  </Router>

  );
}

export default App;
