import { useState } from 'react';
import { useLocalStorage } from '../../hook/useLocalStorage';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import ItemInfo from './item-info';
import styles from './styles.module.css';

const SmartHouse = () => {
    const [device, setDevice] = useLocalStorage('SMART', [
        {id:1, name: "Лампочка", isPower: false, isEdit: false},
        {id:2, name: "Телевизор", isPower: false, isEdit: false},
        {id:3, name: "Колонка", isPower: false, isEdit: false}
    ]);

    const [addValue, setAddValue] = useState('');
    const [editValue, setEditValue] = useState('');

    const handleAdd = () => {
        setDevice([...device, {
            id: device.length==0 ? 1: device[device.length-1].id +1, 
            name: addValue, 
            isPower: false, 
            isEdit: false}]);
        setAddValue('');
    }

    const handleDelete = (idDevice) => {
        setDevice (() => device.filter((el) => el.id !== idDevice))
    }

    const handlePower = (idDevice) => {
        setDevice(() => device.map((el) => {
            if (el.id==idDevice) {
                return {...el, isPower: !el.isPower};
            } else {
                return el;
            }
        }))
    }


    const showEditDialog = (isDevice) => {
        setDevice(() => device.map(el => {
            if (el.id == isDevice){
                setEditValue(el.name);
                return {...el, isEdit: true};

            }
            return el;
        }))

    }

    const handleEdit = (isDevice) => {
        setDevice(() => device.map(el => {
            if(el.id === isDevice){
                return {...el, name: editValue, isEdit: false}
            }
            return el;
        }))
    }

    return <div classname={styles.main_container}>
        <div>УСТРОЙСТВА УМНОГО ДОМА</div>

        <FormAdd 
        addValue={addValue}
        setAddValue={setAddValue}
        handleAdd={handleAdd}/>

        <div className={styles.container_items}>
            {device.map ((item) => {
                return (
                    <div> 
                        {item.isEdit ? ( 
                            <FormEdit
                            editValue ={editValue}
                            setEditValue={setEditValue}
                            handleEdit={handleEdit}
                            id={item.id}/>
                        ) : (
                            <ItemInfo 
                            item={item}
                            showEditDialog={showEditDialog}
                            handlePower ={handlePower}
                            handleDelete ={handleDelete}
                            />
                        )}
                    </div>
                )
                })}
        </div>
    </div>
}
export default SmartHouse;