import React from 'react';
import { Link } from 'gatsby';
import { FaYoutube, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import config from '../../../config/metadata';

import EscuelaLatinoamericanaDeAyurvedaImg from '../../assets/escuela-latinoamericana-de-ayurdeva.png';
import AbedImg from '../../assets/abed.png';
import AvpImg from '../../assets/avp.png';


import {
  Container, CertificationSection, SocialMedias, About,
} from './styles';

const Footer = () => (

  <Container>
    <CertificationSection>
      <div><img src={EscuelaLatinoamericanaDeAyurvedaImg} alt="Escuela Latinoamericana de Ayurveda" /></div>
      <div><img src={AvpImg} alt="Arya Vaidya Pharmacy" /></div>
      <div><img src={AbedImg} alt="Associação Brasileira de Educação a Distância" /></div>
    </CertificationSection>
    <div className="contacts-section">
      <SocialMedias>
        <p>REDES SOCIAS</p>
        <a href={config.social[0].url} target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#414141" size={20} /> Blog Naradeva Shala
        </a>
        <a href={config.social[2].url} target="_blank" rel="noopener noreferrer">
          <FaYoutube color="#414141" size={20} /> Youtube Naradeva Shala
        </a>
        <a href={config.social[1].url} target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare color="#414141" size={20} /> Facebook Naradeva Shala
        </a>
        <a href={config.social[0].url} target="_blank" rel="noopener noreferrer">
          <FaInstagram color="#414141" size={20} /> Instagram Naradeva Shala
        </a>
      </SocialMedias>

      <About>
        <p>SOBRE</p>
        <Link to="/">Quem somos</Link>
        <Link to="/">Termos de Uso</Link>
        <Link to="/">Termos de Privacidade</Link>
        <Link to="/">Propriedade Intelectual</Link>
      </About>
    </div>


  </Container>
);

export default Footer;
