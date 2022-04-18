var players=JSON.parse(localStorage.getItem('playersStorage'))
var playerId1=window.location.search.split('=')[1]
console.log(playerId1)
console.log(players)
var playerImgDiv=$("#playerImage");
var playerDetailsDiv=$("#aboutPlayer")
for(i=0;i<players.length;i++){
    if(playerId1==players[i].pid){
        console.log(players[i])
        var playerImgDiv1=`<div class="playerPhotoDiv"><img class="playerPhoto" src="${players[i].photo}"/></div>`
        playerImgDiv.append(playerImgDiv1)
        var playerDetailsDiv1=`<p class="name"><span class="sname">${players[i].fullName}</span></p>
        <p class="team">Team:<span class="steam">${players[i].from}</span></p>
        <p class="team">Playing Status:<span class="steam">${players[i].playingStatus}</span></p>
        <p class="team">Role:<span class="steam">${players[i].role}</span></p>
        <p class="team">Price:<span class="steam">${players[i].price}</span></p>
        `
        playerDetailsDiv.append(playerDetailsDiv1)
    }
}