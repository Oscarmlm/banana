const bananaApp = () => {
  const alertMessage = (msg, title, author) => {
    console.log(`📢 ${author}: ${title}/${msg}`);
  };
  return { alertMessage };
};

export default bananaApp;
