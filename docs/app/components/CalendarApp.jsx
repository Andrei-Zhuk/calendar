import React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
const moment = require('moment');

const actions = require('actions');
import Navigation from 'Navigation';
const CalendarAPI = require('CalendarAPI');

class CalendarApp extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                {this.props.children}
            </div>
        )
    }

};

export default connect(
    (state) => {
        return state
    }
)(CalendarApp);
