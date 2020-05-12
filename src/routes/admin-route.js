import React from "react";
import { Route } from "react-router-dom";
import { getLocalStorageItem } from "../utilis/helper";
import { LOCAL_STORAGE_KEYS } from "../utilis/constants";
import { redirect } from './routing-constants';

export default function AdminRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                const token = getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
                const user = getLocalStorageItem(LOCAL_STORAGE_KEYS.USER);
                if (token) {
                    if (user.userType === 'Super Admin') {
                        return children;
                    } else {
                        return redirect('/', location);
                    }

                } else {
                    return redirect('/login', location);
                }
            }}
        />
    );
}