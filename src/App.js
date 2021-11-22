import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  state = {
    monsters: [],
    seacrField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ seacrField: event.target.value });
  };

  render() {
    const { monsters, seacrField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(seacrField.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
