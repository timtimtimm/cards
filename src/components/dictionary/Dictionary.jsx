import React from "react";
import DictionaryEditor from "./dictionary-editor/DictionaryEditor";
import Table from "./table/Table";
import EditTable from "./table/EditTable";
import { useSelector } from 'react-redux';
import s from './Dictionary.module.css';

const Dictionary = () => {

    const statusTable = useSelector(state => state.dictionary.statusTable);

    return (
        <div className={s.dictionary}>
            <DictionaryEditor />
            {statusTable ? <Table /> : <EditTable />}
        </div>
    )
}

export default Dictionary;

