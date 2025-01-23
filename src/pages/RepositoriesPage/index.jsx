import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { Loading, Container, Sidebar, Main } from "./styles";

import Profile from "./Profile/index";
import Filter from "./filter/index";
import Repositories from "./Repositories";
import { getUser, getRepos, getLangsFrom } from "../../services/api";

function RepositoriesPage() {

  const {login} = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepos] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setRepos(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

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
