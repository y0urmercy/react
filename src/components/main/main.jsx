import styles from './styles.module.css';
import {Route, Switch} from 'react-router';
import Chat from '../chat/chat';
import Home from '../home/home';
import Test from '../test-api/test';
import Profile from '../my-profile/my-profile';
import SmartHouse from '../smart-house';

const Main = () => {
    return <div className={styles.container}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/chat' component={Chat}/>
            <Route path='/test' component={Test}/>
            <Route path='/myprofile' component={Profile}/>
            <Route path='/smarthouse' component={SmartHouse}/>
        </Switch>
    </div>
};

export default Main;