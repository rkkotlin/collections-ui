import React from 'react';
import axios from 'axios';
import './App.css';
import CollectionList from "./CollectionList";


function App() {


  return (
    <div className="App">

     <div>
        Collections - Store your collectibles data here
        </div>
        {
            <CollectionList/>
        }
    </div>
  );
}

export default App;
