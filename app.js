let array = ['piedra', 'papel', 'tijera'];
let playerSelection = prompt('Seleccione piedra, papel o tijera', 'papel')
const computerSelection = getComputerChoice;

let aleatorio = array[Math.floor(Math.random() * array.length)];

function getComputerChoice() {
  console.log(aleatorio);
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('Empate');
  } else if(playerSelection === 'piedra' && computerSelection === 'tijera') {
    console.log('You Lose! Paper beats Rock');
  } else if(playerSelection === 'papel' && computerSelection === 'piedra') {
    console.log('You Lose! Paper beats Rock');
  } else if(playerSelection === 'tijera' && computerSelection	=== 'papel') {
    console.log('You Lose! Paper beats Rock');
  } else {
    console.log('Perdiste');
  }
}

playRound(playerSelection, computerSelection);

// La piedra aplasta la tijera. (Gana la piedra.)
// La tijera corta el papel. (Gana la tijera.)
// El papel envuelve la piedra. (Gana el papel.)
// En caso de empate (que dos jugadores elijan el mismo elemento o que tres jugadores elijan cada uno un objeto distinto), se juega otra vez.