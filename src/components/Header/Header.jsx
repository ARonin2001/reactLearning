import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <a href="#" className={styles.ava__link}>
                <img className={styles.header__logo_img} src="https://www.freepngimg.com/thumb/symbol/90716-protective-sparta-personal-symbol-global-offensive-ii.png" />
            </a>

            <div className={styles.login}>
                { props.isAuth ? props.login 
                : <NavLink to={'/login'}>Login</NavLink> }
                
            </div>
        </header>
    );
}

export default Header;