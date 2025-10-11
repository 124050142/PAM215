//1. imports: Zona de importaciones.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2. Main; Zona de componentes
export default function App() {
  const [contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text>Contador:{contador} </Text>
      <Button title='Incrementar' onPress={()=> setContador(contador + 1)}>  </Button>
      <Button title='Decrementar' onPress={()=> setContador(contador - 1)}>  </Button>
      <Button title='Reiniciar' onPress={()=> setContador(contador === 0)}>  </Button>

      <StatusBar style="auto" />
    </View>
  );
}
//3; imports: Zona de Estilos y Posicionamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
