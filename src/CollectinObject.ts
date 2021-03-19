export interface  CollectionObject {
    id: number,
    name: string,
    collectionobj: any
}
export interface CollectinObjectConstructor {
    new (id: number, name:string, collectionobj: any) :CollectionObject;
    clone():CollectionObject
}
// ) {
//     id = this.state.collections.id
//     name = this.state.collections.name
//     collectionObj = this.state.collections.collectionObj
// };