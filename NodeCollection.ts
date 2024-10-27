import { Node } from "./Node";
import { dataObj } from "./utils/utils";

export class NodeCollection<T> implements IterableIterator<dataObj<Node<T>>> {
   private nodes: dataObj<Node<T>>;
   private idx: number;
   private _size: number;

   constructor(...nodesToAdd: Array<Node<T>>) {
	  this.idx = 0;
	  this._size = 0;

	  if(nodesToAdd)
		 nodesToAdd.forEach((node, idx) => {
			this.nodes[idx] = node;
			this._size++;
		 });
   }

   item(idx: number): Node<T> {
	  if(this._size === 0) return;
	  return this.nodes[idx];
   }

   get size(): number {
	  return this._size;
   }

   next(): IteratorResult<dataObj<Node<T>>> {
	  if(this.idx < this._size) {
		 return {
			done: false,
			value: this.nodes[this.idx++] as any
		 }
	  } else {
		 return {
			done: true,
			value: null
		 }
	  }
   }
   [Symbol.iterator](): IterableIterator<dataObj<Node<T>>> {
	  return this;
   }
}
