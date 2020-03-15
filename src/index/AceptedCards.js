import React from 'react';

const AceptedCards = props => {
    return(
        <div className="card">
            <h3> { props.title } </h3>
            <img src={ props.image } alt={ props.title } />
        </div>    
    )
}

export default AceptedCards;