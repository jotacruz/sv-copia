import React, { Component } from 'react';
import './contato.css';

export default class Contato extends Component {
    constructor(props){
        super(props);
        this.state = { nome: '', email: '', mensagem: '', cidade: '', estado: '', assunto: '' } 

        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        
    }

    sendMessage(e){
        e.preventDefault();

        const data = JSON.stringify({ nome: this.state.nome, email: this.state.email, cidade: this.state.cidade, estado: this.state.estado, assunto: this.state.assunto, mensagem: this.state.mensagem })
        console.log(data);
        //do post
    }

    changeHandler(e){
        const name = e.target.name
        const value = e.target.value

        this.setState({ ...this.state, [name]: value })

        console.log(e.target);
    }

    blurHandler(e){
        if (e.target.required){
            if (e.target.value === '')
                e.target.classList.add('error');
            else    
                e.target.classList.remove('error');
        }
    }

    render(){

        const { nome, email, mensagem, cidade, estado, assunto } = this.state;

        return(
            <div className="content contato">
                <h1>Fale conosco</h1>
                <p>
                    Opiniões, dúvidas, críticas e sugestões. Nós queremos saber o que você pensa para 
                    sermos sempre um supermercado completo para sua vida.
                </p>
                <p>
                    Envie-nos sua mensagem. Teremos prazer em respondê-lo.
                </p>
                <form method="post" onSubmit={ this.sendMessage.bind(this) }>
                    <div className="row">
                        <div className="col-4">
                            <input type="text" onBlur={ this.blurHandler } onChange={ this.changeHandler } name="nome" className="customInput" required placeholder="Preencha seu nome" value={ nome } />
                        </div>
                        <div className="col-4 col-last">
                            <input type="email" onBlur={ this.blurHandler } onChange={ this.changeHandler } name="email" className="customInput" required placeholder="Preencha seu e-mail" value={ email } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <input type="text" onChange={ this.changeHandler } name="cidade" className="customInput" placeholder="Preencha sua cidade" value={ cidade } />
                        </div>
                        <div className="col-3">
                            <select name="estado" onChange={ this.changeHandler } className="customInput" value={ estado }>
                                <option value="" key={0}>Estado</option>
                                <option value="SP" key={1}>SP</option>
                                <option value="MG" key={2}>MG</option>
                            </select>
                        </div>
                        <div className="col-2 col-last">
                            <select name="assunto" onBlur={ this.blurHandler } onChange={ this.changeHandler } required className="customInput" value={ assunto }>
                                <option key={0} value="">Assunto</option>
                                <option key={1} value="Dúvidas">Dúvidas</option>
                                <option key={2} value="Reclamações">Reclamações</option>
                                <option key={3} value="Elogios">Elogios</option>
                            </select>
                        </div>
                    </div>   
                    <div className="row">
                        <div className="col-8 col-last">
                            <textarea className="customInput" onBlur={ this.blurHandler } onChange={ this.changeHandler } name="mensagem" required placeholder="Preencha a mensagem" value={ mensagem }></textarea>
                        </div>
                    </div> 
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        )
    }
}
