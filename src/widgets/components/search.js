import React from 'react';
import './search.css';
const Search = (props) => ( // si solo vas a devolver UI puedes hacerlo en forma de arrow sin usar return
  <form 
    onSubmit={props.handleSubmit} 
    className="Search"
  >
    <input className="Search-input"
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      type="text" 
      name="search"
      // defaultValue="Luis Fonsi"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search;