import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../formVet/FormVet.css";
const Citas = ({ citas, citaDeleted }) => {
  return (
    <Row>
      {citas.map((cita, index) => (
        <Col xl={3} lg={4} md={6}>
          <Card key={index} className="text-center mb-4">
            <Card.Header className="text-center fw-bold bg-lightBlue">
              Mascota: {cita.petName}
              <br /> Owner: {cita.owner}
            </Card.Header>
            <Card.Body>
              <Card.Text> Fecha: {cita.dateDay} </Card.Text>
              <Card.Text> Hora: {cita.timeDay} </Card.Text>
              <Card.Text> Sintomas: {cita.sintomas} </Card.Text>
            </Card.Body>
            <button
              className="btn btn-danger"
              onClick={() => {
                citaDeleted(cita);
              }}
            >
              Borrar
            </button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Citas;
