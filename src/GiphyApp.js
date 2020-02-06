import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';
import './GiphyApp.css';

class GiphyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      giphies: []
    };
  }

  componentDidMount() {
    this._getGiphy();
    this._runOnTimer();
  }

  render() {
    return (
      <div className="giphy-app">
        {
          this.state.giphies.slice(0, 4).map(g => <GiphyImage key={g.url} {...g}/>)
        }
      </div>
    ) ;
  }

  _urlForGiphy = () => `https:api.giphy.com/v1/gifs/random?api_key=${this.props.apiKey}&tag=cat&rating=G`

  _runOnTimer = () => {
    setTimeout(() => {
      this._getGiphy();
      requestAnimationFrame(this._runOnTimer);
    }, this.props.frequency);        
  }

  _getGiphy = () => {
    axios.get(this._urlForGiphy())
      .then(({data}) => data)
      .then(({data}) => {
        this.setState({
          giphies: [
            data.images.downsized_large,
            ...this.state.giphies,
          ]
        });
      })
      .catch(err => {
        console.log('No giphy here...');
      });
    
  }
}

export default GiphyApp;
