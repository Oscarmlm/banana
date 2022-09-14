const bananaApp = () => {
  const alertMessage = (msg, title, author) => {
    console.log(`📢 ${author}: ${title}/${msg}`);
  };
  return { alertMessage };
};

console.log('Cambio 27');

export default bananaApp;
