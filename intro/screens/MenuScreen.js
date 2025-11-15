import { Text, StyleSheet, View } from 'react-native'
import React, { useState} from 'react'
import ContadorSreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextScreen from './TextScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';  
import ActivityScreen from './ActivityScreen'; 
import FlatScreen from './FlatScreen';
import ModalScreen from './ModalScreens'; 
import BottomScreen from './BottomScreen';
import RepasoScreen from './RepasoScreen';

import { Button } from 'react-native-web';


export default function MenuScreen() {

     const [screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorSreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'text':
            return <TextScreen/>;
        case 'image':
            return <ImageScreen/>;
        case 'scroll': 
            return <ScrollScreen/>;
        case 'activity':   
            return <ActivityScreen/>;
        case 'flat':
            return <FlatScreen/>;
        case 'modal':  
            return <ModalScreen/>; 
        case 'bottom':
            return <BottomScreen/>;
        case 'Repaso':
            return <RepasoScreen/>;
        

        case 'menu':
            default:
                  return (
                    <View>
                    <Text> Menu de practicas </Text>
                    <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                    <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
                    <Button onPress={()=>setScreen('text')} title='Pract:Text'/>
                    <Button onPress={()=>setScreen('image')} title='Pract:Image'/>
                    <Button onPress={()=>setScreen('scroll')} title='Pract:Scroll'/> 
                    <Button onPress={()=>setScreen('activity')} title='Pract:Activity'/>
                    <Button onPress={()=>setScreen('flat')} title='Pract:Flat'/>
                    <Button onPress={()=>setScreen('modal')} title='Pract:Modal'/>
                    <Button onPress={()=>setScreen('bottom')} title='Pract:Bottom'/>  
                    <Button onPress={()=>setScreen('Repaso')} title='Pract:Repaso'/>  

                    
                    </View>
                    )

    }

   
  
}

const styles = StyleSheet.create({})