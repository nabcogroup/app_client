import React from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import ProductListView from './modules/products/ProductListView';
import ViewCategories from './modules/categories/ViewCategories';
import ViewPanelCategories from './modules/categories/ViewPanelCategories';
import ViewSectionCategories from './modules/categories/ViewSectionCategories';



export default class App extends React.Component {

  render() {
    return <AppContainer/>;
  }
}

const AppNavigator = createStackNavigator(
  {
    Categories: ViewCategories,
    PanelCategories: ViewPanelCategories,
    SectionCategories: ViewSectionCategories,
    Products: ProductListView
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
