import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Axios from 'axios';

export default class gerenciarTemas extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/theme.png")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            nome: ""
        }
    }
    _submeterTemas = async () => {
        await Axios.post('http://192.168.0.12:5000/api/Temas/Cadastrar',
            {
                nome: this.state.nome
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "bearer " + this.state.token
                }
            })
        // .then(data => {
        //     if (data.status === 200) {
        //  alerta de enviado com sucesso   
        //     }
        // })
    };
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.h1}>ROMAN</Text>
                <Text style={styles.h2}>Cadastro de Tema</Text>
                <View>
                    <TextInput style={styles.input}
                        placeholderTextColor="white"
                        borderBottom="solid"
                        placeholder="Nome do temas"
                        onChangeText={nome => this.setState({ nome })}
                    />
                    <TouchableOpacity style={styles.btn} onPress={this._submeterTemas}>
                        <Text style={styles.btntxt} >Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        backgroundColor: "#08244D",
        height: "100%"
    },
    h1: {
        color: "white",
        fontSize: 25,
        marginTop: 10
    },
    h2: {
        color: "white",
        fontSize: 40,
        marginTop: 70,
        marginBottom: 70
    },
    tabNavigatorIconHome: {
        width: 35,
        height: 35,
    },
    input: {
        textAlign: "center",
        width: 300,
        marginTop: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#677FA0",
        color: "white"
    },
    btn: {
        width: 120,
        height: 60,
        backgroundColor: "#0052BC",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 80,
        alignSelf: "center"
    },
    btntxt: {
        color: "white",
        fontSize: 20 
    }
})