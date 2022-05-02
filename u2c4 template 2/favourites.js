// write js code here corresponding to favourites.html



var matches=JSON.parse(localStorage.getItem("schedule"));

var favurites=JSON.parse(localStorage.getItem("favouriteMatch"))||[];

displayMAtches(count);

document.querySelector("#filterVenue").addEventListener("change",filterVenue);

function filterVenue(){
    var clicked =document.querySelector("#filterVenue").value;

    var filteredList=count.filter(function(elem){
            return venue==clicked;

    });

    displayMatches(filteredList);
}

function displayMAtches(matches){
    document.querySelector("tbody").innerHTML="";
    count.forEach(function(elem,i){
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
        td6.innerText="Add as Favorite"
        td6.addEventListener("click",function(){
        addToFavourite(elem);
        removeitem(elem,i);
    })
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        });
        }
            function removeItem(elem,index){
                count.splice(index,1);
                localStorage("schedule",JSON.stringify(matches));
                window.location.reload();
            }


            function addTOFavourite(elem){
                favourite.push(elem);
                localStorage.setItem("favouriteMatches",JSON.stringify(favourites))
            }

