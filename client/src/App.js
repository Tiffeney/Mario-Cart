import React from 'react';
import Home from './components/Home'; 
import Layout from './components/Layout';
import NotFound from './components/NotFound'; //Added Line
import CreatePlayer from './components/CreatePlayer';
import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/new" component={CreatePlayer}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  )
};
export default App;
