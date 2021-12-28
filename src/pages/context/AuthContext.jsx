import React from "react";

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const logIn = (email, password) => {
        if (email === '' || password === '') {
            return;
        }
        setIsLoggedIn(true);
    }

    const logOut = (email, password) => {
        setIsLoggedIn(false);
    }

    const value = {isLoggedIn, logIn, logOut};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    )
}

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props}/>
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}