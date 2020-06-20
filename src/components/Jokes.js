import React, { Component } from 'react';
import Joke from './Joke';

class Jokes extends Component {
  state = { joke: {}, jokes: [] }

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message));

  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error => alert(error.message));
  }

  render() {
    const joke = this.state.joke;
    const jokes = this.state.jokes;

    return (
      <div>
        <h2>Highlighted Joke </h2>
        <Joke joke={joke}/>
        <hr />
        <button onClick={this.fetchJokes}>Do you want 10 new jokes?</button>
        {jokes.map(joke => (<Joke key={joke.id} joke={joke}/>))}
      </div>
    )
  }
}

export default Jokes;