import React from "react";
import s from './AddNewWord.module.css';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewWord } from './../../../../store/sliceDictionary';

const AddNewWord = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(addNewWord({ english: data.word, translation: data.translation }));
        reset();
    }

    return (
        <div className={s.addWord}>
            <h2>Добавить слово</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Слово:
                    <input placeholder="enter word"
                        {...register("word", {
                            required: "Поле обязательно к заполнению"
                        })} />
                </label>
                <div className={s.errors}>{errors?.word && errors.word.message} </div>
                <label>Перевод:
                    <input placeholder="введи перевод"  {...register("translation",
                        {
                            required: "Поле обязательно к заполнению"
                        })} />
                </label>
                <div className={s.errors}>{errors?.translation && errors.translation.message} </div>
                <button type="submit" > Добавить</button>
            </form>
        </div>
    )
}

export default AddNewWord;