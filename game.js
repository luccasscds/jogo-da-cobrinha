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

snake = [];
posicaox = 10;
posicaoy = 10;
velx = 0;
vely = 0;
grid = 20;
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

    snake.push({
        x: posicaox,
        y: posicaoy
    })

    cxt.fillStyle = 'black';
    for (let i = 0; i < snake.length; i++) {
        cxt.fillRect(snake[i].x * grid, snake[i].y * grid, grid -1, grid - 1);        
    }

    while(snake.length > tam){
        snake.shift();
    }

}