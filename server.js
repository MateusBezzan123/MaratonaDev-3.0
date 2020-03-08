// logica de fazer um café
const cor = "branco"
const tamanho = 2.5

function verificarSeOCopoEstaSujo(sujo){
    //logica para verificar se o copo está sujo
    //return "está sujo"
    //return "não está sujo"
    return `o copo ${sujo}`
}

const copo = {
    //cor:"branco"
    cor,
    tamanho,
    verificarSeOCopoEstaSujo,
    //verificarSeOCopoEstaSujo(){},
}

console.log(copo.verificarSeOCopoEstaSujo("está sujo"))
//console.log(copo.verificarSeOCopoEstaSujo())
//copo.verificarSeOCopoEstaSujo()