import HashMap from "./hashmap.js";

const testMap = new HashMap();

testMap.set("apple", "red");
testMap.set("banana", "yellow");
testMap.set("carrot", "orange");
testMap.set("dog", "brown");
testMap.set("elephant", "gray");
testMap.set("frog", "green");
testMap.set("grape", "purple");
testMap.set("hat", "black");
testMap.set("ice cream", "white");
testMap.set("jacket", "blue");
testMap.set("kite", "pink");
testMap.set("lion", "golden");

testMap.get("apple");
testMap.set("apple", "blue");
testMap.get("apple");
