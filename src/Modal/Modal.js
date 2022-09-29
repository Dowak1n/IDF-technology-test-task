import React from "react";
import "./Modal.scss";
import { store } from "../createStore";

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal-content active" : "modal"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Modal title</h1>
        <p>First name: {store.getState().firstname}</p>
        <p>Last name: {store.getState().lastname}</p>
        <p>Sex: {store.getState().sex}</p>
        <p>Birthday: {store.getState().birtday} </p>
        <p>Mobiel phone: {store.getState().number}</p>
        <p>Email: {store.getState().email}</p>
        <p>Password: {store.getState().password}</p>
        <p>Hobby: {store.getState().hobby}</p>
        <p>Favorite ocean: {store.getState().ocean}</p>
        <input
          onClick={() => setActive(false)}
          type="submit"
          name="Back"
          value="Back"
        />
      </div>
    </div>
  );
};

export default Modal;
