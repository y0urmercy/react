import ButtonGroup from './button-group';
import styles from './styles.module.css';
const ItemInfo = (props) => {
    return (
        <div key={props.item.id} className={styles.item}>
            <div className={styles.name_item}>{props.item.name}</div>
            <ButtonGroup 
            showEditDialog={props.showEditDialog}
            handlePower={props.handlePower}
            handleDelete={props.handleDelete}
            item={props.item}/>
        </div>
    );
};
export default ItemInfo;