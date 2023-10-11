import db from "../config/db.js"

export async function cadastrarCarrinho(carrinho) {
    const { cliente_id, dt_cadastro, dt_atualizacao } = carrinho
    const carrinhoCadastrado = await findByCliente(cliente)
    if (carrinhoCadastrado)
        return "PRODUTOS ADICIONADOS AO CARRINHO EXISTENTE"

    return new Promise((resolve, reject) => {
        const query = "INSERT INTO carrinhos (cliente_id, dt_cadastro, dt_atualizacao) values (?,?,?)"
        db.query(query, [cliente_id, dt_cadastro, dt_atualizacao], function (error, carrinho) {
            if (error)
                reject(error)

            resolve("Carrinho criado com sucesso")
        })
    });
}
async function findByCliente(cliente) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM carrinhos WHERE cliente_id = ?"
        db.query(query, [cliente], function (error, carrinho) {
            if (error)
                reject(error)

            if (carrinho.length > 0)
                resolve(carrinho[0])

            resolve(null);
        })
    })
}

