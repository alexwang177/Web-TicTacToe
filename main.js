const X_TURN = 1;
const O_TURN = 2;
var turn = X_TURN;

const board = document.getElementById('board');
const boardItems = document.querySelectorAll(".board-item");
const boardPieces = document.querySelectorAll(".board-piece");
const modal = document.querySelector('.modal');

var piecesArray = [['piece1','piece2','piece3'],
                   ['piece4','piece5','piece6'],
                   ['piece7','piece8','piece9']];

/*let tempArr = [];
for(let i = 0; i < 8; i++)
{
    tempArr.push(boardPieces[j]);
    if(tempArr.length === 3)
    {
        piecesArray.push(tempArr);
        tempArr = [];
    }
}*/

//Play a single turn
function playTurn(e){

    if(turn === X_TURN){
        document.getElementById(e.target.id).style.background = 'red';
        turn = O_TURN;
    }
    else if(turn === O_TURN){
        document.getElementById(e.target.id).style.background = 'blue';
        turn = X_TURN;
    }

    
    const winner = showWinner();
}

//Check for a winner
function checkWinner(){
/*for(let r = 0; r < 2; r++)
{
    for(let c = 0; c < 2; c++)
    {

    }
}*/
}

function showWinner(){

}

//Clear Modal
function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//Event Listeners
boardPieces.forEach(piece => piece.addEventListener('click',playTurn));
