
import { LuFileInput, LuFileOutput } from "react-icons/lu";
import { FaSearch, FaCog } from 'react-icons/fa';
import { FaFilter } from "react-icons/fa";
import GradesTable from "./GradesTable";


function Grades() {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-light ms-2">
          <LuFileInput /> Import
        </button>
        <div className="btn-group ms-2">
          <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
            <LuFileOutput /> Export
          </button>
          <ul className="dropdown-menu">
          </ul>
        </div>
        <button className="btn btn-light ms-2">
          <FaCog />
        </button>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="searchStudents" className="form-label"><strong>Search Students</strong></label>
            <div className="input-group me-0">
              <span className="input-group-text bg-white border-end-0">
                <FaSearch />
              </span>
              <input type="text" id="searchStudents" className="form-control border-start-0" placeholder="Search Students" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-2">
            <label htmlFor="searchAssignments" className="form-label"><strong>Search Assignments</strong></label>
            <input type="text" id="searchAssignments" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-light">
          <FaFilter  className="me-2"/>Apply Filters
        </button>
      </div>
      <div>
        <GradesTable />
      </div>
    </div>
  );
}

export default Grades;
