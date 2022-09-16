const bananaApp = () => {
  const alertMessage = async (msg, title, author) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    console.log(`📢 POKE API: ${data}`);
    console.log(`📢 ${author}: ${title}/${msg}`);
  };
  return { alertMessage };
};

export default bananaApp;
