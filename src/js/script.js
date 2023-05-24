var playerScore = 0;
var computerScore = 0;
var playElement = document.getElementById('play');
var items = ['rock','paper','scissor','lizard','spock'];
var selectElement = document.getElementById('data');
var playerDisplayElements = document.getElementsByClassName('player-game-image');
var computerDisplayElements = document.getElementsByClassName('computer-game-image');
var reloadButton = document.getElementById("restart");

var playerCloseDialogButton = document.getElementById("playerCloseDialog");
var computerCloseDialogButton = document.getElementById("computerCloseDialog");
var playerDialogBox = document.getElementById("playerDialogBox");
var computerDialogBox = document.getElementById("computerDialogBox");



reloadButton.addEventListener("click", function() {
  location.reload();
});

playerCloseDialogButton.addEventListener("click", function() {
    location.reload();
  });

  computerCloseDialogButton.addEventListener("click", function() {
    location.reload();
  });



selectElement.addEventListener('change', () => {
    var selectedValue = selectElement.value;
    for (var j = 0; j < playerDisplayElements.length; j++) {
        playerDisplayElements[j].classList.add('hidden');
    }
    var selectedDiv = document.getElementsByClassName('player-game-image ' + selectedValue);
    selectedDiv[0].classList.remove('hidden');
});

playElement.addEventListener('click', async() => {
    var computerElement = await getRandomItem(items);
    var playerSelectedElement = document.querySelector('#data').value;

    for (var j = 0; j < computerDisplayElements.length; j++) {
        computerDisplayElements[j].classList.add('hidden');
    }
    var computerDiv = document.getElementsByClassName('computer-game-image ' + computerElement);
    computerDiv[0].classList.remove('hidden');

    await winner(computerElement,playerSelectedElement);
    var computerScoreElement = document.getElementById('computer-score');
    computerScoreElement.innerHTML = 'Computer Score : '+computerScore;
    
    var playerScoreElement = document.getElementById('player-score');
    playerScoreElement.innerHTML = 'Player Score : '+playerScore;

    if(computerScore>=10){
        computerDialogBox.style.display = "block";
    }
    else if(playerScore>=10){
        playerDialogBox.style.display = "block";
    }


});



function winner(computerElement,playElement){
    return new Promise((resolve,reject)=>{
        try{
            if((computerElement == 'scissor' && playElement == 'paper') || 
            (computerElement == 'paper' && playElement == 'rock') ||
            (computerElement == 'rock' && playElement == 'lizard') ||
            (computerElement == 'lizard' && playElement == 'spock') ||
            (computerElement == 'spock' && playElement == 'scissor') ||
            (computerElement == 'scissor' && playElement == 'lizard') ||
            (computerElement == 'lizard' && playElement == 'paper') ||
            (computerElement == 'paper' && playElement == 'spock') ||
            (computerElement == 'spock' && playElement == 'rock') ||
            (computerElement == 'rock' && playElement == 'scissor')){
                computerScore+=1;
            }
            else if((playElement == 'scissor' && computerElement == 'paper') || 
                    (playElement == 'paper' && computerElement == 'rock') ||
                    (playElement == 'rock' && computerElement == 'lizard') ||
                    (playElement == 'lizard' && computerElement == 'spock') ||
                    (playElement == 'spock' && computerElement == 'scissor') ||
                    (playElement == 'scissor' && computerElement == 'lizard') ||
                    (playElement == 'lizard' && computerElement == 'paper') ||
                    (playElement == 'paper' && computerElement == 'spock') ||
                    (playElement == 'spock' && computerElement == 'rock') ||
                    (playElement == 'rock' && computerElement == 'scissor')){
                        playerScore+=1;
                    }
                resolve(computerScore,playerScore);
        }
        catch(er){
            reject(er);
        }
    });
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}


