import React, {ReactElement} from "react";
import {Title} from "../Title";
import {Tabs} from "./Tabs";
import {Main} from "./style";

export const MainPage = (): ReactElement => {
  return (
      <>
      <Main>
        <Title text="Blog" />
        <Tabs />
      </Main>
      </>
  )
};