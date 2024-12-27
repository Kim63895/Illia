import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About-me/About-me";
import { ThemeContext, themes } from "./components/Context/themeContext";
import ErrorBoudary from "./components/ErrorBoundary/ErroBoundary";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [theme, setTheme] = useState(themes.white);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <BrowserRouter>
        <ErrorBoudary>
          <div
            className="container"
            style={{ background: theme.background, color: theme.color }}
          >
            <Header />
            <main>
              <Routes>
                <Route path="*" element={<NotFound/>} /> 
                <Route path="/" element={<Main />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
          </div>
        </ErrorBoudary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
