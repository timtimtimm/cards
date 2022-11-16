import React from "react";
import s from './Table.module.css';
import { useSelector } from 'react-redux';

const TableOfUnlearnedWords = () => {

  let wordsArr = useSelector(state => state.dictionary.dictionaryArray);

  let filterArr = wordsArr.filter(elem => elem.memoryStatus === false);

  let table = [], tr;
  let k = Math.ceil(filterArr.length / 7);
  let n = 0;

  for (let i = 0; i <= k; i++) {
    tr = [];
    for (let j = 0; j <= 7 && n < filterArr.length; j++) {
      tr.push(<td key={n} id={filterArr[n].id} >
        <span className={s.еnglish} id={filterArr[n].id}
        > {filterArr[n].еnglishWord}</span> <tr />
        <span className={s.translation} id={filterArr[n].id}
        > {filterArr[n].translationWord}</span></td>);
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

export default TableOfUnlearnedWords;
