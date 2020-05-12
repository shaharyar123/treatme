import React from "react";
import { Redirect } from "react-router-dom";

export const redirect = (path, location) => {
    return (
        <Redirect
            to={{
                pathname: path,
                state: { from: location }
            }}
        />
    );
};