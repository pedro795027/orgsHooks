import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native"
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

    const TopoLista = () => {
        return <Text> { titulo } </Text>
    }

    return (
        <FlatList 
        data={lista}
        renderItem={({item: {nome}}) => <Text> {nome} </Text>}
        ListHeaderComponent={TopoLista}
        />
        
    )
}