import React, { Component } from 'react'
import { Text, View, Picker, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import jwt from "jwt-decode";
class cadastrarProjeto extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/newproject.png")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };

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
        this._solicitarTemas();
    }

    _buscarDadosDoStorage = async () => {
        try {
            const value = await AsyncStorage.getItem("userToken");
            if (value !== null) {
                this.setState({ nome: jwt(value).Nome });
                this.setState({ token: value });
                this.setState({ idUsuario: jwt(value).jti }); // colocar como vem da api
            }
        } catch (error) { }
    };

    _solicitarEnvio = async () => {
        const response = await api.post('/api/Projetos/Cadastrar', {
            idAutor: this.state.idUsuario,
            nome: this.state.nomeProjeto,
            idTema: this.state.tema
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
        const response = await api.get('/api/Temas/Listar')
        const data = response.data;
        this.setState({ listaTemas: data });
    }

    renderizaTemas = ({ item }) => (
        <Picker.Item label={item.nome} value={item.id} />
    );

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.h1} h1>ROMAN</Text>
                <Text style={styles.h2} h2>Novo Projeto</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="white"
                        placeholder="Nome Projeto"
                        placeholderTextSize="16px"
                        onChangeText={nomeProjeto => this.setState({ nomeProjeto })}
                    />
                </View>
                <View>
                    <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={this.state.tema}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ tema: itemValue })}>
                        <Picker.Item label="Tema" value='null' />
                        {this.state.listaTemas.map((Element) => (
                            <Picker.Item label={Element.nome} value={Element.id} />
                        ))}
                    </Picker>
                    <TouchableOpacity style={styles.btn} onPress={this._solicitarEnvio}>
                        <Text style={styles.btntxt} >Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        height: "100%",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#08244D"
    },
    tema: {
        color: "white"
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
    },
    input: {
        textAlign: "center",
        width: 300,
        marginTop: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#677FA0",
        color: "white"
    },
    picker: {
        backgroundColor: "#22416F",
        textAlign: "center",
        width: 300,
        marginTop: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#677FA0",
        color: "white"
    }
})
export default cadastrarProjeto;