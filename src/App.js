import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Images from './components/Images'

class App extends Component {
  state =  {

  
  
  }
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Jumbotron/>
      <Container>
      
  
        <Images 
          
        />
      </Container>
     
      </div>
    );
  }
  
}

export default App;
