import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
//   static navigationOptions = {
//     tabBarIcon: ({ tintColor }) => (
//         <Image
//             source={require("../assets/img/checklist.png")}
//             style={styles.tabNavigatorIconHome}
//         />
//     )
// };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Funcionei!</Text>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});