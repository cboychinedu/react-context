// Importing the necessary modules 
import React, { Component, createContext, Fragment } from 'react'

// Creating the Theme context object 
const ThemeContext = createContext(); 

// Creating the class ThemeContextProvider 
class ThemeContextProvider extends Component {
    // Setting the state 
    state = {
        isDarkTheme: false, 
        lightTheme: {
            text: "#222", 
            background: "#d8ddf1"
        }, 
        darkTheme: {
            text: "#fff", 
            background: "#5c5c5c"
        }
    }

    // Creating a function for changing the theme 
    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme }); 
    }

    // Rendering 
    render() {
        return (
            <Fragment> 
                <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                    {this.props.children}
                </ThemeContext.Provider>
            </Fragment>
        )
    }
}

// Exporting 
export {
    ThemeContext, 
    ThemeContextProvider
}