import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { searchArquivo, clearArquivo,changeNameArquivo  } from './arquivoActions'



class ColaboradorPF extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount() {
        this.props.clearArquivo()


    }
    keyHandler(e) {
       
        if (e.key === 'Enter') {
            this.props.searchArquivo()
        } else if (e.key === 'Escape') {
            this.props.clearArquivo()
        }
    }
    render() {
        const { searchArquivo, nameArquivo,changeNameArquivo  } = this.props
        return (
            <div role='form' className='socorro3'>
                <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                        placeholder='Pesquise por nome'
                        onChange={this.props.changeNameArquivo }
                        onKeyUp={this.keyHandler}
                        value={this.props.nameArquivo}></input>
                </Grid>
                <Grid cols='12 3 2'>

                    <a className="waves-effect waves btn #1565c0 blue darken-1 left"
                        onClick={searchArquivo}>

                        <i className="material-icons ">{"search"}</i>
                    </a>
                    <a className="waves-effect waves btn #1565c0 orange lighten-1 left"
                        onClick={this.props.clearArquivo}>

                        <i className="material-icons ">{"clear"}</i>
                    </a>

                </Grid>

            </div>
        )

    }
}
const mapStateToProps = state => ({ name: state.arquivo.nameArquivo })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ searchArquivo, clearArquivo,changeNameArquivo  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ColaboradorPF)