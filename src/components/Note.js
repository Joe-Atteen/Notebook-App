import React from "react";
import { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditNote from "./EditNote";
import { useDispatch } from "react-redux";
import { DeleteNote } from "../action/NoteAction";

function Note({ noteInfo, editNote }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const deleteNote = () => {
    dispatch(DeleteNote(noteInfo.id));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNote
            close={handleClose}
            noteInfo={noteInfo}
            editNote={editNote}
          />
        </Modal.Body>
      </Modal>
      <Col md={2} style={{ width: "15rem", marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name: {noteInfo.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Contact: {noteInfo.date}
            </Card.Subtitle>
            <Card.Text>Location: {noteInfo.text}</Card.Text>
            <Button href="#" size="sm" variant="primary" onClick={handleShow}>
              Edit
            </Button>
            <Button href="#" size="sm" variant="danger" onClick={deleteNote}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Note;
