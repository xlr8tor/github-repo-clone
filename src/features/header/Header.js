import NavItem from "../navItem/NavItem";
import Pill from "../pill/Pill";
import { Wrapper } from "./Header.styles";
import {
  UilBookOpen,
  UilFavorite,
  UilCube,
  UilBookAlt,
  UilNotes,
} from "@iconscout/react-unicons";
import { useSelector } from "react-redux";

const Header = () => {
  const repoCount = useSelector((state) => state.auth.user.public_repos);
  return (
    <Wrapper className="header">
      <nav className="nav container">
        <div className="nav__menu grid">
          <div className="layout-sidebar"></div>
          <div className="layout-main">
            <ul className="nav__list grid">
              <NavItem>
                <UilBookOpen className="nav__icon" size="16" />
                <span>Overview</span>
              </NavItem>
              <NavItem>
                <UilBookAlt className="nav__icon" size="16" />
                <span>Repositories</span>
                <Pill content={repoCount} />
              </NavItem>
              <NavItem>
                <UilNotes className="nav__icon" size="16" />
                <span>Projects</span>
              </NavItem>
              <NavItem>
                <UilCube className="nav__icon" size="16" />
                <span>Packages</span>
              </NavItem>
              <NavItem>
                <UilFavorite className="nav__icon" size="16" />
                <span>Stars</span>
                <Pill content="234" />
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
