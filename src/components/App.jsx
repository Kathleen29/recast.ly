class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    }
  }
  fetch(query) {
    var options = {
      query: query
    }
    searchYouTube(options, (videos) =>
      this.setState({
        currentVideo: videos[0],
        videoList: videos
      })
    )
  }

  onListItemClick(video) {
    this.setState({
        currentVideo: video
    })
    var options = {
      id: this.state.currentVideo.id.videoId
    }
    searchRelated(options, (videos) =>
    this.setState({
      videoList: videos
    })
  )
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search fetch={this.fetch.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer currentVideo={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div id="videoList">
              <VideoList videoList={this.state.videoList} playing={this.state.currentVideo} onClick={this.onListItemClick.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import searchRelated from '../lib/searchRelatedYouTube.js';

React.render(<App />, document.getElementById("app"));