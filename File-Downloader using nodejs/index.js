const express = require('express');
const alert = require('alert');
const app = express();
const zip = require('express-zip');
const folderPath = __dirname + '/Files';
app.get('/download', function(req, res) {
    res.download(folderPath + '/demo.txt', function(err) {
        if (err) {
            console.log(err);
        } else {

            alert("  File downloaded sucessfully !!!!!   ")
        }
    })
})
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function(req, res) {
    console.log('Server started to listen at 3000');
})