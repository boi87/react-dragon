import React from "react";
import { render } from "react-dom";

const CELL_SIZE = 20;
const ax = Math.floor(Math.random() * 39);
const ay = Math.floor(Math.random() * 29);

const Apple = props => {
  const { ax, ay } = props;

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
  //   this.setState({
  //     apple: [{ x: ax, y: ay }]
  //   });
};

// const Cell = props => {
//   const { x, y } = props;
//   return (
//     <div
//       className="Cell"
//       style={{
//         left: `${CELL_SIZE * x + 1}px`,
//         top: `${CELL_SIZE * y + 1}px`,
//         width: `${CELL_SIZE - 1}px`,
//         height: `${CELL_SIZE - 1}px`
//       }}
//     />
//   );
// };

export default Apple;
