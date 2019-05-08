import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import api from '../services/api'
 class login extends Component {
    static navigationOptions =
        {
            header: null
        }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }
    // faz requerimento de login e redireciona
    _solicitarLogin = async () => {
        const response = await api.post('/login', {
            email: this.state.email,
            senha: this.state.senha
        });
        const token = response.data.token;
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate("NavegacaoAutenticada")
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
                        onPress={this._realizarLogin}
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