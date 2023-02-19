/**
 * Executes a shell command and return it as a Promise.
 */
export function execShellCommand( cmd: string )
{
    const exec = require( "child_process" ).exec;
    return new Promise( ( resolve, reject ) =>
    {
        exec( cmd, ( error: any, stdout: any, stderr: any ) =>
        {
            if ( error )
            {
                console.warn( error );
            }
            resolve( stdout? stdout : stderr );
        } );
    } );
}