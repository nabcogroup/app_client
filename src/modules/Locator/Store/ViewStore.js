import React, { Component } from 'react'
import {View,Text,ScrollView,SafeAreaView, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class ViewStore extends Component {

    state = {
        branch:{}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            const branch = {
                title: 'Main Showroom',
                address: 'Airport Street, Al Wakrah Road Doha, Qatar',
                telNo: ''
            }
            this.setState( { branch })

        },1000)
    }



    render() {

        const { branch } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1}}>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1}}>
                            <View style={{ flex: 2 }}>
                                <Text>This is map area</Text>
                            </View>

                            <View style={{ flex: 1, backgroundColor: "#fff",  }} >
                                <View style={{ paddingVertical: 15, elevation: 1, shadowOffset: {width: 0, height: 0}, shadowColor: '#ddd' }}>
                                    <Text style={{ 
                                        fontSize: 20, 
                                        fontWeight: '700', 
                                        color: '#3e1b72',
                                        paddingVertical: 10 
                                    }}>{branch.title}</Text>
                                    <Text>{branch.address}</Text>
                                </View>
                                <View>
                                    <Text>Contact Number</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style="">
                                            <Text>Phone</Text>
                                            <Text>+974 4466 6646</Text>
                                        </View>
                                        <View>
                                            <Icon name="phone-square" style={{ fontSize: 24 }} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
            </SafeAreaView>
        )
  }
}


const styles = StyleSheet.create({
    
});