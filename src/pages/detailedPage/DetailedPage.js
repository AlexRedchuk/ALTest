import _ from "lodash";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ApplyButton from "../../components/applyButton/ApplyButton";
import MapWithContacts from "../../components/mapWithContacts/MapWithContacts";
import { ReactComponent as Bookmark } from "../../svg/Bookmark Empty.svg";
import { ReactComponent as ShapeIcon } from "../../svg/Shape icon.svg";
import { ReactComponent as Arrow } from "../../svg/Arrow.svg";

import "./DetailedPage.css";

const DetailedPage = ({ jobs }) => {
  const params = useParams();
  const [job, setJob] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = useMemo(() => !!searchParams.get('page') ? `?page=${searchParams.get('page')}` : '', [searchParams]);

  const calculateDays = useCallback(
    (data) => {
      const diffInMs = new Date() - new Date(data);
      return Math.round(diffInMs / (1000 * 60 * 60 * 24));
    },
    [job]
  );

  const modifySalary = useCallback(
    (salary) => {
      return `€ ${salary.replaceAll("k", " 000").replace("-", "—")}`;
    },
    [job]
  );

  useEffect(() => {
    setJob(jobs.find((el) => el.id === params.id));
  }, [jobs, params]);

  if (_.isEmpty(job)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailedPage">
      <div className="detailedPage_container">
        <div className="detailedPage_content">
          <div className="detailedPage_header">
            <div className="detailedPage__header_titleContainer">
              <span className="detailedPage_headerTitle">Job Details</span>
            </div>
            <div className="detailedPage__header_actionBtns">
              <button className="detailedPage__header_actionBtn">
                <Bookmark />
                <span className="detailedPage__header__actionBtn_text">
                  Save to my list
                </span>
              </button>
              <button className="detailedPage__header_actionBtn">
                <ShapeIcon />
                <span className="detailedPage__header__actionBtn_text">
                  Share
                </span>
              </button>
            </div>
          </div>
          <div className="detailedPage_applyBtn">
            <ApplyButton text={"Apply Now"} />
          </div>
          <div className="detailedPage_topInfo">
            <span className="detailedPage__topInfo_title">{job.title}</span>
            <div className="detailedPage__topInfo_price">
              <span className="datailedPage_regularTitle">
                {modifySalary(job.salary)}
              </span>
              <span className="detailedPage__topInfo__price_text">
                Brutto, per year
              </span>
            </div>
            <span className="detailedPage__topInfo_posted">
              Posted {calculateDays(job.createdAt)} days ago
            </span>
          </div>
          <div className="detailedPage_textContent">
            <span className="datailedPage_regularText">{job.description}</span>
            <div className="detailedPage__textContent_textBlock">
              <span className="datailedPage_regularTitle">
                Responsibilities
              </span>
              <div className="detailedPage__textContent__textBlock_responsibilities">
                <span className="datailedPage_regularText">
                  {job.description}
                </span>
                <span className="datailedPage_regularText">
                  {job.description}
                </span>
              </div>
            </div>
            <div className="detailedPage__textContent_textBlock">
              <span className="datailedPage_regularTitle">
                Compensation & Benefits:
              </span>
              <ul className="detailedPage_benefitsList">
                {job.benefits.map((el, i) => {
                  return (
                    <li key={i} className="detailedPage__benefitsList_item">
                      <span className="datailedPage_regularText">{el}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="detailedPage__textContent_btnContainer">
              <ApplyButton text={"Apply now"} />
            </div>
          </div>
          <div className="detailedPage_additionalInfo">
            <div className="detailedPage_titleContainer">
              <span className="detailedPage_headerTitle">Additional info</span>
            </div>
            <div className="detailedPage__additionalInfo_content">
              <span className="datailedPage_regularText">Employment type</span>
              <div className="detailedPage__additionalInfo__content_tagBoxes">
                {job.employment_type.map((el, i) => (
                  <div key={i} className="detailedPage_tagBox blue">{el}</div>
                ))}
              </div>
            </div>
            <div className="detailedPage__additionalInfo_content">
              <span className="datailedPage_regularText">Benefits</span>
              <div className="detailedPage__additionalInfo__content_tagBoxes">
                {job.benefits.map((el, i) => (
                  <div key={i} className="detailedPage_tagBox yellow">{el}</div>
                ))}
              </div>
            </div>
            <div className="detailedPage_titleContainer">
              <span className="detailedPage_headerTitle">Attached images</span>
            </div>
            <div className="detailedPage__additionalInfo_images">
              <img
                className="detailedPage__additionalInfo_image"
                src={job.pictures[0]}
              />
              <img
                className="detailedPage__additionalInfo_image"
                src={job.pictures[0]}
              />
              <img
                className="detailedPage__additionalInfo_image"
                src={job.pictures[0]}
              />
            </div>
          </div>
        </div>
        <div className="detailedPage__mapTitleContainer">
          <span className="detailedPage_headerTitle">Attached images</span>
        </div>
        <div className="detailedPage_map">
          {/* <span className="detailedPage_headerTitle">Attached images</span> */}
          <MapWithContacts job={job} />
        </div>
      </div>
      <Link to={`/${pageParam}`} className="detailedPage__backButton">
        <Arrow />
        <span className="detailedPage__backButton_text">
          Return to job board
        </span>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.listOfJobs,
  };
};

export default connect(mapStateToProps, {})(DetailedPage);
