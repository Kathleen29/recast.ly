var VideoListEntry = (props) => { // Fix the mustache brackets
  let video = props.video; // Correct the video result

  return( // Add the return
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => props.click(video)}>{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  )
};
// onClick={() => props.playing = video}

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//     <div className="video-list-entry media">
//       <div className="media-left media-middle">
//         <img className="media-object" src={this.props.video.video.snippet.thumbnails.default.url} alt="" />
//       </div>
//       <div className="media-body">
//         <div className="video-list-entry-title">{this.props.video.video.snippet.title}</div>
//         <div className="video-list-entry-detail">{this.props.video.video.snippet.description}</div>
//       </div>
//     </div>
//     );
//   }
// }

// React.render(<VideoListEntry />, document.getElementById("video-list"))

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;