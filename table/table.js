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

    carteChoisie() {
        document.getElementById(`player${this.id}`).style.backgroundColor = "grey";
    }
}

card1 = new Card(1);
card2 = new Card(2);

card1.carteChoisie();
card2.carteChoisie();
