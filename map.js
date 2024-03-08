var mymap = new WeakMap();
var obj = { a: 1 };
// mymap.set("name","kerwin")
mymap.set(obj, "aaaaaaa");

obj = null;
console.log(mymap);

//weakmap - 只能是对象为键
