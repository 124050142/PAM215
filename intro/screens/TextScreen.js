import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React,{useState} from 'react';




export default function TextInputAlertScreen() {
  const [nombre, setNombre]= useState('');
  const [password, setPassword]= useState('');
  const [Telefono, setTelefono]= useState('');

  const mostrarAlerta = () => {
     if(nombre.trim() === '' || password.trim() === '' || Telefono.trim() === '') {
        Alert.alert("Error", "Por favor completa todos los campos (movile)");
        alert("Error", "Por favor completa todos los campos (web)");
        return;
     } else {
        
        Alert.alert("Datos Ingresados \n" +
        `Nombre: ${nombre}\n Password: ${password}
        \nTelefono: ${Telefono}`
        );
        alert("Datos Ingresados \n" +
        `Nombre: ${nombre}\nPassword: ${password}
         \nTelefono: ${Telefono}`
        );
        






     }
  }

    return (

      <View style={styles.container}>

        <Text style={styles.titulo} >TextInput & Alert</Text>
        <Text style={styles.etiquetas}>Nombre:</Text>
        <TextInput style={styles.input} 
           placeholder='Escribe tu nombre aquí'
           value={nombre}
           onChangeText={setNombre}
        
        />

         <Text style={styles.etiquetas}>Password:</Text>
        <TextInput style={styles.input}
           placeholder='Escribe tu password aquí'
            secureTextEntry={true}
           value={password}
           onChangeText={setPassword}
        
        />

         <Text style={styles.etiquetas}>Telefono:</Text>
        <TextInput style={styles.input}
           placeholder='Escribe tu telefono aquí'
           keyboardType='phone-pad'
           value={Telefono}
           onChangeText={setTelefono}
        />
        <Button
          title='Mostrar Alerta'
           onPress={mostrarAlerta}
        
        />

        
        



        
      </View>
    )
  
}

const styles = StyleSheet.create({
     container : {
        flex: 1,
        backgroundColor: '#cfb4b4ff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     titulo:{
        fontFamily:'Times New Roman',
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        textDecorationLine:'underline',
        marginBottom:20,    
    },
    etiquetas:{
        fontSize:18,
        marginBottom:5,
        marginTop:10,
         },
    input:{
      width: '50%', //Ocupa el ancho Disponible
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#c9a5a5ff',
    },

})