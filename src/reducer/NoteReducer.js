import { v4 as uuidv4 } from "uuid";

let initialState = {
  notes: [],
};

let NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...state,
        notes: filteredNotes,
      };
    case "NOTE_EDIT":
      const noteEdit = state.notes.map((note) =>
        note.id === action.payload.data.id ? action.payload.data : note
      );
      return {
        ...state,
        notes: noteEdit,
      };
    default:
      return state;
  }
};

export default NoteReducer;
