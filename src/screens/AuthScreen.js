import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

const myImage = require('../../assets/img.png')


export default function AuthScreen({onAuthenticate}){
    return(
        <View style={styles.container}>
            <Image source={myImage} style={styles.image}/>
            <Text style={styles.description}>Aplicacion de reconocimiento de huellas EPIS</Text>
            <TouchableOpacity
            onPress={onAuthenticate}
            style={styles.btn}>
                <Text
                 style={styles.text}
                >Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:70
    },
    btn: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893FC',
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: 400,
        height: 461,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 50,
        fontWeight: '400',
        marginVertical: 30,
        textAlign: 'center',
    },
    description: {
        marginTop:15,
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    }
})