import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
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
    });
  }

  imageClickHandler = async event => {
    console.log('clicked');
    let id = parseInt(event.currentTarget.id);
    let match = await this.state.images.find( item => item.id === id);

    // • check if clicked === true
    console.log(match.clicked);
    if(match.clicked === true) {
      alert('You Lose!');
      this.setState({
        score: 0
      });
      window.location = '/';
    } else {
      match.clicked = true;
      this.setState({
        score: ++this.state.score
      }, () => {
        if(this.state.score > this.state.images.length - (this.state.images.length / 3)) {
          alert('You Win!');

          this.setState({
            score: 0
          });

          window.location = '/';
        }
      }); 
    }
  }

  render() {
    return (
      <Row>
        {this.state.images.map(image => {
        return (
          <figure
            className="col-sm-6 col-md-4 border"
            id={image.id}
            onClick={this.imageClickHandler}
            style={{maxHeight: '200px', overflow: 'hidden', padding: '15px'}}>
             <img src={image.src} alt="Click to Play" style={{maxWidth: '100%'}} />
          </figure>
        )
      })}
    </Row>
    )
  }
}

export default Images;