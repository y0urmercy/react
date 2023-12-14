import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Test = () => {
    const [teamData, setTeamData] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const url = "https://free-nba.p.rapidapi.com/teams?page=0";
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '825992b6a6mshf7b2274004262d8p1310ebjsn9554351cada5',
              'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            },
          };

          fetch(url, options)
            .then((res) => res.json())
            .then((res) => setTeamData(res.data));
          setIsLoad(false);
    }, []);

    return <div className={styles.container}> 
        <div>КОМАНДЫ</div>
        {isLoad && <div>Загрузка данных...</div>}
        {teamData.map((el, i) => {
            return (
                <div key={el.id}>
                    {i+1}. {el.abbreviation} {el.city}
                </div>
            )
        })} 
    </div>;
};

export default Test;