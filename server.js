// logica de fazer um café
const cor = "branco"
const tamanho = 2.5

function verificarSeOCopoEstaSujo(){
    //logica para verificar se o copo está sujo
    return "está sujo"
}

const copo = {
    //cor:"branco"
    cor,
    tamanho,
    verificarSeOCopoEstaSujo,
    //verificarSeOCopoEstaSujo(){},
}

console.log(copo)
copo.verificarSeOCopoEstaSujo()