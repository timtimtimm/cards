import React, { useState, useEffect } from "react";
import s from './EditWord.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { editWords, setHighlightedCell } from './../../../../store/sliceDictionary';


const EditWord = () => {

    const dispatch = useDispatch();

    const editObj = useSelector(state => state.dictionary.editWord[0]);
    const id = useSelector(state => state.dictionary.highlightedCell);

    let [editWord, setEditWord] = useState('');
    let [editTranslation, setEditTranslation] = useState('');

    useEffect(() => {
        setEditWord(editObj && editObj.еnglishWord);
        setEditTranslation(editObj && editObj.translationWord);
    }, [editObj]);

    const setEdit = () => {
        dispatch(editWords({ id, english: editWord, translation: editTranslation }));
        setEditWord('');
        setEditTranslation('');
    }

    const unEdit = () => {
        setEditWord('');
        setEditTranslation('');
        dispatch(setHighlightedCell(''));
    }

    return (
        <div className={s.addWord}>
            <h2>Редактировать слово</h2>
            <label> Слово:
                <input value={editWord} onChange={(e) => setEditWord(e.target.value)} />
            </label> <tr />
            <label> Перевод:
                <input value={editTranslation} onChange={(e) => setEditTranslation(e.target.value)} />
            </label> <tr />
            <button onClick={setEdit}>Изменить</button>
            <button onClick={unEdit} >Отмена</button>
        </div>
    )
}

export default EditWord;