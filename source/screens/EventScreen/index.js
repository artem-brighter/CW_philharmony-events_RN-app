import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native'


export default class EventScreen extends Component {
    static navigationOptions = {
        title: 'Event Details',
    };

    render() {
        const {params} = this.props.navigation.state;

        return <View style={styles.container}>
            <Text>{params.id}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});