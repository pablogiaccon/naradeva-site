import React from 'react';

import { Container } from './styles';

const Card = ({
  image, title, description, ...rest
}) => (
  <Container {...rest}>
    <img src={`../../../assets/${image}`} alt={title} />
    <h5>{title}</h5>
    <p>{description}</p>
  </Container>
);
export default Card;
