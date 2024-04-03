import { Link } from "react-router-dom";

export default function Header() {
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
              className="form-control input-sm no-border rounded"
              placeholder="Search songs, albums..."
            />
          </div>
        </div>
      </form>
      <div className="navbar-right">
        <ul className="nav navbar-nav m-n hidden-xs nav-user user">
          <li className="hidden-xs">
            <a href="#" className="dropdown-toggle lt" data-toggle="dropdown">
              <i className="icon-bell"></i>
              <span className="badge badge-sm up bg-danger count">2</span>
            </a>
            <section className="dropdown-menu aside-xl animated fadeInUp">
              <section className="panel bg-white">
                <div className="panel-heading b-light bg-light">
                  <strong>
                    You have
                    <span className="count">0</span> notifications
                  </strong>
                </div>
                <div className="list-group list-group-alt">
                  <a href="#" className="media list-group-item">
                    <span className="pull-left thumb-sm">
                      <img
                        src="images/a0.png"
                        alt="..."
                        className="img-circle"
                      />
                    </span>
                    <span className="media-body block m-b-none">
                      Use awesome animate.css
                      <br />
                      <small className="text-muted">10 minutes ago</small>
                    </span>
                  </a>
                  <a href="#" className="media list-group-item">
                    <span className="media-body block m-b-none">
                      1.0 initial released
                      <br />
                      <small className="text-muted">1 hour ago</small>
                    </span>
                  </a>
                </div>
                <div className="panel-footer text-sm">
                  <a href="#" className="pull-right">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a
                    href="#notes"
                    data-toggle="className:show animated fadeInRight"
                  >
                    See all the notifications
                  </a>
                </div>
              </section>
            </section>
          </li>
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle bg clear"
              data-toggle="dropdown"
            >
              <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="images/a0.png" alt="..." />
              </span>
              Gene.Piki <b className="caret"></b>
            </a>
            <ul className="dropdown-menu animated fadeInRight">
              <li>
                <span className="arrow top"></span> <a href="#">Settings</a>
              </li>
              <li>
                <a href="profile.html">Profile</a>
              </li>
              <li>
                <a href="#">
                  <span className="badge bg-danger pull-right">3</span>
                  Notifications
                </a>
              </li>
              <li>
                <a href="docs.html">Help</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="modal.lockme.html" data-toggle="ajaxModal">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
