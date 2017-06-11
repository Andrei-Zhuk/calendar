import React from 'react';
import {connect} from 'react-redux';

import WeekDaysList from 'WeekDaysList';
import WeekNavBar from 'WeekNavBar';
import MonthDescription from 'MonthDescription';

class WeekPage extends React.Component {
    render() {
        let {weeks} = this.props;
        let renderFunc = () => {
            if (weeks.length > 0) {
                return (
                    <div>
                        <WeekNavBar/>
                        <WeekDaysList/>
                    </div>
                )
            } else {
                return (
                    <div id="circularG">
                    	<div id="circularG_1" className="circularG"></div>
                    	<div id="circularG_2" className="circularG"></div>
                    	<div id="circularG_3" className="circularG"></div>
                    	<div id="circularG_4" className="circularG"></div>
                    	<div id="circularG_5" className="circularG"></div>
                    	<div id="circularG_6" className="circularG"></div>
                    	<div id="circularG_7" className="circularG"></div>
                    	<div id="circularG_8" className="circularG"></div>
                    </div>
                )

            }
        }
        return (
            <div style={{width: '95%', margin: '0 auto'}}>
                {renderFunc()}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(WeekPage)
