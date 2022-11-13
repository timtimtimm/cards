import React from "react";
import s from './Table.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { togleDeleteStatus } from './../../store/sliceDictionary';

const EditTable = () => {

  const dispatch = useDispatch();

  let wordsArr = useSelector(state => state.dictionary.dictionaryArray);

  let onTogleDeleteStatus = (id) => {
    dispatch(togleDeleteStatus(id));
  }

  let table = [], tr;
  let k = Math.ceil(wordsArr.length / 7);
  let n = 0;

  for (let i = 0; i <= k; i++) {
    tr = [];
    for (let j = 0; j <= 7 && n < wordsArr.length; j++) {
      tr.push(<td key={n} id={wordsArr[n].id} onClick={(e) => onTogleDeleteStatus(e.target.id)}
        className={wordsArr[n].deleteStatus ? s.borderCell : ''} >
        <span className={wordsArr[n].memoryStatus ? s.memory : s.еnglish} id={wordsArr[n].id}
        > {wordsArr[n].еnglishWord}</span> <tr />
        <span className={s.translation} id={wordsArr[n].id}
        > {wordsArr[n].translationWord}</span></td>);
      n++;
    }
    table.push(<tr>{tr}</tr>);
  }

  return (
    <div className={s.table}>
      <h1> Удаление слов</h1>
      <table >
        <tbody >
          {table}
        </tbody>
      </ table>
    </div>
  )
}

export default EditTable;

