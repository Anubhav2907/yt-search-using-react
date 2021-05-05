import youtube from "../api/youtube";
import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
      </div>
    );
  }
}
export default App;
