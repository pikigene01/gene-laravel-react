import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const { logOut, user } = useContext(AppContext);
  return (
    <aside className="bg-black dk nav-xs aside hidden-print" id="nav">
      <section className="vbox">
        <section className="w-f-md scrollable">
          <div
            className="slim-scroll"
            data-height="auto"
            data-disable-fade-out="true"
            data-distance="0"
            data-size="10px"
            data-railOpacity="0.2"
          >
            <nav className="nav-primary hidden-xs" style={{ height: "80vh" }}>
              <ul className="nav bg clearfix">
                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                  Discover
                </li>
                <li>
                  <Link to="/albums">
                    <i className="icon-disc icon text-success"></i>
                    <span className="font-bold">Albums</span>
                  </Link>
                </li>
                <li>
                  <Link to="/artists">
                    <i className="icon-music-tone-alt icon text-info"></i>
                    <span className="font-bold">Artists</span>
                  </Link>
                </li>

                <li className="m-b hidden-nav-xs"></li>
              </ul>
              <ul className="nav" data-ride="collapse"></ul>
              <ul className="nav text-sm"></ul>
            </nav>
          </div>
        </section>
        <footer className="footer hidden-xs no-padder text-center-nav-xs">
          <div className="bg hidden-xs">
            <div className="dropdown dropup wrapper-sm clearfix">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <span className="thumb-sm avatar pull-left m-l-xs">
                  <img
                    src={user?.avatar ?? "assets/images/a1.png"}
                    className="dker"
                    alt="..."
                  />
                  <i className="on b-black"></i>
                </span>
                <span className="hidden-nav-xs clear">
                  <span className="block m-l">
                    <strong className="font-bold text-lt">
                      {user?.name ?? ""}
                    </strong>
                    <b className="caret"></b>
                  </span>
                  <span className="text-muted text-xs block m-l">
                    Art Director
                  </span>
                </span>
              </a>
              <ul className="dropdown-menu animated fadeInRight aside text-left">
                <li className="divider"></li>
                <li>
                  <span onClick={() => logOut()} style={{ cursor: "pointer" }}>
                    {user ? "Logout" : "Please Login"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </aside>
  );
}
