import Cost from './index.js'

let u = new Cost (  )

//
// console.log(u);
//
console.log("########## SETING");

u.setType ( "Small" )
u.setDate ( '12/05/2018' )
u.checkFields()
console.log(u);

//
console.log("########## SALVING");

u.save ( res => {

  console.log(res);
} )

console.log(u);

// CHECK TABLE OF USER, AND CREATE IF NOT FIND
// u.check ( { table: true } )

//// SHOW USERS

u.show((res) => {

  console.log(res);
})

u.end()
