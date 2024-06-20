import { FaPlus } from "react-icons/fa6";
import SingleAssignmentControlButtons from "./SingleAssignmentControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import "./index.css"
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  return (
      <div id="wd-assignments">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div id="wd-assignments" className="d-flex align-items-center justify-content-end">
    <div className="input-group me-5">
        <span className="input-group-text"><IoSearchOutline /></span>
        <input type="text" className="form-control" placeholder="Search..." />
    </div>
</div>
        <br/><br/><br/><br/>
        <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        <MdArrowDropDown className="me-1 fs-3" />
        ASSIGNMENTS
        <AssignmentControlButtons />
      </div>
      <ul className="wd-lessons list-group rounded-0 wd-padded-left wd-bg-color-green">
  {courseAssignments.map((assignment) => (
    <li key={assignment._id} className="wd-lesson list-group-item d-flex align-items-center p-3">
      <div className="icon-container me-2">
        <BsGripVertical className="fs-3" />
        <TfiWrite className="wd-fg-color-green me-2 fs-3" />
      </div>
      <div className="assignment-details flex-grow-1">
        <strong>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-_id">
            {assignment._id}
          </Link>
        </strong>
        <h6>
          <p className="wd-fg-color-red">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-link">
              Multiple Modules
            </Link>
            <span className="wd-fg-color-black"> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
          </p>
        </h6>
      </div>
      <div className="control-buttons">
        <SingleAssignmentControlButtons />
      </div>
    </li>
  ))}
</ul>
    </li>
  </ul>
</div>
  );
}