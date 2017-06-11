import React from 'react';
import {connect} from 'react-redux';
const uuid = require('node-uuid');

const actions = require('actions');

class MonthNavBar extends React.Component {
    render() {
        let {months, currentMonth, dispatch} = this.props;

        let buttonRender = () => {
            if (months.length - 1 === currentMonth) {
                return (
                    <div>
                        <button className="MonthNavBar__prev button tiny" onClick={() => {
                                dispatch(actions.prevMonth())
                            }}>prev</button>
                        <button className="MonthNavBar__next button tiny" onClick={() => {
                                dispatch(actions.nextMonth())
                            }} disabled>next</button>
                    </div>
                )
            } else if (currentMonth === 0) {
                return (
                    <div>
                        <button className="MonthNavBar__prev button tiny" onClick={() => {
                                dispatch(actions.prevMonth())
                            }} disabled>prev</button>
                        <button className="MonthNavBar__next button tiny" onClick={() => {
                                dispatch(actions.nextMonth())
                            }}>next</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <button className="MonthNavBar__prev button tiny" onClick={() => {
                                dispatch(actions.prevMonth())
                            }}>prev</button>
                        <button className="MonthNavBar__next button tiny" onClick={() => {
                                dispatch(actions.nextMonth())
                            }}>next</button>
                    </div>
                )
            }
        }

        let weekDays = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN']

        return (
            <div className="MonthNavBar">
                <h2 className="MonthNavBar__title">{months[currentMonth].title}</h2>
                {buttonRender()}
                {weekDays.map((weekDay) => {
                    return <div className="MonthNavBar__weekDay" key={uuid()}>{weekDay}</div>
                })}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(MonthNavBar)
