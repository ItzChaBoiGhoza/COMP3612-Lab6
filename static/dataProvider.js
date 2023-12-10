const path = require('path');
const fs = require('fs');

const jsonPath = path.join(__dirname, '..', 'paintings.json');
// console.log(jsonPath);
const jsonData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonData);

module.exports = data;