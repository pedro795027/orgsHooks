import { Image, Text, View } from "react-native";
import styles from './styles';

export default function Teste() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />
            <Text style={styles.title}>
                Olá, bem-vindo!
            </Text>
        </View>
    )
}