// Importing the necessary modules 
import { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import { ThemeContext } from "../Contexts/ThemeContext";

// Creating the UI component 
class Paragraph extends Component {
    // Setting the state 
    state = {} 

    // Render 
    render() {
        // console.log(this.context)
        return(
            <ThemeContext.Consumer>{(context) => {
                const { isDarkTheme, darkTheme, lightTheme } = context
                const theme = isDarkTheme ? darkTheme : lightTheme; 
                return(
                        <Fragment> 
                            <Header as='h2'>Header</Header>
                            <p style={{backgroundColor: theme.background, color: theme.text}}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                        </Fragment>
                    )
                }
            }

            </ThemeContext.Consumer>
            
        )
    }
}

// Exporting  
export default Paragraph; 