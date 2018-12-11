import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import ProductList from './ProductList';
import { ProductDS } from '../../models/product-model';

export default class ViewProducts extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title','Product'),
            headerStyle: {
                backgroundColor: '#0A619A',
              },
        }
    }

    state = {
        products: []
    }
    
    productService = new ProductDS();

    componentDidMount() {

        const { navigation } = this.props;
        const categoryId = navigation.getParam('categoryId');
        const title = navigation.getParam('title');
        
        navigation.setParams({title: title});

        this.productService.getProductByCategoryId(categoryId, ( products ) => {
            this.setState( { products });
        })
    }

    render() {
        
        const {products} = this.state;

        return (
            <View style={styles.container}>
                <ProductList products={products}></ProductList>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
});

