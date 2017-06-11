import React from 'react';
import {connect} from 'react-redux';
const uuid = require('node-uuid');

const actions = require('actions');

class WeekNavBar extends React.Component {
    render() {
        let {weeks, currentWeek, dispatch} = this.props;

        let buttonRender = () => {
            if (weeks.length - 1 === currentWeek) {
                return (
                    <div>
                        <button className="MonthNavBar__prev button tiny" onClick={() => {
                                dispatch(actions.prevWeek())
                            }}>prev</button>
                        <button className="MonthNavBar__next button tiny" onClick={() => {
                                dispatch(actions.nextWeek())
                            }} disabled>next</button>
                    </div>
                )
            } else if (currentWeek === 0) {
                return (
                    <div>
                        <button className="MonthNavBar__prev button tiny" onClick={() => {
                                dispatch(actions.prevWeek())
                            }} disabled>prev</button>
                        <button className="MonthNavBar__next button tiny" onClick={() => {
                                dispatch(actions.nextWeek())
                            }}>next</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <button className="MonthNavBar__prev button tiny" onClick={() => {
                                dispatch(actions.prevWeek())
                            }}>prev</button>
                        <button className="MonthNavBar__next button tiny" onClick={() => {
                                dispatch(actions.nextWeek())
                            }}>next</button>
                    </div>
                )
            }
        }

        let weekDays = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN']

        return (
            <div className="MonthNavBar">
                <h2 className="MonthNavBar__title">{weeks[currentWeek].title}</h2>
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
)(WeekNavBar)
