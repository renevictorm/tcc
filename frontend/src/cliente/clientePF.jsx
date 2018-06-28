import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { changeNameCliente, searchCliente, clearCliente } from './clienteActions'


class ClientePF extends Component { 
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() { // essa merda que da erro
        //this.props.clearCC()
        
        this.props.clearCliente()
        this.props.searchCliente()
        //this.props.searchComp()
    }
    keyHandler(e) {
        const { searchCliente, nameCliente, clearCliente } = this.props
        if (e.key === 'Enter') {
           searchCliente() 
        } else if (e.key === 'Escape') {
            clearCliente()
        }
    }
    render() {
        const {  searchCliente, nameCliente } = this.props
        return (
            <div role='form' className='socorro3'>
                <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                        placeholder='Pesquise por nome'
                        onChange={this.props.changeNameCliente}
                        onKeyUp={this.keyHandler}
                        value={this.props.nameCliente}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    
                    <a className="waves-effect waves btn #1565c0 blue darken-3 left"
                        onClick={this.props.searchCliente}>
                        
                    <i className="material-icons ">{"search"}</i>
                    </a>
                    <a className="waves-effect waves btn #1565c0 blue darken-3 left"
                        onClick={this.props.clearCliente}>
                        
                    <i className="material-icons ">{"clear"}</i>
                    </a>
                   
                </Grid>

            </div>
        )

    }
}
const mapStateToProps = state => ({ nameCliente: state.cliente.nameCliente })
const mapDispatchToProps = dispatch =>
    bindActionCreators({  changeNameCliente, searchCliente, clearCliente}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientePF)