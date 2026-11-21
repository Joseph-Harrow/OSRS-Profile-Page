const express = require('express');
const app = express();

app.use(express.static('public'));

module.exports = { app };

let baseUrl = "https://templeosrs.com/api"

//Fetch "player" data from TempleOSRS API
const getPlayer = async () => {
  const playerRequestEndpoint = "/player_info.php?player=Settled"
  const urlToFetch = baseUrl+playerRequestEndpoint
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){
      return await response.json()
    }
  }catch(error){
    console.log(error)
  }
};

//Fetch "stats" data from TempleOSRS API
const getPlayerStats = async () => {
  const statsRequestEndpoint = "/player_stats.php?player=Settled&date="+Date.now()
  const urlToFetch = baseUrl+statsRequestEndpoint
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){
      return await response.json()
    }
  }catch(error){
    console.log(error)
  }
};



app.get('/player', (req, res, next) => {
  getPlayer().then((out)=>{
    res.send(out);
  })
  
});

app.get('/stats', (req, res, next) => {
  getPlayerStats().then((out)=>{
    res.send(out);
  })
});