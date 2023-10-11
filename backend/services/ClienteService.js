import db from "../config/db.js"

export async function cadastrarCliente(cliente) {
    const { cpf, nome, sobrenome, email } = cliente
    const situacao = 1
    const clienteCadastrado = await findByCpf(cpf)
    if (clienteCadastrado)
        return "CPF já cadastrado"

    return new Promise((resolve, reject) => {
        const query = "INSERT INTO clientes (cpf,nome,sobrenome,email,situacao) values (?,?,?,?,?)"
        db.query(query, [cpf, nome, sobrenome, email, situacao], function (error, resultado) {
            if (error)
                reject(error)

            resolve("Cadastro realizado com sucesso")
        })
    });
}
async function findByCpf(cpf) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM clientes WHERE cpf = ?"
        db.query(query, [cpf], function (error, clientes) {
            if (error)
                reject(error)

            if (clientes.length > 0)
                resolve(clientes[0])

            resolve(null);
        })
    })
}

export async function listarClientes() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM clientes "
        db.query(query, function (error, clientes) {
            if (error)
                reject(error)

            resolve(clientes)

        })
    })
}

export async function deletarCliente(id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM clientes WHERE id = ?"
        db.query(query, [id], function (error, clientes) {
            if (error)
                reject(error)

            resolve("Cliente excluido com sucesso");
        })
    })
}
