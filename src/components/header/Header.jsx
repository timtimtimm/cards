import React from "react";
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { onDictionarySwitch } from './../store/sliceDictionary';

const Header = () => {

    const togle = useSelector(state => state.dictionary.dictionarySwitch);
    const dispatch = useDispatch();

    return (
        <div className={s.header}>
            <h1> Учим иностранные слова</h1>
            {togle ? <button onClick={() => dispatch(onDictionarySwitch())}> Учить слова</button>
                : <button onClick={() => dispatch(onDictionarySwitch())}> Редактировать словарь</button>}


        </div>
    )
}

export default Header;