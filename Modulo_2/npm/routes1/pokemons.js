const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.json('Bienvenidos');
});

// Obtener un Pokémon por ID
router.get('/', (req, res) => {

});


module.exports = router;
