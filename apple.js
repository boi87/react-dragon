import React from "react";
import { render } from "react-dom";
// import Cell from "./Cell";

const CELL_SIZE = 20;
const ax = Math.floor(Math.random() * 39);
const ay = Math.floor(Math.random() * 29);

class Apple extends React.Component {
  state = {
    x: ax,
    y: ay
    // log: console.log("diocan", this.state.x, this.state.y)
  };

  apple = () => {
    console.log("apple in apple.js,", this.state.x, this.state.y);
  };
  render() {
    return (
      <div
        className="Apple"
        style={{
          left: `${CELL_SIZE * ax + 1}px`,
          top: `${CELL_SIZE * ay + 1}px`,
          width: `${CELL_SIZE - 1}px`,
          height: `${CELL_SIZE - 1}px`
        }}
      />
    );
  }
}

export default Apple;
