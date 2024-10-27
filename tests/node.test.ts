import { NodeCollection } from "../NodeCollection";
import { Node } from "../Node";
import { dataObj } from "../utils/utils";

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
	  beforeAll(() => {
		 node = new Node();
	  });
	  describe("On the 'Key'", () => {
		 test.todo("Should exist.");
		 test.todo("Should be of type 'number'.");
		 test.todo("Should hold the specified 'Key'.");
	  });
	  describe("On the 'children'", () => {
		 test.todo("Should exist.");
		 test.todo("Should be a collection of objects.");
		 test.todo("Should hold the number of 'children' added to the 'Node'.");
		 test.todo("Should each be of type 'object'.");
		 test.todo("Should each hold the specified 'Key'.");
	  });
   });
});
