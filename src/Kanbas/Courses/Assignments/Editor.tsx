export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="assignment">Assignment</option>
              <option value="project">Project</option>
              <option value="quiz">
                Quiz</option>
              <option value="exam">Exam</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="points">Points</option>
              <option value="percentage">Percentage</option>
              <option value="pass">
                P/NP</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="online">Online</option>
              <option value="paper">Paper</option>
            </select>
          </td>
        </tr>

        <tr>
          <td></td>
          <label >Online Entry Options</label> <br />

          <input type="checkbox" name="check-option" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label><br />

          <input type="checkbox" name="check-option" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label><br />

          <input type="checkbox" name="check-option" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label><br />

          <input type="checkbox" name="check-option" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>

          <input type="checkbox" name="check-option" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>

        </tr>

        <tr>
          <td align="right">Assign</td>
          <tr> Assign to</tr>
          <select id="wd-assign-to">
            <option selected value="everyone">Everyone</option>
            <option value="student">Student Only</option>
            <option value="ta">TA</option>
          </select>
        </tr>
        <br />
        <tr>
          <td></td>
          <tr> Due </tr>
          <input type="date"
            id="wd-due-date"
            value="2024-05-21" /><br />
        </tr>
        <br />
        <tr>
          <td></td>
          <tr> Available from</tr>
          <input type="date"
            id="wd-available-from"
            value="2024-05-06" />
            <tr>Until</tr>
            <input type="date"
            id="wd-available-to"
            value="2024-05-22" />
            <br />
        </tr> <br />

        <tr> 
          <td></td>
          <td></td>
        <button>Cancel</button>
        <button>Save</button>
        </tr>
      </table>
    </div>
  );
}
