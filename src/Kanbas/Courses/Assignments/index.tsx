import AssignmentsControls from "./AssignmentControls";
import { deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { useParams, useNavigate } from "react-router";
import SingleAssignmentControlButtons from "./SingleAssignmentControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "./index.css";
import { FaSortDown } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  return (
    <div id="wd-assignments">
      <AssignmentsControls
        addAssignment={() => {
          navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
        }}
      />
      <ul id="wd-assignments" className="list-group rounded-0 mt-3">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3" />
            <FaSortDown className="mb-3" />
            <strong className="mx-2 mb-2">ASSIGNMENTS</strong>
            <SingleAssignmentControlButtons />
          </div>
          <ul
            className="wd-lessons list-group rounded-0"
            style={{
              borderLeftWidth: "thick",
              borderLeftColor: "green",
              borderLeftStyle: "solid",
            }}
          >
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item d-flex align-items-center p-3"
                >
                  <BsGripVertical className="fs-3" />
                  <TfiWrite className="wd-fg-color-green me-2 fs-3" />
                  <div style={{ display: "inline-flex", flexDirection: "column" }}>
                    <div>{assignment.title}</div>
                    <div>
                      <span style={{ color: "red" }}>Multiple Modules</span> | Not available until {assignment.availableDate}
                    </div>
                    <div>
                      Due {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </div>
                  <div className="ms-auto">
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={(assignmentId) => {
                        dispatch(deleteAssignment(assignmentId));
                      }}
                      editAssignment={() =>
                        navigate(
                          `/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`)} /> </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}