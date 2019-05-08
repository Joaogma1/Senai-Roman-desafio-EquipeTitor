import React, { Component } from 'react'
import { Text, View, Picker, TextInput, TouchableOpacity } from 'react-native'
import jwt from "jwt-decode";
class cadastrarProjeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeProjeto: '',
            nome: "",
            token: "",
            tema: null,
            idUsuario: null,
            listaTemas: []
        }

    }
    componentDidMount() {

    }

    _buscarDadosDoStorage = async () => {
        try {
            const value = await AsyncStorage.getItem("userToken");
            if (value !== null) {
                this.setState({ nome: jwt(value).Nome });
                this.setState({ token: value });
                this.setState({ idUsuario: jwt(value).idUsuario }); // colocar como vem da api
            }
        } catch (error) { }
    };

    _solicitarEnvio = async () => {
        const response = await api.post('/', {
            nome: this.state.nomeProjeto,
            tema: this.state.tema,
            idUsuario: this.state.idUsuario
        }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "bearer " + this.state.token
                }
            });

        const token = response.data.token;
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate("NavegacaoAutenticada")
    };

    _solicitarTemas = async () => {
        const response = await api.get('/CaminhoGetApi')
        const data = response.data;
        this.setState({ listaTemas: data });
    }

    renderizaTemas = ({ item }) => (
        <Picker.Item label={item.nome} value={item.id} />
    );
    render() {
        return (
            <View>
                <View>
                    <TextInput
                        placeholder="Nome Projeto"
                        onChangeText={nomeProjeto => this.setState({ nomeProjeto })}
                    />
                </View>
                <Text> Tema</Text>
                <View>
                    <Picker
                        selectedValue={this.state.tema}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ tema: itemValue })}>
                        {this.state.listaTemas.map((Element) => (
                            <Picker.Item label={Element.nome} value={Element.id} />
                        ))}
                    </Picker>
                    <TouchableOpacity onPress={this._solicitarEnvio}>
                        <Text >Enviar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
export default cadastrarProjeto;