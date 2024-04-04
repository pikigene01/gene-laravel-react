import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";
export default function Home() {
  const {
    user,
    songs,
    token,
    artistsFav,
    albumsFav,
    removeFavourateArtist,
    addFavourateArtist,
  } = React.useContext(AppContext);
  return (
    <section id="content">
      <section className="hbox stretch">
        <section>
          <section className="vbox">
            <section className="scrollable padder-lg w-f-md" id="bjax-target">
              <a
                href="#"
                className="pull-right text-muted m-t-lg"
                data-toggle="className:fa-spin"
              >
                <i className="icon-refresh i-lg inline" id="refresh"></i>
              </a>
              <h2 className="font-thin m-b">
                Your Favourates Artists
                <span
                  className="musicbar animate inline m-l-sm"
                  style={{ width: "20px", height: "20px" }}
                >
                  <span className="bar1 a1 bg-primary lter"></span>
                  <span className="bar2 a2 bg-info lt"></span>
                  <span className="bar3 a3 bg-success"></span>
                  <span className="bar4 a4 bg-warning dk"></span>
                  <span className="bar5 a5 bg-danger dker"></span>
                </span>
              </h2>
              <div className="row row-sm">
                {artistsFav?.length <= 0 && (
                  <>
                    <h2>Add Your Favourate Artists To See Them Here</h2>
                    <Link to="/search">
                      {" "}
                      <button className="btn btn-success">Add Artist</button>
                    </Link>
                  </>
                )}
                {artistsFav?.map((artist) => (
                  <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <div className="item">
                      <div className="pos-rlt">
                        <div className="bottom">
                          <span className="badge bg-info m-l-sm m-b-sm">
                            {artist?.name}
                          </span>
                        </div>
                        <div className="item-overlay opacity r r-2x bg-black">
                          <div className="text-info padder m-t-sm text-sm">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o text-muted"></i>
                          </div>
                          <div className="center text-center m-t-n">
                            <Link to={"/artist/view/" + artist?.name}>
                              <i className="icon-control-play i-2x"></i>
                            </Link>
                          </div>
                          <div className="bottom padder m-b-sm">
                            <a
                              href="#"
                              title="Remove this artist"
                              onClick={() => removeFavourateArtist(artist)}
                              className="pull-right"
                            >
                              <i class="fa-solid fa-trash">Delete</i>
                            </a>
                          </div>
                        </div>
                        <a href="#">
                          <img
                            src={artist?.image ?? "/assets/images/a1.png"}
                            alt=""
                            className="r r-2x img-full"
                          />
                        </a>
                      </div>
                      <div className="padder-v">
                        <a href="#" className="text-ellipsis">
                          {artist?.name}
                        </a>
                        <a
                          href="#"
                          className="text-ellipsis text-xs text-muted"
                        >
                          {""}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row m-t-lg m-b-lg">
                <div className="col-sm-6">
                  {!token && (
                    <div className="bg-primary wrapper-md r">
                      <a href="/login-google">
                        <span className="h4 m-b-xs block">
                          <i className="icon-user-follow i-lg"></i> Login or
                          Create account
                        </span>
                        <span className="text-muted">
                          Using Google To Start Creating Your Playlists
                        </span>
                      </a>
                    </div>
                  )}
                </div>
                <div className="col-sm-6"></div>
              </div>
            </section>
          </section>
        </section>

        <aside className="aside-md bg-light dk" id="sidebar"></aside>
      </section>
      <a
        href="#"
        className="hide nav-off-screen-block"
        data-toggle="className:nav-off-screen,open"
        data-target="#nav,html"
      ></a>
    </section>
  );
}
