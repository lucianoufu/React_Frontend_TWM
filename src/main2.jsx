import React from 'react'

export default props => {
    
      return (
        <div>
          <h1>Teste</h1>
          <p>{props.classe}</p>
          <label>
            Escolha seu sabor favorito:
            <select value={props.classe} onChange={props.setClasseSelecionada}>
            {
                props.classes.map(dados => {
                  return (
                      <option>{dados.Classe}</option>
                      );
                  })
            }  
            </select>
          </label>

          {
              props.classes.map(dados => {
                return (
                    <option>{dados.Classe}</option>
                    );
                })
          }  
          
          </div>
      );
}