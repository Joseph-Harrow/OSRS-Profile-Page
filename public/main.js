
//Fetch "Player" data from Server and update <p> objects to output data.
const getPlayer = async () => {
  const urlToFetch = 'http://localhost:4001/player'
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){
      let jsonResponse = await response.json()
      return jsonResponse
    }
  }catch(error){
    console.log(error)
  }
};

//Fetch "stats" data from Server and update <p> objects to output data.
const getPlayerStats = async () => {
  const urlToFetch = 'http://localhost:4001/stats'
  try{
    let response = await fetch(urlToFetch);
    if (response.ok){
      let jsonResponse = await response.json()
      return jsonResponse
    }
  }catch(error){
    console.log(error)
  }
};

//Add row to table formatted with two columns with the input name and data
function updateTable(title,value){
  let table = document.getElementsByClassName("statsTableBody")[0];
  table.appendChild(document.createElement("tr") );

  let row = table.children[table.children.length-1]
  row.appendChild(document.createElement("td"));

  let col = row.children[0]
  col.appendChild(document.createElement("h3"));
  col.children[0].innerHTML=title
  row.appendChild(document.createElement("td"));
  col = row.children[1]
  col.appendChild(document.createElement("h3"));
  col.children[0].innerHTML=value
}

//Main function to update page, called by pressing the button HTML element.
function updatePage(){
  //Display username and  raw player info
  getPlayer().then((rawPlayer)=>{
    console.log(rawPlayer)
    let Username  = rawPlayer.data.Username;
    document.getElementById("InfoBox").innerHTML=`Got player info for player ${Username}`
    document.getElementById("InfoBox2").innerHTML=JSON.stringify(rawPlayer)
  })
  //Display raw player stats
  getPlayerStats().then((rawStats)=>{
    document.getElementById("InfoBox3").innerHTML=JSON.stringify(rawStats)
    });
  //Add a column to the table
  document.getElementsByClassName("statsTable")[0].style.visibility='visible'
  updateTable("update","table")
} 

document.getElementById("testButton").addEventListener("click",updatePage);