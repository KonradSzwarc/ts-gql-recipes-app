import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

import apollo from 'utils/apollo';

import SignUp from './SignUp';
import SignIn from './SignIn';
import Recipes from './Recipes';
import Recipe from './Recipe';

export const ME = gql`
  {
    me {
      id
    }
  }
`;

interface IData {
  me: {
    id: string;
  };
}

const Root = () => (
  <ApolloProvider client={apollo}>
    <Query<IData> query={ME}>
      {({ data, loading }) => {
        if (loading) return <div>Loading...</div>;
        const isUnauthorizedPath = window.location.pathname === '/sign-in' || window.location.pathname === '/sign-up';
        if (!data.me && !isUnauthorizedPath) return <Redirect to="/sign-in" />;
        if (data.me && isUnauthorizedPath) return <Redirect to="/" />;

        return (
          <Switch>
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/:recipeId" component={Recipe} />
            <Route exact path="/" component={Recipes} />
          </Switch>
        );
      }}
    </Query>
  </ApolloProvider>
);

export default Root;
