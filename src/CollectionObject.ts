export interface  CollectionObject {
    name: string,
    collectionobj: any,
    itemcontents: any,
}
export interface  CollectionObjectConstructor {
    new (name:string, collectionobj: any,itemcontents: any) :CollectionObject;
    clone():CollectionObject
}
// ) {
//     id = this.state.collections.id
//     name = this.state.collections.name
//     collectionObj = this.state.collections.collectionObj
// };