import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {searchComp, clear, add, changeName, changeObservacao} from './competenciaActions.js'
import {   clearCC, searchCCTotal } from '../colaborador/ccActions.js'


class CompetenciaForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)
        var escolha1;
    }


    componentWillMount() {
        this.props.clearCC()
        this.props.searchCCTotal()
        this.props.clear()
        this.props.searchComp()
    }
    keyHandler(e) {
        const { add, searchComp, name, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? searchComp() : add(name)
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
                        <a className="waves-effect blue lighten-1 waves-light btn"
                            onClick={() => [

                                add(name,observacao)

                            ]

                            }>
                            <b>Salvar</b>
                            <i className="material-icons orange-text text-lighten-1 right">send</i>
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
    bindActionCreators({ searchComp, clear, add, changeName,changeObservacao,  clearCC, searchCCTotal}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompetenciaForm)
