import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hook/useLocalStorage';
import styles from './styles.module.css';
const Profile = () => {
    const [userName] = useLocalStorage("USERNAME");
    const [gender] = useLocalStorage("GENDER");
    const [email] = useLocalStorage("EMAIL");
    return (
        <div>
            {userName ? <div>
                <div>Имя : {userName}</div>
                <div>Пол : {gender}</div>
                <div>Email : {email} </div>
            </div> : <div>Вы не авторизовались, перейдите по <Link to="/">ссылке</Link></div>}
        </div>
    )
};
export default Profile;