export const AddNewNote = (newNote) => {
  return {
    type: "ADD_NEW_NOTE",
    payload: newNote,
  };
};

export const DeleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};

export const NoteEdit = (data) => {
  return {
    type: "NOTE_EDIT",
    payload: { data },
  };
};
