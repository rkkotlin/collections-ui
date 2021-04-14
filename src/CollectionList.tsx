import React from 'react';
import axios from 'axios';
import {CollectionObject} from "./CollectionObject";
import {Button, colors, Container, Table} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import CollectibleForm from "./CollectibleForm";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import SimpleModal from "./SimpleModal";


export default class CollectionList extends React.Component {
    state = {
        collections: [],
        isShown: false
    }


    componentDidMount() {
        axios.get(`http://localhost:8080/collection/cs/`)
            // axios.get(`http://localhost:8080/collection/cs/one/`)
            .then(res => {
                const collections = res.data
                // const json = JSON.parse(collections)
                console.log(collections)
                this.setState({collections})
            })

    }

    render() {
        const columns = [
            {field: 'id', headerName: 'ID', width: 70},
            {field: 'name', headerName: 'Name', width: 130},
            {field: 'collectionobj', headerName: 'Description', width: 130},
            {field: 'itemcontents', headerName: 'Item contents JSON', width: 130},

        ];

        const handleClickOpen = () => {
            console.log("are you here")
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [open, setOpen] = React.useState(false);
            const handleClose = () => {
                setOpen(false);
            };
        };
            // return (
            //     <div>
            //
            //         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            //             <DialogTitle id="form-dialog-title">Item Form</DialogTitle>
            //             <DialogContent>
            //                 <DialogContentText>
            //                     To subscribe to this website, please enter your email address here. We will send updates
            //                     occasionally.
            //                 </DialogContentText>
            //                 <TextField
            //                     autoFocus
            //                     margin="dense"
            //                     id="name"
            //                     label="Email Address"
            //                     type="email"
            //                     fullWidth
            //                 />
            //             </DialogContent>
            //             <DialogActions>
            //                 <Button onClick={handleClose} color="primary">
            //                     Cancel
            //                 </Button>
            //                 <Button onClick={handleClose} color="primary">
            //                     Subscribe
            //                 </Button>
            //             </DialogActions>
            //         </Dialog>
            //     </div>
            // )

        return (
            <div style={{height: 400, width: '100%'}}>

                <Container>
                    <DataGrid rows={this.state.collections} columns={columns} pageSize={5} checkboxSelection autoHeight={true}/>

                </Container>

           <SimpleModal/>
            </div>
        )


    }

}
