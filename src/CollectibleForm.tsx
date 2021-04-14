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
    // const handleSliderChange = (name) => (e, value) => {
    //     setFormValues({
    //         ...formValues,
    //         [name]: value,
    //     });
    // };
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
        // let collectionObj: CollectionObject;
        // collectionObj.id=23333
        // collectionObj.name ='stamp'
        // collectionObj.collectionobj = 'something'
        // collectionObj.itemcontents = jsonValues
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:8080/collection/cs', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify( formValues));
        // axios.post('http://localhost:8080/collection/cs1', {
        //     body:collectionObj
        // }).then(res =>
        //         console.log(res.data.toString())
        // ).catch( res =>
        //     console.log("I am here!!!!")
        // )
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
                {/*<Grid item>*/}
                {/*    <TextField*/}
                {/*        id="age-input"*/}
                {/*        name="age"*/}
                {/*        label="Age"*/}
                {/*        type="number"*/}
                {/*        value={formValues.age}*/}
                {/*        onChange={handleInputChange}*/}
                {/*    />*/}
                {/*</Grid>*/}
                {/*<Grid item>*/}
                {/*    <FormControl>*/}
                {/*        <FormLabel>Gender</FormLabel>*/}
                {/*        <RadioGroup*/}
                {/*            name="gender"*/}
                {/*            value={formValues.gender}*/}
                {/*            onChange={handleInputChange}*/}
                {/*            row*/}
                {/*        >*/}
                {/*            <FormControlLabel*/}
                {/*                key="male"*/}
                {/*                value="male"*/}
                {/*                control={<Radio size="small" />}*/}
                {/*                label="Male"*/}
                {/*            />*/}
                {/*            <FormControlLabel*/}
                {/*                key="female"*/}
                {/*                value="female"*/}
                {/*                control={<Radio size="small" />}*/}
                {/*                label="Female"*/}
                {/*            />*/}
                {/*            <FormControlLabel*/}
                {/*                key="other"*/}
                {/*                value="other"*/}
                {/*                control={<Radio size="small" />}*/}
                {/*                label="Other"*/}
                {/*            />*/}
                {/*        </RadioGroup>*/}
                {/*    </FormControl>*/}
                {/*</Grid>*/}
                {/*<Grid item>*/}
                {/*    <FormControl>*/}
                {/*        <Select*/}
                {/*            name="os"*/}
                {/*            value={formValues.os}*/}
                {/*            onChange={handleInputChange}*/}
                {/*        >*/}
                {/*            <MenuItem key="mac" value="mac">*/}
                {/*                Mac*/}
                {/*            </MenuItem>*/}
                {/*            <MenuItem key="windows" value="windows">*/}
                {/*                Windows*/}
                {/*            </MenuItem>*/}
                {/*            <MenuItem key="linux " value="linux">*/}
                {/*                Linux*/}
                {/*            </MenuItem>*/}
                {/*        </Select>*/}
                {/*    </FormControl>*/}
                {/*</Grid>*/}
                {/*<Grid item>*/}
                {/*    <div style={{ width: "400px" }}>*/}
                {/*        Favorite Number*/}
                {/*        <Slider*/}
                {/*            value={formValues.favoriteNumber}*/}
                {/*            onChange={handleSliderChange("favoriteNumber")}*/}
                {/*            defaultValue={1}*/}
                {/*            step={1}*/}
                {/*            min={1}*/}
                {/*            max={3}*/}
                {/*            marks={[*/}
                {/*                {*/}
                {/*                    value: 1,*/}
                {/*                    label: "1",*/}
                {/*                },*/}
                {/*                {*/}
                {/*                    value: 2,*/}
                {/*                    label: "2",*/}
                {/*                },*/}
                {/*                {*/}
                {/*                    value: 3,*/}
                {/*                    label: "3",*/}
                {/*                },*/}
                {/*            ]}*/}
                {/*            valueLabelDisplay="off"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</Grid>*/}
                <br/>
                <Button variant="contained" color="primary" type="submit" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} >
                    Submit
                </Button>
            </Grid>
        </form>
    );
};
export default Form;