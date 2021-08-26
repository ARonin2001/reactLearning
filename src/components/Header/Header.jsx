import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <a href="#">
                <img className={header.header__logo_img} src="https://www.freepngimg.com/thumb/symbol/90716-protective-sparta-personal-symbol-global-offensive-ii.png" />
            </a>
        </header>
    );
}

export default Header;