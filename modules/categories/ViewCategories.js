import React from 'react';
import {View,StyleSheet} from 'react-native';

import CategoryList from './CategoryList';
import { CategoryDS } from '../../models/category-model';

export default class ViewCategories extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title', 'Main Category')
        }
    }

    state = {
        categories: []
    }

    categoryService = new CategoryDS();

    componentDidMount() {
        
        const { navigation } = this.props;
        const parentId = navigation.getParam('parentId',0);
        const title = navigation.getParam('title','Main Category');
        
        this.props.navigation.setParams({title: `${title} ` });
        
        this.categoryService.getCategoryByParentId(parentId, (categories) => {
            this.setState( { categories });
        });

    }

    _onItemSelected = (item) => {

        const { navigation } = this.props;
        
        if(item.isProductDisplay) {
            navigation.navigate('Products', { categoryId: item.id, title: item.name})
        }
        else {

            //send level
            let level = navigation.getParam('level',0);
            level = level + 1;
            
            let viewType = '';
            
            if(level === 1) {
                viewType = 'PanelCategories'
            }
            else {
                viewType = 'SectionCategories'
            }


            navigation.navigate(viewType, { parentId: item.id, title: item.name, level: level })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CategoryList 
                    categories={this.state.categories} 
                    onItemSelected={this._onItemSelected} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    
});