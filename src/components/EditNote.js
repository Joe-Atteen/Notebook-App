import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NoteEdit } from "../action/NoteAction";

const EditNote = (props) => {
  const [title, setTitle] = useState(props.noteInfo.title);
  const [date, setDate] = useState(props.noteInfo.date);
  const [text, setText] = useState(props.noteInfo.text);
  const [id, setId] = useState(props.noteInfo.id);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDate("");
    setText("");
    setId("");
    props.close();
    dispatch(NoteEdit({ id, title, date, text }));
  };

  return (
    <div>
      <Form className="edit-form">
        <h1 className="heading">Edit Note</h1>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label></Form.Label>
          <Form.Control
            className="edit-title"
            type="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Date">
          <Form.Label></Form.Label>
          <Form.Control
            className="edit-date"
            type="date"
            placeholder="Enter date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Text">
          <Form.Label></Form.Label>
          <Form.Control
            className="edit-text"
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={handleSubmit} className="edit-btn" type="submit">
          DONE
        </Button>
      </Form>
    </div>
  );
};

export default EditNote;
