const message = document.getElementById("message");
let tile = -1;
let player = "x";
let grid = [
  ["b", "b", "b"],
  ["b", "b", "b"],
  ["b", "b", "b"],
];
let gameOver = false;

document.getElementById("rs-btn").style.display = "none";
message.innerHTML = "X's turn";

function clickTile(x, y) {
  if (gameOver) {
    return;
  }
  tile = document.getElementById(x.toString() + y.toString());
  if (grid[x][y] != "b") {
    return;
  }
  tile.src = "./images/game/" + player.toString() + ".png";
  grid[x][y] = player;
  if (player == "x") {
    player = "o";
    message.innerHTML = "O's turn";
  } else {
    player = "x";
    message.innerHTML = "X's turn";
  }

  if (getWinner() == "x") {
    gameOver = true;
    message.innerHTML = "X won!";
    document.getElementById("rs-btn").style.display = "";
  } else if (getWinner() == "o") {
    gameOver = true;
    message.innerHTML = "O won!";
    document.getElementById("rs-btn").style.display = "";
  } else if (movesLeft() == false) {
    gameOver = true;
    message.innerHTML = "Tie";
    document.getElementById("rs-btn").style.display = "";
  }
}

function getDiagonalWin() {
  if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
    return grid[1][1];
  } else if (grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2]) {
    return grid[1][1];
  } else {
    return false;
  }
}

function getHorizontalWin() {
  if (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0]) {
    return grid[0][0];
  } else if (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1]) {
    return grid[0][1];
  } else if (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2]) {
    return grid[0][2];
  } else {
    return false;
  }
}

function getVerticalWin() {
  if (grid[0][0] == grid[0][1] && grid[0][1] == grid[0][2]) {
    return grid[0][0];
  } else if (grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2]) {
    return grid[1][0];
  } else if (grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2]) {
    return grid[2][0];
  } else {
    return false;
  }
}

function movesLeft() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[i][j] == "b") {
        return true;
      }
    }
  }
  return false;
}

function getWinner() {
  if (getDiagonalWin() == "x") {
    return "x";
  }
  if (getDiagonalWin() == "o") {
    return "o";
  }

  if (getHorizontalWin() == "x") {
    return "x";
  }
  if (getHorizontalWin() == "o") {
    return "o";
  }

  if (getVerticalWin() == "x") {
    return "x";
  }
  if (getVerticalWin() == "o") {
    return "o";
  }
}

function restart() {
  gameOver = false;
  grid = [
    ["b", "b", "b"],
    ["b", "b", "b"],
    ["b", "b", "b"],
  ];
  player = "x";
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      tile = document.getElementById(i.toString() + j.toString());
      tile.src = "./images/game/b.png";
    }
  }
  tile = -1;
  document.getElementById("rs-btn").style.display = "none";
  message.innerHTML = "X's turn";
}
