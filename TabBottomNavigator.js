import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeModule from './src/modules/Home/HomeModule';
import ProductsModule from './src/modules/Products/ProductsModule';
import PromotionsModule from './src/modules/Promotions/PromotionsModule';
import FormModule from './src/modules/Form/FormModule';
import LocatorModule from './src/modules/Locator/LocatorModule';

export const TabBottomNavigator = createBottomTabNavigator({
	Home: {
		screen: HomeModule,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="home" color={tintColor} size={24}></Icon>)
		}
	},
	Products: {
		screen: ProductsModule,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="cubes" color={tintColor} size={24}></Icon>)
		}
	},
	Promotions: {
		screen: PromotionsModule,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="percent" color={tintColor} size={24}></Icon>)
		}
	},
	Locator: {
		screen: LocatorModule,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="compass" color={tintColor} size={24}></Icon>)
		}
	},
	Form: {
		screen: FormModule,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name="wpforms" color={tintColor} size={24}></Icon>)
		}
	}
}, 
{
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: "#1b4f72",
        },
        labelStyle: {
            color: "#fff"
        },
        activeTintColor: "#aed6f1"
    }
});
