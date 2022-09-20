//size input
const sizeInput = document.querySelector("#size-input");
let row = sizeInput.value;
const span = document.querySelector(".num-row");
span.textContent = "Size: " + row + " x " + row;

sizeInput.addEventListener("change", (e) => {
  console.log("new row no", e.target.value);
  row = e.target.value;
  span.textContent = "Size: " + row + " x " + row;
  clearBoard();
  makeBoard();
});

// makeBoard(row, row);
function makeBoard() {
  const board = document.querySelector(".board");
  board.setAttribute("draggable", false);

  board.setAttribute(
    "style",
    `grid-template: repeat(${row}, 1fr)/repeat(${row}, 1fr)`
  );
  for (let i = 0; i < row * row; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mousedown", drawPixel);
    cell.addEventListener("mouseenter", drawPixel);
    board.appendChild(cell);
  }
}
makeBoard();

function clearBoard() {
  const boardWrapper = document.querySelector(".board-wrapper");
  boardWrapper.removeChild(boardWrapper.lastElementChild);

  const board = document.createElement("div");
  board.classList.add("board");
  boardWrapper.appendChild(board);
}

//color input
const colorInput = document.querySelector("#color");
let color = colorInput.value;
colorInput.addEventListener("change", (e) => {
  color = colorInput.value;
});

let mode = "draw";

function drawPixel(e) {
  // console.log(e);
  if (e.buttons >= 1) {
    if (mode == "draw") {
      console.log(color);
      e.target.style.backgroundColor = color;
    } else if (mode == "erase") {
      e.target.style.backgroundColor = "transparent";
    } else if (mode == "rainbow") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
}

const eraser = document.querySelector(".eraser");
const rainbowMode = document.querySelector(".rainbow");
eraser.addEventListener("click", () => {
  if (mode == "erase") {
    mode = "draw";
    eraser.classList.remove("eraser-on");
  } else {
    mode = "erase";
    eraser.classList.add("eraser-on");
    rainbowMode.classList.remove("rainbow-on");
  }
});

rainbowMode.addEventListener("click", () => {
  if (mode == "rainbow") {
    mode = "draw";
    eraser.classList.remove("eraser-on");
    rainbowMode.classList.remove("rainbow-on");
  } else {
    mode = "rainbow";

    rainbowMode.classList.add("rainbow-on");
    eraser.classList.remove("eraser-on");
  }
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  clearBoard();
  makeBoard();
});
