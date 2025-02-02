 import { react, useState } from 'react';
import './senha.css';
import { Container, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import Parte1 from './Parte1';


 export default function TelaJogo() {
    const [minhaSenha, setMinhaSenha] = useState([0,0,0,0]);
        return (
            <Container fluid>
                <Card className='mt-5'>
                    <CardHeader>
                        <CardTitle tag="h2">Jogo da Senha</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Descubra a senha de 4 dígitos</CardText>
                         <Parte1 minhaSenha={minhaSenha} setMinhaSenha={setMinhaSenha} />
                    </CardBody>
                </Card>

            </Container>
        );
 }