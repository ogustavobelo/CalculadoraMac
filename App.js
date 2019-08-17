import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Botao from './src/componentes/Botao'
import Visor from './src/componentes/Visor'

const estadoInicial = {
  valorVisor: '0',
  limparVisor: false,
  operacao: null,
  valores: [0, 0],
  atual: 0

}


export default class App extends Component {
  
  state = { ...estadoInicial }

  addDigito = n => {

    const limparVisor = this.state.valorVisor === '0' || this.state.limparVisor
    if (n === '.' && !limparVisor && this.state.valorVisor.includes('.')) return

    const valorAtual = limparVisor ? '' : this.state.valorVisor
    const valorVisor = valorAtual + n
    this.setState({ valorVisor, limparVisor: false })

    if(n!=='.') {
      const novoValor = parseFloat(valorVisor)
      const valores = [...this.state.valores]
      valores[this.state.atual] = novoValor

      this.setState({valores})
    }
  }

  limparMemoria = () => {
    this.setState({ ...estadoInicial })
  }

  setOperacao = operacao => {
    if(this.state.atual === 0) {
      this.setState({ operacao, atual: 1, limparVisor: true })
    } else {
      const igual = operacao === '='
      const valores = [...this.state.valores]
      try {
        valores[0] = eval(`${valores[0]} ${this.state.operacao} ${valores[1]}`)
      } catch(e) {
        valores[0] = this.state.valores[0]
      }

      valores[1] = 0
      this.setState({
        valorVisor: `${valores[0]}`,
        operacao: igual ? null : operacao,
        atual: igual ? 0 : 1,
        limparVisor: !igual,
        valores,
      })

    }
  }

    render() {
      return (
            <View style={styles.container}>
              <Visor value={this.state.valorVisor} />
              <View style={styles.botao}>
                <Botao label="AC" triplo onClick={this.limparMemoria } />
                <Botao label="/" operacao onClick={ this.setOperacao } />
                <Botao label="7" onClick={ this.addDigito } />
                <Botao label="8" onClick={ this.addDigito } />
                <Botao label="9" onClick={ this.addDigito } />
                <Botao label="*" operacao onClick={ this.setOperacao } />
                <Botao label="4" onClick={ this.addDigito } />
                <Botao label="5" onClick={ this.addDigito } />
                <Botao label="6" onClick={ this.addDigito } />
                <Botao label="-" operacao onClick={ this.setOperacao } />
                <Botao label="1" onClick={ this.addDigito } />
                <Botao label="2" onClick={ this.addDigito } />
                <Botao label="3" onClick={ this.addDigito } />
                <Botao label="+" operacao onClick={ this.setOperacao } />
                <Botao label="0" duplo onClick={ this.addDigito } />
                <Botao label="." onClick={ this.addDigito }/>
                <Botao label="=" operacao onClick={ this.setOperacao } />
                
    
              </View>
            </View>
          )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
    flexDirection: "row",
    flexWrap: "wrap"
  }

})

