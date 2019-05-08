import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import api from "../services/api";
class main extends Component {

    // Colocar o icone

    // static navigationOptions = {
    //     tabBarIcon: ({ tintColor }) => (
    //         <Image
    //             source={require("../assets/img/checklist.png")}
    //         />
    //     )
    // };
    constructor(props) {
        super(props);
        this.state = {
            ListaDeProjetos: []
        }
    }
    componentWillMount(){
        this.solicitarProjetos();
    }
    solicitarProjetos = async () => {
        const response = await api.get('/CaminhoGetApi')
        const data = response.data;
        this.setState({ ListaDeProjetos: data });
    }
    renderizarItens = ({ item }) => (
        <View >
            <View >
                <Text >{item.autor}</Text>
                <Text >{item.tema}</Text>
            </View>
            <View>
                <Text >{item.Nome}</Text>
            </View>
        </View>
    );
    render() {
        return (
            <View style="none">
                <Text style="none">Roman</Text>
                <View>
                    <FlatList
                        data={this.setState.ListaDeProjetos}
                        keyExtractor={item => item.id}
                        renderItem={this.renderizarItens} />
                </View>
            </View>
        );
    }
}
export default main;