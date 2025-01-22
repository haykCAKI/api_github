import React, { useState } from "react";

import { Container, Sidebar, Main } from "./styles";

import Profile from "./Profile/index";
import Filter from "./filter/index";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

function RepositoriesPage() {
  const [currentLanguage, setLanguage] = useState();

  const user = {
    login: "Nonono",
    name: "Herick Kumata",
    avatar_url: "https://avatars.githubusercontent.com/u/55540536?v=4",
    followers: 0,
    following: 0,
    company: null,
    blog: "https://google.com.br",
    location: "São José dos Campos - SP",
  };

  const repositories = [
    {
      id: "1",
      name: "Repo 1",
      description: "Descrição",
      html_url: "https:google.com.br",
      language: "JavaScript",
    },
    {
      id: "2",
      name: "Repo 2",
      description: "Descrição",
      html_url: "https:google.com.br",
      language: "Java",
    },
    {
      id: "3",
      name: "Repo 3",
      description: "Descrição",
      html_url: "https:google.com.br",
      language: "PHP",
    },
    {
      id: "4",
      name: "Repo 4",
      description: "Descrição",
      html_url: "https:google.com.br",
      language: "Shell",
    },
    {
      id: "5",
      name: "Repo 5",
      description: "Descrição",
      html_url: "https:google.com.br",
      language: "Ruby",
    },
    {
      id: "6",
      name: "Repo 6",
      description: "Descrição",
      html_url: "https:google.com.br",
      language: "Ruby",
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
