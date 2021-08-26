export interface  CollectionObject {
    name: string,
    itemContents: any,
    category: string,
}
export interface  CollectionObjectConstructor {
    new (name:string, itemContents: any,category: any) :CollectionObject;
    clone():CollectionObject
}
// ) {
//     id = this.state.collections.id
//     name = this.state.collections.name
//     collectionObj = this.state.collections.collectionObj
// };