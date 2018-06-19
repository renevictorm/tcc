import React, { Component } from "react";

class NovaAnotacao extends Component {

    componentDidMount() {
        window.$('ul.tabs').tabs();
        window.$('#anotacao').val('');
        window.$('#anotacao').trigger('autoresize');
        window.$(document).ready(function() {
            window.$('textarea#anotacao').characterCounter();
          });
    }

    render() {
        return <div className="col s6" style={{ paddingTop: "20px" }}>

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="anotacao" className="materialize-textarea" data-length="120"></textarea>
                            <label for="anotacao">Anotações</label>
                        </div>
                    </div>
                </form>
            </div>


            <div className="row">
                <div className="col s4 offset-s4">
                    <a className="waves-effect waves-light btn">
                        Salvar
                        <i className="material-icons right">send</i>
                    </a>
                </div>
            </div>
        </div>;
    }
}

export default NovaAnotacao