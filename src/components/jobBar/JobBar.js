import React, {  useMemo } from "react";
import { ReactComponent as Location } from "../../svg/Small icon Location.svg";
import { ReactComponent as Bookmark } from "../../svg/Bookmark.svg";
import { ReactComponent as Star } from "../../svg/Star.svg";
import "./JobBar.css";
import { Link } from "react-router-dom";

const JobBar = ({ job }) => {

  const { title, address, name, pictures, createdAt } = job;

  const datePosted = useMemo( () => {
    const diffInMs = new Date() - new Date(createdAt);
    return Math.round(diffInMs / (1000 * 60 * 60 * 24));
  }, [createdAt])

  return (
    <div className="jobBar">
      <div className="jobBar_container">
        <img
          src={pictures[0]}
          alt="No data"
          className="jobBar__mainInfo_avatar"
        />
        <div className="jobBar_content">
          <div className="jobBar_mainInfo">
            <div className="jobBar__mainInfo_content">
              <Link to={`/detailedView/${job.id}`} className="jobBar__mainInfo__content_title">{title}</Link>
              <span className="jobBar__mainInfo__content_department">
                Department name • {name}
              </span>
              <div className="jobBar__mainInfo__content_location">
                <Location className="jobBar__mainInfo__content__location_icon" />
                <span className="jobBar__mainInfo__content__location_text">
                  {address}
                </span>
              </div>
            </div>
          </div>
          <div className="jobBar_sideInfo">
            <div className="jobBar_stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="jobBar__sideInfo_datePosted">
              <Bookmark className="jobBar__sideInfo_icon" />
              <span className="jobBar__sideInfo_text">Posted {datePosted} days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBar;
