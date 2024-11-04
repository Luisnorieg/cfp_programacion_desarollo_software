const express = require('express');
const app = express();
const port = 3000;
const products = [
  { image: "https://img.pokemondb.net/artwork/avif/venusaur.avif", id: 1, name: 'Venusaur', type: "Grass · Poison" },
  { image: "https://img.pokemondb.net/artwork/avif/charizard.avif", id: 2, name: 'Charizard', type: "Fire · Flyng" },
  { image: "https://img.pokemondb.net/artwork/avif/blastoise.avif", id: 3, name: 'Blastoise', type: "Water" },
  { image: "https://img.pokemondb.net/artwork/avif/charmander.avif", id: 4, name: 'Charmander', type: "Fire" }
];


app.get('/', (req, res) => {
  res.json(products[1]);
});



app.get('/pokemon/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Pokémon no encontrado');
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


