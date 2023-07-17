import React from "react";
import Activitate from "./activitate";
import { Row, Col } from "react-bootstrap";

const Program = (props) => {
  const { activitati, sterge, editeaza } = props;

  const lista = activitati.map((item) => (
    <Activitate
      id={item.id}
      key={item.id}
      tipimobil={item.tipimobil}
      adresa={item.adresa}
      marime={item.marime}
      camere={item.camere}
      agent={item.agent}
      imagine={item.imagine}
      descriere={item.descriere}
      sterge={sterge}
      editeaza={editeaza}
    />
  ));

  return (
    <>
      <h2 className="mt-4 text-center">Date imobil</h2>
      <hr />
      <Row>
        {lista.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            {item}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Program;
