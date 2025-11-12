import Navbar from "../admin/includes/navbar";
import Sidebar from "../admin/includes/Sidebar";
import Breadcrumb from "../admin/includes/Breadcrumb";
import { Outlet } from "react-router-dom";
import Footer from "../admin/includes/Footer";


const AdminLayout = ({ userData }) => {
  return (
    <>
      <div className="row d-none" id="proBanner">
        <div className="col-12">
          <i className="typcn typcn-delete-outline" id="bannerClose"></i>
        </div>
      </div>
      <div className="container-scroller">
        {/* <!-- partial:partials/_navbar.html --> */}
        <Navbar userData={userData} />
        {/* <!-- partial --> */}
        <Breadcrumb />
        <div className="container-fluid page-body-wrapper ">
          <Sidebar />
          <div className="main-panel  py-2 rounded-3  ml-3 mb-3">
            {/* <!-- partial:partials/_sidebar.html --> */}
            {/* <!-- partial --> */}
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
