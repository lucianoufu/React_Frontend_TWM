import React, { useState } from 'react'
import Dropmenu from './Dropmenu'
import ShowTable from './ShowTable'
import GetInfo from './getInfo'
import { Form, Col, Button } from 'react-bootstrap';
/* import { FaWhatsapp, FaMailBulk } from "react-icons/fa"; */

import './styles.css'

export default class TeacherScreen extends React.Component
{
    constructor(props){
        super(props)
    }

    state = {
        nota: 0,
        falta: 0,
        id_professor: 1,
        id_aluno: 0,
        tabela: [],
        classes: [],
        classe_selecionada: 0,
        id: 0,
        nota1: 0,
        nota2: 0,
        nota3: 0,
        nota4: 0,
        faltas: 0,
        id_disciplina: 0,
        id_estudante: 0
    };

    setId = (event) => {
        this.setState({
            id: event.target.value
        })
    };

    setNota1 = (event) => {
        this.setState({
            nota1: event.target.value
        })
    }

    setNota2 = (event) => {
        this.setState({
            nota2: event.target.value
        })
    }
    
    setNota3 = (event) => {
        this.setState({
            nota3: event.target.value
        })
    }

    setNota4 = (event) => {
        this.setState({
            nota4: event.target.value
        })
    }

    receber = () => {
        const myUrl = 'http://localhost:8000/api/pessoa/'

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-type': 'application/json'},            
        };
        fetch(myUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Chegou dado!!");
                console.log(data)
            })
    }

    setClasseSelecionada = (event) => {
        this.setState({
            classe_selecionada: event.target.value,
        })
    }

    setNota = (event) => {
        this.setState({
            nota: event.target.value
        })
    }

    setFalta = (event) => {
        this.setState({
            faltas: parseInt(event.target.value) + this.state.faltas
        })
    }

    getClasseSelecionada = () => {
        return this.state.classe_selecionada
    }

    getTableData = () => {
        const myUrl = 'http://localhost:8000/api/informacaoclasse/'.concat(this.getClasseSelecionada())
        const requestOptions = {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        };
        fetch(myUrl, requestOptions)
            .then(response => response.json())
            .then(data =>{
                console.log("Chegou tabela dado!!");
                /* data.map(dados => { */
                /*     this.state.tabela.concat(dados.nome_escola) */
                /* }) */
                console.log(data)
                this.setState({tabela: data})
                /* console.log(this.state.Tabela) */
            })
    }

    getClassInformation = () => {
        const myUrl = 'http://localhost:8000/api/listaclasse/1'
        const requestOptions = {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        };
        fetch(myUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Chegou dado!!!");
                this.setState({classes: data})
            })
            console.log(this.state.classe)
    }

    atualizarAluno = () => {
        const myUrl = 'http://localhost:8000/api/disciplinaestudante/'.concat(this.state.id)
        const requestOptions = {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        };
        fetch(myUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Chegou dado!!!");
                this.setState({
                    faltas: data.faltas,
                    id_disciplina: data.id_disciplina,
                    id_estudante: data.id_estudante,
                })
            })
    }

    PutAluno = () => {
        const myUrl = 'http://localhost:8000/api/disciplinaestudante/'.concat(this.state.id, "/")
        let jsonData = {"id_estudante": this.state.id_estudante, "id_disciplina": this.state.id_disciplina, "notas1": this.state.nota1, "notas2": this.state.nota2, "notas3": this.state.nota3, "notas4": this.state.nota4, "faltas": this.state.faltas}

        const requestOptions = {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(jsonData)
        }
        fetch(myUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Dados atualizados')
            })
    }
    enviar = () => {
        const myUrl = 'http://localhost:8000/api/pessoa/'
        let jsonData = {'nome': this.state.nome, 'login': this.state.login, 'senha': this.state.senha}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(jsonData)
        };
        fetch(myUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("Chegou dado!!");
                console.log(data);
                
            })
    }


    render(){
        
        return(
            <div className="TeacherScreen">
                    <header className="head1"></header>
                    <header className="head2">
                        <h2>&emsp; EducaUB</h2>
                    </header>
                    <div className="bg" />
                    <div className="bg bg2" />
                    <div className="bg bg3" />
                    <div class = "container">
                        <h2>Painel do professor</h2>
                        
                        <button type="button" class="btn btn-primary" onClick = {this.getClassInformation} >Atualizar Classes</button>
                        <br />
                        <br />
                        <Dropmenu setClasseSelecionada = {this.setClasseSelecionada} classe_seleciona = {this.state.classe_selecionada} classes = {this.state.classes}/>
                        <button type="button" class="btn btn-primary" onClick = {this.getTableData} >Atualizar</button>
                        <br />
                        {/* <Form style={{ margin: '5px' }}>
                          <Form.Label>Estabelecimento</Form.Label>
                              <Form.Control as="select" defaultValue="Selecione..." value={this.state.classe_selecionada} onChange={this.setClasseSelecionada2}>
                                  <option>01 - CNPJ</option>
                                  <option>3 Ano</option>
                                  <option>03 - CAEPF</option>
                          </Form.Control>
                        </Form> */}

                        <ShowTable tabela = {this.state.tabela} />

                        <h2>Notas e faltas</h2>
                        <GetInfo texto = "Id do aluno"   onChange = {this.setid} inputText = {this.state.id} set_valor   = {this.setId}/>
                        <GetInfo texto = "1ª Nota do aluno" onChange = {this.setNota1} inputText = {this.state.setNota1} set_valor = {this.setNota1}/>
                        <GetInfo texto = "2ª Nota do aluno" onChange = {this.setNota2} inputText = {this.state.setNota2} set_valor = {this.setNota2}/>
                        <GetInfo texto = "3ª Nota do aluno" onChange = {this.setNota3} inputText = {this.state.setNota3} set_valor = {this.setNota3}/>
                        <GetInfo texto = "4ª Nota do aluno" onChange = {this.setNota4} inputText = {this.state.setNota4} set_valor = {this.setNota4}/>
                        <br />
                        <select onChange={this.setFalta}>
                            <option value = '' class = ""></option>
                            <option value = '0' class = "">Presente</option>
                            <option value = '1' class = "">Não presente</option>
                        </select>
                        <br/>
                        <br/>
                        <button type="button" class="btn btn-primary" onClick = {this.atualizarAluno} >Atualizar informações</button>
                        <button type="button" class="btn btn-primary" onClick = {this.PutAluno} >Enviar informações</button>
                    </div>
                    <footer>
                        <div>
                            <h3>
                                &emsp; Dúvidas? Contate-nos: &emsp;{" "}
                                
                                    {" "}
                                    {/* <FaMailBulk /> */} xxxxx.xxxxx@ufu.br &emsp; {/* <FaWhatsapp /> */} (34)
                                    9xxxx-xxxx{" "}
                                
                            </h3>
                        </div>
                    </footer>
            </div>
        )
    }
}