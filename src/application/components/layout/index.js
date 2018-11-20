import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './components/login';
import Logo from '../../../common/assets/logo.png';
import {routes} from "../../config/routes-config";

const Layout = ({ children }) => (
    <Fragment>
        <div className="header">
          <NavLink exact to="/">
            <img src={Logo} alt="Flashes" />
          </NavLink>
          <ul className="menu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to={routes.profile.path}>Profile</NavLink>
            </li>
          </ul>
          <Login />
        </div>
        {children}
    </Fragment>
);

export default Layout;
