import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Card from './src/components/card/index';

// import das imagens
import mysql from './imagens/mysql.png';
import php from './imagens/php.png';
import react from './imagens/react.png';
import reactnative from './imagens/react-native.png';

function App() {
  // o que será colocado na tela
  return(
    <View style={styles.container}>

      {/* mysql */}
      <Card title='MYSQL'
            text='Banco de Dados Relacional'
            img={mysql}
            link='https://www.mysql.com/' 
      />

      {/* php */}
      <Card title='PHP'
            text='Linguagem de programação'
            img={php}
            link='https://www.php.net/' 
      />

      {/* react */}
      <Card title='React'
            text='Framework para web'
            img={react}
            link='https://pt-br.reactjs.org/' 
      />

      {/* react-native */}
      <Card title='React-native'
            text='Framework javascript para mobile'
            img={reactnative}
            link='https://reactnative.dev/' 
      />

    </View>
  );
}

// criar uma array que contém as listas de formatações
const styles = StyleSheet.create({
  // use virgula para separar seletores e atributos
  container: {
    flex: 1,
    // os nomes dos atributos compostos são colocado juntos com a primeira letra da segunda palavra em maiusculo
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});

// concede acesso externo para a função
export default App;