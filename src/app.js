const express = require('express')

const app = express()
const port = 3000

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const ClienteController = require("./controllers/Clientes")
const CobrancaController = require("./controllers/Cobranca")

app.get("/clientes", (request,response) => {
    const data = ClienteController.retornarTodosClientes()
    response.status(200).json(data)
})

app.post("/clientes", (request,response) => {
    
   const dadosRequest = request.body
   const data  = ClienteController.cadastrarCliente(dadosRequest)

   response.status(201).json(data)
})

app.get("/cobrancas", (request,response) => {
    const data = CobrancaController.retornarTodosCobrancas()
    response.status(200).json(data)
})

app.post("/cobrancas", (request,response) => {

   const dadosRequest = request.body
   const data  = CobrancaController.cadastrarCobranca(dadosRequest)

   response.status(201).json(data)
})

app.listen(port, () => {
    console.log(`App está rodando em http://localhost:${port}`)
})

