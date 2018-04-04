import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native'

import Header from './Header'
import Item from './Item'

export default class ListScreen extends Component {
    static navigationOptions = {
        title: 'Future Events List',
    };

    openEventDetails = (id) => {
        this.props.navigation.navigate('Event', {id})
    };

    render() {
        return <View style={styles.container}>
            <SectionList
                sections={[
                    {
                        title: '4th April 2018',
                        data: [
                            {
                                id: 1,
                                title: 'Concert 1',
                                start: '15:00',
                                finish: '17:00',
                            }
                        ]
                    },
                    {
                        title: '5th April 2018',
                        data: [
                            {
                                id: 2,
                                title: 'Concert 2',
                                start: '15:00',
                                finish: '17:00',
                            },
                            {
                                id: 3,
                                title: 'Concert 3',
                                start: '19:00',
                                finish: '21:00',
                            }
                        ]
                    },
                ]}
                renderItem={({item}) => <Item
                    id={item.id}
                    title={item.title}
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