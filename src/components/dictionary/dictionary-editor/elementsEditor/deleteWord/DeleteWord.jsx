import React from "react";
import s from './DeleteWord.module.css';
import { togleStatusTable, deleteWord } from './../../../../store/sliceDictionary';
import { useDispatch } from 'react-redux';

const DeleteWord = () => {

    const dispatch = useDispatch();

    const changeStatusTable = (data) => {
        dispatch(togleStatusTable(data));
    }

    const onDeleteWord = () => {
        dispatch(deleteWord());
    }

    return (
        <div className={s.addWord}>
            <h2>Удаление слов</h2>
            <button onClick={() => changeStatusTable(false)} > Выбрать слова </button><tr />
            <button onClick={onDeleteWord} >Удалить</button>
            <button onClick={() => changeStatusTable(true)}>Отмена</button>
        </div>
    )
}

export default DeleteWord;