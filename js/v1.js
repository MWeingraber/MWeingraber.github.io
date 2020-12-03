function Game(){
    //Variablen
    var VerfügbareIDs = ["a", "b", "c" , "d", "e", "f", "g", "h"];
    var genommeneIDs1 = [];
    var genommeneIDs2 = [];

    var umgedrehteKarten = [];
    var ZeitSek = 0;
    var Score = 0;

    function Hochdrehen(event){
        if(umgedrehteKarten.length != 2 && event.target.className != "card flipped"){
            event.target.classList.toggle("flipped"); 
            umgedrehteKarten.unshift(event.target);

            Control();
        }
    }


    function Control(){
        if(umgedrehteKarten.length.valueOf() == 2){
            if(umgedrehteKarten[0].id == umgedrehteKarten[1].id){
                
                Score += 1
                document.querySelector('#Überschrift').textContent = `Score: ${Score}`;

                while(umgedrehteKarten.length > 0){
                    umgedrehteKarten.pop();
                }
            }
            else{
                setTimeout(function(){
                    umgedrehteKarten.forEach(element => {
                        element.classList.toggle("flipped");

                    });
                    
                    while(umgedrehteKarten.length > 0){
                        umgedrehteKarten.pop();
                    }

                }, 500);
            }
        }

        if(Score == 8){
            setTimeout(() => {
                window.alert(`Du hast es geschafft (Innerhalb von ${ZeitSek} Sekunden)!`);
                location.reload();
            }, 1000);
        }

    }

    function CardErstellen(){
        var Container = document.querySelector('#card-deck');

        for (let index = 1; index < 17; index++) {
            var nCard = document.createElement("div");
            nCard.classList.add("card");
            nCard.setAttribute("id", VerfügbareIDs[GetRightID()-1]);
            Container.appendChild(nCard);
        }
    }


    function GetRightID(){
        for (let index = 0; index < 300; index++) {
            var idIndexGef = Math.round((Math.random() * (8 - 1) + 1));

            if(genommeneIDs1.indexOf(VerfügbareIDs[idIndexGef]) == -1 && idIndexGef != 0){
                genommeneIDs1.push(VerfügbareIDs[idIndexGef]);
                return idIndexGef;
            }
            else if(genommeneIDs2.indexOf(VerfügbareIDs[idIndexGef]) == -1 && idIndexGef != 0){
                genommeneIDs2.push(VerfügbareIDs[idIndexGef]);
                return idIndexGef;
            }
            else{
                continue;
            }
        }
    }

    function CardEventsErstellen(){
        let CardList = document.querySelectorAll('.card');
        CardList.forEach(element => {
            element.addEventListener('click', Hochdrehen);
        });
    }

    CardErstellen();
    CardEventsErstellen();
    var Timer = setInterval(function(){
        ZeitSek += 1;            
    }, 1000);
}

Game();