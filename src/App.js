import React from 'react';
import GiphyApp from './GiphyApp';

const API_KEY = `H2R4CV5XYRUZEG1jAn5GP4Rl9oWsSeCX`;
const FREQUENCY = 3000;

function App() {
  return (
    <GiphyApp apiKey={API_KEY} frequency={FREQUENCY} />
  );
}

export default App;
