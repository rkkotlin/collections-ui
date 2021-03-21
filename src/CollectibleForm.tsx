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
const defaultValues = {
    name: "",
    category: "",
    year: 0,
    age: 0,
    gender: "",
    os: "",
    favoriteNumber: 0,
};
const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues );
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
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
                        name="category"
                        label="Category"
                        type="text"
                        value={formValues.category}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="year-input"
                        name="year"
                        label="Year"
                        type="number"
                        value={formValues.year}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="age-input"
                        name="age"
                        label="Age"
                        type="number"
                        value={formValues.age}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formValues.gender}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                key="male"
                                value="male"
                                control={<Radio size="small" />}
                                label="Male"
                            />
                            <FormControlLabel
                                key="female"
                                value="female"
                                control={<Radio size="small" />}
                                label="Female"
                            />
                            <FormControlLabel
                                key="other"
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    );
};
export default Form;