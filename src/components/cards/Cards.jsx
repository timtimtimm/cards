import React, { useEffect, useState } from "react";
import s from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { setCounter, changeMemoryStatus } from './../store/sliceDictionary';

const Cards = () => {

    let wordsArr = useSelector(state => state.dictionary.dictionaryArray);
    let counter = useSelector(state => state.dictionary.counter);
    let dispatch = useDispatch();

    let [word, setWord] = useState(wordsArr[counter].еnglishWord);

    useEffect(() => {
        if (wordsArr[counter].memoryStatus === true) {
            let i = Math.floor(Math.random() * 2)
            if (counter % i === 0) {
                setWord(wordsArr[counter].еnglishWord);
            } else {
                dispatch(setCounter());
            }
        }
        setWord(wordsArr[counter].еnglishWord);
    }, [counter]);

    const setMemoryStatus = (status) => {
        dispatch(changeMemoryStatus({ id: wordsArr[counter].id, status }));
        dispatch(setCounter());
    }

    const unfamiliarWord = (status) => {
        alert(wordsArr[counter].translationWord);
        dispatch(changeMemoryStatus({ id: wordsArr[counter].id, status }));
        dispatch(setCounter());
    }

    return (
        <div className={s.cards}>
            <h1> Карточки</h1>
            <div className={s.card}>
                <p>{word}</p>
                <button onClick={() => dispatch(setCounter())}>Следующее</button>
                <button onClick={() => setMemoryStatus(true)} >Знаю</button>
                <button onClick={() => unfamiliarWord(false)}>Не знаю</button>
            </div>
        </div>
    )
}

export default Cards;