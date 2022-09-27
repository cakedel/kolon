import Wrapper from "./components/Wrapper";
import MainVisual from "./components/MainVisual";
import MainContents from "./components/MainContents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <main>
        <Routes>
          <Route path="" element={<MainVisual />} />
        </Routes>
        <Routes>
          <Route path="" element={<MainContents />} />
        </Routes>
        <Routes>
          <Route path="" element={<Stock />} />
        </Routes>
      </main>
      <Footer />
    </Wrapper>
  );
}

export default App;
