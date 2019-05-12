import React, { Component } from "react";
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import Container from './components/container/Container';
import Images from './components/images/Images'
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    maxScore: 10,
    message: "Pick a character to begin!",
    messageClass: "",
    characters: characters
  };

  shuffle = (array) => {

    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;

  }

  correctChoice = () => {

    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 })
    }
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: this.state.score + 1, message: "You know them!", messageClass: "Correct" })
    } else {
      this.setState({ score: this.state.score + 1, message: "Pick your next character, correct!!", messageClass: "Correct" })
    }

  }


  wrongChoice = () => {

    this.setState({ score: 0, message: "you already picked that person! Right?" })
    const updatedCharacter = this.state.characters.map(uc => uc.isClicked === (true) ? { ...uc, isClicked: false } : uc)
    return updatedCharacter

  }

  winReset = (correctCharacter) => {

    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: 0, topScore: 0 })
      const updatedCharacter = correctCharacter.map(uc => (true) ? { ...uc, isClicked: false } : uc)
      return updatedCharacter
    } else {
      return correctCharacter
    }

  }

  randomCharacter = (name) => {

    var resetNeeded = false;
    const characters = this.state.character.map(uc => {
      if (uc.name === name) {
        if (uc.isClicked === false) {
          this.correctChoice()
          return { ...uc, isClicked: true }
        } else {
          resetNeeded = true
          return { ...uc, isClicked: false }
        }
      }
      return uc
    })
    if (resetNeeded) {
      this.setState({
        characters: this.shuffle(this.wrongChoice()),
        messageClass: "incorrect"
      })

    } else {
      this.setState({ characters: this.shuffle(this.winReset(characters)) })
    }

  } //close randomCharacter

  renderCharacter = () => {

    return this.state.characters.map((character) =>
      <Images
        image={character.image}
        name={character.name}
        key={character.id}
        onClick={this.randomizeCharacter}
      />
    );
  }

  render() {
    return (
      <div className="App">    
        <Navbar
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />
        
        <Jumbotron />
        <Container/>

       
            {this.renderCharacter()} 
            </div>
         
    
        );
      
      }
    }
    
    export default App;
