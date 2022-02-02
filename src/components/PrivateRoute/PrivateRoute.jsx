import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn,}),
    null
)
(({component: Component, isLoggedIn }) => (
        <Route
            render={(props) =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    )
);

export default PrivateRoute;