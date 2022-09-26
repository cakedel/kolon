
import Wrapper from "./components/Wrapper";
import MainVisual from "./components/MainVisual";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <main>
        <MainVisual />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default App;
