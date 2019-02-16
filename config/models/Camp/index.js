import Database from '../Database'

export default class User extends Database {


  thisTable (  ) {

    this.table = 'camps'
  }

  checkFields (  ) {

    this.type = ( !!this.type ) ? this.type  : ''
    this.value = ( !!this.value ) ? this.value  : ''
    this.value = ( !!this.value ) ? this.value  : ''
    this.value = ( !!this.value ) ? this.value  : ''
    this.value = ( !!this.value ) ? this.value  : ''
    userid
    max
    total
    type
    idcost
    global
  }

  checkTable ( callbackCreation ) {

    let createTableForModel = () => {
      this.queryResult (
        'CREATE TABLE ' + this.table +' (' +
        ' id INT (12) NOT NULL AUTO_INCREMENT,' +
        ' username CHAR (50) NOT NULL,' +
        ' userid INT (50) NOT NULL,' +
        ' max INT (50) NOT NULL,' +
        ' total INT (50) NOT NULL,' +
        ' type CHAR (50) NOT NULL,' +
        ' idcost INT (12) NOT NULL,' +
        ' global BIT (2) NOT NULL,' +
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
    if ( !flagFieldsOff.value ) if ( !!!data.value ) return false

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

  seting ( type = "", value = "" ) {

    check (  )
    this.type = type
    this.value = value
  }

  setingOb ( cost ) {

    check (  )
    this.type = cost.type
    this.value = cost.value

  }

  end (  ) {

    this.desconect (  )
  }

  add ( data, callback ) {

    this.thisTable (  )
    this.insertIntoTable ( this.table, {

      type: data.type,
      value: data.value,
    } , callback )
  }

  save ( callback ) {

    this.thisTable (  )
    this.insertIntoTable ( this.table, {

      type: this.type,
      value: this.value,
    } , callback )
  }

  remove ( cost ) {

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

  updateUser ( cost ) {

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

  setValue ( value ) {

    this.value = value
  }

  getValue (  ) {

    return this.value
  }
}
