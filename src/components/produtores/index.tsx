import { useEffect, useState } from "react";
import { Text } from "react-native"
import { CarregaProdutores } from "../../services/carregaDados";

interface Produtor {
    nome: string;
    imagem: string,
    distancia: string,
    estrelas: number
}

export default function Produtores(){

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState<Produtor[]> ([]);

    useEffect(() => {
        const retorno = CarregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);

    }, []);

    return (
        <Text>
            {titulo}
        </Text>
    )
}