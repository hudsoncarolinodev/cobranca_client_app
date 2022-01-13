const db = require("../mock/db")

class Cobranca {
    constructor({status = false,descricao, valor, cliente}){
       this.id = this.gerarId() + 1
       this.status      = status
       this.descricao   = descricao
       this.valor       = valor
       this.cliente     = cliente
    }

    gerarId() {
        let maxId = 0
        
        db.cobrancas.forEach(movie => {
            if (movie.id > maxId) {
                maxId = movie.id
            }
        })
        return maxId
    }

    save() {
        db.cobrancas.push(this)
    }

}

module.exports = Cobranca