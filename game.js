window.onload = function(){
    canvas = document.getElementById('canvas');
    cxt = canvas.getContext('2d');

    document.addEventListener('keydown', function(e){
        switch(e.keyCode){
            case 37:
                velx = -1;
                vely = 0;
                break;
            case 38:
                velx = 0;
                vely = -1;
                break;
            case 39:
                velx = 1;
                vely = 0;
                break;
            case 40:
                velx = 0;
                vely = 1;
                break;
        }
    });

    setInterval(jogo, 1000/10);
}

posicaox = 10;
posicaoy = 10;
foodX = 15;
foodY = 15;
velx = 0;
vely = 0;
grid = 20;
snake = [];
tam = 5;

function jogo(){
    posicaox += velx;
    posicaoy += vely

    if(posicaox < 0){
        posicaox = grid;
    }if(posicaox > grid){
        posicaox = 0;
    }if(posicaoy > grid){
        posicaoy = 0;
    }if(posicaoy < 0){
        posicaoy = grid;
    }

    cxt.fillStyle = '#94ff94';
    cxt.fillRect(0, 0, 400, 400);

    cxt.fillStyle = 'black';
    for (var i = 0; i < snake.length; i++) {
        cxt.fillRect(snake[i].x * grid, snake[i].y * grid, grid -1, grid - 1);
        if(snake[i].x == posicaox && snake[i].y == posicaoy){
            tam = 5;
        } 
    }

    snake.push({
        x: posicaox,
        y: posicaoy
    })
    while(snake.length > tam){
        snake.shift();
    }

    cxt.fillStyle = '#94ff';
    cxt.fillRect(foodX * grid, foodY * grid, grid - 1, grid - 1);

    if(posicaox == foodX && posicaoy == foodY){
        tam++;
        foodX = Math.floor(Math.random() * grid);
        foodY = Math.floor(Math.random() * grid);
    }

}
