import React from "react";
import s from './Table.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightedCell } from './../../store/sliceDictionary';

const Table = () => {

  const dispatch = useDispatch();
  let wordsArr = useSelector(state => state.dictionary.dictionaryArray);
  let highlightedCell = useSelector(state => state.dictionary.highlightedCell);
  let onSetHighlightedCell = (id) => {
    dispatch(setHighlightedCell(id));
  }
  let table = [], tr;
  let k = Math.ceil(wordsArr.length / 7);
  let n = 0;

  for (let i = 0; i <= k; i++) {
    tr = [];
    for (let j = 0; j <= 7 && n < wordsArr.length; j++) {
      tr.push(<td key={n} id={wordsArr[n].id} onClick={(e) => onSetHighlightedCell(e.target.id)}
        className={wordsArr[n].id === highlightedCell ? s.borderCell : ''}>
        <span className={s.еnglish} id={wordsArr[n].id}
        > {wordsArr[n].еnglishWord}</span> <tr />
        <span className={s.translation} id={wordsArr[n].id}
        > {wordsArr[n].translationWord}</span></td>);
      n++;
    }
    table.push(<tr>{tr}</tr>);
  }

  return (
    <div className={s.table}>
      <h1> Таблица слов</h1>
      <table >
        <tbody >
          {table}
        </tbody>
      </ table>
    </div>
  )
}

export default Table;

