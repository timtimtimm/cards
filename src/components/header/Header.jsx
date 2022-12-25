import React from "react";
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { onDictionarySwitch, togleStatusTable } from './../store/sliceDictionary';

const Header = () => {

    const togle = useSelector(state => state.dictionary.dictionarySwitch);
    const dispatch = useDispatch();

    const setTogleStatusTable = (status) => {
        dispatch(togleStatusTable(status));
    }

    return (
        <div className={s.header}>
             <h1> Учим слова</h1>
            <div className={s.buttons}>
                <span onClick={() => setTogleStatusTable('add')} >Все слова</span>
                <span onClick={() => setTogleStatusTable('remember')}>Выученные слова</span>
                <span onClick={() => setTogleStatusTable('not remember')}>Невыученные слова</span>
            </div>
           
            {togle ? <button className={s.togle} onClick={() => dispatch(onDictionarySwitch())}> Учить слова</button>
                : <button className={s.togle} onClick={() => dispatch(onDictionarySwitch())}> Редактировать словарь</button>}
        </div>
    )
}

export default Header;