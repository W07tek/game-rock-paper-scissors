const gameChoice = {
    playerHand: '', 
    aiHand: ''
} 
const gameScore = {
    games: 0, 
    draws: 0, 
    wins:0,
    losses:0, 
    
} 
const hands = [...document.querySelectorAll('.select img')]; 
/* --------------------------------wyniki gry---------------- */
  

///hand selection!!   

function ResetScore() {
    document.querySelector('[data-summary="your-choice"]').textContent = '';
    document.querySelector('[data-summary="ai-choice"]').textContent = ''; 
    document.querySelector('[data-summary="who-win"]').textContent = ''; 
}

function changeColor() {  
    hands.forEach((hand => hand.style.boxShadow =''))
    const activeHand =  document.querySelector(`[data-option="${gameChoice.playerHand}"]`); 
    activeHand.style.boxShadow = '0px 0px 0px 10px red';      
}

function aiSelection() {
    const randomNumber = Math.floor(Math.random () * 3); 
    gameChoice.aiHand = hands[randomNumber].dataset.option; 
    console.log(gameChoice.aiHand + ' wybór komputeraa');
}  
/* --------------------------------------------------------- */ 

function playerSelection(e) {
    gameChoice.playerHand = e.target.dataset.option; 
    console.log(gameChoice.playerHand + ' mój wybór');
}

function HandSelection(e){ 
   
    ResetScore();
/*     ---------------------ai hand selection-------------------------- */ 
     aiSelection();

   /*  -----------------player hand selection-------------------- */
     playerSelection(e); 
    /*   -----------------change box shadow on hands------------------------- */
     changeColor(); 
    
} 
function checkResult(player,ai) { 
   
    
    if(player === ai) { 
        
        return'draw'
    }else if(player === 'kamień' && ai === 'nożyczki' || player === 'papier' && ai ==='kamień' || player ==='nożyczki' && ai ==='papier') {
        console.log('wygrałes');
       
        return'win'
    }else {
        console.log('przegrałes');
        
        return'loss' 
    } 
    
    
    
        
    }
    


function publishResult(player,ai,result) { 
    if(result === 'draw') { 
        gameScore.draws++;
    document.querySelector('[data-summary="who-win"]').textContent = 'Reims :/'; 
    document.querySelector('[data-summary="who-win"]').style.color = 'yellow';
   }else if (result === 'win') { 
    gameScore.wins++;
    document.querySelector('[data-summary="who-win"]').textContent = 'wygrałes z komputerem'; 
    document.querySelector('[data-summary="who-win"]').style.color = 'green';
   }else { 
    gameScore.losses++;
    document.querySelector('[data-summary="who-win"]').textContent = 'przegrałes z komputerem'; 
    document.querySelector('[data-summary="who-win"]').style.color = 'red';
   } 


    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai; 
   /*  ---------------------------------------------------------------------- */ 
   document.querySelector('.numbers span').textContent = ++gameScore.games; 
   document.querySelector('.draws span').textContent = gameScore.draws;   
   document.querySelector('.wins span').textContent = gameScore.wins;  
   document.querySelector('.losses span').textContent = gameScore.losses;  

   
   


}  

//Main function
function startGame() {    

   /*  -----------------ALERT----------------------- */ 
   console.log(gameChoice.playerHand);
    if(gameChoice.playerHand === '') {
        alert('Wybierz coś !!! :D') 
        return
    }  
   /*  ----------------------clear box Shadow----------------- */
    hands.forEach((hand => hand.style.boxShadow =''))
/* ------------------------check and publish result------------------------------------------- */ 
    const result = checkResult(gameChoice.playerHand,gameChoice.aiHand);       
    checkResult(gameChoice.playerHand,gameChoice.aiHand)
  
   publishResult(gameChoice.playerHand,gameChoice.aiHand,result);
   gameChoice.playerHand = '';
}


document.querySelector('.start').addEventListener('click',startGame);


hands.forEach((hand)=> {
    hand.addEventListener('click',HandSelection) 
}) 
    

   

