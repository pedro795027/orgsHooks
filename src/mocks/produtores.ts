const green = require("../assets/images/green.png") as string;
const grow = require("../assets/images/grow.png") as string;
const jenny = require("../assets/images/jenny-jack.png") as string;
const potager = require("../assets/images/potager.png") as string;
const salad = require("../assets/images/salad.png") as string;

const gerarNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores ={
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Jenny",
            imagem: jenny,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1,5),
        }
    ]
}

export default produtores;