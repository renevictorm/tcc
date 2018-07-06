import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    searchArquivo, addArquivo, clearArquivo, changeMatricula, changeNameArquivo, changeFileArquivo
} from './arquivoActions'
import axios from 'axios'

class NovoArquivo extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)
        this.fileChangedHandler = this.fileChangedHandler.bind(this)
        this.uploadHandler = this.uploadHandler.bind(this)
        var escolha1;
    }


    componentWillMount() {
        this.props.clearArquivo()
        this.props.searchArquivo()
    }
    keyHandler(e) {
        const { } = this.props


        clearArquivo()

    }

    getVALUE() {
        const { addArquivo, searchArquivo, nameArquivo, fileArquivo } = this.props

        addArquivo(name, fileArquivo)


    }


    fileChangedHandler(event) {

        const file = event.target.files[0]
        const name = event.target.files[0].name
        const filef = new FormData();
        filef.append('file',file)
        console.log(filef)
        axios.post('http://localhost:3003/api/arquivo',  {file})


    }

    uploadHandler() {
        this.props.searchArquivo()
    }

    uploadHandler3() {
     
    }


    render() {
        const { addArquivo, searchArquivo } = this.props
        return <div style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
                <h1>Novo Arquivo</h1>
                <div className="socorro2">
                    <br />

                    <div className="input-field" >


                        <input id="tipo" type="file"
                            placeholder='Arquivo'

                            onChange={this.fileChangedHandler}
                            onKeyUp={this.keyHandler}
                            value={this.props.fileArquivo}                >
                        </input>

                    </div>

                    <div className="input-field" >


                        <input id="tipo" type="text"
                            placeholder='NOme'

                            onChange={this.props.changeNameArquivo}
                            onKeyUp={this.keyHandler}
                            value={this.props.nameArquivo}                >
                        </input>

                    </div>
                    <div className="row">
                        <div className="center">
                            <a className="waves-effect waves-light btn"
                                onClick={() => [

                                    this.uploadHandler()

                                ]

                                }>
                                Salvar
                        <i className="material-icons right">send</i>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center">
                            <a className="waves-effect waves-light btn"
                                onClick={() => [

                                    this.uploadHandler3()

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

const mapStateToProps = state => ({
    arquivo: state.arquivo.file
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        addArquivo, changeNameArquivo, changeFileArquivo, searchArquivo, clearArquivo
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NovoArquivo)
