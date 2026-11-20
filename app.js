const express = require('express');
const app = express();

app.use(express.static('public'));

module.exports = { app };

let testUrl = "https://api.datamuse.com/words?sl="
let baseUrl = "https://templeosrs.com/api/player_info.php"
let Username = []

const getPlayer = async () => {
  const playerRequestEndpoint = "?player=Settled"
  const urlToFetch = baseUrl+playerRequestEndpoint
  console.log(urlToFetch)
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){
      Username = await response.json()
    }
  }catch(error){
    console.log(error)
  }
};

getPlayer()
console.log(`Outside ${Username}`)

app.get('/player', (req, res, next) => {
   console.log(`Get ${Username}`)
  res.send(Username);
});