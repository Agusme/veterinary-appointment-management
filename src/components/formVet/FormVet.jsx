import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./FormVet.css";
import {
  validateFecha,
  validateHora,
  validateName,
} from "../helpers/validations";

import Swal from "sweetalert2";
import Citas from "../citas/Citas";

const FormVet = () => {
  let localStorageCitas = JSON.parse(localStorage.getItem("listaCitas")) || [];

  const [citas, setCitas] = useState(localStorageCitas);
  const [petName, setPetName] = useState("");
  const [owner, setOwner] = useState("");
  const [dateDay, setDateDay] = useState("");
  const [timeDay, setTimeDay] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(citas));
  }, [citas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateName(petName) ||
      !validateName(owner) ||
      !validateFecha(dateDay) ||
      !validateHora(timeDay) ||
      !validateName(sintomas)
    ) {
      Swal.fire("Oops!", "Some data is invalid", "Error");
      return;
    } else {
      const nuevaCita = {
        petName,
        owner,
        dateDay,
        timeDay,
        sintomas,
      };
      setCitas([...citas, nuevaCita]);
      e.target.reset();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
const citaDeleted =(citaSelected)=>{
let filterCitas= citas.filter((cita)=> citaSelected !== cita)
setCitas(filterCitas)
}


  return (
    <Container>
      <h1 className="display-4 text-center p-3">
        Administrador pacientes veterinaria 🐾
      </h1>
      <hr />

      <Card className="my-4 pb-3">
        <Card.Title className="px-3 pt-3">
          Llenar el formulario para obtener una cita
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <div className="bg-lightBlue px-3">
            <hr />

            <Form.Group className="mb-3 " controlId="formBasicNombreMascota">
              <Form.Label className="fw-semibold">Nombre Mascota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre de su mascota"
                onChange={({ target }) => {
                  setPetName(target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicNombre">
              <Form.Label className="fw-semibold">Nombre del dueño</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del dueño"
                onChange={({ target }) => {
                  setOwner(target.value);
                }}
              />
            </Form.Group>
            <Row>
              <Col xl={6} lg={6} md={6}>
                <Form.Group className="mb-3" controlId="formBasicFecha">
                  <Form.Label className="fw-semibold">Fecha</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="fecha"
                    onChange={({ target }) => {
                      setDateDay(target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={6}>
                <Form.Group className="mb-3" controlId="formBasicHora">
                  <Form.Label className="fw-semibold">Hora</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="hora"
                    onChange={({ target }) => {
                      setTimeDay(target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3 " controlId="formBasicSintomas">
              <Form.Label className="fw-semibold">Sintomas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describir los sintomas"
                onChange={({ target }) => {
                  setSintomas(target.value);
                }}
              />
            </Form.Group>

            <hr />
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Agregar nueva cita
            </Button>
          </div>
        </Form>
      </Card>
      <Citas citas={citas} citaDeleted={citaDeleted} />
    </Container>
  );
};

export default FormVet;
