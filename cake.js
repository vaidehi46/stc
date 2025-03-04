let currCakeTile;
let currHammerTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setCake, 500); // 500 miliseconds = 1 second, every 0.5 second call setCake
    setInterval(setHammer, 500); // 500 miliseconds = 1 seconds, every 0.5 second call setHammer
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setCake() {
    if (gameOver) {
        return;
    }
    if (currCakeTile) {
        currCakeTile.innerHTML = "";
    }
    let cake = document.createElement("img");
    cake.src = "./cake.png";

    let num = getRandomTile();
    if (currHammerTile && currHammerTile.id == num) {
        return;
    }
    currCakeTile = document.getElementById(num);
    currCakeTile.appendChild(cake);
}

function setHammer() {
    if (gameOver) {
        return;
    }
    if (currHammerTile) {
        currHammerTile.innerHTML = "";
    }
    let hammer = document.createElement("img");
    hammer.src = "./hammer.png";

    let num = getRandomTile();
    if (currCakeTile && currCakeTile.id == num) {
        return;
    }
    currHammerTile = document.getElementById(num);
    currHammerTile.appendChild(hammer);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currCakeTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currHammerTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
} 
