import React from 'react';
import axios from 'axios';



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
          return (
              <div>
                  {this.state.collections.map((item) =>
                     <div>{item["id"]} ---
                     {item["name"]} and Description =
                     {item["name"]}</div>
                  )}
              </div>
          )

        const jsarr2 = [1,2,3,4].map(item => {
            return (
                <p key={item}>I am item {item}</p>
            );
        });
        this.state.collections.forEach((item) => {
            console.log(item)
            return (
                <div>item.toString()</div>
        )})
    }
}
