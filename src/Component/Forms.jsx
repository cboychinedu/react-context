// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react'; 
import { ThemeContext } from '../Contexts/ThemeContext';

// Creating the UI component 
class FormField extends Component {
    // State 
    state = {} 

    // 
    static contextType = ThemeContext; 

    // Render 
    render() {
        const { changeTheme } = this.context; 
        return(
            <Fragment> 
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit' className="submit-button">Submit</Button>
                    <Button type="submit" className="change-theme" onClick={changeTheme}> Change Theme </Button>
                </Form>
            </Fragment>
        )
    }
}

// Exporting 
export default FormField; 










