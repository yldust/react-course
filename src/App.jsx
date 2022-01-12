import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Header from "./pages/components/Header";
import React from "react";
//import { withAuth } from "./pages/context/AuthContext";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  render () {
    return (
      <>
        <Header />
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={Map} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </section>
        </main>
      </>  
    );
  }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    null
)
(App);
