const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('iqbal@gmail.com'));
// console.log(validator.isMobilePhone('08235232355', 'id-ID'));
// console.log(validator.isNumeric('08235232355'));

// console.log(chalk.italic.bgYellow.black('Hello World'));
const nama = 'Muhammad Iqbal';
const pesan = chalk`{bgRed Lorem ipsum dolor sit amet}, consectetur adipisicing elit. {bgGreen.italic.black Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?} {bgBlue.black Nama Saya : ${nama}}`;
console.log(pesan);
