import { combineReducers } from "redux";
import { createStore } from "redux";
import {
  MOBILE_PHONE,
  EMAIL,
  PASSWORD,
  RETYPE_PASSWORD,
  FIRST_NAME,
  LAST_NAME,
  SEX,
  BIRTHDAY,
  OCEAN,
  HOBBY,
} from "./types";

const defaultState = {
  number: "",
  email: "",
  password: "",
  password2: "",
  firstname: "",
  lastname: "",
  sex: "",
  birtday: "",
  ocean: "",
  hobby: "",
};

function getSignInInfo(state = defaultState, action) {
  switch (action.type) {
    case MOBILE_PHONE:
      return { ...state, number: action.number };
    case EMAIL:
      return { ...state, email: action.email };
    case PASSWORD:
      return { ...state, password: action.password };
    case RETYPE_PASSWORD:
      return { ...state, password2: action.password2 };
    case FIRST_NAME:
      return { ...state, firstname: action.firstname };
    case LAST_NAME:
      return { ...state, lastname: action.lastname };
    case SEX:
      return { ...state, sex: action.sex };
    case BIRTHDAY:
      return { ...state, birtday: action.birtday };
    case OCEAN:
      return { ...state, ocean: action.ocean };
    case HOBBY:
      return { ...state, hobby: action.hobby };
    default:
      return state;
  }
}

export default getSignInInfo;
