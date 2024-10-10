const express = require('express');
const router = express.Router();

// Datos de ejemplo
let Pikachu = [
    { id: 1, nombre: 'Pikachu', tipo: 'Eléctrico' }
];

// Obtener todos los Pokémon
router.get('/', (req, res) => {
    res.json(Pikachu);
});



module.exports = router;
