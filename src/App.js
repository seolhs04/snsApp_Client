
import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={function(){
        axios('/data.json')
        .then(function(result){
          console.log(result.data)
        })
        .catch(function(err){
          console.log(err)
        })
      }}>get data</button>
    </div>
  );
}

export default App;
