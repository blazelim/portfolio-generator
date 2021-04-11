const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an error, reject the primise and send the error to the promises catch method
            if (err) {
                reject(err);
                //return out fo the function to make sure the promise doesnt accidentally execute the resolve function
                return;
            }

            // if everything went well, reseolve the promise and send the successful promise to the then() statement
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};


const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if(err) {
            reject(err);
            return;
        }
        
        resolve({
            ok: true,
            message: 'file copied!'
        });
      });
    });
};

module.exports = { writeFile,  copyFile};