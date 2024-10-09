const express = require('express');
const router = express.Router();

// Datos de ejemplo
let pokemons = [
    { id: 1, nombre: 'Pikachu', tipo: 'Eléctrico' }
];

// Obtener todos los Pokémon
router.get('/', (req, res) => {
    res.json(pokemons);
});



module.exports = router;
