import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AddLeadModal, AddUserModal } from "../AdminComponents/Models";
import useAuthCheck from "../../Hooks/useAuthCheck";
import { rightsApi } from "../../api/rightsApi";
import Spinner from "../../ui/Spinner";
const Sidebar = () => {
  const { userData } = useAuthCheck();
  const [userRights, setUserRights] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleHandle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const getRights = async () => {
    setLoading(true);
    try {
      const rightsRes = await rightsApi.getRights(userData._id);
      setUserRights(rightsRes.data.modules);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    getRights();
  }, [userData]);
  console.log(userRights);
  return (
    <>
      <AddLeadModal />
      <AddUserModal />

      {loading ? (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            {/* Dashboard - Always visible */}
            <li className="nav-item border-bottom">
              <NavLink
                to="/admin/dashboard"
                className={`nav-link bg-light-50 active-sidebar`}
              >
                <i className="typcn typcn-device-desktop menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </NavLink>
            </li>

            {/* Lead Dropdown - Show if user has any lead rights */}
            {userRights.some(
              (module) =>
                module.name === "LEADS" &&
                (module.rights.entry ||
                  module.rights.list ||
                  module.rights.edit ||
                  module.rights.delete)
            ) && (
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
                    {/* Add Lead - Show only if entry right is true */}
                    {userRights.find((module) => module.name === "LEADS")
                      ?.rights.entry && (
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
                    )}

                    {/* Lead List - Show only if list right is true */}
                    {userRights.find((module) => module.name === "LEADS")
                      ?.rights.list && (
                      <li className="nav-item">
                        <NavLink
                          to="/admin/lead-list"
                          className={`nav-link active-sidebar`}
                        >
                          Lead List
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            )}

            {/* User Dropdown - Show if user has any user rights */}
            {userRights.some(
              (module) =>
                module.name === "USERS" &&
                (module.rights.entry ||
                  module.rights.list ||
                  module.rights.edit ||
                  module.rights.delete)
            ) && (
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
                    {/* Add User - Show only if entry right is true */}
                    {userRights.find((module) => module.name === "USERS")
                      ?.rights.entry && (
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
                    )}

                    {/* Users List - Show only if list right is true */}
                    {userRights.find((module) => module.name === "USERS")
                      ?.rights.list && (
                      <li className="nav-item">
                        <NavLink
                          to="/admin/users-list"
                          className={`nav-link active-sidebar`}
                        >
                          Users List
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            )}

            {/* User Activity Dropdown - Always visible or conditionally based on your requirements */}
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

            {/* Settings Dropdown - Only for Super Admin */}
            {userData?.role === "Super Admin" && (
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
            )}
          </ul>
        </nav>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Sidebar;
