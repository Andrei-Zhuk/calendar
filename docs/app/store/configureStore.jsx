const redux = require('redux');
import {monthsReducer, currentMonthReducer, currentDayReducer, weeksReducer, currentWeekReducer, currentDayWeekReducer} from 'reducers';

export var configure = () => {
    var reducer = redux.combineReducers({
        months: monthsReducer,
        currentMonth: currentMonthReducer,
        currentDay: currentDayReducer,
        weeks: weeksReducer,
        currentWeek: currentWeekReducer,
        currentDayWeek: currentDayWeekReducer
    })

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}
