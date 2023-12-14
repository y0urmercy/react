import styles from './styles.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to='/'>Домашняя страница</Link>
                <Link to='/chat'>Чат</Link>
                <Link to='/test'>Подгрузка данных</Link>
                <Link to='/myprofile'>Мой профиль</Link>
                <Link to='/smarthouse'>Умный дом</Link>
            </nav>
    </div>
    )
};

export default Header;