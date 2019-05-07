import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
  } from "react-navigation";
  import App from '../App'
  import Main from './activities/main'
  import CadastroProjeto from './activities/cadastrarProjeto'
  import login from './activities/login';

  const AuthStack = createStackNavigator({login});

  const MainNavigator = createBottomTabNavigator(
    {
        Main,
        CadastroProjeto
    },
    {
      initialRouteName: "Main",
      swipeEnabled: true,
      tabBarOptions: {
        showLabel: true,
        showIcon: true,
        inactiveBackgroundColor: "black",
        activeBackgroundColor: "white",
        activeTintColor: "blue",
        inactiveTintColor: "white",
        style: {
          height: 50
        }
      }
    }
  );

  export default createAppContainer(
      createSwitchNavigator(
          {
              AuthStack,
              MainNavigator
          },
          {
              initialRouteName: 'MainNavigator'
          }
      )
  );