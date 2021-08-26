import './App.css';
import CollectionList from "./CollectionList";
import {Container, Typography} from "@material-ui/core";


function App() {

  return (
    <div className="App">

<Container>
    <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        Your Collectibles App
</Typography>
        {
            <div>

             <CollectionList/>

            </div>

        }
</Container>
    </div>
  );
}

export default App;
