import React from 'react';
import './friends-playlist.css';
const FriendsPlaylist = props => {
  return(
    <div className="FriendsPlaylist">     
      {
        props.friendsPlaylist &&
        <div>
        <p>Playlist de Amigos</p>
          <div className="FriendsListContainer">
            
            {
              props.friendsPlaylist.map(friend => {
              return  <div 
                        key={friend.id}
                        className="Friend">
                        <img className="ImgFriend" src={friend.profileImg}/>
                        <span className="NameFriend">{friend.name}</span>
                      </div>
              })
            }        
          </div>
        </div>
      }
    </div>
  )
}

export default FriendsPlaylist;