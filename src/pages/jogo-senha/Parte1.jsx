import { Container, Row, Col, Input, InputGroup, Button } from "reactstrap";

export default function Parte1({ minhaSenha, setMinhaSenha }) {
  function handleChange(value, position) {
    value = value.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos
    if (value.length > 1) value = value[0]; // Mantém apenas um dígito

    const novaSenha = [...minhaSenha];
    novaSenha[position] = value;
    setMinhaSenha(novaSenha);
  }

  return (
    <Container className="mt-5">
      <h4>Digite sua senha abaixo</h4>
      <Row>
        <Col>
          <InputGroup>
            {Array.from({ length: 4 }).map((_, index) => (
              <Input
                key={index}
                type="text"
                maxLength="1"
                value={minhaSenha[index] || ""}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button>Salvar senha</Button>
        </Col>
      </Row>
    </Container>
  );
}
