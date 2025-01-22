import React, {useState} from "react";

import { MdOutlineSearch } from "react-icons/md";

import { Container , Logo, Title, Form, Input, Button} from "./styles";

import githubLogo from '../../assets/images/github-mark-white.png';

function Main() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github"/>
      <Title>API Github</Title>
      <Form>
        <Input 
          placeholder="usuário" 
          value={login} 
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdOutlineSearch size={42} color="fff"/>
        </Button>
      </Form>
    </Container>
  );
}


export default Main;
