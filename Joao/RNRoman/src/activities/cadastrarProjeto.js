import React, { Component } from 'react'
import { Text, View, Picker, PickerItem } from 'react-native'

class cadastrarProjeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeProjeto: '',
            tema: null,
            listaTemas: [{
                id: 1,
                nome: "HQ"
            },
            {
                id: 2,
                nome: "Engenharia"
            }]
        }

    }


    // solicitarTemas = async () => {
    //     const response = await api.get('/CaminhoGetApi')
    //     const data = response.data;
    //     this.setState({ listaTemas: data });
    // }
    atualizaEstadoTema(event) {
        this.setState({ tema: event.target.value })
    }
    renderizaTemas = ({ item }) => (
        <Picker.Item label={item.nome} value={item.id} />
    );
    render() {
        return (
            <View>
                <Text> Picker Test </Text>
                <View>
                    <Picker
                        value={this.state.tema}
                        selectedValue={this.state.tema}
                        onValueChange={this.atualizaEstadoTema.bind(this)}>
                        {this.state.listaTemas.map((Element) => (
                            <Picker.Item label={Element.nome} value={Element.id} />
                        ))}
                    </Picker>
                </View>
            </View>
        )
    }
}
export default cadastrarProjeto;