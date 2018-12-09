import React,{Component} from 'react';
import { View,Image, StyleSheet,Text} from 'react-native'

import ProductList from './ProductList';


const styles = new StyleSheet.create({
    headerImage: {
        flex: 1,
        height: 40,
        width: '100%'
    }
});


class ProductView extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title','Product'),
        }
    }
    
    state = {
        products: [],
        imageSrc: { uri: "http://arnoldm2.sg-host.com/wp-content/uploads/2018/11/BEDROOM-4.jpg"}
    }

    componentDidMount() {
        // const products = require('../../db.json').products;
        
        // this.setState( {products});
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f5f5f5"}}>
                <Text>This is product</Text>
            </View>

        )
    }

}

export default ProductView;