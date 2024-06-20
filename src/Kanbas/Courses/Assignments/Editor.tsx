import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from "../../Database";
export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = assignments.find(assn => assn._id === aid);
  // console.log("Found assignment:", assignment);
  // console.log("Assignment ID:", aid);
  // console.log("Course ID:", cid);
  if (!assignment) {
    return <div>Assignment not found.</div>;
  }
    return (
      <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">Assignment Name</label>
        <input type="text" className="form-control" id="input1" placeholder={assignment._id} value={assignment.title}/>
      </div>
      <div className="mb-3">
  <div className="form-control" id="wd-description" style={{ minHeight: '150px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
    <p>The assignment is <span style={{ color: 'red' }}>available online</span></p>
    <p></p>
    <p></p>
    <p>Submit a link to the landing page of your Web Application running on <span style={{ textDecoration: 'underline dashed red' }}>Netlify</span>.</p>
    <p></p>
    <p>The landing page should include the following:</p>
    <ul>
      <li>Your full name and section</li>
      <li>Links to each of the lab assignments</li>
      <li>Link to the <span style={{ textDecoration: 'underline dashed red' }}>Kanbas</span> application</li>
      <li>Links to all relevant source code respositories</li>
    </ul>
    <p></p>
    <p><span style={{ backgroundColor: 'lightgrey' }}>The</span> <span style={{ textDecoration: 'underline dashed red' }}>Kanbas</span> application should include a link to navigate back to the landing page.</p>
  </div>
</div>
<div className="mb-3 row">
  <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
  <div className="col-sm-8">
    <input type="text" className="form-control" id="point" value="100" />
  </div>
</div>
      <div className="mb-3 row">
      <label htmlFor="assign-group"
        className="col-sm-4 col-form-label text-end">
        Assignment Group
      </label>
      <div className="col-sm-8" id="wd-assign-group-dropdown">
      <select className="form-select">
         <option selected>ASSIGNMENT</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select>
      </div>
      </div>
      <div className="mb-3 row">
      <label htmlFor="assign-group"
        className="col-sm-4 col-form-label text-end">
        Display Grade as
      </label>
      <div className="col-sm-8" id="wd-assign-group-dropdown">
      <select className="form-select">
         <option selected>Percentage</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select>
      </div>
      </div>
      <div className="mb-3 row">
      <label htmlFor="assign-group"
        className="col-sm-4 col-form-label text-end">
        Submission Type
      </label>
      <div className="col-sm-8" id="wd-assign-group-dropdown" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
      <select className="form-select">
         <option selected>Online</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select><br></br>
      <h5>Online Entry Options</h5>
      <div className="row mb-3">
        <div className="ccol-sm-8">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                   id="r1" />
            <label className="form-check-label" htmlFor="r1">
              Text Entry </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r2" />
            <label className="form-check-label" htmlFor="r2">
              Media Recordings </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r3" />
            <label className="form-check-label" htmlFor="r3">
              Website URL </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r4" />
            <label className="form-check-label" htmlFor="r4">
              Student Annotation </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r5" />
            <label className="form-check-label" htmlFor="r5">
              File Upload </label> <br/>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <div className="mb-3 row">
  <label htmlFor="assign-group" className="col-sm-4 col-form-label text-end">Assign</label>
  <div className="col-sm-8" id="wd-assign-assign-to" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
    <h5>Assign to</h5>
    <input type="text" className="form-control" id="assign-to" value="Everyone" /><br></br>
    <h5>Due</h5>  
    <input type="datetime-local" className="form-control" id="wd-due-date" defaultValue="2024-05-13T23:59" /><br></br>
    <div className="row">
      <div className="col-sm-6">
        <h5>Available from</h5>
        <input type="datetime-local" className="form-control" id="wd-available-from" defaultValue="2024-05-06T12:00" />
      </div>
      <div className="col-sm-6">
        <h5>Until</h5>
        <input type="date" className="form-control" id="wd-available-until"/>
      </div>
    </div>
  </div>
</div>
  <hr />
  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
  <button id="wd-save-btn" className="btn btn-danger me-1 float-end">
        Save
      </button>
      </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
      <button id="wd-cancel-btn" className="btn btn-secondary me-1 float-end">
        Cancel
      </button></Link>
</div>
  );
}  