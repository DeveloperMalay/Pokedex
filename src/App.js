import axios from "axios";
import React from "react";
import PokemonList from "./PokemonList";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PokeInfo from "./PokeInfo";
import PokemonName from "./PokemonName";

export default function App() {
  const [pokedata, setPokedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [pokedex, setPokedex] = useState();
  const [search, setSearch] = useState();
  const[type1, setType1] = useState();
  const selecttype = (type) => {
    setType1(type);
  };
  const searchData = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    const getPokemonData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setPrevUrl(res.data.previous);
      setNextUrl(res.data.next);
      getPokemon(res.data.results);
      setLoading(false);
      console.log(res.data.results);
    };
    const getPokemon = async (res) => {
      res.map(async (item) => {
        const result = await axios.get(item.url);
        setPokedata((state) => {
          state = [...state, result.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };

    getPokemonData();
  }, [url]);

  return (
    <div className="app">
      <div className="navigationbar">
        <Navbar search={searchData} selecttype={selecttype}/>
      </div>
      <div className="header">
        <h1>Pokemon Lists </h1>
      </div>
      <div className="cards">
        {!search ? (
          <PokemonList
            pokedata={pokedata}
            loading={loading}
            infoPokemon={(poke) => setPokedex(poke)}
          />
        ) : (
          <PokemonName search={search} />
        )}
      </div>
      <div className="details">{!search && <PokeInfo pokedex={pokedex} />}</div>
      <div className="btn">
        {!search && (
          <div className="btns">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokedata([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {
              <button
                onClick={() => {
                  setPokedata([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            }
          </div>
        )}
      </div>
    </div>
  );
}
