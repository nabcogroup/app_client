import React, { Component } from 'react'
import {Text,View,StyleSheet, Image} from 'react-native';

export default class FeaturedCardWidget extends Component {
    

    render() {
        
        const { item } = this.props;

        return (
            <View style={styles.cardPanel}>
                <View>
                   
                </View>        
                <View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    cardPanel: {
        aspectRatio: 2/1,
        width: "100%",
        marginVertical: 10, 
        backgroundColor: "#fff", 
        elevation: 1,
        shadowColor: '#ddd',
        
    }

});
