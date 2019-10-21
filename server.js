const express = require('express');
const path = require('path');

const app = express();

//The static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000

app.listen(PORT, function(){
   console.log("\nSERVER RUNNING ON PORT " + PORT); 
});