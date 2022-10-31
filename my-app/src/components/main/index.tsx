import React, {ReactElement} from "react";
import {Title} from "../Title";
import {Tabs} from "./Tabs";

export const MainPage = (): ReactElement => {
  return (
      <>
      <Title text="Blog" />
      <Tabs />
      </>
  )
};