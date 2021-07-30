import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface FormProps {
    open: boolean,
    name: string,
    desc: string,
    changeName: any,
    changeDesc: any
}
// export default function FormDialog() {
const FormDialog: React.FC<FormProps> = (props) => {
    const [open, setOpen] = React.useState(props.open);
    const [name, setName] = React.useState("");

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

    // The below code handles the change in textfield which assigns to the name in this component. 
    const handleDescChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        props.changeDesc(e.target.value)
    }

    return (
        <div>

            <Button variant="contained" color="primary" type="submit" onClick={handleClickOpen}>
                Add New Item
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Item Form</DialogTitle>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add New Item
                </Button>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="email"
                        onChange={handleNameChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Desc"
                        type="email"
                        onChange={handleDescChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FormDialog;
