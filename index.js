const bananaApp = () => {
  const pokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    console.log(`📢 POKE API: ${data}`);
  };

  const rickAndMorty = () => {
    console.log('😎 Rick & Morty');
  };

  return { pokemon, rickAndMorty };
};

export default bananaApp;
