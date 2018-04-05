import React, {Component} from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native'
import moment from 'moment'

export default class Item extends Component {
    openEventDetails = () => {
        this.props.openEventDetails(this.props.id);
    };

    render() {
        let start_time = moment(this.props.start).format('HH:mm'),
            finish_time = moment(this.props.finish).format('HH:mm');

        return <TouchableWithoutFeedback onPress={this.openEventDetails}>
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Text style={styles.time}>{start_time} – {finish_time}</Text>
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
    name: {},
    time: {
        fontSize: 12,
        color: 'red'
    }
});