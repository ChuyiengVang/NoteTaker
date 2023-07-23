const fs = require('fs');
const util = require('util');

const readFilesAsync = util.promisify(fs.readFile);
const writeFilesAsync = util.promisify(fs.writeFile);

class DataStore {

    constructor(file) {
        this.file = file;
        this.data = {};
    }

    read() {
        return readFilesAsync(this.file, 'utf8')
        .then((res) => this.data = JSON.parse(res));
    }

    save() {
        return writeFilesAsync(this.file, JSON.stringify(this.data));
    }
}

module.exports = { DataStore };