import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import api from "../services/api";
import Axios from 'axios';
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
            ListaDeProjetos: []
        }
    }
    componentWillMount() {
        this._solicitarProjetos();
    }
    _solicitarProjetos = async () => {
        const response = await Axios.get('http://192.168.0.12:5000/api/Projetos/Listar') // Mudar Ip para maquina Local
        const data = response.data;
        this.setState({ ListaDeProjetos: data });
    }
    renderizaItem = ({ item }) => (
        <View style={styles.flatItemLinha}>
            <View style={styles.flatItemContainer}>
                <Text style={styles.flatItemData}>{item.nome}</Text>
                <Text style={styles.flatItemTitulo}>{item.idAutorNavigation.nome}</Text>
            </View>
            <View style={styles.flatItemImg}>
                <Text style={styles.flatItemData}>{item.idTemaNavigation.nome}</Text>
            </View>
        </View>
    );
    render() {
        return (
            <View style={styles.main}>
                {/* conteudo - body - section */}
                <View style={styles.mainBody}>
                    <FlatList
                        contentContainerStyle={styles.mainBodyConteudo}
                        data={this.state.ListaDeProjetos}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabNavigatorIconHome: {
        width: 35,
        height: 35,
    },
    // conteúdo da main
    main: {
        flex: 1,
        backgroundColor: "#08244D",
        height: "100%"
    },
    // cabecalho
    mainHeaderRow: {
        flexDirection: "row"
    },
    mainHeader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // corpo do texto
    mainBody: {
        // backgroundColor: "#999999",
        flex: 4
    },
    // conteúdo da lista
    mainBodyConteudo: {
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50
    },
    // dados do evento de cada item da linha
    flatItemLinha: {
        flexDirection: "row",
        borderBottomWidth: 0.9,
        borderBottomColor: "gray"
    },
    flatItemContainer: {
        flex: 7,
        marginTop: 5
    },
    flatItemTitulo: {
        fontSize: 14,
        color: "white"
    },
    flatItemData: {
        fontSize: 10,
        color: "white",
        lineHeight: 24
    },
    flatItemImg: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    flatItemImgIcon: {
        width: 22,
        height: 22,
        tintColor: "#B727FF"
    }
});
export default main;
// const styles = StyleSheet.create({
//     main: {
//         alignItems: "center",
//         backgroundColor: "#08244D",
//         height: "100%"
//     },
//     flatItemLinha: {
//         flexDirection: "row",
//         borderBottomWidth: 0.9,
//         borderBottomColor: "gray"
//     },
//     flatItemContainer: {
//         flex: 7,
//         marginTop: 5
//     },
//     flatItemTitulo: {
//         fontSize: 14,
//         color: "#333",
//         fontFamily: "OpenSans-Light"
//     },
//     flatItemData: {
//         fontSize: 10,
//         color: "#999",
//         lineHeight: 24
//     },
//     flatItemImg: {
//         justifyContent: "center",
//         alignContent: "center",
//         alignItems: "center"
//     },
//     h1: {
//         color: "white",
//         fontSize: 25,
//         marginTop: 10
//     },
//     h2: {
//         color: "white",
//         fontSize: 40,
//         marginTop: 70,
//         marginBottom: 70
//     },
//     tabNavigatorIconHome: {
//         width: 35,
//         height: 35,
//     },
// })
