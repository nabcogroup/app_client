import React, { Component } from 'react'
import {View, Image,Text} from 'react-native'

export default class PromotionWidget extends Component {
    
    render() {
        const { item } = this.props;
        console.log(item);
        
        return (
            <View style={{width: 210, height: 210, paddingHorizontal: 5}}>
                <View style={{
                    flex: 2,
                    shadowColor: '#ddd',
                    elevation: 1
                    }}>
                    <Image source={{uri: item.imageUri}} style={{flex: 1, width:null, height:null, resizeMode:'cover'}} />
                </View>
                <Text style={{flex: 1}}>{item.name}</Text>
            </View>
        )
    }
}
