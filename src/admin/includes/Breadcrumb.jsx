import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Break the path into parts (excluding empty and "admin")
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x.toLowerCase() !== "admin");

  // Capitalize first letter of each word
  const formatName = (name) =>
    name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <nav
      className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0"
      style={{ height: "45px" }}
    >
      {/* Left Side Icons */}
      <div
        className="navbar-links-wrapper d-flex align-items-stretch bg-dark"
        style={{ height: "45px" }}
      >
        <div className="nav-link bg-danger">
          <a href="#">
            <i className="typcn typcn-calendar-outline"></i>
          </a>
        </div>
        <div className="nav-link bg-warning">
          <a href="#">
            <i className="typcn typcn-mail"></i>
          </a>
        </div>
        <div className="nav-link bg-primary">
          <a href="#">
            <i className="typcn typcn-folder"></i>
          </a>
        </div>
        <div className="nav-link bg-success">
          <a href="#">
            <i className="typcn typcn-document-text"></i>
          </a>
        </div>
      </div>

      {/* Right Side Breadcrumb */}
      <div
        className="navbar-menu-wrapper d-flex align-items-center justify-content-end position-relative"
        style={{ height: "45px" }}
      >
        <ul className="navbar-nav mr-lg-2 py-2 position-absolute start-0">
          <li className="nav-item">
            <div className="d-flex align-items-baseline flex-wrap">
              <Link to="/" className="text-white mb-0 text-decoration-none">
                Home
              </Link>

              {pathnames.length > 0 && (
                <>
                  {pathnames.map((value, index) => {
                    // Split "lead-list" into ["lead", "list"]
                    const words = value.split("-");
                    return words.map((word, wordIndex) => {
                      const isLast =
                        index === pathnames.length - 1 &&
                        wordIndex === words.length - 1;

                      return (
                        <React.Fragment key={`${index}-${word}`}>
                          <i className="typcn typcn-chevron-right mx-1"></i>
                          {isLast ? (
                            <p className="mb-0 text-light">
                              {formatName(word)}
                            </p>
                          ) : (
                            <span className="text-white text-decoration-none">
                              {formatName(word)}
                            </span>
                          )}
                        </React.Fragment>
                      );
                    });
                  })}
                </>
              )}
            </div>
          </li>
        </ul>

        {/* Search Box */}
        <ul className="navbar-nav navbar-nav-right " hidden>
          <li className="nav-item nav-search d-none d-md-block mr-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="search"
                aria-describedby="search"
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="search">
                  <i className="typcn typcn-zoom"></i>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
