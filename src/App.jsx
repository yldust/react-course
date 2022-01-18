import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Header from "./pages/components/Header";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </section>
        </main>
      </>  
    );
  }
}

export default App;
