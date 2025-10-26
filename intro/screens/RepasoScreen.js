import{Text, StyleSheet, View, Button, ImageBackground, TextInput, Alert, Image, Switch,} from 'react-native';
import React,{useState} from 'react';

export default function RepasoScreen() {
    const [nombre, setNombre]= useState('');
    const [correo, setCorreo]= useState('');
    const [aceptarTerminos, setAceptaTerminos]= useState(false);


    const registrarUsuario=()=>{
        if(nombre.trim() === ''){
            
            alert("Error, El nombre es obligatorio. Porfavor ingresa un nombre valido");
            return;
            
        }
        if(correo.trim() === ''){
           
            alert("Error, El correo es obligatorio. Porfavor ingresa un correo valido");
            return;
        }
        if(!aceptarTerminos){
        
            alert("Error, Debes aceptar los terminos y condiciones para registrarte");
            return;
        }
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(correo)){
            alert("Error, El correo ingresado no es valido. Porfavor ingresa un correo valido");
            
            
            return;
        }

        alert("Registro Exitoso! " +
        `\n Bienvenido, ${nombre}! \n Te has registrado con el correo: ${correo}`);

        
    }
    return(
        <ImageBackground
            source={require('../assets/imagen.jpg')}    
            resizeMode='cover'
            style={styles.backgrouns}
        >
            
            <View style={styles.container}>
                  <View style={styles.formBox}>

                <Text style={styles.titulo}>Registro de Usuario</Text>


                <Text style={styles.etiquetas}>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu nombre'
                    placeholderTextColor="#ffffffff"
                    value={nombre} 
                    onChangeText={setNombre}
                />


                <Text style={styles.etiquetas}>Correo Electrónico:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingresa tu correo electrónico ejemplo@correo.com'
                    placeholderTextColor="#ffffffff"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    inputType='email'
                    value={correo}
                    onChangeText={setCorreo}
                />


                <View style={styles.terminosContainer}>
                    <Switch
                        value={aceptarTerminos}
                        onValueChange={setAceptaTerminos}
                        trackColor={{false:'grey', true:'#0f37bcff'}}
                        thumbColor={aceptarTerminos ? '#41348aff': '#f4f3f4'}
                    
                    />
                    <Text style={styles.terminosTexto}>Acepto los términos y condiciones

                </Text>
                </View>

                <View style={styles.botonContainer}>
                <Button
                title='Registrarse'
                onPress={registrarUsuario}
                color='#0f37bcff'
                />
                </View>
            </View>
            </View>
            </ImageBackground>
    )
}
const styles= StyleSheet.create({
    backgrouns:{
        flex:1,
        width: '100%',
    height: '100%',
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: 'white',
  },
  titulo: {
    fontFamily:'Times New Roman',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  etiquetas: {
    fontFamily:'Times New Roman',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ffffffff',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  terminosTexto: {
    fontFamily:'Times New Roman',
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  botonContainer: {
    fontFamily:'Times New Roman',
    width: '20%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
formBox: {
    width: '85%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },


})
