import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import CollectibleForm from "./CollectibleForm";
import Grid from "@material-ui/core/Grid";
import { CollectionObject, CollectionObjectConstructor} from "./CollectionObject";
// const defaultValues = {
//     name: "",
//     collectionobj: "",
//     itemcontents: "",
//     // gender: "",
//     // os: "",
//     // favoriteNumber: 0,
// };
// const collectionObject = new CollectionObject.constructor("","","")
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    // const [formValues, setFormValues] = useState(defaultValues);
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    // const handleSubmit = (event: any) => {
    //     event.preventDefault()
    //     console.log(formValues)
    //     let jsonValues = JSON.stringify(formValues)
    //
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('POST','http://localhost:8080/collection/cs', true);
    //     xhr.setRequestHeader('Content-Type', 'application/json');
    //     xhr.send(JSON.stringify( formValues));
    //
    //     // handleClose()
    //
    // }
 
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                New Item
            </Button>

            <Modal
                id="item-modal"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Simple React Modal</h2>
                    <CollectibleForm name={""} category={""} itemContents={""}/>
                    {/*<Button variant="contained" color="primary" type="submit" onClick={handleClose}>*/}
                    {/*    Cancel*/}
                    {/*</Button>*/}
                    {/*<Button variant="contained" color="primary" type="submit" onClick={handleSubmit} >*/}
                    {/*    Submit*/}
                    {/*</Button>*/}
                </div>
            </Modal>
        </div>
    );
}