import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';

import Layout from '../components/Layout';
import Input from '../components/Input';
import Card from '../components/Card';

import {
  Container, Cards, Banner, Ebook, ProductsSection,
} from './styles';

const cards = [
  {
    id: 1,
    img: '03f7dc625182b2ae49d46ef95e0997259fa36aef.png',
    title: 'Formação e Aprimoramento em Yoga - São Paulo / SP',
    description: 'Curso Livre de Formação e Aprimoramento em Yoga e PósGraduação Lato Sensu em Yoga (MEC) - Nova turma em março de 2019. Vagas limitadas',
  },
  {
    id: 2,
    img: 'b30eced66e85c99b5da7b9da8de3e290beffc55d.png',
    title: 'Atendimento de Jyotisha - Astrologia Védica com Margaret Mahan (USA-Canadá)',
    description: 'A leitura natal oferece um retrato dos karmas dominantes presentes em sua vida, e lhe dará uma perspectiva para poder explorar os pontos fortes e desafios do seu propósito de vida!',
  },
  {
    id: 3,
    img: 'aacb997fc6dd6aa9f793e41808e332b3782e6adb.png',
    title: 'Ferramentas para a Saúde e a Felicidade: Uma Introdução ao Jyotisha!',
    description: 'O workshop está organizado de modo a apresentar ferramentas básicas que lhe servirão onde quer que você se encontre na vida.',
  },
  {
    id: 4,
    img: 'c4867cdc1ce761ec851abbe2aa8efa474cec1faa.png',
    title: 'Consulta de Nutrição comRaissa Faro',
    description: 'Raissa Faro é nutricionista, com aperfeiçoamento em Alimentação e Cultura, pós-graduanda em Ayurveda pelo Instituto Naradeva Shala. ',
  },
  {
    id: 5,
    img: '560555175ffe28046672ffed1242ffd65ad4587f.png',
    title: 'Curso de Introdução ao Ayurveda Grátis',
    description: 'Este é um curso LIVRE e INFORMATIVO, sendo assim, aberto a qualquer pessoa. Clique aqui para saber mais informações.',
  },
  {
    id: 6,
    img: '43dc14ca88aa39fe4833dcd514512caf08af1da3.png',
    title: 'Curso de Meditação e Autoconhecimento',
    description: 'Tem como objetivo o reconhecimento com o nosso eu interno, para que possamos alcançar a meta da auto realização, em seu dia a dia e também aprender a criar o sua rotina espiritual.',
  },
  {
    id: 7,
    img: 'Ayurveda.jpg',
    title: 'Curso 100% Online de Rotinas Saudáveis do Ayurveda',
    description: 'Como Manter-se Saudável com Técnicas Milenares? A rotina saudável é a base para afastar qualquer tipo de doença e manter-se saudável e jovem a maior parte da vida',
  },
  {
    id: 8,
    img: 'c4867cdc1ce761ec851abbe2aa8efa474cec1faa.png',
    title: 'Formação em Ayurveda - Curso SemiPresencial (Aulas OnLine e Presenciais)',
    description: 'Turma Regular de Estudo Tradicional de Ayurveda com aulas online e presenciais com os renomados professores: Dr. Robert Svoboda (EUA), Dra. Claudia Welch (EUA), Prof. Erick Schulz.',
  },
];

export default function Home() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);
  const [firstCard, setFirstCard] = useState(cards.slice(0, 4));
  const [secundCard, setSecundCard] = useState(cards.slice(4, 8));
  return (
    <Layout>
      <Container>
        <div className="welcome-section">
          <h2>Bem-vindo ao</h2>
          <h1>Instituto de Cultura Hindu Naradeva Shala</h1>
        </div>
        <section className="new-letter">
          <p>Receba Novidades do Instituto</p>
          <Form onSubmit={handleSubmit}>
            <Input name="nome" type="text" placeholder="Digite seu nome" />
            <Input name="email" type="text" placeholder="Digite seu e-mail" />
            <button type="submit">Receber</button>
          </Form>
        </section>

        <Cards>
          {firstCard.map((card) => (
            <Card
              key={card.id}
              image={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </Cards>

        <Banner>
          <p>BANNER CURSO PROFISSIONAL</p>
        </Banner>

        <Cards>
          {secundCard.map((card) => (
            <Card
              key={card.id}
              image={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </Cards>

        <Ebook>
          <div>
            <p>Oferecer aqui um Ebook</p>
            <button type="button">Baixar Ebook</button>
          </div>
        </Ebook>

        <ProductsSection>
          <div className="item">
            <div className="item-img" />
            <div className="item-description">
              <h2>Loja Online</h2>
              <p>Nós oferecemos uma gama completa de produtos
                de estilo de vida Ayurveda. Você pode encomendar
                por telefone ou online.
              </p>
              <button type="button">COMPRAR</button>
            </div>
          </div>

          <div className="item">
            <div className="item-img" />
            <div className="item-description">
              <h2>Revista</h2>
              <p>Nós oferecemos uma gama completa de produtos
                de estilo de vida Ayurveda. Você pode encomendar
                por telefone ou online.
              </p>
              <button type="button">ACESSAR</button>
            </div>
          </div>
        </ProductsSection>
      </Container>
    </Layout>
  );
}
