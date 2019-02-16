
export default class User {


  thisTable (  ) {

    this.table = 'users'
  }

  checkFields (  ) {

    this.name = ( !!this.name ) ? this.name  : ''
    this.login = ( !!this.login ) ? this.login  : ''
    this.pass = ( !!this.pass ) ? this.pass  : ''
    this.repass = ( !!this.repass ) ? this.repass  : ''
    this.email = ( !!this.email ) ? this.email  : ''
    this.city = ( !!this.city ) ? this.city  : ''
    this.points = ( !!this.points ) ? this.points  : ''
    this.idrank = ( !!this.idrank ) ? this.idrank  : ''
  }

  checkTable ( callbackCreation ) {

    let createTableForModel = () => {

      let sqlCreat =
      "CREATE TABLE IF NOT EXISTS 'freelike'.'users' (" +
        "'id' BIGINT(64) UNSIGNED NOT NULL AUTO_INCREMENT," +
        "'name' VARCHAR(45) NOT NULL," +
        "'login' VARCHAR(45) NOT NULL," +
        "'pass' LONGTEXT NOT NULL," +
        "'email' VARCHAR(45) NOT NULL," +
        "'city' VARCHAR(45) NOT NULL," +
        "'points' BIGINT(64) UNSIGNED NULL," +
        "'ranks_id' BIGINT(64) UNSIGNED NOT NULL," +
        "PRIMARY KEY ('id')," +
        "INDEX 'fk_users_ranks_idx' ('ranks_id' ASC)," +
        "CONSTRAINT 'fk_users_ranks'" +
          "FOREIGN KEY ('ranks_id')" +
          "REFERENCES 'freelike'.'ranks' ('id')" +
          "ON DELETE NO ACTION" +
          "ON UPDATE NO ACTION)"

      this.queryResult ( sqlCreat )
    }

    this.queryResult ( 'show tables;', ( res ) => {

      if ( !res.length ) createTableForModel (  )

      if ( res.some(res => res['Tables_in_' + this.database] != this.table ) ) {

        createTableForModel (  )
      }
      callbackCreation ( { tableExist: true, createTable: false } )
    } )
  }

  validData ( data, flagFieldsOff = { points: true } ) {

    if ( !flagFieldsOff.name ) if ( !!!data.name ) return false
    if ( !flagFieldsOff.login ) if ( !!!data.login ) return false
    if ( !flagFieldsOff.pass ) if ( !!!data.pass ) return false
    if ( !flagFieldsOff.repass ) if ( !!!data.repass ) return false
    if ( !flagFieldsOff.email ) if ( !!!data.email ) return false
    if ( !flagFieldsOff.city ) if ( !!!data.city ) return false
    if ( !flagFieldsOff.points ) if ( !!!data.points ) return false

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

  seting ( name = "", login = "", pass = "", repass= "", email = "", city = "", points = "" ) {

    check (  )
    this.name = name
    this.login = login
    this.pass = pass
    this.repass = repass
    this.email = email
    this.city = city
    this.points = points
  }

  setingOb ( user ) {

    check (  )
    this.name = user.name
    this.login = user.login
    this.pass = user.pass
    this.repass = user.repass
    this.email = user.email
    this.city = user.city
    this.points = user.points

  }

  end (  ) {

    this.desconect (  )
  }

  add ( data, callback ) {

    this.thisTable (  )
    this.insertIntoTable ( this.table, {

      name: data.name,
      login: data.login,
      pass: data.pass,
      repass: data.repass,
      email: data.email,
      city: data.city,
      points: data.points,
    } , callback )
  }

  save ( callback ) {

    this.thisTable (  )
    this.insertIntoTable ( this.table, {

      name: this.name,
      login: this.login,
      pass: this.pass,
      repass: this.repass,
      email: this.email,
      city: this.city,
      points: this.points,
    } , callback )
  }

  remove ( user ) {

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

  updateUser ( user ) {

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
}
