const bananaApp = () => {
  const pokemon = async () => {
    console.log(`📢 Pokemon`);
  };

  const rickAndMorty = () => {
    console.log('😎 Rick & Morty');
  };

  const houseOfDragons = () => {
    console.log('🐲 House of Dragons');
  };

  return { pokemon, rickAndMorty, houseOfDragons };
};

export default bananaApp;
