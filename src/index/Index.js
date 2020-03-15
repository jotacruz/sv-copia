import React, { Component } from 'react';

import MainCarousel from './MainCarousel';
import AceptedCards from './AceptedCards';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchReceitas } from '../actions';
import { fetchBannersHome } from '../actions';

import ReceitaItem from '../receitas/ReceitaItem';

class Index extends Component {
    constructor(props){
        super(props);
    }

    async componentDidMount(){

        await this.props.fetchReceitas()
        await this.props.fetchBannersHome()

    }

    render(){
        const { receitas, banners } = this.props;
        return (
            <div className="content wrap-index">
                <MainCarousel banners={banners} />
                <div className="wrapCards">
                    <AceptedCards title="CARTÕES ACEITOS" image="https://www.svicente.com.br/public/template/site/default/images/cartao-1.jpg" />
                    <AceptedCards title="CARTÕES ALIMENTAÇÃO ACEITOS" image="https://www.svicente.com.br/public/template/site/default/images/cartao-2.jpg" />
                    <AceptedCards title="CARTÕES - RESTAURANTES E ROTISSERIE SÃO VICENTE" image="https://www.svicente.com.br/public/template/site/default/images/cartao-3.jpg" />
                </div>
                <div className="listReceita">
                    { receitas.map( item => (
                        <ReceitaItem key={item._id} receita={item} />                        
                    ))}
                </div>
            </div>        
        );
    }
}

const mapStateToProps = state => ({
    receitas: state.fetchReceitas.receitas,
    banners: state.fetchBannersHome.banners
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchReceitas, fetchBannersHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)