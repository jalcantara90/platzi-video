import React from 'react';
import './search.css';
import SearchSVG from '../../icons/components/search';
const Search = (props) => ( // si solo vas a devolver UI puedes hacerlo en forma de arrow sin usar return
  <form 
    onSubmit={props.handleSubmit} 
    className="Search"
  >
    <input className="Search-input"
      ref={props.setRef}
      placeholder="Busca tu vídeo favorito"
      type="text" 
      name="search"
      // defaultValue="Luis Fonsi"
      onChange={props.handleChange}
      value={props.value}
    />
    <span className="Search-icon">
      <SearchSVG  size={35} color="#6f737c"/>
    </span>
  </form>
)

export default Search;