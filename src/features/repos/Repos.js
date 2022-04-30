import Repo from "../repo/Repo";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { Container, Wrapper } from "./Repos.styles";

const Repos = () => {
  const repos = useSelector((state) => state.auth.repos);
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
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Repos;
