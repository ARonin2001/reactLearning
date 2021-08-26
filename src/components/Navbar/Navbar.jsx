import navClass from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navClass.navbar}>
            <ul>
                <div className={navClass.navbar__li_top}>
                    <li className={navClass.navbar__li}><a href="#" className={navClass.navbar__link}>Profile</a></li>
                    <li className={navClass.navbar__li}><a href="#" className={navClass.navbar__link}>Message</a></li>
                    <li className={navClass.navbar__li}><a href="#" className={navClass.navbar__link}>News</a></li>
                    <li className={navClass.navbar__li}><a href="#" className={navClass.navbar__link}>Music</a></li>
                </div>
                
                <div className={navClass.navbar__li_down}>
                    <li className={navClass.navbar__li}><a href="#" className={navClass.navbar__link}>Settings</a></li>
                </div>
            </ul>
      </nav>
    );
}

export default Navbar;