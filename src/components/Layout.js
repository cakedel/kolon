import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SubMain from "./SubMain";

const Layout = ({GNbar}) => {
  return (
    <div>
      <Header />
      <SubMain GNbar={GNbar} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
