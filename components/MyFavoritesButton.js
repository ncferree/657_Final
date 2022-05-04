import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';




export default function AppButton({title, onPress}) {
  return (
    
    <TouchableOpacity 
        style = {styles.button} 
        onPress={onPress} 
        >
        <Text style = {styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        flex: .1,
        backgroundColor: '#000' ,
        justifyContent: 'center',
        alignItems: 'center',
        width: '94.5%',
        padding: '4%',
        margin: '3%',
        borderRadius: 5,
        
    },
    buttontext: {
        color: '#fff',
    },
   
})