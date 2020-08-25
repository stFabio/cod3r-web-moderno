function tratarErroELancar(erro) {
    //throw new Error("Deu erro irmão")
    throw {
        nome: erro.name,
        msg: erro.mesage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }

}

const obj = { nome: "Roberto" }
imprimirNomeGritado(imprimirNomeGritado(obj))