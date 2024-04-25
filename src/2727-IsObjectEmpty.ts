/*
  Time Complexity: O(1)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Object
*/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    return Object.keys(obj).length <= 0
};