// Importing the necessary modules 
import React, { Component, createContext, Fragment } from 'react';

const AuthContext = createContext(); 

// Class UI component 
class AuthContextProvider extends Component {
    // State 
    state = {
        isLoggedIn: false, 
        jwtToken: "124kdkd34"
    } 

    // 
    changeAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn }); 
    }

    // Render 
    render() {
        // Return 
        return (
            <Fragment>
                <AuthContext.Provider value={{...this.state, changeAuthStatus: this.changeAuthStatus}}>
                    { this.props.children }
                </AuthContext.Provider>
            </Fragment>
        )
    }
}

// Export AuthContextProvider 
export { AuthContextProvider, AuthContext}; 