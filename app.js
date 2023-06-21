const { argv } = require("process");
const yargs = require("yargs");
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: "Email anda",
            demandOption: true,
            type: 'string',
        },
        noHp: {
            describe: "No handphone",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    }
}).demandCommand();


// Menampilkan daftar semua nama & nohp contact

yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & nohp contact',
    handler() {
        contacts.listContact();
    },
    
});

yargs.command({
    command: 'list',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    }
    
});


yargs.parse();

















// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan email anda : ', (email) => {
//             resolve(email);
//         });
//     });
// };
// const {tulisPertanyaan, simpanContact} = require('./contacts');

// const main = async () => {
//     const nama = await tulisPertanyaan('Masukkan nama anda : ');
//     const email = await tulisPertanyaan('Masukkan email anda : ');
//     const noHp = await  tulisPertanyaan('Masukkan No Hp anda : ');

//     simpanContact(nama, email, noHp);
// }

// main();

// rl.question('Masukkan nama anda : ', (nama) => {
// rl.question('Masukkan nohp anda : ', (noHp) => {
//     rl.question('Masukkan email anda : ', (email) => {
//     const contact = {nama, noHp, email};
//     const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//     const contacts = JSON.parse(fileBuffer);

//     contacts.push(contact)

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

//     console.log('Terimakasih sudah memasukkan data.');
//     rl.close();
//     });
// });
// });