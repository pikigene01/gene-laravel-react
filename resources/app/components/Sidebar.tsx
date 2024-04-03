import React from "react";

export default function Sidebar() {
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
            <nav className="nav-primary hidden-xs">
              <ul className="nav bg clearfix">
                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                  Discover
                </li>
                <li>
                  <a href="index.html">
                    <i className="icon-disc icon text-success"></i>
                    <span className="font-bold">What's new</span>
                  </a>
                </li>
                <li>
                  <a href="genres.html">
                    <i className="icon-music-tone-alt icon text-info"></i>
                    <span className="font-bold">Genres</span>
                  </a>
                </li>
                <li>
                  <a href="events.html">
                    <i className="icon-drawer icon text-primary-lter"></i>
                    <b className="badge bg-primary pull-right">6</b>
                    <span className="font-bold">Events</span>
                  </a>
                </li>
                <li>
                  <a href="listen.html">
                    <i className="icon-list icon text-info-dker"></i>
                    <span className="font-bold">Listen</span>
                  </a>
                </li>
                <li>
                  <a
                    href="video.html"
                    data-target="#content"
                    data-el="#bjax-el"
                    data-replace="true"
                  >
                    <i className="icon-social-youtube icon text-primary"></i>
                    <span className="font-bold">Video</span>
                  </a>
                </li>
                <li className="m-b hidden-nav-xs"></li>
              </ul>
              <ul className="nav" data-ride="collapse">
                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                  Interface
                </li>
                <li>
                  <a href="#" className="auto">
                    <span className="pull-right text-muted">
                      <i className="fa fa-angle-left text"></i>
                      <i className="fa fa-angle-down text-active"></i>
                    </span>
                    <i className="icon-screen-desktop icon"> </i>
                    <span>Layouts</span>
                  </a>
                  <ul className="nav dk text-sm">
                    <li>
                      <a href="layout-color.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Color option</span>
                      </a>
                    </li>
                    <li>
                      <a href="layout-boxed.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Boxed layout</span>
                      </a>
                    </li>
                    <li>
                      <a href="layout-fluid.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Fluid layout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="auto">
                    <span className="pull-right text-muted">
                      <i className="fa fa-angle-left text"></i>
                      <i className="fa fa-angle-down text-active"></i>
                    </span>
                    <i className="icon-chemistry icon"> </i>
                    <span>UI Kit</span>
                  </a>
                  <ul className="nav dk text-sm">
                    <li>
                      <a href="buttons.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Buttons</span>
                      </a>
                    </li>
                    <li>
                      <a href="icons.html" className="auto">
                        <b className="badge bg-info pull-right">369</b>
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Icons</span>
                      </a>
                    </li>
                    <li>
                      <a href="grid.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Grid</span>
                      </a>
                    </li>
                    <li>
                      <a href="widgets.html" className="auto">
                        <b className="badge bg-dark pull-right">8</b>
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Widgets</span>
                      </a>
                    </li>
                    <li>
                      <a href="components.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Components</span>
                      </a>
                    </li>
                    <li>
                      <a href="list.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>List group</span>
                      </a>
                    </li>
                    <li>
                      <a href="#table" className="auto">
                        <span className="pull-right text-muted">
                          <i className="fa fa-angle-left text"></i>
                          <i className="fa fa-angle-down text-active"></i>
                        </span>
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Table</span>
                      </a>
                      <ul className="nav dker">
                        <li>
                          <a href="table-static.html">
                            <i className="fa fa-angle-right"></i>
                            <span>Table static</span>
                          </a>
                        </li>
                        <li>
                          <a href="table-datatable.html">
                            <i className="fa fa-angle-right"></i>
                            <span>Datatable</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#form" className="auto">
                        <span className="pull-right text-muted">
                          <i className="fa fa-angle-left text"></i>
                          <i className="fa fa-angle-down text-active"></i>
                        </span>
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Form</span>
                      </a>
                      <ul className="nav dker">
                        <li>
                          <a href="form-elements.html">
                            <i className="fa fa-angle-right"></i>
                            <span>Form elements</span>
                          </a>
                        </li>
                        <li>
                          <a href="form-validation.html">
                            <i className="fa fa-angle-right"></i>
                            <span>Form validation</span>
                          </a>
                        </li>
                        <li>
                          <a href="form-wizard.html">
                            <i className="fa fa-angle-right"></i>
                            <span>Form wizard</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="chart.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Chart</span>
                      </a>
                    </li>
                    <li>
                      <a href="portlet.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Portlet</span>
                      </a>
                    </li>
                    <li>
                      <a href="timeline.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Timeline</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="auto">
                    <span className="pull-right text-muted">
                      <i className="fa fa-angle-left text"></i>
                      <i className="fa fa-angle-down text-active"></i>
                    </span>
                    <i className="icon-grid icon"> </i> <span>Pages</span>
                  </a>
                  <ul className="nav dk text-sm">
                    <li>
                      <a href="profile.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Blog</span>
                      </a>
                    </li>
                    <li>
                      <a href="invoice.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Invoice</span>
                      </a>
                    </li>
                    <li>
                      <a href="gmap.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Google Map</span>
                      </a>
                    </li>
                    <li>
                      <a href="jvectormap.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Vector Map</span>
                      </a>
                    </li>
                    <li>
                      <a href="signin.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Signin</span>
                      </a>
                    </li>
                    <li>
                      <a href="signup.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>Signup</span>
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="auto">
                        <i className="fa fa-angle-right text-xs"></i>
                        <span>404</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav text-sm">
                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                  <span className="pull-right">
                    <a href="#">
                      <i className="icon-plus i-lg"></i>
                    </a>
                  </span>
                  Playlist
                </li>
                <li>
                  <a href="#">
                    <i className="icon-music-tone icon"></i>
                    <span>Hip-Pop</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-playlist icon text-success-lter"></i>
                    <b className="badge bg-success dker pull-right">9</b>
                    <span>Jazz</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <footer className="footer hidden-xs no-padder text-center-nav-xs">
          <div className="bg hidden-xs">
            <div className="dropdown dropup wrapper-sm clearfix">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <span className="thumb-sm avatar pull-left m-l-xs">
                  <img src="images/a3.png" className="dker" alt="..." />
                  <i className="on b-black"></i>
                </span>
                <span className="hidden-nav-xs clear">
                  <span className="block m-l">
                    <strong className="font-bold text-lt">John.Smith</strong>
                    <b className="caret"></b>
                  </span>
                  <span className="text-muted text-xs block m-l">
                    Art Director
                  </span>
                </span>
              </a>
              <ul className="dropdown-menu animated fadeInRight aside text-left">
                <li>
                  <span className="arrow bottom hidden-nav-xs"></span>
                  <a href="#">Settings</a>
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
            </div>
          </div>
        </footer>
      </section>
    </aside>
  );
}
