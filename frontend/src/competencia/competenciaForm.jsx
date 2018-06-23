import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {search, clear, add, changeName, changeObservacao} from './competenciaActions.js'


class CompetenciaForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)
        var escolha1;
    }


    componentWillMount() {
        this.props.clear()
        this.props.search()
    }
    keyHandler(e) {
        const { add, search, name, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(name)
        } else if (e.key === 'Escape') {
            clear()
        }
    }
    getVALUE() {
      
       
      
       
    }
    /*
                    
    */
    render() {
        const { add, name,observacao } = this.props
        return <div  style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
                <h3 className="center" >Adicione uma nova competência:</h3>
                <div className="socorro3">
                <div className="input-field">
                    <input id="name" type="text"
                        placeholder='Nome'

                        onChange={this.props.changeName}
                        onKeyUp={this.keyHandler}
                        value={this.props.name} >
                    </input>

                </div>

                <div className="input-field">
                    <input id="observacao" type="text"
                        placeholder="OBS"
                        onChange={this.props.changeObservacao}
                        onKeyUp={this.keyHandler}
                        value={this.props.observacao}>
                    </input>

                </div>


                <div className="row">
                    <div className="center">
                        <a className="waves-effect waves-light btn"
                            onClick={() => [

                                add(name,observacao)

                            ]

                            }>
                            Salvar
                        <i className="material-icons right">send</i>
                        </a>
                    </div>
                </div>
                </div>
            </Grid>
            
        </div>

    }
}

const mapStateToProps = state => ({ name:state.competencia.name, observacao:state.competencia.observacao})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ search, clear, add, changeName,changeObservacao}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompetenciaForm)
