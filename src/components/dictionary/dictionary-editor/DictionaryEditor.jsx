import React from "react";
import s from './DictionaryEditor.module.css';
import AddNewWord from './elementsEditor/addNeword/AddNewWord';
import EditWord from './elementsEditor/editWord/EditWord';
import DeleteWord from "./elementsEditor/deleteWord/DeleteWord";

const DictionaryEditor = () => {

  return (
    <div>
      <h1>Редактор слов</h1>
      <AddNewWord />
      <EditWord />
      <DeleteWord />
    </div>
  )
}

export default DictionaryEditor;