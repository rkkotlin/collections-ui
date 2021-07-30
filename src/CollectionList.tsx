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
import FormDialog from './FormDialog';


const CollectionList: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [collections, setCollections] = React.useState([]);
    const changeName = (name:string) => {
        setName(name );
      }
      const changeDesc = (desc:string) => {
        setDescription(desc );
      }
    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8080/collection/cs/");
        setCollections(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
   //     console.log(collections)


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
 


    return (
        <div style={{ height: 400, width: '100%' }}>
     {name}
            <Container>
                <DataGrid rows={collections} columns={columns} pageSize={5} checkboxSelection autoHeight={true} />
            </Container>
            <FormDialog open={open} name={name}  desc={description} changeName={changeName} changeDesc={changeDesc}/>
            {/* <FormDialog open={isShown}/> */}
            {/* <SimpleModal /> */}
        </div>
    );
};
export default CollectionList;
