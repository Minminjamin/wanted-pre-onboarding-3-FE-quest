import styled from "styled-components";

export const SideBarContainer = styled.aside`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Menu = styled.div`
  width: 100%;
`;

export const Text = styled.span`
  font-side: 1.5rem;
  color: black;
  &:hover {
    border-bottom: solid 1px black;
  }
`;
