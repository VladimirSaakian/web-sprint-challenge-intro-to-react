import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'

const Star = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem;
  
`;

const StyledH1 = styled.h1`
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
  font-size: 3rem;
  right: 25px;
`;


export default function App() {
  const [apiData, setApiData] = useState([])       

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => {
      setApiData(res.data)
    })
    .catch(ERR => {
      console.log('ERR');
    })
  }, [])


  return (
    <>
      <Star>
        <StyledH1>STAR WARS CHARACTERS</StyledH1>
      </Star>
        <Character apiData={apiData}/>           
    </>
  );
}

