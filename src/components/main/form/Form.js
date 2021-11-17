import React, { useState } from "react";
import {
  label,
  form,
  input,
  textarea,
  notActiveBtn,
  activeBtn,
  circle,
  divCircle,
  validation,
} from "./Form.module.css";

const initialState = {
  name: "",
  description: "",
  link: "",
  price: "",
};

const Form = ({ addProduct }) => {
  const [state, setState] = useState({ ...initialState });
  const [nameCheck, setnameCheck] = useState(false);
  const [linkCheck, setlinkCheck] = useState(false);
  const [priceCheck, setpriceCheck] = useState(false);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(state);
    setState({ ...initialState });
  };

  const onBlurFunc = (e) => {
    if (!e.target.value) {
      switch (e.target.name) {
        case "name":
          setnameCheck(true);
          break;
        case "link":
          setlinkCheck(true);
          break;
        case "price":
          setpriceCheck(true);
          break;
      }
    }
    if (e.target.value) {
      switch (e.target.name) {
        case "name":
          setnameCheck(false);
          break;
        case "link":
          setlinkCheck(false);
          break;
        case "price":
          setpriceCheck(false);
          break;
      }
    }
  };

  const buttonValidation = () => {
    if (state.name && state.link && state.price) {
      return false;
    } else {
      return true;
    }
  };

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
            onBlur={(e) => onBlurFunc(e)}
          />
          {nameCheck && <p className={validation}>Поле является обязтельным</p>}
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
            onBlur={(e) => onBlurFunc(e)}
          />
          {linkCheck && <p className={validation}>Поле является обязтельным</p>}
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
            onBlur={(e) => onBlurFunc(e)}
          />
          {priceCheck && (
            <p className={validation}>Поле является обязательным</p>
          )}
        </label>
        <button
          disabled={buttonValidation()}
          type="submit"
          className={buttonValidation() ? notActiveBtn : activeBtn}
        >
          Добавить товар
        </button>
      </form>
    </>
  );
};

export default Form;
