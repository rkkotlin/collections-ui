import React, { useEffect } from 'react';
import axios from 'axios';
import { CollectionObject } from "./CollectionObject";
import { Button, colors, Container, Table } from "@material-ui/core";
import { DataGrid, GridApi, GridCellValue } from "@material-ui/data-grid";
import CollectibleForm from "./CollectibleForm";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import SimpleModal from "./SimpleModal";

interface collectionProps {
    isShown: boolean
}

// export default class CollectionList extends React.Component {
const CollectionList: React.FC<collectionProps | null> = (props) => {
    // state = {
    //     collections: [],
    //     isShown: false
    // }
    const [collections, setCollections] = React.useState([]);
    const [isShown, setIsShown] = React.useState(props.isShown);
 // Define the function that fetches the data from API
 const fetchData = async () => {
    const { data } = await axios.get("http://localhost:8080/collection/cs/");
    setCollections(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
    // useEffect(() => {}
    //     axios.get("http://localhost:8080/collection/cs/")
    //         .then(response => {
    //             dispatch(setCollections(response.data))})
    //         //   return setCollections(res)
    //         }, [dispatch]
    //         );
        

        // axios.get(`http://localhost:8080/collection/cs/`)
        //     .then(res => {
        //          setState({collections: res.data})
        //         // setCollections(res.data)
        //         console.log(collections)
        

        const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'collectionobj', headerName: 'Description', width: 130 },
        { field: 'itemcontents', headerName: 'Item contents JSON', width: 130 },
        {
            field: "", headerName: "", width: 128, renderCell: (params: any) => {
                const onClick = () => {
                    const api: GridApi = params.api;
                    const fields = api
                        .getAllColumns()
                        .map((c) => c.field)
                        .filter((c) => c !== "__check__" && !!c);
                    const thisRow: Record<string, GridCellValue> = {};

                    fields.forEach((f) => {
                        thisRow[f] = params.getValue(f);
                    });

                    return alert(JSON.stringify(thisRow, null, 4));
                };
                return <Button onClick={onClick}>Edit</Button>;
            }
        },

    ];
    const handleClickOpen = () => {
        console.log("are you here")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setOpen] = React.useState(false);
        const handleClose = () => {
            setOpen(false);
        };
    };


    return (
        <div style={{ height: 400, width: '100%' }}>

            <Container>
                <DataGrid rows={collections} columns={columns} pageSize={5} checkboxSelection autoHeight={true} />
                <Button variant="contained" color="primary" type="submit" >
                    Edit
                </Button>
            </Container>

            <SimpleModal />
        </div>
    );
};
export default CollectionList;
