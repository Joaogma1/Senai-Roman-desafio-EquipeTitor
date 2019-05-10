import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import Axios from 'axios';
class login extends Component {
    static navigationOptions =
        {
            header: null
        }
    constructor(props) {
        super(props);
        this.state = { email: "", senha: ""};
    }

    _solicitarEnvio = async () => {
        await Axios.post('http://192.168.0.12:5000/api/Login',
            {
                email: this.state.email,
                senha: this.state.senha
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.status === 200) {
                    const token = response.data;
                    AsyncStorage.setItem('userToken', token);
                    this.props.navigation.navigate("MainNavigator")
                }
            })
            .catch(error => console.warn(error))
        // .then(data => {
        //     if (data.status === 200) {
        //  alerta de enviado com sucesso   
        //     }
        // })
    };


    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.h1} h1>ROMAN</Text>
                <Text style={styles.h2} h2>LOGIN</Text>
                <View style={styles.login}>
                    <TextInput style={styles.input}
                        placeholderTextColor="white"
                        borderBottom="solid"
                        placeholder="email"
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput style={styles.input}
                        placeholderTextColor="white"
                        placeholder="senha"
                        password="true"
                        onChangeText={senha => this.setState({ senha })}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this._solicitarEnvio}
                    >
                        <Text style={styles.btntxt}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        backgroundColor: "#08244D"
    },
    h1: {
        color: "white",
        fontSize: 25,
        marginTop: 10
    },
    h2: {
        color: "white",
        fontSize: 50,
        marginTop: 100,
        marginBottom: 70
    },
    login: {
        width: "100%",
        height: "100%",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#08244D"
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
        marginTop: 80
    },
    btntxt: {
        color: "white",
        fontSize: 20
    }
})
export default login;