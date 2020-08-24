import React from 'react';
import Card from './Card'

const CardList = ({pass}) => (
    <div className="grid-container">
    <Card content={pass} />
    </div>
   
)

export default CardList;