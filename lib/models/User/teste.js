import User from './index.js'

let u = new User (  )

//
// console.log(u);
//
// console.log("########## SETING");
//
// u.setName ( "Elis" )
// u.setEmail ( "elis@gmail.com.br" )
// u.checkFields()
// console.log(u);
//
//
// console.log("########## SALVING");
//
// // u.save ( res => {
// //
// //   console.log(res);
// // } )
//
// console.log(u);

// CHECK TABLE OF USER, AND CREATE IF NOT FIND
// u.check ( { table: true }, ( resp ) => {console.log(resp);} )

// SAVE USER - new
// u.add ( {
//     name: 'name',
//     login: 'login',
//     pass: 'pass',
//     repass: 'repass',
//     email: 'email',
//     city: 'city',
//     points: 23
//   }, ( resp ) => {
//
//     console.log(resp);
//   } )

// SHOW USERS
//
// u.show((res) => {
//
//   console.log(res);
// })

// u.end()

// ############### check valid fields
//
// let valueCheckFields = u.check( { valid: {
//       value: true,
//     data: {
//         name: 'name',
//         login: 'login',
//         pass: 'pass',
//         repass: 'repass',
//         email: 'email',
//         city: 'city',
//         points: 0
//     }
//
// } } )
// console.log(valueCheckFields);

// ################ check the check Methods
// console.log(u.check())
// console.log(u.check({fields: true}))
u.check({table: true}, (res) => console.log(res))
// let te = u.check({valid: {
//       value: true,
//       data: {
//         name: 'name',
//         login: 'login', // problem - ok
//         pass: 'pass', // problem - ok
//         repass: 'repass', // problem - ok
//         email: 'email', // problem
//         // email: undefined, // problem - OKAY
//         city: 'city',
//         points: 0
//       }
//     }
// })
// console.log(te);
