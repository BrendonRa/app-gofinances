// 1 Passo - importar os componentes necessarios para construir a interface
import { View, Text, StyleSheet, Image } from 'react-native';

// 2 Passo - importar o tema da aplicação
import theme from '../../global/styles/theme';

export default function Home() {
    return (
        <View style={estilos.Container}>
            <View style={estilos.Header}>
                <View style={estilos.TituloWrapper}>
                    <Image source={require('../../../assets/logotipo.png')} styles={estilos.Logotipo}/>

                    <Text style={estilos.Title}>Controle suas finanças de forma muito simples!</Text>
                    <Text styles={estilos.SignInTitle}>Faça seu login com uma das contas abaixo</Text>
                </View>
            </View>

            <View style={estilos.Footer}>
                <View style={estilos.FooterWrapper}>

                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    Container: {
        flex: 1
    },
    
    Header: {
        width: '100%',
        height: '70%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'flex-end'
    },

    TituloWrapper: {
        alignItems: 'center'
    },

    Title: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 45
    },

    SignInTitle: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 67
    },

    Footer: {
        width: '100%',
        height: '30%',
        backgroundColor: theme.colors.secundary
    },

    FooterWrapper: {
        marginTop: -4,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    },

    Logotipo: {
        width: 120,
        height: 68
    }
})