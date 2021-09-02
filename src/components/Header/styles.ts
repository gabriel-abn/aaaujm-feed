import styled from "styled-components";

export const Container = styled.header`
  background: var(--general-primary);
  height: 15vh;
  width: 100%;
  position: fixed;
  z-index: 500;

  * {
    background: none;
  }
`;

export const MenuBar = styled.div`
  margin: 0 5vw;
  height: 100%;
  background: none;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const NavMain = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  padding: 0 3vw;
  align-items: center;
`;

export const ItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  :hover {
    color: var(--text-secondary);
    border-bottom: 2px solid var(--border-active);
    transition: all 0.25 ease;
  }
`;
