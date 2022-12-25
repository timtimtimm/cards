import React from "react";
import s from './Table.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setHighlightedCell, deleteWord } from './../../store/sliceDictionary';

const TableOfUnlearnedWords = () => {

  let wordsArr = useSelector(state => state.dictionary.dictionaryArray);
  let filterArr = wordsArr.filter(elem => elem.memoryStatus === false);

  const dispatch = useDispatch();
  let highlightedCell = useSelector(state => state.dictionary.highlightedCell);

  let onSetHighlightedCell = (id) => {
    dispatch(setHighlightedCell(id));
  }

  const onDeleteWord = (id) => {
    dispatch(deleteWord(id));
  }

  let table = [], tr;

  for (let elem of filterArr) {
    tr = [];
    tr.push(<td key={elem.id + 1} id={elem.id} className={highlightedCell == elem.id ? s.highlightedCell : s.word}
      onClick={() => onSetHighlightedCell(elem.id)} > {elem.еnglishWord} </td>);
    tr.push(<td key={elem.id + 2} id={elem.id} className={highlightedCell == elem.id ? s.highlightedCell : s.word}
      onClick={() => onSetHighlightedCell(elem.id)} > {elem.translationWord} </td>);
    tr.push(<td key={elem.id + 3} id={elem.id} className={elem.memoryStatus ? s.know : s.dKnow} >
      {elem.memoryStatus ? 'I know' : "don't know"} </td>);
    tr.push(<td key={elem.id + 4} id={elem.id} className={s.delete}
      onClick={() => onDeleteWord(elem.id)}> delete </td>);
    table.push(<tr>{tr}</tr>);
  }

  return (
    <div className={s.table}>
      <h1> Таблица слов</h1>
      <table >
        <thead className={s.head}>
          <td>Слово</td>
          <td>Перевод</td>
          <td>Статус</td>
          <td>Удаление</td>
        </thead>
        <tbody >
          {table}
        </tbody>
      </ table>
    </div>
  )
}

export default TableOfUnlearnedWords;
