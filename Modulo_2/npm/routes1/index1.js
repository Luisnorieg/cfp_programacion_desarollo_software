const express = require('express');
const app = express();
const port = 3000;

const pokemonRoutes = require('./pokemons');
app.use(express.json());
app.use('/pokemons', pokemonRoutes);


app.get('/pokemons/:id', function (req, res){
    res.send('Recibiendo 2');
});

app.get('/pokemons', function (req, res) {
    res.send('Recibiendo 1');
});

app.get('/', function (req, res) {
    res.send('¡Bienvenido a la API de Pokémon!');
});





app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
