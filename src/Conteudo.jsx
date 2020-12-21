import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Botao from './Botao';

export default props => {
    /* let lista_classe = props.classe.map(dados => {
            return(
            <option value={dados.Classe}>{dados.Classe}</option>
      )
  }) */
    const lista_todos = props.tabela.map(dados => {
        return (
            <tr>
                <th scope="row">{dados.Id}</th>
                <td>{dados.Nome}</td>
                <td>{dados.Notas}</td>
                <td>{dados.Faltas}</td>
            </tr>

        )
    })
    return(
        <div>
            {/* <button type="button" class="btn btn-primary" onClick = {props.enviar}>Enviar para backend</button> */}
            {/* <button type="button" class="btn btn-primary" onClick = {props.receber}>Receber do backend</button> */}
            {/* <Botao NomeBotao = "Remover"/> */}
            <header className="head1"></header>
            <header className="head2">
                <h2>&emsp; EducaUB</h2>
            </header>
            <div class = "container">
                <h2>Painel do professor</h2>
                {/* Seleção de classe */}
                <div>
                    <label>
                      Classe:
                      <select value={props.classe} onChange={props.setClasseSelecionada}>
                        <option></option>
                      {
                          props.classes.map(dados => {
                            return (
                                <option>{dados.Classe}</option>
                                );
                            })
                      }  
                      </select>
                    </label>
                    </div>
    
                {/* Mostra as informações dos alunos */}
                <table class="table table-striped">
                  <thead class="thead-dark">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Nota 1</th>
                        <th scope='col'>faltas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lista_todos}
                    </tbody>
                </table>
    
                <h2>Notas e faltas</h2>
                <div>
                    <label htmlFor="NomeInput">Id do aluno: </label>
                    <input typeof="number" onChange = {props.set_aluno_id}/>
                    <br/>
                    
                    <label htmlFor="NomeInput">Nota do aluno: </label>
                    <input typeof="number" onChange = {props.set_nota}/>
                    <br/>
                </div>


                <br/>
                <select onChange={props.set_falta}>
                    <option value = '0' class = "">Presente</option>
                    <option value = '1' class = "">Não presente</option>
                </select>
                <br/>
                <br/>
                <button type="button" class="btn btn-primary" onClick = {props.enviar}>Enviar informações</button>
            </div>


            <footer>
                <div>
                  <h3>
                    &emsp; Dúvidas? Contate-nos: &emsp;{" "}
                    <span style={{ textAlign: "rigth" }}>
                      {" "}
                      <span /> xxxxx.xxxxx@ufu.br &emsp; <span /> (34)
                      9xxxx-xxxx{" "}
                    </span>
                  </h3>
                </div>
            </footer>
        </div>
    )
}