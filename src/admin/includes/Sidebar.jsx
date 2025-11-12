import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AddLeadModal, AddUserModal } from "../AdminComponents/Models";
import useAuthCheck from "../../Hooks/useAuthCheck";
const Sidebar = () => {
  const { userData } = useAuthCheck();

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleHandle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <AddLeadModal />
      <AddUserModal />

      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          {/* Dashboard */}
          <li className="nav-item border-bottom">
            <NavLink
              to="/admin/dashboard"
              className={`nav-link bg-light-50 active-sidebar`}
            >
              <i className="typcn typcn-device-desktop menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </NavLink>
          </li>

          {/* Lead Dropdown */}
          <li className="nav-item border-bottom">
            <Link
              onClick={() => toggleHandle("leadDropdown")}
              className="nav-link bg-light"
              aria-expanded={openDropdown === "leadDropdown"}
              aria-controls="leadDropdown"
            >
              <i className="typcn typcn-document-text menu-icon"></i>
              <span className="menu-title">Lead</span>
              <i className="menu-arrow"></i>
            </Link>

            <div
              className={`sub-menu-wrapper ${
                openDropdown === "leadDropdown" ? "show" : "hide"
              }`}
              id="leadDropdown"
            >
              <ul className="nav flex-column sub-menu">
                <li className="nav-item border-bottom">
                  <Link
                    className="nav-link add-items text-success"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addLead"
                  >
                    Add Lead
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/lead-list"
                    className={`nav-link active-sidebar`}
                  >
                    Lead List
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* User Dropdown */}
          <li className="nav-item border-bottom">
            <Link
              onClick={() => toggleHandle("userDropdown")}
              className="nav-link bg-light"
              aria-expanded={openDropdown === "userDropdown"}
              aria-controls="userDropdown"
            >
              <i className="typcn typcn-group-outline menu-icon"></i>
              <span className="menu-title">Users</span>
              <i className="menu-arrow"></i>
            </Link>

            <div
              className={`sub-menu-wrapper ${
                openDropdown === "userDropdown" ? "show" : "hide"
              }`}
              id="userDropdown"
            >
              <ul className="nav flex-column sub-menu">
                <li className="nav-item border-bottom">
                  <Link
                    className="nav-link add-items text-success"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addUser"
                  >
                    Add User
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/admin/user-list"
                    className={`nav-link active-sidebar`}
                  >
                    Users List
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* User Activity Dropdown */}
          <li className="nav-item border-bottom">
            <Link
              onClick={() => toggleHandle("userActivityDropdown")}
              className="nav-link bg-light"
              aria-expanded={openDropdown === "userActivityDropdown"}
              aria-controls="userActivityDropdown"
            >
              <i className="typcn typcn-chart-area-outline menu-icon"></i>
              <span className="menu-title">Users Activity</span>
              <i className="menu-arrow"></i>
            </Link>

            <div
              className={`sub-menu-wrapper ${
                openDropdown === "userActivityDropdown" ? "show" : "hide"
              }`}
              id="userActivityDropdown"
            >
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink
                    to="/admin/users-activity"
                    className={`nav-link active-sidebar`}
                  >
                    Users Activity
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* Settings Dropdown */}
          {userData?.role === "Super Admin" ? (
            <li className="nav-item border-bottom">
              <Link
                onClick={() => toggleHandle("settingDropdown")}
                className="nav-link bg-light "
                aria-expanded={openDropdown === "settingDropdown"}
                aria-controls="settingDropdown"
              >
                <i className="typcn typcn-cog-outline menu-icon"></i>
                <span className="menu-title ">Settings</span>
                <i className="menu-arrow "></i>
              </Link>

              <div
                className={`sub-menu-wrapper ${
                  openDropdown === "settingDropdown" ? "show" : "hide"
                }`}
                id="settingDropdown"
              >
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item border-bottom">
                    <NavLink
                      to="/admin/settings/"
                      className={`nav-link active-sidebar`}
                    >
                      Manage Company
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
