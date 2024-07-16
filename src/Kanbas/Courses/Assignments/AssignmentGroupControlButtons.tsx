import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentGroupControlButtons() {
    return (
        <div className="float-end">
            <FaPlus className="position-relative ms-2 me-3" style={{bottom: "1px"}}/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}