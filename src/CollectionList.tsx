import React, { useEffect } from 'react';
import axios from 'axios';
import { Button, Container } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import FormDialog from './FormDialog';


const CollectionList: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [itemcontents, setItemcontents] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [edition, setEdition] = React.useState("");
    const [artist, setArtist] = React.useState("");
    const [condition, setCondition] = React.useState("");
    const [collections, setCollections] = React.useState([]);
    const changeName = (name:string) => {
        setName(name );
      }
      const changeArtist = (name:string) => {
        setArtist(name );
      }
      const changeEdition = (name:string) => {
        setName(name );
      }
      const changeCondition = (name:string) => {
        setCondition(name )
      }
      const changeDescription = (desc:string) => {
        setDescription(desc)
      }
      const changeItemcontents = (itemcontents:string) => {
         setItemcontents(itemcontents)
      }
    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:8080/collection/cs/");
        setCollections(data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'collectionobj', headerName: 'Description', width: 130 },
        { field: 'itemcontents', headerName: 'Item contents JSON', width: 130 },
        {
            field: "...", headerName: "", width: 128, renderCell: (params: any) => {
                // const onClick = () => {
                //     const api: GridApi = params.api;
                //     const fields = api
                //         .getAllColumns()
                //         .map((c) => c.field)
                //         .filter((c) => c !== "__check__" && !!c);
                //     const thisRow: Record<string, GridCellValue> = {};

                //     fields.forEach((f) => {
                //         thisRow[f] = params.getValue(f);
                //     });
                    // return <FormDialog open={open} name={thisRow.name}  desc={thisRow.collectionobj} changeName={changeName} changeDesc={changeDesc}/>
                    //return  alert(JSON.stringify(thisRow, null, 4));
            //};
                return <Button>Edit</Button>;
            }
        },

    ];
 


    return (
        <div style={{ height: 400, width: '100%' }}>
     {name}
            <Container>
                <DataGrid rows={collections} columns={columns} pageSize={5} checkboxSelection autoHeight={true} />
            </Container>
            <FormDialog open={open} name={name} itemcontents={itemcontents} description={description} artist={artist} condition={condition} edition={edition} 
                    changeName={changeName} changeItemcontents= {changeItemcontents} changeDescription={changeDescription} changeArtist={changeArtist} changeCondition={changeCondition} changeEdition={changeEdition} />
        </div>
    );
};
export default CollectionList;
