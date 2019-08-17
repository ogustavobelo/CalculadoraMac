import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    visor: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        alignItems: "flex-end"
    },
    valorVisor: {
        fontSize: 60,
        color: "#FFF"
    }
})

export default props =>
    <View style={styles.visor}>
        <Text style={styles.valorVisor} 
        numeroDeLinhas={1}>{props.value}</Text>
    </View>