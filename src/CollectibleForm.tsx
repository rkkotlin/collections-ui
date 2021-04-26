import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { CollectionObject, CollectionObjectConstructor} from "./CollectionObject";
const defaultValues = {
    name: "",
    collectionobj: "",
    itemcontents: "",
    // gender: "",
    // os: "",
    // favoriteNumber: 0,
};



const Form = () => {

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,

        });
    };
    const [open, setOpen] = React.useState(false);
   
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(formValues)
        let jsonValues = JSON.stringify(formValues)
 
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:8080/collection/cs', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify( formValues));
 
        handleClose()
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="flex-start" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="category-input"
                        name="collectionobj"
                        label="Collection Group"
                        type="text"
                        value={formValues.collectionobj}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="year-input"
                        name="itemcontents"
                        label="Item Desc"
                        type="text"
                        value={formValues.itemcontents}
                        onChange={handleInputChange}
                    />
                </Grid>
  
            </Grid>
        </form>
    );
};
export default Form;