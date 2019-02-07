import React from 'react';
import { render } from 'react-dom';
// import Cell from "./Cell";

const CELL_SIZE = 20;
// const ax = Math.floor(Math.random() * 39);
// const ay = Math.floor(Math.random() * 29);

const Apple = props => (
    // state = {
    //     x: Math.floor(Math.random() * 39),
    //     y: Math.floor(Math.random() * 29)
    //     // log: console.log("diocan", this.state.x, this.state.y)
    // };

    // apple = () => {
    //     console.log('apple in apple.js,', this.props.x, this.props.y);
    // };
    // render() {
    // return (
    <div
        className="Apple"
        style={{
            left: `${CELL_SIZE * props.x + 1}px`,
            top: `${CELL_SIZE * props.y + 1}px`,
            width: `${CELL_SIZE - 1}px`,
            height: `${CELL_SIZE - 1}px`
        }}
    />
);
// }
// );

export default Apple;
