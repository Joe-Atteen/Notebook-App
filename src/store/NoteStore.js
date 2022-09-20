import { legacy_createStore } from "redux";
import NoteReducer from "../reducer/NoteReducer";

let store = legacy_createStore(NoteReducer);

export default store;
