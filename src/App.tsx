import React from 'react';
import axios from 'axios';
import './App.css';
import CollectionList from "./CollectionList";
import {Container, Typography} from "@material-ui/core";
import CollectibleForm from "./CollectibleForm";


function App() {


  return (
    <div className="App">

<Container>
    <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        Your Collectibles App
</Typography>
        {
            // <CollectionList/>
            <CollectibleForm/>
        }
</Container>
    </div>
  );
}

export default App;
