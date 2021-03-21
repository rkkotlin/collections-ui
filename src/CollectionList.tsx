import React from 'react';
import axios from 'axios';
import {CollectionObject} from "./CollectinObject";
import {colors, Table} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";



export default class CollectionList extends React.Component {
    state = {
        collections: []
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
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'name', headerName: 'Name', width: 130 },
            { field: 'collectionobj', headerName: 'Description', width: 130 },

        ];
          return (
              <div style={{ height: 400, width: '100%' }}>
                  <DataGrid rows={this.state.collections} columns={columns} pageSize={5} checkboxSelection />
              </div>

          )



    }

}
