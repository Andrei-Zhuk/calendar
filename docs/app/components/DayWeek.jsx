import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
const uuid = require('node-uuid');

const actions = require('actions');

class DayWeek extends React.Component {
    handleClick() {
        let {active, dispatch, id, currentWeek, weeks} = this.props;
        if (active) {
            dispatch(actions.setCurrentDayWeek(id, currentWeek, weeks))
        }
    }

    render() {
        let {date, active, title, events, id, currentDayWeek, dispatch} = this.props;
        let eventsRender = () => {
            if (events.length > 0) {
                return events.map((event, i) => {
                    switch (event.type) {
                        case 'event':
                            return <div className="day__event day__event-event" style={{
                                    right: `${i * 20}px`
                                }} key={uuid()}></div>
                            break;
                        case 'deadline':
                            return <div className="day__event day__event-deadline" style={{
                                    right: `${i * 20}px`
                                }} key={uuid()}></div>
                            break;
                        case 'webinar':
                            return <div className="day__event day__event-webinar" style={{
                                    right: `${i * 20}px`
                                }} key={uuid()}></div>
                            break;
                        case 'lecture':
                            return <div className="day__event day__event-lecture" style={{
                                    right: `${i * 20}px`
                                }} key={uuid()}></div>
                            break;
                        case 'workshop':
                            return <div className="day__event day__event-workshop" style={{
                                    right: `${i * 20}px`
                                }} key={uuid()}></div>
                            break;
                        default:

                    }
                })
            }
        }
        let classFunc = () => {
            if (id === currentDayWeek.id) {
                return 'day day-current'
            } else {
                return 'day'
            }
        }
        return (
            <div className={classFunc()} onClick={this.handleClick.bind(this)}>
                <p className="day__number">{moment(date, 'MMM D YYYY').format('D')}</p>
                {eventsRender()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(DayWeek)
