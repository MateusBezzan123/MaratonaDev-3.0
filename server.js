// configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para  apresentar arquivos estáticos
server.use(express.static('public'))

// habilitar body do formulario
server.use(express.urlencoded({ extended: true }))

// configurar  a conexão  com o banco de dados
const Pool  = require('pg').Pool
const db = new  Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: '5432',
    database: 'doe'
})

// configurando a template engine
const nunjucks = require("nunjucks")

nunjucks.configure("./", {
    express: server,
    noCache:true, //boolean ou booleano aceita 2 valores,verdadiero ou falso
})


// configurar a apresentação da pagina
server.get("/", function(req,res) {
    const donors = []
    return res.render("index.html", { donors })
})

server.post("/", function(res,req) {
    
    // pegar dados do formulario
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood
    
    if(name == "" ||email == "" || blood == "" ) {
        return res.send("Todos os campos são obrigatorios.")
    }
    

    // coloca valores dentro do banco de dados.
    const query = `INSERT INTO donors("name","email","blood") 
    VALEUS ($1, $2, $3) `

    db.query(query, values, function(err) {
    if (err) return res.send("Erro no banco de dados")
    return res.redirect("/")
    })
})

// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000,function(){
    console.log("iniciei o servidor")
})





















// logica de fazer um café
//const cor = "branco"
//const tamanho = 2.5
//function verificarSeOCopoEstaSujo(sujo){
    //logica para verificar se o copo está sujo
    //return "está sujo"
    //return "não está sujo"
    //return `o copo ${sujo}`
//}
//const copo = {
    //cor:"branco"
    // cor,
    //tamanho,
    //verificarSeOCopoEstaSujo,
    //verificarSeOCopoEstaSujo(){},
//}
//console.log(copo.verificarSeOCopoEstaSujo("está sujo"))
//console.log(copo.verificarSeOCopoEstaSujo("não está sujo"))
//console.log(copo.verificarSeOCopoEstaSujo("não está sujo"))
//console.log(copo.verificarSeOCopoEstaSujo("está sujo"))
//console.log(copo.verificarSeOCopoEstaSujo("não está sujo"))
//console.log(copo.verificarSeOCopoEstaSujo())
//copo.verificarSeOCopoEstaSujo()

//const estante = [
//    {marca:"Coca Cola"},
//    {marca:"Coca Cola"},
//    {marca:"Coca Cola"}
//]