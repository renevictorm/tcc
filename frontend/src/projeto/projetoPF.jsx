import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { changeNameProjeto, searchProjeto, clearProjeto, changeChoiceProjeto, searchProjetoByCodigo } from './projetoActions'
import { changeNameCliente, searchCliente, clearCliente } from '../cliente/clienteActions'
import { clear ,search } from '../colaborador/colaboradorActions'
import { clearPC } from './projetoClienteActions'
import{clearFase, searchFase} from '../fase/faseActions'
class ProjetoPF extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() { // essa merda que da erro
        //this.props.clearCC()
        this.props.clear()
        this.props.search()
        this.props.clearProjeto()
        this.props.searchProjeto()
        //this.props.searchComp()
        this.props.clearFase()
        this.props.searchFase()
        this.props.clearCliente()
        this.props.searchCliente()
        this.props.clearPC()
    }
    keyHandler(e) {
        const { searchProjeto, nameProjeto, clearProjeto } = this.props
        if (e.key === 'Enter') {
            searchProjeto()
        } else if (e.key === 'Escape') {
            clearProjeto()
        }
    }


    render() {
        const { searchProjeto, nameProjeto } = this.props
        return (
            <div role='form' className='socorro3 row' >
                <Grid cols='8 8 8'>
                    <input id='name' className='form-control'
                        placeholder='Pesquise por nome'
                        onChange={this.props.changeNameProjeto}

                        value={this.props.nameProjeto}></input>
                </Grid>

                <Grid cols='4 3 2'>

                    <a className="waves-effect waves btn #1565c0 blue  left"
                        onClick={this.props.searchProjeto}>
                          <b>Nome </b>
                        <i className="material-icons "> {"search"}</i>
                      
                    </a>
                    <a className="waves-effect waves btn #1565c0 blue lighten-1 left"
                        onClick={this.props.searchProjetoByCodigo}>
                            <b>Code </b>
                        <i className="material-icons "> {"search"}</i>
                    </a>

                    <a className="waves-effect waves btn #1565c0 orange lighten-1 left"
                        onClick={this.props.clearProjeto}>

                        <i className="material-icons ">{"clear"}</i>
                    </a>

                </Grid>

            </div>
        )

    }
}
const mapStateToProps = state => ({ nameProjeto: state.projeto.nameProjeto, codigoProjeto: state.projeto.codigorojeto, choiceProjeto: state.projeto.choiceProjeto })
const mapDispatchToProps = dispatch =>
    bindActionCreators({   clear,search, clearFase, searchFase, clearPC, changeNameCliente, searchCliente, clearCliente,changeNameProjeto, searchProjeto, clearProjeto, changeChoiceProjeto, searchProjetoByCodigo }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProjetoPF)