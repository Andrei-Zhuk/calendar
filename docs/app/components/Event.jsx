import React from 'react';
import {connect} from 'react-redux';

class Event extends React.Component {
    render() {
        let {title, type, start, duration} = this.props;
        return (
            <div className="Event">
                <h4>{title}</h4>
                <p>{type}</p>
                <p>start: {start}</p>
                <p>duration: {duration}</p>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(Event)
