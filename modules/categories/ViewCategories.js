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
        
        this.categoryService.getParentCategories((categories) => {
            console.log(categories);
            this.setState( { categories });
            this.props.navigation.setParams({title: `Main Category` });
        });
    }



    _onItemSelected = (item) => {
        if(item.count > 0) {
            this.props.navigation.navigate('PanelCategories', { parentId: item.id, title: item.title })
        }
        else {
            this.props.navigation.navigate('ViewProducts')
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