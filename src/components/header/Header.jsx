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
            <div className={s.buttons}>
                <button onClick={() => setTogleStatusTable('add')} >Все слова</button>
                <button onClick={() => setTogleStatusTable('remember')}>Выученные слова</button>
                <button onClick={() => setTogleStatusTable('not remember')}>Невыученные слова</button>
            </div>
            <h1> Учим иностранные слова</h1>
            {togle ? <button className={s.togle} onClick={() => dispatch(onDictionarySwitch())}> Учить слова</button>
                : <button className={s.togle} onClick={() => dispatch(onDictionarySwitch())}> Редактировать словарь</button>}
        </div>
    )
}

export default Header;