const express = require("express")
const server = express()


server.get("/", function(req,res){
    return res.send("ok,cheguei aqui!")
})

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