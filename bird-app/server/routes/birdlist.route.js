const router = require('express').Router();

router.get('/', (req, res)=>{
    console.log('/bird GET');
    res.send('chirp')
})

module.exports = router;