import { useState } from 'react';
import { useLocalStorage } from '../../hook/useLocalStorage';
import styles from './styles.module.css';

const Home = () => {
    const [userName, setUserName] = useLocalStorage("USERNAME", "");
    const [inputName, setInputName] = useState("");
    const [email, setEmail] = useLocalStorage("EMAIL", "");
    const [inputEmail, setInputEmail] = useState("");
    const [password, setPassword] = useLocalStorage("PASSWORD", "")
    const [inputPassword, setInputPassword] = useState("");
    const [gender, setGender] = useLocalStorage("GENDER", "");
    const [inputGender, setInputGender] = useState("");

    return (
        <div>
            {userName && (
                <div>
                    <div>Приветствую вас, уважаемый {userName}</div>
                    <button onClick={() => {setUserName(""); setEmail(""); setPassword(""); setGender(""); setInputName(""); setInputEmail(""); setInputPassword(""); setInputGender("")}}>Выйти</button>
                </div>
            )}

            {!userName && (
                <div>
                    <form action="http://foo.com">
                        <div className='container'>
                            <h1>Регистрация</h1>
                            <div>
                                <label htmlFor=""><p>Имя</p></label>
                                <div>
                                    <input type="text" placeholder="Введите имя" value={inputName} 
                                    onChange={(e) => setInputName(e.target.value)} required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""><p>Пол</p></label>
                                    <div>
                                        <input type="radio" name='sex' value="мужской" onChange={(e) => setInputGender(e.target.value)}/>
                                        <label htmlFor="">мужской</label>
                                        <input type="radio" name='sex' value="женский" onChange={(e) => setInputGender(e.target.value)}/>
                                        <label htmlFor="">женский</label>
                                    </div>
                            </div>
                            <div>
                                <label htmlFor=""><p>Email</p></label>
                                <div>
                                    <input type="text" placeholder="Введите email" value={inputEmail} 
                                    onChange={(e) => setInputEmail(e.target.value)} required/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""><p>Пароль</p></label>
                                <div>
                                    <input type="password" placeholder="Введите пароль" value={inputPassword} 
                                    onChange={(e) => setInputPassword(e.target.value)} required/>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className='btn' onClick={(e) => 
                                    {setUserName(inputName); 
                                    setEmail(inputEmail);
                                    setPassword(inputPassword);
                                    setGender(inputGender);
                                    }}>Регистрация</button>
                            </div>
                        </div>
                    </form>
                </div>
                )}
            </div>
    )
};

export default Home;