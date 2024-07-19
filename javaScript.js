var dukatenAmount =0; 
var artefactAmount = 0; 
var value = 0; 

console.log(artefactAmount);

function addArtefact(){
    artefactAmount = artefactAmount +1;
    document.getElementById("Artefact").innerHTML = artefactAmount;

}

function addDukate_A(value){
    if(artefactAmount != 0){
        value = Number(value);
        console.log(value);
        if(value == 15){
            artefactAmount--;
            dukatenAmount += 15;
        };
        if(value == 25){
            artefactAmount--;
            dukatenAmount += 25;
        };
        if(value == 45){
            artefactAmount--;
            dukatenAmount += 45;
        };
        if(value == 100){
            artefactAmount--;
            dukatenAmount += 100;
        };
        document.getElementById("Artefact").innerHTML = artefactAmount;
        document.getElementById("Dukaten").innerHTML = dukatenAmount;
    };
};