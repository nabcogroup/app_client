import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';


import ViewCategories from './modules/categories/ViewCategories';
import ViewProducts from './modules/products/ViewProducts';



export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

const AppNavigator = createStackNavigator(
  {
    Categories: ViewCategories,
    PanelCategories: ViewCategories,
    SectionCategories: ViewCategories,
    Products: ViewProducts
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);



const AppContainer = createAppContainer(AppNavigator);
