import {ReactElement, useState} from "react";
import {TabsLine, TabsContent, Tab, ContentFor1Tab, ContentFor2Tab, ContentFor3Tab} from "./style";
import {BigCardWrapper} from "../Cards";

export const Tabs = ():ReactElement => {
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    const activeTabOpen = (index:number) => {
        console.log(index);
        setActiveTabIndex(index);
    }

  return (
      <>
      <TabsLine>
        <Tab className={activeTabIndex === 1 ? "active" : ""} onClick={() => activeTabOpen (1)}>All</Tab>
        <Tab className={activeTabIndex === 2 ? "active" : ""} onClick={() => activeTabOpen (2)}>My favorites</Tab>
        <Tab className={activeTabIndex === 3 ? "active" : ""} onClick={() => activeTabOpen (3)}>Popular</Tab>
      </TabsLine>
      <TabsContent>
          <ContentFor1Tab className={activeTabIndex === 1 ? "active-content" : ""}>
              <BigCardWrapper />
          </ContentFor1Tab>
          <ContentFor2Tab className={activeTabIndex === 2 ? "active-content" : ""}>Hi2</ContentFor2Tab>
          <ContentFor3Tab className={activeTabIndex === 3 ? "active-content" : ""}>Hi3</ContentFor3Tab>
      </TabsContent>
      </>
  )
};