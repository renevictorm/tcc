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
        this.props.changeFileArquivo(event.target.files[0])
    }
    /*    uploadHandler3() {
            const filef = event.target.files[0]
            //const name = event.target.files[0].name
           // const file = new FormData();
            //file.append('file',filef)
            //var fileBuffer = FileReader.readAsBinaryString(filef)
            var reader = new FileReader()
            reader.onload = function(){
                var text = reader.result;
                var name= 'aar';
                var node = document.getElementById('output');
                node.innerText = text;
                var file= reader.result;
               this.props.changeFileArquivo(reader.result);
                //axios.post('http://localhost:3003/api/arquivo',  {name,file})
              };
           //var file = reader.readAsBinaryString(filef)
           //new Buffer(file, 'base64')
            reader.readAsBinaryString(event.target.files[0])
            //axios.post('http://localhost:3003/api/arquivo',  {name,file})
         
        }
        fileChangedHandler(event) {
    
            const filef = event.target.files[0]
            //const name = event.target.files[0].name
           // const file = new FormData();
            //file.append('file',filef)
            //var fileBuffer = FileReader.readAsBinaryString(filef)
            var reader = new FileReader()
            reader.onload = function(){
                var text = reader.result;
                var name= 'aar';
                var node = document.getElementById('output');
                node.innerText = text;
                var file= reader.result;
               this.props.changeFileArquivo(reader);
                //axios.post('http://localhost:3003/api/arquivo',  {name,file})
              };
           //var file = reader.readAsBinaryString(filef)
           //new Buffer(file, 'base64')
            reader.readAsBinaryString(event.target.files[0])
            //axios.post('http://localhost:3003/api/arquivo',  {name,file})
    
    
        }
    */
    uploadHandler() {
        var reader = new FileReader()
        reader.onload = function () {

            var text = reader.result;
            var name = document.getElementById('nomearq').value;
            var node = document.getElementById('output');
            var idProjeto = document.getElementById('idproject').value;
            node.innerText = text;
            var file = reader.result;
            //0000000000000000
         
        
    
//console.log(idP)
axios.post('http://localhost:3003/api/arquivo', { name, file, idProjeto })
alert("Arquivo Salvo")


        };

reader.readAsDataURL(this.props.arquivo)
    }




render() {
    const { addArquivo, searchArquivo } = this.props
    return <div style={{ paddingTop: "20px" }}>
        <Grid cols='12 9 10'>
            <h1>Novo Arquivo</h1>
            <div className="socorro2">
                <br />

                <div className="input-field" >


                    <input id="output" type="file" encType="form-data"
                        placeholder='Arquivo'

                        onChange={this.fileChangedHandler}
                        onKeyUp={this.keyHandler}
                        value={this.props.fileArquivo}                >
                    </input>

                </div>

                <div className="input-field" >


                    <input id="nomearq" type="text"
                        placeholder='Nome'

                        onChange={this.props.changeNameArquivo}
                        //onKeyUp={this.keyHandler}
                        value={this.props.nameArquivo}                >
                    </input>

                </div>

                <div className="input-field" display="none">


                    <option id="idproject" value={this.props.idArquivoProjeto}               >
                    </option>

                </div>

                <div className="row">
                    <div className="center">
                        <a className="waves-effect orange lighten-1 waves-light btn"
                            onClick={() => [

                                this.uploadHandler()

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
    arquivo: state.arquivo.fileArquivo, nameArquivo: state.arquivo.nameArquivo, idArquivoProjeto: state.projeto.isEditedProjeto
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        addArquivo, changeNameArquivo, changeFileArquivo, searchArquivo, clearArquivo
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NovoArquivo)
