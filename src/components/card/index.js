import { React } from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';

function Card( title, text, img, link ) {
    return (
        // style é o atributo
        // estilo é a variável de estilo
        <View style={estilo.container}>
            <Text style={[estilo.p,estilo.title]}> {title} </Text>
            <Text style={estilo.p}> {text} </Text>

            {/* imagem */}
            {/* a função da view é igual da div */}
            <View style={estilo.imgcontainer}>
                <Image style={estilo.img} source={img} />
            </View>
            
            {/* link */}
            <Text style={[estilo.p,estilo.a]} 
                  onPress={() => { Linking.openURL(link); }}>
                Site {title}
            </Text>

        </View>
    );
}


const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        width: 200,
        height: 300,
        marginBottom: 25,
        padding: 10,
        borderRadius: 15
    },
    p: {
        textAlign: 'center'
    },
    imgcontainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 35
    },
    img: {
       width: 70,
       height: 70 
    },
    link: {
        color: 'blue'
    }
});

export default Card;