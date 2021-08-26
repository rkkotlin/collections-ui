import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface FormProps {
    open: boolean,
    name: string,
    itemcontents: string,
    description: string,
    artist: string,
    edition: string,
    condition: string,
    changeName: any,
    changeItemcontents: any,
    changeDescription: any,
    changeArtist: any,
    changeEdition: any,
    changeCondition: any

}
// export default function FormDialog() {
export class CollectionGroupDO {
    constructor(
        public name: string,
        public itemcontents: string
    ) { }
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: '25ch',
            },
        },
        textFieldWidth: {
            // margin: '4,4,24,24'
            margin: '{[2,2,4,4]}',
            width: '24ch',
            border: '4'
        }
    }),
);
const FormDialog: React.FC<FormProps> = (props) => {
    const saveData = async () => {
        const collectionGroupDO: CollectionGroupDO = {
            name: props.name,
            itemcontents: '{"artist":"' + props.artist 
                             + '","description":"' + props.description 
                             +'"}'
        }
        const data = await axios.post("http://localhost:8080/collection/cs/", collectionGroupDO).then(() => {

        });
        console.log(data)

    };
    // useEffect(() => {
    //     saveData();
    // }, []);
    const [open, setOpen] = React.useState(props.open);
    const [itemcontents, setItemcontents] = React.useState("")
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [artist, setArtist] = React.useState("");
    const [edition, setEdition] = React.useState("");
    const [condition, setCondition] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // The below code handles the change in textfield which assigns to the name in this component. 
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        props.changeName(e.target.value)

    }
    
    const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        props.changeArtist(e.target.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      props.changeDescription(e.target.value)
      setItemcontents('{"description":"' + props.description + '"}')
}
  
    const saveAndClose = (): void => {
        saveData()
        handleClose()
    }

    const addImages = (): void => {
        // saveData()
        alert("add screens to add images from local folder to our app")
        handleClose()
    }
    const classes = useStyles();
    return (
        <div>

            <Button variant="contained" color="primary" type="submit" onClick={handleClickOpen}>
                Add New Item
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Your Collectible</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Add a new item into your collection database!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        onChange={handleNameChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="manufacturerArtist"
                        label="Manufacturer/Artist"
                        onChange={handleArtistChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Description"
                        onChange={handleDescriptionChange}
                        fullWidth
                    />
                    <div>
                        <TextField
                            margin="normal"
                            id="edition"
                            label="Edition"
                            variant="outlined"
                            onChange={handleNameChange}
                            className={classes.textFieldWidth}
                        />
                        <TextField
                            margin="normal"
                            id="yearBought"
                            variant="outlined"
                            label="Year Bought"
                            onChange={handleNameChange}
                            className={classes.textFieldWidth}
                        />
                    </div>
                    <div>
                        <TextField
                            margin="dense"
                            id="condition"
                            variant="outlined"
                            label="Condition"
                            onChange={handleNameChange}
                            className={classes.textFieldWidth}
                        />
                        <TextField
                            margin="dense"
                            id="cost"
                            label="Price/Cost"
                            variant="outlined"
                            onChange={handleNameChange}
                            className={classes.textFieldWidth}
                        />
                    </div>

                </DialogContent>
                <Button onClick={addImages} color="primary">
                    Images
                </Button>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={saveAndClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;
