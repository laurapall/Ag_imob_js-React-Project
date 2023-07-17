import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

const Activitate = ({
  id,
  marime,
  camere,
  agent,
  imagine,
  descriere,
  editeaza,
  sterge,
  adresa,
  tipimobil,
}) => {
  const stil = {
    card: { width: "18rem", margin: "10px" },
    text: { fontSize: "0.9rem" },
  };

  return (
    <Card style={stil.card}>
      <Card.Body>
        <Card.Title>{tipimobil}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Adresa: {adresa}</Card.Subtitle>
        <Card.Text style={stil.text}>Marime: {marime}</Card.Text>
        <Card.Text style={stil.text}>Camere: {camere}</Card.Text>
        <Card.Text style={stil.text}>Agent: {agent}</Card.Text>
        {imagine && <Card.Img variant="top" src={imagine} alt="Imagine" />}
        <Card.Text style={stil.text}>Descriere: {descriere}</Card.Text>
        <Button variant="link" onClick={() => editeaza(id)} id={id}>
          <BsPencilSquare />
        </Button>
        <Button variant="link" onClick={() => sterge(id)} id={id}>
          <BsTrashFill />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Activitate;
