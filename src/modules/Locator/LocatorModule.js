import React, { Component } from 'react'
import {View, Platform, StatusBar} from 'react-native'

import ViewStore from './Store/ViewStore'
import {createMaterialTopTabNavigator ,createAppContainer} from 'react-navigation'


const tabNavigator = createMaterialTopTabNavigator (
  {
    MainShowRoom: {
      screen: ViewStore,
      navigationOptions: {
        tabBarLabel: "Main Showroom"
      }
    },

    BranchTwo: { 
      screen: ViewStore,
      navigationOptions: {
        tabBarLabel: "Garafah Showroom"
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
      </View>
    )
  }
}
