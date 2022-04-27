import React from "react";
import { memo } from "react";
import ReactLoading from 'react-loading';



function PokemonList({ pokedata, loading,infoPokemon }) {

  return (
    <>
      
      {loading ? (
        <ReactLoading  className="load" type="spinningBubbles" color="#fff" />
      ) : (
        pokedata.map((item) => {
         
          return (
            <>
              <div className="card" key={item.id} onClick={()=>infoPokemon(item)} >
                <p>{item.id}</p>
                <div className="image">
                  <img src={item.sprites.front_default} alt="" />
                </div>
                <div className="name">
                  <p> <b>Name :</b> {item.name}</p>
                </div>
                <div className="type">
                  <p> <b>Type :</b> {item.types[0].type.name} </p>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default memo(PokemonList);
