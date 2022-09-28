import Wrapper from "./components/Wrapper";
import MainVisual from "./components/MainVisual";
import MainContents from "./components/MainContents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Stock from "./components/Stock";
import Company from "./components/Company";
import Business from "./components/Business";
function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainVisual />} />
          <Route path="/company" element={<Company />} />
          <Route path="/business" element={<Business />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
        <Routes>
          <Route path="/" element={<MainContents />} />
        </Routes>
      </main>
      <Footer />
    </Wrapper>
  );
}

export default App;
