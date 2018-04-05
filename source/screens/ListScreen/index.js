import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native'

import Header from './Header'
import Item from './Item'

import {getEvents} from '../../services/api'
import {prepareEvents} from '../../services/events'

export default class ListScreen extends Component {
    static navigationOptions = {
        title: 'Future Events List',
    };

    state = {
        loading: false,
        events: []
    };

    openEventDetails = id => {
        this.props.navigation.navigate('Event', {id})
    };

    getEvents = () => {
        this.setState({loading: true});
        getEvents().then(responce => {
            this.setState({loading: false});

            if (!responce.errors) {
                this.setState({events: prepareEvents(responce)});
            }
        });
    };

    componentDidMount() {
        this.getEvents();
    }

    render() {
        return <View style={styles.container}>
            <SectionList
                sections={this.state.events}
                renderItem={({item}) => <Item
                    id={item.id}
                    name={item.name}
                    start={item.start}
                    finish={item.finish}
                    openEventDetails={this.openEventDetails}/>}
                renderSectionHeader={({section}) => <Header title={section.title}/>}
                keyExtractor={(item, index) => index}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});