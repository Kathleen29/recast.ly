var searchYouTube = ({query, max = 5}, callback) => {
  $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${YOUTUBE_API_KEY}`, function(data, status) {
    callback(data.items);
  })
  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   part: 'snippet',
  //   key: YOUTUBE_API_KEY,
  //   q: query,
  //   maxResults: max,
  //   type: 'video',
  //   videoEmbeddable: true
  // });
};

import YOUTUBE_API_KEY from '../config/youtube.js';
export default searchYouTube;
// GET https://www.googleapis.com/youtube/v3/search
// 'https://www.googleapis.com/youtube/v3/search?part=dog&key=

////export { MyText, GreetName };