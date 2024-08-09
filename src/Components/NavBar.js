import React from 'react';
import {MenuItems} from './MenuItems';
import './NavBar.css'


class NavBar extends React.Component {

    state = { clicked : false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavBarItems"> 
                <div>
                    <div className="menu-icon" onClick={this.handleClick}>
                        MENU
                    </div>    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a className="nav-items">Skills</a>
                        <a className="nav-items">Projects</a>
                        <a className="nav-items">Contact me</a>
                    </li>
                </ul>
 
            </nav>
        )
    }
}

export default NavBar