const FRONT = "card_front";
const BACK = "card_back";

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
    console.log(cards);
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

    for(let tech of techs){
        cards.push(createPairFromTech(tech));
    }

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
