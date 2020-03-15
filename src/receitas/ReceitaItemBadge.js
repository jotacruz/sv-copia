import React, { Component } from 'react'

export default class ReceitaItemBadge extends Component {
    render(){
        return(
            <div className="badge">
                <span className="badgeName"> { this.props.name } </span>
            </div>
        )
    }
}