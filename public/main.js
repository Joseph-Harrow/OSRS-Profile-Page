
const getPlayer = async () => {
  const urlToFetch = 'http://localhost:4001/player'
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){
      
      let jsonResponse = await response.json()
      let Username  = await jsonResponse.data.Username;
      let text = JSON.stringify(Username)
      let raw = JSON.stringify(jsonResponse)
      document.getElementById("InfoBox").innerHTML=`Got player info for player ${text}`
      document.getElementById("InfoBox2").innerHTML=raw
    }
  }catch(error){
    console.log(error)
  }
};

document.getElementById("testButton").addEventListener("click",getPlayer)