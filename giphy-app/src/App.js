import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GiphyList from "./GiphyList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      giphies: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/",
        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=${userInput}",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        this.setState({
          giphies: response.data.data,
        });
      });
  };
  randomGiphy = () => {
    alert("Random giphy ");
  };
  trendingGiphy = () => {
    alert("Trending Giphy");
  };
  getGif = () => {
    alert("Get Gif");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Giphy!</h1>
        </header>
        <div>
          <input
            type="submit"
            value="Get random giphy!"
            onClick={this.randomGiphy}
          ></input>
          <input
            type="submit"
            value="Get trending giphy!"
            onClick={this.trendingGiphy}
          ></input>
          <input name="search" type="text" value={this.state.search}></input>
          <input type="submit" value="Get Gif!" onClick={this.getGif}></input>
        </div>
        <GiphyList giphies={this.state.giphies} />
      </div>
    );
  }
}

export default App;
