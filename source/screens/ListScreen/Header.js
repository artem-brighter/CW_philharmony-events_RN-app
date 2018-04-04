import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class Header extends Component {
    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>{this.props.title}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f4f4f4',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,
    },
    text: {
        fontWeight: 'bold'
    }
});