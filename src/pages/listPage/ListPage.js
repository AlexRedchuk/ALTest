import { toNumber } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import JobBar from "../../components/jobBar/JobBar";
import Pagination from "../../components/pagination/Pagination";

import "./ListPage.css";

// Pagination amount of jobs regulation
const maxNumberOfJobs = 6;

const ListPage = ({ listOfJobs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.get("page") && setCurrentPage(toNumber(searchParams.get("page")));
  }, []);

  const maxSize = useMemo(() => {
    return Math.ceil(listOfJobs.length / maxNumberOfJobs);
  }, [listOfJobs]);

  const setPage = (num) => {
    setCurrentPage(num)
    setSearchParams({
      page: num
    })
  }

  if (listOfJobs.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="listPage">
      <div className="listPage_content">
        <div className="listPage_jobBars">
          {listOfJobs
            .slice(
              (currentPage - 1) * maxNumberOfJobs,
              (currentPage - 1) * maxNumberOfJobs + maxNumberOfJobs
            )
            .map((job) => {
              return <JobBar key={job.id} job={job} currentPage={currentPage} />;
            })}
        </div>
        <div className="listPage_pagination">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setPage}
            maxSize={maxSize}
            maxNumberOfJobs={maxNumberOfJobs}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listOfJobs: state.jobs.listOfJobs,
  };
};

export default connect(mapStateToProps, {})(ListPage);
