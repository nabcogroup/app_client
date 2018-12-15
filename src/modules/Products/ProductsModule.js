import React, { Component } from 'react'
import {createStackNavigator, createAppContainer } from 'react-navigation';


import ViewCategories from './Categories/ViewCategories';



const AppNavigator = createStackNavigator({
    Categories: {
        screen: ViewCategories,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: navigation.getParam('title', 'Main Category')
            }
        }
    },
    PanelCategories: {
        screen: ViewCategories
    },
    SectionCategories: {
        screen: ViewCategories
    }
});


const AppContainer = createAppContainer(AppNavigator);

export default class ProductsModule extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}
