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
      <Form>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label></Form.Label>
          <Form.Control
            type="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Date">
          <Form.Label></Form.Label>
          <Form.Control
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
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={handleSubmit} classvariant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditNote;
