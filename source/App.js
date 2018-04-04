import {StackNavigator} from 'react-navigation'

import ListScreen from './screens/ListScreen/index'
import EventScreen from './screens/EventScreen/index'

export default StackNavigator({
    List: {
        screen: ListScreen
    },
    Event: {
        screen: EventScreen
    }
});