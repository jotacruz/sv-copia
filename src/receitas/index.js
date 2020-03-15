import React, { Component } from "react"
import { connect } from 'react-redux'

class MainReceita extends Component { 
    render(){

        const { receita } = this.props;

        return (
            <div className="wrap-middle">
                <h1> Receita { receita.title } </h1>     
                <img src={ receita.bigImage } alt={ receita.title } />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    receita: state.toggleReceita.activeReceita
})

export default connect(mapStateToProps)(MainReceita)