const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const letter=[];
  let decodeLet=[];
  const letterCount = expr.length/10;

/*********Break the string on letters*******/

  for (let i=0; i<=letterCount; i++){
    letter[i]=expr.slice(i*10,i*10+10);
  }

  /******Decode 1 level (dots and slashes) each letter*******/

  for (let i=0; i<letter.length; i++) {
    let text=[];
    let decText;
    for (let j=0; j<=9; j+=2){
      let symb = letter[i].slice(j, j+2);
      if (symb === '10') {
        text.push('.')
      }
      if (symb === '11') {
        text.push('-')
      }
      if (symb === '**') {
        text.push(' ');
        break;
      }
    }

    ///******Decode level 2 into letters */

    if (text.join('')===' ') {
      decText = ' ';
      decodeLet.push(decText);
    }

    for (let k=0; k<=Object.keys(MORSE_TABLE).length; k++) {
      if (text.join('')=== Object.keys(MORSE_TABLE)[k] ) {
        decText = Object.values(MORSE_TABLE)[k];
        decodeLet.push(decText);
      }
    }
  }
   return decodeLet.join('');
}

module.exports = {
    decode
}
