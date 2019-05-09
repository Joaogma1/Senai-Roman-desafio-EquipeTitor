import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import api from "../services/api";
class main extends Component {

    // Colocar o icone

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/projectlist.png")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };
    constructor(props) {
        super(props);
        this.state = {
            ListaDeProjetos: [
                {
                    id: 1,
                    idAutor: 4,
                    idTema: 3,
                    nome: "Projeto 1",
                    idAutorNavigation: {
                        id: 4,
                        idCargo: 2,
                        idEquipe: 1,
                        nome: "João",
                        email: "joao@email.com",
                        projetos: []
                    },
                    idTemaNavigation: {
                        id: 3,
                        nome: "Séries",
                        projetos: []
                    }
                }
            ]
        }
    }
    componentWillMount() {
        // this.solicitarProjetos();
    }
    solicitarProjetos = async () => {
        const response = await api.get('/CaminhoGetApi')
        const data = response.data;
        this.setState({ ListaDeProjetos: data });
    }
    renderizarItens = ({ item }) => (
        <View >
            <View >
                <Text >{item.idAutorNavigation.nome}</Text>
                <Text >{item.idTemaNavigation.nome}</Text>
            </View>
            <View>
                <Text >{item.nome}</Text>
            </View>
        </View>
    );
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.h1}>ROMAN</Text>
                <Text style={styles.h2}>Projetos</Text>
                <View style={styles.projetos}>
                    <FlatList
                        data={this.setState.ListaDeProjetos}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizarItens} />
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
        fontSize: 40,
        marginTop: 70,
        marginBottom: 70
    },
    tabNavigatorIconHome: {
        width: 35,
        height: 35,
    },
})
export default main;