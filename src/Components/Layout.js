import Sidebar from "./UI/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className='absolute left-24'>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;