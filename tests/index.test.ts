import { NodeCollection } from "../NodeCollection";
import { Node } from "../Node";
import { dataObj } from "../utils/utils";

describe("A NodeCollection", () => {
   describe("Created", () => {
	  let nodeColl: NodeCollection<number>;
	  beforeAll(() => {
		 nodeColl = new NodeCollection();
	  });
	  test("Should exist.", () => {
		 expect(nodeColl).toBeDefined();
	  });
	  test("Should be empty.", () => {
		 const nodeCollSize = nodeColl.size;
		 expect(nodeCollSize).toBe(0);
	  });
	  test("Should not give an item.", () => {
		 const nodeCollItem = nodeColl.item(0);
		 expect(nodeCollItem).not.toBeDefined();
	  });
   });
   describe("With Operations", () => {
	  let nodeColl: NodeCollection<number>;
	  let nodeCollArr: Array<Node<number>>;
	  beforeAll(() => {
		 nodeColl = new NodeCollection(
			 new Node(1),
			 new Node(2),
			 new Node(3),
			 new Node(4),
			 new Node(5)
		 );
		 const nodeCollSize = nodeColl.size;
		 nodeCollArr = Array.from({length: nodeCollSize}, (_, idx) => nodeColl.item(idx));
	  });
	  test("Should have the items that were added.", () => {
		 nodeCollArr.forEach((node, idx) => {
			expect(node).toEqual(new Node(idx + 1));
		 });
	  });
	  test("Should have the item at the given index.", () => {
		 nodeCollArr.forEach((node, idx) => {
			const Key = node.Key;
			const children = node.children;
			const childrenType = typeof children;
			expect(Key).toBe(idx + 1);
			expect(childrenType).toBe("object");
		 });
	  });
	  test("Should have the size of the 'NodeCollection'.", () => {
		 const nodeCollSize = nodeColl.size;
		 expect(nodeCollArr).toHaveLength(nodeCollSize);
	  });
   });
   describe("That is iterable", () => {
	   describe("Gives each value of the Collection.", () => {
		  let nodeColl: NodeCollection<number>;
		  beforeAll(() => {
			 nodeColl = new NodeCollection(
				new Node(1),
				new Node(2),
				new Node(3),
				new Node(4),
				new Node(5)
			 );
		  });
		  test("Should be 1.", () => {
			 const nextEl = nodeColl.next();
			 const nextElValue = nextEl.value;
			 const nextElKey = nextElValue.Key;
			 const nextElChildren = nextElValue.children;
			 expect(nextEl.done).toBeFalsy();
			 expect(nextElKey).toBe(1);
			 expect(typeof nextElChildren).toBe("object");
		  });
		  test("Should be 2.", () => {
			 const nextEl = nodeColl.next();
			 const nextElValue = nextEl.value;
			 const nextElKey = nextElValue.Key;
			 const nextElChildren = nextElValue.children;
			 expect(nextEl.done).toBeFalsy();
			 expect(nextElKey).toBe(2);
			 expect(typeof nextElChildren).toBe("object");
		  });
		  test("Should be 3.", () => {
			 const nextEl = nodeColl.next();
			 const nextElValue = nextEl.value;
			 const nextElKey = nextElValue.Key;
			 const nextElChildren = nextElValue.children;
			 expect(nextEl.done).toBeFalsy();
			 expect(nextElKey).toBe(3);
			 expect(typeof nextElChildren).toBe("object");
		  });
		  test("Should be 4.", () => {
			 const nextEl = nodeColl.next();
			 const nextElValue = nextEl.value;
			 const nextElKey = nextElValue.Key;
			 const nextElChildren = nextElValue.children;
			 expect(nextEl.done).toBeFalsy();
			 expect(nextElKey).toBe(4);
			 expect(typeof nextElChildren).toBe("object");
		  });
		  test("Should be 5.", () => {
			 const nextEl = nodeColl.next();
			 const nextElValue = nextEl.value;
			 const nextElKey = nextElValue.Key;
			 const nextElChildren = nextElValue.children;
			 expect(nextEl.done).toBeFalsy();
			 expect(nextElKey).toBe(5);
			 expect(typeof nextElChildren).toBe("object");
		  });
		  test("Should be null.", () => {
			 const nextEl = nodeColl.next();
			 expect(nextEl.done).toBeTruthy();
			 expect(nextEl.value).toBeNull();
		  });
	   });
	   describe("Gives the values as an array.", () => {
		  let nodeColl: NodeCollection<number>;
		  let nodeCollArr: Array<dataObj<Node<number>>>;
		  beforeAll(() => {
			 nodeColl = new NodeCollection(
				new Node(1),
				new Node(2),
				new Node(3),
				new Node(4),
				new Node(5)
			 );

			 nodeCollArr = [...nodeColl];
		  });
		  test("Should not be empty.", () => {
			 expect(nodeCollArr).not.toBeFalsy();
		  });
		  test("Should contain 5 elements.", () => {
			 expect(nodeCollArr).toHaveLength(5);
		  });
		  test("Should equal '[1, 2, 3, 4, 5]'", () => {
			 expect(nodeCollArr).toEqual([
				new Node(1),
				new Node(2),
				new Node(3),
				new Node(4),
				new Node(5)
			 ]);
		  });
		  test("Should iterate the elements.", () => {
			 nodeCollArr.forEach((node, idx) => {
				expect(node).toEqual(new Node(idx + 1));
			 });
			 let idx = 0;
			 for(const node of nodeCollArr) {
				++idx;
				expect(node).toEqual(new Node(idx));
			 }
		  });
	   });
	});
});
