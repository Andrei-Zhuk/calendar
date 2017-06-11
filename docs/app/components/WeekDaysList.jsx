import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import DayWeek from 'DayWeek';

let WeekDaysList = React.createClass({
    render: function() {
        let {weeks, currentWeek} = this.props;
        let renderDays = function () {
            return weeks[currentWeek].days.map((day) => {
                return <DayWeek key={day.id} active={true} {...day}/>
            })
        }
        return (
            <div>
                {renderDays()}
            </div>
        )
    }
})

export default connect(
    (state) => {
        return state
    }
)(WeekDaysList)
