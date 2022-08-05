makeBoard(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const size = prompt("how large?");
  clearBoard();
  makeBoard(size);
});

function makeBoard(size) {
  const row = (col = Math.sqrt(size));
  const board = document.querySelector(".board");
  for (let i = 0; i < row; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < col; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = "hi";
      cell.addEventListener("mouseenter", (e) => {
        console.log(e);
        cell.classList.add("change-color");
      });
      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

function clearBoard() {
  const board = document.querySelector(".board");
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
}
