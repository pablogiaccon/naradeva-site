import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  width: 250px;
  height: 400px;
  background: #fff;
  box-shadow: 3px 1px 2px #414141;

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
`;
