import React, {Component} from 'react';
import {View, ScrollView, Text, ActivityIndicator, StyleSheet} from 'react-native'
import moment from 'moment'

import {getEvent} from '../../services/api'


export default class EventScreen extends Component {
    static navigationOptions = {
        title: 'Event Details',
    };

    state = {
        loading: false,
        event: null
    };

    getEvent = () => {
        this.setState({loading: true});

        const {params} = this.props.navigation.state;
        getEvent(params.id).then(responce => {
            this.setState({loading: false});

            if (!responce.errors) {
                this.setState({event: responce});
            }
        });
    };

    componentDidMount() {
        this.getEvent();
    }

    renderLoader() {
        return <View style={[styles.container, styles.loaderContainer]}>
            <ActivityIndicator />
        </View>
    }

    renderEvent() {
        let date = moment(this.props.start).format('DD MMMM YYYY');
        let start_time = moment(this.props.start).format('HH:mm'),
            finish_time = moment(this.props.finish).format('HH:mm');

        return <ScrollView style={styles.container}>
            <Text style={styles.name}>{this.state.event.name}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.time}>{start_time} – {finish_time}</Text>
            <Text style={styles.description}>{this.state.event.description}</Text>
        </ScrollView>
    }

    render() {
        return this.state.loading ? this.renderLoader() : (
            this.state.event && this.renderEvent()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    loaderContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 20
    },
    date: {
        marginBottom: 2,
        color: 'red',
        fontWeight: 'bold'
    },
    time: {
        marginBottom: 20,
        fontSize: 12,
        color: 'red'
    },
    description: {

    }
});