import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreen() { 
  const [esEncendido, cambiarEsEncendido]=useState(false); 
  const [color, cambiarColor]=useState('yellow');
 
    return (

      <View style={styles.container}>

        <Text style={styles.titulo}>Control de luz</Text>

      {/* Operador Ternario
      {condicional ? valorTrue : valorFalso } */}

        <Text style= {[styles.luz, {color: esEncendido ? color:'black'}]}>
          {esEncendido ? 'Luz Encendida' : 'Luz Apagada'}
        </Text>

      <Switch
        value={esEncendido}
        onValueChange = {() => cambiarEsEncendido (!esEncendido)}
        trackcolor = {{true: 'yellow', false: 'grey'}}
      ></Switch>

      <View style = {styles.cajaBotones}>
      <Button
      title='Amarillo'
      onPress={() => esEncendido && cambiarColor('yellow')}
      color='#e9d929ff'
      ></Button>

      <Button
      title='Azul'
      onPress={() => esEncendido && cambiarColor('blue')}
      color='blue'
      ></Button>

      <Button
      title='Rojo'
      onPress={() => esEncendido && cambiarColor('red')}
      color='red'
      ></Button>
      </View>

      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1d1212ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   cajaBotones:{
    flexDirection:'row',
    gap:10,
    marginTop:15,
   },
   titulo:{
    fontSize:40,
    color:'white',
    marginBottom:20,
    fontWeight:'bold',
   },
   luz:{
    fontSize:30,
    marginBottom:15,
   },


})