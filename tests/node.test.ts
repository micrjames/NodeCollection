import { NodeCollection } from "../NodeCollection";
import { Node } from "../Node";

describe("A Node", () => {
   describe("Created", () => {
	  let node: Node<number>;
	  beforeAll(() => {
		 node = new Node();
	  });
	  test("Should exist.", () => {
		 expect(node).toBeDefined();
	  });
	  test("Should have an 'undefined' Key.", () => {
		 const nodeKey = node.Key;
		 expect(nodeKey).toBeUndefined();
	  });
	  test("Should have an empty collection of children.", () => {
		 const nodeChildren = node.children;
		 const nodeChildrenSize = nodeChildren.size;
		 expect(nodeChildrenSize).toBeFalsy();
	  });
   });
   describe("With Operations", () => {
	  let node: Node<number>;
	  let nodeKey: number;
	  let nodeKey1Value: number;
	  let nodeChildren: NodeCollection<number>;
	  let nodeKey2Value: number;
	  let nodeKey3Value: number;
	  let nodeChildrenArr: Array<Node<number>>;
	  beforeAll(() => {
		 nodeKey1Value = 1;
		 nodeKey2Value = 2;
		 nodeKey3Value = 3;
		 nodeChildrenArr = [
			new Node(nodeKey2Value),
			new Node(nodeKey3Value)
		 ];
		 node = new Node(nodeKey1Value, nodeChildrenArr[0], nodeChildrenArr[1]);
		 nodeKey = node.Key;
		 nodeChildren = node.children;
	  });
	  describe("On the 'Key'", () => {
		 test("Should exist.", () => {
			expect(nodeKey).toBeDefined();
		 });
		 test("Should be of type 'number'.", () => {
			const nodeKeyType = typeof nodeKey;
			expect(nodeKeyType).toBe("number");
		 });
		 test("Should hold the specified 'Key'.", () => {
			expect(nodeKey).toBe(nodeKey1Value);
		 });
	  });
	  describe("On the 'children'", () => {
		 describe("Having Been Created", () => {
			test("Should exist.", () => {
			   expect(nodeChildren).toBeDefined();
			});
			test("Should be a collection of 'object's.", () => {
			   const nodeChildrenCollection = new NodeCollection(...nodeChildrenArr);
			   expect(nodeChildren).toEqual(nodeChildrenCollection);
			});
			test("Should hold the number of 'children' added to the 'Node'.", () => {
			   const nodeChildrenArrSize = nodeChildrenArr.length;
			   const nodeChildrenSize = nodeChildren.size;
			   expect(nodeChildrenSize).toBe(nodeChildrenArrSize);
			});
			test("Should each be of type 'object'.", () => {
			   nodeChildrenArr.forEach((_, idx) => {
				  const nodeChild = nodeChildren.item(idx);
				  const nodeChildType = typeof nodeChild;
				  expect(nodeChildType).toBe("object");
			   });
			});
			test("Should each hold the specified 'Key'.", () => {
			   nodeChildrenArr.forEach((_, idx) => {
				  const nodeChild = nodeChildren.item(idx);
				  const nodeChildKey = nodeChild.Key;
				  const nodeChildArrKey = nodeChildrenArr[idx].Key
			      expect(nodeChildKey).toBe(nodeChildArrKey);
			   });
			});
		 });
		 describe("Adding a 'child'", () => {
			test.todo("Should exist.");
			test.todo("Should be a collection of objects.");
			test.todo("Should hold the number of 'children' added to the 'Node'.");
			test.todo("Should each be of type 'object'.");
			test.todo("Should each hold the specified 'Key'.");
		 });
	  });
   });
});
