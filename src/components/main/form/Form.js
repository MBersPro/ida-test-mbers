import React, { useState } from "react";
import {
  label,
  form,
  input,
  textarea,
  notActiveBtn,
  circle,
  divCircle,
} from "./Form.module.css";

const initialState = {
  name: "",
  description: "",
  link: "",
  price: "",
  correctInput: "true",
};

const Form = ({addProduct}) => {
  const [state, setState] = useState({ ...initialState });

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(state);
    setState({ ...initialState });
  }

  return (
    <>
      <form className={form} onSubmit={onSubmit}>
        <label className={label}>
          <div className={divCircle}>
            Наименование товара<div className={circle}></div>
          </div>
          <input
            className={input}
            type="text"
            placeholder="Введите наименование товара"
            name="name"
            value={state.name}
            onChange={onInputChange}
          />
          {}
        </label>
        <label className={label}>
          Описание товара
          <textarea
            className={textarea}
            placeholder="Введите описание товара"
            name="description"
            value={state.description}
            onChange={onInputChange}
          ></textarea>
        </label>
        <label className={label}>
          <div className={divCircle}>
            Ссылка на изображение товара<div className={circle}></div>
          </div>
          <input
            className={input}
            type="url"
            placeholder="Введите ссылку"
            name="link"
            value={state.link}
            onChange={onInputChange}
          />
        </label>
        <label className={label}>
          <div className={divCircle}>
            Цена товара<div className={circle}></div>
          </div>
          <input
            className={input}
            type="number"
            placeholder="Введите цену"
            name="price"
            value={state.price}
            onChange={onInputChange}
          />
        </label>
        <button type="submit" className={notActiveBtn}>
          Добавить товар
        </button>
      </form>
    </>
  );
};

export default Form;
