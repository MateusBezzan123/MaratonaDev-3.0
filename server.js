//configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para  apresentar arquivos estáticos
server.use(express.static('public'))


//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./",{
    express: server
})

const donors = [
    {
        name:"Diego Fernandes",
        blood:"AB"
    }
]

//configurar a apresentação da pagina
server.get("/", function(req,res){
    return res.render("index.html")
})

//ligar o servidor e permitir o acesso na porta 3000
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