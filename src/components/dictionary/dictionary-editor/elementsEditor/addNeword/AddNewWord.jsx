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
                <ul>
                    <li class={s.form__line}>
                        <label> Слово:  </label>
                        <input placeholder="enter word"
                            {...register("word", {
                                required: "Поле обязательно к заполнению"
                            })} />
                    </li>
                    <div className={s.errors}>{errors?.word && errors.word.message} </div>

                    <li class={s.form__line}>
                        <label>Перевод:  </label>
                        <input placeholder="введи перевод"  {...register("translation",
                            {
                                required: "Поле обязательно к заполнению"
                            })} />
                    </li>
                    <div className={s.errors}>{errors?.translation && errors.translation.message} </div>
                    <li class={s.form__line}>
                        <button type="submit" > Добавить</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default AddNewWord;