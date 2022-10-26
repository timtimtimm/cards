import React from "react";
import DictionaryEditor from "./dictionary-editor/DictionaryEditor";
import Table from "./table/Table";
import s from './Dictionary.module.css';

const Dictionary = () => {

    return (
        <div className={s.dictionary}>
            <DictionaryEditor />
            <Table />
        </div>
    )
}

export default Dictionary;

