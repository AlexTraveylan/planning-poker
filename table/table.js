class Card {
    // id (entier entre 1 et 10): numero du joueur
    // number (entier) : nombre sur la carte
    // choix (boolean) : si le joueur a choisi sa carte
    // visible (boolean) : si le numero est visible 
    constructor(id, number = 0, choix = false, visible = false){
        this.id = id;
        this.number = number;
        this.choix = choix;
        this.visible = visible;
    }

    activate() {
        this.visible = true;
    }

    deactivate() {
        this.visible = false;
    }

    carteChoisie() {
        if (this.visible) {
            document.getElementById(`player${this.id}`).style.backgroundColor = "grey";
            this.choix = true;
        }        
    }

    carteDevoiler(){
        if (this.choix = true) {
            document.getElementById(`player${this.id}`).removeAttribute("style");
            document.getElementById(`number${this.id}`).innerHTML = this.number;
        }
    }
}

const bouton = '<button class="table__btn" id="table__btn">Lancer le vote</button>';
const centreTable = document.getElementById('center__table');


//A utiliser avec compteur = 3 ou aucun argument.
//Lance un compte à rebours.
function lancerCompteARebour(compteur=3){
    if (compteur != -1) {
        centreTable.innerHTML = compteur;
        compteur --;
        setTimeout(`lancerCompteARebour(${compteur});`, 1000);
    } else {
        centreTable.innerHTML = "";
    }
}

//Bouton au milieu de la table
centreTable.innerHTML = bouton;
const bouton_target = document.getElementById('table__btn');
bouton_target.addEventListener('click', () => {
    lancerCompteARebour();
});

//tests
let card1 = new Card(1);
let card2 = new Card(2);
let card3 = new Card(3);
let card4 = new Card(4);
let card5 = new Card(5);
let card6 = new Card(6);
let card7 = new Card(7);
let card8 = new Card(8);
let card9 = new Card(9);
let card10 = new Card(10);
listeJoueurs = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10];

card1.carteChoisie();
card2.carteChoisie();

card1.number = 9;
card1.carteDevoiler();

//joueurs

