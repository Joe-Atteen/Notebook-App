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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNote
            close={handleClose}
            noteInfo={noteInfo}
            editNote={editNote}
          />
        </Modal.Body>
      </Modal>
      <Col md={2}>
        <Card className="card">
          <Card.Body className="body">
            <Card.Title className="title">{noteInfo.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted date">
              {noteInfo.date}
            </Card.Subtitle>
            <Card.Text className="card-text">{noteInfo.text}</Card.Text>
            <Button href="#" size="sm" className="btn3" onClick={handleShow}>
              EDIT
            </Button>
            <Button href="#" size="sm" className="btn4" onClick={deleteNote}>
              DELETE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Note;
