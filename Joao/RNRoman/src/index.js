import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
  } from "react-navigation";
  import App from '../App'
  import Main from './activities/main'
  
  import login from './activities/login';

  const AuthStack = createStackNavigator({login});

  const MainNavigator = createBottomTabNavigator(
    {
        Main,
        App
    },
    {
      initialRouteName: "Main",
      swipeEnabled: true,
      tabBarOptions: {
        showLabel: true,
        showIcon: true,
        inactiveBackgroundColor: "#dd99ff",
        activeBackgroundColor: "#B727FF",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#FFFFFF",
        style: {
          height: 50
        }
      }
    }
  );

//   export default createAppContainer(AuthStack);
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