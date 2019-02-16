import * as models from '../models'

///
// Create Databaes of System and tables of models - resolf callback sincronus after

( new models[ 'Database' ] ).check ( { database: true }, ( responseOfCreation ) => {

  console.log("ok! Database");

  console.log(responseOfCreation);

  Object.keys ( models ).map ( ( model ) => {

    if ( model != 'Database' ) {

      console.log ( model );

      ( new models [ model ] ).check ( { table: true }, ( responseofCreateTables ) => {

        console.log(responseofCreateTables);
        console.log("ok " + model);
      } )
    }
  } )
} )
