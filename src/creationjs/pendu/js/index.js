//alert("message");
function initGame() {
    //generer le mot a trouver
    //alert("Nouvelle partie");
    motToFind = getWord();
    let nbletters = motToFind.length;
    //remplir le html du nombre de _ en fonction du mot a trouver
    document.getElementById("letters").innerHTML = "";
    for (let i = 0; i < nbletters; i++) {

        document.getElementById("letters").innerHTML += '<span class= "letter">_</span>';
    }
    //creer les evenements pour les boutton de A a Z
    let alphabet = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
    let numImg = 1;

    document.getElementById("image").innerHTML =
    '<img src="img/Image1.png" alt="">'
    document.getElementById("message").innerHTML = "";

    for(let i = 0; i < alphabet.length; i++) {
        document.getElementById("btn" + alphabet[i]).removeAttribute("disabled");
        document.getElementById("btn" + alphabet[i]).onclick = function () {
            //alert(this.innerText);
            this.setAttribute("disabled", true);
            let currentletter = this.innerText;
            let good = false;
            for (let i = 0; i < motToFind.length; i++) {
                if (currentletter == motToFind[i]) {
                    document.getElementsByClassName("letter")[i].innerText = currentletter;
                    good = true;

                }

            }
            if (good == false) {
                numImg++;
                document.getElementById("image").innerHTML =
                    '<img src="img/Image' + numImg + '.png" alt= "">';

            }
            if (numImg == 12) {
                let bntArray = document.getElementsByClassName("btnletter");
                document.getElementById("message").innerHTML = ("youaredead");//je recupere l'id message ensuite j'affiche le message selon le deroulement de la partie
                var audio = document.getElementById("audio_youaredead");//meme chose que pour le message
                    audio.play();//execute le fichier audio.mp3
                for (let i = 0; i < bntArray.length; i++) {
                    bntArray[i].setAttribute("disabled", true);


                }
                
                   
                 

                
            }
            let condition = document.getElementById("letters").innerText.indexOf('_') == -1;
            if(condition){
                document.getElementById("message").innerHTML = ("youwin");
                var audio = document.getElementById("audio_youwin");
                    audio.play();
                  
                let bntArray = document.getElementsByClassName("btnletter");
                for (let i = 0; i < bntArray.length; i++) {
                    bntArray[i].setAttribute("disabled", true);
                }
                
                    var audio = document.getElementById("audio");
                    audio.play("youwin.mp3");
                  

            }
            


        }
    }



}
//je declare ma fonction play pour jouer le son
function play(){
    var audio = document.getElementById("audio_youaredead" );
    audio.play();

}
function play(){
    var audio = document.getElementById("audio_youwin" );
    audio.play();

}


let motToFind;
function getWord(){
    let mots = //[];
    txt;
    //  mots.push("JAVASCRIPT");
    //  mots.push("CORNICHON");
    //  mots.push("DENTIFRICE");
    //  mots.push("PAPILLES");
    //  mots.push("TRANSPORTER");
     let random = Math.floor(Math.random() * mots.length);
     let mot = mots[random];
     //remplacer les carecteres specieaux
     
     mot = mot.replace("â","a").replace("à","a").replace("ï","i").replace("î","i").replace("ô","o").replace("é","e").replace("è","e")
     .replace("ê","e").replace("ë","e").replace("ç","c");

  
     
    //code permettant de choisir un mot au hassard
    mot = mot.toUpperCase();
    return mot;
}
initGame();

document.getElementById("start").onclick = function (){
    initGame();
    
}

