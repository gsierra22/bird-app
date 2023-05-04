const express=require('express');
const app = express();
//uses

//globals
const port = 5001;
app.listen(port, ()=>{
    console.log('server up on:', port);
});