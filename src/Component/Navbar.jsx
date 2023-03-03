// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import {
    Button
} from 'semantic-ui-react'; 
import "../App.css"; 
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from '../Contexts/AuthContext';

// Creating the UI component 
const Navbar = (props) => {
    return(
        <AuthContext.Consumer>{(authContext) => {
            // 
            const { isLoggedIn, jwtToken, changeAuthStatus } = authContext; 

            // Return 
            return (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isDarkTheme, darkTheme, lightTheme } = themeContext
                    const theme = isDarkTheme ? darkTheme : lightTheme; 
        
                    // Return 
                    return (
                        <Fragment>
                            <div style={{backgroundColor: theme.background, color: theme.text}} className="ui secondary pointing menu">
                                <a className="item">
                                    Home
                                </a>
                                <a className="item">
                                    Messages
                                </a>
                                <a className="item">
                                    Friends
                                </a>
                                <div className="right menu">
                                    <a className="ui item">
                                    <p className="online-status"> {isLoggedIn ? "Online" : "Offline" } </p>
                                    <Button to="" className='nav-logout-button' onClick={changeAuthStatus}> Logout </Button> 
                                    </a>
                                </div>
                            </div>
                        </Fragment>
                        )
                    }}
                </ThemeContext.Consumer>
            )
        }}  
        </AuthContext.Consumer>

    )
}

// Exporting the navbar 
export default Navbar; 