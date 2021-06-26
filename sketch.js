var h, w;
var board = [
    ['', '', ''], ['', '', ''], ['', '', '']
];
var player1 = "x",
    player2 = "o";

var currentPlayer = player1;
var gameState = 0;
var winner = null;
var r1 = null;
var b1;
var cross, tie;

function preload() {

    cross = loadImage("cross.png");
    tie = loadImage("tie.png")

}

function setup() {
    canvas = createCanvas(500, 500);
    w = width / 3;
    h = height / 3;
    b1 = new button()


}

function draw() {

    if (gameState == 4) {
        push();
        fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
        textFont("fantasy")
        textSize(25);
        text("It is a tie", width / 3, 200);
        image(tie, width / 3, 250)
        pop()
    }
    if (gameState == 6) {

        background(0);
        push()
        fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
        textFont("fantasy")
        textSize(20)
        text("1 : Postion the mouse in the slot , where you want to draw ", width / 20, 130);
        text(" your X or O .", width / 12, 160)
        text("2 : If you want to draw X at the postion use 'x' key and for ", width / 21, 210)
        text("O use 'o' key only .", width / 12, 240)
        text("3 : Blue lines indicates turn of 'player 2' that is 'O'.", width / 21, 280)
        text("4 : Red lines indicate turn of 'player 1' that is 'X'.", width / 21, 320)
        /*text("Made by Aditya")
        */
        pop();


    }

    if (gameState == 0) {
        background(0);
        b1.display();
        push();
        fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
        textFont("fantasy")
        textSize(50)
        text("TIC-TAC-TOE", 140, 95)
        pop()
    }

    if (gameState == 1) {

        background("black");
        if (currentPlayer == player1) {
            stroke("red")
        } else {
            stroke("cyan")
        }
        strokeWeight(5)
        line(w, 0, w, height);
        line(w * 2, 0, w * 2, height);
        line(0, h, width, h);
        line(0, h * 2, width, h * 2)

        for (var j = 0; j < 3; j++) {

            for (var i = 0; i < 3; i++) {

                var x = w * i + w / 2;
                var y = h * j + h / 2;
                var r = w / 4;
                var spot = board[i][j];

                if (spot == player1) {
                    if (gameState == 3) {

                        background(0)

                    }
                    stroke(rgb(random(0, 255), random(0, 255), random(0, 255)))
                    line(x - r, y - r, x + r, y + r);
                    line(x + r, y - r, x - r, y + r);

                } else if (spot == player2) {

                    if (gameState == 3) {

                        background(0)

                    }

                    stroke(rgb(random(0, 255), random(0, 255), random(0, 255)))
                    noFill();
                    ellipse(x, y, r * 2)

                }

            }


        }
        checkWinner()

    }


}



function keyPressed() {
    if (gameState == 1) {
        var i = floor(mouseX / w);
        var j = floor(mouseY / h);

        if (keyCode == 88) {


            if (currentPlayer == player1) {

                if (board[i][j] == "") {

                    board[i][j] = player1;
                    currentPlayer = player2;

                }

            }

        }

        if (keyCode == 79) {

            if (currentPlayer == player2) {

                if (board[i][j] == "") {

                    board[i][j] = player2;
                    currentPlayer = player1;


                }

            }
        }
    }

}


function compare(a, b, c) {

    if (a == b && a == c && a != "") {

        return true;

    }

}

function checkWinner() {

    // check vertical
    for (var i = 0; i < 3; i++) {

        if (compare(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
            gameState = 3;

            if (board[i][0] == player1 && gameState == 3) {
                push()
                fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
                textFont("fantasy")
                textSize(50)
                text("Winner is ", 130, 480);
                image(cross, 330, 420)

                pop();

            } else if (board[i][0] == player2 && gameState == 3) {

                push();
                stroke(rgb(random(0, 255), random(0, 255), random(0, 255)));
                fill(rgb(random(0, 255), random(0, 255), random(0, 255)));
                textFont("fantasy")
                textSize(50)
                text("Winner is ", 130, 480);
                noFill();
                ellipse(370, 460, 50, 50)
                pop();
            }
        }
    }

    //check horizontal

    for (var i = 0; i < 3; i++) {

        if (compare(board[0][i], board[1][i], board[2][i])) {

            winner = board[0][i]
            gameState = 3;
            if (board[0][i] == player1 && gameState == 3) {
                push()
                fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
                textFont("fantasy")
                textSize(50)
                text("Winner is ", 130, 480);
                image(cross, 330, 420)
                pop();

            } else if (board[0][i] == player2 && gameState == 3) {

                push();
                stroke(rgb(random(0, 255), random(0, 255), random(0, 255)));
                fill(rgb(random(0, 255), random(0, 255), random(0, 255)));
                textFont("fantasy")
                textSize(50)
                text("Winner is ", 130, 480);
                noFill();
                ellipse(370, 460, 50, 50)
                pop();
            }

        }
    }

    //check diagonal1


    if (compare(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
        gameState = 3;
        if (board[0][0] == player1 && gameState == 3) {
            push()
            fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
            textFont("fantasy")
            textSize(50)
            text("Winner is ", 130, 480);
            image(cross, 330, 420)
            pop();

        } else if (board[0][0] == player2 && gameState == 3) {

            push();
            stroke(rgb(random(0, 255), random(0, 255), random(0, 255)));
            fill(rgb(random(0, 255), random(0, 255), random(0, 255)));
            textFont("fantasy")
            textSize(50)
            text("Winner is ", 130, 480);
            noFill();
            ellipse(370, 460, 50, 50)
            pop();
        }

    }

    // check diagonal2

    if (compare(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
        gameState = 3;
        if (board[2][0] == player1 && gameState == 3) {
            push()
            fill(rgb(random(0, 255), random(0, 255), random(0, 255)))
            textFont("fantasy")
            textSize(50)
            text("Winner is ", 130, 480);
            image(cross, 330, 420)
            pop();

        } else if (board[2][0] == player2 && gameState == 3) {

            push();
            stroke(rgb(random(0, 255), random(0, 255), random(0, 255)));
            fill(rgb(random(0, 255), random(0, 255), random(0, 255)));
            textFont("fantasy")
            textSize(50)
            text("Winner is ", 130, 480);
            noFill();
            ellipse(370, 460, 50, 50)
            pop();
        }
    }

    var openslots = 0; 
    console.log(openslots)
   
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

           // console.log(board[i][j])
            if (board[i][j] == '') {
                openslots++;
            }
        }
    }

    if (winner == null && openslots == 0) {
        return 'tie'
        gameState == 4;
    }

}

