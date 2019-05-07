import React, { Component } from 'react'
// StyleSheet,
// Text,
// Image,
// ImageBackground,
import {
    View,
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
    solicitarLogin = async () => {
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
            <View>
                <TextInput
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder="senha"
                    password="true"
                    onChangeText={senha => this.setState({ senha })}
                />
                <TouchableOpacity
                    onPress={this.solicitarLogin}
                ></TouchableOpacity>
            </View>
        );
    }
}
export default login;