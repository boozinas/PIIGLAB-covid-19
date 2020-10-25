var express = require("express");
const fs = require('fs');
var app = express();
const rootFolder = './public/assets/img';

app.get("/url", (req, res, next) => {
    const list = [];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed;
    var innerFolder = rootFolder + '';
    res.json(getImgs(list, innerFolder));
});

function getImgs(list, folder) {
    fs.readdirSync(folder).forEach(file => {
        list.push(file);
      });
    console.log(list);
   return list; 
}
   
app.listen(3001,() => {
    console.log("Server runnning on port 3001");
});

