import React from 'react';
import './related-playlist.css';
const RelatedPlaylist = props => {
  return(
    <section className="RelatedPlaylist">
      {
        props.myPlaylist &&
        <div>
          <p className="RelatedPlaylistTitle"> Mi Playlist</p>
          <div className="RelatedPlaylistContainer">
          {
            
            
            props.myPlaylist.map((item,index = 0) => {
              index ++;
              return <div key={item.id} className="RelatedPlaylistList">
                        <span className="RelatedPlaylistIndex">{index}</span> <span className="RelatedPlaylistListTitle"> {item.title} </span>
                      </div>
            })
          }      
          </div>
        </div>
      }
      
    </section>
  )
}

export default RelatedPlaylist;