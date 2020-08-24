import React from 'react';

const Card = ({content}) => {
    return (
        <>
{
    content.map(item => (
        <div className="card" key={item.photo}>
        <img src={item.photo} alt={item.title} />
        <div className="card-info">
        <div>
        <span className={`${item.superHost ? "visible badge" : "hidden"}`}>
        superHost
        </span>
        <span>
        {item.type}
        <span>. {item.beds}</span>
        </span>
        </div>
      
        <div className="rating">
        <span className="material-icons starColor">
star
</span><span className="rating"> {item.rating}</span> 
        </div>
        </div>
        <div className="card-desc">
        {item.title}
        </div>
        </div>
    ))
}
       

        </>
    )
}

export default Card;