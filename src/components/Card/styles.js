import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  width: 250px;
  height: 400px;
  background: #fff;
  box-shadow: 2px 3px 3px #ccc;

  margin: 5px 15px;
  color: #414141;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h5 {
    text-align: center;
    padding: 20px 10px;
  }

  p {
    text-align: justify;
    font-size: 13px;
    padding: 0 5px;
  }

  @media(max-width: 600px){
    width: 70%;
  }
`;
