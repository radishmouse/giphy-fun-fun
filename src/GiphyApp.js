import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=H2R4CV5XYRUZEG1jAn5GP4Rl9oWsSeCX&tag=cat&rating=G';


class GiphyApp extends React.Component {

/*
- a button
- when you click the button, it runs a helper fn
    - to begin with, just console.log()

- some state
    - to begin with, just an empty array

- update your helper fn
    - it should add the string "hello" to the array

- open the component inspector
- make sure that the state array should get another
    "hello" string added to it every time you click
    the button
*/

    constructor(props) {
        super(props);

        this.state = {
            giphies: []
        };
    }

    render() {
        return (
            <div>                
                <button onClick={this._getGiphy}>
                    🧘‍♂️
                </button>
                <br />
                {
                    this.state.giphies.map(giphy => (
                        <GiphyImage giphy={giphy} />
                    ))
                }
            </div>
        );
    }

    _getGiphy = () => {
        axios.get(giphyUrl)
            .then(response => {
                console.log(response.data.data.images.downsized_large);
                this.setState({
                    giphies: [
                        response.data.data.images.downsized_large,
                        ...this.state.giphies,
                    ]
                });
            })
            .catch(err => {
                console.log('Yeah, no giphy for you');
            })

        console.log('You clicked!!!');
    }
}

export default GiphyApp;