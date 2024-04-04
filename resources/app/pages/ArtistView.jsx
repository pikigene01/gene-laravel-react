import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import { htmlParser } from "../services/html_parser";
import { Link } from "react-router-dom";

export default function ArtistView() {
  const { artistToView } = useContext(AppContext);
  return (
    <div>
      <section className="scrollable wrapper-lg">
        <div className="row">
          <div className="col-sm-9">
            <div className="blog-post">
              <div className="post-item">
                <div className="post-media">
                  <img
                    src={
                      artistToView?.image ? artistToView?.image[3]["#text"] : ""
                    }
                    className="img-full"
                    style={{ height: "40vh" }}
                  />
                </div>
                <div className="caption wrapper-lg">
                  <div className="post-sum">
                    <p>{htmlParser(artistToView?.bio?.summary)}</p>
                  </div>
                  <div className="line line-lg"></div>
                  <div className="text-muted">
                    <i className="fa fa-clock-o icon-muted"></i>Published{" "}
                    {artistToView?.bio?.published}
                    <a href="#" className="m-l-sm">
                      <i className="fa fa-comment-o icon-muted"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <h5 className="font-bold">Stats</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#">
                  <span className="badge pull-right">
                    {artistToView?.stats?.listeners}
                  </span>{" "}
                  Listeners
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="badge pull-right">
                    {artistToView?.stats?.playcount}
                  </span>{" "}
                  Play Count
                </a>
              </li>
            </ul>
            <div className="tags m-b-lg l-h-2x">
              {artistToView?.tags?.tag?.map((tag) => (
                <a href={tag?.url} target="_blank" className="label bg-primary">
                  {tag?.name}
                </a>
              ))}
            </div>
            <h5 className="font-bold">Similar Artists</h5>
            <div>
              {artistToView?.similar?.artist?.map((artist) => (
                <article className="media">
                  <a className="pull-left thumb thumb-wrapper m-t-xs">
                    <img src={artist?.image[2]["#text"]} />
                  </a>
                  <div className="media-body">
                    <Link
                      to={"/artist/view/" + artist?.name}
                      className="font-semibold"
                    >
                      {artist?.name}
                    </Link>
                    <div className="text-xs block m-t-xs"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
