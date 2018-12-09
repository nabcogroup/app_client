import React,{ Component } from 'react';
import {Text, StyleSheet,View} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#d4d4d4",
        backgroundColor: "#fff"
    },
    cardBody: {
        paddingTop: 15,
        paddingBottom: 15
    },
    title: {
        height: 40,
        fontSize: 20
    }

});


class ProductCard extends Component {

    constructor(props) {
        super(props);

        //console.log(this.props);
    }


    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardBody} >
                    <Text style={styles.title}>{this.props.product.name}</Text>
                    <Text style={styles.sku}>{this.props.product.sku}</Text>
                </View>
            </View>
        )
    }
}




export default ProductCard;