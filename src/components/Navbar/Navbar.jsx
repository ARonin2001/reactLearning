import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import navClass from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={navClass.navbar}>
            <ul>
                <div className={navClass.navbar__li_top}>
                    <li className={navClass.navbar__li}>
                        <NavLink to="/profile" activeClassName={navClass.link_active} className={navClass.navbar__link}>Profile</NavLink>
                    </li>
                    <li className={navClass.navbar__li}>
                        <NavLink to="/dialogs" activeClassName={navClass.link_active} className={navClass.navbar__link}>Message</NavLink>
                    </li>
                    <li className={navClass.navbar__li}>
                        <NavLink to="/news" activeClassName={navClass.link_active} className={navClass.navbar__link}>News</NavLink>
                    </li>
                    <li className={navClass.navbar__li}>
                        <NavLink to="/music" activeClassName={navClass.link_active} className={navClass.navbar__link}>Music</NavLink>
                    </li>
                    <li className={navClass.navbar__li}>
                        <NavLink to="/users" activeClassName={navClass.link_active} className={navClass.navbar__link}>Find users</NavLink>
                    </li>
                </div>
                
                <div className={navClass.navbar__li_down}>
                    <li className={navClass.navbar__li}><NavLink to="/settings" className={navClass.navbar__link}>Settings</NavLink></li>
                </div>
            </ul>

            <Friends state={props.state}/>
      </nav>
    );
}

export default Navbar;