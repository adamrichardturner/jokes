import React, { useState } from 'react';
import './App.css';
import Joke from './components/Joke'
import Button from './components/Button'

function App() {

  const [joke, setJoke] = useState('Select a joke type and click the button to start...');

  const getJokes = () => {
    const url = 'https://v2.jokeapi.dev/joke/';
    const type = jokeType;
    const excl = 'blacklistFlags=religious,racist,sexist,explicit'
    const form = 'type=single';
    const endpoint = `${url}/${type}?${excl}&${form}`;
    fetch(endpoint).then(response => response.json()).then(data => setJoke(data.joke));
  }

  const [jokeType, setJokeType] = useState('Pun');

  const handleChange = (event) => {
    event.preventDefault();
    setJokeType(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setJoke(getJokes());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke Generator</h1>
        <Joke joke={joke}/>
        <form onSubmit={handleSubmit}>
        <div>
            <select value={jokeType} onChange={handleChange} name="Type" id="joke-type">
                <option value="Pun">Pun</option>
                <option value="Programming">Programming</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Dark">Dark</option>
            </select>
        </div>
          <Button type="submit" value="submit"/>
        </form>
        
      </header>
    </div>
  );
}

export default App;
