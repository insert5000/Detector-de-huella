import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Image, View, Button, Text, TouchableOpacity } from 'react-native';

export default function StudentScreen({setIsAuthenticated}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alumno</Text>
            <Image source={{uri: 'https://thumbs.dreamstime.com/b/headshot-portrait-smiling-businessman-posing-office-profile-picture-young-caucasian-suit-glasses-pose-modern-happy-214577125.jpg'}} style={styles.image}/>
            <Text style={{color: 'gray', fontWeight: 'bold', marginTop: 15}}>EPIS </Text>
            <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 15}}>Randi Angel Paredes Catacora </Text>
           <View style={styles.divider}></View>
            <View style={styles.notes}>
            <Text style={{fontSize: 25, fontWeight: '500', marginBottom: 15, marginTop:10}}>Cursos</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Matematica I</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Auditoria de Sistemas</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Taller de Tesis II</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Construccion de Software II</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Desarrollo Personal y Liderazgo</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Gerencia de Tecnologias de la Informacion</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Machine Learning</Text>
            <Text style={{fontSize: 15, fontWeight: '500', marginBottom: 15, color:'gray'}}>Seguridad de Tecnologia de Informacion</Text>
            </View>
           
           
            

            <TouchableOpacity 
                onPress={() => setIsAuthenticated(false)}
                style={styles.btn}>
                <Text style={styles.text}>Salir</Text>
            </TouchableOpacity>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    divider:{
        backgroundColor:'gray',
        width:'80%',
        height:2
    },
    notes:{
        alignItems:'flex-start',
        width:'75%',
    },
    container: {
        marginTop:40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textInput: {
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#00000010',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    btn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        margin: 10,
        borderRadius: 15,
        marginTop: 50,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 15,
        paddingBottom: 20,
    }
})