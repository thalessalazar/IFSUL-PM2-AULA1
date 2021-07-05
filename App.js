import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0,
  }

  atualizaValor1 = (number) => {
    this.setState({ valor1: number });
  }

  atualizaValor2 = (number) => {
    this.setState({ valor2: number });
  }

  somar = (valor1, valor2) => {
    this.state.resultado = 
      parseFloat(this.state.valor1) + 
      parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  render() {
    return (
      <View>
        <TextInput 
          onChangeText={this.atualizaValor1}
          placeholder="Valor 1"
          value={this.state.valor1}
          />
          
        <TextInput 
          onChangeText={this.atualizaValor2}
          placeholder="Valor 1" 
          value={this.state.valor2} />

        <Button title="Somar" onPress={() => this.somar(this.state.valor1, this.state.valor2)} />
      </View>
    )
  }
}



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
