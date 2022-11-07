import React from 'react';
import {Layout} from "./containers/layout";
import {ThemeProvider} from "./components/ThemeProvider";
import {MainPage} from "./components/main";
import {SignInForm} from "./containers/signInForm";
import {Global} from "./global";
import {Success} from "./containers/Success";



function App() {
  return (
    <>
    <Global />
    <div className="App">
        <ThemeProvider>
        <Layout>
            <MainPage />
            <SignInForm />
            <Success />
        </Layout>
        </ThemeProvider>
    </div>
    </>
  );
}

export default App;

