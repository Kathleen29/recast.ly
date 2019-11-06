import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = (props) => { // Fix the mustache brackets
  let videos = props.videoList; // Define videos
  // Wrap the JSX in returns
  return (
    <div className="video-list" id="video-list">
      {videos.map(video => {
        // No return statements thus no result
        return <VideoListEntry video={video} key={video.id.videoId} playing={props.playing} click={props.onClick} />
      })}
    </div>
  )
};
// React.render(<VideoList />, document.getElementById("videoList"));

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;