import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native'

const styles = StyleSheet.create({
    botao: {
        fontSize: 30,
        height: Dimensions.get('window').width/4 ,
        width: Dimensions.get('window').width/4 ,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    botaoOperacao: {
        color: "#fff",
        backgroundColor: "#fa8231"
    },
    botaoDuplo: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    botaoTriplo: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const estiloBotao = [styles.botao]
    if(props.duplo) estiloBotao.push(styles.botaoDuplo)
    if(props.triplo) estiloBotao.push(styles.botaoTriplo)
    if(props.operacao) estiloBotao.push(styles.botaoOperacao)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={estiloBotao}> {props.label} </Text>
        </TouchableHighlight>
    )
}