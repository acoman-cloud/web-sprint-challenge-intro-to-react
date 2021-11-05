import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character'
import Info from './components/Info'
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
  const [id, setId] = useState()
  const [open, setOpen] = useState(null)

  const url = id => {
    setId(id)
  }

  const sesame = id=>{
    setOpen(true)
  }

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
      <h1 className="Header">Star Wars Characters</h1>
      <Character character={character} url={url} open={sesame} />
      <Info character={character} id={id} />
      
    </StyledDiv>
  );
}

export default App;
