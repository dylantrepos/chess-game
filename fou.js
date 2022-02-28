// Fonction pour les pions de types "Fou"
function fou(){
    
    tourJoueur()
    tableauPieceEnMemoireJoueur.push(caseChoisie);

    // Récupère l'id et la lettre de la case choisie
    var numIdCaseChoisie = idDeLaCaseChoisie.split("")[0];
    var lettreIdCaseChoisie = idDeLaCaseChoisie.split("")[1];

    var direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);
    var direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);
    var direction1a = direction1.previousElementSibling;
    var direction1b = direction1.nextElementSibling;
    var direction2a = direction2.previousElementSibling;
    var direction2b = direction2.nextElementSibling;

    var tableauNouveauDeplacement = [];

    // On ajoute la case choisie dans le tableau des déplacements possibles
    tableauDeplacementsPossiblesJoueur.push(caseChoisie);

    // On appelle toutes les déplacements une première fois
    avancerFouGauche();
    avancerFouDroite();
    reculerFouGauche();
    reculerFouDroite();
    //reculerTour();

    // Fonction pour définir le ciblage de la case
    // Si un enemi est présent ou non
    function ciblageCase(direction){
        if(direction.hasChildNodes() == false || direction.children.length == 0){
            if(direction.classList.contains("bordure") == false){
                direction.classList.add("case-possible");
                tableauDeplacementsPossiblesJoueur.push(direction);
                
            }
            
        }
        else if(direction.children[0].classList[0].split("-")[1] == nomJoueurEnemie){
            direction.classList.add("case-touchable");
            tableauDeplacementsPossiblesJoueur.push(direction);
            //echecTableauDeplacementsPossiblesJoueur.push(direction); 
            
        }
       
    }


    /* Les fonctions pour déplacer le fou */

    function avancerFouGauche(){
        if(direction1a !== null && direction1a.classList.contains("bordure") == false){

            ciblageCase(direction1a);
            // On récupère la case qui est devant
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction1a.children[0] === undefined){

                direction1 = document.getElementById("case-" + (Number(direction1a.id.split("-")[1].split("")[0]) + 1) + direction1a.id.split("-")[1].split("")[1]);
                direction1a = direction1.previousElementSibling;
                avancerFouGauche()
            }
            else{

                direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);

            }
        }
    }

    function avancerFouDroite(){
        if(direction1b !== null && direction1b.classList.contains("bordure") == false){

            ciblageCase(direction1b);            
            // On récupère la case qui est devant
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction1b.children[0] === undefined){

                direction1 = document.getElementById("case-" + (Number(direction1b.id.split("-")[1].split("")[0]) + 1) + direction1b.id.split("-")[1].split("")[1]);
                direction1b = direction1.nextElementSibling;
                avancerFouDroite()
            }
            else{

                direction1 = document.getElementById("case-" + (Number(numIdCaseChoisie) + 1) + lettreIdCaseChoisie);

            }

        }
    }

    function reculerFouGauche(){
        if(direction2a !== null && direction2a.classList.contains("bordure") == false){
            
            ciblageCase(direction2a);
            // On récupère la case qui est devant
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction2a.children[0] === undefined){

                direction2 = document.getElementById("case-" + (Number(direction2a.id.split("-")[1].split("")[0]) - 1) + direction2a.id.split("-")[1].split("")[1]);
                direction2a = direction2.previousElementSibling;
                reculerFouGauche()
            }
            else{

                direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);

            }
        }
    }

    function reculerFouDroite(){
        if(direction2b !== null && direction2b.classList.contains("bordure") == false){

            ciblageCase(direction2b);
            // On récupère la case qui est devant
            // Si la case est vide on continu
            // sinon on arrête et on réinitialise le compteur
            if(direction2b.children[0] === undefined){

                direction2 = document.getElementById("case-" + (Number(direction2b.id.split("-")[1].split("")[0]) - 1) + direction2b.id.split("-")[1].split("")[1]);
                direction2b = direction2.nextElementSibling;
                reculerFouDroite()
            }
            else{

                direction2 = document.getElementById("case-" + (Number(numIdCaseChoisie) - 1) + lettreIdCaseChoisie);

            }
        }
    }
        /* On sauvegarde les possibilités dans le bon tableau */
        if(tourDeJeu){
            tableauDeplacementsPossiblesJoueur1 = tableauDeplacementsPossiblesJoueur;
        }
        else{
            tableauDeplacementsPossiblesJoueur2 = tableauDeplacementsPossiblesJoueur;
        }
    

}