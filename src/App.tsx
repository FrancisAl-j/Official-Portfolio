import { lazy, Suspense } from "react";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import LoadingPage from "./components/LoadingPage";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <main className="relative">
          <ScrollTop />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
