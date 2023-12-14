import styles from './styles.module.css';
const FormEdit = (props) => {
    return (
        <div className={styles.edit}> 
                                <input value={props.editValue} onChange={(e) => props.setEditValue(e.target.value)}/>
                                <button onClick={() => props.handleEdit(props.id)}>Сохранить</button>
                            </div>
    )
};
export default FormEdit;