const express = require('express');
const router = express.Router();

// Datos de ejemplo
let Charmande = [
    { id: 2, nombre: 'Charmander', tipo: 'Fuego' },
];

// Obtener todos los Pokémon
router.get('/', (req, res) => {
    res.json(Charmande);
});



module.exports = router;
