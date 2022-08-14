import { Outlet } from "react-router-dom";
import SideMenu from "../components/sideMenu/SideMenu";
function Home() {
  return (
    <div className="d-flex">
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default Home;
