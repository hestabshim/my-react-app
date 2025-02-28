import "./App.css";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import AddProfilePage from "./pages/profileEdit";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProfileDetailPage from "./pages/profileDetailed";
import ProfileIndexPage from "./pages/profileIndex";
import ProfileEditPage from "./pages/profileEdit";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ModeContext } from "./contexts/ModeContext";
import { useContext } from "react";

const App = () => {

  const {mode} = useContext(ModeContext);
  return (
    <HashRouter>
      <header>
        <Navbar/>
      </header>
      <main className={mode === "light" ? "light" : "dark"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add-profile" element={<AddProfilePage />} />
          <Route path="/profile/:id" element={<ProfileIndexPage />}>
            <Route index element={<ProfileDetailPage />} />
            <Route path="edit" element={<ProfileEditPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default App;