import React,{Component} from 'react';
import { View,Image, StyleSheet} from 'react-native'

import ProductList from './ProductList';


const styles = new StyleSheet.create({
    headerImage: {
        flex: 1,
        height: 40,
        width: '100%'
    }
});


class ProductView extends Component {

    state = {
        products: [],
        imageSrc: { uri: "http://arnoldm2.sg-host.com/wp-content/uploads/2018/11/BEDROOM-4.jpg"}
    }

    componentDidMount() {
        const products = require('../../db.json').products;
        
        this.setState( {products});
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f5f5f5"}}>
                <View style={{flex: 2 }}>
                    <Image source={this.state.imageSrc} style={styles.headerImage} />
                </View>
                <View style={{flex: 3 }}>
                    <ProductList products={this.state.products}></ProductList>

                </View>
            </View>

        )
    }

}

export default ProductView;