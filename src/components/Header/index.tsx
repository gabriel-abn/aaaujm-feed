import React from "react";

import {
  Container,
  MenuBar,
  NavMain,
  NavItem,
  NavList,
  ItemLink,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <MenuBar>
        Teste 1
        <NavMain>
          <NavList>
            <NavItem>
              <ItemLink>Home</ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink>Notícias</ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink>Área do Louco</ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink>História</ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink>Contato</ItemLink>
            </NavItem>
          </NavList>
        </NavMain>
        Teste 3
      </MenuBar>
    </Container>
  );
};

export default Header;
