import React from 'react'

export default props => {
    
    return(
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Nota 1</th>
                    <th scope="col">Nota 2</th>
                    <th scope="col">Nota 3</th>
                    <th scope="col">Nota 4</th>
                    <th scope='col'>faltas</th>
                </tr>
            </thead>
            <tbody>
            {props.tabela.map(dados => {
                    return (
                        <tr>
                            <th scope="row">{dados.Id}</th>
                            <td>{dados.Nome}</td>
                            <td>{dados.Notas1}</td>
                            <td>{dados.Notas2}</td>
                            <td>{dados.Notas3}</td>
                            <td>{dados.Notas4}</td>
                            <td>{dados.Faltas}</td>
                        </tr>

                    )
                })
                }
            </tbody>
        </table>
    )
}