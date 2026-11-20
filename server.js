
const { app } = require("./app.js");

// designate which PORT the server will listen on
const PORT = 4001;

// listen on the designated PORT
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
