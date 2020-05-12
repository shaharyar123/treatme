import React from "react";
import { Route } from "react-router-dom";
import { getLocalStorageItem } from "../utilis/helper";
import { redirect } from './routing-constants';
import { LOCAL_STORAGE_KEYS } from "../utilis/constants";

export default function PublicRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                const token = getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
                return !token
                    ? children
                    : redirect('/', location);
            }}
        />
    );
}