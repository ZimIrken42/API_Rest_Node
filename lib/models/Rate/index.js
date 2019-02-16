import Database from '../Database'

export default class User extends Database {


  thisTable (  ) {

    this.table = 'rates'
  }

  checkFields (  ) {

    this.type = ( !!this.type ) ? this.type  : ''
    this.date = ( !!this.date ) ? this.date  : ''
  }

  checkTable ( callbackCreation ) {

    let createTableForModel = () => {
      this.queryResult (
        'CREATE TABLE ' + this.table +' (' +
        ' id INT (12) NOT NULL AUTO_INCREMENT,' +
        ' type CHAR (50) NOT NULL,' +
        ' date DATE NOT NULL,' +
        ' PRIMARY KEY (id));', ( res ) => {

        callbackCreation ( res ); // res
      } )
      callbackCreation ( { tableExist: false, createTable: true } )
    }

    this.queryResult ( 'show tables;', ( res ) => {

      if ( !res.length ) createTableForModel (  )

      if ( res.some(res => res['Tables_in_' + this.database] != this.table ) ) {

        createTableForModel (  )
      }
      callbackCreation ( { tableExist: true, createTable: false } )
    } )
  }

  validData ( data, flagFieldsOff = { } ) {

    if ( !flagFieldsOff.type ) if ( !!!data.type ) return false
    if ( !flagFieldsOff.date ) if ( !!!data.date ) return false

    return true
  }

  check ( flagCondiction = {}, callbackCreation ) {

    this.thisTable (  )
    let status = null
    Object.keys ( flagCondiction ).map ( ( flag ) => {

      if ( ( !!flag ) && ( flag == 'fields' ) ) this.checkFields (  )
      if ( ( !!flag ) && ( flag == 'table' ) ) this.checkTable ( callbackCreation )
      if ( ( !!flag ) && ( flag == 'valid' ) ) {
        status = {
          status: ( this.validData ( flagCondiction.valid.data, flagCondiction.valid.flagFieldsOff ) )
        }
        // return this.validData ( flagCondiction.valid.data, flagCondiction.valid.flagFieldsOff )
      }
    } )
    return status;
  }

  seting ( type = "", date = "" ) {

    check (  )
    this.type = type
    this.date = date
  }

  setingOb ( rate ) {

    check (  )
    this.type = rate.type
    this.date = rate.date

  }

  end (  ) {

    this.desconect (  )
  }

  add ( data, callback ) {

    this.thisTable (  )
    this.insertIntoTable ( this.table, {

      type: data.type,
      date: data.date,
    } , callback )
  }

  save ( callback ) {

    this.thisTable (  )
    this.insertIntoTable ( this.table, {

      type: this.type,
      date: this.date,
    } , callback )
  }

  remove ( rate ) {

    this.thisTable (  )
  }

  removeUser ( whereCondiction, callback ) {

    this.thisTable (  )
    this.deleteIntoTable ( this.table,  whereCondiction, ( res ) => callback ( res ) )
  }

  update ( data, whereCondiction, callback ) {

    this.thisTable (  )
    this.updateIntoTable ( this.table, data, whereCondiction, ( res ) => {
      callback ( res )
    } )
  }

  updateUser ( rate ) {

    this.thisTable (  )
  }

  show ( callback ) {

    this.thisTable (  )
    this.showIntoTable ( this.table, ( res ) => { callback ( res ) } )
  }

  search ( filter, callback ) {

    this.thisTable (  )
    this.showIntoTable ( this.table, ( res ) => { callback ( res ) }, filter )
  }

  setType ( typeField ) {

    this.type = typeField
  }

  getType (  ) {

    return this.type
  }

  setDate ( date ) {

    this.date = date
  }

  getDate (  ) {

    return this.date
  }
}
