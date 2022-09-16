const bananaApp = () => {
  const pokemon = async () => {
    console.log(`📢 Pokemon`);
  };

  const rickAndMorty = () => {
    console.log('😎 Rick & Morty');
  };

  return { pokemon, rickAndMorty };
};

export default bananaApp;
