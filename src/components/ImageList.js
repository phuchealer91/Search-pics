import React, { Component } from 'react'
import ImageCard from './ImageCard';
export default class ImageList extends Component {
    render() {
        const {images} = this.props;
        // console.log(images);
        const elements = images.map((image)=>{
            return  <ImageCard key={image.id} image={image}/>
        })
        return (
            <div className="ui container">
            <div className="image-list">
                {elements}
            </div>
            </div>
        )
    }
}
