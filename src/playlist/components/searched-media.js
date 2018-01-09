import React from 'react';
import './searched-media.css';
import Media from './media';

function SearchedMedia(props) {
  return(
    <div className="SearchedMedia">
      <h2 className="SearchTitle">Resultados de la busqueda: </h2>
      {
        props.playlist.map(item => {
         return  <div className="SearchedItem" key={item.id}>
                    <Media openModal={props.handleOpenModal} {...item} />
                  </div>
        })
      }
    </div>

  )
}

export default SearchedMedia;