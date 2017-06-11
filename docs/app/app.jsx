var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

const store = require('configureStore').configure();
import CalendarApp from 'CalendarApp';
import MonthPage from 'MonthPage';
import WeekPage from 'WeekPage';
const CalendarAPI = require('CalendarAPI');
const actions = require('actions');

store.subscribe(() => {
    console.log('new state', store.getState());
})

CalendarAPI.getEvents().then(function (res) {
    var firstEvent, lastEvent;
    firstEvent = Date.parse(res.data[0].start);
    lastEvent = Date.parse(res.data[0].start)
    for (var i = 0; i < res.data.length; i++) {
        if (Date.parse(res.data[i].start) < firstEvent) {
            firstEvent = Date.parse(res.data[i].start)
        } else if (Date.parse(res.data[i].start) > lastEvent) {
            lastEvent = Date.parse(res.data[i].start)
        }
    }

    store.dispatch(actions.setMonths(res.data, firstEvent, lastEvent))
    store.dispatch(actions.setInitMonth(store.getState().months))
    store.dispatch(actions.setInitDay(store.getState().months, store.getState().currentMonth))
    store.dispatch(actions.setWeeks(res.data, firstEvent, lastEvent))
    store.dispatch(actions.setInitWeek(store.getState().weeks))
    store.dispatch(actions.setInitDayWeek(store.getState().weeks, store.getState().currentWeek))
}, function (err) {
    throw new Error('Unable to fetch data.')
})

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={CalendarApp}>
                <Route path='week' component={WeekPage}/>
                <IndexRoute component={MonthPage}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
