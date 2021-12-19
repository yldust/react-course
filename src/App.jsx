import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Header from "./pages/components/Header";
import React from "react";

class App extends React.Component {
  state = { currentPage: 'map' };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  } 

  render () {
    return (
      <>
        <Header navigate={this.navigateTo} />
        <main>
          <section>
            {this.state.currentPage === 'map' && <Map />}
            {this.state.currentPage === 'login' && <Login navigate={this.navigateTo} />}
            {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
            {this.state.currentPage === 'profile' && <Profile />}
          </section>
        </main>
      </>  
    );
  }
}

export default App;
