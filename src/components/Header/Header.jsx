import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Redirect } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.ava__link}>
                <img className={styles.header__logo_img} src="https://www.freepngimg.com/thumb/symbol/90716-protective-sparta-personal-symbol-global-offensive-ii.png" />
            </a>

            <div className={styles.login}>
                { props.isAuth ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>   
                : <NavLink to={'/login'}>Login</NavLink> }
                
            </div>
        </header>
    );
}

export default Header;