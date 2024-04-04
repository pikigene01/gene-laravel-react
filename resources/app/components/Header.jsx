import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";

export default function Header() {
  const { handleSearch, logOut, user, searchValue } = useContext(AppContext);
  return (
    <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
      <div className="navbar-header aside bg-info nav-xs">
        <a
          className="btn btn-link visible-xs"
          data-toggle="className:nav-off-screen,open"
          data-target="#nav,html"
        >
          <i className="icon-list"></i>
        </a>
        <Link to="/" className="navbar-brand text-lt">
          <i className="icon-earphones"></i>
          <img src="assets/images/logo.png" alt="." className="hide" />
          <span className="hidden-nav-xs m-l-sm">Musik</span>
        </Link>
        <a
          className="btn btn-link visible-xs"
          data-toggle="dropdown"
          data-target=".user"
        >
          <i className="icon-settings"></i>
        </a>
      </div>
      <ul className="nav navbar-nav hidden-xs">
        <li>
          <a
            href="#nav,.navbar-header"
            data-toggle="className:nav-xs,nav-xs"
            className="text-muted"
          >
            <i className="fa fa-indent text"></i>
            <i className="fa fa-dedent text-active"></i>
          </a>
        </li>
      </ul>
      <form
        className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs"
        role="search"
      >
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-btn">
              <button
                type="submit"
                className="btn btn-sm bg-white btn-icon rounded"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => handleSearch(e)}
              className="form-control input-sm no-border rounded"
              placeholder="Search artists, albums..."
            />
          </div>
        </div>
      </form>
      <div className="navbar-right">
        <ul className="nav navbar-nav m-n hidden-xs nav-user user">
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle bg clear"
              data-toggle="dropdown"
            >
              <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src={user?.avatar ?? "/assets/images/a1.png"} alt="..." />
              </span>
              {user?.name ?? ""} <b className="caret"></b>
            </a>
            <ul className="dropdown-menu animated fadeInRight">
              <li className="divider"></li>
              <li>
                <span onClick={() => logOut()} style={{ cursor: "pointer" }}>
                  {user ? "Logout" : "Please Login"}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
