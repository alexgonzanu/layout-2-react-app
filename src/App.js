import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row as="main" className="d-flex vh-100 p-0 m-0">
        <Col as="section" xs={8} md={9} className="botonera">
          <Row as="ul" className="align-content-center align-items-start list-unstyled">
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Equipos asignados a mayores de 30
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Equipos asignados a personas de Tarragona
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Provincias donde hay equipos
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Puestos de trabajadores con equipo
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Media de edad de trabajadores
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Equipos ordenados por edad
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Equipos de tipo sobremesa
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Trabajadores con equipo portatil
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Equipos organizados por tipo
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Equipos portatiles asignados en Tarragona
            </button>
            </Col>
            <Col xs={4} md={3} as="li">
              <button className="boton btn-block btn btn-lg btn-warning border-none rounded">
                Resumen de equipos asignados
            </button>
            </Col>
          </Row>
        </Col>
        <Col xs={4} md={3} as="aside" className="container-console d-flex flex-row justify-content-center align-items-center p-0 col-4">
          <div class="recuadro p-1 consola overflow-auto rounded">Hola, esto es un texto para que Mario luego diga que no he puesto nada ^_^</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
