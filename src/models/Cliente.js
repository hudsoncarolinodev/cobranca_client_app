const db = require("../mock/db")

class Cliente {
    constructor({nome, cpf, telefone}){
       this.id = this.gerarId() + 1
       this.nome = nome
       this.cpf = cpf
       this.telefone = telefone  
    }

    gerarId() {
        let maxId = 0
        
        db.clientes.forEach(movie => {
            if (movie.id > maxId) {
                maxId = movie.id
            }
        })
        return maxId
    }

    save() {
        db.clientes.push(this)
    }

}

module.exports = Cliente