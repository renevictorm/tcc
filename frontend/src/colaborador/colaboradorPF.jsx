import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { changeName, search, clear } from './colaboradorActions'

class ColaboradorPF extends Component { 
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() { // essa merda que da erro
        this.props.search()
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
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                        placeholder='Pesquise por nome'
                        onChange={this.props.changeName}
                        onKeyUp={this.keyHandler}
                        value={this.props.name}></input>
                </Grid>
                <Grid cols='12 3 2'>
                  
                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>

            </div>
        )

    }
}
const mapStateToProps = state => ({ name: state.colaborador.name })
const mapDispatchToProps = dispatch =>
    bindActionCreators({  changeName, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ColaboradorPF)