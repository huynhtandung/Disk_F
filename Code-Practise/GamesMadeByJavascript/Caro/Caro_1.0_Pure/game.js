const squares = Array.from(document.getElementsByTagName('td'));
const winner = document.getElementsByClassName('winner')[0];
const startBtn = document.getElementsByTagName('button')[0];
const turn = document.getElementsByClassName('turn')[0]

let firstPlayer = true;
let data = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let isPlay = true;



function handleGame(e){
    if(isPlay === false) return;
    let element = e.target;
    let x = element.parentElement.dataset.row - 1;
    let y = element.dataset.col - 1;
    if(data[x][y] === ''){
        if(firstPlayer === false){
            turn.innerHTML = 'X turn'
        }else{
            turn.innerHTML = 'O turn'
        }
        if(firstPlayer === true){
            element.innerHTML = 'X';
            data[x][y] = 'X'
        }
        else{
            element.innerHTML = 'O';
            data[x][y] = 'O'
        }
    }
    firstPlayer = !firstPlayer;
    if(checkWin() !== ''){
        isPlay = false;
        winner.innerHTML = 'Player ' + checkWin() + ' is the winner';
        startBtn.style.display = 'block';
        turn.innerHTML = '';
        return;
    }
    if(checkEqual() === true){
        isPlay = false;
        winner.innerHTML = 'Equal';
        startBtn.style.display = 'block';
        turn.innerHTML = '';
        return;
    }
}


function checkWin(){
    //check row
    for(let i = 0; i < 3; i++){
        if(data[i][0] === data[i][1] && data[i][1] === data[i][2] && data[i][0] !== ''){
            return data[i][0];
        };
    }
    //check col
    for(let i = 0; i < 3; i++){
        if(data[0][i] === data[1][i] && data[1][i] === data[2][i] && data[0][i] !== ''){
            return data[0][i];
        };
    }
    //check diagonal
    if(data[0][0] == data[1][1] && data[1][1] === data[2][2] && data[0][0] !== ''){    
        return data[0][0];
    };
    if(data[0][2] == data[1][1] && data[1][1] === data[2][0] && data[0][2] !== ''){
        return data[0][2];
    };
    return '';
}

function checkEqual(){
    for(row of data){
        for(col of row){
            if(col === '') return false;
        }
    }
    return true;
}

function startGame(){
    data = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    firstPlayer = true;
    isPlay = true;
    startBtn.style.display = 'none';
    winner.innerHTML = '';
    turn.innerHTML = 'X turn';

    squares.forEach(square => {
        square.innerHTML = '';
    })
}

squares.forEach(square => {
    square.addEventListener('click', handleGame)
});
startBtn.addEventListener('click', startGame);