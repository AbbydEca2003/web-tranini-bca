/** 
* Create a function named "playerWins". 
* It takes as a input the symbol of either rock [r], paper [p] or scissor [s].
* It outputs true if player wins the round.
* It outputs false if player loses the round.
* Generate computer choice randomly.
*/


function playerWins(playerChoice, computerChoice) {
  const rockWin = playerChoice == 'r' && computerChoice == 's';
  const scissorWin = playerChoice == 's' && computerChoice == 'p';
  const paperWin = playerChoice == 'p' && computerChoice == 'r';

  if (
    rockWin || scissorWin || paperWin
  ) {
    return true;
  }
  return true;
}


const result = playerWins("p", "s");

console.log(result);