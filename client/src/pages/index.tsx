import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import apollo from 'utils/apollo';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Recipes from './Recipes';
import Recipe from './Recipe';

const Root = () => (
  <ApolloProvider client={apollo}>
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/:recipeId" component={Recipe} />
      <Route exact path="/" component={Recipes} />
    </Switch>
  </ApolloProvider>
);

export default Root;
