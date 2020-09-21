let firstPlayer = 'X' // or O

function renderHtml(board){
    let table = document.createElement('table');
    let row;
    for(let i = 0; i < board.length; i++){
        row = document.createElement('tr')
        row.innerHTML = board[i].map((record, index) => 
            `<td style='border: 1px solid black; width: 50px; height: 50px; cursor: pointer; text-align: center' 
                data-position='${i}${index}'></td>`
        ).join('');
        table.appendChild(row)
    }
    document.body.appendChild(table)

    //result - who win
    document.body.appendChild(document.createElement('p'))
}


class Caro{
    constructor(){
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        this.isPlay = true;
        this.firstPlayer = firstPlayer;
        renderHtml(this.board)
        this.squares = Array.from(document.getElementsByTagName('td'));
        this.squares.forEach(element => {
            element.addEventListener('click', () => this.update(element))
        });
        document.getElementsByTagName('p')[0].innerHTML = this.firstPlayer + ' turns'
    }

    update(element){
        if(!this.isPlay) return;
        if(element.innerHTML !== '') return;
        
        //user play
        if(this.firstPlayer === 'X'){
            let row = element.dataset.position[0];
            let col = element.dataset.position[1];
            if(this.board[row][col] === ''){
                this.board[row][col] = this.firstPlayer;
                element.innerHTML = this.firstPlayer;
            }
        }

        this.firstPlayer = 'O'; 
        document.getElementsByTagName('p')[0].innerHTML = this.firstPlayer + ' turns'

        //computer random
        let x, y;
        if(this.checkToTie() === false){
            while(true){
                x = Math.round(Math.random() * 2);
                y = Math.round(Math.random() * 2);
                if(this.board[x][y] === '')
                    break;
            }
        }

        setTimeout(()=>{
            if(this.checkToTie() === false && this.checkWin() === false){
                this.board[x][y] = this.firstPlayer;
                Array.from(document.getElementsByTagName('td')).forEach(e => {
                    if(e.dataset.position === x + '' + y){
                        e.innerHTML = this.firstPlayer;
                    }
                }) 
            }

            this.firstPlayer = this.firstPlayer = 'X'; 
            document.getElementsByTagName('p')[0].innerHTML = this.firstPlayer + ' turns'

            //check to tie
            if(this.checkToTie() !== false){
                document.getElementsByTagName('p')[0].innerHTML = 'Tie'
                this.isPlay = false;
            }

            //check win
            if(this.checkWin() !== false){
                document.getElementsByTagName('p')[0].innerHTML = this.checkWin() + ' wins'
                this.isPlay = false;

            }

            if(!this.isPlay){
                let btn = document.createElement('button');
                btn.innerHTML = 'Start Game';
                document.body.appendChild(btn)
                btn.addEventListener('click', ()=>{
                    let squares = Array.from(document.getElementsByTagName('td'));
                    squares.forEach(td => td.innerHTML = '')
                    this.board = [
                        ['', '', ''],
                        ['', '', ''],
                        ['', '', '']
                    ];
                    this.isPlay = true;
                    this.firstPlayer = firstPlayer;
                    document.getElementsByTagName('p')[0].innerHTML = this.firstPlayer + ' turns';
                    document.body.removeChild(btn);
                })
            }
        }, 1000);
    }

    checkWin(){
         //check row
        for(let i = 0; i < 3; i++){
            if(this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] !== '') return this.board[i][0];}

        //check col
        for(let i = 0; i < 3; i++){
            if(this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] !== '') return this.board[0][i];}

        //check diagonal
        if(this.board[0][0] == this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== '') return this.board[0][0];
        if(this.board[0][2] == this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] !== '') return this.board[0][2];

        return false;
    }

    checkToTie(){
        for(let row of this.board){
            for(let col of row){
                if(col === ''){
                    return false;
                }
            }
        }
        return true;
    }  
}

var game = new Caro();