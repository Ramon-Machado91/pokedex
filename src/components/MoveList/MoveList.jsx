import React from "react";
import './moveList.css'

const MoveList = ({ itens, index }) => {
  return (
    <div className="description-Pokemon">
      <p key={index}>{itens.map(item =>(
        `${item.move.name}  `
      ))}</p>
    </div>
  );
};

export default MoveList;
