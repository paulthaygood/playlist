import React, { Component } from "react";
import "../styles/App.css";
import '../styles/PlayListForm.css'

class PlayListForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  addToList = (e) => {
    e.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    });
  };
  render() {
    return (
      <div className="col-sm-6 form">
        <form className="text-left" onSubmit={this.addToList}>
          <label htmlFor="username">User Name:</label>
          <input onChange={this.handleChange} value={this.state.userName} className="form-control" name="userName" placeholder="Name or User Name" />
          <label htmlFor="artist">Artist/Band:</label>
          <input onChange={this.handleChange} value={this.state.songArtist} className="form-control" name="songArtist" placeholder="Artist or Band Name" />
          <label htmlFor="song">Song Title:</label>
          <input onChange={this.handleChange} value={this.state.SongTitle} className="form-control" name="songTitle" placeholder="Song Title" />
          <label htmlFor="notes">Song Notes:</label>
          <textarea onChange={this.handleChange} value={this.state.songNotes} className="form-control" name="songNotes" placeholder="Notes about Song" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default PlayListForm;
