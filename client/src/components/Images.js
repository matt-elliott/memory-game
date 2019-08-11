import React, {Component} from 'react';
import imageData from '../data/images.json';

class Images extends Component {
  state = {
    images: [],
    score: 0,
    highScore: 0
  }

  componentDidMount() {
    this.processImages();
  }
  processImages = () => {
    const dataString = JSON.stringify(imageData);
    const expireDate = new Date('08/10/20').toUTCString();
    const now = new Date().toUTCString();
    let localData = localStorage.getItem('memory-game-images');
    const localExpire = localStorage.getItem('memory-game-die');

    if(localData === null) {
      localStorage.setItem('memory-game-images', dataString);
      localStorage.setItem('memory-game-die', expireDate);
      localData = localStorage.getItem('memory-game-images');
    } else {
      //dont set string and check if we should delete
      if(localExpire === now) {
        localStorage.removeItem('memory-game-images');
      }
    }
    
    let imagesArray = [];
    JSON.parse(localData).forEach(item => {
      imagesArray.push(item);
    })

    this.setState({
      images: imagesArray
    }, () => {
      console.log(imagesArray);
    });
  }

  imageClickHandler = () => {
    console.log('clicked');
    // • get element id and find it in the data
    // • check if clicked === true
    //     • end the game
    //     • else set clicked to true on matched data item
    //         > restart game
    // • if score > image.length
    //     • show win game alert
    //     > restart game
  }

  render() {
    return (
      <div class="images">
        {this.state.images.map(image => {
        return (
          <figure
            className="col border"
            id={image.id}
            onClick={this.imageClickHandler}>
             <img src={image.src} alt="Click to Play" />
          </figure>
        )
      })}
    </div>
    )
  }
}

export default Images;