const db = require("../mock/db")
const Cobranca = require("../models/Cobranca")

class CobrancaController {
    
    static
    retornarTodosCobrancas(){
        return db.cobrancas
    }

    static
    cadastrarCobranca(data){

        const novaCobranca = new Cobranca(data)
        novaCobranca.save()

        return novaCobranca

    }
}

module.exports = CobrancaController