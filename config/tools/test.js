let cache = require('./cache');

cacheJSON = cache.cache()

console.log(cacheJSON);

cacheJSON.add("a",{AAA:"45", ASDF:{S:85}})
cacheJSON.add("b",{AAA:"485", ASDFASDF:"{SDF}"})
cacheJSON.add("c",{AAA:"45", ASDFASDFASDFASDFASDFASDF:":"})
cacheJSON.add("d",{AAA:"45"})
cacheJSON.add("r",{AAA:"45"})
cacheJSON.add("l",{AAA:"485", ASDFASDF:"{SDF}"})

console.log(cacheJSON.show());

console.log(cacheJSON.search("d"));

console.log(cacheJSON.remove("c"));

console.log(cacheJSON.show());
console.log(cacheJSON.reset());
console.log(cacheJSON.show());
