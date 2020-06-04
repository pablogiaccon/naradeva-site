import styled from 'styled-components';
import { transparentize } from 'polished';

import Img from '../../../static/assets/80d5336bb025103aabaced0876b62eb9b8843a09.png';

export const Container = styled.div`
  width: 100%;
  max-height: max-content;
  background: #fff;

  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 3px #414141;
  margin-bottom: 3px;

  header {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* margin: 10px 100px 10px 50px; */

    .header-top{
      width: 100%;
      background: #9B1C31;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 5px 25px;
      color: #fff;

      span + span{
        margin-left: 10px;
      }

      a + a {
        margin-left: 10px;
      }
    }

    .header-section{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 150px;
      background: url(${Img}) no-repeat center 100%;
      background-size: cover;
      img{
        width: 100%;
        padding: 10px;
      }

      .links-section{
        display: flex;
        margin-left: 150px;
        margin-top: 50px;
        a{
          text-decoration: none;
          color: #414141;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            text-align: center;
            margin-top: 5px;
            font-size: 13px;
            font-weight: bold;
          }

          & + a {
            margin-left: 15px;
          }

          &:hover{
            color: ${transparentize(0.1, '#414141')};
            svg {
              color: ${transparentize(0.9, '#9B1C31')};
            }
          }
        }
      }
    }
  }

  nav ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;

      a {
        text-decoration: none;
        height: 45px;
        display: flex;
        align-items: center;
        margin: 0 20px;
        color: #414141;
        font-size: 13px;
        transition: border 0.3s;
        text-align: center;
        &:hover {
          color: ${transparentize(0.5, '#414141')};
        }
      }
    }
  }

  @media (max-width: 1150px) {

    box-shadow: 0 4px 5px #414141;

    .header-section{
      flex-direction: column;
      justify-content: center;
      height: max-content !important;

      .links-section{
        margin: 0 !important;
      }
    }

    nav {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.9s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
      background: transparent;
      border: 0;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
    .menu-section {
      align-self: center;
    }

    /* fullscreen */
    .menu-section.on {
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: #414141;
      opacity: 95%;

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;

      nav {
        display: block;
        margin: 0;

        ul {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0;

          a {
            height: 25px;
            display: block;
            margin: 0 30px;
            transition-duration: 0.5s;
            font-size: 20px;
            display: block;
            margin-bottom: 10px;
            border-top: 0;
            width: 100%;
            margin-left: 0;
            color: #fff;
          }
        }
      }

      .menu-toggle {
        position: absolute;
        right: 17px;
        top: 30px;

        .one {
          transform: rotate(45deg) translate(7px, 7px);
          background-color: #ccc;
        }
        .two {
          opacity: 0;
        }
        .three {
          transform: rotate(-45deg) translate(8px, -9px);
          background-color: #ccc;
        }
      }
    }
  }

  @media(max-width: 750px){
    .header-top {
      height: 45px;
      justify-content: flex-start !important;

      .social-media {
      display: none;
      }
    }
  }

  @media(max-width: 400px){
    .header-top {
     div{
       display: none;
     }
  }
`;
