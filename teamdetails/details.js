var teamsData=JSON.parse(localStorage.getItem('teamsStorage'))
console.log(teamsData)
var players=JSON.parse(localStorage.getItem('playersStorage'))
    var teamId=window.location.search.split('=')[1];
    console.log(teamId)
    var teamMainDiv = $("#teamDetailsDiv");
    var toppersDiv = $("#toppers");
    var playersCard = $("#playersDiv");
    for(i=0;i<teamsData.length;i++){
       // console.log(teamsData[i])
        if(teamId==teamsData[i].id){
           // console.log(teamsData[i])
           var teamsToppers=`<h2 class="teamName">${teamsData[i].teamName}</h2><img class="teamImg" src="${teamsData[i].teamIcon}"/>
           <p class="tbm">Top Batsman:<span class="bm1">${teamsData[i].topBatsmen}</span></p>
           <p class="tbm">Top Bowler:<span class="bm1">${teamsData[i].topBowler}</span></p>
           <p class="tbm">Championship Won:<span class="bm1">${teamsData[i].champoinshipWonCount}</span></p>`
            toppersDiv.append(teamsToppers)
            for(j=0;j<players.length;j++){
                if(teamsData[i].teamName==players[j].from){
                    console.log(players[j])
                    var playersCard1=`<a href="${'.../playerdetails/player.html?pid='+players[j].pid}" alt="player"><div class="pcard1"><h4 class="pName">${players[j].fullName}</h4>
                    <div class="pimgDiv"><img class="pimg1" src="${players[j].photo}"/></div>
                    <div class="pdetailsDiv">
                    <p class="pTeam1">${players[j].from}</p>
                    <p class="pTeam1">${players[j].playingStatus}</p>
                    <p class="pTeam1">${players[j].role}</p>
                    <p class="pTeam1">${players[j].price}</p></div></div></a>`
                    playersCard.append(playersCard1)
                }
               
            }
        }
        
    }
