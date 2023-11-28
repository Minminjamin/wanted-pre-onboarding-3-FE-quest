import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Style";

export const SideBar = () => {
  const menu = ["a", "b", "c"];
  const navigate = useNavigate();

  return (
    <S.SideBarContainer>
      {menu.map((item, idx) => (
        <S.Menu key={idx} onClick={() => navigate(`/${item}`)}>
          <S.Text>{item} Page</S.Text>
        </S.Menu>
      ))}
    </S.SideBarContainer>
  );
};
