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

// const defaultValues = {
//     name: "",
//     category: "",
//     itemContents: "",
//     // gender: "",
//     // os: "",
//     // favoriteNumber: 0,
// };

interface IFormValues{
    name:String,
    category:String,
    itemContents:String
}

// const [formValues, setFormValues] = useState(defaultValues);
export default class CollectibleForm extends React.Component<IFormValues> {
    constructor(props: any) {
        super(props)
        // const [open, setOpen] = React.useState(false);
      this.state = {
            open: false,
            name: "",
            category: "",
           itemContents:""
           // formValues: defaultValues
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event: any) {
        // alert("here i am - "+ event.target.value)
        this.setState({name : event.name?.value})
        this.setState({category : event.category?.value})
        this.setState({itemContents : event.itemContents?.value})
    }
    handleSubmit(event: any) {
        alert('In submit:::  ' + event.category.value);
       console.log(event.category.value)
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:8080/collection/cs', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify( {"cateogry": this.props.category, "name":this.props.name}))
        event.preventDefault();
    }

     handleClose (open: any)  {
         open = false
    };

    // @ts-ignore
    // private setFormValues(param: any) {
    //     this.formValues: ...this.formValues, [name]: value
    //
    // }
    private formValues: any;


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container alignItems="flex-start" justify="center" direction="column">
                    <Grid item>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Name"
                            type="text"
                            // value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="category-input"
                            name="collectionobj"
                            label="Collection Group"
                            type="text"
                            // value={this.state.category}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="year-input"
                            name="itemcontents"
                            label="Item Desc"
                            type="text"
                            // value={this.state.itemContent}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" onClick={this.handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit} >
                        Submit
                    </Button>
                </Grid>
            </form>
        );
    }
};
