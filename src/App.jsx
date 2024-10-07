import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Header from './Header'
import MemoryBoard from './MemoryBoard';

//to shuffle array 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const pokemonUrls = [
  "https://pokeapi.co/api/v2/pokemon/1/",
  "https://pokeapi.co/api/v2/pokemon/2/",
  "https://pokeapi.co/api/v2/pokemon/3/",
  "https://pokeapi.co/api/v2/pokemon/4/",
  "https://pokeapi.co/api/v2/pokemon/5/",
  "https://pokeapi.co/api/v2/pokemon/6/",
  "https://pokeapi.co/api/v2/pokemon/7/",
  "https://pokeapi.co/api/v2/pokemon/8/",
  "https://pokeapi.co/api/v2/pokemon/9/",
  "https://pokeapi.co/api/v2/pokemon/10/",
  "https://pokeapi.co/api/v2/pokemon/11/",
  "https://pokeapi.co/api/v2/pokemon/12/",
];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [clickedItem, setClickedItem] = useState([]);

  const setItemClicked = (id) => {
    setClickedItem((prev) => [...prev, id]);
  }

  const handleClick = (e) => {
    const id = e.currentTarget.dataset.id

    if (clickedItem.includes(id)) {
      resetGame();
      
    } else {
      setScore(score + 1)
      const currentScore = score + 1;
      setItemClicked(id);

      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    }

    //shuffle cards
    setPokemonData((prevData) => shuffleArray([...prevData]));
  }

  function resetGame () {

    setScore(0)

    setClickedItem([])
  }

  //fetch api section

    const getPokemonData = async () => {
        try {
          const pokemonDetails = await Promise.all(
            pokemonUrls.map(async (url) => {
              const response = await fetch(url);
              const data = await response.json();
              return {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
              };
            })
          );
    
          setPokemonData(pokemonDetails);
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        }
      };
    
      //fetch data on component mount
      useEffect(() => {
        getPokemonData();
      }, []);

  return (
    <>
      <Header
      score={score}
      bestScore={bestScore}
      />
      <MemoryBoard
      onClick={handleClick}
      pokemonData={pokemonData}
      />
    </>
  )
}

export default App
