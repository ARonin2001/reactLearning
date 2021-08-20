const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <div className="navbar__li_top">
                    <li className="navbar__li"><a href="#" className="navbar__link">Profile</a></li>
                    <li className="navbar__li"><a href="#" className="navbar__link">Message</a></li>
                    <li className="navbar__li"><a href="#" className="navbar__link">News</a></li>
                    <li className="navbar__li"><a href="#" className="navbar__link">Music</a></li>
                </div>
                
                <div className="navbar__li_down">
                    <li className="navbar__li"><a href="#" className="navbar__link">Settings</a></li>
                </div>
            </ul>
      </nav>
    );
}

export default Navbar;