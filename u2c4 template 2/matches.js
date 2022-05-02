// write js code here corresponding to matches.html


var favourites=JSON.parse(localStorage.getItem("favouriteMatches"));

displayMAtches(favourites);
function displayMAtches(matches){

    matches.forEach(function(elem,i){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchNo;
        var td2=document.createElement("td");
        td2.innerText=elem.team1;
        var td3=document.createElement("td");
        td3.innerText=elem.team2;
        var td4=document.createElement("td");
        td4.innerText=elem.dateOn ;  
        var td5=document.createElement("td");
        td5.innerText=elem.venue;
        var td6=document.createElement("td");
        td6.innerText="Remove"
        td6.style.color="red";
        td6.addEventListener("click",function(){
        removeitem(elem,i);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        });

        function removeItem(elem,index){
            count.splice(index,1);
            localStorage("favouriteMatches",JSON.stringify(favourites));
            window.location.reload();
        }

}