const WIDTH = 600;
const HEIGHT = 600;
const BACKGROUND_COLOR = '#cdc9c9';
const CELL_SIZE = 20;
const DX = CELL_SIZE;
const DY = 0;


class Snake{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
        this.dx = DX;
        this.dy = DY;
        this.hasTarget = true;
        this.targetX = this.random();
        this.targetY = this.random();
        this.dead = false;
        document.addEventListener("keydown", (e)=> {
            //go down
            if (e.which === 40 && this.dy >= 0) {
                this.dy = CELL_SIZE;
                this.dx = 0;
            }else if(e.which === 39 && this.dx >= 0){ //go right
                this.dx = CELL_SIZE;
                this.dy = 0;
            }else if(e.which === 38 && this.dy <= 0){ //go up
                this.dy = - CELL_SIZE;
                this.dx = 0;
            }else if(e.which === 37 && this.dx <= 0){ //go up
                this.dy = 0;
                this.dx = - CELL_SIZE;
            }else if(e.which === 32){
                this.dead = false;
                this.dx = CELL_SIZE;
                this.dy = 0;
            }
        });
        this.snake = [
            {
                x : WIDTH / 2,
                y : HEIGHT /2
            }
        ];
        document.body.appendChild(this.canvas)
        this.loop();
    }

    loop(){
        setInterval(()=>{
            if(this.dead === false){
                this.update();
                this.draw();
            }
        }, 100)
    }

    update(){
        //update snake
        let temp = this.snake[this.snake.length - 1]
        for(let i = this.snake.length - 1; i >= 1; i--){
            this.snake[i].x = this.snake[i-1].x;
            this.snake[i].y = this.snake[i-1].y;
        }
        this.snake[0].x += this.dx; 
        this.snake[0].y += this.dy;


        //check dung tuong
        if(this.snake[0].x > WIDTH - CELL_SIZE) this.snake[0].x = 0;
        if(this.snake[0].y > HEIGHT - CELL_SIZE) this.snake[0].y = 0;


        if(this.snake[0].x < 0) this.snake[0].x = WIDTH;
        if(this.snake[0].y < 0) this.snake[0].y = HEIGHT;

        //check snake die when eat themself
        this.checkDie(temp);

        //check snake eat target
        if(this.snake[0].x === this.targetX && this.snake[0].y === this.targetY){
            this.snake.unshift({
                x : this.targetX + this.dx,
                y : this.targetY + this.dy
            })
            this.hasTarget = false;
        }

        //update the target
        if(this.hasTarget === false){
            while(this.checkTarget(this.targetX, this.targetY) === false){
                this.targetX = this.random();
                this.targetY = this.random();
            }
        }       
    }

    checkTarget(x, y){
        for(let cell of this.snake){
            if(cell.x === x && cell.y === y) return false;
        }
        return true;
    }

    checkDie(){
        let x = this.snake[0].x;
        let y = this.snake[0].y
        for(let i = 1; i < this.snake.length; i++){
            if(this.snake[i].x === x && this.snake[i].y === y){
                this.dead = true;
                this.snake = [
                    {
                        x : WIDTH / 2,
                        y : HEIGHT /2
                    }
                ];
            };
        }
    }

    clearScreen(){
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    draw(){
        this.clearScreen();
        //draw snake
        for(let i = 0; i < this.snake.length; i++){
            if(i === 0) this.ctx.fillStyle = 'black';
            else this.ctx.fillStyle = 'white';
            this.ctx.beginPath();
            this.ctx.fillRect(this.snake[i].x, this.snake[i].y, CELL_SIZE - 1, CELL_SIZE - 1);
        }
        //draw target
        this.ctx.fillStyle = 'red';
        this.ctx.beginPath();
        this.ctx.fillRect(this.targetX, this.targetY, CELL_SIZE - 1, CELL_SIZE - 1);
    }

    random(){
        return Math.round(Math.random() * (WIDTH - CELL_SIZE)) % CELL_SIZE * CELL_SIZE
    }
}

var snake = new Snake();