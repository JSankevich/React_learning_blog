import React from 'react';
import {Layout} from "./containers/layout";
import {ThemeProvider} from "./components/ThemeProvider";
import {MainPage} from "./components/main";
import {SignInForm} from "./containers/signInForm";
import {Global} from "./global";
import {Routes, Route} from "react-router-dom";
import {SelectedPost} from "./containers/SelectedPost";
import {SignUpForm} from "./containers/SignUpForm";
import {Switcher} from "./components/switcher";
import {ActivationRoute} from "./containers/ActivationRoute";


function App() {
  return (
    <>
    <Global />
    <div className="App">
        <ThemeProvider>
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/SignIn" element={<SignInForm />} />
                <Route path="/SignUp" element={<SignUpForm />} />
                <Route path="/post/:id" element={<SelectedPost />} />
                <Route path="/activate/:uid/:token" element={<ActivationRoute />} />
            </Routes>
        </Layout>
        </ThemeProvider>
    </div>
    </>
  );
}

export default App;

