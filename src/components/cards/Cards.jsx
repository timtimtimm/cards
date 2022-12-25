import React, { useEffect, useState } from "react";
import s from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { setCounter, changeMemoryStatus } from './../store/sliceDictionary';

const Cards = () => {

    let wordsArr = useSelector(state => state.dictionary.dictionaryArray);
    let counter = useSelector(state => state.dictionary.counter);
    let dispatch = useDispatch();

    let [word, setWord] = useState(wordsArr[counter].еnglishWord);
    let [activeState, setActiveState] = useState(false);

    useEffect(() => {
        if (wordsArr[counter].memoryStatus === true) {
            let i = Math.floor(Math.random() * 2)
            if (counter % i === 0) {
                setWord( wordsArr[counter].еnglishWord);
            } else {
                dispatch(setCounter());
            }
        }
        setWord( wordsArr[counter].еnglishWord);
    }, [counter]);

    const setMemoryStatus = (status) => {
        dispatch(changeMemoryStatus({ id: wordsArr[counter].id, status }));
        dispatch(setCounter());
    }

    const unfamiliarWord = (status) => {
        setActiveState(true);
        dispatch(changeMemoryStatus({ id: wordsArr[counter].id, status }));
    }

    const changeCard = () => {
        setActiveState(false);
        dispatch(setCounter());
    }

    return (
        <div className={s.cards}>
            <h1> Карточки</h1>
            <button onClick={() => setMemoryStatus(true)} >Знаю</button>
            <button onClick={() => unfamiliarWord(false)}>Не знаю</button>

            <div className={`${s.flipContainer} ${activeState ? s.flip : ''}`} /* ontouchstart="this.classList.toggle('hover');" */>
                <div className={s.flipper}>
                    <div className={s.front}>
                        <p>{word}</p>
                    </div>
                    <div className={s.back}>
                        <p>{wordsArr[counter].translationWord}</p>
                        <button onClick={changeCard}>Следующее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;


