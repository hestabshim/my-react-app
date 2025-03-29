import "./App.css";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import AddProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProfileDetailPage from "./pages/profileDetailed";
import ProfileEditPage from "./pages/profileEdit";
import ProfileIndexPage from "./pages/profileIndex";
import Login from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import ModeContext from "./contexts/ModeContext"; 
import { useContext } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { lazy, Suspense } from "react";

const App = () => {
  const LazyComponent = lazy(() => import("./pages/profileDetailed"));
  const { mode } = useContext(ModeContext);

  return (
    <AuthProvider>
      <HashRouter>
        <header>
          <Navbar />
        </header>
        <main className={mode === "light" ? "light" : "dark"}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/add-profile" element={
              <ProtectedRoute>
                <AddProfilePage />
              </ProtectedRoute>
              } />
            <Route path="/profile/:id" element={<ProfileIndexPage />}>
            <Route index element={<Suspense fallback = {<div>Loading...</div>}><LazyComponent /></Suspense>} />
            <Route path="edit" element={<ProtectedRoute><ProfileEditPage /></ProtectedRoute>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;