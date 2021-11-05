import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character'
import './App.css';

const StyledDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([])

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
      .then(esp=>{
        setCharacter(esp.data);
      })
      .catch(err=>{
        console.error(err);
      })
  }, [])

  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      <Character character={character} />
    </StyledDiv>
  );
}

export default App;
