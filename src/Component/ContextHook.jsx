// Importing the necessary modules 
import React, { Fragment, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContext';

// Creating the functional component 
const TodoList = () => {
    // Using context 
    const {isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const { isLoggedIn, jwtToken } = useContext(AuthContext); 
    
    // Rendering 
    return (
        <Fragment> 
            <div className="container"> 
                <p className="item"> Plan the family trip </p>
                <p className="item"> Go shopping </p>
                <p className="item"> Go for a walk </p>
                <p> Logged Status: {isLoggedIn ? 'true' : 'false'}, {jwtToken} </p>
                <button className='ui button primary' onClick={changeTheme}> Check Todos </button>
            </div>
        </Fragment>
    )
}

// Exporting  
export default TodoList; 
