import React from 'react';
import './habilities.css'

const HabilitiesList = ({ itens, index }) => {
    return (
      <div className='habilities-Pokemon'>
      <p key={index}>{itens.map(item =>(
        `${item.ability.name}  `
      ))}</p>
    </div>
    )
  }
export default HabilitiesList;
