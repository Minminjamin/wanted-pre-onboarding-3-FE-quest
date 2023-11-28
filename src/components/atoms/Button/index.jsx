import React from "react";
import * as S from "./Style";

export const Button = ({ onHandleClick, text }) => {
  return <S.button onCLick={onHandleClick}>{text}</S.button>;
};
