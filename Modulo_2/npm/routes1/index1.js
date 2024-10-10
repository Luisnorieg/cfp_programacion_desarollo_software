const express = require('express');
const app = express();
const port = 3000;

// const pokemonRoutes = require('./pokemons');
// app.use(express.json());
// app.use('/pokemons', pokemonRoutes);

// const primer = require('./pikachu')
// app.use(express.json());
// app.use('/pokemons/:pikachu', primer)




app.get('/pokemons/:charmander', function (req, res) {
    console.log('hola');
    res.json(ditto.json);
});

app.get('/', function (req, res) {
    res.json('¡Bienvenido a la API de Pokémon!');
});





app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
