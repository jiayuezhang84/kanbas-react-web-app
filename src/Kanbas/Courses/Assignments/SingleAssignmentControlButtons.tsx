import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
export default function SingleAssignmentControlButtons() {
  return (
    <div className="float-end">
      <IoEllipsisVertical className="float-end mt-2 mx-1 " />
      <GoPlus className="float-end mt-2 mx-1" />
      <button className="btn float-end btn-light btn-outline-secondary rounded-pill text-black mx-2">
        40% of Total
      </button>
    </div>
  );
}