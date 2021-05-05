import axios from "axios";
const KEY = "AIzaSyBJ_h4GSLbtdKi7ZDhrllwi090mvt7oGyU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
