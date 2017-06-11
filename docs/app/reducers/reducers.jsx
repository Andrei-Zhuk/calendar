import moment from 'moment';
const uuid = require('node-uuid');

export var monthsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MONTHS':
            let monthQuantity = moment(action.lastEvent).month() - moment(action.firstEvent).month() + 1 + 12 * (moment(action.lastEvent).year() - moment(action.firstEvent).year())

            let newState = [];
            for (let i = 0; i < monthQuantity; i++) {
                newState[i] = {
                    title: moment(action.firstEvent).month(moment(action.firstEvent).month() + i).format('MMM YYYY'),
                    firstDay: moment(action.firstEvent).month(moment(action.firstEvent).month() + i).date(1).format(),
                    days: []
                };

                let weekDay = -(moment(newState[i].firstDay).day() - 2)

                for (let j = weekDay; j < weekDay + 42; j++) {
                    let obj = {};
                    obj.date = moment(newState[i].firstDay).date(j).format('MMM D YYYY')
                    obj.id = uuid();
                    obj.events = [];

                    for (let k = 0; k < action.months.length; k++) {
                        if (obj.date === moment(action.months[k].start).format('MMM D YYYY')) {
                            let event = {}
                            event.title = action.months[k].title;
                            event.type = action.months[k].type;
                            event.start = moment(action.months[k].start).format('k:mm')
                            event.speakers = action.months[k].speakers.slice();
                            event.resources = action.months[k].resources.slice();
                            event.duration = moment.utc(action.months[k].duration).format('k:mm')
                            event.description = action.months[k].description;
                            obj.events.push(event)
                        }
                    }
                    newState[i].days.push(obj)
                }
            }
            return newState
            break;
        default:
            return state
    }
}

export var currentMonthReducer = function (state = 0, action) {
    switch (action.type) {
        case 'SET_INIT_MONTH':
            let now = moment()
            for(var i = 0; i < action.months.length; i++){
                if (action.months[i].title === now.format('MMM YYYY')) {
                    return i
                }
            }
            return state
            break;
        case 'SET_PREV_MONTH':
            return --state
            break;
        case 'SET_NEXT_MONTH':
            return ++state;
            break;
        default:
            return state
    }
}

export let currentDayReducer = function (state = {}, action) {
    switch (action.type) {
        case 'SET_INIT_DAY':
            let now = moment();
            for (var i = 0; i < action.months[action.currentMonth].days.length; i++) {
                if (now.format('MMM D') === moment(action.months[action.currentMonth].days[i].date, 'MMM D YYYY').format('MMM D')) {
                    return action.months[action.currentMonth].days[i]
                }
            }
            return state
            break;
        case 'SET_CURRENT_DAY':
            for (var i = 0; i < action.months[action.currentMonth].days.length; i++) {
                if (action.months[action.currentMonth].days[i].id == action.id) {
                    return action.months[action.currentMonth].days[i]
                }
            }
            return state
            break;
        default:
            return state
    }
}

export let weeksReducer = function (state = [], action) {
    switch (action.type) {
        case 'SET_WEEKS':
            let newState = []
            let firstDay;
            let monthsQuantity = moment(action.lastEvent).month() - moment(action.firstEvent).month() + 1 + 12 * (moment(action.lastEvent).year() - moment(action.firstEvent).year())

            if (moment(action.firstEvent).date(1).day() === 0) {
                firstDay = -5
            } else {
                firstDay = -(moment(action.firstEvent).date(1).day() - 2)
            }
            let weeksQuantity = -firstDay;

            for (var i = 0; i < monthsQuantity; i++) {
                weeksQuantity += moment(action.firstEvent).month(moment(action.firstEvent).month() + i).daysInMonth()
            }
            weeksQuantity = Math.ceil(weeksQuantity / 7)

            for (var i = 0; i < weeksQuantity; i++) {
                let week = {
                    days: []
                }
                for (var j = 0; j < 7; j++) {
                    let day = {};
                    day.date = moment(action.firstEvent).date(firstDay + j + 7 * i).format('MMM D YYYY')
                    day.id = uuid();
                    day.events = [];

                    if (j === 3) {
                        week.title = moment(day.date, 'MMM D YYYY').format('MMM YYYY')
                    }

                    for (let k = 0; k < action.months.length; k++) {
                        if (day.date === moment(action.months[k].start).format('MMM D YYYY')) {
                            let event = {}
                            event.title = action.months[k].title;
                            event.type = action.months[k].type;
                            event.start = moment(action.months[k].start).format('k:mm')
                            event.speakers = action.months[k].speakers.slice();
                            event.resources = action.months[k].resources.slice();
                            event.duration = moment.utc(action.months[k].duration).format('k:mm')
                            event.description = action.months[k].description;
                            day.events.push(event)
                        }
                    }

                    week.days.push(day)
                }
                newState.push(week)
            }

            return newState;
            break;
        default:
            return state
    }
}

export var currentWeekReducer = function (state = 0, action) {
    switch (action.type) {
        case 'SET_INIT_WEEK':
            let now = moment()
            for(var i = 0; i < action.weeks.length; i++){
                for (var j = 0; j < action.weeks[i].days.length; j++) {
                    if (action.weeks[i].days[j].date === now.format('MMM D YYYY')) {
                        return i
                    }
                }
            }
            return state
            break;
        case 'SET_PREV_WEEK':
            return --state
            break;
        case 'SET_NEXT_WEEK':
            return ++state;
            break;
        default:
            return state
    }
}

export let currentDayWeekReducer = function (state = {}, action) {
    switch (action.type) {
        case 'SET_INIT_DAY_WEEK':
            let now = moment();
            for (var i = 0; i < action.weeks[action.currentWeek].days.length; i++) {
                if (now.format('MMM D') === moment(action.weeks[action.currentWeek].days[i].date, 'MMM D YYYY').format('MMM D')) {
                    return action.weeks[action.currentWeek].days[i]
                }
            }
            return state
            break;
        case 'SET_CURRENT_DAY_WEEK':
            for (var i = 0; i < action.weeks[action.currentWeek].days.length; i++) {
                if (action.weeks[action.currentWeek].days[i].id == action.id) {
                    return action.weeks[action.currentWeek].days[i]
                }
            }
            return state
            break;
        default:
            return state
    }
}
