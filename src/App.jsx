import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Header from './components/Header';
import {LocalStorageService, StorageKeys} from './helpers/localStage';
import {connect} from "react-redux";
import {logIn} from "./modules/Auth";

const localStorageService = new LocalStorageService();

function App({logIn}) {
    useEffect(() => {
        const storedUserData = localStorageService.fetch(StorageKeys.LOGIN_DATA);

        if (storedUserData && storedUserData.token) {
            logIn(storedUserData.token);
        }
    }, []);

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </div>
    );
}

export default connect(
    null,
    {logIn}
)(App);
