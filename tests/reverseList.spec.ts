describe("test reverse linked list 206", () => {
  /*
    Constraints
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000
  */

  it("first test", () => {
    const head = [1, 2, 3, 4, 5];
    const test = reverseList(head);

    const result = [5, 4, 3, 2, 1];

    expect(test).toBe(result);
  });

  it("second test", () => {
    const head = [1, 2];
    const test = reverseList(head);
    const result = [2, 1];

    expect(test).toBe(result);
  });

  it("third test", () => {
    const head: [] = [];
    const test = reverseList(head);
    const result: [] = [];

    expect(test).toBe(result);
  });
});
