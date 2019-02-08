import React from "react";
import { render } from "react-dom";
import "./dragon.css";
import Cell from "./Cell";
import Apple from "./apple";

// import makeEmpyBoard from "./Makeboard.js";
// import makecells from "./Makeboard";

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Dragon extends React.Component {
  constructor() {
    super();

    // dividing the height and width for the nr of cells
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  // initial snake position
  state = {
    cells: [
      { x: 7, y: 5 },
      { x: 6, y: 5 },
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 5 }
    ],
    running: false,
    interval: 500,
    direction: "right",
    ax: Math.floor(Math.random() * 39),
    ay: Math.floor(Math.random() * 29)
  };

  //   Create empty board
  makeEmptyBoard() {
    let board = [];
    // ``;
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  //   Create cells from this.board
  makeCells() {
    console.log("in the makecells");

    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

  // switch directions and handle keypress
  handleKeyPress = event => {
    let direction;
    const snakeHead = this.state.cells[0];
    const apple = { x: this.state.ax, y: this.state.ay };
    console.log(this.state.cells);
    console.log("apple in index.js", apple);

    switch (event.keyCode) {
      case 37:
        event.preventDefault();
        console.log("you hit left");
        this.state.direction != "right"
          ? (direction = "left")
          : (direction = "right");
        break;
      case 38:
        event.preventDefault();
        console.log("you hit up");
        this.state.direction != "down"
          ? (direction = "up")
          : (direction = "down");
        break;
      case 39:
        event.preventDefault();
        console.log("you hit right");
        this.state.direction != "left"
          ? (direction = "right")
          : (direction = "left");
        break;

      case 40:
        event.preventDefault();
        console.log("you hit down");
        this.state.direction != "up"
          ? (direction = "down")
          : (direction = "up");
        break;
    }

    console.log("this is snakehead", snakeHead);

    this.setState({
      direction: direction
    });
  };

  calculateNextCell = () => {
    const snakeHead = this.state.cells[0];
    let x, y;
    switch (this.state.direction) {
      case "right":
        x = snakeHead.x + 1;
        y = snakeHead.y;
        break;

      case "left":
        x = snakeHead.x - 1;
        y = snakeHead.y;
        break;

      case "down":
        y = snakeHead.y + 1;
        x = snakeHead.x;
        break;

      case "up":
        y = snakeHead.y - 1;
        x = snakeHead.x;
        break;
    }

    const nextCell = { x, y };

    if (snakeHead)
      this.setState({
        cells: [nextCell, ...this.state.cells].slice(0, this.state.cells.length)
      });

    if (
      snakeHead.x < 0 ||
      snakeHead.x > 39 ||
      snakeHead.y > 29 ||
      snakeHead.y < 0
    ) {
      console.log("you died");
      this.setState({
        cells: [
          { x: 7, y: 5 },
          { x: 6, y: 5 },
          { x: 5, y: 5 },
          { x: 4, y: 5 },
          { x: 3, y: 5 },
          { x: 2, y: 5 }
        ]
      });
    }
  };

  handleClick = event => {
    clearInterval();
    setInterval(() => {
      this.calculateNextCell();
    }, this.state.interval);
  };

  // clear interval when unmount

  render() {
    const { cells } = this.state;
    return (
      <div>
        <h1>Release the dragon</h1>
        <button id="btn_start" onClick={this.handleClick}>
          start
        </button>
        {/* <button id="btn_stop" onClick=""> */}
        {/* stop */}
        {/* </button> */}

        <div
          tabIndex="1"
          className="Board"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
          }}
        >
          {cells.map((cell, index) => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}${index}`} />
          ))}
          <Apple x={this.state.ax} y={this.state.ay} />
        </div>
      </div>
    );
  }
}

// render(<Dragon />, document.getElementById('root'));

export { Dragon, Cell };
