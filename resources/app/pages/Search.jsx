import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export default function Search() {
  const {
    searchResults,
    albums,
    artists,
    searchValue,
    removeFavourateAlbum,
    addFavourateAlbum,
    removeFavourateArtist,
    addFavourateArtist,
  } = useContext(AppContext);
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
                Albums Search {searchValue}
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
                {albums?.map((album) => (
                  <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <div className="item">
                      <div className="pos-rlt">
                        <div className="bottom">
                          <span className="badge bg-info m-l-sm m-b-sm">
                            {album?.name}
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
                            <a href="#">
                              <i className="icon-control-play i-2x"></i>
                            </a>
                          </div>
                          <div className="bottom padder m-b-sm">
                            <a
                              href="#"
                              title="Add this album to your favourates"
                              onClick={() => addFavourateAlbum(album)}
                            >
                              <i className="fa fa-plus-circle"></i>
                            </a>
                          </div>
                        </div>
                        <a href="#">
                          <img
                            src={album?.image[2]["#text"]}
                            alt=""
                            className="r r-2x img-full"
                          />
                        </a>
                      </div>
                      <div className="padder-v">
                        <a
                          href="#"
                          className="text-ellipsis text-xs text-muted"
                        >
                          {album?.name}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5"></div>
              </div>
              <div className="row m-t-lg m-b-lg">
                <div className="col-sm-6"></div>
                <div className="col-sm-6"></div>
              </div>
            </section>
          </section>
        </section>

        <aside className="aside-md bg-light dk" id="sidebar">
          <section class="vbox animated fadeInRight">
            <section class="w-f-md scrollable hover">
              <h4 class="font-thin m-l-md m-t">Fetched Artists</h4>
              <ul class="list-group no-bg no-borders auto m-t-n-xxs">
                {artists?.map((artist) => (
                  <li class="list-group-item">
                    <span class="pull-left thumb-xs m-t-xs avatar m-l-xs m-r-sm">
                      <img
                        src={artist?.image[2]["#text"]}
                        alt="..."
                        class="img-circle"
                      />
                      <i class="on b-light right sm"></i>
                    </span>
                    <div class="clear">
                      <div>
                        <a href="#">{artist?.name}</a>
                      </div>
                      <small
                        class="text-muted"
                        style={{ cursor: "pointer" }}
                        onClick={() => addFavourateArtist(artist)}
                      >
                        Add To Your Favourates
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </aside>
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
