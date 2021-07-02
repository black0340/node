const fs = require('fs');
const path = require('path');
const PATH = './'
const makeFolder = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
makeFolder('duplicated')
makeFolder('video')
makeFolder('captured')
fs.readdir(PATH, (_, data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].lastIndexOf("png") != -1 || data[i].lastIndexOf("aae") != -1) {
            fs.rename(PATH + data[i], PATH + 'captured/' + data[i], () => {
                console.log('move ' + data[i] + ' to captured');
            });
        } else if (data[i].indexOf("IMG_E") != -1) {
            Filename = data[i].replace("E", "");
            fs.rename(PATH + Filename, PATH + 'duplicated/' + Filename, () => {
                console.log('move ' + Filename + ' to duplicated');
            });
        } else if (data[i].lastIndexOf("mp4") != -1 || data[i].lastIndexOf("mov") != -1) {
            fs.rename(PATH + data[i], PATH + 'video/' + data[i], () => {
                console.log('move ' + data[i] + ' to video');
            });
        }

    }


})