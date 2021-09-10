import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import favoriteTaxi from './favoriteTaxi';
import signin from "./signIn";
const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/favoriteTaxi" component={favoriteTaxi} />
      <Route path="/signin" component={signin}/>
    </div>
  );
};

export default App;