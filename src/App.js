
import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <h1>netflix clone</h1>
      <Row title=" NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
