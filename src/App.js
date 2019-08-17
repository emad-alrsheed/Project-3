import React, { Component } from 'react';
import SearchBar from './comp/SearchBar';
import MainVideo from './comp/MainVideo';
import Play from './comp/Play';
import Pop from './comp/Pop';
class App extends Component {

  state = {
    data: [],
    pop: [],
    index: 0
  }

  componentDidMount = async () => {
     let videosUrl = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBmgNJ5NE-5rpMZQbYeAmc_-rD7y9AqHJM&part=snippet&chart=mostpopular&maxResults=12`)
     let UrlJ = await videosUrl.json()
     let UrlArray = UrlJ.items
      let VideoArray = UrlArray.map(elem => {
      let ids = `https://www.youtube.com/embed/${elem.id}`
      let descrip = elem.snippet.title
      let arr = { name: ids, title: descrip };
      return arr
    })
    this.setState({ pop: VideoArray })
  }

  videoButton = async (val) => {
    let videosUrl = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBmgNJ5NE-5rpMZQbYeAmc_-rD7y9AqHJM&q=${val}&part=snippet&maxResults=9&type=video`)

    let UrlJ = await videosUrl.json()
    let UrlArray = UrlJ.items
    let VideoArray = UrlArray.map(elem => {
      let ids = `https://www.youtube.com/embed/${elem.id.videoId}`
      let descrip = elem.snippet.title
      let breif = elem.snippet.description.substring(0, 150)
      let img = elem.snippet.thumbnails.medium.url
      let channel = elem.snippet.channelTitle
      let published = elem.snippet.publishedAt.substring(0, 4)
      let arr = { name: ids, title: descrip, breif, img, channel, published };
      return arr
    })
    this.setState({ data: VideoArray })
  }

  change = (i) => {
    this.setState({ index: i })
  }

  render() {
    const length = (this.state.data).length;
    const i = this.state.index
    return (
      < >
        <SearchBar videoButton={this.videoButton} />
        {length === 0 && <p style={{ fontSize: "25px", textAlign: "center", background: "red", color: "white" }} className="badge  ">Trending<span role="img" aria-label="fire" >🔥</span></p>}
        <div className="row">
          {length > 0 && <MainVideo src={this.state.data[i]} />}
          {<Play src={this.state.data} change={this.change} />}
        </div>
        <div className="row ">
          {length === 0 && this.state.pop.map((elem, i) => <Pop key={i} title={elem.title} src={elem.name} channel={elem.channel} />)}
        </div>

      </>
    );
  }
}
export default App;
