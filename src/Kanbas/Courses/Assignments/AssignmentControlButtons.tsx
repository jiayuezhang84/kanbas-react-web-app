import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {FaTrashCan} from "react-icons/fa6";
import AssignmentDeletePopup from "./AssignmentDeletePopup";
import {useDispatch} from "react-redux";
import {deleteAssignment} from "./reducer";

export default function AssignmentControlButtons(
    {assignment, removeAssignment}: {assignment: any; removeAssignment: () => void;}
) {
    const dispatch = useDispatch();
    return (
        <div className="float-end">
            <FaTrashCan className="text-danger me-3 mb-1"
                        data-bs-toggle="modal" data-bs-target={`#wd-delete-assignment-dialog-${assignment._id}`}
            />
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            <AssignmentDeletePopup assignment={assignment} deleteAssignment={removeAssignment} />
        </div>
    );}