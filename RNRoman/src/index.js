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
  import gerenciarTemas from './activities/gerenciarTemas';
  import gerenciarEquipes from './activities/gerenciarEquipes';

  const AuthStack = createStackNavigator({login});

  const MainNavigator = createBottomTabNavigator(
    {
        Main,
        CadastroProjeto,
        gerenciarTemas,
        gerenciarEquipes
    },
    {
      initialRouteName: "Main",
      swipeEnabled: true,
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        inactiveBackgroundColor: "#22416F",
        activeBackgroundColor: "#22416F",
        activeTintColor: "#22416F",
        inactiveTintColor: "#22416F",
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