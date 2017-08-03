import React, {Component} from 'react';
import '../styles/App.css';
import PlayListItem from './PlayListItem';
import '../styles/PlayList.css'

class PlayList extends Component {
  constructor() {
    super()
    this.state = {
      songs: []
    };
  }
  async componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
  render() {
    return (
      <div className="col-sm-6 form">
        <div className="row">
          <button type="button" onClick={this.fetchData} className="btn btn-success">Update List</button>
          { this.state.songs && this.state.songs.map(song => {
            return <PlayListItem song={song} />
          })}
        </div>
      </div>
    );
  }
}

export default PlayList;
