import React, { useEffect } from 'react';
import './App.css';
import DetailedPage from './pages/detailedPage/DetailedPage';
import ListPage from './pages/listPage/ListPage';
import {  Route, Routes } from "react-router-dom";
import { getJobs } from "./actions/jobActions";
import { connect } from 'react-redux';

const App = ({getJobs}) => {
  useEffect(() => {
    async function makeFetch() {
      await getJobs();
    }
    makeFetch();
  }, [getJobs]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<ListPage />} />
        <Route path="/detailedView/:id" exact element={<DetailedPage />} />
      </Routes>
    </div>
  );
}

export default connect(null, {getJobs})(App);
