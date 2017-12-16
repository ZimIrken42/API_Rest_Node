const FacCore = require('./core').main

const core = FacCore


console.log(core);

// core.begin

a = () => console.log('a')
s = (x) => {console.log('B '+!!x)}

// console.log(core.insert(a));
// console.log('show : '+core.show());
//
// console.log('a : '+s(core.show()[1]));
// console.log("insert");
// console.log('s : '+core.insert(s));
// console.log('show : '+core.show());
// console.log('a : '+core.show()[1].getCon());
// //console.log('del : '+core.show()[1].setdel(true));
// console.log("begin");
// console.log('a : '+core.begin());
// console.log('show : '+core.show());
// console.log('showS : '+core.show()[0].main+core.show()[1].main);
// console.log('show : '+core.show());
// console.log('show : '+core.show()[1].setdel(true));
// console.log('show : '+core.begin());
// console.log('show : '+core.show());
console.log('a push core');
core.insert(a, 5, true)
a()
// core.insert(s, 3)
// core.insert(s, 5)
// console.log(core.begin())
console.log('show core : '+core.show());

console.log('1 : '+core.show()[1]);
console.log('time : '+core.show()[1].get());
console.log('Con : '+core.show()[1].getCon());
//console.log('show main : '+core.show()[1].main)
//console.log('s insert : '+(core.show()[1].insert(s)));
console.log('show main : '+core.show()[1].main)
console.log('exec main : '+core.show()[1].main())
console.log('s  : '+(core.show()[1].main = s));
console.log('show main : '+core.show()[1].main)
// console.log('main : '+core.show()[1].main)
// console.log('main : '+(core.show()[1].main = a));
// console.log('main : '+core.show()[1].main)
// console.log('begin : '+core.show()[1].begin);
// setInterval(core.begin, 1000)
// setInterval(core.begin, 1000);
// // console.log(!!1)
//
console.log('begin core');
core.begin()
core.begin()
core.begin()
core.begin()
