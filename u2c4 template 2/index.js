// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",addMatch)
var matches = JSON.parse(localStorage.getItem("schedule")) || [];

    function addMatch(){
        event.preventDefault();
    
    var fix= {
        matchNo : document.querySelector("#matchNum").value,
        team1 : document.querySelector("#teamA").value,
        team2 : document.querySelector("#teamB").value,
        dateOn : document.querySelector("#date").value,
        venue : document.querySelector("#venue").value
    };


    matches.push(fix);
    localStorage.setItem("schedule",JSON.stringify(matches));

}
