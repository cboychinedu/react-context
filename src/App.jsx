// Importing the necessary modules 
import "./App.css"; 
import { Input, Container } from "semantic-ui-react";
import PaginationExampleCompact from "./Component/Pagnation"; 
import Paragraph from "./Component/Paragraph"; 
import Navbar from "./Component/Navbar";
import FormField from "./Component/Forms"; 
import { Component, Fragment } from "react";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { ThemeContextProvider } from "./Contexts/ThemeContext";


// Creating the App UI component
class App extends Component {
  // Creating the state 
  state = {}

  // Creating a function for handling submit 
  handleSumit = () => {
    console.log("Button CLicked")
  }

  // Render 
  render() {
    return (
      <AuthContextProvider>
        <ThemeContextProvider> 
          <div className="App">
              {/* Adding the navbar */}
              <Navbar /> 

              {/* Adding the segment container */}
              <div className="ui segment container">

                {/* Search button */}
                <Input action={{
                  onClick: this.handleSumit, 
                  icon: 'search'
                }} placeholder='Search...'/> < br/> 
      
                <Container text className="container">

                    {/* Adding the paragraph */}
                    <Paragraph /> 

                    {/* Adding the Forms  */}
                    <FormField /> 
        
                    {/* Adding pagnations */}
                  < PaginationExampleCompact /> 
                </Container>
              </div>
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
    )
  }
}

// Exporting the App component 
export default App;
