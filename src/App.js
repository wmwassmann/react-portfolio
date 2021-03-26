import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './pages/css/style.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
// import Featured from './pages/featured'
import landingHub from './pages/landingHub';
import AnIntro from './components/FeaturedPages/AnIntro'
import TheBuddies from './components/FeaturedPages/TheBuddies';
import TheMission from './components/FeaturedPages/TheMission';
import TheTools from './components/FeaturedPages/TheTools';
import WhatsNext from './components/FeaturedPages/WhatsNext';
import DevProfiles from './components/FeaturedPages/DevButtons/DevProfiles';
import { AnimatePresence } from 'framer-motion'




function App() {
  return (
    <Router>
      <AnimatePresence>
    <Switch>
    <div>
      <Navbar className='nav-bar-main'/>
      <div className='featured-content'>

        {/* routes */}
        <Route exact path='/' component={landingHub}/>        
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />     
        <Route exact path='/0' component={AnIntro} />
        <Route exact path='/1' component={TheBuddies} />
        <Route exact path='/2' component={TheMission} />
        <Route exact path='/3' component={TheTools} />
        <Route exact path='/4' component={WhatsNext} />
        <Route exact path='/profiles' component={DevProfiles} />
 
      </div>
      <Footer />
    </div>
    </Switch>
    </AnimatePresence>
  </Router>

  );
}

export default App;
