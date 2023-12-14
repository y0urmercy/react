import {useState} from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hook/useLocalStorage";
import styles from './styles.module.css';

const Chat = () => {
    const [chatData, setChatData] = useLocalStorage ("CHAT", []);
    const [inputValue, setInputValue] = useState("");
    const [showDialogReg, setShowDialogReg] = useState(false);

    const [userName] = useLocalStorage("USERNAME");

    const changeChat = () => {
        if(userName) {
            setChatData([...chatData, `${userName ? userName : "Аноним"}: ${inputValue}`]);
            setInputValue("");
        } else {
            setChatData([...chatData, `${userName ? userName : "Аноним"}: ${inputValue}`]);
            setShowDialogReg(true);
            setInputValue("");
        }
    };

    return (
        <div>
            <div className={styles.chat}>
                <div>Чат</div>
                <div className={styles.options}>
                {chatData.map((el, i) => {
                    return (
                        <div key={i}>
                            {el}
                        </div>
                    );
                })}
                </div>
            </div>

            <div classname={styles.wrapper}>
                <label>Напиши комментарий</label>
                <input value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={changeChat}>Отправить</button>
                <button onClick={() => setChatData([])}>Удалить</button>

                {showDialogReg && <div>Вы не авторизовались, перейдите по <Link to="/">ссылке</Link></div>}
            </div>
        </div>
    );
};

export default Chat;