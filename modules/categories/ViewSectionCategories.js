import React from 'react';
import {Button,View} from 'react-native';
import { CategoryDS } from '../../models/category-model';
import CategoryList from './CategoryList';

export default class ViewSectionCategories extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title', '')
        }
    }

    state = {
        categories: []
    }


    categoryService = new CategoryDS()

    componentDidMount() {
        
        const { navigation } = this.props;
        const parentId = navigation.getParam('parentId',0);
        const title = navigation.getParam('title','');

        console.log(parentId);
        
        this.categoryService.getCategoryByParentId(parentId, (categories) => {
            this.setState({ categories });
            navigation.setParams({title: `${title}` });
        });
    }

    _onItemSelected = (item) => {

        const { navigation } = this.props;
        navigation.navigate('Products', { categoryId: item.id})
    }
    

    render() {
        return ( 
            <View>
                <CategoryList 
                     categories={this.state.categories} 
                     onItemSelected={this._onItemSelected}
                ></CategoryList>
            </View>

        )
    }
}
