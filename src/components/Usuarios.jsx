import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Usuarios() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getData();
  }, []);

  const getData = async() => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const pokemonData = await Promise.all(
      res.data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return response.data;
      })
    );
    setData(pokemonData);
  };

  return (
    <div className='p-4 px-24 grid gap-6 grid-cols-4'>
      {
        data.map((pokemon, index) => (
          <div className='text-white' key={index}>
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          
        ))
      }
    </div>
  );
}
