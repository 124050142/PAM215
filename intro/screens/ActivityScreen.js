import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';

export default function ActivityScreen() {
 
  const [loading, setLoading]= useState(false);
  const startLoading=()=>{
    setLoading(true);
    setTimeout(()=>setLoading(false), 3000)
  };

   if (loading) {

    return (
      
    <View style={styles.container}>
    <View >
          <ActivityIndicator
          size="large"
          color="#0000ffff"
          animating={true}
          hidesWhenStopped={true}
          />
          <Text> Cargando....</Text>

      </View>
    </View>

    );
   }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Activity Indicator</Text>
        <Button title="Carga de datos" onPress={startLoading}/>
        </View>
  );
  
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
     },

    title :{
     fontSize:20,
     alignItems:'center',
     justifyContent: 'center',
     marginBottom:20,

    },

    loaderContainer:{
      alignItems:'center',
    }

})