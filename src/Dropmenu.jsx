import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';

export default props => {
    return(
        <label>
          Classe:
          <select value={props.classe_seleciona} onChange={props.setClasseSelecionada} classe_seleciona = {1}>
            <option></option>
          {
              props.classes.map(dados => {
                return (
                    <option value={dados.nome_classe}>{dados.nome_classe}</option>
                    );
                })
          }  
          </select>
          {/* <Form style={{ margin: '5px' }}>
            <Form.Label>Estabelecimento</Form.Label>
                <Form.Control as="select" defaultValue="Selecione..." value={props.classe_seleciona} onChange={props.setClasseSelecionada}>
                    <option>01 - CNPJ</option>
                    <option>02 - CNO</option>
                    <option>03 - CAEPF</option>
            </Form.Control>
          </Form> */}
        </label>
    )
}