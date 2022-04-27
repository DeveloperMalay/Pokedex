import React from "react";

function PokeInfo({ pokedex }) {
 
  return (
    <>
      {!pokedex ? (
        ""
      ) : (
        <div key={pokedex.name}>
          <h1>{pokedex.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokedex.id}.svg`}
            alt=""
          />
          <div className="abilites">
            {pokedex.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h6>{poke.ability.name}</h6>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-sta">
            {pokedex.stats.map((poke) => {
              return (
                <>
                  <h5>
                    {poke.stat.name}:{poke.base_stat}{" "}
                  </h5>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default PokeInfo;
