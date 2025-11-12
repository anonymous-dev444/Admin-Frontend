import { useNavigate } from "react-router-dom";
import PageNotFoundImage from "/admin/assets/images/404.png";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-3">
      <div className="my-3">
        <img src={PageNotFoundImage} alt="" />
      </div>
      <div className="my-3">
        <button
          onClick={(e) => {
            navigate(-1);
          }}
          className="btn btn-default bg-theme text-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
