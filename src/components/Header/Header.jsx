import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import {logOut} from "../../modules/Auth";
import {LocalStorageService, StorageKeys} from '../../helpers/localStage';

const localStorageService = new LocalStorageService();

const Header = ({ isLoggedIn, logOut }) => {
    const handleLogout = (event) => {
        event.preventDefault();
        localStorageService.delete(StorageKeys.LOGIN_DATA);
        logOut();
    };

    return (
        <AppBar color='inherit' position="relative">
            <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <nav>
                        <ul>
                            {!isLoggedIn &&
                                <li className="topMenuItem">
                                    <Link to="/">Логин </Link>
                                </li>
                            }

                            {!isLoggedIn &&
                                <li className="topMenuItem">
                                    <Link to="/registration">Зарегистрироваться</Link>
                                </li>
                            }

                            <li className="topMenuItem">
                                <Link to="/map">Карта </Link>
                            </li>

                            <li className="topMenuItem">
                                <Link to="/profile">Profile </Link>
                            </li>
                            {isLoggedIn &&
                                <li className="topMenuItem">
                                    <a href="#" onClick={handleLogout}>Выйти</a>
                                </li>
                            }
                        </ul>
                    </nav>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});
const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Header);