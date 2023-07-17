import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Formular from "./formular";
import Program from "./program";
import Lipsa from "./lipsa";
import Agenti from "./agenti";
import "./app.css";

export default function App() {
  const [lista, setLista] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    tipimobil: "",
    adresa: "",
    marime: "",
    camere: "",
    agent: "",
    imagine: "",
    descriere: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://s7s9j8-5050.csb.app/")
      .then((rezultat) => rezultat.json())
      .then((data) => setLista(data));
  }, []);

  const stergActiv = (id) => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`https://s7s9j8-5050.csb.app/sterg/${id}`, config)
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
      });
  };

  const adaugaActiv = (act) => {
    act.id = lista.at(-1) ? lista.at(-1).id + 1 : 1;
    const config = {
      method: "POST",
      body: JSON.stringify(act),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch("https://s7s9j8-5050.csb.app/adaug", config)
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
        navigate("/");
      });
  };

  const editeazaActiv = (id) => {
    var obiect = lista.find((item) => +item.id === +id);
    if (obiect) {
      setEdit({
        id: obiect.id,
        tipimobil: obiect.tipimobil,
        adresa: obiect.adresa,
        marime: obiect.marime,
        camere: obiect.camere,
        agent: obiect.agent,
        imagine: obiect.imagine,
        descriere: obiect.descriere,
      });

      navigate("/formular");
    }
  };

  const editActiv = (elm) => {
    const config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(elm),
    };

    fetch("https://s7s9j8-5050.csb.app/editez", config)
      .then((resp) => resp.json())
      .then((data) => {
        setLista(data);
        navigate("/");
      });

    setEdit({
      id: 0,
      tipimobil: "",
      adresa: "",
      marime: "",
      camere: "",
      agent: "",
      imagine: "",
      descriere: "",
    });
  };

  const stil = {
    container: { maxWidth: "950px" },
    h2: { textAlign: "center" },
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="sm" className="p-2">
        <Navbar.Brand href="/">Agentie Imobiliara</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Proprietate
            </NavLink>
            <NavLink
              to="/formular"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Imobil nou
            </NavLink>
            <NavLink
              to="/agenti"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Agenti
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Program
              activitati={lista}
              sterge={stergActiv}
              editeaza={editeazaActiv}
            />
          }
        />
        <Route
          path="/formular"
          element={
            <Formular transmit={adaugaActiv} obedit={edit} editez={editActiv} />
          }
        />
        <Route path="/agenti" element={<Agenti />} />
        <Route path="*" element={<Lipsa />} />
      </Routes>
    </Container>
  );
}
