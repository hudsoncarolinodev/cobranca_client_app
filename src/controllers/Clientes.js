const db = require("../mock/db")
const Cliente = require("../models/Cliente")

class ClienteController {
    
    static
    retornarTodosClientes(){
        return db.clientes
    }

    static
    cadastrarCliente(data){

        const novoCliente = new Cliente(data)
        novoCliente.save()

        return novoCliente

    }
}

module.exports = ClienteController