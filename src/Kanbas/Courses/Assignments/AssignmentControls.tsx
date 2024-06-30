import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import "./index.css";

export default function AssignmentsControls({
  addAssignment,
}: {
  addAssignment: () => void;
}) {
  return (
    <div
      id="wd-assignment-controls container"
      className="text-nowrap btn-secondary"
    >
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="position-relative flex-grow-1 me-3">
          <CiSearch
            className="search-icon position-absolute"
            style={{ top: "50%", transform: "translateY(-50%)", left: "10px" }}
          />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="search-input"
            style={{ paddingLeft: "35px" }}
          />
        </div>

        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger me-1"
          onClick={addAssignment}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </div>
    </div>
  );
}