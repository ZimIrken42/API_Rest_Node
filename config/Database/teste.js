import Database from './index'
import * as config from '../index.js'

const testConection = (  ) => {

  console.log("init!");

  let dat = new Database (  )

  console.log ( "data!" )

  console.log(dat.queryResult ( 'show databases;' , ( res, filds ) => {

      console.log ( res )
      console.log ( filds )
    })
  )

  console.log ( "end conection!" )

  dat.desconect (  )
}

const testGenQuery = (  ) => {

  console.log("init!");

  let dat = new Database (  )

  console.log("runit!");

  let res = dat.genQuery ( {

    'nome': 'eliseu',
    'email': 'got@hell.com'
  } )

  console.log("res!");

  console.log(res);

  dat.desconect (  )
}

const testWhereCondiction = (  ) => {

  console.log("init!");

  let dat = new Database (  )

  console.log("where Condiction test!");

  let wheres = dat.genWhereQuery ( {

    'nome': 'eliseu',
    'email': 'got@hell.com'
  } )

  console.log("res!");

  console.log(wheres);

  dat.desconect (  )
}

const testCRUD = (  ) => {

  console.log("init!");

  let dat = new Database (  )

  console.log("test!");

  dat.insertIntoTable ( 'users', {

    'nome': 'eliseu',
    'email': 'got@hell.com'
  } , ( res ) => {

    console.log("######### INSERT");
    console.log(res);
  } )

  dat.showIntoTable ( 'users' , ( res ) => {

    console.log("######### SHOW");
    console.log(res);
  } )
  // dat.deleteIntoTable ( 'users',  {
  //   'email': 'got@hell.com'
  // }, ( res ) => {
  //
  //   console.log("######### DELETE");
  //   console.log( res );
  // } )
  dat.updateIntoTable ( 'users' , {

    'nome': 'el.is.eu',
    'email': 'got@hell.www'
  }, {
    'nome': 'eliseu'
  }, ( res ) => {
    console.log("######### UPDATE");
    console.log(res);
  } )
}

const testAutoCreateDatabase = (  ) => {

  console.log("init!");

  let dat = new Database (  )

  console.log("test!");

  dat.checkDatabase (  )

  dat.desconect (  )
}

const maint = ( (  ) => { // sinc functions

  // console.log("test");
  // testConection (  )
  // testGenQuery (  )
  // testWhereCondiction (  )
  // testCRUD (  )
  // testAutoCreateDatabase (  )
} )(  )

const testConectionAsc = (  ) => { // ok

  let dat = new Database (  )

  dat.queryResult('show databases;')
    .then ( ( response ) => {

      console.log(response);
    })
    .catch ( ( err ) => {

      console.log( err );
    } )
}

const testDatabaseCheckCreateAsync = (  ) => {

  let dat = new Database (  )
  dat.checkDatabase (  )
}

const testInsertAscync = (  ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'
  /// insert into table
  //
  dat.insertIntoTable ( hereThisTable, {
    name: "eli",
    login: "lucena",
    pass: config.hash ( '23' ),
    email: "ll@gmail.com",
    city: "rancon",
    ranks_id: "2"
  } )
}

const testSelectAsync = ( noShow = false ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  let result = dat.selectTable ( {
    table: hereThisTable,
  } )

  if ( !noShow ) console.log(result);
  /// select especific camps of table
  //
  result = dat.selectTable ( { // data
    table: hereThisTable,
    camps: [
      "name",
      "login",
      "pass",
    ]
  } )

  if ( !noShow ) console.log(result);
  /// select all of table filter of where condiction
  //
  result = dat.selectTable ( { // data
    table: hereThisTable,
    camps: [
      "name",
      "login",
      "pass",
    ], whereCondiction: {
      id: '2',
      name: "eliseu"
    }
  } )

  if ( !noShow ) console.log ( result )

  /// select all of table using join
  //
  let joinResult = dat.selectTable ( { // data
    table: hereThisTable,
    joinFields: {
      type: "left",
      outerTable: "ranks",
      onCamps: {
        idUser: "idRanks"
      },
    },
  } )

  if ( !noShow ) console.log ( joinResult )

  /// select especific fields of table using join
  //
  joinResult = dat.selectTable ( { // data
    // table: hereThisTable,
    table: 'ranks',
    camps: [
      "value"
    ],
    joinFields: {
      type: "LEFT",
      outerTable: "users",
      onCamps: {
        id: "ranks_id",
      }, whereJoin: {

        camp: "id"
      }
    },
  } )

  if ( !noShow ) console.log ( joinResult )


  return result
}

const testDeleteAsync = (  ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  result = dat.removeTable ( hereThisTable )

  console.log(result)

  /// select all of table using where
  //
  let result = dat.removeTable ( hereThisTable, {
    name: "eli"
  })

  console.log(result)

}

const testUpdateAsync = (  ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  let result = dat.updateTable ( hereThisTable )

  console.log(result)

  /// select all of table using Data
  //
  result = dat.updateTable ( hereThisTable, {
    name: "eli",
    login: "lucena",
    pass: "23",
    email: "ll@gmail.com",
    city: "rancon",
    ranks_id: "2"
  } )

  /// select all of table using Data
  //
  result = dat.updateTable ( hereThisTable, {
    name: "eli",
    login: "lucena",
    pass: "23",
    email: "ll@gmail.com",
    city: "rancon",
    ranks_id: "2"
  }, {
    name: "eli"
  } )

  console.log(result)
}


const testCapsulationQuery = (  ) => {

  let dat = new Database (  )

  let result = dat.capsulationQuery ( testSelectAsync ( true ) )

  console.log(result);
}

const testMetaQueryAscync = (  ) => {

  // testCapsulationQuery (  )
  // testInsertAscync (  )
  // testSelectAsync (  )
  // testDeleteAsync (  )
  // testUpdateAsync (  )
}

const testSelectAsyncIntoDatabase = (  ) => {


  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  let result = dat.selectIntoTable ( hereThisTable )

  result.then ( res => {

    console.log(res);
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )
  /// select filter data of output table
  //
  result = dat.selectIntoTable ( hereThisTable, {

    whereCondiction: {
      name: "eliseu"
    }
  } )

  result.then ( res => {

    console.log(res);
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )
  /// select especific data of camps into table
  //
  result = dat.selectIntoTable ( hereThisTable, {

    camps: [
      "name",
      "pass"
    ]
  } )

  result.then ( res => {

    console.log(res);
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )
  /// select especific data of camps into table
  //
  result = dat.selectIntoTable ( hereThisTable, {

    camps: [
      "login",
      "pass",
    ], joinFields: {
      type: "right",
      outerTable: "ranks",
      onCamps: {
        id: "id"
      },
    },
  } )

  result.then ( res => {

    console.log(res);
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )

}

const testInsertAscIntoDatabase = (  ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  let result = dat.insertIntoTable ( hereThisTable, {
    name: "elisa",
    login: "vict",
    email: "shell",
    pass: config.hash ( '123' ),
    city: "rancon City",
    ranks_id: "3"
  } )

  result.then ( res => {

    console.log ( res );
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )
}

const testDeleteAsyncIntoDatabase = (  ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  let result = dat.deleteIntoTable ( hereThisTable, {
    login: "vict",
  } )

  result.then ( res => {

    console.log ( res );
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )
}

const testUpdateAsyncIntoDatabase = (  ) => {

  let dat = new Database (  )

  let hereThisTable = 'users'

  /// select all of table
  //
  let result = dat.updateIntoTable ( hereThisTable, {
    name: "el.is.eu",
    login: "luciene",
    pass: config.hash ( '23' ),
    email: "ll@gmail.com",
    city: "rancon city",
    ranks_id: "2"
  }, {
    name: "eli"
  } )

  result.then ( res => {

    console.log ( res );
  } ).catch ( rej => {

    config.models.MyError.handler ( rej )
  } )
}

const tesetIntoDatabaseTables = (  ) => {
  //////
  ///// Ok
  // testSelectAsyncIntoDatabase (  )
  // testInsertAscIntoDatabase (  )
  // testDeleteAsyncIntoDatabase (  )
  // testUpdateAsyncIntoDatabase (  )
}

const AscyncMain = ( (  ) => {

  console.log("### Testing Async Functions");
  // testConectionAsc (  )
  // testDatabaseCheckCreateAsync (  )
  // testMetaQueryAscync (  )
  // tesetIntoDatabaseTables (  )
  new Database (  )
} )(  )
