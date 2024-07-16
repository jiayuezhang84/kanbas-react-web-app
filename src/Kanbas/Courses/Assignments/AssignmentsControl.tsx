import { FaPlus} from "react-icons/fa6";
import {Link} from "react-router-dom";

export default function AssignmentsControl() {
    return (
        <div id="wd-modules-controls">
            <div className="form w-25">
                <input type="text" className="form-control float-start form-input" placeholder=" Search..."/>
            </div>
            <button id="wd-add-module-btn" className="btn btn-md btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Group
            </button>
            <Link to={new Date().getTime().toString()}>
                <button
                    id="wd-add-module-btn"
                    className="btn btn-md btn-danger me-1 float-end"
                >
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Assignment
                </button>
            </Link>
        </div>
    );
}