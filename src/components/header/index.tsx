import { Image, Text, View } from "react-native";
import styles from './styles';
import React from "react";

import { carregaTopo } from "../../services/carregaDados";

 class Teste extends React.Component{

    state = {
        topo : {
            boasVindas: '',
            legenda: '',           
        }
    }

    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({topo: retorno })
        console.log(retorno);
    }

    componentDidMount(): void {
        this.atualizaTopo();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />
                <Text style={styles.title}>
                    {this.state.topo.boasVindas}
                </Text>
                <Text style={styles.legenda}>
                    {this.state.topo.legenda}
                </Text>
            </View>
        )
    }
   
}

export default Teste;