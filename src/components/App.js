import youtube from "../api/youtube";
import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: results.data.items });
  };
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
      </div>
    );
  }
}
export default App;
