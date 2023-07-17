import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaCaretDown } from "react-icons/fa"; // Import the dropdown icon from react-icons

const Formular = (props) => {
  const [id, setId] = useState(props.obedit.id);
  const [tipimobil, setTipimobil] = useState(props.obedit.tipimobil);
  const [adresa, setAdresa] = useState(props.obedit.adresa);
  const [marime, setMarime] = useState(props.obedit.marime);
  const [camere, setCamere] = useState(props.obedit.camere);
  const [agent, setAgent] = useState(props.obedit.agent);
  const [imagine, setImagine] = useState(props.obedit.imagine);
  const [descriere, setDescriere] = useState(props.obedit.descriere);

  const stil = {
    h2: { textAlign: "center" },
    radioContainer: { display: "flex" },
    radioLabel: { marginRight: "10px" },
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const activitate = {
      tipimobil,
      adresa,
      marime,
      camere,
      agent,
      imagine,
      descriere,
    };
    if (id === 0) {
      props.transmit(activitate);
    } else {
      activitate.id = id;
      props.editez(activitate);
    }
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        {id === 0 ? "Introducere imobil nou" : "Editare date imobil"}
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <div style={{ display: "flex" }}>
           <Form.Label style={stil.radioLabel}>Tip imobil:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Casa"
                name="tipimobil"
                value="Casa"
                checked={tipimobil === "Casa"}
                onChange={(e) => setTipimobil(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Apartament"
                name="tipimobil"
                value="Apartament"
                checked={tipimobil === "Apartament"}
                onChange={(e) => setTipimobil(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Teren"
                name="tipimobil"
                value="Teren"
                checked={tipimobil === "Teren"}
                onChange={(e) => setTipimobil(e.target.value)}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Adresa:</Form.Label>
          <Form.Control
            type="text"
            value={adresa}
            onChange={(e) => setAdresa(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Marime:</Form.Label>
          <Form.Control
            type="text"
            value={marime}
            onChange={(e) => setMarime(e.target.value)}
          />
        </Form.Group>

      <Form.Group className="position-relative">
          <Form.Label>Camere:</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              as="select"
              value={camere}
              onChange={(e) => setCamere(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Form.Control>
            <FaCaretDown className="dropdown-icon ml-2" /> {/* Add the dropdown icon */}
          </div>
              
        </Form.Group>
        
      <Form.Group className="position-relative">
          <Form.Label>Agent:</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              as="select"
              value={agent}
              onChange={(e) => setAgent(e.target.value)}
            >
              <option value="Maria Popescu">Maria Popescu</option>
              <option value="David Anton">David Anton</option>
              <option value="Teodor Anca">Teodor Anca</option>
                           
            </Form.Control>
            <FaCaretDown className="dropdown-icon ml-2" /> {/* Add the dropdown icon */}
          </div>
        </Form.Group>
        

        <Form.Group>
          <Form.Label>Imagine:</Form.Label>
          <Form.Control
            type="text"
            value={imagine}
            onChange={(e) => setImagine(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formular;
