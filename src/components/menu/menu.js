import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            children = {(match) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Mục lục</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <MenuLink 
                            label = 'Trang chủ'
                            to='/'
                            activeOnlyWhenExact= {true}
                        />
                        <MenuLink 
                            label = 'Xe khách'
                            to='/busesPage'
                            activeOnlyWhenExact= {true}
                        />
                        <MenuLink 
                            label = 'Tài xế'
                            to='./driverPage'
                            activeOnlyWhenExact= {true}
                        />
                        {/* <MenuLink 
                            label = 'Tuyến xe'
                            to='./'
                            activeOnlyWhenExact= {true}
                        />
                        <MenuLink 
                            label = 'chuyến xe '
                            to='./'
                            activeOnlyWhenExact= {true}
                        /> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;
