import { YANode } from "./YANode/YANode";
import { NodeCollection } from "./NodeCollection";

export class Node<T> implements YANode<T>, IterableIterator<Node<T>> {
   private Key: T;
   private _children: NodeCollection<T>;

   private idx = 0;

   constructor(data: T) {
	  this.Key = data;
	  this._children = [];
   }

   addChild(child: Node<T>) {
	  this.children.push(child);
   }

   get children(): Array<Node<T>> {
	  return this._children;
   }
}
