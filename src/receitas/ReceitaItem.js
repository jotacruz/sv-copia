import React from 'react'

import { Link } from 'react-router-dom';

const ReceitaItem = props => {
    return(
        <Link to={`/receitas/${props.receita.id}`}>
            <div className="item">
                <img src={ props.receita.image } alt={ props.receita.title } />
                <div className="container">
                    <p className="title"> { props.receita.title } </p>
                </div>
            </div>
        </Link>
    )
};

export default ReceitaItem;