import styled from 'styled-components';


import WelcomeImg from '../../static/assets/7254b928ce93fd65413daf5acf411301a0fa8098.png';
import BannerImg from '../../static/assets/db03bdccf87dfc81049e7ec3422be7bb50f4e9e4.png';
import EbookImg from '../../static/assets/3fb0d22643a19022a481357151c880729c212359.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .welcome-section{
    width: 100%;
    height: 300px;
    background: url(${WelcomeImg});
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #9B1C31;
    text-align: center;
    h2 {
      margin-top: 50px;
      font-family: 'Satisfy', cursive;
    }
    h1 {
      font-size: 40px;
      font-weight: 100;
    }
  }

  .new-letter{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 25px;
    box-shadow: 0 2px 2px #ccc;
    margin-bottom: 2px;
    background: #fff;
    text-align: center;
    p {
      color: #414141;
      margin-right: 15px;
      font-weight: bold;
    }

    form{
      display: flex;
      align-items: center;
      justify-content: center;

      div + div {
        margin-left: 15px;
      }

      button {
        background: #1E9D96;
        border: 0;
        width: 400px;
        height: 35px;
        margin-left: 15px;
        color: #fff;
      }
    }
    @media (max-width: 650px){
      flex-direction: column;

      p {
        margin: 0;
        margin-bottom: 10px;
      }

      form {
        flex-direction: column;
        align-items: center;
        max-width: 90%;
        div + div {
          margin-left: 0;
        }

        div{
          margin-bottom: 10px;
        }
        button{
          margin: 0;
          max-width: 100%;
        }
      }
    }
  }


`;

export const Cards = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1120px;
  padding: 0 5px;
  margin: 10px 0;

  @media(max-width: 1140px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 600px){
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Banner = styled.div`
  background: url(${BannerImg})  no-repeat center 100%;
  width: 1090px;
  height: 350px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 30px 0;
  text-align: center;
  p{
    font-size: 50px;
  }

  @media(max-width: 1140px){
    width: 90%;
  }

  @media(max-width: 600px){
    p{
    font-size: 30px;
  }
  }
`;

export const Ebook = styled.div`
  background: url(${EbookImg})  no-repeat center;
  width: 1090px;
  height: 350px;
  background-size: cover;
  box-shadow: 0 0 3px #414141;
  margin: 30px 0;
  display: flex;
  justify-content: flex-end;
  div {
    margin-right: 150px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      color: #414141;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    button {
      height: 56px;
      color: #fff;
      background: #D14407;
      border: 0;
      border-radius: 5px;
      width: 300px;
      font-size: 20px;
      box-shadow: 0 0 5px #414141;
    }
  }

  @media(max-width: 1140px){
    width: 90%;
  }
  @media(max-width: 900px){
    div{
      margin-right: 25px;
      margin-top: 25px;
    }
  }
`;

export const ProductsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1090px;
  padding: 0 30px;

  .item{
    display: flex;
    align-items: center;

    .item-img{
      width: 170px;
      height: 170px;
      border-radius: 50%;
      background: #CCC;
      border: 1px solid #aaa;
    }
    .item-description {
      flex: 1;
      margin-left: 25px;

      h2{
        color: #9B1C31;
        margin-bottom: 15px;
      }
      p{
        font-size: 12px;
        margin-bottom: 15px;
      }
      button{
        background: #D14407;
        padding: 5px 25px;
        border: 0;
        border-radius: 5px;
        color: #fff;
      }
    }
  }

  @media(max-width: 700px){
    grid-template-columns: 1fr;
  }
  @media(max-width: 435px){
    .item .item-img{
      width: 100px;
      height: 100px;
    }
  }
`;
