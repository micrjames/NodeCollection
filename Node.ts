import { NodeCollection } from "./NodeCollection";

export class Node<T> {
   private _Key: T;
   private _children: NodeCollection<T>;

   constructor(data?: T) {
	  this._Key = data;
	  this._children = new NodeCollection();
   }

   addChild(child: Node<T>) {
	  // take all the children to temp children variable.
	  // create new NodeCollection
	  // populate new NodeCollection with children
	  // add in child at end of children populated to new NodeCollection
   }
   get Key(): T {
	  return this._Key;
   }
   get children(): NodeCollection<T> {
	  return this._children;
   }
}
