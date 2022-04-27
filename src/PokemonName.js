import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PokemonName({ search}) {
  const [apidata, setApiData] = useState([]);
  const[type,setType]=useState([])

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((response) => {
        setApiData(response.data);
        setType(response.data.types[0].type.name)
      });
  }, []);
  return (
    <>
      <div className="card new" >
        <p>{apidata.id}</p>
        <div className="image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${apidata.id}.svg`}
            alt=""
          />
        </div>
        <div className="name">
          <p>
            <b></b>
            {apidata.name}
          </p>
        </div>
        <div className="type">
          <p>
            <b></b> {type}
          </p>
        </div>
      </div>
    </>
  );
}

export default PokemonName;
