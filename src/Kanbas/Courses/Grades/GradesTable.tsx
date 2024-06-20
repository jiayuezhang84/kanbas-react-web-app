import React from 'react';
import { useParams } from 'react-router-dom';
import * as db from '../../Database';

export default function GradesTable() {
  const { cid } = useParams(); // 获取当前课程ID

  //  map  enrolled course for current course
  const courseEnrollments = db.enrollments.filter(enrollment => enrollment.course === cid);

  //  map all students for current course
  const students = courseEnrollments.map(enrollment => ({
    ...db.users.find(user => user._id === enrollment.user),
    ...enrollment
  }));

  // map all assignments for current course
  const assignments = db.assignments.filter(assignment => assignment.course === cid);

  // map grades for each student
  const studentGrades = students.map(student => {
    const grades = assignments.map(assignment => {
      const gradeRecord = db.grades.find(grade => grade.student === student.user && grade.assignment === assignment._id);
      console.log(`Grade Record for student ${student.user} and assignment ${assignment._id}:`, gradeRecord);
      return gradeRecord ? gradeRecord.grade : "N/A";
    });
    return { ...student, grades };
  });

  //logs
  // console.log("Course ID:", cid);
  // console.log("Enrollments:", courseEnrollments);
  // console.log("Students:", students);
  // console.log("Assignments:", assignments);
  // console.log("Student Grades:", studentGrades);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead className="bg-light">
          <tr>
            <th><strong>Student Name</strong></th>
            {assignments.map(assignment => (
              <th key={assignment._id}>{assignment.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentGrades.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName} {student.lastName}</td>
              {student.grades.map((grade, gradeIndex) => (
                <td key={gradeIndex}>{grade}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}