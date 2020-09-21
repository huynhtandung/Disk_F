const ROW = 8;    //the number of the row
const COL = 8;    //the number of the column
const WIN = 5;    //the number of win
const FIRST_PLAYER = 'X';   //first player can be X or O

function renderChessBoard(m, n) {   //matrix m * n
    let table = document.createElement('table');
    let row;
    let board = [];
    let k;
    for (let i = 0; i < m; i++) {
        k = [];
        let xhtml = '';
        for (let j = 0; j < n; j++) {
            xhtml += `<td data-pos='${i + '-' + j}'></td>`;
            k.push('');
        }
        row = document.createElement('tr');
        row.innerHTML = xhtml;
        table.appendChild(row);
        board.push(k);
    }
    document.body.appendChild(table);
    document.body.appendChild(document.createElement('p'))  //display the result
    return board;
}

/*function clearChessBoard(m, n) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            console.log(document.querySelector(`[data-pos='${i + '-' + j}']`))
            document.querySelector(`[data-pos='${i + '-' + j}']`).textContent = '';
        }
    }
}*/

class Caro{
    constructor(){
        this.isPlay = true;
        this.row = ROW;
        this.col = COL;
        this.win = WIN;
        this.board = renderChessBoard(this.row, this.col);
        this.player = FIRST_PLAYER;
        this.numClick = 0;
        this.squares = document.querySelectorAll('td');
        this.squares.forEach(square => square.addEventListener('click', ()=>this.updateChessBoard(square)));
    }

    updateChessBoard(square){
        if(this.isPlay == false) return;
        if(square.textContent !== '') return;   //can not click on square which has clicked already
        let pos = square.dataset.pos.split('-');
        this.board[pos[0]][pos[1]] = this.player;
        square.textContent = this.player;
        this.numClick ++;
        let isWin = this.checkWin(pos);
        if(isWin !== ''){    //check win
            document.querySelector('p').innerHTML = isWin + ' wins! <br/> Press Space to play again';
            this.isPlay = false;
        }else if(this.numClick === ROW * COL){    //check tie if fill all the squares
            document.querySelector('p').innerHTML = 'Tie! <br/> Press Space to play again';
            this.isPlay = false;
        }
        this.player = this.player === 'X' ? 'O' : 'X';  //update player

    }
    
    checkWin(pos){
        let draw = [];
        let x = Number(pos[0]);     //which row ?
        let y = Number(pos[1]);     //which col ?
        let letter = this.board[x][y];
        
        let count = 1;
        let i = y - 1; 
        let j = y + 1;
        
        draw.push([x, y]);

        while(true){    //check row
            if(this.board[x][i] === letter){
                draw.push([x, i]);  count++;    i--;
            }else if(this.board[x][j] === letter){
                draw.push([x, j]);  count++;    j++;
            }else{
                if(count === this.win){
                    this.drawWinLine(draw);
                    return letter;
                }
                break;
            }
        }

        count = 1;
        i = x - 1;
        j = x + 1;
        draw = [];

        draw.push([x, y]);

        while(true){    //check col
            if(this.board[i] && this.board[i][y] === letter){
                draw.push([i, y]);  count++;    i--;
            }else if(this.board[j] && this.board[j][y] === letter){
                draw.push([j, y]);  count++;    j++;
            }else{
                if(count === this.win){
                    this.drawWinLine(draw);
                    return letter;
                }
                break;
            }
        }

        count = 1;
        i = x - 1;
        j = y - 1;
        let m = x + 1;
        let n = y + 1;
        draw = [];

        draw.push([x, y]);

        while(true){    //check line {\}
            if(this.board[i] && this.board[i][j] === letter){
                draw.push([i, j]);  count++;    i--;    j--;
            }else if(this.board[m] && this.board[m][n] === letter){
                draw.push([m, n]);  count++;    m++;    n++;
            }else{
                if(count === this.win){
                    this.drawWinLine(draw);
                    return letter;
                }
                break;
            }
        }

        count = 1;
        i = x - 1;
        j = y + 1;
        m = x + 1;
        n = y - 1;
        draw = [];

        draw.push([x, y]);

        while(true){    //check line {/}
            if(this.board[i] && this.board[i][j] === letter){
                draw.push([i, j]);  count++;    i--;    j++;
            }else if(this.board[m] && this.board[m][n] === letter){
                draw.push([m, n]);  count++;    m++;    n--;
            }else{
                if(count === this.win){
                    this.drawWinLine(draw);
                    return letter;
                }
                break;
            }
        }

        return '';
    }

    drawWinLine(array){
        for(let pos of array){
            document.querySelector(`[data-pos='${pos[0] + '-' + pos[1]}']`).style.backgroundColor = 'grey'
        }
    }
}

var caro = new Caro();
window.addEventListener('keydown', (e) => {
    if(e.which === 32){
        //clearChessBoard(caro.row, caro.col);
        document.body.removeChild(document.querySelector('table'));
        document.body.removeChild(document.querySelector('p'));
        caro = new Caro();
    }
})