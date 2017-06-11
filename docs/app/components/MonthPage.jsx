import React from 'react';
import {connect} from 'react-redux';

import DaysList from 'DaysList';
import MonthNavBar from 'MonthNavBar';
import MonthDescription from 'MonthDescription';

class MonthPage extends React.Component {
    render() {
        let {months} = this.props;
        let renderFunc = () => {
            if (months.length > 0) {
                return (
                    <div>
                        <MonthNavBar/>
                        <DaysList/>
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
                <div className="MonthDescription" style={{
                        width: '40%',
                        height: '100px',
                        display: 'inline-block',
                        verticalAlign: 'top'
                    }}>
                    <MonthDescription/>
                </div>
                <div className="MonthCalendar" style={{
                        width: '60%',
                        display: 'inline-block',
                        verticalAlign: 'top'
                    }}>
                    {renderFunc()}
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(MonthPage)
