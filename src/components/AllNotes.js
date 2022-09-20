import React from "react";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Note from "./Note";

function AllNotes({ handleDelete, editNote }) {
  const { notes } = useSelector((store) => store);

  return (
    <Container>
      <Row>
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              noteInfo={note}
              handleDelete={handleDelete}
              editNote={editNote}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllNotes;
