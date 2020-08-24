import React from 'react';
import Card from './Card'

const CardList = ({pass}) => (
    <div className="row">
    <Card content={pass} />
    </div>
   
)

export default CardList;