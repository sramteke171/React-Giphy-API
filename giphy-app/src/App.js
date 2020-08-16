import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GiphyList from "./GiphyList";
import Giphy from "./Giphy";

class App extends Component {
  constructor() {
    super();

    this.state = {
      giphies: [],
      searchInput: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(
        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/",
        "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=${userInput}",
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

  randomGiphy = (event) => {
    // return <GiphyList giphies={this.state.giphies} />;
    // <img src={props.giphy.images.original.url}></img>;

    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/"
      )
      .then((response) => {
        this.setState({
          giphies: response.data.data,
        });
      });
  };

  trendingGiphy = (event) => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=sport"
      )
      .then((response) => {
        this.setState({
          giphies: response.data.data,

          // return(" <div> <img src={props.giphy.images.original.url}></img> </div>")
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log("event.target.value", event.target.value);
  };

  //search
  handleSearch = (event) => {
    event.preventDefault();

    this.setState({
      searchInput: this.state.searchInput,
    });
    console.log("handleSearch- this.state.searchInput", this.state.searchInput);

    let url = `https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=${this.state.searchInput}/`;
    console.log(url);

    axios
      .get(
        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/"
        // https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/

        `https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=${this.state.searchInput}/`
      )
      .then((response) => {
        this.setState({
          giphies: response.data.data,
        });

        console.log(this.state.giphies);
      })
      .catch((error) => {
        console.log("Error", error);
      });
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
          <input
            name="searchInput"
            type="text"
            value={this.state.searchInput}
            placeholder="search Input"
            onChange={this.handleChange}
          ></input>
          <input
            type="submit"
            value="Get Gif!"
            onClick={this.handleSearch}
          ></input>
        </div>
        <GiphyList giphies={this.state.giphies} />
      </div>
    );
  }
}

export default App;
