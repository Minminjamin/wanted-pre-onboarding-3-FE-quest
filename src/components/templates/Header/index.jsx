import React from "react";
import { Button } from "../../atoms";
import * as S from "./Style";

export const Header = ({ id = null }) => {
  return (
    <S.HeaderContainer>
      <S.Logo>Wanted Pre-onboarding course</S.Logo>
      {id ? (
        <S.LogoutWrap>
          <S.UserName>{id}님</S.UserName>
          <Button>로그아웃</Button>
        </S.LogoutWrap>
      ) : (
        <Button>로그인</Button>
      )}
    </S.HeaderContainer>
  );
};
