const fs = require('fs');

// function to write HTML file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        const dir = "./dist"

        //check there is a dist directory exists, create it if not
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, err => {
                if (err) {
                    reject(err);
                    return;
                }
            });  
        }
        //write index.html file to dist folder
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "File created!"
            });
        });
    });
}

const copyStyle = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet copied'
            });
        });
    });
}

module.exports = { writeToFile, copyStyle };
//module.exports = writeToFile;