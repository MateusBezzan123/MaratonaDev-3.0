// configurando o servidor
const express = require("express")
const server = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

//configurar o servidor para  apresentar arquivos estáticos
server.use(express.static('public'))

// habilitar body do formulario
server.use(express.urlencoded({ extended: true }))

// configurando a template engine
const nunjucks = require("nunjucks")

nunjucks.configure("./",{
    express: server,
    noCache:true, //boolean ou booleano aceita 2 valores,verdadiero ou falso
})

// Lista de doadores: Vetor ou Array
const donors = [
    {
        name:"Diego Fernandes",
        blood:"AB+"
    },
    
    {
        name:"Cleiton Souza",
        blood:"B+"
    },
    
    {
        name:"Robson Marques",
        blood:"O+"
    },
    
    {
        name:"Mayk Brito",
        blood:"A-"
    },
]

// configurar a apresentação da pagina
server.get("/", function(req,res){
    return res.render("index.html", { donors })
})

server.post("/", function(res,req){
    
    // pegar dados do formulario
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood
    
    // coloca valores dentro do array
    donors.push({
        name:name,
        blood:blood
    })

    return res.redirect("/")
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