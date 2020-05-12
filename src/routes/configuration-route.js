import React from "react";
import { Route } from "react-router-dom";
import { getLocalStorageItem } from "../utilis/helper";
import { LOCAL_STORAGE_KEYS } from "../utilis/constants";
import { redirect } from './routing-constants';

export default function ConfigurationRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                const token = getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
                return token
                    ? children
                    : redirect('/login', location);
            }}
        />
    );
}