import exampleVideoData from '../data/exampleVideoData.js';

var VideoPlayer = (props) => {
  // console.log(props);
  let video = props.currentVideo;
  let src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={src} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

// React.render(<VideoPlayer />, document.getElementById("videoPlayer"));

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
