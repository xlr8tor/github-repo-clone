import Repo from "../repo/Repo";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { Container, Wrapper } from "./Repos.styles";

const Repos = () => {
  const repos = useSelector((state) => {
    let newState = [...state.auth.repos];
    if (state.auth.sort) {
      newState = newState.sort((a, b) => b["name"].localeCompare(a["name"]));
    }

    if (state.auth.filter) {
      newState = newState.filter((item) => {
        if (state.auth.filter != "All") {
          return item.language === state.auth.filter;
        }
        return item;
      });
    }
    return newState;
  });

  return (
    <Container className="layout-main">
      <Search />
      <Wrapper>
        {repos.map((item) => {
          return (
            <Repo
              key={item.id}
              name={item.name}
              language={item.language}
              visibility={item.visibility}
              updated={item.updated_at}
              description={item.description}
              fork={item.fork}
              forks_url={item.forks_url}
              stargazers_count={item.stargazers_count}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Repos;
