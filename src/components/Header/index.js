import React, { useState, useCallback } from 'react';
import { Link } from 'gatsby';

import { FiPhone, FiGlobe, FiPlayCircle } from 'react-icons/fi';
import {
  FaWhatsapp, FaHome, FaCalendarAlt, FaYoutube, FaFacebookSquare, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import { Container } from './styles';

import config from '../../../config/metadata';
import ImgHeader from '../../../static/assets/31dbb363179e9e94f71edf9d5aa8512aeaad79d6.png';


const Header = () => {
  const [show, setShow] = useState(true);
  function handleOpenMenu() {
    const menuSection = document.getElementsByClassName('menu-section');
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuSection[0].classList.toggle('on', show);
    setShow(!show);
  }

  const handleCloseMenuByNav = useCallback(() => {
    const menuSection = document.getElementsByClassName('menu-section');
    if (menuSection[0].classList.contains('on')) {
      menuSection[0].classList.toggle('on');
      setShow(true);
    }
    document.body.style.overflow = 'initial';
  }, []);

  return (
    <Container>
      <header>
        <section className="header-top">
          <div>
            <span><FiPhone /> {config.contacts[0].contact}</span>
            <span><FaWhatsapp /> {config.contacts[0].contact}</span>
          </div>
          <div className="social-media">
            <a href={config.social[2].url} target="_blank" rel="noopener noreferrer">
              <FaYoutube color="#fff" size={30} />
            </a>
            <a href={config.social[1].url} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare color="#fff" size={30} />
            </a>
            <a href={config.social[3].url} target="_blank" rel="noopener noreferrer">
              <FaTwitter color="#fff" size={30} />
            </a>
            <a href={config.social[0].url} target="_blank" rel="noopener noreferrer">
              <FaInstagram color="#fff" size={30} />
            </a>
          </div>
        </section>

        <section className="header-section">
          <Link to="/">
            <img src={ImgHeader} alt="NARADEVA SHALA" />
          </Link>

          <div className="links-section">
            <Link to="/"> <FaHome size={35} color="#9B1C31" /> <p>Cursos Presenciais</p></Link>
            <Link to="/"> <FiGlobe size={35} color="#9B1C31" /> <p>Cursos Online</p></Link>
            <Link to="/"> <FiPlayCircle size={35} color="#9B1C31" /> <p>Vídeos</p></Link>
            <Link to="/"> <FaCalendarAlt size={35} color="#9B1C31" /> <p>Calendário</p></Link>
          </div>
        </section>

      </header>

      <div className="menu-section">
        <button className="menu-toggle" type="button" onClick={handleOpenMenu}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </button>

        <nav>
          <ul>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Quem somos</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Atendimentos e Tratamentos</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Profissionais</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Programação</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Cursos</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Aulas de Yoga</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Viagens e Retiros</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Artigos</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Localização</Link>
            </li>
            <li>
              <Link to="/" onClick={handleCloseMenuByNav}>Fale Conosco</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
