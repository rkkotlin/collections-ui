import React from 'react';
import axios from 'axios';
import './App.css';
import CollectionList from "./CollectionList";
import {Container, Typography} from "@material-ui/core";
import CollectibleForm from "./CollectibleForm";
import FormDialog from "./FormDialog";
import SimpleModal from './SimpleModal';
import Button from "@material-ui/core/Button";


function App() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        <SimpleModal/>
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div className="App">

<Container>
    <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        Your Collectibles App
</Typography>
        {
            <div>

             <CollectionList isShown={open}/>

            </div>

        }
</Container>
    </div>
  );
}

export default App;
