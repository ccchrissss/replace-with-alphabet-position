function alphabetPosition(text) {

  text = text.toLowerCase()
  
  let alphabetList = 'abcdefghijklmnopqrstuvwxyz'.split('')
  console.log(alphabetList)

  let alphPositionStr = []

  for (let i = 0; i < text.length; i++) {

    if ( alphabetList.includes( text.charAt(i) ) ) { 
      alphPositionStr.push( alphabetList.indexOf( text.charAt(i) ) + 1 )
    }

  }

  return alphPositionStr.join(' ')

}

console.log(alphabetPosition('dad bad'))


// parameters: text    // a string
// return: alphPositionStr     // a string inwhich each letter has been replaced with its position in the alphabet
// e.g. alphabetPosition('dad bad')
// results in '4 1 4 2 1 4'


// create an array alphabetList which contain a string of letters a-z split into elements by letter
// create an empty array called alphPositionStr
// loop through text using charAt() method
  // if alphabetList contains the current char then push its index + 1 to alphPositionStr
// end loop
// join the alphPositionStr using a single space as the separator
// return alphPositionStr



