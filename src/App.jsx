import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Header from "./pages/components/Header";
import React from "react";
import { withAuth } from "./pages/context/AuthContext";
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    navigate: PropTypes.func,
    isLoggedIn: PropTypes.bool
  }

  state = { currentPage: 'map' };

  navigateTo = (page) => {
    if (this.props.isLoggedIn || page === 'registration') {
      this.setState({ currentPage: page });
    } else {
      this.setState({currentPage: 'login'});
    }
    
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
            {this.state.currentPage === 'profile' && <Profile navigate={this.navigateTo}/>}
          </section>
        </main>
      </>  
    );
  }
}

export default withAuth(App);
