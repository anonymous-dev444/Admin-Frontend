import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../ui/Spinner";

const ViewProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const { id } = useParams();
  //Tab Variables
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/get-user/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!res.ok) {
        toast.error("Somthing went wrong!");
      } else {
        const data = await res.json();
        setUserData(data.user);
      }
    };
    getUser();
  }, [id]);

  const handleTabSelect = (eventKey) => {
    // If 'profile' is selected, stay on the current component (no navigation needed)
    if (eventKey === "profile") {
      setActiveTab("profile");
      navigate(`/admin/profile/${id}`);
    }
    // If 'rights' is selected, navigate to the desired URL
    else if (eventKey === "rights") {
      // Navigate to the desired route, incorporating the user ID
      setActiveTab("rights");
      navigate(`/admin/user-rights/${id}`);
    }
  };

  if (!userData) {
    // optional loader UI
    return (
      <p className="text-center my-5">
        <Spinner />
      </p>
    );
  }

  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        activeKey={activeTab} // <-- Use state for active tab
        onSelect={handleTabSelect}
      >
        {/* Profile */}
        <Tab eventKey="profile" title="Profile">
          <UserProfileTab userData={userData} />
        </Tab>

        <Tab eventKey="rights" title="Rights">
          <UserRightsTab userData={userData} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ViewProfile;

const UserProfileTab = ({ userData }) => {
  return (
    <>
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title ">Profile Info</h4>
            <form className="form-sample">
              <div className="row mb-3">
                <div className="col-4 mx-auto justify-content-center d-flex">
                  <div className="form-group d-flex justify-content-center align-items-center border rounded-3">
                    <div className="profile-img w-50 rounded-full overflow-hidden">
                      <img
                        src={
                          userData.image !== null
                            ? import.meta.env.VITE_BACKEND_API +
                              "/uploads/" +
                              userData.image
                            : "/assets/img/profile/Default_pfp.png"
                        }
                        alt=""
                        className="w-100 mx-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <label for="">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Name"
                      disabled
                      value={userData.user_id}
                    />
                  </div>
                  <div className="form-group">
                    <label for="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder="Name"
                      disabled
                      value={userData.name}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Gender</label>
                    <div className="col-sm-9">
                      <select
                        className="form-control text-dark"
                        disabled
                        value={userData.gender}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Designation
                    </label>
                    <div className="col-sm-9">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={userData.role}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Mobile</label>
                    <div className="col-sm-9">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={userData.mobile}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Email ID</label>
                    <div className="col-sm-9">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={userData.email_id}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Reg.Date</label>
                    <div className="col-sm-9">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={
                          userData && new Date(userData.date).toLocaleString()
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Status</label>
                    <div className="col-sm-9">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        value={userData.status}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const UserRightsTab = () => {
const [loading,setLoading] =useState(false);

  const [modules, setModules] = useState([
    {
      name: "LEADS",
      rights: { entry: false, edit: false, list: false, delete: false },
    },
    {
      name: "USRES",
      rights: { entry: false, edit: false, list: false, delete: false },
    },
  ]);

  // 🔹 Handle module checkbox click (toggle all rights)
  const handleModuleToggle = (index) => {
    const updated = [...modules];
    const allChecked = Object.values(updated[index].rights).every(Boolean);
    updated[index].rights = {
      entry: !allChecked,
      edit: !allChecked,
      list: !allChecked,
      delete: !allChecked,
    };
    setModules(updated);
  };

  // 🔹 Handle individual right checkbox click
  const handleRightChange = (index, right) => {
    const updated = [...modules];
    updated[index].rights[right] = !updated[index].rights[right];

    // If any right is true, mark module as checked (automatically handled by render)
    setModules(updated);
  };

  // 🔹 Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/api/rights`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(modules),
        }
      );

      if (response.ok) {
        alert("Rights saved successfully!");
      } else {
        alert("Failed to save rights.");
      }
    } catch (error) {
      console.error("Error:", error);
      throw new Error(error);
    }finally{
      setLoading(false)
    }
  };
  console.log(modules);

  return (
    <div className="col-12 grid-margin">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">User Access Rights </h4>

          <form onSubmit={handleSubmit}>
            <div className="table-responsive border rounded-3">
              <table className="table border  table-bordered text-center align-middle mb-4">
                <thead className="table-light">
                  <tr>
                    <th className="text-start ps-4">MODULE</th>
                    <th>Entry</th>
                    <th>Edit</th>
                    <th>List</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {modules.map((mod, index) => {
                    const allChecked = Object.values(mod.rights).every(Boolean);
                    const anyChecked = Object.values(mod.rights).some(Boolean);

                    return (
                      <tr key={index}>
                        <td className="text-start ps-4">
                          <div className="form-check d-inline-flex align-items-center">
                            <input
                              type="checkbox"
                              className="form-check-input me-2 border border-secondary-subtle "
                              checked={allChecked || anyChecked}
                              indeterminate={
                                !allChecked && anyChecked ? "true" : undefined
                              }
                              onChange={() => handleModuleToggle(index)}
                            />
                            <label className="form-check-label fw-semibold">
                              {mod.name}
                            </label>
                          </div>
                        </td>

                        {Object.keys(mod.rights).map((right) => (
                          <td key={right}>
                            <div className="form-check d-flex justify-content-center">
                              <input
                                type="checkbox"
                                className="form-check-input border border-secondary-subtle"
                                checked={mod.rights[right]}
                                onChange={() => handleRightChange(index, right)}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="text-end mt-3">
              <button type="submit" className="btn btn-success px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
