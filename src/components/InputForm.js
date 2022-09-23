import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { AddNewNote } from "../action/NoteAction";

const InputForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let noteInfo = { title, date, text, id: uuidv4() };
    dispatch(AddNewNote(noteInfo));
    setTitle("");
    setDate("");
    setText("");
    props.onCancel();
  };

  function closeForm() {
    props.onCancel();
  }

  return (
    <div>
      <Form className="form">
        <h1>ADD TO NOTES</h1>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label></Form.Label>
          <Form.Control
            className="input"
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
            className="input"
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
            className="input text-input"
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Form.Group>
        <Button className="btn1" onClick={handleSubmit}>
          SAVE
        </Button>
        <Button className="btn2" onClick={closeForm}>
          CANCEL
        </Button>
      </Form>
    </div>
  );
};

export default InputForm;
