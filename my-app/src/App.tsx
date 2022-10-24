import React from 'react';
import {Button} from "./components/button";
import {Title} from "./components/Title";
import {Index} from "./components/BurgerMenu/User About";
import {CustomInput} from "./components/custom input";
import {Layout} from "./containers/layout";
import {Burger} from "./components/BurgerMenu";

function App() {
  return (
    <div className="App">
        <Layout>
        <Title text="Sign In" />
        <Button type={'Primary'}/>
        </Layout>
    </div>
  );
}

export default App;
