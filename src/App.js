import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import favoriteTaxi from './favoriteTaxi';
const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/favoriteTaxi" component={favoriteTaxi} />
    </div>
  );
};

export default App;