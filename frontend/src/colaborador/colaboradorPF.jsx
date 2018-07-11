import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { changeName, search, clear } from './colaboradorActions'
import { searchCC, clearCC } from './ccActions'
import {searchComp,clearComp} from '../competencia/competenciaActions'


class ColaboradorPF extends Component { 
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() { // essa merda que da erro
        this.props.clearCC()
        this.props.clearComp()
        this.props.clear()
        this.props.search()
        this.props.searchComp()
    }
    keyHandler(e) {
        const { search, name, clear } = this.props
        if (e.key === 'Enter') {
           search() 
        } else if (e.key === 'Escape') {
            clear()
        }
    }
    render() {
        const {  search, name } = this.props
        return (
            <div role='form' className='socorro3'>
                <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                        placeholder='Pesquise por nome'
                        onChange={this.props.changeName}
                        onKeyUp={this.keyHandler}
                        value={this.props.name}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    
                    <a className="waves-effect waves btn #1565c0 blue darken-1 left"
                        onClick={search}>
                        
                    <i className="material-icons ">{"search"}</i>
                    </a>
                    <a className="waves-effect waves btn #1565c0 orange lighten-1 left"
                        onClick={this.props.clear}>
                        
                    <i className="material-icons ">{"clear"}</i>
                    </a>
                   
                </Grid>

            </div>
        )

    }
}
const mapStateToProps = state => ({ name: state.colaborador.name })
const mapDispatchToProps = dispatch =>
    bindActionCreators({  clearComp,changeName, search, clear,clearCC,searchCC, searchComp}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ColaboradorPF)