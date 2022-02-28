var allCases = document.getElementsByClassName("case");
var scoreCompteurJoueur;
var scoreCompteurJoueur1 = 1;
var scoreCompteurJoueur2 = 1;

var caseChoisie = null;
var idDeLaCaseChoisie = null;
var pionDeLaCaseChoisie = null;
var idPionDeLaCaseChoisie = null;

var tableauDeplacementsPossiblesJoueur;
var tableauPieceEnMemoireJoueur;
var nbAvantDernierJoueur;
var pionEnMemoireJoueur; 

var echecTableauDeplacementsPossiblesJoueur;
var echecTableauDeplacementsPossiblesJoueurEnemie;

var tableauDeplacementsPossiblesJoueur1 = [];
var tableauPieceEnMemoireJoueur1 = [];
var nbAvantDernierJoueur1 = 0;
var pionEnMemoireJoueur1 = null; 
var echecTableauDeplacementsPossiblesJoueur1 = [];



var pieceQuiMetEnEchec = null;
var pieceQuiMetEnEchecJoueur1 = null;
var pieceQuiMetEnEchecJoueur2 = null;

var tableauDeplacementsPossiblesJoueur2 = [];
var tableauPieceEnMemoireJoueur2 = [];
var nbAvantDernierJoueur2;
var pionEnMemoireJoueur2 = null;
var echecTableauDeplacementsPossiblesJoueur2 = []; 

let metEnEchec = false;

var tourDeJeu = true;
var verificationCaseChoisie = true;
var verifEstUnPion = true;

var compteurImgJoueur; 
var compteurImgJoueur1 = 0; 
var compteurImgJoueur2 = 0; 

var nomJoueur;
var nomJoueurEnemie;
var nomJoueurTab = ["j1", "j2"];
var nomJoueur1 = "j1";
var nomJoueur2 = "j2";

var pionCapture;
var pionCaptureJoueur1 = "pion-capture-joueur1-";
var pionCaptureJoueur2 = "pion-capture-joueur2-";

var operation;
var plus = "+" ;
var moins = "-" ;

var echecAuRoi = false;


// Réinitialise le style de toutes les cases du plateau
// au début du tour de jeu
function retirerSelection(){
    for(var i = 0; i < allCases.length; i++){
        if(allCases[i].classList.contains("case-choisie") || allCases[i].classList.contains("case-possible") || allCases[i].classList.contains("case-touchable")){
            allCases[i].classList.remove("case-choisie");
            allCases[i].classList.remove("case-possible");
            allCases[i].classList.remove("case-touchable");
            
        }
    };
    
};



// Initialise chaque case du plateau
for(let i = 0; i < allCases.length; i++){
    allCases[i].addEventListener("click", function(){
        
        retirerSelection();
        
        caseChoisie = allCases[i];
        caseChoisie.classList.add("case-choisie");


        if(caseChoisie.classList.contains("bordure")){
            tableauDeplacementsPossiblesJoueur1 = [];
            tableauDeplacementsPossiblesJoueur2 = [];
            //echecTableauDeplacementsPossiblesJoueur1 = [];
            //echecTableauDeplacementsPossiblesJoueur2 = [];
            retirerSelection();
        }
        else{
            // Vérifie si la case contient un pion
            estUnPion(caseChoisie);
            // Fonction qui déplace le pion choisi si c'est possible 
            deplacement();
        
        }
    });

}



// Verifie si la case contient un pion
function estUnPion(laCase){
    if(laCase.children.length > 0){ 
        pionDeLaCaseChoisie = laCase.children[0].classList[0];
        idDeLaCaseChoisie = caseChoisie.id.split("-")[1];
        idPionDeLaCaseChoisie = pionDeLaCaseChoisie;

        // Vérifie le type de pion
        switch(pionDeLaCaseChoisie.split("-")[0]){
            case "pion":
                if(tourDeJeu && pionDeLaCaseChoisie.split("-")[1] == "j1"){
                    tableauDejaRemplis();
                    pion();
                    
                }
                else if(tourDeJeu == false && pionDeLaCaseChoisie.split("-")[1] == "j2"){
                    
                    tableauDejaRemplis();
                    pion();
                    
                }
                
            break;

            case "cheval":
                if(tourDeJeu && pionDeLaCaseChoisie.split("-")[1] == "j1"){
                    tableauDejaRemplis();
                    cavalier();
                }
                else if(tourDeJeu == false && pionDeLaCaseChoisie.split("-")[1] == "j2"){
                    tableauDejaRemplis();
                    cavalier();
                }
            break;

            case "tour":
                if(tourDeJeu && pionDeLaCaseChoisie.split("-")[1] == "j1"){
                    tableauDejaRemplis();
                    tour();
                }
                else if(tourDeJeu == false && pionDeLaCaseChoisie.split("-")[1] == "j2"){
                    tableauDejaRemplis();
                    tour();
                }
            break;

            case "fou":
                if(tourDeJeu && pionDeLaCaseChoisie.split("-")[1] == "j1"){
                    tableauDejaRemplis();
                    fou();
                }
                else if(tourDeJeu == false && pionDeLaCaseChoisie.split("-")[1] == "j2"){
                    tableauDejaRemplis();
                    fou();
                }
            break;
            
            case "renne":
                if(tourDeJeu && pionDeLaCaseChoisie.split("-")[1] == "j1"){
                    tableauDejaRemplis();
                    renne();
                }
                else if(tourDeJeu == false && pionDeLaCaseChoisie.split("-")[1] == "j2"){
                    tableauDejaRemplis();
                    renne();
                }
            break;

            case "roi":
                if(tourDeJeu && pionDeLaCaseChoisie.split("-")[1] == "j1"){
                    tableauDejaRemplis();
                    roi();
                }
                else if(tourDeJeu == false && pionDeLaCaseChoisie.split("-")[1] == "j2"){
                    tableauDejaRemplis();
                    roi();
                }
            break;

       }

    }
    else{
        pionDeLaCaseChoisie = null;
        idDeLaCaseChoisie = null;
        idPionDeLaCaseChoisie = null;
        
    }

    
}


// Fonction pour déplacer les pions sur le plateau
function deplacement(){

        // Si la case choisie fait parte des déplacements possibles
        compteurImgJoueur = 0;

        // Si il y a déjà un pion en mémoire, alors on le supprime
        if(tableauPieceEnMemoireJoueur !== undefined && tableauPieceEnMemoireJoueur.length > 1 ){
            tableauPieceEnMemoireJoueur = [];
            tableauPieceEnMemoireJoueur.push(caseChoisie);
        }

        // Si la case choisie fait partie du tableau des possibilités
        if(tableauDeplacementsPossiblesJoueur !== undefined && tableauDeplacementsPossiblesJoueur.includes(caseChoisie)){
            caseChoisie.classList.remove("case-choisie");
            for(var i = 0; i < tableauDeplacementsPossiblesJoueur.length; i++){

                // On vérifie s'il n y a pas pas deux image dans
                // le tableau des possibilités
                if(tableauPieceEnMemoireJoueur[i] !== undefined && tableauPieceEnMemoireJoueur[i].children[i] !== undefined && tableauPieceEnMemoireJoueur[i].children[i].nodeName == "IMG"){
                    compteurImgJoueur = compteurImgJoueur + 1;
                }

                // Si la case choisie n'est pas le premier pion en mémoire
                if(caseChoisie !== tableauDeplacementsPossiblesJoueur[0]){
                    if(caseChoisie == tableauDeplacementsPossiblesJoueur[i]){
                        nbAvantDernierJoueur = 0;

                        // Récupère le dernier pion en mémoire
                        nbAvantDernierJoueur = tableauPieceEnMemoireJoueur.length;
                        nbAvantDernierJoueur = nbAvantDernierJoueur - nbAvantDernierJoueur;
    
                        
                        document.getElementsByTagName("main")[0].style.pointerEvents = "none";

                        // Si c'est une case enemie, on vide le pion présent
                        // et on envoie le pion dans le tableau des scores
                        if(caseChoisie.hasChildNodes()){
                            if(caseChoisie.children[0] !== undefined){
                                
                                tableauPieceEnMemoireJoueur[nbAvantDernierJoueur].children[0].classList.add("anim-deplacement-debut")
                                
                                setTimeout(() => {
                                    caseChoisie.classList.add("case-test");
                                    caseChoisie.appendChild(tableauPieceEnMemoireJoueur[nbAvantDernierJoueur].children[0]);
                                    caseChoisie.children[1].classList.remove("anim-deplacement-debut");
                                    caseChoisie.children[1].classList.add("anim-attaque");
                                    caseChoisie.children[0].classList.add("anim-meurt");
                                }, 1000)

                                setTimeout(() => {
                                    caseChoisie.classList.remove("case-test");
                                    caseChoisie.children[1].classList.remove("anim-attaque");
                                    caseChoisie.children[0].classList.remove("anim-meurt");
                                }, 2700)

                                setTimeout(() => {
                                    document.getElementById(pionCapture + scoreCompteurJoueur).appendChild(caseChoisie.children[0]);

                                    if(tourDeJeu){
                                        scoreCompteurJoueur1 = scoreCompteurJoueur1 + 1; 
                                    }  
                                    else{
                                        scoreCompteurJoueur2 = scoreCompteurJoueur2 + 1; 
                                    }  
                                    /* Une fois le déplacement effectué, on change de tour */
                                    tourDeJeu = !tourDeJeu;
                                    if(tourDeJeu){
                                        document.getElementById("score-j2").children[0].classList.remove("tour-de-jeu")
                                        document.getElementById("score-j2").children[0].classList.add("pas-tour-de-jeu")
                                        document.getElementById("score-j1").children[0].classList.add("tour-de-jeu")
                                        document.getElementById("score-j1").children[0].classList.remove("pas-tour-de-jeu")
                                    }
                                    else{
                                        document.getElementById("score-j1").children[0].classList.remove("tour-de-jeu")
                                        document.getElementById("score-j1").children[0].classList.add("pas-tour-de-jeu")
                                        document.getElementById("score-j2").children[0].classList.add("tour-de-jeu")
                                        document.getElementById("score-j2").children[0].classList.remove("pas-tour-de-jeu")
                                    }
                                    tableauDeplacementsPossiblesJoueur = [];
                                    tableauPieceEnMemoireJoueur = [];
                                    document.getElementsByTagName("main")[0].style.pointerEvents = "";
                                }, 2700)


                                
                            }
                        }
                        else{
                            tableauPieceEnMemoireJoueur[nbAvantDernierJoueur].children[0].classList.add("anim-deplacement-debut")
                        
                            // On déplace le pion choisi sur la nouvelle case
                            setTimeout(() => {
                                caseChoisie.appendChild(tableauPieceEnMemoireJoueur[nbAvantDernierJoueur].children[0]);
                                caseChoisie.children[0].classList.remove("anim-deplacement-debut");
                                caseChoisie.children[0].classList.add("anim-deplacement-fin");
                            

                                // Si c'est le première déplacement du pion, 
                                // on retire la deuxième case disponible en avant
                                if(caseChoisie.children[0].classList.contains("traverse")){
                                    caseChoisie.children[0].classList.remove("traverse")
                                }

                                /* Une fois le déplacement effectué, on change de tour */
                                tourDeJeu = !tourDeJeu;
                                if(tourDeJeu){
                                    document.getElementById("score-j2").children[0].classList.remove("tour-de-jeu")
                                    document.getElementById("score-j2").children[0].classList.add("pas-tour-de-jeu")
                                    document.getElementById("score-j1").children[0].classList.add("tour-de-jeu")
                                    document.getElementById("score-j1").children[0].classList.remove("pas-tour-de-jeu")
                                }
                                else{
                                    document.getElementById("score-j1").children[0].classList.remove("tour-de-jeu")
                                    document.getElementById("score-j1").children[0].classList.add("pas-tour-de-jeu")
                                    document.getElementById("score-j2").children[0].classList.add("tour-de-jeu")
                                    document.getElementById("score-j2").children[0].classList.remove("pas-tour-de-jeu")
                                }
                                tableauDeplacementsPossiblesJoueur = [];
                                tableauPieceEnMemoireJoueur = [];

                                setTimeout(() => {
                                    caseChoisie.children[0].classList.remove("anim-deplacement-fin");
                                }, 100)
                                
                                document.getElementsByTagName("main")[0].style.pointerEvents = "";
                            }, 1000);

                        }
                    }
                }
            };
        }

        // Ou si la case choisi n'est pas un pion
        // et n'est pas dans les déplacements possibles
        else{
            tableauDeplacementsPossiblesJoueur = [];
            tableauPieceEnMemoireJoueur = []
        }
    
}




// Fonction pour définir les variables selon le joueur qui va jouer
function tourJoueur(){
    
    // Si vrai, c'est au tour de J1
    // sinon, c'est au tour de J2
    if(tourDeJeu){
        operation = moins;
        nomJoueur = nomJoueurTab[0];
        nomJoueurEnemie = nomJoueurTab[1];
        tableauPieceEnMemoireJoueur = tableauPieceEnMemoireJoueur1;
        tableauDeplacementsPossiblesJoueur = tableauDeplacementsPossiblesJoueur1;

        compteurImgJoueur = compteurImgJoueur1;
        pionCapture = pionCaptureJoueur1;
        nbAvantDernierJoueur = nbAvantDernierJoueur1;
        scoreCompteurJoueur = scoreCompteurJoueur1;
    }
    else{
        operation = plus;
        nomJoueur = nomJoueurTab[1];
        nomJoueurEnemie = nomJoueurTab[0];
        tableauPieceEnMemoireJoueur = tableauPieceEnMemoireJoueur2;
        tableauDeplacementsPossiblesJoueur = tableauDeplacementsPossiblesJoueur2;

        compteurImgJoueur = compteurImgJoueur2;
        pionCapture = pionCaptureJoueur2;
        nbAvantDernierJoueur = nbAvantDernierJoueur2;
        scoreCompteurJoueur = scoreCompteurJoueur2;
        
    }
}


function tableauDejaRemplis(){
    if(tableauDeplacementsPossiblesJoueur1.length != 0){
        tableauDeplacementsPossiblesJoueur1 = [];
    }
    else if(tableauDeplacementsPossiblesJoueur2.length != 0){
        tableauDeplacementsPossiblesJoueur2 = [];
    }
}

