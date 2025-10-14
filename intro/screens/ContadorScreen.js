//1. imports: Zona de importaciones.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2. Main; Zona de componentes
export default function App() {
  const [contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto} >Contador</Text>
      <Text style={styles.texto2} >{contador}</Text>

      <View style={styles.contenedorBotones}> 
      <Button color="green" title='Incrementar' onPress={()=> setContador(contador + 1)}>  </Button>
      <Button color="red" title='Decrementar' onPress={()=> setContador(contador - 1)}>  </Button>
      <Button color="blue" title='Reiniciar' onPress={()=> setContador(0)}>  </Button>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}
//3; imports: Zona de Estilos y Posicionamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beadadff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily:"Times New Roman", 
    fontSize:30,
    color:'#050561ff',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

   texto2:{
    fontFamily:"Courier", 
    fontSize: 40,
    color:'#051361ff',
    fontWeight:'900',
    textDecorationLine:'underline',
  },

  contenedorBotones:{
    marginTop:20,
    flexDirection:'row',
    gap:15, 

  },

});
