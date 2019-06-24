const X_TURN = 1;
const O_TURN = 2;
var turn = X_TURN;

const board = document.getElementById('board');
const boardItems = document.querySelectorAll(".board-item");
const boardPieces = document.querySelectorAll(".board-piece");
const modal = document.querySelector('.modal');
const playerTurn = document.getElementById('playerTurn');
const result = document.getElementById('result');

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
    let id = e.target.id;
    let rowIndex = 0;
    let colIndex = 0;

    switch(id){
        case 'piece1':
        case 'piece2':
        case 'piece3':
            rowIndex = 0;
            break;
        case 'piece4':
        case 'piece5':
        case 'piece6':
            rowIndex = 1;
            break;
        case 'piece7':
        case 'piece8':
        case 'piece9':
            rowIndex = 2;
            break;
    }

    colIndex = piecesArray[rowIndex].indexOf(id);
    
    if(turn === X_TURN){
        if(document.getElementById(e.target.id)!=null)
            document.getElementById(e.target.id).innerHTML = '<i class="fas fa-times"></i>';
        piecesArray[rowIndex][colIndex] = 'X';
        turn = O_TURN;
        playerTurn.innerHTML = `O's Turn`;
    }
    else if(turn === O_TURN){
        if(document.getElementById(e.target.id)!=null)
            document.getElementById(e.target.id).innerHTML = '<i class="far fa-circle"></i>';
        piecesArray[rowIndex][colIndex] = 'O';
        turn = X_TURN;
        playerTurn.innerHTML = `X's Turn`;
    }

    const winner = checkWinner();
    if(winner === 'X' || winner === 'O' || winner === 'No One'){
        showWinner(winner);
    }
}

//Check for a winner
function checkWinner(){
    let winner = 'No One';

    for(let r = 0; r < 3; r++)
    {
        for(let c = 0; c < 3; c++)
        {
            if(piecesArray[r][c] != 'X' && piecesArray[r][c] != 'O')
                winner = ' ';
        }
    }

    for(let r = 0; r < 3; r++)
    {
       if(piecesArray[r][0] == piecesArray[r][1] && piecesArray[r][1] == piecesArray[r][2])
            winner = piecesArray[r][0];
    }

    for(let c = 0; c < 3; c++)
    {
       if(piecesArray[0][c] == piecesArray[1][c] && piecesArray[1][c] == piecesArray[2][c])
            winner = piecesArray[0][c];
    }

    if(piecesArray[0][0] == piecesArray[1][1] && piecesArray[1][1] == piecesArray[2][2])
        winner = piecesArray[1][1];

    if(piecesArray[0][2] == piecesArray[1][1] && piecesArray[1][1] == piecesArray[2][0])
        winner = piecesArray[1][1];

    return winner;
}

//ShowWinner aka pull up modal
function showWinner(winner){
    result.innerHTML = `<h2>${winner} Wins!</h2>`;
    modal.style.display = 'block';
}

//Restart the game and clear the modal
function restartGame(e){
    if(e.target == modal){
        modal.style.display = 'none';
        piecesArray = [['piece1','piece2','piece3'],
        ['piece4','piece5','piece6'],
        ['piece7','piece8','piece9']];

        boardPieces.forEach(function(piece){
        piece.innerHTML = ``;
        });
        turn = X_TURN;
        playerTurn.innerHTML = `X's Turn`;
    }
}

//Event Listeners
boardPieces.forEach(piece => piece.addEventListener('click',playTurn));
window.addEventListener('click', restartGame);