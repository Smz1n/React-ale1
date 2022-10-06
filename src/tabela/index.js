export default function tabela() {
    let contatos = [
        {
            nome: 'Chiquim',
            telefone:'85 9 777777-77',
            cidade: 'Caucaia-CE'
        },
        {
            nome: 'zofia mansano',
            telefone:'85 9 777777-77',
            cidade: 'Caucaia-CE'
        },
        {
            nome: 'joao',
            telefone:'85 9 777777-77',
            cidade: 'Fortaleza-CE'
        },
        {
            nome: 'maria',
            telefone:'85 9 9999999-77',
            cidade: 'Fortaleza-CE'
        },
    ]
    return (        
    <>
    <hr/>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Cidade</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map((cont) => {
                    return (
                        <tr>
                            <td>{cont.nome}</td>
                            <td>{cont.telefone}</td>
                            <td>{cont.cidade}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
    )

    
}