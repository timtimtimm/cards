import React from "react";
import s from './DeleteWord.module.css';
import { resetMemoryStatus } from './../../../../store/sliceDictionary';
import { useDispatch } from 'react-redux';

const DeleteWord = () => {

    const dispatch = useDispatch();

    const onResetMemoryStatus = () => {
        dispatch(resetMemoryStatus());
    }

    
    return (
        <div className={s.addWord}>
            <button onClick={onResetMemoryStatus} > Обнулить выученные слова </button>
        </div>
    )
}

export default DeleteWord;