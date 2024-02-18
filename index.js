const Heroi = {
    nome: "Katia Kelly",
    idade: 27,
    tipo: "mago",
    ataque: "",
}

function atacar(tipo) {
    Heroi.tipo = tipo;
    if (tipo == "mago") {
        Heroi.ataque = "magia";
    } else if (tipo == "monge") {
        Heroi.ataque = "artes marciais";
    } else if (tipo == "guerreiro") {
        Heroi.ataque = "espada";
    } else if (tipo == "ninja") {
        Heroi.ataque = "shuriken";
    }
    return "atacou"
}

module.exports = { atacar, Heroi };