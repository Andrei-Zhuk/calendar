import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Day from 'Day';

let DaysList = React.createClass({
    render: function() {
        let {months, currentMonth} = this.props;
        let renderDays = function () {
            return months[currentMonth].days.map((day) => {
                if (months[currentMonth].title === moment(day.date, 'MMM D YYYY').format('MMM YYYY')) {
                    return <Day key={day.id} active={true} {...day}/>
                } else {
                    return <Day key={day.id} active={false} {...day}/>
                }
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
)(DaysList)
