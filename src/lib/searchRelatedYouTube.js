var searchRelated = ({id, max = 5}, callback) => {
  $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&type=video&relatedToVideoId=${id}&key=${YOUTUBE_API_KEY}`, function(data, status) {
    callback(data.items);
  })
}
  import YOUTUBE_API_KEY from '../config/youtube.js';
  export default searchRelated;


