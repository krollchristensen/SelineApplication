const fs = require('fs');
const path = require('path');

// Funktion til at læse filindholdet
exports.readFileContent = (callback) => {
    const filePath = path.join(__dirname, '../public/sample.txt');
    fs.readFile(filePath, 'utf8', callback);
};
