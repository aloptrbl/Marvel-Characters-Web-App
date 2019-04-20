import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { getAverageRGBA } from "color-picture";
import {Container, Row} from 'reactstrap';
import './App.css';
const App = () => {

  const [heros, setHeros] = useState([]);


  useEffect( () => {
    getHero();
    //getColor();
  }, []);

  const Alphabet = String.fromCharCode(97+Math.floor(Math.random() * 26));

  const getHero = async () => {
    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${Alphabet}&apikey=0fb1ad7e51c28c3cdf6f6e5981c54026&ts=1555713289&hash=6a1855ea29069b6f819aa052a7f26b68`);
    const data = await response.json();
    console.log(data.data.results);
    setHeros(data.data.results);
    
    //  fetch()
    //.then(response =>{
      //response.json()
    //})

  }





    //const getColor = async () => {
      //  const img = document.querySelector('.img');
        //const backgr = getAverageRGBA(img);
        //console.log(backgr);
        //document.body.style.backgroundColor = backgr;
    //}

  return(
<div className="App">
<Header heros={heros} />
<Container>
<Row>
{heros.map(hero =>(
  <Hero name={hero.name} key={hero.name} thumbnail={hero.thumbnail} description={hero.description} />
))}
</Row>
</Container>
</div>
  );
}

export default App;
