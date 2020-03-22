import React, { Component } from 'react'
// import axios from 'axios';
import SearchBar from './SearchBar';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';
export default class App extends Component {
  state = {
    images: []
  }
  onSearchSumit = async term => {
     const response = await Unsplash.get('https://api.unsplash.com/search/photos',{
        params: {query : term},
        
      })

    this.setState({
      images: response.data.results
    })
  }
  render() {
    const {images} = this.state;
    // const element = images.length ? images.length : 'không có kết quả'
    return (

      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onRetriveForm={this.onSearchSumit}/>
        {/* <h5>Found: {element} images</h5> */}
        <ImageList images={images}/>
      </div>
    )
  }
}
