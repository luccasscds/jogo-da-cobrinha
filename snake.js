posicaox = 10window.onload = function(){

    window.addEventListener('keydown', movimentarPersonagem)
    function movimentarPersonagem(e){
        left = 37; up = 38; right = 39; down = 40;
        switch (e.keyCode) {
            case left:
                snake.mvleft = true;
                snake.mvup = false;
                snake.mvright = false;
                snake.mvdown = false;
                break;
            case up:
                snake.mvleft = false;
                snake.mvup = true;
                snake.mvright = false;
                snake.mvdown = false;
                break;
            case right:
                snake.mvleft = false;
                snake.mvup = false;
                snake.mvright = true;
                snake.mvdown = false;
                break;
            case down:
                snake.mvleft = false;
                snake.mvup = false;
                snake.mvright = false;
                snake.mvdown = true;
                break;
        }
    }

    function comer(){
        if (snake.body[0][0] == carne.posicaox && snake.body[0][1] == carne.posicaoy){
            snake.body.unshift([snake.body[0][0], snake.body[0][1]]);
            carne.posicaox = Math.floor(Math.random() * 29);
            carne.posicaoy = Math.floor(Math.random() * 29);
        }
    }
    
    function init(){
        loop();
    }
    function update(){
        snake.move();
        comer();
    }
    function draw(){
        cxt.clearRect(0,0,cnv.width,cnv.height);
        cxt.fillStyle = '#535353';
        cxt.fillRect(0,0,cnv.width,cnv.height);
        snake.create(cxt);
        carne.create(cxt);
    }
    function loop(){
        setTimeout(loop, 1000/10);
        update();
        draw();
    }

    var cnv = document.getElementById('canvas');
    cxt = cnv.getContext('2d');

    var snake = new cobra();
    var carne = new food();
    init();
}

class cobra{
    mvleft = false; mvup = false; mvright = false; mvdown = false;
    //posicaox = 0; posicaoy = 0;
    cor = 'black';
    width = 20;
    body = [[10,10], [10,11]];
    direcao = [0, -1];
    
    create(cxt){
        cxt.fillStyle = this.cor;
        for (var i = 0; i < this.body.length; i++) {
            cxt.fillRect(this.body[i][0] * this.width, this.body[i][1] * this.width, this.width - 1, this.width - 1); 
        };
    }

    move(){
        var moveBody = [this.body[0][0] + this.direcao[0], this.body[0][1] + this.direcao[1]];

        if(this.mvleft){
            this.direcao = [-1,0];
        }else if(this.mvup){
            this.direcao = [0,-1];
        }else if(this.mvright){
            this.direcao = [1,0];
        }else if(this.mvdown){
            this.direcao = [0,1];
        }

        if (this.body[0][0] <= 0) {
            this.direcao = [1,0];
            this.mvleft = false;
        }else if (this.body[0][0] >= 29) {
            this.direcao = [-1, 0];
            this.mvright = false;
        }else if (this.body[0][1] <= 0) {
            this.direcao = [0, 1];
            this.mvup = false;
        }else if (this.body[0][1] >= 29) {
            this.direcao = [0, -1];
            this.mvdown = false;
        }

        this.body.pop();
        this.body.unshift(moveBody);
    }
}

class food{
    posicaox = 15; posicaoy = 10;
    width = 20;
    cor = 'red';

    create(cxt){
        cxt.fillStyle = this.cor;
        cxt.fillRect(this.posicaox * this.width,this.posicaoy * this.width,this.width -1,this.width -1);
    }

}
