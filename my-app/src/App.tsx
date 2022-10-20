import React from 'react';
import {Button} from "./components/button";
import {Title} from "./components/Title";
import {Index} from "./components/User About";
import {CustomInput} from "./components/custom input";

function App() {
  return (
    <div className="App">
        <Title text="Sign In" />
        <Index username ="Yulia Sankevich" />
        <Button type={'default'}/>
        <CustomInput type={'password'} />
        <CustomInput type={'email'} />
    </div>
  );
}

export default App;
