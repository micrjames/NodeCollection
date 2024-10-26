import { NodeCollection } from "../NodeCollection";
import { dataObj } from "../utils/utils";

describe("A NodeCollection", () => {
   describe("Created", () => {
	  let nodeColl: NodeCollection<number>;
	  beforeAll(() => {
		 nodeColl = new NodeCollection();
	  });
	  test.todo("Should exist.");
	  test.todo("Should be empty.");
	  test.todo("Should not give an item.");
   });
   describe("With Operations", () => {
	  let nodeColl: NodeCollection<number>;
	  beforeAll(() => {
		 nodeColl = new NodeCollection();
	  });
	  test.todo("Should have the items that were added.");
	  test.todo("Should have the item at the given index.");
	  test.todo("Should have the size of the 'NodeCollection'.");
   });
   describe("That is iterable", () => {
	   describe("Gives each value of the Collection.", () => {
		  let nodeColl: NodeCollection<number>;
		  beforeAll(() => {
			 nodeColl = new NodeCollection(1, 2, 3, 4, 5);
		  });
		  test("Should be 1.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(1);
		  });
		  test("Should be 2.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(2);
		  });
		  test("Should be 3.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(3);
		  });
		  test("Should be 4.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(4);
		  });
		  test("Should be 5.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeFalsy();
			 expect(nextEl.value).toBe(5);
		  });
		  test("Should be null.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeTruthy();
			 expect(nextEl.value).toBeNull();
		  });
	   });
	   describe("Gives the values as an array.", () => {
		  let nodeColl: NodeCollection<number>;
		  let collectionArr: dataObj<number>[];
		  beforeAll(() => {
			 nodeColl = new NodeCollection();

			 collectionArr = [...nodeColl];
		  });
		  test("Should not be empty.", () => {
			 expect(collectionArr).not.toBeFalsy();
		  });
		  test("Should contain 5 elements.", () => {
			 expect(collectionArr).toHaveLength(5);
		  });
		  test("Should equal '[1, 2, 3, 4, 5]'", () => {
			 expect(collectionArr).toEqual([1, 2, 3, 4, 5]);
		  });
		  test("Should iterate the elements.", () => {
			 collectionArr.forEach((el, i) => {
				expect(el).toBe(i + 1);
			 });
			 let idx = 0;
			 for(const el of collectionArr) {
				++idx;
				expect(el).toBe(idx);
			 }
		  });
	   });
	});
});
