
import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/PlayList.css'

class PlayListItem extends Component {
  render() {
    const song = this.props.song;
    return (
      <div className="card p-3 text-left">
        <p><strong>User: </strong>{song.userName}</p>
        <p><strong>Artist/Band: </strong>{song.songArtist}</p>
        <p><strong>Title: </strong>{song.songTitle}</p>
        <p><strong>Notes: </strong>{song.songNotes}</p>
      </div>
    );
  }
}

export default PlayListItem;
