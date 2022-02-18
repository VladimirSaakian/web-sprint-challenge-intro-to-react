// Write your Character component here
import React from 'react';
import '../App.css'
import styled from 'styled-components'

// you can use {createGlobalStyle} from styled-components to style the body and html 
// https://styled-components.com/docs/api#createglobalstyle 

const UnorderedListContainer = styled.ul`
    position: relative;
    margin: 3rem;
    margin-top: 1rem;
    z-index: 1;
    margin-top: 3rem;
    
`;


const ListNames = styled.li`
  list-style-type: none;
  color: black;
  font-size: 1.4rem;
  margin: 1.8rem;
  font-weight: 1000;
  text-align: center; 
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #DA2C43,
    0 0 82px #DA2C43,
    0 0 92px #DA2C43,
    0 0 102px #DA2C43,
    0 0 151px #DA2C43;
`;



export default function Characters(props) {
    const apiData = props.apiData;                                                   // This removes the need got having to type 'props'.
    console.log(apiData);           

    return (
        <div class="test">
            <UnorderedListContainer>                                   
                {apiData.map(i => <ListNames>{i.name}</ListNames>)}              
            </UnorderedListContainer>
        </div>
    )
}