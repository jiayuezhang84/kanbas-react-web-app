import "./index.css";
import { useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignment, setAssignment] = useState(
    assignments.find((assignment: any) => assignment._id === aid) || {
      title: "",
      description: "",
      points: "",
      assignTo: "",
      availableDate: "",
      dueDate: "",
    }
  );

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control mb-3"
          value={assignment.title}
          onChange={(e) =>
            setAssignment((v: any) => ({ ...v, title: e.target.value }))
          }
        />
        <textarea
          id="wd-description"
          className="form-control col-12"
          rows={5}
          style={{ resize: "none" }}
          value={assignment.description}
          onChange={(e) =>
            setAssignment((v: any) => ({ ...v, description: e.target.value }))
          }
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-points" className="form-label col-3 text-end">
          Points
        </label>
        <div className="col-9">
          <input
            id="wd-points"
            className="form-control"
            value={assignment.points}
            onChange={(e) =>
              setAssignment((v: any) => ({ ...v, points: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-form-label col-sm-4 text-end">
          Assignment Group
        </label>
        <div className="col-sm-8 ">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-form-label col-sm-4 text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-8">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-form-label col-sm-4 text-end "
        >
          Submission Type
        </label>

        <div className="col-sm-8">
          <div className="p-3 border">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="Online">Online</option>
            </select>

            <div>
              <label className="col-form-label col-sm-4 mb-3">
                Online Entry Options
              </label>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 mt-3">
        <label className="col-form-label text-end col-sm-4">Assign</label>
        <div className="col-sm-8">
          <div className="border p-2">
            <label
              htmlFor="wd-assign-to"
              className="col-form-control text-start col-sm-4"
              style={{ whiteSpace: "nowrap", fontWeight: "bold" }}
            >
              Assign to
            </label>

            <input
              className="form-control mb-3"
              value={assignment.assignTo}
              onChange={(e) =>
                setAssignment((v: any) => ({ ...v, assignTo: e.target.value }))
              }
            />
            <label
              htmlFor="wd-due-date"
              className="form-label"
              style={{ whiteSpace: "nowrap", fontWeight: "bold" }}
            >
              Due
            </label>
            <input
              className="form-control mb-3"
              type="date"
              id="wd-due-date"
              value={assignment.dueDate}
              onChange={(e) =>
                setAssignment((v: any) => ({ ...v, dueDate: e.target.value }))
              }
            />
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="wd-available-from"
                  className="form-label"
                  style={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                >
                  Available from
                </label>
                <input
                  className="form-control mb-3"
                  id="wd-available-from"
                  type="date"
                  value={assignment.availableDate}
                  onChange={(e) =>
                    setAssignment((v: any) => ({
                      ...v,
                      availableDate: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col">
                <label
                  htmlFor="wd-available-until"
                  className="form-label mb-2"
                  style={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                >
                  Until
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  value={assignment.until}
                  className="form-control"
                  style={{ flex: "1" }}
                  onChange={(e) =>
                    setAssignment((v: any) => ({ ...v, until: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-3">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary me-2"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                aid === "new"
                  ? addAssignment({
                      ...assignment,
                      course: cid,
                    })
                  : updateAssignment(assignment)
              );
              navigate(-1);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}