
import '../css/greet.css'

export const greet = ( name ) => {

    console.log('Create HTML!')

    const h1 = document.createElement('h1')
    h1.innerText = `Hi, ${ name }`

    document.body.append( h1 )
}
