// conjunto globais
const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];

let cards= null;

startGame();

// função para iniciar o jogo
function startGame(){

    cards = createCardsFromTechs(techs);
    shuffleCards(cards);
    initializeCards(cards);
}

// função para pegar o medelo das cartas e deixar ela " virtual"
function initializeCards(cards){

    let gameBoard = document.getElementById("gameBoard");

    cards.forEach(card =>{

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('CARD');
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

        
    })


}

// função para criar carta "frente" e carta "verso"
function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}


function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);

    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}


// função para embaralhar as cartas
function shuffleCards(cards){

    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]; // para inverter os valores
    }

}

// função para criar as cartas
function createCardsFromTechs(techs){

    let cards =[];

    techs.forEach((tech) => {
        cards.push(createPairFromTech(tech));
    })

    return cards.flatMap(pair => pair);
}

// função para criar os pares de cartas
function createPairFromTech(tech){

    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,

    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }];
}
 //função para criar um número aleatório para podermos trabalhar
function createIdWithTech(tech){
    
    return tech + parseInt(Math.random() *1000);
}

// função para "virar" a carta
function flipCard(){
    this.classList.add("flip");
}
