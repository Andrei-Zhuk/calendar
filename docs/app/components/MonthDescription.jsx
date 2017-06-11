import React from 'react';
import {connect} from 'react-redux';
const moment = require('moment');
const uuid = require('node-uuid');

import Event from 'Event';

class MonthDescription extends React.Component {
    render() {
        let {currentDay, currentMonth, months} = this.props;
        let date, weekDay, events;
        if (months.length > 0 && currentMonth && currentDay.id) {
            date = moment(currentDay.date, 'MMM D YYYY').format('D');
            weekDay = moment(currentDay.date, 'MMM D YYYY').format('dddd').toUpperCase();
            events = currentDay.events.slice(0);
        }

        let eventsRender = () => {
            if (months.length > 0 && currentMonth && currentDay.id) {
                return events.map((event) => {
                            return <Event key={uuid()} {...event}/>
                    })
            }
        }
        return (
            <div>
                <div>
                    <h2>{date}</h2>
                    <h3>{weekDay}</h3>
                </div>
                <p>Current events:</p>
                {eventsRender()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(MonthDescription)
