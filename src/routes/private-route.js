import React from "react";
import { Route } from "react-router-dom";
import { getLocalStorageItem } from "../utilis/helper";
import { LOCAL_STORAGE_KEYS } from "../utilis/constants";
import { redirect } from './routing-constants';

export default function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                const token = getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
                // const account = getLocalStorageItem(LOCAL_STORAGE_KEYS.ACCOUNT);
                const user = getLocalStorageItem(LOCAL_STORAGE_KEYS.USER);
                if (token && user.userType === 'Default') {
                    // if (account) {
                    return children;
                    // } else {
                    //     return redirect('/accounts', location);
                    // }
                } else if (token && user.userType === 'Super Admin') {
                    return children;
                }
                else {
                    return redirect('/login', location);
                }
            }}
        />
    );
}