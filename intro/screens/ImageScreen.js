import { Text, StyleSheet, View, ImageBackground, Animated, Easing } from 'react-native'
import React, {useEffect, useState} from 'react'

export default function BackroundImage() {
    const [cargando, setcargando]= useState(true);
    const desvanecido=new Animated.Value(1); 

    useEffect(()=>{
      const timer= setTimeout(()=>{
        Animated.timing(desvanecido,{
        toValue:0,
        duration:800,
        easing:Easing.out(Easing.ease),
        useNativeDriver:true,
        }).start(()=>setcargando(false));

      },2000);
      return()=> clearTimeout(timer);
    },[]);

    if(cargando){
      return (
        <Animated.View style={[styles.splashContainer, {opacity:desvanecido}]}>
        <ImageBackground
          source={require('../assets/candy.jpg')}
          resizeMode='contain'
          style={styles.splashImage}
        >



          <Text style={styles.splashText}>Cargando... </Text>
        </ImageBackground>
        </Animated.View>
      );
    }
    return (

  <ImageBackground
  source={require('../assets/imagen Practica Carlos.jpg')}
    resizeMode='cover'
    style={styles.backgrouns}
  >
  <View style={styles.textoContainer}>
  <Text style={styles.texto}>Bienvenido a mi App!</Text>
  </View>
  
  </ImageBackground>

     // <View>

        //<Text>proximante por Carlos Alberto </Text>
     // </View>
    )
  
}

const styles = StyleSheet.create({
    backgrouns:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',

      width:'100%',
      height:'100%'
    },
    texto:{
      color:'white',
      fontSize:24,
      fontWeight:'bold',
    },
    splashContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:50,
    },
    splashImage:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
    },
    splashText:{
      position:'absolute',
      marginBottom:60,
      fontSize:20,
      color:'#ae6767ff',


    },
    textoContainer:{
      backgroundColor:'black',
      padding:20,
    },

});