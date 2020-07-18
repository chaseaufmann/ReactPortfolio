import React  from 'react';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PortfolioIndex from './components/pages/portfoliopages/PortfolioIndex';
import PortfolioAbout from './components/pages/portfoliopages/PortfolioAbout';
import PortfolioWork from './components/pages/portfoliopages/PortfolioWork';
import PortfolioContact from './components/pages/portfoliopages/PortfolioContact';

import GithubState from './context/github-finder/github/GithubState';
import AlertState from './context/github-finder/alert/AlertState';


const App=()=> {
  return (

    <GithubState>
    <AlertState>
   <Router>
      <Switch>
      
      
      <Route exact path="/" component={PortfolioIndex}/>
      <Route exact path="/PortfolioAbout" component={PortfolioAbout}/>
      <Route exact path="/PortfolioContact" component={PortfolioContact}/>
      <Route exact path="/PortfolioWork" component={PortfolioWork}/>
      
   

      
      </Switch>
    </Router>
   </AlertState>
   </GithubState>
  );
};

export default App;
