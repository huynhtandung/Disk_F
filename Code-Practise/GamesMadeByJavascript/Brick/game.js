const FRAME = 100;
const WIDTH = 400;
const HEIGHT = 600;
const BACKGROUND_COLOR = '#cdc9c9';
const SHILED_COLOR = 'red';
const TARGET_COLOR = 'black';
const WALL_COLOR = 'blue';
const WALL_ROW = 6;
const WALL_COL = WIDTH / 20;
const BRICK_SIZE = 20; // 20
const SHIELD_SIZE = 6; // 6 square = 120

const PHUONG_SAI = 5;


//globle variable
let DIRECTION = 0;


class Brick {
    constructor(Game, color, x, y, big = true) {
        this.Game = Game;
        this.ctx = this.Game.ctx;
        this.color = color;
        this.x = x;
        this.y = y;
        this.brickSize = BRICK_SIZE;
        this.big = big;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.big === true ? this.brickSize - 1 : this.brickSize / 2 - 1,
            this.big === true ? this.brickSize - 1 : this.brickSize / 2 - 1);
    }
}

class BrickArray {
    constructor(Game, color, row, col) {
        this.Game = Game;
        this.ctx = this.Game.ctx;
        this.wallColor = WALL_COLOR;
        this.row = WALL_ROW;
        this.col = WALL_COL;
        this.wall = [];
        this.createWall();
    }

    createWall() {
        let n = 0;
        for (let i = 1; i <= this.row; i++) {
            let temp = [];
            let m = 0;
            for (let j = 1; j <= this.col; j++) {
                temp.push(new Brick(this.Game, this.wallColor, m, n, true))
                m = m + BRICK_SIZE;
            }
            n = n + BRICK_SIZE;
            this.wall.push(temp);
        }
    }

    update() {
        let target = game.target;
        for (let i = this.row - 1; i >= 0; i--) {
            for (let j = 0; j < this.col; j++) {
                if (this.wall[i][j] !== null)
                    if (Math.abs(target.targetX + target.targetDx - this.wall[i][j].x) < BRICK_SIZE &&
                        Math.abs(target.targetY + target.targetDy - this.wall[i][j].y) < BRICK_SIZE) {
                        this.wall[i][j] = null;
                    }
            }
        }
    }

    draw() {
        this.update();
        //draw wall
        let m = 0;
        let n = 0;
        for (let i of this.wall) {
            m++;
            for (let j of i) {
                if (j !== null) {
                    if (m % 2 == 0 && n % 2 == 0)
                        j.draw()
                    if (m % 2 == 1 && n % 2 == 1)
                        j.draw();
                }
                n++
            }
        }
    }
}

class Target {
    constructor(Game) {
        this.Game = Game;
        this.ctx = this.Game.ctx;
        this.color = TARGET_COLOR;
        this.targetX = WIDTH / 2;
        this.targetY = HEIGHT - 2 * BRICK_SIZE;

        this.targetDx = 0;
        this.targetDy = -BRICK_SIZE;
        //create a target with a brick
        this.Target = new Brick(this.Game, this.color, this.targetX, this.targetY, true)
    }

    update() {

        if (DIRECTION < -20) DIRECTION = -20;
        if (DIRECTION > 20) DIRECTION = 20;


        this.targetDx = DIRECTION;

        this.targetX += this.targetDx;
        this.targetY += this.targetDy;

        //check touch top - bottom
        if (this.targetY < 0) {
            this.targetY = BRICK_SIZE;
            this.targetDy = -this.targetDy;
        }
        if (this.targetY > HEIGHT - BRICK_SIZE * 2) {
            this.targetY = HEIGHT - BRICK_SIZE * 3;
            this.targetDy = -this.targetDy
        }

        //check touch left - right
        if (this.targetX < 0) {
            this.targetX = -DIRECTION;
            DIRECTION = - DIRECTION;
        }

        if (this.targetX + BRICK_SIZE > WIDTH) {
            // this.targetX = WIDTH - 2 * DIRECTION
            this.targetX = WIDTH - BRICK_SIZE - DIRECTION
            DIRECTION = - DIRECTION;
        }

        this.Target = new Brick(this.Game, this.color, this.targetX, this.targetY, true)

        //check lose game
        this.checkLoseGame();
    }

    checkLoseGame() {
        if (this.targetY + BRICK_SIZE * 2 === HEIGHT) {
            if (this.checkTouchShield() === false) {
                document.body.removeChild(document.querySelector('canvas'))
                DIRECTION = 0;
                clearInterval(game.interval)
                game = new Game();
            }
        }
    }

    checkTouchShield() {
        let left = this.targetX;
        // let right = this.targetX + BRICK_SIZE;

        if (left + BRICK_SIZE > game.shield.shieldData[0].x && left < game.shield.shieldData[game.shield.shieldData.length - 1].x + BRICK_SIZE)
            return true;
        /* if(left >= game.shield.shieldData[0].x && left < game.shield.shieldData[game.shield.shieldData.length - 1].x + BRICK_SIZE ) return true;
         if(right >= game.shield.shieldData[0].x && right <= game.shield.shieldData[game.shield.shieldData.length - 1].x ) return true;*/
        return false;
    }

    draw() {
        this.update();
        this.Target.draw();
    }
}

class Shield {
    constructor(Game) {
        this.Game = Game;
        this.ctx = this.Game.ctx;
        this.shieldSize = SHIELD_SIZE;
        this.shieldData = [];
        this.shieldColor = SHILED_COLOR;
        this.shieldMove = 0;
        //create shield
        this.createShield(this.shieldSize)
        //add Left Rigth for shield
        window.addEventListener('keydown', (e) => {
            if (e.which === 37) {
                this.shieldMove = -BRICK_SIZE
                this.checkShieldTouchTargetWhenKeyPress();
            };
            if (e.which === 39) {
                this.shieldMove = BRICK_SIZE
                this.checkShieldTouchTargetWhenKeyPress();
            };
        })
    }

    createShield(size) {
        let temp = (WIDTH - this.shieldSize * BRICK_SIZE) / 2;
        for (let i = 0; i < size; i++) {
            this.shieldData.push(
                new Brick(this.Game, this.shieldColor, temp + i * BRICK_SIZE, HEIGHT - BRICK_SIZE)
            )
        }
    }

    update() {
        if (this.shieldMove > 0) {
            if (this.shieldData[this.shieldData.length - 1].x === WIDTH - BRICK_SIZE) {
                this.shieldMove = 0;
                return;
            }
        }
        if (this.shieldMove < 0) {
            if (this.shieldData[0].x === 0) {
                this.shieldMove = 0;
                return;
            }
        }
        for (let i = 0; i < this.shieldData.length; i++) {
            this.shieldData[i].x += this.shieldMove;
        }
        this.shieldMove = 0;
    }

    checkShieldTouchTargetWhenKeyPress() {
        /*for(let i of this.shieldData){
            if(game.target.targetY + BRICK_SIZE === i.y && game.target.targetX === i.x){
                //DIRECTION += -(this.shieldMove/2);
                DIRECTION += -(this.shieldMove / PHUONG_SAI);
                console.log(DIRECTION)
            };
        }*/
        /* let left = game.target.targetX;
         let right = game.target.targetX + BRICK_SIZE;
         let y = game.target.targetY + BRICK_SIZE;
         if(y === this.shieldData[0].y){
             if(left >= this.shieldData[0].x && left <= this.shieldData[this.shieldData.length - 1].x ){
                 DIRECTION += -(this.shieldMove / PHUONG_SAI);
             }else if(right >= this.shieldData[0].x && right <= this.shieldData[this.shieldData.length - 1].x ){
                 DIRECTION += -(this.shieldMove / PHUONG_SAI);
             };
             console.log(DIRECTION)
         }*/
        let left = game.target.targetX;
        let y = game.target.targetY + BRICK_SIZE;

        if (y === this.shieldData[0].y) {
            if (left + BRICK_SIZE > this.shieldData[0].x && left < this.shieldData[game.shield.shieldData.length - 1].x + BRICK_SIZE) {
                DIRECTION += -(this.shieldMove / PHUONG_SAI);
            }
            console.log(DIRECTION)
        }
    }

    draw() {
        this.update();
        this.shieldData.forEach(brick => brick.draw())
    }
}

class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
        document.body.appendChild(this.canvas);

        this.shield = new Shield(this);
        this.target = new Target(this)
        this.wall = new BrickArray(this);

        this.interval

        this.loop();

    }

    loop() {
        this.interval = setInterval(() => {
            this.draw();
        }, FRAME)
       
    }

    clearScreen() {
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    draw() {
        this.clearScreen();
        this.shield.draw();
        this.target.draw();
        this.wall.draw();
    }
}

var game = new Game();