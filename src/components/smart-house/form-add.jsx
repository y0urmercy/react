import styles from './styles.module.css';
const FormAdd = (props) => {
    return (<div>
        <input value={props.addValue} onChange={(e) => props.setAddValue(e.target.value)}/>
        <button onClick={props.handleAdd}>Добавить устройство</button>
    </div>)
}
export default FormAdd