import React from 'react';
import {Layout} from "./containers/layout";
import {ThemeProvider} from "./components/ThemeProvider";
import {MainPage} from "./components/main";
import {SignInForm} from "./containers/signInForm";



function App() {
  return (
    <div className="App">
        <ThemeProvider>
        <Layout>
            <MainPage />
            <SignInForm />

        </Layout>
        </ThemeProvider>

    </div>
  );
}

export default App;

