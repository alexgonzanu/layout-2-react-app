import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row as="main" className="d-flex vh-100 p-0 m-0">
        <Col as="section" xs={8} md={9} className="botonera">
          <Row as="ul" className="align-content-center align-items-start list-unstyled">
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Equipos asignados a mayores de 30
            </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Equipos asignados a personas de Tarragona
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Provincias donde hay equipos
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Puestos de trabajadores con equipo
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Media de edad de trabajadores
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Equipos ordenados por edad
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Equipos de tipo sobremesa
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Trabajadores con equipo portatil
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Equipos organizados por tipo
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Equipos portatiles asignados en Tarragona
              </Button>
            </Col>
            <Col xs={4} md={3} as="li">
              <Button variant="warning" size="lg" block className="boton border-none rounded">
                Resumen de equipos asignados
              </Button>
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
