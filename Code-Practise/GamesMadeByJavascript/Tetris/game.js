const WIDTH = 400;
const HEIGHT = 600;
const BACKGROUND_COLOR = '#cdc9c9';
const BRICK_SIZE = 20;
const BRICK_COLOR = 'yellow';


class Brick{
    constructor(Tetris, x, y, color){
        this.Tetris = Tetris
        this.ctx = this.Tetris.ctx;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, BRICK_SIZE - 1, BRICK_SIZE - 1);
    }
}

class BrickFall{
    constructor(Tetris){
        this.Tetris = Tetris;
        this.ctx = this.Tetris.ctx;
        this.x = WIDTH / 2;
        this.y = - 2 * BRICK_SIZE;
        this.fall = 20 / 2;
        this.move = 0;
        this.isFinishFall = false;
        this.bricks = this.renderBrickFall();
       // console.log(this.bricks)

        window.addEventListener('keydown', (e)=>{
            let temp = 0;
            if(e.which === 37) temp = -BRICK_SIZE; 
            if(e.which === 39) temp = BRICK_SIZE;   
            for(let i = 0; i < this.bricks.length ; i++){
                this.bricks[i].x += temp;
            }
        })
    }

    update(){
        for(let i = 0; i < this.bricks.length ; i++){
            this.bricks[i].y += this.fall;
        }

        if(this.bricks[0].y > HEIGHT) this.isFinishFall = true;
    }

    randomBricks(){
        return [
            [1, Math.round(Math.random()), Math.round(Math.random())],
            [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())]
        ]
    }


    renderBrickFall(){
        let bricksRandom = this.randomBricks();
        let bricks = [];
        let initX = this.x;
        let initY = this.y;

        for(let i = 0; i < bricksRandom.length; i++){
            for(let j = 0; j < bricksRandom[i].length; j++){
                if(bricksRandom[i][j] === 1){
                    bricks.push(new Brick(this.Tetris, initX, initY, BRICK_COLOR))
                }
                initX += BRICK_SIZE;              
            } 
            initX = WIDTH / 2;
            initY += BRICK_SIZE
        }
        return bricks;
    }

    draw(){
        this.update();

        if(this.isFinishFall === true){
           this.bricks = this.renderBrickFall();
           this.isFinishFall = false;
        }

        this.bricks.forEach(brick => brick.draw())
        
    }
}

class Tetris{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
        document.body.appendChild(this.canvas);

        this.brickFall = new BrickFall(this);

        this.startGame();
    }

    startGame(){
        setInterval(()=>{
            this.draw();
        }, 200);
    }

    clearScreen(){
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    draw(){
        this.clearScreen();
        this.brickFall.draw();
    }
}

var game = new Tetris();