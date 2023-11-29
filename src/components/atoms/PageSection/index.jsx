import React from "react";
import * as S from "./Style";

export const PageSection = ({ page }) => {
  return (
    <S.PageContainer>
      <span>This is Page {page}</span>
    </S.PageContainer>
  );
};
