import React, { Component } from 'react';
import './receitas.css';
import { connect } from 'react-redux';

import * as receitaActions from '../actions';

import { Link } from 'react-router-dom';

//import ReceitaItem from './ReceitaItem'

class Receitas extends Component {
    render(){

        const { receitas, toggleReceita } = this.props;

        return(
            <div className="content receitas">
                <h1>Receitas completas pra você</h1>
                <div className="banner">

                </div>
                <p>Quer diversificar o cardápio? Confira nossas deliciosas receitas e sugestões de petiscos, pratos e sobremesas!</p>

                <div className="listReceita">
                    {
                        receitas.map( receita =>
                            <Link to={`/receitas/${ receita.id }`}>
                                <div onClick={() => toggleReceita(receita)} className="item" key={receita.id}>
                                    <img src={ receita.image } alt={ receita.title } />
                                    <div className="container">
                                        <p className="title"> { this.props.title } </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    receitas: state.toggleReceita.receitas
})

const mapDispatchToProps = dispatch => ({
    toggleReceita: ( receita ) => dispatch(receitaActions.toggleReceita(receita))
})

export default connect(mapStateToProps, mapDispatchToProps)(Receitas)