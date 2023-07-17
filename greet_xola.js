//import greet from './greet.js'

// call the function & print the result on the screen
//console.log(greet('Xola'))

/* 

Run it using NodeJS, node greet_xola.mjs.

You should see Hello, Xola - from ES modules same output as before.

*/

import chalk from 'chalk';
import figlet from 'figlet';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)


figlet(greet('Xola'), function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});