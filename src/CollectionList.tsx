import React from 'react';
import axios from 'axios';
import {CollectionObject} from "./CollectinObject";



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
                  <table style={{border: "solid" }}>
                      <th>
                          <tr>
                              <td>ID</td>
                              <td>Name</td>
                              <td>Description</td>
                          </tr>
                          <hr/>
                      </th>
                  <tbody>
                  {this.state.collections.map((item:CollectionObject) =>
                     <div>

                             <tr>
                                 <td>
                                     {item.id}
                                 </td>
                                 <td>
                                 {item.name}
                                 </td>
                                 <td>
                                 {item.collectionobj}
                                 </td>
                             </tr>
                         <hr/>


                        </div>
                   // console.log(item)
                  )}
                  </tbody>
                  </table>
              </div>
          )



    }
    // return (
    //     <div
    //         style={{
    //             backgroundColor: "lightyellow",
    //             border: "1px solid yellow",
    //         <table>
    //             <tbody>
    //             {Object.keys(obj).map((itemKey) => {
    //                 return (
    //                     <tr key={itemKey}>
    //                         <td>{itemKey}</td>
    //                         <td>{itemKey === 'Link' ? <a href={obj[itemKey]}>{obj[itemKey]}</a> : obj[itemKey]}</td>
    //                     </tr>
    //                 )
    //             })}
    //             </tbody>
    //         </table>
    //     </div>
    // )

    //         }}
    //     >
    //             padding: "10px"
}
