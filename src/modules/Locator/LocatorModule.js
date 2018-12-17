import React, { Component } from 'react'
import {View, Platform, StatusBar} from 'react-native'

import {createMaterialTopTabNavigator ,createAppContainer} from 'react-navigation'
import ViewMainStore from './Store/MainStore';
import ViewGarafahStore from './Store/ViewGarafahStore';


const tabNavigator = createMaterialTopTabNavigator (
  {
    MainShowRoom: {
      screen: ViewMainStore,
      navigationOptions: {
        tabBarLabel: "Main"
      }
    },

    GarafahShowRoom: { 
      screen: ViewGarafahStore,
      navigationOptions: {
        tabBarLabel: "Garafah"
      }
    }
  }
);

const AppContainer = createAppContainer(tabNavigator);

export default class LocatorModule extends Component {
  
  render() {
    
    return (
      <View style={ { flex: 1, paddingTop: Platform.OS === "android" ? 20 : null } }>
        <AppContainer></AppContainer>
      </View>)
  }
}
