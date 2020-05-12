import React from "react";
import { Switch, withRouter } from "react-router-dom";
import LoginPage from "../pages/auth/login";

import PublicRoute from '../routes/public-route';
import PrivateRoute from '../routes/private-route';

const DefaultContainer = ({ location }) => {
    return (
        <Switch location={location}>
            <PublicRoute path="/login" exact={true}>
                <LoginPage />
            </PublicRoute>
            
              <PublicRoute path="/treatme" exact={true}>
                <LoginPage />
            </PublicRoute>


            <PrivateRoute path="/" exact={true}>
                <h1>Home</h1>
            </PrivateRoute>

        </Switch>
    );
};

export default withRouter(DefaultContainer);