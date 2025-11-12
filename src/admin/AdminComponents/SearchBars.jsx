import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LeadListSearchBar = ({ filters, setFilters, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(); // triggers fetch in parent (LeadList)
  };

  const handleReset = () => {
    setFilters({ name: "", email_id: "", mobile: "" });
    // ✅ Remove query params from URL
    queryParams.delete("name");
    queryParams.delete("email_id");
    queryParams.delete("mobile");

    // ✅ Update the URL
    window.history.replaceState({}, "", window.location.pathname);
    onSearch();
  };

  return (
    <>
      <form
        className="d-flex align-items-start justify-content-between flex-wrap flex-md-nowrap gap-2 mb-2  "
        role="search"
        onSubmit={handleSubmit}
      >
        <div className="d-flex align-items-start justify-content-between flex-wrap flex-md-nowrap w-100 gap-2 pr-3 pr-md-0">
          <input
            className="form-control form-control mb-0"
            type="search"
            placeholder="Name"
            name="name"
            aria-label="Search"
            onChange={handleChange}
            value={filters.name}
          />
          {/* <input
            className="form-control form-control mb-0"
            type="search"
            placeholder="Mobile"
            name="mobile"
            aria-label="Search"
            onChange={handleChange}
          /> */}
          <input
            className="form-control form-control mb-0"
            type="search"
            placeholder="Email"
            name="email_id"
            aria-label="Search"
            onChange={handleChange}
            value={filters.email_id}
          />
        </div>
        <div className="d-flex gap-1 align-items-start">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" btn btn-primary bg-primay btn-sm "
          >
            <span>
              <i className="typcn typcn-zoom text-white"></i>
            </span>
          </button>

          <button
            className=" btn btn-danger btn-sm"
            type="button"
            onClick={handleReset}
          >
            <span>
              <i className="typcn typcn-arrow-sync text-white"></i>
            </span>
          </button>
          <button className=" btn btn-success btn-sm  " type="button">
            <span>
              <i className="typcn typcn-export-outline  text-white"></i>
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export const UserListSearchBar = ({
  filters,
  setFilters,
  onSearch,
  setLoading,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(); // triggers fetch in parent (LeadList)
  };
  return (
    <>
      <form
        className="d-flex flex-wrap flex-lg-nowrap gap-2 mb-3  bg-light shadow-sm py-1 px-2 border rounded-3 align-items-center "
        role="search"
        onSubmit={handleSubmit}
      >
        <div className="d-flex gap-1 w-100 flex-wrap pr-3 pr-md-0">
          <div className="flex-grow">
            <input
              className="form-control  form-group mb-0 flex-grow-1 "
              type="search"
              placeholder="Name"
              name="name"
              aria-label="Search"
              onChange={handleChange}
              value={filters.name}
            />
          </div>
          <div className="flex-grow">
            <input
              className="form-control  mb-0"
              type="search"
              placeholder="Mobile"
              name="mobile"
              aria-label="Search"
              onChange={handleChange}
              value={filters.mobile}
            />
          </div>
          <div className="flex-grow">
            <input
              className="form-control  mb-0"
              type="search"
              placeholder="Email"
              name="email_id"
              aria-label="Search"
              onChange={handleChange}
              value={filters.email_id}
            />
          </div>
          <div className="my-auto">
            <select
              className="form-select  "
              name="gender"
              aria-label="Search"
              onChange={handleChange}
              value={filters.gender}
            >
              <option value="">Gender</option>
              <option className="form-control" value="Male">
                Male
              </option>
              <option className="form-control" value="Female">
                Female
              </option>
              <option className="form-control" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="my-auto">
            <select
              className="form-select "
              name="role"
              aria-label="Search"
              onChange={handleChange}
              value={filters.role}
            >
              <option value="">Role</option>
              <option className="form-control" value="User">
                User
              </option>
              <option className="form-control" value="Admin">
                Admin
              </option>
              <option className="form-control" value="Super Admin">
                Super Admin
              </option>
            </select>
          </div>
          <div className="my-auto">
            <select
              className="form-select  "
              aria-label="Default select example"
              name="status"
              onChange={handleChange}
              value={filters.status}
            >
              <option value="">Status</option>
              <option className="form-control" value="Enabled">
                Enabled
              </option>
              <option className="form-control" value="Disabled">
                Disabled
              </option>
            </select>
          </div>
        </div>
        <div className="d-flex gap-1 align-items-start">
          <button type="submit" className=" btn btn-primary bg-primay btn-sm ">
            <span>
              <i className="typcn typcn-zoom text-white"></i>
            </span>
          </button>

          <button className=" btn btn-danger btn-sm" type="button">
            <span>
              <i className="typcn typcn-arrow-sync text-white"></i>
            </span>
          </button>
          <button className=" btn btn-success btn-sm  " type="button">
            <span>
              <i className="typcn typcn-export-outline  text-white"></i>
            </span>
          </button>
        </div>
      </form>
    </>
  );
};
export const UsersActivitySearchBar = ({
  filters,
  setFilters,
  onSearch,
  setAppliedFilters,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1;

  const [page, setPage] = useState(currentPage);
  const [limit, setLimit] = useState(15);
  const params = new URLSearchParams({
    page,
    limit,
    user: "",
    action: "",
    role: "",
  }).toString();

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(); // triggers fetch in parent (LeadList)
  };

  const clearQuery = (e) => {
    e.preventDefault();
    // Reset filters to blank
    const cleared = { role: "", user: "", action: "" };
    setFilters(cleared);
    setAppliedFilters(cleared); // ensures API resets filters too
    // Clear query params in the URL
    navigate(`?page=1&limit=${limit}`, { replace: true });
  };
  const getUsers = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/get-all-users`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!res.ok) {
        const data = await res.json();
        toast.error(data.message);
      } else {
        const data = await res.json();
        setUsers(data.users);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <form
        className="d-flex flex-wrap align-items-center flex-lg-nowrap gap-2 mb-3  bg-light shadow-sm py-1 px-2 border rounded-3"
        role="search"
        onSubmit={handleSubmit}
      >
        <div className="d-flex gap-1 w-100 flex-wrap pr-3 pr-md-0">
          <div className=" ">
            <select
              className="form-select  "
              name="user"
              aria-label="Search"
              onChange={handleChange}
              value={filters.user}
            >
              <option value="">All Users</option>
              {users &&
                users.map((user, idx) => (
                  <option key={idx} className="form-control" value={user._id}>
                    {user.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="">
            <select
              className="form-select "
              name="action"
              aria-label="Search"
              onChange={handleChange}
              value={filters.action}
            >
              <option value="">Action</option>
              <option className="form-control" value="Log In">
                Log In
              </option>
              <option className="form-control" value="Log Out">
                Log Out
              </option>
              <option className="form-control" value="User Create">
                User Create
              </option>
              <option className="form-control" value="User Profile Update">
                User Profile Update
              </option>
              <option className="form-control" value="User Delete">
                User Delete
              </option>
            </select>
          </div>

          <div className="">
            <select
              className="form-select "
              name="role"
              aria-label="Search"
              onChange={handleChange}
              value={filters.role}
            >
              <option value="">Role</option>
              <option className="form-control" value="User">
                User
              </option>
              <option className="form-control" value="Admin">
                Admin
              </option>
              <option className="form-control" value="Super Admin">
                Super Admin
              </option>
            </select>
          </div>
        </div>

        <div className="d-flex gap-1 align-items-start">
          <button type="submit" className=" btn btn-primary bg-primay btn-sm ">
            <span>
              <i className="typcn typcn-zoom text-white"></i>
            </span>
          </button>

          <button
            onClick={clearQuery}
            className=" btn btn-danger btn-sm"
            type="button"
          >
            <span>
              <i className="typcn typcn-arrow-sync text-white"></i>
            </span>
          </button>
          <button className=" btn btn-success btn-sm  " type="button">
            <span>
              <i className="typcn typcn-export-outline  text-white"></i>
            </span>
          </button>
        </div>
      </form>
    </>
  );
};
