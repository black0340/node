const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8') //
    .then((data) => console.log(data))
    .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream corders! :)')
    .catch();
fs.appendFile('./file.txt', 'Yo, Dream corders! :)')
    .then(() => {
        //copy
        fs.copyFile('./file.txt', './file2.txt')
            .catch();
    })
    .catch();

// folder
fs.mkdir('sub-folder')
    .catch(console.error)
fs.readdir('./')
    .then(console.log)
    .catch(console.error);