import { NodeCollection } from "../NodeCollection";
import { Node } from "../Node";
import { dataObj } from "../utils/utils";

describe("A Node", () => {
   describe("Created", () => {
	  let node: Node<number>;
	  beforeAll(() => {
		 node = new Node();
	  });
	  test.todo("Should exist.");
	  test.todo("Should have an 'undefined' Key.");
	  test.todo("Should have an empty collection of children.");
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
