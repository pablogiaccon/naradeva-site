import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 200px;
  background: #ccc;
  margin: 30px 0 70px 0;
`;

export const CertificationSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  div{
    max-width: 100px;
  }
  img {
    width: 100%;
  }
`;

export const SocialMedias = styled.div`
  align-self: flex-start;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p{
    font-weight: bold;
    margin-bottom: 10px;
  }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #414141;
    font-size: 13px;
    font-weight: bold;

    svg {
      margin-right: 3px;
    }
    & + a {
      margin-top: 5px;
    }
  }
`;

export const About = styled.div`
  align-self: flex-start;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p{
    font-weight: bold;
    margin-bottom: 10px;
  }
  a{
    text-decoration: none;
    color: #414141;
    font-size: 13px;
    font-weight: bold;
    & + a {
      margin-top: 5px;
    }
  }
`;
