import mysql from 'mysql'
import MyError from '../classes/MyError'
import * as configdb from './config'

export default class Database {

  constructor ( host = configdb.host, user = configdb.user, password = configdb.password, database = configdb.database ) {

    this.connection = null
    this.host = host
    this.user = user
    this.password = password
    this.database = database

    this.connect (  )
  }

  createConect ( flagCondiction = true ) {

    if ( !!this.connection ) return this.connection

    let conectionData = {

      "host": this.host,
      "user": this.user,
      "password": this.password,
    }

    if ( flagCondiction ) conectionData.database = this.database

    return  mysql.createConnection(conectionData)
  }

  connect ( flagOfConnection = true ) {

    this.connection = this.createConect ( flagOfConnection )
    /// Deprecated Method because break errorhandler

    this.connection.connect ( ( error ) => {
      if ( error ) throw new MyError ( { message: " error of connect '" + error +"' ", obj: {

          message: "parameter 'configdb' unknow",
          especific: "unknow value into connect",
        } } )
    } );
  }

  desconect (  ) {

    this.connection = null
  }

  getConfig (  ) {

    return config
  }

  getConnection (  ) {

    return this.connection
  }

  queryResult ( query, flagOfCheck = true ) {

    return new Promise ( ( resolv, reject ) => {

      this.connect ( flagOfCheck )
      this.connection.query ( query, ( error, results, fields ) => {
        /// Deprecated Method because break errorhandler
        //
        if ( error ) reject ( error )
        resolv ( results, fields )
      } )
    } )
  }


  checkDatabase (  ) {

    this.queryResult ( 'SHOW DATABASES;', false)
    .then ( ( responseSearch ) => {

      let searchIntoDatabase = false

      responseSearch.map ( ( db ) => {

        if ( db.Database == this.database ) {

          searchIntoDatabase = true
        }
      } )

      if ( ! searchIntoDatabase ) {

        let queryCreate = 'CREATE DATABASE ' + this.database + ';'
        // let queryCreate = 'show databases;'

        this.queryResult ( queryCreate, false )
        .then ( ( res ) => {

          console.log("CREATING DATABASE " + this.database);
          console.log(res);
          console.log("OK");
        } )
        .catch ( ( err ) => {

          MyError.handler ( err )
        } )
      }
    } )
    .catch ( ( errSearch ) => {

      MyError.handler ( { name: errSearch } )
    } )
  }

  check ( flagCondiction ) {

    this.database = this.database
    if ( flagCondiction.database != null ) return this.checkDatabase (  )
  }

  stringfyDot ( stringDomain, stringfy ) {

    return stringDomain + '.' + stringfy
  }

  genQueryForCamps ( tableFrom, arrayCamps ) {

    if ( !arrayCamps ) return ''

    let whereQuery = ''

    let endCamp = arrayCamps [ arrayCamps.length - 1 ]

    arrayCamps.map ( ( camp ) => {

      whereQuery += this.stringfyDot ( tableFrom, camp )
      if ( endCamp != camp ) whereQuery += '\, '
    } )

    return whereQuery
  }

  genQueryUpdateFields ( objectKeys ) {

    if ( !objectKeys ) return ''

    let whereQuery = ''

    let endCamp = Object.keys ( objectKeys )
        [ ( Object.keys ( objectKeys ).length - 1 ) ]


    Object.keys ( objectKeys ).map ( ( key ) => {

      whereQuery += key + ' = '
      whereQuery += '"' + objectKeys [ key ] + '" '
      if ( endCamp != key ) whereQuery += '\, '
    })


    return whereQuery
  }

  genWhereQuery ( objectKeys ) {

    if ( !objectKeys ) return ''

    let whereQuery = ''

    whereQuery += ' ( '

    Object.keys ( objectKeys ).map ( ( key ) => {

      whereQuery += key + ' = '
      whereQuery += '"' + objectKeys [ key ] + '", '
    })

    whereQuery = whereQuery.slice ( 0, whereQuery.length - 2 )

    whereQuery += ' ) '

    return whereQuery
  }

  genQuery ( objectKeys ) {

    if ( !objectKeys ) return ''

    let camps = ''
    let values = ''

    camps += ' ( '

    Object.keys ( objectKeys ).map ( ( key ) => {

      camps += key + ', '
    } )

    camps = camps.slice( 0, camps.length - 2 )

    camps += ' ) '

    values += ' ( '

    Object.values ( objectKeys ).map ( ( value ) => {

      if ( !!!value ) value = ''
      values += '\"' + value + '\", '
    } )

    values = values.slice( 0, values.length - 2 )

    values += ' ) '

    return camps + 'VALUES' + values
  }

  join ( joinFields ) {

    let queryJoin = ' '

    if ( !!joinFields.type ) {

      joinFields.type = joinFields.type.toUpperCase (  )

      switch ( joinFields.type ) {

        case "INNER":
        case "LEFT":
        case "RIGHT":
          queryJoin += ' ' + joinFields.type + ' JOIN '
          break;

        case "FULL":
          queryJoin +=  ' ' + joinFields.type + ' OUTER JOIN '
          break;

        default:
          throw new MyError ( { message: " error of not fould type \'" + joinFields.type + "\'", obj: {
              message: "parameter ' "+ joinFields.type +" ' not fould",
              especific: "unknow type into join"
            } } )
      }

      const createKeysAndCampsOfOns = ( objectKeys ) => {

        let queryResultOnJoin = ''

        Object.keys ( objectKeys ).map ( ( key ) => {

          queryResultOnJoin += this.stringfyDot ( joinFields.table, key ) + ' = '
          queryResultOnJoin += '' + this.stringfyDot ( joinFields.outerTable, objectKeys [ key ] ) + ', '
        })

        queryResultOnJoin = queryResultOnJoin.slice ( 0, queryResultOnJoin.length - 2 )

        return queryResultOnJoin
      }

      if ( !!joinFields.outerTable ) {

        queryJoin += joinFields.outerTable
      } else throw new MyError ( { message: " error of outerTable '" + joinFields.outerTable +"' ", obj: {

          message: "parameter 'type' unknow",
          especific: "unknow type into join",
        } } )

      if ( !!joinFields.onCamps ) {

        queryJoin += ' ON '
        queryJoin += createKeysAndCampsOfOns ( joinFields.onCamps )
      } else throw new MyError ( { message: " error of onCamps '" + joinFields.onCamps +"' ", obj: {

          message: "parameter 'type' unknow",
          especific: "unknow type into join",
        } } )

    } else {
      throw new MyError ( { message: " error of type '" + joinFields.type +"' ", obj: {

        message: "parameter 'type' unknow",
        especific: "unknow type into join",
      } } )
    }

    if ( !!joinFields.whereJoin ) {

      const whereJoinQuery = ( tableFrom, fieldCamp ) => {

        let queryJoinWhere = ''

        queryJoinWhere += this.stringfyDot ( tableFrom, fieldCamp ) + ' IS NULL '

        return queryJoinWhere
      }

      queryJoin += ' WHERE '

      if ( joinFields.type == 'RIGHT'  )
          queryJoin += whereJoinQuery ( joinFields.table,
                                    joinFields.whereJoin.camp )
      else if ( joinFields.type == 'LEFT' ) queryJoin += whereJoinQuery  ( joinFields.outerTable, joinFields.whereJoin.camp )
      else if ( joinFields.type == 'FULL' ) {

        queryJoin += whereJoinQuery  ( joinFields.outerTable, joinFields.whereJoin.camp )
        queryJoin += ' OR '
        queryJoin += whereJoinQuery  ( joinFields.table, joinFields.whereJoin.camp )
     } else throw new MyError ( {
        message: " error of 'type' in '" + joinFields.whereJoin +"' ", obj: {

        message: "parameter 'type' unknow",
        especific: "unknow type into join",
      } } )

      return queryJoin

    } else return queryJoin
  }

  insertTable ( table, data ) {

    let queryInsert = ' INSERT INTO ' + table + this.genQuery ( data )

    return queryInsert
  }

  selectTable ( fieldsOfSelect ) {

    let querySelect = 'SELECT '

    if ( !!fieldsOfSelect.camps )
      querySelect += this.genQueryForCamps ( fieldsOfSelect.table, fieldsOfSelect.camps )
    else
      querySelect += '*';

    if ( !!fieldsOfSelect.table )
      querySelect += ' FROM ' + fieldsOfSelect.table
    else
      throw new MyError ( { message: " invalid Valued of table '" + fieldsOfSelect.table + "'", obj: {

        message: "parameter '" + fieldsOfSelect.table + "' unknow",
        especific: "unknow type into selectTable"
      } } )

    if ( !!fieldsOfSelect.joinFields ) {

      fieldsOfSelect.joinFields.table = fieldsOfSelect.table
      querySelect += this.join ( fieldsOfSelect.joinFields )
    } else if ( !!fieldsOfSelect.whereCondiction ) {
      querySelect += ' WHERE ' + this.genWhereQuery ( fieldsOfSelect.whereCondiction )
    }

    return querySelect
  }

  removeTable ( table, whereCondiction ) {

    if ( whereCondiction == undefined )
      throw new MyError ( { message: "error of value", obj: {

        message: "parameter unknow",
        especific: "unknow whereCondiction into removeTable"
      } } )
    let queryDelete = 'DELETE FROM ' + table + ' WHERE ' + this.genWhereQuery ( whereCondiction )

    return queryDelete
  }

  updateTable ( table, data, whereCondiction ) {

    if ( whereCondiction == undefined )
      throw new MyError ( { message: "error of value", obj: {
        message: "parameter unknow",
        especific: "unknow whereCondiction into updateTable"
      } } )

    let queryUpdate = 'UPDATE ' + table + ' SET ' + this.genQueryUpdateFields ( data )
    queryUpdate += ' WHERE ' + this.genWhereQuery ( whereCondiction )

    return queryUpdate
  }

  capsulationQuery ( stringOfQuery ) {

    return ' ( ' + stringOfQuery + ' ) '
  }

  insertIntoTable ( table, data ) {

    return this.queryResult ( this.insertTable ( table, data ) )
  }

  selectIntoTable ( table, anyOptions = {} ) {

    let fieldsOfSelect = anyOptions

    fieldsOfSelect.table = table

    return this.queryResult ( this.selectTable ( fieldsOfSelect ) )
  }

  deleteIntoTable ( table, whereCondiction ) {

    return this.queryResult ( this.removeTable ( table, whereCondiction ) )
  }

  updateIntoTable ( table, data, whereCondiction ) {

    return this.queryResult ( this.updateTable ( table, data, whereCondiction ) )
  }

}
