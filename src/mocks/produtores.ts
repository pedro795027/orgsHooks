const logo = require("../assets/images/green.png") as string;

const gerarNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores ={
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: logo,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        }
    ]
}