export default class MyError extends Error
{

  constructor ( ObjectError = {} ) {

    super (  )

    let checkFields = (  ) =>  {

      ObjectError.name = ( !!ObjectError.name ) ? ObjectError.name  : ''
      ObjectError.message = ( !!ObjectError.message ) ? ObjectError.message  : ''
      ObjectError.obj = ( !!ObjectError.obj ) ? ObjectError.obj : {}
    }

    checkFields (  )

    this.name = 'MyError:' + ObjectError.name
    this.message = ObjectError.message
    this.obj = ObjectError.obj


  }

  static handler ( err ) {

    if ( err instanceof this ) {

      console.log("### ERROR ###");
      console.log( err.name )
      console.log( err.message )
      console.log( err.obj )
    }

    if ( err instanceof Error ) console.log ( err );

    else {

      console.log ( err )
    }

    return err
  }

}
