import React, {Component} from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native'

export default class Item extends Component {
    openEventDetails = () => {
        this.props.openEventDetails(this.props.id);
    };

    render() {
        return <TouchableWithoutFeedback onPress={this.openEventDetails}>
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.time}>{this.props.start} – {this.props.finish}</Text>
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,
    },
    title: {},
    time: {
        fontSize: 12,
        color: 'red'
    }
});