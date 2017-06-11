const React = require('react');
const {Link, IndexLink} = require('react-router');

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"><img src='logo_rs_text.svg'/></li>
                        <li>
                            <IndexLink to='/' activeClassName='active-link'>Month</IndexLink>
                        </li>
                        <li>
                            <Link to='/week' activeClassName='active-link'>Week</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
