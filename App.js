import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductView from './modules/products/ProductView';
import CategoryView from './modules/categories/CategoryView';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Categories: {screen: CategoryView},
  Products: {screen: ProductView}
})

export default createAppContainer(AppNavigator);
