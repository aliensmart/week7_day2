import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  state = {
    personList: ['Justin Sarraga', 'Greg Smith'],
    firstName: " ",
    lastName: " "
  }

  addPerson = (event) => {
    const personList = [...this.state.personList];
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    console.log(firstName)
    console.log(lastName)
    const name = firstName + " " + lastName
    personList.push(name);
    this.setState({personList: personList})
  }

  setFirstName = (firstName) => {
    this.setState({firstName: firstName})
  }

  setLastName = (lastName) => {
    this.setState({lastName: lastName})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '1px',
      cursor: 'pointer'
    };

    const personList = (
      <div>
        {this.state.personList.map((person, index) => {
          console.log(person)
          return <Person
          name={person} 
          key={index} />
        })}
      </div>
    )
  
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p> This is working </p>
          <form id="userInput">
            <input type="text" id="firstName" value={this.state.firstName} onChange={(event) => this.setFirstName(event.target.value)}/>
            <input type="text" id="lastName" value={this.state.lastName} onChange={(event) => this.setLastName(event.target.value)}/>
          </form>
          <button style={style} onClick={(event) => this.addPerson(event.target)}>Add</button>
          {/* render all of our People from state*/}
          {personList}
        </div>
      )
  }
}


export default App;
