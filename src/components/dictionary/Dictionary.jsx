import React from "react";
import DictionaryEditor from "./dictionary-editor/DictionaryEditor";
import Table from "./table/Table";
import EditTable from "./table/EditTable";
import { useSelector } from 'react-redux';
import s from './Dictionary.module.css';
import TableOfUnlearnedWords from './table/tableOfUnlearnedWords';
import TableOfLearnedWords from './table/tableOfLearnedWords';

const Dictionary = () => {

    const statusTable = useSelector(state => state.dictionary.statusTable);

    const renderSwitch = (data) => {
        switch (data) {
            case 'add':
                return <Table />;
            case 'delete':
                return <EditTable />;
            case 'remember':
                return <TableOfLearnedWords />;
            case 'not remember':
                return < TableOfUnlearnedWords />;
        }
    }

    return (
        <div className={s.dictionary}>
            <DictionaryEditor />
            {renderSwitch(statusTable)}
        </div>
    )
}

export default Dictionary;

