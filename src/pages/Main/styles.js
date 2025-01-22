import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 0 2rem;
`;


export const Logo = styled.img`
  width: 130px;

`;


export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
`;


export const Form = styled.form`
  width: 100%;
  max-width: 583px;
  display: flex;
  aling-items: center;
  justify-content: center;
`;


export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8); /* Fundo preto com transparência */
  color: #fff; /* Cor do texto branca */
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.theme.colors.metaldark || '#ccc'};
  }
`;



export const Button = styled(Link)`
  display:flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;