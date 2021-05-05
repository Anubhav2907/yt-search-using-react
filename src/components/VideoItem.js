import React from "react";
import './VideoItem.css'
const VideoItem = ({ vid , onVideoSelect}) => {
  return (
    <div onClick = {() => onVideoSelect(vid)} className="video-item item">
      <img
        className="ui image"
        alt={`${vid.snippet.description}`}
        src={`${vid.snippet.thumbnails.default.url}`}
      ></img>
      <div className="content">
        <div className="header">{vid.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
