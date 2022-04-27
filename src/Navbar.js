import React from "react";
import { useEffect } from "react";
import axios from "axios";

function Navbar({ search, selecttype }) {
  const [input, setInput] = React.useState("");
  const [inputtype, setInputtype] = React.useState("");
  const [typeapi, setTypeapi] = React.useState([]);
  // const [pokemonapiname, setPokemonApiName] = React.useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${inputtype}`)
      .then( async (response) => {
        // console.log(response.data.pokemon);
      setTypeapi(response.data.pokemon);
          console.log(typeapi)
      });


  }, [inputtype,typeapi]);

  const searchInput = (e) => {
    setInput(e.target.value);
  };
  const searchType = (e) => {
    setInputtype(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <nav className="navbar navbar-bark ">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Pokedex
          </a>
          <form className="d-flex" onSubmit={handleSubmit}>
            <select name="poketype" onChange={searchType} value={inputtype}>
              <option value=""> Pokemon Type</option>
              <option value="normal">normal</option>
              <option value="fighting">fighting</option>
              <option value="flying">flying</option>
              <option value="poison">poison</option>
              <option value="ground">ground</option>

              <option value="rock">rock</option>
              <option value="bug">bug</option>
              <option value="ghost">ghost</option>
              <option value="steel">steel</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
              <option value="grass">grass</option>
              <option value="electric">electric</option>
              <option value="psychic">psychic</option>
              <option value="ice">ice</option>

              <option value="dragon">dragon</option>
              <option value="dark">dark</option>
              <option value="fairy">fairy</option>
              <option value="unknown">unknown</option>
              <option value="shadow">shadow</option>
            </select>
            <button
              className="btn btn-success"
              onClick={() => selecttype(inputtype)}
            >
              Search
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchInput}
              value={input}
            />
            <button className="btn btn-success" onClick={() => search(input)}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
