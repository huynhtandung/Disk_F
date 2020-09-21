const WIDTH = 800;
const HEIGHT = 600;
const BACKGROUND_COLOR = '#cdc9c9';

const BIRD_SIZE = 20;
const BIRD_COLOR = 'blue';
const BIRD_FALL = 5;

const HENCE_COLOR = 'black';

class Bird{
    constructor(PlapBird){
        this.PlapBird = PlapBird;
        this.ctx = this.PlapBird.ctx;
        this.x = WIDTH / 4 - BIRD_SIZE;
        this.y = HEIGHT / 2;
        this.size = BIRD_SIZE;
        this.color = BIRD_COLOR;
        this.fall = BIRD_FALL * 1.5;

        window.addEventListener('keydown', (e)=>{
            if(e.which === 32) this.y -= this.size * 2;
        })
        
    }

    update(){
        this.y += this.fall;
    }

    draw(){
        this.update();

        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Hence{
    constructor(PlapBird){
        this.PlapBird = PlapBird;
        this.ctx = this.PlapBird.ctx;
        this.color = HENCE_COLOR;

        this.moveLeft = BIRD_SIZE / 2;

        this.hences = [
            { x : WIDTH, height : this.randomHeight()},
            { x : WIDTH *3 / 2, height : this.randomHeight()}
        ]

    }

    update(){
        this.hences.forEach(hence => {
           hence.x -= this.moveLeft;
        })
        if(this.hences[0].x < 0){
            this.hences.shift();
            this.hences.push({
                x : this.hences[0].x + WIDTH / 2,
                height : this.randomHeight()
            })
        }
    }

    randomHeight(){
        let maxHeight = HEIGHT / 2 - BIRD_SIZE * 2;
        let minHeight = WIDTH / 8;
        return Math.round(Math.random()) * (maxHeight - minHeight) + minHeight;
    }

    draw(){
        this.update();
        this.hences.forEach(hence =>{
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.fillRect(hence.x, 0, BIRD_SIZE * 2, hence.height);

            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.fillRect(hence.x, hence.height + BIRD_SIZE * 4, BIRD_SIZE * 2, WIDTH - hence.height - BIRD_SIZE * 4);

        })
    }
}

class PlapBird{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
        document.body.appendChild(this.canvas);

        this.bird = new Bird(this);
        this.hence = new Hence(this);

        this.gameStart;

        this.loop();
    }

    loop(){
        this.gameStart = setInterval(()=>{
            this.draw();
        }, 50)
    }

    clearScreen(){
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    checkLoseGame(){
        //check lose game  
        for(let hence of this.hence.hences){
            if(hence.x === this.bird.x){
                 if(this.bird.y < hence.height || this.bird.y > hence.height + BIRD_SIZE * 3){
                     return true;
                 }
             }
        }
        return false;
    }

    draw(){
       // console.log(this.checkLoseGame());
        if(this.checkLoseGame() === true){
            console.log('New Game')
            document.body.removeChild(document.querySelector('canvas'))
            clearInterval(this.gameStart)
            game = new PlapBird();
        }else{
            this.clearScreen();
            this.bird.draw();
            this.hence.draw();
        }
    }
}

var game = new PlapBird();