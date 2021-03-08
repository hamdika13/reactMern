import React from 'react';
import {BrowserRouter as Router,Route,Link} from  'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import NavigationBar from './components/NavigationBar';
import Layout from './components/Layout';

function App() {
  return (
    <>
   <Router>
   <NavigationBar  />
   <Layout>
    <Route exact path ="/" component = {Home}/>
    <Route  path ="/user" component = {User}/>
    </Layout>
   </Router>
  
  
   </>
  );
}

export default App;
