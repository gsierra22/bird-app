const express=require('express');
const app = express();
const birdlist = require('./routes/birdlist.route');
//uses
app.use('/birdlist', birdlist)

//globals
const port = 5001;
app.listen(port, ()=>{
    console.log('server up on:', port);
});