import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Agenti = () => {
  const [agenti, setAgenti] = useState([]);
  const [nume, setNume] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [imagine, setImagine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const agent = {
      nume,
      telefon,
      email,
      imagine,
    };

    setAgenti([...agenti, agent]);

    // Reset form fields
    setNume("");
    setTelefon("");
    setEmail("");
    setImagine("");
  };

  return (
    <div>
      <h2 className="mt-4 text-center">Introducere date agent</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nume Agent:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduceti numele agentului"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefon Agent:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduceti numarul de telefon al agentului"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Agent:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduceti adresa de email a agentului"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagine Agent:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduceti URL-ul imaginii agentului"
            value={imagine}
            onChange={(e) => setImagine(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Adauga Agent
        </Button>
      </Form>

      <h2 className="mt-4 text-center">Introducere date agent</h2>
      <div className="card-container">
        {agenti.map((agent, index) => (
          <Card key={index} style={{ width: "18rem" }} className="agent-card">
            {agent.imagine && (
              <Card.Img variant="top" src={agent.imagine} alt={agent.nume} />
            )}
            <Card.Body>
              <Card.Title>{agent.nume}</Card.Title>
              <Card.Text>Telefon: {agent.telefon}</Card.Text>
              <Card.Text>Email: {agent.email}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Agenti;
