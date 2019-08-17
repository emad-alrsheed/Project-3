import React from 'react';
import Navbar from './components/Navbar';
import VideoFrame from './components/VideoFrame';
import SearchResults from './components/SearchResults';
import axios from 'axios';

class App extends React.Component {
  state = {
    items: [],
    descriptionArray: [],
    statistics: {},
    selected: {}
  }

  changeSelected = (search) => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: 'AIzaSyAy_sRCI9_Uvzd6zEn7AuZoWnRQHUjg0XA',
        maxResults: 50,
        q: search,
        type: 'video'//very important to get only video
      }
    }).then(response => {
      this.setState({ items: response.data.items, selected: response.data.items[0] })
      this.videoDescription(response.data.items[0]);
    })
      .catch(error => { console.log(error) })
  }

  videoDescription = (item) => {//to get statistics like numOf Views
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: "statistics",
        key: 'AIzaSyAy_sRCI9_Uvzd6zEn7AuZoWnRQHUjg0XA',
        id: item.id.videoId
      }
    }).then(response => {
      this.setState({ statistics: response.data.items[0].statistics })
      // console.log('this.st', this.state.statistics);
    })
      .catch(error => { console.log(error) })
    //to get full description and more details on delected video
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: "snippet",
        key: 'AIzaSyAy_sRCI9_Uvzd6zEn7AuZoWnRQHUjg0XA',
        id: item.id.videoId
      }
    }).then(response => {
      this.setState({ selected: response.data.items[0] })
      this.setState({ descriptionArray: response.data.items[0].snippet.description.split('\n') })
    })
      .catch(error => { console.log(error) })
    // console.log('this.description', this.state.descriptionArray);
  }
  selectVideo = async (item) => {
    this.setState({ selected: item })
    await this.videoDescription(item)
    window.scrollTo(0, 0)

  }
  reload = () => {
    this.setState({ items: [], selected: {} })
  }
  render() {
    const { items, selected, statistics, descriptionArray } = this.state
    const { changeSelected, reload, selectVideo } = this
    return (
      <>
        <Navbar reload={reload} changeSelected={changeSelected} />
        <VideoFrame descriptionArray={descriptionArray} statistics={statistics} selected={selected} />
        <div className="float-right col-12 col-md-3 col-xl-4 py-4 px-4 ">
          <SearchResults selected={selected} items={items} selectVideo={selectVideo} />
        </div>
      </>
    );
  }
}
export default App;