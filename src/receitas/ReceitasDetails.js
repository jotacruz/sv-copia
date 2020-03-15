import React, { Component } from 'react';
import { connect } from 'react-redux';

import listaReceitas from '../data/receitas.json';

import * as receitaActions from '../actions';

class ReceitasDetails extends Component{
    constructor(props){
        super(props);

        this.state = { receita: null }
    }

    UNSAFE_componentWillMount(){
        let receitas = [];
        receitas = listaReceitas.receitas.filter( item => {
            return item.id == this.props.match.params.id
        });

        const { selectReceita } = this.props;

        selectReceita(receitas[0]);

        //this.setState({ receita: receitas[0] });
    }

    render(){
        const { receita } = this.props;

        return(
            <div className="content receitas detalhes">
                <h1>Receitas completas pra você</h1>
                <div className="middleArea">
                    <div className="receitaDetail">
                        Receitas detalhes { receita.title }
                    </div>
                    <div className="destaques"></div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = state => ({
    receita: state.toggleReceita.activeReceita
});

const mapDispatchToProps = dispatch => ({
    selectReceita: ( receita ) => dispatch(receitaActions.selectReceita(receita))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReceitasDetails)