import React from 'react'
import MediaContainer from '../container/media';

import './playlist.css';

function Playlist (props) {
  // const playlist = props.data.categories[0].playlist;
  return(
    <div className="Playlist">

       {
        props.playlist.map(mediaId => {
          return  <MediaContainer openModal={props.handleOpenModal}  id={mediaId} key={mediaId}/>
         })
        }    
    </div>
  )
}

export default Playlist