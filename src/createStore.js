import { configureStore } from "@reduxjs/toolkit";
import getSignInInfo from "./redux/rootReducer";
import { createStore } from "redux";

export const store = createStore(getSignInInfo, ["Use Redux"]);
